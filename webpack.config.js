const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'script.js'
  },
  module: {
    rules: [{
      test: /\.css&/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      favicon: ''
    })
  ]
}