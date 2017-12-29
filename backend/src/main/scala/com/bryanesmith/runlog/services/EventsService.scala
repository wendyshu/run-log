package com.bryanesmith.runlog.services

import com.bryanesmith.runlog.dto.Events
import com.bryanesmith.runlog.utils.Demo
import com.bryanesmith.runlog.utils.JsonOps._
import org.http4s._
import org.http4s.dsl._

object EventsService {

  val service = HttpService {
    case GET -> Root / "events" => Ok {
      Events.payload(Demo.events).format
    }
  }
}
