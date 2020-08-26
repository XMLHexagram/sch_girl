'use strict'

const { mode } = require('webpack-nano/argv')

const parts = require('./webpack.part.js')
const { merge } = require('webpack-merge')

console.log(mode)

const commonConfig = merge([
  {
    entry: ['./src', 'webpack-plugin-serve/client'],
    devtool: 'cheap-module-source-map',
  },
  parts.page({ title: 'sch-girl' }),
  // parts.loadCSS(),
  parts.WebpackNotifier(),
  parts.dotenv(),
  parts.errorOverlay(),
])

const productionConfig = merge([parts.dashBoard(), parts.extractCSS()])

const developmentConfig = merge([
  parts.devServer(),
  parts.extractCSS({ options: { hmr: true } }),
])

const getConfig = (mode) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, { mode })
    case 'development':
      return merge(commonConfig, developmentConfig, { mode })
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`)
  }
}

module.exports = getConfig(mode)
