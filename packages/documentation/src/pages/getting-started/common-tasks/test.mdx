---
title: Running tests
tags: unit test, lint, end to end test, accessibility, 508
---

# Running tests

You can run the following types of tests when building on VA.gov.

## Prerequisite

- [Run or build](/getting-started/common-tasks/run-build) the application.

## Test commands

| Test type | Test all | Test one | Requires local build to run| Test target | Modules used |
| --- | --- | --- | --- | --- | --- |
| Unit | `yarn test:unit` | `yarn test:unit ./PATH-TO-TEST-FILE` | no | `*.unit.spec.js(x)` | [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](https://sinonjs.org/), [JSDom](https://github.com/jsdom/jsdom), [Enzyme](https://airbnb.io/enzyme/) |
| Lint | `yarn lint` | `yarn lint:js` or `yarn lint:sass` | no | `*.js`, `*.scss` | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [sass-lint](https://github.com/sasstools/sass-lint) |
| End to end | `yarn test:e2e` | `yarn test:e2e ./PATH-TO-TEST-FILE` | yes | `*.e2e.spec.js` | [Nightwatch.js](http://nightwatchjs.org/) |
 | Accessibility | `yarn test:accessibility` | | yes | all pages in `sitemap.xml` | [Nightwatch.js](http://nightwatchjs.org/) |

## Requires local build or run

Some tests require [running or building](/getting-started/common-tasks/run-build) VA.gov:
- **Testing while running `watch` task**: Tests will automatically be run against the site running on that server.
- **Testing with a local build**: If nothing is running at `http://localhost:3001`, tests start an Express server and serve the build output in `build/localhost`.

## Unit tests

- Run all [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/)/[Sinon](https://sinonjs.org/)-based unit tests with the file extension `.unit.spec.js(x)`
- Use [JSDom](https://github.com/jsdom/jsdom) and [Enzyme](https://airbnb.io/enzyme/) to test browser and React behavior
- Are located in `test/` directories near the code they're testing in `src/`

## Linting

- Verify consistency of JavaScript
- Enforce code formatting rules
- Automatically run on `git commit` as a precommit hook

Set up your editor to show ESLint errors automatically as you're writing code. This makes the linter far less annoying in day to day use. ESLint has [integrations](https://eslint.org/docs/user-guide/integrations) for nearly all popular editors.

## End to end tests

- Run all [Nightwatch.js](http://nightwatchjs.org/) tests in headless Chrome with the file extension `.e2e.spec.js`
- Simulate an actual user completing tasks in the tools and services
- Are located in `test/` directories near the application they're testing in `src/`

End to end tests will only pass if they are run against their mock API server. This server is started by the end to end test automatically when vets-api is **not** running.

## Accessibility tests

- A variation of e2e tests that run aXe against the content pages running in Chrome.
