const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  },
  entry: {
    app: './src/index.tsx'
  },
  devServer: {
    contentBase: './dist',
    port: process.env.PORT || 3000
  },
  // devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ]
            }
          }
        ]
      },
      {
        test: /.s?[ca]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      '@': [path.resolve(__dirname, './src')]
    }
  }
}
