package com.bryanesmith.runlog.services

import com.bryanesmith.runlog.dto.User
import io.circe.Json
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

object AuthService {
  val service: AuthedService[User] = AuthedService {

    case GET -> Root / "login" as _ => Ok(Json.True)
      .addCookie("session" ,"abc123") // TODO: signed cookie

    case GET -> Root / "logout" as _ => Ok(Json.True)
      .removeCookie("session")
  }
}
