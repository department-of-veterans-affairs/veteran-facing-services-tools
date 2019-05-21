const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    formationCSS: './sass/full.scss',
    formation: './js/index.js',
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
            {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [require('autoprefixer')],
                },
            },
            { loader: 'sass-loader' }
          ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
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
              outputPath: 'fonts/'
            }
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
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
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /__tests__/],
        use: {
          loader: 'babel-loader',
          options: {
            root: '../../'
          }
        },
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'formation.min.css'
    }), // extracts css into separate file
    new CleanWebpackPlugin(), // cleans output directory before build
    new CopyPlugin([
      { from: './assets/img', to: './img' },
      { from: './assets/fonts', to: './fonts' },
    ]) // copies assets to dist directory during build
  ]
};
