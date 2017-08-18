const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('app.bundle.css')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.bundle.js'
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
    extractCSS
  ]
};
