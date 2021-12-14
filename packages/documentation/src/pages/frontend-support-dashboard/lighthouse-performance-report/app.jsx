import React, { useEffect, useState } from 'react';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import * as coverageReport from './lighthouse-report.json';

const transformCoverageReportToArray = async report => {
  // Add each app coverage result to the table
  return Object.values(report).map(cov => {
    return ({
      rootUrl: `www.va.gov${cov.path}`,
      s3: `https://vetsgov-website-builds-s3-upload.s3-us-gov-west-1.amazonaws.com/lighthouse${cov.s3}`,
    });
  });
};

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
          <ul>
            {Object.keys(coverageReportData).map(function(key){
              return <li><a href={coverageReportData[key].s3}>{coverageReportData[key].rootUrl}</a></li>;
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default App;
