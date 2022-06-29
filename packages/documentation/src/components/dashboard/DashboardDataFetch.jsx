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
  const deploys = await deploysFetch(
    repo,
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
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

  // Add each commit to results
  for (const { sha } of commits) {
    if (sha === devRef) isOnDev = true;
    if (sha === stagingRef) isOnStaging = true;
    if (sha === prodRef) isOnProd = true;

    // If commit wasn't deployed by a full build, check for single-app build
    let isSingleAppBuild = false;
    if (isVetsWebsite && (!isOnDev || !isOnStaging || !isOnProd)) {
      const buildArtifactUrl = `${repo.buildArtifactBucket}/${sha}/BUILD_ARTIFACT.txt`;
      const response = await fetch(buildArtifactUrl);
      if (response.ok) {
        const fileText = await response.text();
        const matchText = fileText.match(/IS_SINGLE_APP_BUILD=(\w+)/)[1];
        isSingleAppBuild = matchText === 'true';
      }
    }

    results[sha] = {
      dev: isOnDev || isSingleAppBuild,
      staging: isOnStaging || isSingleAppBuild,
      prod: isOnProd || isSingleAppBuild,
    };
  }

  return results;
}
