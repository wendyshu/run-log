package com.bryanesmith.runlog.dto

import com.bryanesmith.runlog.utils.SerializationHelpers._
import io.circe.generic.auto._
import io.circe.generic.extras._
import io.circe.literal._
import io.circe.syntax._
import io.circe.{Decoder, Encoder, Json}

object Events {

  def payload(user: User, events: Seq[Event]): Json =
    Json.obj(
      "@context" -> json"""
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

  object Category extends Enumeration {
    type Category = Value
    val Casual: Value   = Value("casual")
    val Speed: Value    = Value("speed")
    val Distance: Value = Value("distance")
    val Race: Value     = Value("race")
  }

  implicit val categoryDecoder: Decoder[Category.Value] = enumerationDecoder(Category)
  implicit val categoryEncoder: Encoder[Category.Value] = enumerationEncoder(Category)

  object Type extends Enumeration {
    type Type = Value
    val RunCrossTrain: Value  = Value("Run+CrossTrain")
    val Run: Value            = Value
    val CrossTrain: Value     = Value
    val ChangeShoes: Value    = Value
  }

  implicit val typeDecoder: Decoder[Type.Value] = enumerationDecoder(Type)
  implicit val typeEncoder: Encoder[Type.Value] = enumerationEncoder(Type)

  @ConfiguredJsonCodec
  case class Event (
    atId: String,
    atType: Type.Value,
    date: String,
    category: Option[Category.Value] = None,
    distance: Option[Double] = None,
    duration: Option[String] = None,
    notes: Option[String] = None,
    favorite: Option[Boolean] = None,
  )

} // Events

