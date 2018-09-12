module.exports = {
  entry: path.join("/client/src/App.jsx")
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
