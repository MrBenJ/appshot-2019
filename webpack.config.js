/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const PrintQRCodePlugin = require('webpack-dev-server-qr-code');
const dotenv = require('dotenv');

const ENV = (process.env.NODE_ENV || 'development').toLowerCase();

const result = dotenv.config({
  path: path.resolve(__dirname, `.env.${ENV}`)
});

module.exports = {
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    path.resolve(__dirname, 'src/entry.js')
  ],
  mode: ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@sagas': path.resolve(__dirname, 'src/sagas'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  // IMPORTANT:
  // These devServer rules are not secure. Do not run webpack-dev-server
  // outside of a normal development environment (Seriously, why would you?).
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true,

    // This option allows us to use ngrok to have others tunnel into the system
    disableHostCheck: true,
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '/current_user.json': {
        changeOrigin: true,
        pathRewrite: { '^/current_user.json': '' },
        target: `${process.env.WEBLINC_URL}/current_user.json`
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.yaml$/,
        use: ['json-loader', 'yaml-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // Optimize SVG data with SVGO: https://github.com/svg/svgo
              svgo: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new PrintQRCodePlugin({
      size: 'small'
    })
  ]
};
