const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name, version } = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}-${version}.min.js`,
    libraryTarget: 'window'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};
