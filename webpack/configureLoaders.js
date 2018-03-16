module.exports = () => {
  const rules = [];

  rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  rules.push({
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
    },
  });

  rules.push({
    test: /\.hbs$/,
    use: [{
      loader: 'handlebars-loader',
      options: {
        ignorePartials: true,
      },
    }],
  });

  rules.push({
    test: /\.scss$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'sass-loader',
    }],
  });

  rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader',
    options: {
      limit: 8192,
    },
  });
  return { rules };
};
