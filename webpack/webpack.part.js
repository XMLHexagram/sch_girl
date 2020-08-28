const { WebpackPluginServe } = require('webpack-plugin-serve')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const Dotenv = require('dotenv-webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('./paths')

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      client: {
        retry: true,
      },
      host: '127.0.0.1',
      port: process.env.PORT || 8080,
      static: './dist',
      liveReload: true,
    }),
  ],
})

exports.page = ({ title }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
})

exports.dashBoard = () => ({
  plugins: [new DashboardPlugin()],
})

exports.dotenv = () => ({
  plugins: [new Dotenv({ path: './.env' })],
})

exports.errorOverlay = () => ({
  plugins: [new ErrorOverlayPlugin()],
})

exports.WebpackNotifier = () => ({
  plugins: [new WebpackNotifierPlugin({ alwaysNotify: true })],
})

// exports.loadCSS = ({ include, exclude } = {}) => ({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         include,
//         exclude,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//           },
//           {
//             loader: 'postcss-loader',
//             options: {
//               plugins: () => [require('autoprefixer'), require('precss')],
//             },
//           },
//         ],
//       },
//     ],
//   },
// })

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            'css-loader',
          ].concat(loaders),
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  }
}

exports.tailwind = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: [require('tailwindcss')],
  },
})

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: [require('autoprefixer')],
  },
})

exports.bundle_analyzer = () => ({
  plugins: [new BundleAnalyzerPlugin()],
})

exports.load_URL = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
            },
          },
        ],
      },
    ],
  },
})

exports.load_react = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        use: 'babel-loader',
      },
    ],
  },
})
