const path = require('path');
const appRootDir = require('app-root-dir');
const dotenv = require('dotenv');
const nodeExternals = require('webpack-node-externals');

const envFile = '.env.development';
dotenv.config({ path: path.resolve(appRootDir.get(), envFile) });

module.exports = {
  mode: process.env.NODE_ENV,
  // context: path.resolve(__dirname, 'src'),
  entry: {
    server: ['babel-polyfill', './src/index'],
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
};
