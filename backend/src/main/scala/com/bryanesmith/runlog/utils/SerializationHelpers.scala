package com.bryanesmith.runlog.utils

import io.circe.Decoder.Result
import io.circe.generic.extras.Configuration
import io.circe.{Decoder, Encoder, HCursor, Json}

/**
  * Collection of mostly implicit things that need imported to enable Circe's magic.
  */
object SerializationHelpers {

  /**
    * Import this so auto-serialization uses correct property names for Event
    *   case classes.
    */
  implicit val configuration: Configuration = Configuration.default.copy(
    transformKeys = {
      case "atId" => "@id"
      case "atType" => "@type"
      case other => other
    }
  )

  /**
    * Used to construct a decoder for an enumeration.
    */
  def enumerationDecoder[E <: Enumeration](enum: E): Decoder[E#Value] = new Decoder[E#Value] {
    override def apply(c: HCursor): Result[E#Value] = Decoder.decodeString.map(str => enum.withName(str)).apply(c)
  }

  /**
    * Used to construct an encoder for an enumeration.
    */
  def enumerationEncoder[E <: Enumeration](enum: E): Encoder[E#Value] = new Encoder[E#Value] {
    override def apply(a: E#Value): Json = Encoder.encodeString.apply(a.toString)
  }
}
