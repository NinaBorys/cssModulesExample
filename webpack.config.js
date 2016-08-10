var ExtractTextPlugin = require('extract-text-webpack-plugin');     
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var locals = {
  routes: [
    '/',
  ]
};

module.exports = {
  entry:  {
    'main': './src/',
  },
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
    new StaticSiteGeneratorPlugin('main', locals.routes),
  ]
};
