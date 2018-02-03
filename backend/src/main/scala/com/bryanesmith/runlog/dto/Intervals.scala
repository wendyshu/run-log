package com.bryanesmith.runlog.dto

import com.bryanesmith.runlog.dto.Events.Run
import com.bryanesmith.runlog.utils.SerializationHelpers.{enumerationDecoder, enumerationEncoder}
import io.circe.{Decoder, Encoder, Json}

/**
  * Provides model and serialization/deserialization logic for run data dealing with interval training.
  */
object Intervals {

  case class Intervals (
    category: IntervalsCategory.Value,
    count: Int,
    duration: Option[String] = None,
    rest: Option[String] = None
  ) extends Run

  object IntervalsCategory extends Enumeration {
    type Category = Value
    val Intervals: Value  = Value("intervals")
    val Hills: Value      = Value("hills")
  }

  implicit val intervalsDecoder: Decoder[IntervalsCategory.Value] = enumerationDecoder(IntervalsCategory)
  implicit val intervalsEncoder: Encoder[IntervalsCategory.Value] = enumerationEncoder(IntervalsCategory)

  implicit val encodeIntervalsData: Encoder[Intervals] = new Encoder[Intervals] {

    private val jsonNil = Seq[(String, Json)]()

    def data(i: Intervals): Seq[(String, Json)] = Seq(
      ("@type", Json.fromString("Intervals")),
      ("category", Json.fromString(i.category.toString)),
      ("count", Json.fromInt(i.count))
    ) ++ i.duration.fold(jsonNil) {
      d: String => Seq { ("duration", Json.fromString(d)) }
    } ++ i.rest.fold(jsonNil) {
      d: String => Seq { ("rest", Json.fromString(d)) }
    }

    def apply(i: Intervals): Json = Json.obj(data(i) : _*)
  }

  // TODO: add IntervalsData decoder. See: https://circe.github.io/circe/codec.html
}
