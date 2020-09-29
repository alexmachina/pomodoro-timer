const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  resolve: { extensions: [".js", ".ts", ".tsx"] },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
