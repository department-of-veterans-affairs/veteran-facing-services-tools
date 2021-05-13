import React, { useReducer } from 'react';
import Layout from '../../layouts/Layout';

import CommitsTable from '../../components/dashboard/CommitsTable';
import DashboardDataFecth from '../../components/dashboard/DashboardDataFetch';
import { initialState, DashboardReducer } from '../../components/dashboard/Reducer'
import { vetsWebsiteInfo, contentBuildInfo } from '../../components/dashboard/definitions/constants';

import 'web-components/dist/component-library/component-library.css';

import { defineCustomElements } from 'web-components/loader';
defineCustomElements();


export default function App({ location }) {

  const [state, dispatch] = useReducer(DashboardReducer, initialState);
  const {     
    appsDevBuildText,
    appsStagingBuildText,
    appsProdBuildText,
    appsCommits,
    contentDevBuildText,
    contentStagingBuildText,
    contentProdBuildText,
    contentCommits
  } = state;

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

        dispatch({
          type: 'vetsWebsite',
          appsDevBuildText: devBuildText,
          appsStagingBuildText: stagingBuildText,
          appsProdBuildText: prodBuildText,
          appsCommits: commits,
        })
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

        dispatch({
          type: 'contentBuild',
          contentDevBuildText: devBuildText,
          contentStagingBuildText: stagingBuildText,
          contentProdBuildText: prodBuildText,
          contentCommits: commits,
        })
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
