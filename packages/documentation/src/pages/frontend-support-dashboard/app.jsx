import React, { useReducer } from 'react';
import Layout from '../../layouts/Layout';
import Sidebar from '../../components/sidebar/Sidebar';

import CommitsTable from '../../components/dashboard/CommitsTable';
import { DeployStatusDataFetch } from '../../components/dashboard/DashboardDataFetch';
import { deployStatusInitialState, DeployStatusReducer } from '../../components/dashboard/Reducer'
import { vetsWebsiteInfo, contentBuildInfo } from '../../components/dashboard/definitions/constants';

import 'web-components/dist/component-library/component-library.css';

import { defineCustomElements } from 'web-components/loader';

defineCustomElements();


export default function App({ location }) {

  const [state, dispatch] = useReducer(DeployStatusReducer, deployStatusInitialState);
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
    DeployStatusDataFetch(vetsWebsiteInfo)
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
    DeployStatusDataFetch(contentBuildInfo)
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
      <div className="vads-l-row site-l-wrapper">
        <Sidebar location={location} />
        <div id="main-content" className="dash-deploy-status site-c-content__content docSearch-content vads-l-col--12">
          <h1>Frontend Support Dashboard</h1>

          <h2>Deploy Status vets-website</h2>
          <CommitsTable
            repo={vetsWebsiteInfo}
            devBuildText={appsDevBuildText}
            stagingBuildText={appsStagingBuildText}
            prodBuildText={appsProdBuildText}
            commits={appsCommits}
          />

          <h2>Deploy Status content-build</h2>
          <CommitsTable
            repo={contentBuildInfo}
            devBuildText={contentDevBuildText}
            stagingBuildText={contentStagingBuildText}
            prodBuildText={contentProdBuildText}
            commits={contentCommits}
          />
        </div>
      </div>
    </Layout>
  );
}
