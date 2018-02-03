# Run Log: frontend

## Overview
Frontend application for logging runs and tracking progress.

## Setup

### Configuration

Copy `src/config-template.json` to `src/config.json` and edit as needed.

E.g., when developing, to request api calls from separate backend instance running locally on port 8080:

```json
{
  "baseUrl": "http://localhost:8080"
}
```

Note: do not include a trailing slash.

But in production, when you are running both backend and frontend in same instance, then:

```json
{
  "baseUrl": ""
}
```

## Run

### Development

> **Note**: This documentation is for running the frontend and backend separately for development purposes, in which case you should start the backend server beforehand. See the backend README for instructions.

Start the development server:

```sh
$ yarn && yarn start
```

### Production

> **Note**: See the backend README for instructions on how to deploy both backend and frontend within a single Blaze instance.

To build:

```sh
$ yarn && yarn run build
```

## Tests

```sh
$ yarn test
```
