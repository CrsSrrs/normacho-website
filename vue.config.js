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
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: false,
      headless: false,
      onlyProduction: true
    }
  },
};
/* eslint-enable */
