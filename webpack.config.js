const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './pages/index/index.js',
        headersfooters: './pages/headers-footers/headers-footers.js',
        formelements: './pages/form-elements/form-elements.js',
        cards: './pages/cards/cards.js'
    },
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200,
        hot: isDev,
        stats: 'errors-only'
      },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: './pages/index/index.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'headers-footers.html',
          chunks: ['headersfooters', 'common'],
          template: './pages/headers-footers/headers-footers.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'form-elements.html',
          chunks: ['formelements', 'common'],
          template: './pages/form-elements/form-elements.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'cards.html',
          chunks: ['cards', 'common'],
          template: './pages/cards/cards.pug'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          "window.jQuery": 'jquery'
        }),
        new CopyPlugin([
          {
            from: path.resolve(__dirname, 'src/images'),
            to: path.resolve(__dirname, 'dist/images')
          }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'resolve-url-loader', 
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: true
                      }
                    }
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                        }
                  },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'fonts/[name].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
            
        ]
    }
}