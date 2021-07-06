import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import * as coverageReport from './test-coverage-report.json';
import Layout from '../../layouts/Layout';

const transformCoverageReportToArray = async report => {
  // Add each app coverage result to the table
  return Object.values(report).map(cov => {
    const appName = cov.path.substr(0, cov.path.lastIndexOf('/'));

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
      const transformedTableData = await transformCoverageReportToArray(coverageReport.default);
      setCoverageReportData(transformedTableData);
    };

    handleCoverageReportData();
    // return () => {
      //   // Cleanup connection as necessary
      // }
  }, []); 
  
  if (coverageReportData.length === 0) {
    return null;
  }

  return (
    <Layout location={location}>
      <div
        id="main-content-coverage"
        className="site-c-content__content docSearch-content"
      >
        <h1>Unit Test Coverage Report</h1>
        <Table data={coverageReportData} fields={coverageReportFields} />
      </div>
    </Layout>
  );
};

export default App;
