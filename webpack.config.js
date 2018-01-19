/* eslint-disable */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const babelExclude = /node_modules/;

var config = {
  entry: path.join(__dirname, 'main/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: babelExclude,
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'node-rsa': 'node-rsa',
    'jsonwebtoken': 'jsonwebtoken',
  },
  plugins: [
  ],
  target: 'node'
}

module.exports = config
