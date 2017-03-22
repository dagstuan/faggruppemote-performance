const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    compress: true,
    publicPath: '/dist/',
  },
};
