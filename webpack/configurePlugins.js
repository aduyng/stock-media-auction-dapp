const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  plugins.push(new webpack.DefinePlugin(Object.assign({ 'process.env': JSON.stringify(argv) })));

  return plugins;
};
