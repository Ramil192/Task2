const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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

module.exports = {
  entry: entries,
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
  plugins: pluginsOptions,
};
