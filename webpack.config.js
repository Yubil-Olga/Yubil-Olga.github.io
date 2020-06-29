const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './pages/index/index.js'
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
          chunks: 'all',
          },
        },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './pages/index/index.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'headers-footers.html',
          template: './pages/headers-footers/headers-footers.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'form-elements.html',
          template: './pages/form-elements/form-elements.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'cards.html',
          template: './pages/cards/cards.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'registration.html',
          template: './pages/registration/registration.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'login.html',
          template: './pages/login/login.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'search-room.html',
          template: './pages/search-room/search-room.pug'
        }),
        new HTMLWebpackPlugin({
          filename: 'room-details.html',
          template: './pages/room-details/room-details.pug'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
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
        ]),
        new CopyPlugin([
          { 
            from: path.resolve(__dirname, 'src/favicons'),
            to: path.resolve(__dirname, 'dist/favicons') 
          }
        ]),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: false
        })
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
                        sourceMap: true
                      }
                    }
                ]
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                exclude: [
                  path.resolve(__dirname, "src/fonts/")
                ],
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
                include: [
                  path.resolve(__dirname, "src/fonts/")
                ],
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