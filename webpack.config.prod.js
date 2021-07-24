const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/main.tsx',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/main.js',
    clean: true,
    assetModuleFilename: 'static/[hash][ext]'
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
      'process.env.SERVER_DOMAIN': JSON.stringify('https://flyvase-prod.an.r.appspot.com')
    })
  ]
}