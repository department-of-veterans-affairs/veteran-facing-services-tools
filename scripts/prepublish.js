/**
 * Ensure that we're publishing from the master branch.
 */

const simpleGit = require('simple-git');
const chalk = require('chalk');

const git = simpleGit();

(async () => {
  await git.init();
  const branchName = (await git.branch()).current;

  if (branchName !== 'master') {
    // eslint-disable-next-line no-console
    console.log(
      chalk.yellow('Please check out the master branch before publishing.\n'),
    );
    process.exit(1);
  }
})();
