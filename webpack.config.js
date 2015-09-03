require('dotenv').config({ silent: true });

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  // define globals here, remember to use JSON.stringify
  ENV_NAME: JSON.stringify(process.env.NODE_ENV)
});

var isProduction = process.env.NODE_ENV === 'production';

var includeSourceMaps = isProduction ? 'false' : 'true';

module.exports = {
  quiet: false,
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, isProduction ? 'dist' : 'src'),
    filename: 'bundle.js'
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
      { test: /\.(jpg|gif|svg)$/, loader: 'file?name=[name]-[hash:6].[ext]' },
      { test: /\.png$/, loader: 'url?mimetype=image/png' }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    definePlugin,
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new HtmlWebpackPlugin({
      template: 'src/_index.html',
      inject: 'body',
      minify: true,
      hash: true
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
