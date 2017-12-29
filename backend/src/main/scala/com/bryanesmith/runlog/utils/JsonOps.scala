package com.bryanesmith.runlog.utils

import io.circe.{Json, Printer}

object JsonOps {

  /**
    * Operations for formatting json output.
    */
  implicit class JsonFormatOps(j: Json) {

    private val printer = Printer.spaces2.copy(dropNullKeys = true)

    def format: String = printer.pretty(j)
  }
}


