require('dotenv').config({ silent: true });

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

var definePlugin = new webpack.DefinePlugin({
  // define globals here, remember to use JSON.stringify
  ENV_NAME: JSON.stringify(process.env.NODE_ENV)
});

var isProduction = process.env.NODE_ENV === 'production';

var includeSourceMaps = isProduction ? 'false' : 'true';

module.exports = {
  quiet: false,
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['angular', 'lodash', 'restangular', 'angular-animate', 'angular-messages',
      'angular-ui-router']
  },
  output: {
    path: path.resolve(__dirname, isProduction ? 'dist' : 'src'),
    filename: isProduction ? '[name]-[chunkhash].js' : '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap=' + includeSourceMaps + '&name=[name]-[hash:6].[ext]'
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap=' + includeSourceMaps + '!postcss!sass?sourceMap=' + includeSourceMaps + '&name=[name]-[hash:6].[ext]'
        )
      },
      { test: /\.html$/, loader: 'html?name=[name]-[hash:6].[ext]' },
      { test: /\.(jpg|gif|svg|png)$/, loader: 'file?name=[name]-[hash:6].[ext]' }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    definePlugin,
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/_index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles-[hash:6].css')
  ]
};
