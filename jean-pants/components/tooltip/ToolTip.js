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

/**
 * A tooltip to give users more information about the question.
 *
 * Validation has the following props.
 * `open` - Open or closed.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tabindex order.
 * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
 */

var ToolTip = function (_React$Component) {
  _inherits(ToolTip, _React$Component);

  function ToolTip(props) {
    _classCallCheck(this, ToolTip);

    var _this = _possibleConstructorReturn(this, (ToolTip.__proto__ || Object.getPrototypeOf(ToolTip)).call(this, props));

    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.state = {
      closed: !_this.props.open
    };
    return _this;
  }

  _createClass(ToolTip, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ closed: true });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      if (!this.state.closed) {
        var currentTarget = e.currentTarget;

        setTimeout(function () {
          if (!currentTarget.contains(document.activeElement)) {
            _this2.setState({ closed: true });
          }
        });
      }
    }
  }, {
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ closed: false });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ closed: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onBlur: this.onBlur },
        _react2.default.createElement(
          'button',
          { tabIndex: this.props.tabIndex, onFocus: this.handleOpen, onClick: this.handleOpen },
          'More Info'
        ),
        _react2.default.createElement(
          'div',
          { 'aria-hidden': this.state.closed },
          this.props.toolTipText,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { tabIndex: this.props.tabIndex, onClick: this.handleClose },
            'Close'
          )
        )
      );
    }
  }]);

  return ToolTip;
}(_react2.default.Component);

ToolTip.propTypes = {
  /**
   * tabIndex for the tooltip toggle
   */
  /* eslint-disable consistent-return */
  tabIndex: function tabIndex(props, propName, componentName) {
    if (!/^\d+$/.test(props[propName])) {
      return new Error('Invalid prop `' + propName + '` supplied to' + (' `' + componentName + '`. Validation failed.'));
    }
    /* eslint-enable consistent-return */
  },

  /**
   * Text of the tooltip
   */
  toolTipText: _propTypes2.default.string
};

exports.default = ToolTip;