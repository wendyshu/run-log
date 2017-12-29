package com.bryanesmith.runlog

import io.circe._
import io.circe.generic.auto._
import io.circe.syntax._
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

object EventsService {

  def sampleEvents = Seq(
    Run(
      atId = "_:n68",
      date =  "2017-12-25"
    ),Run(
      atId = "_:n67",
      date =  "2017-12-24"
    )
  )

  def payload(events: Seq[Run]) =
    Json.obj("events" -> Json.arr(events.map(_.asJson): _*))

  val service = HttpService {
    case GET -> Root / "events" => Ok(payload(sampleEvents))
  }
}
