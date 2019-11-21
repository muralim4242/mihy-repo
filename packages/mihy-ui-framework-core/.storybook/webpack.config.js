module.exports = function({ config }) {
    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { injectDecorator: true },
        },
      ],
      enforce: 'pre',
    });
  
    return config;
  };