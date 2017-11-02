/*
 * Adapted from https://github.com/guzart/fain/tree/v0.9.0/packages/fain-src/lib/frctl-react-adapter
 * License: https://github.com/guzart/fain/blob/v0.9.0/LICENSE
 */

require('babel-register');
const Adapter = require('@frctl/fractal').Adapter;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

function clearRequireCache() {
  Object.keys(require.cache)
    .forEach(id => delete require.cache[id]);
}

class ReactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.fractal = app;
    this.engineName = engineName;
    this.instance = instance;
    this.source = source;
    this.cache = {};
  }

  render(tplPath, tplCode, tplContext, meta) {
    try {
      clearRequireCache();
      const Component = require(tplPath).default;
      const { engineName, fractal, instance, source } = this;

      const element = React.createElement(Component, tplContext);
      const html = ReactDOMServer.renderToStaticMarkup(element);
      const script = `<script>window.currentProps = ${JSON.stringify(tplContext)}</script>`;

      return Promise.resolve(`<div id="reactMount" data-tpl="${path.basename(tplPath, '.njk')}">${html}</div>${script}`);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}

module.exports = ReactAdapter;
