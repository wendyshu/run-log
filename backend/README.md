# Run Log: backend

## Overview
Backend application for logging runs and tracking progress.

## Setup

### IDE (Optional)

Setup Intellij as IDE.

If first time using Intellij:

1. Install Intellij
    - I'm using version `2017.3`
2. Configure Java, Scala SDKs
    1. Go to File > Project Structure > SDKs, and add a JDK (recommend 1.8 or later)
    2. Go to Preferences > Plugins > Install JetBrains Plugin > Scala (recommended 2017.2.13 or later)

Then setup project:

1. Open Intellij and select `Import Project`
    - If you already have another Intellij project open, select `New` > `Project from Existing Sources...`
2. Select `run-log` > `backend` directory, click `Open`
3. Select `Import project from external model` and select `sbt`. Click `Next`.
4. Click `Finish`

You will probably be asked to select a Scala runtime. Select Scala 2.12.4.

Formatting configuration:

1. Select menu `Intellij IDEA` > `Preferences...`
2. In left menu, navigate to `Editor` > `Code Style` > `Scala`
3. Select tab `Wrapping and Braces`
4. Check `Keep when reformatting` > `Line breaks`
5. Uncheck `Method declaration parameters` > `Align when multiline`
6. Uncheck `Method call arguments` > `Align when multiline`
7. Click `Apply`

### Server

Copy `src/main/resources/application-template.conf` to `src/main/resources/application.conf` and edit as needed.

Running the development server with live reload ("triggered execution" in sbt parlance):

```sh
$ sbt ~reStart
```

(May take several seconds to pick up changes.)

To test:

```sh
$ curl http://localhost:8080/api/v1/events
```

To build and run:

```sh
$ sbt assembly
$ java -jar target/scala-2.12/run-log-assembly-0.0.1-SNAPSHOT.jar # use actual output jar path
```

## Tests

Run using sbt:

```sh
$ sbt test
```

Or run using Intellij:

1. Selecting individual test file or `test` > `scala` directory to run all
2. Select menu `Run` > `Run...`
