package com.bryanesmith.runlog

import io.circe._
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

object Events {
  val service = HttpService {
    case GET -> Root / "events" =>
      Ok(Json.obj("message" -> Json.fromString(s"TODO: implement me")))
  }
}
