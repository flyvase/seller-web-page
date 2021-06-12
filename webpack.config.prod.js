const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.tsx',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/main.js',
    clean: true
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