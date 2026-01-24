/**
 * @fileoverview Require waitFor around expect assertions after async actions
 * @description In Node 22, the event loop processes microtasks more efficiently,
 * exposing race conditions. This rule warns when expect() is called immediately
 * after fireEvent/userEvent without awaiting.
 */

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require await waitFor() around assertions after async actions',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      missingWaitFor:
        'Consider wrapping this assertion in `await waitFor()`. ' +
        'After actions like fireEvent or userEvent, state updates may be async. ' +
        'See: https://testing-library.com/docs/dom-testing-library/api-async/#waitfor',
    },
    schema: [],
  },

  create(context) {
    const asyncActionPatterns = [
      'fireEvent',
      'userEvent',
    ];

    let lastAsyncActionLine = null;
    let insideWaitFor = false;
    let insideAsyncCallback = false;

    return {
      // Track when we enter a waitFor callback
      'CallExpression[callee.name="waitFor"]': () => {
        insideWaitFor = true;
      },
      'CallExpression[callee.name="waitFor"]:exit': () => {
        insideWaitFor = false;
      },

      // Track when inside an async arrow function or function
      'ArrowFunctionExpression[async=true]': () => {
        insideAsyncCallback = true;
      },
      'ArrowFunctionExpression[async=true]:exit': () => {
        insideAsyncCallback = false;
      },
      'FunctionExpression[async=true]': () => {
        insideAsyncCallback = true;
      },
      'FunctionExpression[async=true]:exit': () => {
        insideAsyncCallback = false;
      },

      // Detect fireEvent.* or userEvent.* calls
      'CallExpression[callee.type="MemberExpression"]': node => {
        const objectName = node.callee.object && node.callee.object.name;
        if (asyncActionPatterns.includes(objectName)) {
          lastAsyncActionLine = node.loc.end.line;
        }
      },

      // Check expect() calls
      'CallExpression[callee.name="expect"]': node => {
        // Only warn if:
        // 1. We're in an async context (async test callback)
        // 2. There was a recent async action (within 5 lines)
        // 3. We're NOT inside a waitFor callback
        if (
          insideAsyncCallback &&
          lastAsyncActionLine !== null &&
          node.loc.start.line - lastAsyncActionLine <= 5 &&
          !insideWaitFor
        ) {
          context.report({
            node,
            messageId: 'missingWaitFor',
          });
        }
      },

      // Reset tracking at the end of each test
      'CallExpression[callee.name=/^(it|test|describe)$/]:exit': () => {
        lastAsyncActionLine = null;
      },
    };
  },
};
