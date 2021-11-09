const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './styles/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  devServer: {
    client: {
      logging: 'error',
      progress: true,
    },
    hot: true,
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      '@ds': path.resolve(__dirname, './src/utilities/ds/'),
      '@nodes': path.resolve(__dirname, './src/utilities/nodes/'),
      '@polyfills': path.resolve(__dirname, './src/utilities/polyfills/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'app.bundle.css' }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
