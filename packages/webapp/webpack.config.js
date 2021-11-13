const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
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
      '@apps': path.resolve(__dirname, 'src/apps'),
      '@styles': path.resolve(__dirname, 'styles'),
    },
    extensions: ['.ts', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          { loader: 'css-loader', options: { modules: true } },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
