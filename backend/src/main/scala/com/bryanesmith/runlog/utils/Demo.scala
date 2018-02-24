package com.bryanesmith.runlog.utils

import com.bryanesmith.runlog.dto.Events._
import com.bryanesmith.runlog.dto.Intervals._
import com.bryanesmith.runlog.dto.SteadyState._

object Demo {

  def events = Seq(
    Event(
      atId = "_:n107",
      atType = Type.CrossTrain,
      date = "2018-02-24",
      notes = Some("Press, rows, DL, standing tricep extensions.")
    ),
    Event(
      atId = "_:n106",
      atType = Type.Run,
      date = "2018-02-23",
      runData = Some(
        Intervals(
          category = IntervalsCategory.Intervals,
          count = 3,
          intervalDuration = Some("PT1M38S"),
          intervalSpeed = Some(10.0),
        )
      ),
      notes = Some("Tired from last two days exercise.")
    ),
    Event(
      atId = "_:n105",
      atType = Type.CrossTrain,
      date = "2018-02-22",
      notes = Some("Bench, squat, wall squat, dips/incline PU, DB pull-overs.")
    ),
    Event(
      atId = "_:n104",
      atType = Type.Run,
      date = "2018-02-21",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Distance,
          distance = Some(6.07),
          duration = Some("PT56M35S")
        )
      )
    ),
    Event(
      atId = "_:n103",
      atType = Type.Run,
      date = "2018-02-19",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Speed,
          distance = Some(3.10),
          duration = Some("PT24M07S")
        )
      ),
      notes = Some("Outdoor 5k.")
    ),
    Event(
      atId = "_:n102",
      atType = Type.Run,
      date = "2018-02-17",
      runData = Some(
        Intervals(
          category = IntervalsCategory.Intervals,
          count = 8,
          intervalDuration = Some("PT1M"),
          intervalSpeed = Some(10.1),
          restDuration = Some("PT1M")
        )
      )
    ),
    Event(
      atId = "_:n101",
      atType = Type.CrossTrain,
      date = "2018-02-15",
      notes = Some("Press, bench, squat, rows.")
    ),
    Event(
      atId = "_:n100",
      atType = Type.Run,
      date = "2018-02-14",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.77),
          duration = Some("PT1H09M46S")
        )
      )
    ),
    Event(
      atId = "_:n99",
      atType = Type.Run,
      date = "2018-02-12",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Speed,
          distance = Some(3.16),
          duration = Some("PT24M47S")
        )
      ),
      notes = Some("Outdoor 5k.")
    ),
    Event(
      atId = "_:n98",
      atType = Type.Run,
      date = "2018-02-10",
      runData = Some(
        Intervals(
          category = IntervalsCategory.Intervals,
          count = 8,
          intervalDuration = Some("PT1M"),
          intervalSpeed = Some(10.0),
          restDuration = Some("PT1M")
        )
      )
    ),
    Event(
      atId = "_:n97",
      atType = Type.CrossTrain,
      date = "2018-02-08",
      notes = Some("Press, bent-over row, DL, DB pull-over.")
    ),
    Event(
      atId = "_:n96",
      atType = Type.Run,
      date = "2018-02-07",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Casual,
          distance = Some(2.70),
          duration = Some("PT24M40S")
        )
      ),
      notes = Some("Tight calves, stopped early.")
    ),
    Event(
      atId = "_:n95",
      atType = Type.Run,
      date = "2018-02-06",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Speed,
          distance = Some(3.11),
          duration = Some("PT24M27S")
        )
      ),
      notes = Some("Outdoor 5k. Tired from yesterday, started too strong.")
    ),
    Event(
      atId = "_:n94",
      atType = Type.RunCrossTrain,
      date = "2018-02-05",
      runData = Some(
        SteadyStateRun(
          category = SteadyStateRunCategory.Speed,
          distance = Some(2.25),
          duration = Some("PT16M27S")
        )
      ),
      notes = Some("Attempting 22min 3mi, but couldn't finish. Followed by circuit training.")
    ),
    Event(
      atId = "_:n93",
      atType = Type.RunCrossTrain,
      date = "2018-02-03",
      runData = Some(
        Intervals(
          category = IntervalsCategory.Intervals,
          count = 7,
          intervalDuration = Some("PT1M"),
          intervalSpeed = Some(10.0),
          restDuration = Some("PT1M")
        )
      ),
      notes = Some("First intervals. Just fell short of eight. Bench, squat, invisible chair, dips/include PU.")
    ),
    Event(
      atId = "_:n92",
      atType = Type.Run,
      date = "2018-01-31",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.55),
          duration = Some("PT42M13S")
        )
      ),
    ),
    Event(
      atId = "_:n91",
      atType = Type.RunCrossTrain,
      date = "2018-01-30",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(0.55),
          duration = Some("PT3M18S"),
        )
      ),
      notes = Some("Attempting first 6min mile, but unsuccessful. Press, bent-over row, DL, DB pull-over.")
    ),
    Event(
      atId = "_:n90",
      atType = Type.CrossTrain,
      date = "2018-01-27",
      notes = Some("Bench, squat, invisible chair, dips/incline PU, standing tricep extensions, farmer's walk.")
    ),
    Event(
      atId = "_:n89",
      atType = Type.Run,
      date = "2018-01-26",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.14),
          duration = Some("PT36M16S")
        )
      )
    ),
    Event(
      atId = "_:n88",
      atType = Type.CrossTrain,
      date = "2018-01-25",
      notes = Some("Press, bent-over row, DL, DB pull-over, farmer's walk.")
    ),
    Event(
      atId = "_:n87",
      atType = Type.RunCrossTrain,
      date = "2018-01-22",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(0.6),
          duration = Some("PT3M45S"),
        )
      ),
      notes = Some("9.6mph + circuit training. Couldn't finish the mile.")
    ),
    Event(
      atId = "_:n86",
      atType = Type.Run,
      date = "2018-01-21",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.07),
          duration = Some("PT34M54S")
        )
      )
    ),
    Event(
      atId = "_:n85",
      atType = Type.Run,
      date = "2018-01-20",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M18S"),
        )
      ),
      notes = Some("Warmed up in under 5 min!"),
      favorite = Some(true)
    ),
    Event(
      atId = "_:n84",
      atType = Type.CrossTrain,
      date = "2018-01-18",
      notes = Some("Bench, squat, invisible chair, dips/incline PU, standing tricep extensions.")
    ),
    Event(
      atId = "_:n83",
      atType = Type.CrossTrain,
      date = "2018-01-16",
      notes = Some("Press, row, DL, farmer's walk.")
    ),
    Event(
      atId = "_:n82",
      atType = Type.Run,
      date = "2018-01-15",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.72),
          duration = Some("PT41M17S")
        )
      )
    ),
    Event(
      atId = "_:n81",
      atType = Type.CrossTrain,
      date = "2018-01-13",
      notes = Some("Bench, squat, invisible chair, dips/incline PUs, db tricep ext.")
    ),
    Event(
      atId = "_:n80",
      atType = Type.Run,
      date = "2018-01-12",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.55),
          duration = Some("PT41M33S"),
        )
      ),
      notes = Some("January, and weather in the sixties!")
    ),
    Event(
      atId = "_:n79",
      atType = Type.Run,
      date = "2018-01-10",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.55),
          duration = Some("PT43M40S")
        )
      )
    ),
    Event(
      atId = "_:n78",
      atType = Type.CrossTrain,
      date = "2018-01-09",
      notes = Some("Press, row, DL")
    ),
    Event(
      atId = "_:n77",
      atType = Type.RunCrossTrain,
      date = "2018-01-08",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M22S"),
        )
      ),
      notes = Some("And resumed circuit training.")
    ),
    Event(
      atId = "_:n76",
      atType = Type.CrossTrain,
      date = "2018-01-06",
      notes = Some("Bench, squat, invisible chair, dips/incline PUs, tricep ext, farmer's walk.")
    ),
    Event(
      atId = "_:n75",
      atType = Type.Run,
      date = "2018-01-04",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(0.75),
          duration = Some("PT4M47S"),
        )
      ),
      notes = Some("Couldn't finish mile; need rest day prior to speed run.")
    ),
    Event(
      atId = "_:n74",
      atType = Type.Run,
      date = "2018-01-03",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(2.68),
          duration = Some("PT24M40S"),
        )
      ),
      notes = Some("Run home, cold, but too tired. Took streetcar home.")
    ),
    Event(
      atId = "_:n73",
      atType = Type.CrossTrain,
      date = "2018-01-02",
      notes = Some("Press, rows, DL, farmer's walk")
    ),
    Event(
      atId = "_:n72",
      atType = Type.Run,
      date = "2018-01-01",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(5.98),
          duration = Some("PT53M59S")
        )
      )
    ),
    Event(
      atId = "_:n71",
      atType = Type.CrossTrain,
      date = "2017-12-30",
      notes = Some("Bench, Squat, Press, Dips, Farmer's Walk, Incline Pushups/Invisible Chair."),
    ),
    Event(
      atId = "_:n70",
      atType = Type.RunCrossTrain,
      date = "2017-12-28",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(2),
          duration = Some("PT16M"),
        )
      ),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Congested from cold, but feeling better."),
    ),
    Event(
      atId = "_:n69",
      atType = Type.RunCrossTrain,
      date = "2017-12-27",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(1.5),
          duration = Some("PT11M15S"),
        )
      ),
      notes = Some("Ashland, KY. Treadmill, 1° incline. Sick w/ cold."),
    ),
    Event(
      atId = "_:n68",
      atType = Type.Run,
      date = "2017-12-25",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.40),
        )
      ),
      notes = Some("Christmas run with Matt, David, dad.")
    ),
    Event(
      atId = "_:n67",
      atType = Type.Run,
      date = "2017-12-24",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(8.55),
          duration = Some("PT1H14M45S"),
        )
      )
    ),
    Event(
      atId = "_:n66",
      atType = Type.CrossTrain,
      date = "2017-12-21"
    ),
    Event(
      atId = "_:n65",
      atType = Type.RunCrossTrain,
      date = "2017-12-19",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M27S"),
        )
      ),
      notes = Some("My first 6:30 mile."),
    ),
    Event(
      atId = "_:n64",
      atType = Type.Run,
      date = "2017-12-18",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.07),
          duration = Some("PT34M22S"),
        )
      )
    ),
    Event(
      atId = "_:n63",
      atType = Type.RunCrossTrain,
      date = "2017-12-16",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3.00),
          duration = Some("PT22M47S"),
        )
      ),
      favorite = Some(true),
      notes = Some("Three-mile run to kick off workout."),
    ),
    Event(
      atId = "_:n62",
      atType = Type.Run,
      date = "2017-12-11",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.77),
          duration = Some("PT1H11M54S"),
        )
      )
    ),
    Event(
      atId = "_:n61",
      atType = Type.RunCrossTrain,
      date = "2017-12-09",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(0.68),
          duration = Some("PT4M23S"),
        )
      )
    ),
    Event(
      atId = "_:n60",
      atType = Type.RunCrossTrain,
      date = "2017-12-07",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3),
          duration = Some("PT23M3S"),
        )
      )
    ),
    Event(
      atId = "_:n59",
      atType = Type.Run,
      date = "2017-12-06",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.77),
          duration = Some("PT1H13M35S"),
        )
      )
    ),
    Event(
      atId = "_:n58",
      atType = Type.RunCrossTrain,
      date = "2017-12-02",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M31S"),
        )
      )
    ),
    Event(
      atId = "_:n57",
      atType = Type.RunCrossTrain,
      date = "2017-11-30",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3),
          duration = Some("PT23M23S"),
        )
      )
    ),
    Event(
      atId = "_:n56",
      atType = Type.Run,
      date = "2017-11-29",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.8),
          duration = Some("PT44M53S"),
        )
      )
    ),
    Event(
      atId = "_:n55",
      atType = Type.Run,
      date = "2017-11-27",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.48),
          duration = Some("PT43M00S"),
        )
      )
    ),
    Event(
      atId = "_:n54",
      atType = Type.Run,
      date = "2017-11-26",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.21),
          duration = Some("PT36M56S"),
        )
      )
    ),
    Event(
      atId = "_:n53",
      atType = Type.RunCrossTrain,
      date = "2017-11-25",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M35S"),
        )
      )
    ),
    Event(
      atId = "_:n52",
      atType = Type.RunCrossTrain,
      date = "2017-11-22",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3),
          duration = Some("PT23M41S"),
        )
      )
    ),
    Event(
      atId = "_:n51",
      atType = Type.Run,
      date = "2017-11-20",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(12.21),
          duration = Some("PT1H55M"),
        )
      ),
      notes = Some("Doesn't include short walk & stretch break."),
      favorite = Some(true),
    ),
    Event(
      atId = "_:n50",
      atType = Type.RunCrossTrain,
      date = "2017-11-18",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3),
          duration = Some("PT24M"),
        )
      )
    ),
    Event(
      atId = "_:n49",
      atType = Type.RunCrossTrain,
      date = "2017-11-16",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M40S"),
        )
      )
    ),
    Event(
      atId = "_:n48",
      atType = Type.Run,
      date = "2017-11-13",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.58),
          duration = Some("PT40M50S"),
        )
      )
    ),
    Event(
      atId = "_:n47",
      atType = Type.Run,
      date = "2017-11-11",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(2),
          duration = Some("PT17M08S"),
        )
      )
    ),
    Event(
      atId = "_:n46",
      atType = Type.RunCrossTrain,
      date = "2017-11-09",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(0.6),
          duration = Some("PT4M"),
        )
      )
    ),
    Event(
      atId = "_:n45",
      atType = Type.Run,
      date = "2017-11-07",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(3.99),
          duration = Some("PT37M40S"),
        )
      )
    ),
    Event(
      atId = "_:n44",
      atType = Type.Run,
      date = "2017-11-06",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.65),
          duration = Some("PT46M30S"),
        )
      )
    ),
    Event(
      atId = "_:n43",
      atType = Type.Run,
      date = "2017-11-03",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.65),
          duration = Some("PT1H15M"),
        )
      )
    ),
    Event(
      atId = "_:n42",
      atType = Type.Run,
      date = "2017-11-01",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(6.04),
          duration = Some("PT55M15S"),
        )
      )
    ),
    Event(
      atId = "_:n41",
      atType = Type.Run,
      date = "2017-10-30",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(6.04),
          duration = Some("PT54M15S"),
        )
      )
    ),
    Event(
      atId = "_:n40",
      atType = Type.RunCrossTrain,
      date = "2017-10-28",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M44S"),
        )
      )
    ),
    Event(
      atId = "_:n39",
      atType = Type.Run,
      date = "2017-10-25",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.77),
          duration = Some("PT1H20M"),
        )
      )
    ),
    Event(
      atId = "_:n38",
      atType = Type.Run,
      date = "2017-10-22",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(11.52),
          duration = Some("PT1H52M30S"),
        )
      )
    ),
    Event(
      atId = "_:n37",
      atType = Type.RunCrossTrain,
      date = "2017-10-21",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M49S"),
        )
      )
    ),
    Event(
      atId = "_:n36",
      atType = Type.Run,
      date = "2017-10-18",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.37),
          duration = Some("PT1H19M20S"),
        )
      ),
      notes = Some("commute, running pack"),
    ),
    Event(
      atId = "_:n35",
      atType = Type.Run,
      date = "2017-10-15",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(8.56),
          duration = Some("PT1H23M"),
        )
      )
    ),
    Event(
      atId = "_:n34",
      atType = Type.RunCrossTrain,
      date = "2017-10-14",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(2),
          duration = Some("PT16M"),
        )
      )
    ),
    Event(
      atId = "_:n33",
      atType = Type.CrossTrain,
      date = "2017-10-11"
    ),
    Event(
      atId = "_:n32",
      atType = Type.Run,
      date = "2017-10-08",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(8.70),
          duration = Some("PT1H24M09S"),
        )
      )
    ),
    Event(
      atId = "_:n31",
      atType = Type.CrossTrain,
      date = "2017-10-07"
    ),
    Event(
      atId = "_:n30",
      atType = Type.RunCrossTrain,
      date = "2017-10-05",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(1),
          duration = Some("PT8M"),
        )
      )
    ),
    Event(
      atId = "_:n29",
      atType = Type.Run,
      date = "2017-10-04",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(5.41),
          duration = Some("PT53M44S"),
        )
      )
    ),
    Event(
      atId = "_:n28",
      atType = Type.RunCrossTrain,
      date = "2017-10-02",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(2),
          duration = Some("PT17M22S"),
        )
      )
    ),
    Event(
      atId = "_:n27",
      atType = Type.Run,
      date = "2017-10-01",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.33),
          duration = Some("PT1H09M20S"),
        )
      )
    ),
    Event(
      atId = "_:n25",
      atType = Type.RunCrossTrain,
      date = "2017-09-30",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(3),
          duration = Some("PT25M21S"),
        )
      )
    ),
    Event(
      atId = "_:n24",
      atType = Type.Run,
      date = "2017-09-24",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(7.71),
          duration = Some("PT1H14M30S"),
        )
      )
    ),
    Event(
      atId = "_:n23",
      atType = Type.RunCrossTrain,
      date = "2017-09-23",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(2),
          duration = Some("PT16M"),
        )
      )
    ),
    Event(
      atId = "_:n21",
      atType = Type.RunCrossTrain,
      date = "2017-09-21",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT6M58S"),
        )
      )
    ),
    Event(
      atId = "_:n19",
      atType = Type.Run,
      date = "2017-09-20",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(5.43),
          duration = Some("PT49M40S"),
        )
      )
    ),
    Event(
      atId = "_:n18",
      atType = Type.Run,
      date = "2017-09-17",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(11.01),
          duration = Some("PT1H56M"),
        )
      )
    ),
    Event(
      atId = "_:n17",
      atType = Type.Run,
      date = "2017-09-15",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(6.02),
          duration = Some("PT60M"),
        )
      )
    ),
    Event(
      atId = "_:n16",
      atType = Type.CrossTrain,
      date = "2017-09-14",
      notes = Some("Lift: db press, bench, dl"),
    ),
    Event(
      atId = "_:n15",
      atType = Type.Run,
      date = "2017-09-13",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(5.52),
          duration = Some("PT53M30S"),
        )
      )
    ),
    Event(
      atId = "_:n14",
      atType = Type.CrossTrain,
      date = "2017-09-11",
      notes = Some("Circuit training: 2 sets"),
    ),
    Event(
      atId = "_:n13",
      atType = Type.Run,
      date = "2017-09-10",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(10.45),
          duration = Some("PT1H46M"),
        )
      )
    ),
    Event(
      atId = "_:n12",
      atType = Type.CrossTrain,
      date = "2017-09-09",
      notes = Some("Lift: db press, squat, bench, dl"),
    ),
    Event(
      atId = "_:n11",
      atType = Type.Run,
      date = "2017-09-03",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(9.01),
          duration = Some("PT1H30M50S"),
        )
      )
    ),
    Event(
      atId = "_:n10",
      atType = Type.Run,
      date = "2017-09-02",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT7M13S"),
        )
      ),
      notes = Some("Treadmill, 1° incline, 8.3mph"),
    ),
    Event(
      atId = "_:n9",
      atType = Type.Run,
      date = "2017-08-30",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.64),
          duration = Some("PT45M44S"),
        )
      ),
      notes = Some("Burdened: running bag w/ 15MBP. From office to home."),
    ),
    Event(
      atId = "_:n7",
      atType = Type.RunCrossTrain,
      date = "2017-08-28",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Speed,
          distance = Some(1),
          duration = Some("PT7M24S"),
        )
      ),
      notes = Some("Treadmill, 1° incline; 2 sets circuit training"),
    ),
    Event(
      atId = "_:n6",
      atType = Type.Run,
      date = "2017-08-27",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Distance,
          distance = Some(8.56),
          duration = Some("PT1H22M30S"),
        )
      ),
      notes = Some("All four quadrants DC"),
    ),
    Event(
      atId = "_:n5",
      atType = Type.Run,
      date = "2017-08-24",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.14),
          duration = Some("PT40M35S"),
        )
      ),
      notes = Some("C St to Union Station to H St."),
    ),
    Event(
      atId = "_:n4",
      atType = Type.Run,
      date = "2017-08-22",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.14),
          duration = Some("PT40M50S"),
        )
      ),
      notes = Some("C St to Union Station to H St."),
    ),
    Event(
      atId = "_:n3",
      atType = Type.Run,
      date = "2017-08-18",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(5.23),
          duration = Some("PT51M30S"),
        )
      ),
      notes = Some("Ann Arbor: Stadium to TJ to Washtenaw to South U."),
    ),
    Event(
      atId = "_:n2",
      atType = Type.Run,
      date = "2017-08-16",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(2.67),
        )
      )
    ),
    Event(
      atId = "_:n1",
      atType = Type.Run,
      date = "2017-08-15",
      runData = Some(
        SteadyStateRun (
          category = SteadyStateRunCategory.Casual,
          distance = Some(4.39),
        )
      ),
      notes = Some("Ann Arbor: Main to Stadium to mall."),
    )
  )
}
