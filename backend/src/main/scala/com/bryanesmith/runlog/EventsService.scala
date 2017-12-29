package com.bryanesmith.runlog

import org.http4s._
import org.http4s.dsl._

object EventsService {

  val service = HttpService {
    case GET -> Root / "events" => Ok {
      JSON.format(Events.payload(Samples.events))
    }
  }
}
