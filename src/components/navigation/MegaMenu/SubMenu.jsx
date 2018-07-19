import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import _ from 'lodash';

const SubMenu = ({ data, show, navTitle }) => {
  const { seeAllLink, ...columns } = data;

  if (show) {
    return (
      <div>
        <div>
          <button className="back-button" aria-controls={`vetnav-${_.kebabCase(navTitle)}`}>Back to Menu</button>
        </div>
        {Object.keys(columns).map((keyName) => {
          return (
            <Column
              key={keyName}
              data={data[keyName]}
              keyName={keyName}
              navTitle={navTitle}
              panelWhite={Object.prototype.hasOwnProperty.call(data, 'mainColumn')}>
              {
                keyName === 'columnOne' && <div>
                  {
                    seeAllLink && <a href={seeAllLink.href}>View All in {seeAllLink.text}</a>
                  }
                </div>
              }
            </Column>
          );
        })}
      </div>
    );
  }

  return (
    <div></div>
  );
};

SubMenu.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  navTitle: PropTypes.string.isRequired,
};

export default SubMenu;
