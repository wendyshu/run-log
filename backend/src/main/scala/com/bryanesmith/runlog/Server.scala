package com.bryanesmith.runlog

import com.bryanesmith.runlog.services.EventsService
import fs2.Task

import scala.util.Properties.envOrNone
import org.http4s.server.blaze.BlazeBuilder
import org.http4s.server.middleware.CORS
import org.http4s.util.StreamApp

object Server extends StreamApp {

  val apiPrefix = "/api/v1"

  val port: Int = envOrNone("HTTP_PORT").fold(8080)(_.toInt)

  def stream(args: List[String]): fs2.Stream[Task, Nothing] = BlazeBuilder.bindHttp(port)
    .mountService(CORS(EventsService.service), apiPrefix)
    .serve
}
