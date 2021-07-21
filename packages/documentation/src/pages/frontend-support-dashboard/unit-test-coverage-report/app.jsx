import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import * as coverageReport from './test-coverage-report.json';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import { TestCoverageDataFetch } from '../../../components/dashboard/DashboardDataFetch';
import { vetsWebsiteInfo } from '../../../components/dashboard/definitions/constants';

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
    // connect to S3 and retrieve coverage report
    const handleCoverageReportData = async () => {
      const rawTableData = await TestCoverageDataFetch(vetsWebsiteInfo);
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
      <div className="vads-l-row">
        <Sidebar location={location} />
        <div
          id="main-content-coverage"
          className="site-c-content__content docSearch-content vads-l-col--8"
        >
          <h1>Frontend Support Dashboard</h1>
          <h2>Unit Test Coverage Report</h2>
          <Table data={coverageReportData} fields={coverageReportFields} />
        </div>
      </div>
    </Layout>
  );
};

export default App;
