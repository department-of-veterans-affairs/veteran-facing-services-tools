import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render() {
    // If you want to pass in an override for the classes on the containing div
    // you can pass them in a string to props.classes
    let classes = '';
    if (this.props.classes != null) {
      classes = this.props.classes;
    } else {
      classes = 'medium-screen:vads-u-padding-left--4';
    }

    return <div className={classes}>{this.props.children}</div>;
  }
}

Sidebar.propTypes = {
  classes: PropTypes.string,
};

export default Sidebar;
