const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    cube: './src/js/cube.js',
    line: './src/js/line.js',
    interactive: './src/js/interactive.js',
    multiple: './src/js/multiple.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/*.html', 
      to: '../dist/[name].html'
    }])
  ]
}