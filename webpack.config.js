const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index/index.js',
    roomDetails: './src/roomDetails/roomDetails.js',
    searchRoom: './src/searchRoom/searchRoom.js',
    mainSignIn: './src/mainSignIn/mainSignIn.js',
    registration: './src/registration/registration.js',
    colorAndType: './src/uikit-page/colorAndType/colorAndType.js',
    formElements: './src/uikit-page/formElements/formElements.js',
    cards: './src/uikit-page/cards/cards.js',
    headerAndFooter: './src/uikit-page/headerAndFooter/headerAndFooter.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }

      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /img/,
        include: /fonts/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name]/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader?name=img/[name].[ext]',
            options: {
              name: './img/[name].[ext]',
              context: path.resolve(__dirname, "src/"),
              useRelativePaths: true,
              emitFile: false
            }
          }]
      },

    ]
  },
  devServer: {
    stats: 'errors-only'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    },
    {
      from: './src/img',
      to: './img'
    }
    ]),

    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/index/index.pug',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/roomDetails/roomDetails.pug',
      filename: 'roomDetails.html',
      chunks: ['roomDetails']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/searchRoom/searchRoom.pug',
      filename: 'searchRoom.html',
      chunks: ['searchRoom']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/mainSignIn/mainSignIn.pug',
      filename: 'mainSignIn.html',
      chunks: ['mainSignIn']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/registration/registration.pug',
      filename: 'registration.html',
      chunks: ['registration']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/uikit-page/colorAndType/colorAndType.pug',
      filename: 'colorAndType.html',
      chunks: ['colorAndType']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/uikit-page/formElements/formElements.pug',
      filename: 'formElements.html',
      chunks: ['formElements']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/uikit-page/cards/cards.pug',
      filename: 'cards.html',
      chunks: ['cards']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/uikit-page/headerAndFooter/headerAndFooter.pug',
      filename: 'headerAndFooter.html',
      chunks: ['headerAndFooter']
    }),
  ]
};
