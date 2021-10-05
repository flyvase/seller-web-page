const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  devServer: {
    static: {
      directory: './dist'
    },
    port: 3000,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: '/index.html' }],
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx', '.ts', '.js', 'png', 'svg', 'jpg', 'jpeg', 'gif'
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'template.html'}),
    new webpack.DefinePlugin({
      'process.env.SERVER_DOMAIN': JSON.stringify('http://localhost:8080')
    })
  ]
}