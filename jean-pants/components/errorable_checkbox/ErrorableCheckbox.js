'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ToolTip = require('../tooltip/ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A form checkbox with a label that can display error messages.
 *
 * Validation has the following props.
 * `checked` - Boolean. Whether or not the checkbox is checked.
 * `errorMessage` - Error string to display in the component.
 *                  When defined, indicates checkbox has a validation error.
 * `label` - String for the checkbox label.
 * `name` - String for name attribute.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tab order.
 * `onChange` - a function with this prototype: (newValue)
 * `required` - boolean. Render marker indicating field is required.
 */
var ErrorableCheckbox = function (_React$Component) {
  _inherits(ErrorableCheckbox, _React$Component);

  function ErrorableCheckbox() {
    _classCallCheck(this, ErrorableCheckbox);

    return _possibleConstructorReturn(this, (ErrorableCheckbox.__proto__ || Object.getPrototypeOf(ErrorableCheckbox)).apply(this, arguments));
  }

  _createClass(ErrorableCheckbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.inputId = _lodash2.default.uniqueId('errorable-checkbox-');
    }
  }, {
    key: 'render',
    value: function render() {
      // TODO: extract error logic into a utility function
      // Calculate error state.
      var errorSpan = '';
      var errorSpanId = undefined;
      if (this.props.errorMessage) {
        errorSpanId = this.inputId + '-error-message';
        errorSpan = _react2.default.createElement(
          'span',
          { className: 'usa-input-error-message', id: '' + errorSpanId },
          this.props.errorMessage
        );
      }

      var labelId = this.inputId + '-label';
      // Addes ToolTip if text is provided.
      var toolTip = void 0;
      if (this.props.toolTipText) {
        toolTip = _react2.default.createElement(_ToolTip2.default, {
          tabIndex: this.props.tabIndex,
          toolTipText: this.props.toolTipText });
      }

      // Calculate required.
      var requiredSpan = undefined;
      if (this.props.required) {
        requiredSpan = _react2.default.createElement(
          'span',
          { className: 'form-required-span' },
          '*'
        );
      }

      var className = 'form-checkbox' + (this.props.errorMessage ? ' usa-input-error' : '');
      if (typeof this.props.className !== 'undefined') {
        className = className + ' ' + this.props.className;
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', _extends({}, this.props, {
          autoComplete: 'false',
          'aria-labelledby': labelId,
          'aria-describedby': errorSpanId,
          id: this.inputId,
          type: 'checkbox' })),
        _react2.default.createElement(
          'label',
          { // eslint-disable-line jsx-a11y/label-has-for
            className: this.props.errorMessage ? 'form-checkbox__label usa-input-error-label' : undefined,
            id: labelId,
            name: this.props.name + '-label',
            htmlFor: this.inputId },
          this.props.label,
          requiredSpan
        ),
        errorSpan,
        toolTip
      );
    }
  }]);

  return ErrorableCheckbox;
}(_react2.default.Component);

ErrorableCheckbox.propTypes = {
  /**
   * If the checkbox is checked or not
   */
  checked: _propTypes2.default.bool,
  /**
   * Error message for the modal
   */
  errorMessage: _propTypes2.default.string,
  /**
   * Name for the modal
   */
  name: _propTypes2.default.string,
  /**
   * Label for the checkbox
   */
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  /**
   * Handler for when the checkbox is changed
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * If the checkbox is required or not
   */
  required: _propTypes2.default.bool
};

exports.default = ErrorableCheckbox;