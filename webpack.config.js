const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.[chunkhash].css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LIBS = [ 'bootstrap', 'chartist', 'es6-promise', 'isomorphic-fetch', 'jquery', 'moment', 'moment-duration-format', 'react', 'react-bootstrap', 'react-chartist', 'react-dom', 'react-loader', 'react-redux', 'react-router-bootstrap', 'react-router-dom', 'redux', 'redux-logger', 'redux-thunk' ];

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: {
    bundle: './src/scripts/app.js',
    vendor: LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          },{
            loader: 'eslint-loader',
            options: {
              failOnWarning: true,
              failOnError: true
            }
          }
        ]
      },{
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
        // To embed CSS in JS module, remove loader and add:
        /*
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
        */
      },{
        test: /\.css$/,
        loader: extractCSS.extract(['css-loader'])
      },{
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      }
    ]
  }, // module
  plugins: [
    extractCSS,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
    }),
    new CleanWebpackPlugin([ 'dist' ], { verbose: true }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
};
