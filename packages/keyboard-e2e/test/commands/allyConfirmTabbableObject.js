/* eslint-disable func-names, prefer-arrow-callback */

const ally = require('ally.js');

/**
 * Checks that Ally.js is returning an object of tabbable elements
 * https://allyjs.io
 *
 *
 * @method allyCheckTabbale
 * @param {string} [selector] The selector (CSS / Xpath) used to locate the element
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @returns {object} An object of one or more tabbable elements.
 * @api commands
 */
exports.command = function allyCheckTabbable(selector, callback) {
  return this.execute(
    function(sel) {
      const tabbableItems = ally.query.tabbable({
        context: sel,
        includeContext: true,
      });

      return tabbableItems;
    },
    [selector],
    callback,
  );
};
