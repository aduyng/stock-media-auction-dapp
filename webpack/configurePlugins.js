const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');

module.exports = (argv) => {
  const plugins = [];

  plugins.push(new webpack.LoaderOptionsPlugin({
    options: {
      handlebarsLoader: {},
    },
  }));

  plugins.push(new HtmlWebpackPlugin({
    title: argv.title,
    template: 'app/index.hbs',
  }));

  plugins.push(new webpack.DefinePlugin(Object.assign({
    'process.env': _.reduce(_.omit(argv, '_'), (memo, value, key) => {
      _.set(memo, key, JSON.stringify(value));
      return memo;
    }, {}),
  })));

  return plugins;
};
