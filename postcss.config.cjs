module.exports = (cfg) => {
  const devMode = (cfg.env === 'development');

  return {
    map: devMode ? 'inline' : null,
    plugins: [
      require('postcss-import')(),
      // only before dev 825.7kb (gzipped: 95.9k kb)
      require('autoprefixer')(),
      require('postcss-nested')(),
      devMode ? null : require('cssnano')(),
      require('postcss-apply-class')
    ]
  };
};