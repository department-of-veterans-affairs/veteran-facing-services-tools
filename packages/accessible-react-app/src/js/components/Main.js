import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MAIN_ID } from '../config/constants';

const Main = props => {
  const { children, className, headerId, headerText, setFocus } = props;

  const headingOne = useRef(null);

  /* SR Talking Point - Active Focus Management */
  useEffect(() => {
    if (setFocus) {
      headingOne.current.focus();
    }
  });

  return (
    <main
      aria-labelledby={headerId}
      className={className}
      id={MAIN_ID}
      role="main"
    >
      {/* SR Talking Point - All pages SHOULD have an H1 for the "big idea" */}
      <h1 id={headerId} ref={headingOne} tabIndex={-1}>
        {headerText}
      </h1>
      {children}
    </main>
  );
};

Main.defaultProps = {
  className: '',
  setFocus: false,
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  headerId: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  setFocus: PropTypes.bool,
};

export default Main;
