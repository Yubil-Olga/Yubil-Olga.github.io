const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PAGES_DIR = path.resolve(__dirname, './src/pages');

function searchPug(dir, pattern) {
  let results = [];
  fs.readdirSync(dir).forEach(
    (dirInner) => {
      const dirInnerSeach = path.resolve(dir, dirInner);
      const stat = fs.statSync(dirInnerSeach);
      if (stat.isDirectory()) {
        results = results.concat(searchPug(dirInnerSeach, pattern));
      }
      if (stat.isFile() && dirInnerSeach.endsWith(pattern)) {
        results.push(dirInnerSeach);
      }
    },
  );

  return results;
}

const PAGES = searchPug(PAGES_DIR, '.pug');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './pages/index/index.js',
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200,
    hot: isDev,
    stats: 'errors-only',
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/images'),
        to: path.resolve(__dirname, 'dist/images'),
      },
    ]),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/favicons'),
        to: path.resolve(__dirname, 'dist/favicons'),
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
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        exclude: [
          path.resolve(__dirname, 'src/fonts/'),
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
          path.resolve(__dirname, 'src/fonts/'),
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
