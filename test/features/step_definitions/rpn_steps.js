const { Before, Given, When, Then } = require("@cucumber/cucumber");

const { rpn } = require('../../rpn')


let value;

Given('a string {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions

    value = rpn(string)
    return true
  });

When('I operate with the calculator', function () {
    // Write code here that turns the phrase above into concrete actions

    return true;
});

Then('the result should be {int}', function (int) {
    // Then('the result should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions

    return value === int
});