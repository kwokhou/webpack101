const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve("dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack 102 Tutorial",
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: "./src/index.ejs" // Load a custom template (ejs by default see the FAQ for details)
    })
  ]
};
