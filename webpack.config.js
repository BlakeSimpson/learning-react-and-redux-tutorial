const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');
const JS_DIR = path.resolve(APP_DIR, 'js');

const config = {
  entry: JS_DIR + '/application.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
