const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(
        __dirname,
        'index.html',
      ),
    }),
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'dist',
    clean: true,
  },
};
