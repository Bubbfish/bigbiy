// const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
    //   publicPath: process.env.CI_PUBLIC_PATH || '/family',
    //   css: {
    //     loaderOptions: {
    //       stylus: {
    //         'resolve url': true,
    //         'import': [
    //           './src/theme'
    //         ]
    //       }
    //     }
    //   },
      devServer: {
        host: '0.0.0.0',
        port: '8091',
        proxy: 'http://luntan.bigbiy.com'
      },
    //   pluginOptions: {
    //     'cube-ui': {
    //       postCompile: true,
    //       theme: true
    //     }
    //   },
    //   configureWebpack: config => {
    //     config.plugins = config.plugins.concat(
    //       new WebpackAssetsManifest({
    //         output: 'manifest.json'
    //       })
    //     )
    //   }
}
