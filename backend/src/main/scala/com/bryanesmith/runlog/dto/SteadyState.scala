package com.bryanesmith.runlog.dto
import com.bryanesmith.runlog.dto.Events.Run
import com.bryanesmith.runlog.utils.SerializationHelpers._
import io.circe.{Decoder, Encoder, Json}

/**
  * Provides model and serialization/deserialization logic for run data dealing with steady state training.
  */
object SteadyState {

  case class SteadyStateRun (
    category: SteadyStateRunCategory.Value,
    distance: Option[Double] = None,
    duration: Option[String] = None
  ) extends Run

  object SteadyStateRunCategory extends Enumeration {
    type Category = Value
    val Casual: Value   = Value("casual")
    val Speed: Value    = Value("speed")
    val Distance: Value = Value("distance")
  }

  implicit val categoryDecoder: Decoder[SteadyStateRunCategory.Value] = enumerationDecoder(SteadyStateRunCategory)
  implicit val categoryEncoder: Encoder[SteadyStateRunCategory.Value] = enumerationEncoder(SteadyStateRunCategory)

  implicit val encodeSteadyStateData: Encoder[SteadyStateRun] = new Encoder[SteadyStateRun] {

    private val jsonNil = Seq[(String, Json)]()

    def data(d: SteadyStateRun): Seq[(String, Json)] = Seq(
      ("@type", Json.fromString("SteadyStateRun")),
      ("category", Json.fromString(d.category.toString))
    ) ++ d.distance.fold(jsonNil) {
      d: Double => Seq{ ("distance", Json.fromDoubleOrNull(d)) }
    } ++ d.duration.fold(jsonNil) {
      d: String => Seq { ("duration", Json.fromString(d)) }
    }

    def apply(d: SteadyStateRun): Json = Json.obj(data(d) : _*)
  }

  // TODO: add SteadyStateData decoder. See: https://circe.github.io/circe/codec.html
}
