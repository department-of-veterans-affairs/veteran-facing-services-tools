const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

function createWebpackBundle(fractalComponents, watch = true) {
  const components = fractalComponents
    .flatten()
    .toArray()
    .filter(item => item.context.componentSourcePath)
    .map((item, index) => {
      return `
        import component${index} from './${path.relative(__dirname, item.viewPath)}'; 
        registry['${item.handle}'] = component${index};
      `
    });

  const output = `const registry = {};
  import React from 'react';
  import ReactDOM from 'react-dom';
  ${components.join('\n')}
  const mountPoint = document.getElementById('reactMount');
  if (mountPoint) {
    const Component = registry[mountPoint.getAttribute('data-tpl')]
    ReactDOM.render(<Component {...window.currentProps}/>, mountPoint);
  }`;

  fs.writeFileSync('./fractalEntry.js', output);

  const compiler = webpack({
    entry: `./fractalEntry.js`,
    output: {
      filename: `dist/components.bundle.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        },
        {
          test: /\.njk$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Speed up compilation.
              cacheDirectory: '.babelcache'

              // Also see .babelrc
            }
          }
        }
      ]
    }
  });

  if (watch) {
    compiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    compiler.run((err) => {
      console.log(err);
    });
  }
}

module.exports = createWebpackBundle;
