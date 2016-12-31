module.exports = {
  entry: {
    javascript: "./js/main.js",
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
      }
    ]
  }
}
