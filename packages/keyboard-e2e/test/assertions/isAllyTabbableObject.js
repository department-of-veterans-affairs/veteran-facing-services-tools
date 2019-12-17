/**
 * Checks if the query returns an object of tabbable element(s). This method can
 * be used as a smoke test to ensure the checks are working properly or to
 * determine if a group of buttons, links, form inputs, etc. can be tabbed
 * to either in the normal tab order or programmatically with tabIndex="-1"
 * and the JS .focus() method.
 *
 * ```javascript
 *  this.demoTest = function (client) {
 *    client.assert.isAllyTabbableObject("body");
 *  };
 * ```
 *
 * @method isAllyTabbableObject
 * @param {string} [selector] The selector (CSS / Xpath) used to locate the element
 * @param {string} [msg] Optional log message displayed in output. Defaults to this.message.
 * @api assertions
 */
exports.assertion = function isAllyTabbableObject(selector, msg) {
  this.message = msg || `[ALLY.JS] ${selector} returned a tabbable object.`;
  this.pass = value => typeof value === 'object';
  this.value = result => result;
  this.command = callback =>
    this.api.allyConfirmTabbableObject(selector, callback);
};
