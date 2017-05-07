const path = require('path');
module.exports =  {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".yml"]
  },
  module: {
    loaders: [
      {test: /\.yml$/, loader: 'json-loader!yaml-loader'}
    ]
  }
};