import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RightRail = props => (
  <div className="medium-screen:vads-u-padding-left--4">{props.children}</div>
);

RightRail.propTypes = {
  classes: PropTypes.string,
};

export default RightRail;
