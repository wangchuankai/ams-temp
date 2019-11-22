const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}
function isProd () {
  return process.env.NODE_ENV === 'production'
}
console.log(isProd ());
const assetsCDN = {
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    //'//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}
// webpack build externals
const prodExternals = {
  vue: 'Vue',
  //'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
      .set('@utils', resolve('src/utils'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    if (isProd()) {
        config.plugin('html').tap(args => {
          args[0].cdn = assetsCDN
          return args
        })
      }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          'primary-color': '#1c9ef2',
          'link-color': '#1c9ef2',
          /*
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // development server port 8000
    port: 8000,
    proxy: {
    '/api/': {
        target: 'http://t-userapp.piaoliusan.com/', // 中台开发域名
        // target: 'http://c-userapp.piaoliusan.com/', // 中台测试域名
        changeOrigin: true,
        pathRewrite: { '^/api/': '' }
    }
    }
  },
  productionSourceMap: true,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
