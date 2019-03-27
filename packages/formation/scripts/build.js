/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.prod.js');

console.log('Starting Formation build');
console.log('Cleaning old build');

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors);
    throw new Error('Webpack compilation error');
  }
  console.log(stats.toString('minimal'));
});
