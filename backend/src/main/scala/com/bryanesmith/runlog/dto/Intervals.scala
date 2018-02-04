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
    intervalDuration: Option[String] = None,
    intervalSpeed: Option[Double] = None,
    restDuration: Option[String] = None,
    totalDistance: Option[Double] = None
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
    ) ++ i.intervalDuration.fold(jsonNil) {
      d: String => Seq { ("intervalDuration", Json.fromString(d)) }
    } ++ i.intervalSpeed.fold(jsonNil) {
      s: Double => Seq { ("intervalSpeed", Json.fromDoubleOrNull(s)) }
    } ++ i.restDuration.fold(jsonNil) {
      d: String => Seq { ("restDuration", Json.fromString(d)) }
    } ++ i.totalDistance.fold(jsonNil) {
      d: Double => Seq { ("totalDistance", Json.fromDoubleOrNull(d)) }
    }

    def apply(i: Intervals): Json = Json.obj(data(i) : _*)
  }

  // TODO: add IntervalsData decoder. See: https://circe.github.io/circe/codec.html
}
