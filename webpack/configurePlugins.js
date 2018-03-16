const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

  const envToPass = _.extend(_.omit(argv, '_', 'env'), argv.env);

  plugins.push(new webpack.DefinePlugin(Object.assign({
    'process.env': _.reduce(envToPass, (memo, value, key) => {
      _.set(memo, key, JSON.stringify(value));
      return memo;
    }, {}),
  })));

  if (argv.env.withAnalyzer === 'true') {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../performance/analyzer.html',
      generateStatsFile: true,
      statsFilename: '../performance/stats.json',
      openAnalyzer: false,
    }));
  }

  return plugins;
};
