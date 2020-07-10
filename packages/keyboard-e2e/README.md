# Nightwatch Keyboard-e2e Test Helpers

Keyboard-e2e is a suite of assertions and custom commands for simulating keyboard navigation
in end-to-end (e2e) tests. It is designed to confirm basic interactions with focusable elements
like buttons, links, and text inputs. It also includes helpers for testing checkboxes, radio groups,
and select menus.

**Table of Contents**

- [Nightwatch Keyboard-e2e Test Helpers](#nightwatch-keyboard-e2e-test-helpers)
  - [The Purpose of Keyboard-e2e](#the-purpose-of-keyboard-e2e)
  - [Implementation Details](#implementation-details)
  - [Getting Started](#getting-started)
  - [Configuration](#configuration)
    - [Nightwatch.json (global)](#nightwatchjson-global)
    - [Globals file (local)](#globals-file-local)
  - [Footnotes](#footnotes)

## The Purpose of Keyboard-e2e

Keyboard-e2e was built to simulate how keyboard users navigate web pages. Keyboard navigation is critical for users who do not prefer, or cannot use, a mouse input. Keyboard navigation is also required for screen reader users to navigate web pages.

Keyboard-e2e offers reproducible, [happy path](https://en.wikipedia.org/wiki/Happy_path) tests for common keyboard navigation patterns:

- Assert the correct number of [focusable and tabbable elements](https://allyjs.io/what-is-focusable.html) using [Ally.js](https://allyjs.io/)
- Test [skip navigation links](https://webaim.org/techniques/skipnav/)
- Set focus on native elements like links, buttons, and text inputs using the `TAB` key
- Interact with checkbox groups using `TAB` and `SPACE`
- Interact with radio groups using `ARROW` keys
- Submit forms with `ENTER` or `SPACE`

## Implementation Details

Keyboard-e2e is built on [NightwatchJS](https://nightwatchjs.org/). Keyboard-e2e uses the
[developer API](https://nightwatchjs.org/guide/extending-nightwatch/) to simulate keyboard navigation behavior.

In the future, Keyboard-e2e may be ported to additional test runners, with [Cypress](https://www.cypress.io/)
being the most likely candidate. Cypress contains several core methods that had to be approximated
in Nightwatch.

## Getting Started

1. Clone the [Veteran-Facing Services Tools](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/) repository
2. Open a terminal window and type everything after the `$`
   - **\$** `cd packages/nightwatch-keyboard-e2e`
   - **\$** `npm install`
   - **\$** `npm run start`
3. Open a web browser and type `localhost:8080` into the address bar. Verify the content pages are running correctly.
4. Open a second terminal window.
5. Type **\$** `npm run test` to run all tests
6. Keyboard-e2e uses headless Chrome by default. No browser window will open, but this can be changed in the [Nightwatch.json](#nightwatchjson-global) file.

## Configuration

Keyboard-e2e uses two configuration files, **nightwatch.json** and **test/globals/index.js** to set and control tests.

### Nightwatch.json (global)

Global Nightwatch paths and settings can be adjusted in this file. Please read the [Nightwatch configuration docs](https://nightwatchjs.org/gettingstarted/configuration/) for more options and expected values.

### Globals file (local)

The Nightwatch globals index is located in **test/globals**. Keyboard-e2e uses a plain-old JavaScript object (POJO) to store custom data attributes for each input under test. This file can be modified to use CSS selectors, XPath selectors, or your own naming convention.

The globals file makes it easy to change and refactor the test naming convention(s), instead of having to find and replace strings throughout your test suite.

## Footnotes

Keyboard-e2e was built on a question. Could we automate basic keyboard navigation testing? There weren't a lot of blueprints for this type of thing, so it was assembled one piece, one command, one assertion at a time. The [footnotes file](footnotes.md) contains links to all of the libraries, APIs, and resources used to build Keyboard-e2e.
