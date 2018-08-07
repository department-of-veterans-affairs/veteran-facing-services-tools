import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import _ from 'lodash';

const onSmallScreen = () => {
  if (window.innerWidth < 768) {
    return true;
  }

  return false;
};

const getColumns = (columns) => {
  if (window.innerWidth < 768) {
    if (Object.hasOwnProperty.call(columns, 'mainColumn')) {
      return {
        mainColumn: {
          title: columns.mainColumn.title,
          links: [
            ...columns.mainColumn.links,
            ...columns.columnOne.links,
            ...columns.columnTwo.links
          ].filter((link, i) => {
            return i < 8;
          })
        },
        columnThree: columns.columnThree,
      };
    }

    return {
      columnOne: {
        title: columns.columnOne.title,
        links: [
          ...columns.columnOne.links,
          ...columns.columnTwo.links,
        ].filter((links, i) => {
          return i < 5;
        })
      }
    };
  }

  return columns;
};

const SubMenu = ({ data, show, navTitle, handleBackToMenu }) => {
  const { seeAllLink, ...columns } = data;

  if (show) {
    const filteredColumns = getColumns(columns);

    return (
      <div className={onSmallScreen() ? 'mm-link-container-small' : ''}>
        <div>
          <button
            className="back-button"
            aria-controls={`vetnav-${_.kebabCase(navTitle)}`}
            onClick={() => handleBackToMenu()}>
            Back to Menu
          </button>
        </div>

        {Object.keys(filteredColumns).map((keyName) => {
          return (
            <Column
              key={keyName}
              data={filteredColumns[keyName]}
              keyName={keyName}
              navTitle={navTitle}
              panelWhite={Object.prototype.hasOwnProperty.call(filteredColumns, 'mainColumn')}>
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
