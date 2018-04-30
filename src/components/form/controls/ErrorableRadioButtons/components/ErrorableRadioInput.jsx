import React from 'react';
import PropTypes from 'prop-types';

class ErrorableRadioInput extends React.Component {
  constructor() {
    super();
    this.state = {
      focusStyle: {
        padding: '6px 12px',
        display: 'inline-block',
        margin: 0,
      }
    };
  }

  handleOnBlur() {
    this.setState({
      focusStyle: {
        ...this.state.focusStyle,
        background: 'none',
      }
    });
  }

  handleOnFocus(e) {
    this.props.handleChange(e);

    this.setState({
      focusStyle: {
        ...this.state.focusStyle,
        background: '#fad980',
      }
    });
  }

  render() {
    return (
      <div>
        <input
          autoComplete="false"
          checked={this.props.checked}
          id={`${this.props.inputId}-${this.props.optionIndex}`}
          name={this.props.name}
          type="radio"
          onMouseDown={this.props.onMouseDown}
          onKeyDown={this.props.onKeyDown}
          value={this.props.optionValue}
          onChange={this.props.handleChange}
          onBlur={() => this.handleOnBlur()}
          onFocus={(e) => this.handleOnFocus(e)}/>
        <label
          name={`${this.props.name}-${this.props.optionIndex}-label`}
          htmlFor={`${this.props.inputId}-${this.props.optionIndex}`}
          ref="labelIput"
          style={this.state.focusStyle}>

          {this.props.optionLabel}
        </label>
        {this.props.matchingSubSection}
        {this.props.option.content}
      </div>
    );
  }
}

ErrorableRadioInput.propTypes = {
  /**
   * Mouse Down handler
   */
  onMouseDown: PropTypes.func,
  /**
   * Key Down handler
   */
  onKeyDown: PropTypes.func,
  optionValue: PropTypes.string,
  handleChange: PropTypes.func,
  optionIndex: PropTypes.number,
  name: PropTypes.string,
  optionLabel: PropTypes.string,
  matchingSubSection: PropTypes.func,
  option: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default ErrorableRadioInput;
