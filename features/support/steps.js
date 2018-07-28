const { Given, When, Then } = require('cucumber')
const chai = require("chai");
const request = require('superagent');
const { readFileSync } = require('fs');
const { join } = require('path');
const expect = chai.expect;

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

// this file contains the Open API spec, which contains
// examples we use to support testing. 
const vacancySpec = JSON.parse(readFileSync(join(process.cwd(), '/src/vacancy/vacancy-spec.json')));

Given('I have an authorized session', function() {
  // call API endpoints to login etc
});

When('I send a {string} request to {string}', function(method, resource) {
    // we create a request but don't send it yet
    this.req = request(method, baseUrl + resource);
});

Then('I should receive a response with the status {int}', async function(status) {
    // this sends the request 
    // (await will implictly call `then()` on the SuperAgent request object)
    const res = await this.req;
    expect(res.status).to.equal(status);
});

Then('the response body should match the {string} example', async function(exampleName) {
    // it doesn't matter if we all resolve the same request multiple times
    const res = await this.req;

    // this function gets an expected response body from the Open API doc
    const expectedBody = getResponseExample(this.req, res, exampleName);
    expect(expectedBody).to.deep.equal(res.body);
});

function getResponseExample(req, res, exampleName) {
    const {path, method } = res.req;
    const status = res.status.toString();

    try {                    
        return JSON.parse(vacancySpec[path][method].responses[status].examples[exampleName]);    
    } catch(err) {
        console.warn('Oh no!. Couldn\'t get or parse example response');
        return {};
    }
}