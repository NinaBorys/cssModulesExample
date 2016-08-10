var data = require('./data.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './src/router',
  output: {
    path: 'build',
    filename: 'bundle.js',
    libraryTarget: 'umd' // this is super important
  },
    module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin('main', data.routes, data),
  ]
};
