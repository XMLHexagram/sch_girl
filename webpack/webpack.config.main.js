'use strict'

const { mode } = require('webpack-nano/argv')
const paths = require('./paths')
const parts = require('./webpack.part.js')
const { merge } = require('webpack-merge')

process.env.NODE_ENV = mode
console.log(process.env.NODE_ENV)

const commonConfig = merge([
  {
    entry: ['./src/main/main.js'],
    // devtool: 'cheap-module-source-map',
    mode: process.env.NODE_ENV,
    output: {
      path: paths.appBundle,
      filename: 'main.js',
    },
    target: 'electron-main',
  },
  // parts.page({ title: 'sch-girl' }),
  // parts.loadCSS(),
  // parts.dotenv(),
  // parts.errorOverlay(),
  // parts.bundle_analyzer(),
  // parts.load_URL(),
  parts.load_babel(),
  // parts.WebpackNotifier(),
])

// const cssLoader = [parts.autoprefix(), parts.tailwind()]

const productionConfig = merge([
  // parts.dashBoard(),
  // parts.extractCSS({ loaders: cssLoader }),
])

const developmentConfig = merge([
  // parts.devServer(),
  // parts.extractCSS({ options: { hmr: true }, loaders: cssLoader }),
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
