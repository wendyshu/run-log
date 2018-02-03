package com.bryanesmith.runlog.dto
import com.bryanesmith.runlog.dto.Events.RunData
import com.bryanesmith.runlog.utils.SerializationHelpers._
import io.circe.{Decoder, Encoder, Json}

/**
  * Provides model and serialization/deserialization logic for run data dealing with steady state training.
  */
object SteadyState {

  case class SteadyStateData (
    category: SteadyStateCategory.Value,
    distance: Option[Double] = None,
    duration: Option[String] = None
  ) extends RunData

  object SteadyStateCategory extends Enumeration {
    type Category = Value
    val Casual: Value   = Value("casual")
    val Speed: Value    = Value("speed")
    val Distance: Value = Value("distance")
  }

  implicit val categoryDecoder: Decoder[SteadyStateCategory.Value] = enumerationDecoder(SteadyStateCategory)
  implicit val categoryEncoder: Encoder[SteadyStateCategory.Value] = enumerationEncoder(SteadyStateCategory)

  implicit val encodeSteadyStateData: Encoder[SteadyStateData] = new Encoder[SteadyStateData] {

    private val jsonNil = Seq[(String, Json)]()

    def data(d: SteadyStateData): Seq[(String, Json)] = Seq(
      ("@type", Json.fromString("SteadyState")),
      ("category", Json.fromString(d.category.toString))
    ) ++ d.distance.fold(jsonNil) {
      d: Double => Seq{ ("distance", Json.fromDoubleOrNull(d)) }
    } ++ d.duration.fold(jsonNil) {
      d: String => Seq { ("duration", Json.fromString(d)) }
    }

    def apply(d: SteadyStateData): Json = Json.obj(data(d) : _*)
  }

  // TODO: add SteadyStateData decoder. See: https://circe.github.io/circe/codec.html
}
