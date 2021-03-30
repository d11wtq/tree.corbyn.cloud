const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  /* default mode to node env */
  mode: process.env.NODE_ENV || 'development',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  entry: {
    app: './src/bundle.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    publicPath: '/',
  },
};
