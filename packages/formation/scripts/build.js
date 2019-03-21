/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.prod.js');
const rimraf = require('rimraf');

console.log('Starting Formation build');
console.log('Cleaning old build');

rimraf.sync('./dist');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors);
    throw new Error('Webpack compilation error');
  }
  console.log(stats.toString('minimal'));
});
