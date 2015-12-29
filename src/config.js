var path = require('path');
var webpack = require('webpack');

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

var entries = args.entry;
entries = entries.map(function(entry) {
  return path.resolve(args.src, entry);
});
if(!args.build) {
  entries.unshift(useReactDevServerPackage('webpack-dev-server/client?http://localhost:' + args.port));
  entries.unshift(useReactDevServerPackage('webpack/hot/dev-server'));
}

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
        query: {
          presets: presets
        }
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
