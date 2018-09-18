const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/App.jsx'),
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /client\/dist/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  // jest: {
  //   testPathIgnorePatterns: [
  //     '/node_modules/',
  //     './test/test.js'
  //   ]
  // }
};
