package com.bryanesmith.runlog

import io.circe.{Json, Printer}

object JSON {

  private val printer = Printer.noSpaces.copy(dropNullKeys = true)

  def format(json:Json): String = printer.pretty(json)
}
