package com.bryanesmith.runlog

import io.circe.Json
import io.circe.generic.auto._
import io.circe.generic.extras._
import io.circe.literal._
import io.circe.syntax._

object Events {

  implicit val config: Configuration = Configuration.default.copy(
    transformKeys = {
      case "atId" => "@id"
      case "atType" => "@type"
      case other => other
    }
  )

  def payload(events: Seq[Event]): Json =
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

  //
  // TODO: Event sealed trait with inheritance.
  //
  // Problem: Circe trips up when serializing, nests the "Run" event within
  //          unnecessary object wrapper:
  //
  //          { "Run": { ... } }
  //
  @ConfiguredJsonCodec
  case class Event (
    atId: String,
    atType: String, // TODO: enum
    date: String,
    category: Option[String] = None, // TODO: enum
    distance: Option[Double] = None,
    duration: Option[String] = None,
    notes: Option[String] = None,
  )

}

