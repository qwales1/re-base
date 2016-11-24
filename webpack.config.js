var webpack = require('webpack');
module.exports = [{
  entry: ['./src/rebase.js'],
  output: {
    filename: "dist/bundle.js",
    libraryTarget: 'umd'
  },
  externals: [{
    'firebase': {
      root: 'Firebase',
      commonjs2: 'firebase',
      commonjs: 'firebase',
      amd: 'firebase'
    }
  }],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
},{
  entry: ['./src/rebase.js'],
  output: {
    filename: "dist/Rebase.js",
    libraryTarget: "var",
    library: "Rebase"
  },
  externals: {
    "firebase": "firebase"
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }]
  }
}];
