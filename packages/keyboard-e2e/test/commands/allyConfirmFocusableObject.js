const ally = require('ally.js');

/**
 * Checks that Ally.js is returning an object of focusable elements
 * https://allyjs.io
 *
 *
 * @method allyConfirmFocusable
 * @param {string} [selector] The selector (CSS / Xpath) used to locate the element
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @returns {object} An object of one or more focusable elements.
 * @api commands
 */
exports.command = function allyConfirmFocusableObject(selector, callback) {
  return this.execute(
    sel => {
      const focusableItems = ally.query.focusable({
        context: sel,
        includeContext: true,
        strategy: 'strict',
      });

      return focusableItems;
    },
    [selector],
    callback,
  );
};
