'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertBox = function (_React$Component) {
  _inherits(AlertBox, _React$Component);

  function AlertBox(props) {
    _classCallCheck(this, AlertBox);

    var _this = _possibleConstructorReturn(this, (AlertBox.__proto__ || Object.getPrototypeOf(AlertBox)).call(this, props));

    _this.scrollToAlert = _this.scrollToAlert.bind(_this);
    return _this;
  }

  _createClass(AlertBox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var visibilityChanged = this.props.isVisible !== nextProps.isVisible;
      var contentChanged = this.props.content !== nextProps.content;
      var statusChanged = this.props.status !== nextProps.status;
      return visibilityChanged || contentChanged || statusChanged;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isVisible && this.props.scrollOnShow) {
        this.scrollToAlert();
      }
    }
  }, {
    key: 'scrollToAlert',
    value: function scrollToAlert() {
      var isInView = window.scrollY <= this._ref.offsetTop;

      if (this._ref && !isInView) {
        this._ref.scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.isVisible) {
        return _react2.default.createElement('div', { 'aria-live': 'polite' });
      }

      var alertClass = (0, _classnames2.default)('usa-alert', 'usa-alert-' + this.props.status);

      var closeButton = void 0;
      if (this.props.onCloseAlert) {
        closeButton = _react2.default.createElement(
          'button',
          { className: 'va-alert-close', 'aria-label': 'Close notification', onClick: this.props.onCloseAlert },
          _react2.default.createElement('i', { className: 'fa fa-close', 'aria-label': 'Close icon' })
        );
      }

      var headline = this.props.headline && _react2.default.createElement(
        'div',
        { className: 'usa-alert-heading' },
        this.props.headline
      );

      return _react2.default.createElement(
        'div',
        {
          'aria-live': 'polite',
          className: alertClass,
          ref: function ref(_ref) {
            _this2._ref = _ref;
          } },
        _react2.default.createElement(
          'div',
          { className: 'usa-alert-body' },
          headline,
          _react2.default.createElement(
            'div',
            { className: 'usa-alert-text' },
            this.props.content
          )
        ),
        closeButton,
        _react2.default.createElement('div', { className: 'cf' })
      );
    }
  }]);

  return AlertBox;
}(_react2.default.Component);

AlertBox.propTypes = {

  // optional headline
  headline: _propTypes2.default.node,

  // body content is required -- this is the bulk of the alert
  content: _propTypes2.default.node.isRequired,

  // is the alert visible? useful for alerts triggered by app interaction
  isVisible: _propTypes2.default.bool.isRequired,

  // this is useful if the alerbox can be dismissed or closed
  onCloseAlert: _propTypes2.default.func,

  // if true, page scrolls to alert
  scrollOnShow: _propTypes2.default.bool,

  // determines the color of the alert box: blue, red, green, yellow respectively
  status: _propTypes2.default.oneOf(['info', 'error', 'success', 'warning']).isRequired
};

exports.default = AlertBox;