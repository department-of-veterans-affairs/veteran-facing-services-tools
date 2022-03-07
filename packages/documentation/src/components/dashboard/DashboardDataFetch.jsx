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

  const result = {
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
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
  console.log(statusDataResponse);
  if (!statusDataResponse.ok) {
    throw Error(statusDataResponse.statusText);
  }
  return statusDataResponse.json();
}