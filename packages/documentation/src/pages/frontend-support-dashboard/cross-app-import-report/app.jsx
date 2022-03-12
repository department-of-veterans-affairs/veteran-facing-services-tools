import React, { useEffect, useState } from 'react';
import Table from '@department-of-veterans-affairs/component-library/Table';
import Layout from '../../../layouts/Layout';
import Sidebar from '../../../components/sidebar/Sidebar';
import { crossAppImportDataFetch } from '../../../components/dashboard/DashboardDataFetch';
import { vetsWebsiteInfo } from '../../../components/dashboard/definitions/constants';

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

  return status ? trueIcon : falseIcon;
};

/**
 * Transforms import graph data for table.
 *
 * @param {Object} importGraph - Cross app import graph.
 * @returns {Object[]} Transformed import graph data.
 */
const getAppImportData = importGraph => {
  return Object.keys(importGraph).map(appName => {
    const appImports = importGraph[appName];

    // Platform directory paths with files that import from the app.
    const platformImports = [
      ...new Set(
        appImports.platformFilesThatImportFromThisApp.map(
          file => `platform/${file.split('/')[2]}`,
        ),
      ),
    ];

    // Apps in 'appsToTest' let us know which apps import from the app in question.
    // The app itself is always first in 'appsToTest', so we need to remove it.
    const importingFromApp =
      [...appImports.appsToTest.slice(1), ...platformImports].join(', ') ||
      null;

    // Apps that the app in question is importing from.
    const appImportingFrom =
      Object.keys(appImports.appsThatThisAppImportsFrom).join(', ') || null;

    const isIsolated = !importingFromApp && !appImportingFrom;
    const icon = getStatusIcon(isIsolated);

    return { appName, importingFromApp, appImportingFrom, icon, isIsolated };
  });
};

/**
 * Gets statistics of isolated apps from the given import data.
 *
 * @param {Object[]} appImportData - Transformed app import data.
 * @returns {Object} Object with stats on isolated apps.
 */
const getIsolationStats = appImportData => {
  const totalAppCount = appImportData.length;
  const appsIsolated = appImportData.filter(app => app.isIsolated).length;

  const percentIsolated = ((appsIsolated / totalAppCount) * 100).toFixed(2);

  return { appsIsolated, totalAppCount, percentIsolated };
};

const crossAppImportFields = [
  { label: 'Application', value: 'appName' },
  { label: 'Places importing from application', value: 'importingFromApp' },
  { label: 'Places application imports from', value: 'appImportingFrom' },
  { label: 'Isolated', value: 'icon' },
];

const App = ({ location }) => {
  const [crossAppImportData, setCrossAppImportData] = useState([]);

  useEffect(() => {
    const processImports = async () => {
      const importGraph = await crossAppImportDataFetch(vetsWebsiteInfo);
      const crossAppImports = getAppImportData(importGraph);

      setCrossAppImportData(crossAppImports);
    };

    processImports();
  }, []);

  const stats = getIsolationStats(crossAppImportData);

  return (
    <Layout location={location}>
      <div className="vads-l-row site-l-wrapper">
        <Sidebar location={location} />
        <div
          id="main-content-coverage"
          className="dash-coverage-table site-c-content__content docSearch-content vads-l-col--12"
        >
          <h1>Frontend Support Dashboard</h1>
          <h2>Cross App Import Report</h2>
          <p>
            <strong>
              {stats.appsIsolated} out of {stats.totalAppCount} (
              {stats.percentIsolated} %) application directories are isolated
            </strong>
          </p>

          <Table data={crossAppImportData} fields={crossAppImportFields} />
        </div>
      </div>
    </Layout>
  );
};

export default App;
