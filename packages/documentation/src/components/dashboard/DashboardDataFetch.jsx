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
  const stagingBuildText = await stagingBuildTextResponse.text();
  const prodBuildText = await prodBuildTextResponse.text();
  const commits = await commitsResponse.json();

  const result = {
    devBuildText,
    stagingBuildText,
    prodBuildText,
    commits,
  };

  return result;
}