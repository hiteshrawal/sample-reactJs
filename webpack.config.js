var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});


var config = {

  entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server', APP_DIR + '/index.jsx'
    ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	HTMLWebpackPluginConfig
	],

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot','babel']
      }
    ]
  }
};



module.exports = config;
