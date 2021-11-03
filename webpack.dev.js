const path = require('path')

/** @type {import('webpack').Configuration} */
const config = {
  name: 'twitch-bot-highligh-main',
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /.(t|j)sx?$/,
        use: 'babel-loader'
      },
      {
        test: /.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
  }
}

module.exports = config