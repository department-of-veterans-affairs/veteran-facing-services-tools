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

var DropDown = function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref, [this].concat(args))), _this), _this.toggleDropDown = function () {
      _this.props.clickHandler();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonClasses = (0, _classnames2.default)(this.props.cssClass, { 'va-btn-withicon': this.props.icon }, 'va-dropdown-trigger');

      return _react2.default.createElement(
        'div',
        { className: 'va-dropdown', ref: function ref(div) {
            _this2.dropdownDiv = div;
          } },
        _react2.default.createElement(
          'button',
          { className: buttonClasses,
            'aria-controls': this.props.id,
            'aria-expanded': this.props.isOpen,
            disabled: this.props.disabled,
            onClick: this.toggleDropDown },
          _react2.default.createElement(
            'span',
            null,
            this.props.icon,
            this.props.buttonText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'va-dropdown-panel', id: this.props.id, hidden: !this.props.isOpen },
          this.props.contents
        )
      );
    }
  }]);

  return DropDown;
}(_react2.default.Component);

DropDown.propTypes = {
  buttonText: _propTypes2.default.string,
  clickHandler: _propTypes2.default.func.isRequired,
  cssClass: _propTypes2.default.string,
  contents: _propTypes2.default.node.isRequired,
  icon: _propTypes2.default.node, /* Should be SVG markup */
  id: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool
};

DropDown.defaultProps = {
  disabled: false
};

exports.default = DropDown;