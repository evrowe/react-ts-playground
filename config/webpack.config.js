var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/dist',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
}