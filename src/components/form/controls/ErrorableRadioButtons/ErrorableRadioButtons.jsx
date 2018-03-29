import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import ToolTip from '../../../Tooltip/Tooltip';
import ExpandingGroup from '../ExpandingGroup/ExpandingGroup';

import { makeField } from '../../../../helpers/fields';

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
class ErrorableRadioButtons extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.getMatchingSubSection = this.getMatchingSubSection.bind(this);
  }

  componentWillMount() {
    this.inputId = this.props.id || _.uniqueId('errorable-radio-buttons-');
  }

  getMatchingSubSection(checked, optionValue) {
    if (checked && this.props.children) {
      const children = _.isArray(this.props.children)
        ? this.props.children
        : [this.props.children];
      const subsections = children.filter(
        child => child.props.showIfValueChosen === optionValue
      );
      return subsections.length > 0 ? subsections[0] : null;
    }

    return null;
  }

  handleChange(domEvent) {
    this.props.onValueChange(makeField(domEvent.target.value, true));
  }

  render() {
    // TODO: extract error logic into a utility function
    // Calculate error state.
    let errorSpan = '';
    let errorSpanId = undefined;
    if (this.props.errorMessage) {
      errorSpanId = `${this.inputId}-error-message`;
      errorSpan = (
        <span className="usa-input-error-message" role="alert" id={errorSpanId}>
          <span className="sr-only">Error</span> {this.props.errorMessage}
        </span>
      );
    }

    // Addes ToolTip if text is provided.
    let toolTip;
    if (this.props.toolTipText) {
      toolTip = (
        <ToolTip
          tabIndex={this.props.tabIndex}
          toolTipText={this.props.toolTipText}/>
      );
    }

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">*</span>;
    }

    const options = _.isArray(this.props.options) ? this.props.options : [];
    const storedValue = this.props.value.value;
    const optionElements = options.map((obj, index) => {
      let optionLabel;
      let optionValue;
      let optionAdditional;
      if (_.isString(obj)) {
        optionLabel = obj;
        optionValue = obj;
      } else {
        optionLabel = obj.label;
        optionValue = obj.value;
        if (obj.additional) {
          optionAdditional = <div>{obj.additional}</div>;
        }
      }
      const checked = optionValue === storedValue ? 'checked=true' : '';
      const matchingSubSection = this.getMatchingSubSection(
        optionValue === storedValue,
        optionValue
      );
      const radioButton = (
        <div
          key={optionAdditional ? undefined : index}
          className="form-radio-buttons">
          <input
            autoComplete="false"
            checked={checked}
            id={`${this.inputId}-${index}`}
            name={this.props.name}
            type="radio"
            value={optionValue}
            onChange={this.handleChange}/>
          <label
            name={`${this.props.name}-${index}-label`}
            htmlFor={`${this.inputId}-${index}`}>
            {optionLabel}
          </label>
          {matchingSubSection}
        </div>
      );

      let output = radioButton;

      // Return an expanding group for buttons with additional content
      if (optionAdditional) {
        output = (
          <ExpandingGroup
            additionalClass="form-expanding-group-active-radio"
            open={!!checked}
            key={index}>
            {radioButton}
            <div>{optionAdditional}</div>
          </ExpandingGroup>
        );
      }

      return output;
    });

    const fieldsetClass = classNames('fieldset-input', {
      'usa-input-error': this.props.errorMessage,
      [this.props.additionalFieldsetClass]: this.props.additionalFieldsetClass
    });

    const legendClass = classNames('legend-label', {
      'usa-input-error-label': this.props.errorMessage,
      [this.props.additionalLegendClass]: this.props.additionalLegendClass
    });

    return (
      <fieldset className={fieldsetClass}>
        <legend className={legendClass}>
          {this.props.label}
          {requiredSpan}
        </legend>
        {errorSpan}
        {optionElements}
        {toolTip}
      </fieldset>
    );
  }
}

ErrorableRadioButtons.propTypes = {
  /**
   * additional fieldset classes
   */
  additionalFieldsetClass: PropTypes.string,
  /**
   * additional legend classes
   */
  additionalLegendClass: PropTypes.string,
  /**
   * radio button group error message
   */
  errorMessage: PropTypes.string,
  /**
   * radio button group field label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * name attribute
   */
  name: PropTypes.string,
  id: PropTypes.string,
  /**
   * help text for user
   */
  toolTipText: PropTypes.string,
  /**
   * keyboard tab order for radio button group
   */
  tabIndex: PropTypes.number,
  /**
   * array of options to populate group- each item is a string or an object representing an Expanding Group
   *
   */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
          .isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
          .isRequired,
        additional: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      })
    ])
  ).isRequired,
  /**
   * value object for selected field <br/>
   * value: string value that matches radio button value </br>
   * dirty: indicates if form is dirty; should be true after any user input
   */
  value: PropTypes.shape({
    /**
     * value of the select field.
     */
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired,
  /**
   * handler for the value change
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * toggles required field indicator
   */
  required: PropTypes.bool
};

export default ErrorableRadioButtons;
