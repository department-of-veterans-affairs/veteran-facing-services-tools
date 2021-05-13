import React, { useState } from 'react';
import Layout from '../../layouts/Layout';

import CommitsTable from '../../components/CommitsTable';
import DashboardDataFecth from '../../components/DashboardDataFetch';
import { vetsWebsiteInfo, contentBuildInfo } from '../../definitions/constants';

import 'web-components/dist/component-library/component-library.css';

import { defineCustomElements } from 'web-components/loader';
defineCustomElements();


export default function App({ location }) {
  const [appsDevBuildText, setAppsDevBuildText] = useState('');
  const [appsStagingBuildText, setAppsStagingBuildText] = useState('');
  const [appsProdBuildText, setAppsProdBuildText] = useState('');
  const [appsCommits, setAppsCommits] = useState([]);
  const [contentDevBuildText, setContentDevBuildText] = useState('');
  const [contentStagingBuildText, setContentStagingBuildText] = useState('');
  const [contentProdBuildText, setContentProdBuildText] = useState('');
  const [contentCommits, setContentCommits] = useState([]);

  // Fetches vets-website
  React.useEffect(function fetchComponentData() {
    DashboardDataFecth(vetsWebsiteInfo)
      .then(function handleSuccess(allData) {
        const {
          devBuildText,
          stagingBuildText,
          prodBuildText,
          commits,
        } = allData;
        setAppsDevBuildText(devBuildText);
        setAppsStagingBuildText(stagingBuildText);
        setAppsProdBuildText(prodBuildText);
        setAppsCommits(commits);
        return allData;
      })
      .catch(function handleError(error) {
        console.log(error); // eslint-disable-line no-console
      });
  }, []);

  // Fetches content-build
  React.useEffect(function fetchComponentData() {
    DashboardDataFecth(contentBuildInfo)
      .then(function handleSuccess(allData) {
        const {
          devBuildText,
          stagingBuildText,
          prodBuildText,
          commits,
        } = allData;
        setContentDevBuildText(devBuildText);
        setContentStagingBuildText(stagingBuildText);
        setContentProdBuildText(prodBuildText);
        setContentCommits(commits);
        return allData;
      })
      .catch(function handleError(error) {
        console.log(error); // eslint-disable-line no-console
      });
  }, []);

  return (
    <Layout location={location}>

      <div id="main-content" className="vads-l-col--8 site-c-content__content docSearch-content">
        <h1>Frontend Support Dashboard</h1>

        <h2>Vets-website</h2>

        <CommitsTable
          repo={vetsWebsiteInfo}
          devBuildText={appsDevBuildText}
          stagingBuildText={appsStagingBuildText}
          prodBuildText={appsProdBuildText}
          commits={appsCommits}
        />

        <h2>Content-build</h2>

        <CommitsTable
          repo={contentBuildInfo}
          devBuildText={contentDevBuildText}
          stagingBuildText={contentStagingBuildText}
          prodBuildText={contentProdBuildText}
          commits={contentCommits}
        />
      </div>

    </Layout>
  );
}
