package com.bryanesmith.runlog.utils

import org.reactormonk.{CryptoBits, PrivateKey}
import java.time._

import com.bryanesmith.runlog.dto.User

object Session {

  // TODO: configurable
  private val key = PrivateKey(scala.io.Codec.toUTF8("abcdefghij1234567890"))

  private val crypto = CryptoBits(key)

  def generateSessionId(user:User): String =
    crypto.signToken(user.id.toString, Clock.systemUTC.millis().toString)

  def validateSessionId(sessionId: String): Option[String] =
    crypto.validateSignedToken(sessionId)

}
