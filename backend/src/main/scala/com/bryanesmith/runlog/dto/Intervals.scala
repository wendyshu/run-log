package com.bryanesmith.runlog.dto

import com.bryanesmith.runlog.utils.SerializationHelpers.{enumerationDecoder, enumerationEncoder}
import io.circe.{Decoder, Encoder, Json}

/**
  * Provides model and serialization/deserialization logic for run data dealing with interval training.
  */
object Intervals {

  object IntervalsData extends Enumeration {
    type Category = Value
    val Intervals: Value  = Value("intervals")
    val Hills: Value      = Value("hills")
  }

  implicit val intervalsDecoder: Decoder[IntervalsData.Value] = enumerationDecoder(IntervalsData)
  implicit val intervalsEncoder: Encoder[IntervalsData.Value] = enumerationEncoder(IntervalsData)

  case class IntervalsData (
    category: IntervalsData.Value,
    count: Int,
    duration: Option[String] = None,
    rest: Option[String] = None
  )

  implicit val encodeIntervalsData: Encoder[IntervalsData] = new Encoder[IntervalsData] {

    private val jsonNil = Seq[(String, Json)]()

    def data(i: IntervalsData): Seq[(String, Json)] = Seq(
      ("@type", Json.fromString("Intervals")),
      ("category", Json.fromString(i.category.toString)),
      ("count", Json.fromInt(i.count))
    ) ++ i.duration.fold(jsonNil) {
      d: String => Seq { ("duration", Json.fromString(d)) }
    } ++ i.rest.fold(jsonNil) {
      d: String => Seq { ("rest", Json.fromString(d)) }
    }

    def apply(i: IntervalsData): Json = Json.obj(data(i) : _*)
  }

  // TODO: add decoder. See: https://circe.github.io/circe/codec.html
}
