var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve("dist"),
    filename: "app.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack 102",
      template: "./src/index.ejs" // Load a custom template (ejs by default see the FAQ for details)
    })
  ]
};
