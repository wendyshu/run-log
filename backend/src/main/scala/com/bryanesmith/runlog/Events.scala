package com.bryanesmith.runlog

import io.circe.generic.extras._

object Events {

  implicit val config: Configuration = Configuration.default.copy(
    transformKeys = {
      case "atId" => "@id"
      case "atType" => "@type"
      case other => other
    }
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

  def samples = Seq(
    Event(
      atId = "_:n70",
      atType = "Run+CrossTrain",
      date =  "2017-12-28",
      category = Some("casual"),
      distance = Some(2),
      duration = Some("PT16M"),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Congested from cold, but feeling better."),
    ),Event(
      atId = "_:n69",
      atType = "Run+CrossTrain",
      date =  "2017-12-27",
      category = Some("casual"),
      distance = Some(1.5),
      duration = Some("PT11M15S"),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Sick w/ cold."),
    ),Event(
      atId = "_:n68",
      atType = "Run",
      date =  "2017-12-25",
      category = Some("casual"),
      distance = Some(4.4),
    ),Event(
      atId = "_:n67",
      atType = "Run",
      date =  "2017-12-24",
      category = Some("distance"),
      distance = Some(8.55),
      duration = Some("PT1H14M45S"),
    )
  )

}

