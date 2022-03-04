import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import { statusDataFetch } from '../../../components/dashboard/DashboardDataFetch';
import { vetsWebsiteInfo } from '../../../components/dashboard/definitions/constants';
import { format } from 'date-fns';

/**
 * Gets a check or 'x' icon based on the given status.
 *
 * @param {boolean} status - Determines whether to return check or x icon.
 * @returns {JSX.Element} Status icon.
 */
const getStatusIcon = status => {
  const trueIcon = (
    <span className="dash-true-icon" aria-label="True Icon">
      <i className="fas fa-check-circle fa-2x" aria-hidden="true" />
    </span>
  );
  const falseIcon = (
    <span className="dash-false-icon" aria-label="False Icon">
      <i className="fas fa-times-circle fa-2x" aria-hidden="true" />
    </span>
  );

  const output = status === 'active' ? trueIcon : falseIcon;

  return output;
};

const truncate = str => {
  return str.length > 30 ? `${str.substring(0, 27)}...` : str;
}

const transformCoverageReportToArray = async report => {
  // Add each app coverage result to the table
  return Object.values(report.data.attributes.statuses).map(cov => {
    return {
      service: `${truncate(cov.service)}`,
      status: getStatusIcon(cov.status),
      lastIncidentTimestamp: cov.last_incident_timestamp
        ? format(Date.parse(cov.last_incident_timestamp), 'MM/dd/yyyy')
        : '-',
    };
  });
};

const App = ({ location }) => {
  const [coverageReportData, setCoverageReportData] = useState([]);

  useEffect(() => {
    const handleCoverageReportData = async () => {
      const rawTableData = await statusDataFetch(vetsWebsiteInfo);
      const transformedTableData = await transformCoverageReportToArray(
        rawTableData,
      );
      setCoverageReportData(transformedTableData);
    };

    handleCoverageReportData();
  }, []);

  if (coverageReportData.length === 0) {
    return null;
  }

  return (
    <Layout location={location}>
      <div className="vads-l-row site-l-wrapper">
        <Sidebar location={location} />
        <div
          id="main-content-coverage"
          className="dash-coverage-table site-c-content__content docSearch-content vads-l-col--12"
        >
          <h1>Frontend Support Dashboard</h1>
          <h2>Service Status</h2>
          <div className="vads-l-grid-container vads-u-padding--0">
            <div className="vads-l-row">
              {coverageReportData.map((_item, i) => {
                return (
                  <div
                    key={i}
                    className="vads-l-col--12 large-screen:vads-l-col--6 vads-u-display--flex vads-u-padding--2 vads-u-background-color--gray-light-alt vads-u-border-color--white vads-u-border--1px"
                  >
                    <div className="vads-u-flex--auto">
                      <div>
                        <strong>{_item.service}</strong>
                      </div>
                      <div>Last incident: {_item.lastIncidentTimestamp}</div>
                    </div>
                    <div className="vads-u-flex--auto vads-u-margin-left--auto">
                      {_item.status}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
