const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },
  resolve: {
    alias: {
      Scripts: path.resolve(__dirname, 'src'),
      NPM: path.resolve(__dirname, 'node_modules'),
      App: path.resolve(__dirname, 'src/App'),
      helpers: path.resolve(__dirname, 'src/App/helpers'),
      Components: path.resolve(__dirname, 'src/App/components'),
      Ducks: path.resolve(__dirname, 'src/App/ducks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less|.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                relativeUrls: true,
                // path for common stylesheets
                paths: [path.resolve(__dirname, 'src/styleCommon')],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Mafia 2 Menu',
      filename: './index.html',
      minify: false,
      template: 'src/indexTemplate.html',
      inject: 'body',
      xhtml: true,
    }),
  ],
};
