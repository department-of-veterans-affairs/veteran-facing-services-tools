/* eslint-disable func-names, prefer-arrow-callback */

/**
 * Checks if the given element is focused on the page.
 *
 * @method checkActiveElement
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @returns {boolean}
 * @api commands
 */
exports.command = function checkActiveElement(selector, callback) {
  return this.execute(
    function(sel) {
      return document.querySelector(sel) === document.activeElement;
    },
    [selector],
    callback,
  );
};
