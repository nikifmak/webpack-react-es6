var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname,'/'),
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.html$/, loader: "html" },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  watch: true,
  plugins: [
   new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname,'dist'),
    historyApiFallback: true
  }

}
