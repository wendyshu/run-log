package com.bryanesmith.runlog

import io.circe._
import io.circe.generic.auto._
import io.circe.literal._
import io.circe.syntax._
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

import Events._

object EventsService {

  def payload(events: Seq[Event]) =
    Json.obj(
      "@context" -> json"""
      {
        "date": "http://www.w3.org/2001/XMLSchema#date",
        "duration": {
          "@type": "http://schema.org/Duration"
        }
      }
      """,
      "events" -> Json.arr(events.map(_.asJson): _*)
    )

  val service = HttpService {
    case GET -> Root / "events" => Ok(payload(Events.samples))
  }
}
