import { Octokit } from '@octokit/rest';

function getWorkflowRunsAsCommitStatusObject(repo) {
  const octokit = new Octokit();

  const params = {
    owner: 'department-of-veterans-affairs',
    repo,
    workflow_id: 'continuous-deploy-production.yml',
    branch: 'main',
    per_page: 30,
    page: 1,
  };

  return octokit.rest.actions
    .listWorkflowRuns(params)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Response ${response.status} from ${response.url}.`);
      }
      return response.data;
    })
    .then(({ workflow_runs }) => {
      if (workflow_runs.length === 0) {
        throw new Error('No workflows found.');
      }

      return workflow_runs.reduce((map, obj) => {
        map[obj['head_sha']] = obj['conclusion'];
        return map;
      }, {});
    });
}

export async function DeployStatusDataFetch(repo) {
  // https://dmitripavlutin.com/javascript-fetch-async-await/#5-parallel-fetch-requests
  const [
    devBuildTextResponse,
    stagingBuildTextResponse,
    prodBuildTextResponse,
    commitsResponse,
  ] = await Promise.all([
    fetch(repo.devBuildText),
    fetch(repo.stagingBuildText),
    fetch(repo.prodBuildText),
    // last 30 commits from vets-website
    fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}/commits`),
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
  let workflowConclusions = {};
  if (repo.repo === 'vets-website') {
    // Needed only for vets-website since it supports single-app builds
    workflowConclusions = await getWorkflowRunsAsCommitStatusObject(repo.repo);
  }
  const deploys = await deploysFetch(
    repo,
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
    workflowConclusions,
  );

  const result = {
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
    deploys,
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

export async function deploysFetch(
  repo,
  devBuildText,
  stagingBuildText,
  prodBuildText,
  commits,
  workflowConclusions,
) {
  // Store results as a hash with sha and env as the keys, and boolean as value
  // representing whether the commit was deployed to the env
  const results = {};

  // Parse BUILD.txt files to get shas of most recent full builds
  const devRows = devBuildText.split('\n').filter(x => x) || [];
  const stagingRows = stagingBuildText.split('\n').filter(x => x);
  const prodRows = prodBuildText.split('\n').filter(x => x);
  const devRef = devRows[6]?.slice(4);
  const stagingRef = stagingRows[6]?.slice(4);
  const prodRef = prodRows[6]?.slice(4);

  let isVetsWebsite = repo.repo === 'vets-website';
  let isOnDev = false;
  let isOnStaging = false;
  let isOnProd = false;

  // Gets the value of a property in a text file
  const getValueFromFile = (fileContents, propertyName) =>
    fileContents.match(`${propertyName}=(\\w+)`)?.[1];

  // Add each commit to results
  for (const { sha } of commits) {
    if (sha === devRef) isOnDev = true;
    if (sha === stagingRef) isOnStaging = true;
    if (sha === prodRef) isOnProd = true;

    // If commit wasn't deployed by a full build, check for single-app build
    let hasSuccessfulSingleAppBuild = false;
    let isContinuousDeploymentEnabled = false;
    if (isVetsWebsite && (!isOnDev || !isOnStaging || !isOnProd)) {
      const buildArtifactUrl = `${repo.buildArtifacts}/${sha}.txt`;
      const response = await fetch(buildArtifactUrl);
      if (response.ok) {
        const fileText = await response.text();
        const isSingleAppBuild =
          getValueFromFile(fileText, 'IS_SINGLE_APP_BUILD') === 'true';
        const workflowSucceeded = workflowConclusions[sha] === 'success';
        hasSuccessfulSingleAppBuild = isSingleAppBuild && workflowSucceeded;
        isContinuousDeploymentEnabled =
          getValueFromFile(fileText, 'IS_CONTINUOUS_DEPLOYMENT_ENABLED') ===
          'true';
      }
    }

    results[sha] = {
      dev: isOnDev || hasSuccessfulSingleAppBuild,
      staging: isOnStaging || hasSuccessfulSingleAppBuild,
      prod:
        isOnProd ||
        (isContinuousDeploymentEnabled && hasSuccessfulSingleAppBuild),
      continuousDeployment: isContinuousDeploymentEnabled,
    };
  }

  return results;
}
