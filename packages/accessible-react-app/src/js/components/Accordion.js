/* https://inclusive-components.design/collapsible-sections/ */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import generateRandomString from '../helpers/generateRandomString';

const Accordion = props => {
  const { accordionLabel, children } = props;
  const [expanded, setExpanded] = useState(false);

  const generatedId = generateRandomString(10);

  const handleClick = eventTarget => {
    eventTarget.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div>
      <h2 className="ac-accordion__header">
        <button
          aria-controls={expanded ? generatedId : null}
          aria-expanded={expanded}
          onClick={e => handleClick(e)}
          type="button"
        >
          {accordionLabel}
        </button>
        <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
          <rect className="vert" height="8" width="2" y="1" x="4" />
          <rect height="2" width="8" y="4" x="1" />
        </svg>
      </h2>
      {expanded && (
        <div className="ac-accordion__body" id={generatedId}>
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  accordionLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Accordion;
