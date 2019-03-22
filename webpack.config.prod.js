const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fullCSS = new ExtractTextPlugin('formation.min.css');

module.exports = {
  entry: {
    formation: './sass/full.scss',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'packages/formation/dist'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: fullCSS.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './img/'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    fullCSS
  ]
};
