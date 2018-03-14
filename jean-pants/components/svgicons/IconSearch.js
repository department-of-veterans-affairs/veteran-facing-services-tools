'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconSearch = function (_React$Component) {
  _inherits(IconSearch, _React$Component);

  function IconSearch() {
    _classCallCheck(this, IconSearch);

    return _possibleConstructorReturn(this, (IconSearch.__proto__ || Object.getPrototypeOf(IconSearch)).apply(this, arguments));
  }

  _createClass(IconSearch, [{
    key: 'render',
    value: function render() {
      var svgTitle = void 0;

      if (this.props.title) {
        svgTitle = _react2.default.createElement(
          'title',
          null,
          this.props.title
        );
      }

      return _react2.default.createElement(
        'svg',
        { width: '24', height: '24', viewBox: '0 0 216 146',
          pointerEvents: 'none',
          className: this.props.cssClass,
          id: this.props.id },
        svgTitle,
        _react2.default.createElement('path', { fill: this.props.color, d: 'M172.77 123.025L144.825 95.08c6.735-9.722 10.104-20.56 10.104-32.508 0-7.767-1.51-15.195-4.527-22.283-3.014-7.09-7.088-13.2-12.22-18.336s-11.243-9.207-18.33-12.22c-7.09-3.016-14.52-4.523-22.286-4.523-7.768 0-15.196 1.508-22.284 4.523-7.09 3.014-13.2 7.088-18.332 12.22-5.132 5.134-9.206 11.245-12.22 18.333-3.015 7.088-4.522 14.515-4.522 22.282 0 7.766 1.507 15.192 4.522 22.282 3.014 7.088 7.088 13.197 12.22 18.33 5.134 5.134 11.245 9.207 18.333 12.222 7.09 3.015 14.516 4.522 22.283 4.522 11.95 0 22.786-3.37 32.51-10.105l27.943 27.863c1.955 2.064 4.397 3.096 7.332 3.096 2.824 0 5.27-1.03 7.332-3.096 2.064-2.063 3.096-4.508 3.096-7.332 0-2.877-1.002-5.322-3.013-7.33zm-49.413-34.668C116.214 95.5 107.62 99.07 97.57 99.07c-10.048 0-18.643-3.57-25.786-10.713C64.64 81.214 61.07 72.62 61.07 62.57c0-10.047 3.572-18.643 10.714-25.785C78.926 29.642 87.522 26.07 97.57 26.07c10.048 0 18.643 3.573 25.787 10.715 7.143 7.142 10.715 15.738 10.715 25.786 0 10.05-3.573 18.647-10.715 25.79z' })
      );
    }
  }]);

  return IconSearch;
}(_react2.default.Component);

IconSearch.propTypes = {
  color: _propTypes2.default.string, /* Should be a CSS color */
  cssClass: _propTypes2.default.string,
  id: _propTypes2.default.string,
  title: _propTypes2.default.string
};

exports.default = IconSearch;