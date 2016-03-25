#!/usr/bin/env node
require('shelljs/global');

var args = require('./src/args');

if(args.init) {
  // generate the project structure
  cp('-r', __dirname + '/templates/*', './');
  echo('The project is generated.');
  echo('I am leaving it up to you to');
  echo('npm install --save react react-dom');
} else if(args.build) {
  // build the project
  var compiler = require('./src/compiler');
  compiler.run(function(err, stats) {
  });
} else {
  // make a local dev server
  var server = require('./src/server');
  server.listen(args.port, 'localhost', function(err) {
    if(err) {
      console.error(err);
    } else {
      console.log('[react-dev-server]', 'started on localhost:' + args.port);
    }
  });
}
