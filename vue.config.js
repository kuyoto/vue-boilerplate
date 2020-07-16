const path = require('path')

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.performance
      .hints(process.env.NODE_ENV === 'production' &&  !process.env.VUE_APP_TEST && 'warning')
  },
  configureWebpack: {
    mode: process.env.NODE_ENV,
  },
  lintOnSave: true,
  css: {
  	loaderOptions: {
  		css: {
        sourceMap: process.env.NODE_ENV !== 'production' ? true : false
      },
  		sass: {}
  	}
  },
  transpileDependencies: [
      'vuetify'
  ],
  devServer: {
      disableHostCheck: true
  }
};
