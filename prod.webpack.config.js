var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');
module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'src'],
    extensions: ['', '.webpack.js', '.web.js', '.js']
  }
};
