var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
    contact: "./src/contact.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          // this overwrites the `publicPath` that's mentioned at the top
          // or else you'd have `assets/assets/image/slkfdjskldf.png`
          // in your css url(..)
          publicPath: "/"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: ["pug-loader"]
      }
    ]
  },
  devServer: {
    // Content not from webpack is served from
    contentBase: path.join(__dirname, "dist"),
    // Enable gzip
    compress: true,
    // Web server port
    port: 9000,
    // Show errors only on log
    stats: "errors-only",
    // Open browser
    open: true
  },
  plugins: [
    // This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
    new HtmlWebpackPlugin({
      title: "Webpack 102 Tutorial",
      // minify: {
      //   collapseWhitespace: true
      // },
      excludeChunks: ["contact"],
      hash: true,
      template: "./src/index.pug" // Load a custom template (ejs by default see the FAQ for details)
    }),
    new HtmlWebpackPlugin({
      title: "Contact",
      hash: true,
      chunks: ["contact"],
      filename: "contact.html",
      template: "./src/contact.pug" // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: false,
      allChunks: true
    })
  ]
};
