'use strict'

const { mode } = require('webpack-nano/argv')
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const Dotenv = require('dotenv-webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

console.log(process.env.PORT)

module.exports = {
  watch: mode === 'development',
  entry: ['./src', 'webpack-plugin-serve/client'],
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin({
      context: {
        title: 'sch-girl',
      },
    }),
    new DashboardPlugin(),
    new Dotenv({ path: './.env' }),
    new WebpackPluginServe({
      client: {
        retry: true,
      },
      host: '127.0.0.1',
      port: process.env.PORT || 8080,
      static: './dist',
      liveReload: true,
    }),
    new ErrorOverlayPlugin(),
  ],
  devtool: 'cheap-module-source-map',
}
