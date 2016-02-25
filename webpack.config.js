module.exports = {
  context:__dirname+'/client/src',
  entry: "./entry.js",
  output: {
    path: __dirname+'/client/dest',
    filename: "/bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
