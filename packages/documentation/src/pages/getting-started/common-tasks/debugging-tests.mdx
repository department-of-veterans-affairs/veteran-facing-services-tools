---
title: Debugging tests
tags: unit test, debugging, mocha, e2e
---

# Debugging tests

*** Unit Tests ***

- You can put a console.log in your test code. When you run the test, the output will be in the command line.
- Use Chrome devtools to debug unit tests
    1. Go to [chrome://inspect/](chrome://inspect/).
    2. Add a `debugger` statement in your test code and if you want to run only your test add the **.only** on your test like so. Make sure to remove the **.only** once you are done.
      ```
        it.only('testing something', () => {
          debugger

          expect(value).to.eq(true);
        })
      ```
    3. run in the terminal
      ```
        $ BABEL_ENV=test node_modules/.bin/mocha --inspect-brk --opts src/platform/testing/unit/mocha.opts --recursive '{test,src}/**/*.unit.spec.js?(x)' src/platform/testing/unit/helper.js
      ```
    4. Go to your Node Chrome Developer Tools. Under `Remote Target` you should see your test running. Click on the link where your test is running to open the debugger tool.
    5. You will want to press the debugger play button to start the program. It will initially pause on the first line of code.
    6. It might take awhile for the tests to setup, just be patient and eventually it will run.
    7. Once the test runs, your code should break at your debugger statement.
- VSCode's debugging tool for unit tests
    - Add this `Mocha Tests` configuration to your `.vscode/launch.json` file
      ```
        {
          "version": "0.2.0",
          "configurations": [
              {
                  "type": "node",
                  "request": "launch",
                  "name": "Mocha Tests",
                  "env": {"BABEL_ENV": "test"},
                  "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/mocha",
                  "runtimeArgs": [
                      "--inspect",
                      "--opts",
                      "${workspaceFolder}/src/platform/testing/unit/mocha.opts",
                      "--recursive",
                      "${workspaceFolder}/{test,src}/**/*.unit.spec.js?(x)",
                      "${workspaceFolder}/src/platform/testing/unit/helper.js"
                  ],
                  "port": 9229
              }
          ]
        }
      ```
    - Now you can add breakpoints or debugger statements to debug your code through the VSCode debugger tools.

*** End to End tests

- It's possible to set an infinite pause (`.pause()`) in the test code and then see what's happening at a given point in the browser where the test is running.

    ```
      client
        .openUrl('http://localhost:3000')
        .waitForElementVisible('body', Timeouts.normal)
        .pause()
        .click('.submit_button')
    ```
- Using Node Chrome DevTools. You can add a (`.perform`) method and either console.log or add a debugger statement to debug your code in the callback function.
    1. add a perform method in your code.
    ```
    client
      .openUrl('http://localhost:3000')
      .waitForElementVisible('body', Timeouts.normal)
      .perform(() => {
        console.log(testData);

        debugger
      })
      .click('.submit_button')
    ```
    2. open up [chrome://inspect](chrome://inspect) in your browser.
    3. In your terminal run. You can pass in a specific file path to test after the `nightwatch.js` or leave it blank to run all tests.
    ```
    $ BABEL_ENV=test WEB_PORT=3001 node --inspect-brk node_modules/nightwatch/bin/runner.js -c config/nightwatch.js [optional file to test]
    ```
    4. Go to your Node Chrome Developer Tools. Under `Remote Target` you should see your test running. Click on the link where your test is running to open the debugger tool.
    5. You will want to press the debugger play button to start the program. It will initially pause on the first line of code.
    6. after the program starts it should pause at your debugger statement or you should see your console.logs in the console.
