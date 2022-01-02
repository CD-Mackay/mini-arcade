const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});

module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "/"),
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 15000 } },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      elements: path.resolve(__dirname, './src/components/elements'),
      modules: path.resolve(__dirname, './src/components/modules'),
      templates: path.resolve(__dirname, './src/components/templates'),
      pages: path.resolve(__dirname, './src/components/pages')
    },
    extensions: ["*", ".js", ".jsx", '.scss', '.css'],
  },
  plugins: [
    htmlPlugin
  ],
  devServer: {
    historyApiFallback: true
  }
};