var path = require('path');
var webpack = require('webpack');
var entry = path.join(__dirname, 'src');
var out = path.join(__dirname, 'dist');

module.exports = {
  entry: [ path.join(entry, 'app.js')],
  output: {
    path: out,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: entry,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: out
  }
}
