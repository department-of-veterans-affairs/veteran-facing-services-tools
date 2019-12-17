/* eslint no-param-reassign: "error" */

require('babel-register')();

module.exports = (settings => {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
