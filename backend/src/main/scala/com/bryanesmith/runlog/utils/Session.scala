package com.bryanesmith.runlog.utils

import org.reactormonk.{CryptoBits, PrivateKey}
import java.time._
import com.typesafe.config.ConfigFactory

import com.bryanesmith.runlog.dto.User

object Session {

  private val secret = ConfigFactory.load().getString("secret")
  private val key = PrivateKey(scala.io.Codec.toUTF8(secret))

  private val crypto = CryptoBits(key)

  def generateSessionId(user:User): String =
    crypto.signToken(user.id.toString, Clock.systemUTC.millis().toString)

  def validateSessionId(sessionId: String): Option[String] =
    crypto.validateSignedToken(sessionId)

}
