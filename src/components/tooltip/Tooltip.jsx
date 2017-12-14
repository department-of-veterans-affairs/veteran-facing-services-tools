import PropTypes from 'prop-types';
import React from 'react';

/**
 * A tooltip to give users more information about the question.
 *
 * Validation has the following props.
 * `toolTipText` - String with help text for user.
 * `tabIndex` - Number for keyboard tabindex order.
 * The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
 */

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ closed: true });
  }

  onBlur(e) {
    if (!this.state.closed) {
      const { currentTarget } = e;
      setTimeout(() => {
        if (!currentTarget.contains(document.activeElement)) {
          this.setState({ closed: true });
        }
      });
    }
  }

  handleOpen() {
    this.setState({ closed: false });
  }

  handleClose() {
    this.setState({ closed: true });
  }

  render() {
    return (
      <div onBlur={this.onBlur}>
        <button tabIndex={this.props.tabIndex} onFocus={this.handleOpen} onClick={this.handleOpen}>More Info</button>
        <div aria-hidden={this.state.closed}>
          {this.props.toolTipText}
          <br/>
          <button tabIndex={this.props.tabIndex} onClick={this.handleClose}>Close</button>
        </div>
      </div>
    );
  }
}

ToolTip.propTypes = {
  /* eslint-disable consistent-return */
  tabIndex(props, propName, componentName) {
    if (!/^\d+$/.test(props[propName])) {
      return new Error(`Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`);
    }
  /* eslint-enable consistent-return */
  },
  toolTipText: PropTypes.string,
};

export default ToolTip;
