const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PAGES_DIR = path.resolve(__dirname, '../src/pages');

function searchPug(dir, pattern) {
  let results = [];
  fs.readdirSync(dir).forEach(
    (dirInner) => {
      const dirInnerSearch = path.resolve(dir, dirInner);
      const stat = fs.statSync(dirInnerSearch);
      if (stat.isDirectory()) {
        results = results.concat(searchPug(dirInnerSearch, pattern));
      }
      if (stat.isFile() && dirInnerSearch.endsWith(pattern)) {
        results.push(dirInnerSearch);
      }
    },
  );

  return results;
}

const PAGES = searchPug(PAGES_DIR, '.pug');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './pages/index/index.js',
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${page}`,
      filename: path.basename(page).replace(/\.pug/, '.html'),
    })),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/images'),
        to: path.resolve(__dirname, '../dist/images'),
      },
      {
        from: path.resolve(__dirname, '../src/favicons'),
        to: path.resolve(__dirname, '../dist/favicons'),
      },
    ]),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        exclude: [
          path.resolve(__dirname, '../src/fonts/'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, '../src/fonts/'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

    ],
  },
};