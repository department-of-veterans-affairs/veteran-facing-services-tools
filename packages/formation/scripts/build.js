/* eslint-disable no-console */
const mkdirp = require('mkdirp');
const fs = require('fs-extra');
const webpack = require('webpack');
const webpackConfig = require('../../../webpack.config.prod.js');

console.log('Starting Formation build');
console.log('Cleaning old build');
mkdirp.sync('./dist/img');
mkdirp.sync('./dist/fonts');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors);
    throw new Error('Webpack compilation error');
  }
  console.log(stats.toString('minimal'));
});

fs.copySync('./assets/img', './dist/img');
fs.copySync('./assets/fonts', './dist/fonts');
