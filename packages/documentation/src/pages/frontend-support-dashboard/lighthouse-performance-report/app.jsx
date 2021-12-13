import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import * as coverageReport from './lighthouse-report.json';

const transformCoverageReportToArray = async report => {
  // Add each app coverage result to the table
  return Object.values(report).map(cov => {
    return ({
      rootUrl: `va.gov${cov.path}`,
      s3: <a href={cov.s3}>{cov.s3}</a>,
    });
  });
};

const coverageReportFields = [
  {
    label: 'URL',
    value: 'rootUrl',
  },
  {
    label: 'S3 URL',
    value: 's3'
  }
];

const App = ({ location }) => {
  const [coverageReportData, setCoverageReportData] = useState([]);

  useEffect(() => {
    const handleCoverageReportData = async () => {
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
          <h2>Lighthouse Performance Report</h2>
          <p>Last updated: October 4, 2021</p>
          <Table data={coverageReportData} fields={coverageReportFields} />
        </div>
      </div>
    </Layout>
  );
};

export default App;
