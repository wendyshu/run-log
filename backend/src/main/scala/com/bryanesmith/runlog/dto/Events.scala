package com.bryanesmith.runlog.dto

import com.bryanesmith.runlog.dto.Intervals._
import com.bryanesmith.runlog.dto.SteadyState._
import com.bryanesmith.runlog.utils.SerializationHelpers._
import io.circe.syntax._
import io.circe.{Decoder, Encoder, Json}

/**
  * Provides model and serialization/deserialization logic for all events.
  */
object Events {

  case class Event (
    atId: String,
    atType: Type.Value,
    date: String,
    runData: Option[Run] = None,
    notes: Option[String] = None,
    favorite: Option[Boolean] = None,
  )

  trait Run

  object Type extends Enumeration {
    type Type = Value
    val RunCrossTrain: Value  = Value("Run+CrossTrain")
    val Run: Value            = Value
    val CrossTrain: Value     = Value
    val ChangeShoes: Value    = Value
  }

  implicit val typeDecoder: Decoder[Type.Value] = enumerationDecoder(Type)
  implicit val typeEncoder: Encoder[Type.Value] = enumerationEncoder(Type)

  // avoids trait wrapper around data during serialization
  implicit val encodeRun: Encoder[Run] = {
    case s: SteadyStateRun => s.asJson
    case i: Intervals => i.asJson
  }

  implicit val encodeEvent: Encoder[Event] = new Encoder[Event] {

    private val jsonNil = Seq[(String, Json)]()

    def data(e: Event): Seq[(String, Json)] = Seq(
      ("@id", Json.fromString(e.atId)),
      ("@type", Json.fromString(e.atType.toString)),
      ("date", Json.fromString(e.date))
    ) ++ e.runData.fold(jsonNil) {
      d: Run => Seq { ("run", d.asJson) }
    } ++ e.notes.fold(jsonNil) {
      n: String => Seq { ("notes", Json.fromString(n)) }
    } ++ e.favorite.fold(jsonNil) {
      f: Boolean => Seq { ("favorite", Json.fromBoolean(f))}
    }

    def apply(e: Event): Json = Json.obj(data(e) : _*)
  }

  // TODO: add Event decoder. See: https://circe.github.io/circe/codec.html
}
