/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.prod.js');

console.log('Starting Formation build');
console.log('Cleaning old build');

webpack(webpackConfig, (err, stats) => {
  // error handling copied from https://webpack.js.org/api/node/#error-handling
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log(stats.toString('minimal'));
});
