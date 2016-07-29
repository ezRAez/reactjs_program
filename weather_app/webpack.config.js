var HTMLWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "app/index.html"),
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    "./app/index.js"
  ],
  module: {
    loaders: [
      // loads babel for every .js file!
      {test: /\.js$/,  include: path.join(__dirname, "app"), loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: path.join(__dirname, "dist")
  },
  plugins: [HTMLWebpackPluginConfig]
}
