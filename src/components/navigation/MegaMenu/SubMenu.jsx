import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

const SubMenu = ({ data, show, navTitle }) => {
  const { seeAllLink, ...columns } = data;

  if (show) {
    return (
      <div>
        {Object.keys(columns).map((keyName) => {
          return (
            <Column
              key={keyName}
              data={data[keyName]}
              keyName={keyName}
              navTitle={navTitle}
              panelWhite={Object.prototype.hasOwnProperty.call(data, 'mainColumn')}>
              {
                keyName === 'columnOne' && <div className="panel-bottom-link">
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
