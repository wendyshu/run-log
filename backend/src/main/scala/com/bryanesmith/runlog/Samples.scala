package com.bryanesmith.runlog

import com.bryanesmith.runlog.Events.{Category, Event, Type}

object Samples {

  def events = Seq(
    Event(
      atId = "_:n70",
      atType = Type.RunCrossTrain,
      date =  "2017-12-28",
      category = Some(Category.Casual),
      distance = Some(2),
      duration = Some("PT16M"),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Congested from cold, but feeling better."),
    ),Event(
      atId = "_:n69",
      atType = Type.RunCrossTrain,
      date =  "2017-12-27",
      category = Some(Category.Casual),
      distance = Some(1.5),
      duration = Some("PT11M15S"),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Sick w/ cold."),
    ),Event(
      atId = "_:n68",
      atType = Type.Run,
      date =  "2017-12-25",
      category = Some(Category.Casual),
      distance = Some(4.4),
    ),Event(
      atId = "_:n67",
      atType = Type.Run,
      date =  "2017-12-24",
      category = Some(Category.Distance),
      distance = Some(8.55),
      duration = Some("PT1H14M45S"),
    )
  )
}
