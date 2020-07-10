/* eslint-disable valid-typeof */

/**
 * Checks if the query returns an object of focusable element(s). This method can
 * be used as a smoke test to ensure the checks are working properly or to
 * determine if a group of buttons, links, form inputs, etc. are able to
 * receive focus correctly.
 *
 * ```javascript
 *  this.demoTest = function (client) {
 *    client.assert.isAllyFocusableObject("body");
 *  };
 * ```
 *
 * @method isAllyFocusableObject
 * @param {string} [selector] The selector (CSS / Xpath) used to locate the element
 * @param {string} [msg] Optional log message displayed in output. Defaults to this.message.
 * @api assertions
 */
exports.assertion = function isAllyFocusableObject(selector, msg) {
  this.message = msg || `[ALLY.JS] ${selector} returned a focusable object.`;
  this.expected = 'object';
  this.pass = value => typeof value === this.expected;
  this.value = result => result;
  this.command = callback =>
    this.api.allyConfirmFocusableObject(selector, callback);
};
