package com.bryanesmith.runlog

import cats.data.Kleisli
import com.bryanesmith.runlog.dto.User
import com.bryanesmith.runlog.services.{AuthService, EventsService}
import fs2.Task
import org.http4s.server.AuthMiddleware
import org.http4s._

import scala.util.Properties.envOrNone
import org.http4s.server.blaze.BlazeBuilder
import org.http4s.server.middleware.CORS
import org.http4s.util.StreamApp
import org.http4s.dsl._

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

  val passwordBasedAuth: Service[Request, MaybeUser] = Kleisli { req =>
    Task.now {
      if (Seq("user", "password").forall { k => req.params.get(k).contains("demo") }) {
        Right(User(0, "demo"))
      } else {
        Left("User not found")
      }
    }
  }

  val cookieBasedAuth: Service[Request, MaybeUser] = Kleisli { req =>
    Task.now {
      // TODO: validate cookie
      Right(User(0, "demo"))
    }
  }

  val onFailure: AuthedService[String] = Service { case req => Forbidden(req.authInfo) }

  private def authService = CORS {
    AuthMiddleware(passwordBasedAuth, onFailure) {
      AuthService.service
    }
  }

  private def apiService = CORS {
    AuthMiddleware(cookieBasedAuth, onFailure) {
      EventsService.service // mappend additional api services here
    }
  }

  def stream(args: List[String]): fs2.Stream[Task, Nothing] = BlazeBuilder.bindHttp(port)
    .mountService(authService, apiPrefix)
    .mountService(apiService, apiPrefix)
    .serve
}
