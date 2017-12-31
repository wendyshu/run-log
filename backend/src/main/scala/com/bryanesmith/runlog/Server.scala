package com.bryanesmith.runlog

import cats.data.Kleisli
import com.bryanesmith.runlog.services.EventsService
import fs2.Task
import org.http4s.server.AuthMiddleware
import org.http4s.{Request, Service}

import scala.util.Properties.envOrNone
import org.http4s.server.blaze.BlazeBuilder
import org.http4s.server.middleware.CORS
import org.http4s.util.StreamApp

object Server extends StreamApp {

  val apiPrefix = "/api/v1"

  val port: Int = envOrNone("HTTP_PORT").fold(8080)(_.toInt)

  case class User(id: Long, name: String)

  // TODO: check credentials
  val authUser: Service[Request, User] = Kleisli { _ => Task.now(User(0, "demo")) }

  private val middleware = AuthMiddleware(authUser)

  private def apiService = CORS(middleware(EventsService.service))

  def stream(args: List[String]): fs2.Stream[Task, Nothing] = BlazeBuilder.bindHttp(port)
    .mountService(apiService, apiPrefix)
    .serve
}
