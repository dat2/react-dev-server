var path = require('path');
var WebpackDevServer = require('webpack-dev-server');

var args = require('./args');
var compiler = require('./compiler');

var proxy = {};
args.proxy.forEach(function(eachProxy) {
  var loc = eachProxy.indexOf(':');
  var split = [eachProxy.substr(0, loc), eachProxy.substr(loc+1)];
  proxy[split[0]] = split[1];
});

var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(args.static),
  hot: true,
  proxy: proxy,

  // webpack-dev-middleware
  quiet: false,
  noInfo: false,
  // lazy: true,
  filename: 'bundle.js',
  // watchOptions: {
    // aggregateTimeout: 300,
    // poll: 1000
  // },
  // publicPath: args.static,
  // headers: { 'X-Custom-Header': 'yes' },
  stats: { colors: true }
});

module.exports = server;
