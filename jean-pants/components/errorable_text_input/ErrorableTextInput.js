'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ToolTip = require('../tooltip/ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

var _fields = require('../../helpers/fields.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A form input with a label that can display error messages.
 *
 * Props:
 * `errorMessage` - Error string to display in the component.
 *                  When defined, indicates input has a validation error.
 * `label` - String for the input field label.
 * `name` - String for the input name attribute.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tab order.
 * `autocomplete` - String for the input autocomplete attribute.
 * `placeholder` - placeholder string for input field.
 * `required` - boolean. Render marker indicating field is required.
 * `field` - string. Value of the input field.
 * `additionalClass` - Extra attribute for use by CSS selector, specifically
 *                     by tests
 * `onValueChange` - a function with this prototype: (newValue)
 */
var ErrorableTextInput = function (_React$Component) {
  _inherits(ErrorableTextInput, _React$Component);

  function ErrorableTextInput() {
    _classCallCheck(this, ErrorableTextInput);

    var _this = _possibleConstructorReturn(this, (ErrorableTextInput.__proto__ || Object.getPrototypeOf(ErrorableTextInput)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(ErrorableTextInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.inputId = _lodash2.default.uniqueId('errorable-text-input-');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(domEvent) {
      this.props.onValueChange((0, _fields.makeField)(domEvent.target.value, this.props.field.dirty));
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.props.onValueChange((0, _fields.makeField)(this.props.field.value, true));
    }
  }, {
    key: 'render',
    value: function render() {
      // Calculate error state.
      var errorSpan = '';
      var maxCharacters = void 0;
      var errorSpanId = undefined;
      var inputErrorClass = undefined;
      var labelErrorClass = undefined;
      if (this.props.errorMessage) {
        errorSpanId = this.inputId + '-error-message';
        errorSpan = _react2.default.createElement(
          'span',
          { className: 'usa-input-error-message', role: 'alert', id: errorSpanId },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Error'
          ),
          ' ',
          this.props.errorMessage
        );
        inputErrorClass = 'usa-input-error';
        labelErrorClass = 'usa-input-error-label';
      }

      // Addes ToolTip if text is provided.
      var toolTip = void 0;
      if (this.props.toolTipText) {
        toolTip = _react2.default.createElement(_ToolTip2.default, {
          tabIndex: this.props.tabIndex,
          toolTipText: this.props.toolTipText });
      }

      // Calculate max characters and display '(Max. XX characters)' when max is hit.
      if (this.props.field.value) {
        if (this.props.charMax === this.props.field.value.length) {
          maxCharacters = _react2.default.createElement(
            'small',
            null,
            '(Max. ',
            this.props.charMax,
            ' characters)'
          );
        }
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

      return _react2.default.createElement(
        'div',
        { className: inputErrorClass },
        _react2.default.createElement(
          'label',
          {
            className: labelErrorClass,
            htmlFor: this.inputId },
          this.props.label,
          requiredSpan
        ),
        errorSpan,
        _react2.default.createElement('input', {
          className: this.props.additionalClass,
          'aria-describedby': errorSpanId,
          id: this.inputId,
          placeholder: this.props.placeholder,
          name: this.props.name,
          tabIndex: this.props.tabIndex,
          autoComplete: this.props.autocomplete,
          type: this.props.type,
          maxLength: this.props.charMax,
          value: this.props.field.value,
          onChange: this.handleChange,
          onBlur: this.handleBlur }),
        maxCharacters,
        toolTip
      );
    }
  }]);

  return ErrorableTextInput;
}(_react2.default.Component);

ErrorableTextInput.propTypes = {
  /**
   * display error message for input that indicates a validation error
   */
  errorMessage: _propTypes2.default.string,
  /**
   * label for input field
   */
  label: _propTypes2.default.any.isRequired,
  /**
   * text displayed when input has no user provided value
   */
  placeholder: _propTypes2.default.string,
  /**
   * input name attribute
   */
  name: _propTypes2.default.string,
  /**
   * input autocomplete attribute
   */
  autocomplete: _propTypes2.default.string,
  /**
   * render marker indicating field is required
   */
  required: _propTypes2.default.bool,
  /**
   * value of the input field and if its dirty status
   */
  field: _propTypes2.default.shape({
    value: _propTypes2.default.string,
    dirty: _propTypes2.default.bool
  }).isRequired,
  /**
   * extra attribute for use by CSS selector, specifically by tests
   */
  additionalClass: _propTypes2.default.string,
  /**
   * maximum permitted input length
   */
  charMax: _propTypes2.default.number,
  /**
   * called when input value is changed
   */
  onValueChange: _propTypes2.default.func.isRequired,
  /**
   * type attribute for ijput field
   */
  type: _propTypes2.default.string
};

ErrorableTextInput.defaultProps = {
  type: 'text'
};

exports.default = ErrorableTextInput;