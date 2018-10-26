import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class AlertBox extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToAlert = this.scrollToAlert.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const visibilityChanged = this.props.isVisible !== nextProps.isVisible;
    const contentChanged = this.props.content !== nextProps.content;
    const statusChanged = this.props.status !== nextProps.status;
    return visibilityChanged || contentChanged || statusChanged;
  }

  componentDidUpdate() {
    if (this.props.isVisible && this.props.scrollOnShow) {
      this.scrollToAlert();
    }
  }

  scrollToAlert() {
    const isInView = window.scrollY <= this._ref.offsetTop;

    if (this._ref && !isInView) {
      this._ref.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      });
    }
  }

  render() {
    if (!this.props.isVisible) {
      return <div aria-live="polite"/>;
    }

    const alertClass = classNames(
      'usa-alert',
      `usa-alert-${this.props.status}`,
      this.props.className
    );

    let closeButton;
    if (this.props.onCloseAlert) {
      closeButton = (
        <button className="va-alert-close" aria-label="Close notification" onClick={this.props.onCloseAlert}>
          <i className="fa fa-close" aria-label="Close icon"></i>
        </button>
      );
    }

    const headline = this.props.headline && (<h3 className="usa-alert-heading">{this.props.headline}</h3>);

    return (
      <div
        aria-live="polite"
        className={alertClass}
        ref={(ref) => { this._ref = ref; }}>
        <div className="usa-alert-body">
          {headline}
          {this.props.content || this.props.children}
        </div>
        {closeButton}
        <div className="cf"></div>
      </div>
    );
  }

}

AlertBox.propTypes = {
  /**
   * Determines the color and icon of the alert box.
   */
  status: PropTypes.oneOf([
    'info',      // Blue border, black circled 'i'
    'error',     // Red border, red circled exclamation
    'success',   // Green border, green checkmark
    'warning',   // Yellow border, black triangle exclamation
    'continue',  // Green border, green lock
  ]).isRequired,

  /**
   * Show or hide the alert. Useful for alerts triggered by app interaction.
   */
  isVisible: PropTypes.bool,

  /**
   * Body content of the alert, which can also be passed via children.
   */
  content: PropTypes.node,

  /**
   * Optional headline.
   */
  headline: PropTypes.node,

  /**
   * Close event handler if the alert  can be dismissed or closed.
   */
  onCloseAlert: PropTypes.func,

  /**
   * If true, page scrolls to alert when it is shown.
   */
  scrollOnShow: PropTypes.bool,

  /**
   * Optional class name to add to the alert box.
   */
  className: PropTypes.string
};

AlertBox.defaultProps = {
  isVisible: true
};

export default AlertBox;
