var readline = require('readline');
var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');

var args = require('./args');

// https://webpack.github.io/docs/webpack-dev-server.html#api
var compiler = webpack(require('./config.js'));
compiler.apply(new ProgressPlugin(function(percentage, msg) {
  readline.clearLine(process.stdout, 0);
  process.stdout.cursorTo(0);
  process.stdout.write(Math.floor(percentage * 100) + '% ' + msg + '\r');
}));

module.exports = compiler;
