module.exports = {
  entry: path.join("/client/src/App.jsx")
  module: {
    rules: [
      // 9/10 avh helped me: moved css above jsx
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ]
      },
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }

    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join("/client/dist")
  }
};
