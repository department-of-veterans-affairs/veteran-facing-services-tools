'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SegmentedProgressBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a segmented progress bar for multi-page forms.
 *
 * @param {number} current - The index of the current chapter
 * @param {number} total   - The total number of chapters in the form
 */
function SegmentedProgressBar(_ref) {
  var current = _ref.current,
      total = _ref.total;

  return _react2.default.createElement(
    'div',
    { className: 'progress-bar-segmented', role: 'progressbar', 'aria-valuenow': current, 'aria-valuemin': '0', 'aria-valuemax': total, tabIndex: '0' },
    _lodash2.default.range(total).map(function (step) {
      return _react2.default.createElement('div', { key: step, className: 'progress-segment ' + (current > step ? 'progress-segment-complete' : '') });
    })
  );
}

SegmentedProgressBar.propTypes = {
  current: _propTypes2.default.number.isRequired,
  total: _propTypes2.default.number.isRequired
};