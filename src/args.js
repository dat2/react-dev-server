// yargs
module.exports = require('yargs')
  .usage('Usage: $0')
  .help('help')
  .alias('h', 'help')
  .options({
    init: {
      describe: 'Initialize the project structure.',
      boolean: true,
      default: false
    },
    src: {
      describe: 'The base directory for your application.',
      default: 'src'
    },
    entry: {
      describe: 'The entry point(s) to your application.',
      default: 'index.js',
      array: true
    },
    static: {
      describe: 'The directory for your static files.',
      default: 'public'
    },
    index: {
      describe: 'The index.html file.',
      default: 'index.html'
    },
    'stage-0': {
      describe: 'Use the stage-0 preset for babel.',
      default: false
    },
    hot: {
      describe: 'Hot module reload for webpack-dev-serevr',
      default: false
    },
    port: {
      describe: 'The port to run the server on.',
      default: 8080
    },
    build: {
      describe: 'Build the app into the static directory.',
      default: false
    },
    proxy: {
      describe: 'A list of proxy paths to hosts',
      default: [],
      array: true
    }
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .argv
