const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'public'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
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

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less|.css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // транслируем CSS в CommonJS
          },
          {
            loader: 'less-loader',
            options: {
              // путь для общих стилей
              paths: [path.resolve(__dirname, 'src/styleCommon')],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    new webpack.ProvidePlugin({
      ReactDOM: 'react-dom',
      React: 'react',
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
  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
    // включенная опция не очищает последовательность выполненных редьюсеров,
    // что позволяет получить функцию автоматического пересчёта
  },
};
