val SbtAssembly = "0.14.6"
val SbtRevolverVersion = "0.9.1"

addSbtPlugin("com.eed3si9n" % "sbt-assembly" % SbtAssembly)     // fat jars
addSbtPlugin("io.spray" % "sbt-revolver" % SbtRevolverVersion)  // triggered execution
