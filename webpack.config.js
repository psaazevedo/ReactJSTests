var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'eval',
  context: __dirname,
  entry: ['webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {

    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /dist/],
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '')
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.sass$/,
      loaders: ["style", "css", "sass?indentedSyntax"]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
