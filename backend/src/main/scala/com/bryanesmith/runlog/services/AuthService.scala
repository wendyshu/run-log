package com.bryanesmith.runlog.services

import com.bryanesmith.runlog.dto.User
import io.circe.Json
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

object AuthService {
  val service: AuthedService[User] = AuthedService {
    // TODO: set cookie upon success
    case GET -> Root / "login" as _ => Ok(Json.True)
  }
}
