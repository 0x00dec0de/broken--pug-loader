const path = require('path')

module.exports = {
  output: { filename: 'app.js' },
  entry: path.join(__dirname, 'index.js'),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } },
          'extract-loader',
          'html-loader',
          'pug-html-loader'
        ] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'file-loader', options: { name: 'main.css' } },
          'concat-loader',
          'extract-loader',
          'css-loader',
          // { loader: 'postcss-loader', options: { plugins: () => [autoprefixer({ grid: false })] } },
          { loader: 'sass-loader', options: { includePaths: ['./node_modules'] } },
        ] }
    ]
  },
}
