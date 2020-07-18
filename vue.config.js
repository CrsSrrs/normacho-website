/* eslint-disable */
module.exports = {
  outputDir: 'dist',
  runtimeCompiler: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        './src/sass/settings.scss'
      ]
    },
  },
};
/* eslint-enable */
