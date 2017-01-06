var webpack = require('webpack')
var path = require('path')

module.exports = {
  // start from this path
  context: path.resolve(__dirname, './src'),

  //entry file
  entry: {
    xchart: './xchart.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
          }
        ]
      }
    ]
  }
}
