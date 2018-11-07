module.exports = {
  entry: './src/client.js',
  output: {
      filename: 'bundle.js',
      path: 'src'
  },
  module: {
      loaders: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react']
              }
          }
      ]
  }
};