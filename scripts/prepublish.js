/**
 * Ensure that we're publishing from the master branch.
 */

const { execSync } = require('child_process');
const chalk = require('chalk');

(async () => {
  const branchName = execSync('git branch --show-current');

  if (branchName !== 'master') {
    // eslint-disable-next-line no-console
    console.log(
      chalk.yellow('Please check out the master branch before publishing.\n'),
    );
    process.exit(1);
  }
})();
