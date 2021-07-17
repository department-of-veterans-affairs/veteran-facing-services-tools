import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PrimaryNav = props => {
  const { ariaLabelText } = props;

  return (
    <nav aria-label={ariaLabelText}>
      {/* SR Talking Point - Unique aria-labels for repeated blocks like <nav> */}
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul className="ac-primary-nav" role="list">
        <li className="ac-primary-nav__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/about">About AnyCorp</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/awards">Awards We&rsquo;ve Won</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/feedback">Your Feedback</Link>
        </li>
        <li className="ac-primary-nav__list-item">
          <Link to="/information">More Info</Link>
        </li>
      </ul>
    </nav>
  );
};

PrimaryNav.propTypes = {
  ariaLabelText: PropTypes.string.isRequired,
};

export default PrimaryNav;
