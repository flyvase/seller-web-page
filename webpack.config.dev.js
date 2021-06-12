const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    contentBase: './dist',
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx', '.ts', '.js',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'template.html'})
  ]
}