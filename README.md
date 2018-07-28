# cucumber-api-demo

Cucumber.js setup for testing API endpoints with Supertest and Open API specs.

This repo is a proof of comcept.

## Install

`npm install`

## Usage

Start the server:

`npm start`

Then run the tests:

`npm test`

## How it works

1. Cucumber runs features files.
2. Step definitons execute, using [SuperAgent](https://visionmedia.github.io/superagent/) to send HTTP requests
3. Response bodies are asserted using Chai against example data defined in the API's Open API spec.