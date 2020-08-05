---
title: Writing an end-to-end test
tags: Nightwatch, mockapi, e2e, axe
---

# Writing an end-to-end test

Front end engineers use end-to-end (e2e) tests in `vets-website` to validate multipage applications with client-side routing. They are primarily used to assert that:
- client applications render their inputs
- client-side navigation occurs when the required fields are populated

## End-to-end testing overview

- `vets-website` uses [Nightwatch](https://nightwatchjs.org) to run some of the older end-to-end tests
  - New end-to-end tests should be written in Cypress going forward.
  - Refer to the [Cypress migration guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-migration-guide.md) to convert old tests or write new tests.
- end-to-end tests are **collocated in application folder** with the application they test
- Two node apps run with the end-to-end tests:
  - `mockapi.js` - hosts mock responses (see [Mocking API responses](#mocking-api-responses))
  - `test-server.js` - builds a server that handles client side routes
- `vets-website` must be started before end-to-end tests are run
- `vets-api` should not be running when end-to-end tests are run

## End-to-end tests conventions

**00-main-test-file.e2e.spec.js**
```
const E2eHelpers = require('platform/testing/e2e/helpers')
const Timeouts = require('platform/testing/e2e/timeouts.js');
const MyApplicationHelpers = require('./my-application-helpers.js');
const testData = require('./schema/maximal-test.json');
const FormsTestHelpers = require('platform/testing/e2e/form-helpers');

// export the test using E2eHelpers.createE2eTest
module.exports = E2eHelpers.createE2eTest(client => {
  // mock api responses
  client.mockData({
  // path to mock
    path: '/v0/my-application',
  // verb to mock
    verb: 'post',
  // mock response
    value: {
      formSubmissionId: '123fake-submission-id-567',
      timestamp: '2016-05-16',
    },
  });

  // use a comment to indicate what page is being tested
  // Introduction page
  client
    .openUrl(`${E2eHelpers.baseUrl}/my-application`)
    // use Timeouts constants
    .waitForElementVisible('body', Timeouts.normal)
    .assert.title('My Application Title | Veterans Affairs')
    .click('.schemaform-start-button');

  // disable scrolling
  FormsTestHelpers.overrideFormsScrolling(client);

  // assert navigation is successful
  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

  // Personal Information page.
  client.expect.element('input[name="root_veteranFullName_first"]').to.be
    .visible;
  // use functions from the helper file to perform all actions on the page
  MyApplicationHelpers.completePersonalInformation(client, testData.data);
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(
    client,
    '/my-application/personal-information',
  );
  ```

**my-application-helpers.js**
```
const mock = require('platform/testing/e2e/mock-helpers');
const Timeouts = require('platform/testing/e2e/timeouts.js');
const Auth = require('platform/testing/e2e/auth.js');
const moment = require('moment');

function completePersonalInformation(client, data) {
  client
    .waitForElementVisible(
      'input[name="root_veteranFullName_first"]',
      Timeouts.normal,
    )
    .fill(
      'input[name="root_veteranFullName_first"]',
      data.veteranFullName.first,
    )
    .fill('input[name="root_veteranFullName_last"]', data.veteranFullName.last)
}
```
_These are recommendations not requirements._

- separate navigation from field input
  - use a **main test file** for navigation, assertions, and calls helpers
  - use a **helper file** for filling out forms
- create separate, numbered **main test files** to organize tests by their focus:
  - **00-all-fields.e2e.spec.js** - required and optional fields
  - **01-required.e2e.spec.js** - only required fields
  - **02-accessibility.e2e.spec.js** - validates accessibility
  - **03-auth.e2e.spec.js** - validates authentication
  - **04-cross-cutting-feature.e2e.spec.js** - validates one feature used across several pages (e.g. save in progress)
- export the end-to-end test using `E2eHelpers.createE2eTest()`- see [Helpers](#helpers)
- group tests by pages and use a comment to indicate what page is being tested
- mock all api responses before starting the test. See [Mocking API responses](#mocking-api-responses)
- use `waitForElementVisible` before interacting with any element on the page
- use `Timeouts` constants for setting timeouts (`platform/testing/e2e/timeouts.js`)
- use helpers for filling data and performing actions on the page
- perform `axeCheck` on the main body of the application on each page - see [Custom Nightwatch commands](#custom-nightwatch-commands)
- assert that each navigation is successful

## Mocking API responses

A mock server runs with the end-to-end tests to allow tests to make production-like calls.

- [`mockData(data, token = nul)`](https://github.com/department-of-veterans-affairs/vets-website/blob/6d97a63bd60d79864661cc757814ca041648d5c9/src/platform/testing/e2e/nightwatch-commands/mockData.js#L12-L14)
  - custom Nighwatch command that mocks the data at the endpoint provided
  - mock server is started as part of the end-to-end testing script

## Custom Nightwatch commands

Nightwatch supports extending its client api with [custom commands](https://nightwatchjs.org/guide/#writing-custom-commands). Custom commands are located in `src/platform/testing/e2e/nightwatch-commands`

_Command commands are available on the Nightwatch client e.g. `client.axeCheck()`. Below are some of the commonly used custom Nightwatch commands._

- [`axeCheck(selector)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/axeCheck.js#L4-L7) - uses the [`axe-core`](https://github.com/dequelabs/axe-core/blob/master/doc/developer-guide.md) library to run a series of tests to check for accessibility of content and functionality for DOM nodes in the selector
- [`clickIf(selector, predicate, ...predicateArguments)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/clickIf.js#L4-L7) - clicks the input at the selector when the predicate returns true
- [`fill(selector, value, callback)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fill.js#L5-L6) - clears the current value and sets to the value provided
- [`fillAddress(baseName, address}`)](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillAddress.js#L2-L5) - fills an address widget with the value provided
- [`fillCheckbox(selector, predicate, ...predicateParams`)](https://github.com/department-of-veterans-affairs/vets-website/blob/343d77e2d7509cdcecee4b41c723d01ca0147881/src/platform/testing/e2e/nightwatch-commands/fillCheckbox.js#L4-L7) - clicks the checkbox at the selector when the predicate returns true
- [`fillDate(fieldName, dateString}`)](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/fillDate.js#L4-L6) - fills a date widget at the fieldName with the dateString provided e.g. 1990-1-28
- [`openUrl(url, disableForesee = true)`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/nightwatch-commands/openUrl.js) - navigates to url and disables user feedback module (this can interfere with end-to-end tests)
- [`selectRadio(fieldName, value)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectRadio.js#L2-L6) - selects the provided option on yesNo widget at the field name
- [`selectYesNo(fieldName, predicate)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6) - selects the provided options on yesNo widget at the field name when the predicate returns true

## Helpers

`src/platform/testing/e2e` contains other useful helpers

- [`createE2eTest(beginApplication)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L78-L81) - disables smooth scrolling and starts and ends test
- [`overrideSmoothFormsScrolling(client)` and `overrideFormsScrolling(client)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/nightwatch-commands/selectYesNo.js#L2-L6) - disables smooth scrolling during end-to-end testing
- [`expectNavigationAwayFrom(client, urlString)`](https://github.com/department-of-veterans-affairs/vets-website/blob/d721cf0581c6b7d6f26903540dfc27f26a16a7be/src/platform/testing/e2e/helpers.js#L94) - asserts the current page is not at the `urlString`
