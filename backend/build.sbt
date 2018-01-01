organization := "com.example"
name := "run-log"
version := "0.0.1-SNAPSHOT"
scalaVersion := "2.12.4"

val CirceVersion      = "0.8.0"
val CryptoBitsVersion = "1.1"
val Http4sVersion     = "0.17.6"
val LogbackVersion    = "1.2.3"
val Specs2Version     = "4.0.2"
val Typesafe          = "1.3.1"

// TODO: this should work by default!
watchSources += baseDirectory.value / "src" / "main" / "scala"
watchSources += baseDirectory.value / "src" / "main" / "resources"

addCompilerPlugin(
  // Enables Circe's @ConfiguredJsonCodec
  "org.scalamacros" % "paradise" % "2.1.0" cross CrossVersion.full,
)

libraryDependencies ++= Seq(
  "com.typesafe"    % "config"                % Typesafe,
  "ch.qos.logback"  %  "logback-classic"      % LogbackVersion,
  "io.circe"        %% "circe-generic"        % CirceVersion,
  "io.circe"        %% "circe-generic-extras" % CirceVersion,
  "io.circe"        %% "circe-literal"        % CirceVersion,
  "org.http4s"      %% "http4s-blaze-server"  % Http4sVersion,
  "org.http4s"      %% "http4s-circe"         % Http4sVersion,
  "org.http4s"      %% "http4s-dsl"           % Http4sVersion,
  "org.http4s"      %% "http4s-server"        % Http4sVersion,
  "org.specs2"      %% "specs2-core"          % Specs2Version % "test",
  "org.reactormonk" %% "cryptobits"           % CryptoBitsVersion,
)
