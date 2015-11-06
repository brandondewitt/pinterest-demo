require('babel-core/register')({
  stage: 0
});
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var api = require('./api');
var express = require('express');
var app = express();

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:' + config.apiPort
});

app.use('/api', function (req, res) {
  proxy.web(req, res);
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    "/api/*": "http://localhost:3030"
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
  api()
  .then(() => {
    console.log('api Listening on 3030')
  })
});
