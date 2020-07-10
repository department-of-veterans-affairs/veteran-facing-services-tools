/* eslint-disable func-names, prefer-arrow-callback */

/**
 * Evaluate inputs and text areas for basic keyboard functionality:
 *
 * Each select can receive keyboard focus by pressing TAB.
 * Select menus should open with SPACE press, and user
 * should be able to enter keys. This is an imperfect
 * approximation, but Nightwatch doesn't support arrow
 * keys for traversing options in the open select.
 *
 * ```javascript
 *  this.demoTest = function (client) {
 *    client.evaluateTextInput('selector', 'option text', 'option value');
 *  };
 * ```
 *
 * @method evaluateTextInput
 * @param {string} [input] The selector (CSS / Xpath) used to locate the element.
 * @param {string} [textValue] Text to be sent to input by Nightwatch sendKeys().
 * @api commands
 */
module.exports.command = function evaluateTextInput(input, textValue) {
  const client = this;

  return client.waitForElementVisible(input, 1000, () => {
    this.assert
      .isActiveElement(input)
      .sendKeys(input, textValue)
      .assert.attributeContains(input, 'value', textValue);
  });
};
