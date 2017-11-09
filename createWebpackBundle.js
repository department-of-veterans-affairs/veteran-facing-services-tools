const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    entry: {
      components: './fractalEntry.js',
      styles: './sass/site.scss'
    },
    output: {
      filename: `[name].bundle.js`,
      path: path.join(__dirname, 'dist')
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
        },
				{
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'resolve-url-loader' },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    '~/uswds/src/stylesheets&sourceMap'
                  ],
                  sourceMap: true,
                }
              }
            ],
          })
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: {
            loader: 'url-loader?limit=10000!img?progressive=true&-minimize'
          }
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader'
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css',
      })
    ]
  });

  if (watch) {
    compiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    compiler.run((err, stats) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports = createWebpackBundle;
