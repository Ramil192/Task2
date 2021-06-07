const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const pages = [
  { pageName: 'header-and-footer', pageType: 'ui-kit' },
  { pageName: 'form-elements', pageType: 'ui-kit' },
  { pageName: 'color-and-type', pageType: 'ui-kit' },
  { pageName: 'cards', pageType: 'ui-kit' },
  { pageName: 'search-room', pageType: 'web' },
  { pageName: 'registration', pageType: 'web' },
  { pageName: 'main-sign-in', pageType: 'web' },
  { pageName: 'room-details', pageType: 'web' },
];

const pluginsOptions = [];

pages.forEach((e) => {
  pluginsOptions.push(
    new HtmlWebpackPlugin({
      filename: `./${e.pageName}.html`,
      template: `./src/pages/${e.pageType}/${e.pageName}/${e.pageName}.pug`,
      inject: true,
      chunks: [e.pageName],
    }),
  );
});

const entries = pages.reduce((obj, curEntry) => {
  obj[curEntry.pageName] = `./src/pages/${curEntry.pageType}/${curEntry.pageName}/${curEntry.pageName}.js`;
  return obj;
}, {});
entries.favicon = './src/img/favicons/favicons.js';

pluginsOptions.push(new HtmlWebpackPlugin({
  filename: './index.html',
  template: './src/pages/index/index.pug',
  inject: true,
  chunks: ['index'],
}));
entries.index = './src/pages/index/index.js';

pluginsOptions.push(new MiniCssExtractPlugin({
  filename: '[name].css',
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
  entry: entries,
  
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
