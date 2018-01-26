package com.bryanesmith.runlog

import cats.data.Kleisli
import cats.implicits._
import com.bryanesmith.runlog.dto.User
import com.bryanesmith.runlog.services.{AuthService, EventsService}
import com.bryanesmith.runlog.utils.Session
import fs2.Task
import fs2.interop.cats._
import org.http4s._
import org.http4s.dsl._
import org.http4s.server.AuthMiddleware
import org.http4s.server.blaze.BlazeBuilder
import org.http4s.server.middleware.CORS
import org.http4s.util.StreamApp

import scala.util.Properties.envOrNone

object Server extends StreamApp {

  type MaybeUser = Either[String,User]

  /**
    * Note:
    *   Service[Request, Response] := Request => Task[Response]
    *                              := Kleisli[Task, Request, Response]
    *
    *   AuthedService[String] := Service[AuthedRequest[String], MaybeResponse]
    *                         := AuthedRequest[String] => Task[MaybeResponse]
    *                         := Kleisli[Task, AuthedRequest[String], MaybeResponse]
    */

  val apiPrefix = "/api/v1"

  val port: Int = envOrNone("HTTP_PORT").fold(8080)(_.toInt)

  var host: String = envOrNone("HTTP_IP").getOrElse("localhost")

  /**
    * Checks if request satisfies successful login.
    */
  private def isSuccessfulLogin(req: Request) =
    Seq("user", "password").forall { k => req.params.get(k).contains("demo") }

  /**
    * Checks if request satisfies cookie-based session requirements.
    */
  private def isSuccessfulSession(req: Request) =
    {
      for {
        cookies <- headers.Cookie.from(req.headers)
        cookie <- cookies.values.find(_.name == "session")
      } yield cookie
    } match {
      case Some(c) => Session.validateSessionId(c.content).isDefined
      case _ => false
    }

  /**
    * Provides logic for authentication middleware.
    */
  val passwordBasedAuth: Service[Request, MaybeUser] = Kleisli { req =>
    Task.now {
      if (isSuccessfulLogin(req) || isSuccessfulSession(req)) {
        Right(User(0, "demo"))
      } else {
        Left("User not found")
      }
    }
  }

  val onFailure: AuthedService[String] = Service { case req => Forbidden(req.authInfo) }

  private def apiService = CORS {
    AuthMiddleware(passwordBasedAuth, onFailure) {
      AuthService.service |+| EventsService.service
    }
  }

  private def staticResource(file: String, request: Request) =
    StaticFile.fromResource("/frontend-dist/" + file, Some(request))
      .getOrElseF(NotFound())

  private val whiteListExtensions = List(".html", ".js", ".css", ".woff2", ".svg", ".ttf", ".eot", ".woff")

  private val staticService = HttpService {
    case request @ GET -> Root =>
      staticResource("index.html", request)
    case request @ GET -> Root / path if whiteListExtensions.exists(path.endsWith) =>
      staticResource(path, request)
  }

  def stream(args: List[String]): fs2.Stream[Task, Nothing] = BlazeBuilder
    .bindHttp(port, host)
    .mountService(apiService, apiPrefix)
    .mountService(staticService)
    .serve
}
