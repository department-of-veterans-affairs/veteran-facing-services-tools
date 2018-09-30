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
    return {
      columnOne: {
        title: columns.columnOne.title,
        links: [
          ...columns.columnOne.links,
          ...columns.columnTwo.links,
        ],
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

        {
          seeAllLink && <div className="panel-bottom-link">
            <a href={seeAllLink.href} onClick={this.props.linkClicked}>
              View All in {seeAllLink.text}
              <img src="/img/arrow-right-blue.svg" alt="right-arrow"></img>
            </a>
          </div>
        }

        {Object.keys(filteredColumns).map((keyName) => {
          return (
            <Column
              key={keyName}
              data={filteredColumns[keyName]}
              keyName={keyName}
              navTitle={navTitle}
              panelWhite={Object.prototype.hasOwnProperty.call(filteredColumns, 'mainColumn')}
              linkClicked={this.props.linkClicked}
              columnThreeLinkClicked={this.props.columnThreeLinkClicked}>
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
  linkClicked: PropTypes.func.isRequired,
  columnThreeLinkClicked: PropTypes.func.isRequired
};

export default SubMenu;
