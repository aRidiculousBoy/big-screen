const { resolve } = require('path')


module.exports = {
  devServer: {
    open: true,
    hot: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@components': resolve('src/components'),
        '@store': resolve('src/store'),
        '@service': resolve('src/service'),
        '@assets': resolve('src/assets')
      }
    }
  }
}