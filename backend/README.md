# Run Log: backend

## Overview
Backend application for logging runs and tracking progress.

## Setup

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

Run development server:

```sh
$ sbt run
```

## Tests

Run using sbt:

```sh
$ sbt test
```

Or run using Intellij:

1. Selecting individual test file or `test` > `scala` directory to run all
2. Select menu `Run` > `Run...`
