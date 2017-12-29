package com.bryanesmith.runlog

import com.bryanesmith.runlog.Events.Category.Category
import io.circe.Decoder.Result
import io.circe.{Decoder, Encoder, HCursor, Json}
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

  object Category extends Enumeration {
    type Category = Value
    val Casual: Value   = Value("casual")
    val Speed: Value    = Value("speed")
    val Distance: Value = Value("distance")
    val Race: Value     = Value("race")
  }

  implicit val categoryDecoder: Decoder[Category.Value] = new Decoder[Events.Category.Value] {
    override def apply(c: HCursor): Result[Events.Category.Value] = Decoder.decodeString.map(Category.withName).apply(c)
  }

  implicit val categoryEncoder: Encoder[Category.Value] = new Encoder[Events.Category.Value] {
    override def apply(a: Events.Category.Value): Json = Encoder.encodeString.apply(a.toString)
  }

  object Type extends Enumeration {
    type Type = Value
    val RunCrossTrain: Value  = Value("Run+CrossTrain")
    val Run: Value            = Value
    val CrossTrain: Value     = Value
    val ChangeShoes: Value    = Value
  }

  implicit val typeDecoder: Decoder[Type.Value] = new Decoder[Events.Type.Value] {
    override def apply(c: HCursor): Result[Events.Type.Value] = Decoder.decodeString.map(Events.Type.withName).apply(c)
  }

  implicit val TypeEncoder: Encoder[Type.Value] = new Encoder[Events.Type.Value] {
    override def apply(a: Events.Type.Value): Json = Encoder.encodeString.apply(a.toString)
  }

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
    atType: Type.Value,
    date: String,
    category: Option[Category.Value] = None,
    distance: Option[Double] = None,
    duration: Option[String] = None,
    notes: Option[String] = None,
  )

}

