const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


const pluginsOptions = [];

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/index/index.pug',
  //favicon: './src/public/images/icon/favicon.png',
  filename: 'index.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/ui-kit/color-and-type/color-and-type.pug',
  filename: 'color-and-type.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/ui-kit/form-elements/form-elements.pug',
  filename: 'form-elements.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/ui-kit/cards/cards.pug',
  filename: 'cards.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/ui-kit/header-and-footer/header-and-footer.pug',
  filename: 'header-and-footer.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/web/main-sign-in/main-sign-in.pug',
  filename: 'sign-in.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/web/registration/registration.pug',
  filename: 'registration.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/web/room-details/room-details.pug',
  filename: 'room-details.html'
}));

pluginsOptions.push(new HtmlWebpackPlugin({
  inject: false,
  hash: true,
  template: './src/pages/web/search-room/search-room.pug',
  filename: 'search-room.html'
}));

pluginsOptions.push(new MiniCssExtractPlugin({
  filename: "style.css",
}));

pluginsOptions.push(new CopyWebpackPlugin([{
  from: './src/fonts',
  to: './fonts'
},
{
  from: './src/img',
  to: './img'
}
]));

pluginsOptions.push(new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
}));

module.exports = {
  entry: {
    index: './src/pages/index/index.js',
  },
  
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },

  plugins: pluginsOptions,

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
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  },
  devServer: {
    stats: 'errors-only'
  },
};
