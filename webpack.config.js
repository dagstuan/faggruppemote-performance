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
  }
};























// entry: {
//     main: './src/index.js',
//     vendor: ['react', 'react-dom'],
//   },

// plugins: [
//   new webpack.optimize.CommonsChunkPlugin({
//     names: [ 'vendor', 'manifest' ]
//   })
// ],

// plugins: [
//   new webpack.optimize.CommonsChunkPlugin({
//     name: 'main',
//     children: true,
//   }),
//   new webpack.optimize.CommonsChunkPlugin({
//     name: 'vendor',
//     minChunks: function (module) {
//       // this assumes your vendor imports exist in the node_modules directory
//       return module.context && module.context.indexOf('node_modules') !== -1;
//     },
//   }),
//   new webpack.optimize.CommonsChunkPlugin({
//     name: 'manifest',
//     minChunks: Infinity
//   })
//  new webpack.optimize.CommonsChunkPlugin({
//    names: [ 'vendor', 'manifest' ]
//   })
// ],
