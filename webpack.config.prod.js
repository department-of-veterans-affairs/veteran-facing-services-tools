const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// const fullCSS = new ExtractTextPlugin('formation.min.css');

module.exports = {
  entry: {
    formation: './sass/full.scss',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'packages/formation/dist'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
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
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/img/'
          }
        }
      },
      {
        test: /\.svg/,
        oneOf: [
          {
            include: /fa-.*/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'formation.min.css'
    }), // extracts css into separate file
    new CleanWebpackPlugin(), // cleans output directory before build
    new CopyPlugin([
      { from: './assets', to: './assets' },
    ]) // copies assets to dist directory during build
  ]
};
