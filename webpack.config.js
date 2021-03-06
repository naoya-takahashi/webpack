const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    // 相対パスだとerrorとなる
    path: path.resolve(__dirname, './dist'),
    filename: './js/main.js'
  },
  module: {
    rules: [
      {
        // ファイル名を検知
        test: /\.css/,
        // 使用するloaderを指定
        use: [
          // loaderは下から上に読み込まれる
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.png|\.jpg/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     esModules: false,
          //   }
          // },
          {
            loader: 'file-loader',
            options: {
              esModules: false,
              name: '[name].[ext]',
              outputPath : './images/',
              // publicPath : path => '../' + path,
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use:[
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
