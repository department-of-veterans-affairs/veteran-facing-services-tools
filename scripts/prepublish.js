/* eslint-disable no-console */
/**
 * Ensure that we're publishing from the master branch.
 */

const { execSync } = require('child_process');
const chalk = require('chalk');

const branchName = execSync('git branch --show-current');

if (branchName !== 'master') {
  console.log(
    chalk.yellow(
      `You're currently on branch ${chalk.cyan(
        branchName,
      )}Please check out ${chalk.cyan('master')} before publishing.\n`,
    ),
  );
  process.exit(1);
}
