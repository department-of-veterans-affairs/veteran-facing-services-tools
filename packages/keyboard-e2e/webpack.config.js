const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              import: true
            }
          }
        ]
      }
    ]
  },
  mode: "production",
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/index.html" },
      { from: "src/content", to: "content" }
    ]),
    new MiniCssExtractPlugin({ filename: "css/[name].bundle.css" })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080
  }
};
