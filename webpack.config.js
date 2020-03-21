const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = () => ({
  mode: isProd ? "production" : "development",
  entry: path.join(__dirname, "/src/index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html")
    })
  ]
});
