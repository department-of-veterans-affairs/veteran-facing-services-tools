import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

class ErrorableCheckbox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.inputId = _.uniqueId('errorable-checkbox-');
  }

  handleChange(domEvent) {
    this.props.onValueChange(domEvent.target.checked);
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

    // Calculate required.
    let requiredSpan = undefined;
    if (this.props.required) {
      requiredSpan = <span className="form-required-span">(*Required)</span>;
    }

    let className = `form-checkbox${
      this.props.errorMessage ? ' usa-input-error' : ''
    }`;
    if (!_.isUndefined(this.props.className)) {
      className = `${className} ${this.props.className}`;
    }

    return (
      <div className={className}>
        {this.props.labelAboveCheckbox && (
          <span className="label-above-checkbox">
            {this.props.labelAboveCheckbox}
          </span>
        )}
        <input
          aria-labelledby={this.props.ariaLabelledBy}
          aria-describedby={errorSpanId}
          checked={this.props.checked}
          id={this.inputId}
          name={this.props.name}
          type="checkbox"
          onChange={this.handleChange}
        />
        <label
          className={
            this.props.errorMessage ? 'usa-input-error-label' : undefined
          }
          name={`${this.props.name}-label`}
          htmlFor={this.inputId}
        >
          {this.props.label}
          {requiredSpan}
        </label>
        {errorSpan}
      </div>
    );
  }
}

ErrorableCheckbox.propTypes = {
  /**
   * If the checkbox is checked or not
   */
  checked: PropTypes.bool,
  /**
   * Error message for the modal
   */
  errorMessage: PropTypes.string,
  /**
   * Name for the modal
   */
  name: PropTypes.string,
  /**
   * Label for the checkbox.
   * IF you have a SEPARATE HEADING (outside this component) that “labels” this
   * checkbox, do NOT pass {<span class="usa-sr-only">...</span>} here to just
   * visually hide this label.
   * Instead, pass an empty string ("") here, and pass that external heading‘s
   * ID to ariaLabelledBy prop.
   * Screen-readers read sr-only content, which would be redundant if you had a
   * separate, external heading also serving as this component‘s “label.”
   * E.g., see /src/applications/personalization/preferences/components/PreferenceOption.jsx
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Descriptive text to sit above the checkbox and label
   */
  labelAboveCheckbox: PropTypes.string,
  /**
   * aria-labelledby attribute value (external heading ID).
   * If you have a SEPARATE HEADING (outside this component) that “labels” this
   * checkbox, pass that heading‘s ID value here (without '#'), and pass empty-string to label prop above.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * Handler for when the checkbox is changed
   */
  onValueChange: PropTypes.func.isRequired,
  /**
   * If the checkbox is required or not
   */
  required: PropTypes.bool,
};

export default ErrorableCheckbox;
