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
        '/',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess(renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      }
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

      // cleanup svg ids and prefix them with a number, see: https://github.com/svg/svgo/issues/674#issuecomment-328774019
      .options({
        svgo: {
          plugins: [{
            cleanupIDs: {
              prefix: {
                toString() {
                  this.counter = this.counter || 0;
                  return `id-${this.counter++}`;
                }
              }
            }
          }]
        }
      })
  },
};
/* eslint-enable */
