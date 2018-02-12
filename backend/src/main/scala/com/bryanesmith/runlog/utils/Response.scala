package com.bryanesmith.runlog.utils

import com.bryanesmith.runlog.dto.Events._
import com.bryanesmith.runlog.dto.User
import io.circe.Json
import io.circe.generic.auto._
import io.circe.literal._
import io.circe.syntax._

object Response {

  def payload(user: User, events: Seq[Event]): Json =
    Json.obj(
      "@context" ->
        json"""
      {
        "date": "http://www.w3.org/2001/XMLSchema#date",
        "duration": {
          "@type": "http://schema.org/Duration"
        }
      }
      """,
      "user" -> user.asJson,
      "events" -> Json.arr(events.map(_.asJson): _*)
    )

} // Events

