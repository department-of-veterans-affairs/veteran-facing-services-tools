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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ToolTip = require('../tooltip/ToolTip');

var _ToolTip2 = _interopRequireDefault(_ToolTip);

var _ExpandingGroup = require('../expanding_group/ExpandingGroup');

var _ExpandingGroup2 = _interopRequireDefault(_ExpandingGroup);

var _fields = require('../../helpers/fields.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A radio button group with a label.
 *
 * Validation has the following props.

 * `additionalFieldsetClass` - String for any additional fieldset classes.
 * `additionalLegendClass` - String for any additional legend classes.
 * `errorMessage' - String Error message for the radio button group
 * `label` - String for the group field label.
 * `name` - String for the name attribute.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tab order.
 * `options` - Array of options to populate group.
 * `required` - is this field required.
 * `value` - string. Value of the select field.
 * `onValueChange` - a function with this prototype: (newValue)
 */
var ErrorableRadioButtons = function (_React$Component) {
  _inherits(ErrorableRadioButtons, _React$Component);

  function ErrorableRadioButtons() {
    _classCallCheck(this, ErrorableRadioButtons);

    var _this = _possibleConstructorReturn(this, (ErrorableRadioButtons.__proto__ || Object.getPrototypeOf(ErrorableRadioButtons)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.getMatchingSubSection = _this.getMatchingSubSection.bind(_this);
    return _this;
  }

  _createClass(ErrorableRadioButtons, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.inputId = this.props.id || _lodash2.default.uniqueId('errorable-radio-buttons-');
    }
  }, {
    key: 'getMatchingSubSection',
    value: function getMatchingSubSection(checked, optionValue) {
      if (checked && this.props.children) {
        var children = _lodash2.default.isArray(this.props.children) ? this.props.children : [this.props.children];
        var subsections = children.filter(function (child) {
          return child.props.showIfValueChosen === optionValue;
        });
        return subsections.length > 0 ? subsections[0] : null;
      }

      return null;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(domEvent) {
      this.props.onValueChange((0, _fields.makeField)(domEvent.target.value, true));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // TODO: extract error logic into a utility function
      // Calculate error state.
      var errorSpan = '';
      var errorSpanId = undefined;
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
      }

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

      var options = _lodash2.default.isArray(this.props.options) ? this.props.options : [];
      var storedValue = this.props.value.value;
      var optionElements = options.map(function (obj, index) {
        var optionLabel = void 0;
        var optionValue = void 0;
        var optionAdditional = void 0;
        if (_lodash2.default.isString(obj)) {
          optionLabel = obj;
          optionValue = obj;
        } else {
          optionLabel = obj.label;
          optionValue = obj.value;
          if (obj.additional) {
            optionAdditional = _react2.default.createElement(
              'div',
              null,
              obj.additional
            );
          }
        }
        var checked = optionValue === storedValue ? 'checked=true' : '';
        var matchingSubSection = _this2.getMatchingSubSection(optionValue === storedValue, optionValue);
        var radioButton = _react2.default.createElement(
          'div',
          { key: optionAdditional ? undefined : index, className: 'form-radio-buttons' },
          _react2.default.createElement('input', {
            autoComplete: 'false',
            checked: checked,
            id: _this2.inputId + '-' + index,
            name: _this2.props.name,
            type: 'radio',
            value: optionValue,
            onChange: _this2.handleChange }),
          _react2.default.createElement(
            'label',
            {
              name: _this2.props.name + '-' + index + '-label',
              htmlFor: _this2.inputId + '-' + index },
            optionLabel
          ),
          matchingSubSection
        );

        var output = radioButton;

        // Return an expanding group for buttons with additional content
        if (optionAdditional) {
          output = _react2.default.createElement(
            _ExpandingGroup2.default,
            {
              additionalClass: 'form-expanding-group-active-radio',
              open: !!checked,
              key: index },
            radioButton,
            _react2.default.createElement(
              'div',
              null,
              optionAdditional
            )
          );
        }

        return output;
      });

      var fieldsetClass = (0, _classnames2.default)('fieldset-input', _defineProperty({
        'usa-input-error': this.props.errorMessage
      }, this.props.additionalFieldsetClass, this.props.additionalFieldsetClass));

      var legendClass = (0, _classnames2.default)('legend-label', _defineProperty({
        'usa-input-error-label': this.props.errorMessage
      }, this.props.additionalLegendClass, this.props.additionalLegendClass));

      return _react2.default.createElement(
        'fieldset',
        { className: fieldsetClass },
        _react2.default.createElement(
          'legend',
          {
            className: legendClass },
          this.props.label,
          requiredSpan
        ),
        errorSpan,
        optionElements,
        toolTip
      );
    }
  }]);

  return ErrorableRadioButtons;
}(_react2.default.Component);

ErrorableRadioButtons.propTypes = {
  /**
   * additional fieldset classes
   */
  additionalFieldsetClass: _propTypes2.default.string,
  /**
   * additional legend classes
   */
  additionalLegendClass: _propTypes2.default.string,
  /**
   * radio button group error message
   */
  errorMessage: _propTypes2.default.string,
  /**
   * radio button group field label
   */
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
  /**
   * name attribute
   */
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
  /**
   * help text for user
   */
  toolTipText: _propTypes2.default.string,
  /**
   * keyboard tab order for radio button group
   */
  tabIndex: _propTypes2.default.number,
  /**
   * array of options to populate group- each item is a string or an object representing an Expanding Group
   *
   */
  options: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]).isRequired,
    additional: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  })])).isRequired,
  /**
   * value object for selected field <br/>
   * value: string value that matches radio button value </br>
   * dirty: indicates if form is dirty; should be true after any user input
   */
  value: _propTypes2.default.shape({
    /**
     * value of the select field.
     */
    value: _propTypes2.default.string,
    dirty: _propTypes2.default.bool
  }).isRequired,
  /**
   * handler for the value change
   */
  onValueChange: _propTypes2.default.func.isRequired,
  /**
   * toggles required field indicator
   */
  required: _propTypes2.default.bool
};

exports.default = ErrorableRadioButtons;