const ErrorOverlayPlugin = require("error-overlay-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const { name } = require("./package.json")

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: {
      index: "/static/",
    },
    port: 4200,
  },

  devtool: "eval-cheap-module-source-map",

  entry: path.join(__dirname, "index.js"),

  mode: "development",

  module: {
    rules: [
      {
        enforce: "pre",
        include: path.join(__dirname, "src"),
        loader: "eslint-loader",
        options: {
          eslintPath: require.resolve("eslint"),
          formatter: require.resolve("react-dev-utils/eslintFormatter"),
        },
        test: /\.js$/,
      },

      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                  sourceMap: true,
                },
              },
              "postcss-loader",
            ],
          },

          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: "[name]-[hash].js",
    path: path.join(__dirname, "public/static"),
    publicPath: "/static/",
  },

  plugins: [new ErrorOverlayPlugin(), new HtmlWebpackPlugin({ title: name })],
}
