var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-3'],
            plugins: ['babel-plugin-transform-class-properties']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
