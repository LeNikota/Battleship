const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',//delete when complete
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'script.js',
    clean: true
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      favicon: 'src/battleship.png',
      template: 'src/template.html'
    })
  ]
}