package com.bryanesmith.runlog.services

import com.bryanesmith.runlog.dto.User
import com.bryanesmith.runlog.utils.Session
import io.circe.Json
import org.http4s._
import org.http4s.circe._
import org.http4s.dsl._

object AuthService {
  val service: AuthedService[User] = AuthedService {

    case GET -> Root / "login" as user => Ok(Json.True)
      .addCookie { Cookie("session", Session.generateSessionId(user)) }

    case GET -> Root / "logout" as _ => Ok(Json.True)
      .removeCookie("session")
  }
}
