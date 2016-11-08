const path = require('path');

module.exports = {
  entry: './src/app/entry.js',

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: [ 'es2015' ] },
      }
    ],
  },
};