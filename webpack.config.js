const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 相対パスだとerrorとなる
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
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
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
    ],
  },
}
