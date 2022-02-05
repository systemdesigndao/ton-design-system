module.exports = (cfg) => {

  const devMode = (cfg.env === 'development');

  return {

    map: devMode ? 'inline' : null,
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('postcss-nested')(),
      devMode ? null : require('cssnano')()
    ]

  };

};