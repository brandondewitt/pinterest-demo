var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['angular-hmr', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'src'],
    extensions: ['', '.webpack.js', '.web.js', '.js']
  }
};
