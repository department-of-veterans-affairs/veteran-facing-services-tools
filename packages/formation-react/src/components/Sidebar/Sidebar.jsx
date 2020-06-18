import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
  <div className="medium-screen:vads-u-padding-left--4">{props.children}</div>
);

Sidebar.propTypes = {
  classes: PropTypes.string,
};

export default Sidebar;
