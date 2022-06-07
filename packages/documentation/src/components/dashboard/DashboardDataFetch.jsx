/* eslint-disable camelcase */
import { Octokit } from '@octokit/rest';

function getWorkflowRuns(repo) {
  const octokit = new Octokit();

  const params = {
    owner: 'department-of-veterans-affairs',
    repo,
    workflow_id: 'continuous-integration.yml',
    branch: 'main',
    per_page: 100,
    page: 1,
  };

  return octokit.rest.actions.listWorkflowRuns(params).then(response => {
    if (response.status !== 200) {
      throw new Error(`Response ${response.status} from ${response.url}.`);
    }
    return response.data.workflow_runs;
  });
}

export async function DeployStatusDataFetch(repo) {
  // https://dmitripavlutin.com/javascript-fetch-async-await/#5-parallel-fetch-requests
  const [
    devBuildTextResponse,
    stagingBuildTextResponse,
    prodBuildTextResponse,
    commitsResponse,
    workflowRuns,
  ] = await Promise.all([
    fetch(repo.devBuildText),
    fetch(repo.stagingBuildText),
    fetch(repo.prodBuildText),
    // last 30 commits from vets-website
    fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}/commits`),
    getWorkflowRuns(repo.repo),
  ]);

  const devBuildText = await devBuildTextResponse.text();
  if (!devBuildTextResponse.ok) {
    throw Error(devBuildTextResponse.statusText);
  }
  const stagingBuildText = await stagingBuildTextResponse.text();
  if (!stagingBuildTextResponse.ok) {
    throw Error(stagingBuildTextResponse.statusText);
  }
  const prodBuildText = await prodBuildTextResponse.text();
  if (!prodBuildTextResponse.ok) {
    throw Error(prodBuildTextResponse.statusText);
  }
  const commits = await commitsResponse.json();
  if (!commitsResponse.ok) {
    throw Error(commitsResponse.statusText);
  }

  const result = {
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
    workflowRuns,
  };

  return result;
}

export async function TestCoverageDataFetch(repo) {
  const testCoverageDataResponse = await fetch(repo.prodTestCoverage);
  if (!testCoverageDataResponse.ok) {
    throw Error(testCoverageDataResponse.statusText);
  }
  return testCoverageDataResponse.json();
}

export async function statusDataFetch(repo) {
  const statusDataResponse = await fetch(repo.backendStatus);
  if (!statusDataResponse.ok) {
    throw Error(statusDataResponse.statusText);
  }
  return statusDataResponse.json();
}

export async function crossAppImportDataFetch(repo) {
  const crossAppImportDataResponse = await fetch(repo.crossAppImports);
  if (!crossAppImportDataResponse.ok) {
    throw Error(crossAppImportDataResponse.statusText);
  }
  return crossAppImportDataResponse.json();
}
