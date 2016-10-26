var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'src', 'index');

module.exports = {
  devtool: 'source-map',
  entry:
    mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: [new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BACKEND_SERVER': JSON.stringify('http://46.101.105.76')
      }
    })],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
