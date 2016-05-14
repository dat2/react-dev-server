var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var json5 = require('json5');
var Immutable = require('immutable');

var args = require('./args');

// we use this so that users don't need to npm install all the webpack stuff
function useReactDevServerPackage(pkg) {
  return path.resolve(__dirname, '../node_modules') + '/' + pkg;
}

var presets = ['react', 'es2015'];
if(args['stage-0']) {
  presets.push('stage-0');
}
presets = presets.map(function(preset) {
  return useReactDevServerPackage('babel-preset-' + preset);
});
var query = {
  presets: presets
};

var entries = args.entry;
entries = entries.map(function(entry) {
  return path.resolve(args.src, entry);
});
if(args.hot && !args.build) {
  entries.unshift(useReactDevServerPackage('webpack-dev-server/client?http://localhost:' + args.port));
  entries.unshift(useReactDevServerPackage('webpack/hot/dev-server'));
}

var plugins = [];
if(args.hot && !args.build) {
  plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

function readUserBabelrc() {
  try {
    return json5.parse(fs.readFileSync(path.resolve(process.cwd(), '.babelrc'), 'utf-8'));
  } catch(err) {
    return {};
  }
}

var immQuery = Immutable.fromJS(query);
var immBabelrc = Immutable.fromJS(readUserBabelrc());
var babelConfig = immQuery.mergeDeepWith( function(a, b) { return a.concat(b); }, immBabelrc);

module.exports = {
  entry: entries,

  output: {
    path: path.resolve(args.static),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: useReactDevServerPackage('babel-loader'),
        query: babelConfig.toJS()
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  devtool: 'inline-source-map',

  plugins: plugins
};
