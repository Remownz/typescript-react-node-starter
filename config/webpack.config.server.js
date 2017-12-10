'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

module.exports = {
  entry: paths.serverIndex,
  target: "node",
  output: {
    path: paths.server,
    pathinfo: true,
    filename: "index.js",
    publicPath: publicPath
  },
  externals: [nodeExternals()],
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.js','.ts', '.tsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: require.resolve('tslint-loader'),
        options: {/* Loader options go here */}
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader')
      },
    ]
  }
};
