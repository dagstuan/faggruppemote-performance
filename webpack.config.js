const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          'eslint-loader',
        ],
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      eslint: {
        failOnError: false,
        failOnWarning: false,
      },
    }),
  ],
  plugins: [
    // extract CSS into separate file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      children: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: [ 'vendor', 'manifest' ]
    // })
  ],
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
