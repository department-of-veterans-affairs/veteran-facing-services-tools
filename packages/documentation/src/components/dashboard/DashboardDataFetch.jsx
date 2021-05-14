export default async function DashboardDataFecth(repo) {
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