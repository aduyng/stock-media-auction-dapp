const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const minimist = require('minimist');
const configureLoaders = require('./webpack/configureLoaders');
const configurePlugins = require('./webpack/configurePlugins');
const variables = require('./variables.json');

const argv = minimist(process.argv.slice(2), { default: variables });

module.exports = {
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'inline-source-map' : undefined,
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  plugins: configurePlugins(argv),
  module: configureLoaders(argv),
};
