import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import * as coverageReport from './test-coverage-report.json';

// uncomment when we re-automate test coverage reports
// import { TestCoverageDataFetch } from '../../../components/dashboard/DashboardDataFetch';
// import { vetsWebsiteInfo } from '../../../components/dashboard/definitions/constants';

const transformCoverageReportToArray = async report => {
  // Add each app coverage result to the table
  return Object.values(report).map(cov => {
    const appName = cov.path.substr(0, cov.path.lastIndexOf('/')) || 'All Files';

    return ({
      appName,
      lines: `${cov.lines.pct}%`,
      functions: `${cov.functions.pct}%`,
      statements: `${cov.statements.pct}%`,
      branches: `${cov.branches.pct}%`,
    });
  });
};

const coverageReportFields = [
  {
    label: 'Application',
    value: 'appName',
  },
  {
    label: 'Lines',
    value: 'lines',
  },
  {
    label: 'Functions',
    value: 'functions'
  },
  {
    label: 'Statements',
    value: 'statements',
  },
  {
    label: 'Branches',
    value: 'branches'
  },
];

const App = ({ location }) => {
  const [coverageReportData, setCoverageReportData] = useState([]);

  useEffect(() => {
    const handleCoverageReportData = async () => {
      // uncomment when we re-automate test coverage reports
      // const rawTableData = await TestCoverageDataFetch(vetsWebsiteInfo);
      const rawTableData = coverageReport.default;
      const transformedTableData = await transformCoverageReportToArray(rawTableData);
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
          <h2>Unit Test Coverage Report</h2>
          <p>Last updated: January 3, 2021</p>
          <Table data={coverageReportData} fields={coverageReportFields} />
          <p>
            Report file (
            <a href="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages/documentation/src/pages/frontend-support-dashboard/unit-test-coverage-report/test-coverage-report.json">
              test-coverage-report.json
            </a>) generated by running <code>yarn test:coverage-apps</code>
            in the <a href="https://github.com/department-of-veterans-affairs/vets-website">vets-website</a> repository
            then uploaded to the <a 
              href="https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/documentation/src/pages/frontend-support-dashboard/unit-test-coverage-report">
              veteran-facing-services-tools
            </a> repository.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default App;
