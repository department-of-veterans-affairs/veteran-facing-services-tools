const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

// const fullCSS = new ExtractTextPlugin('formation.min.css');

module.exports = {
  entry: {
    formation: './sass/full.scss',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'packages/formation/dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader' }
          ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'url-loader?limit=10000!img?progressive=true&-minimize',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader?limit=1024'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'formation.min.csss'
    })
  ]
};
