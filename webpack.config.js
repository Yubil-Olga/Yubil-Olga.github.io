const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: './pages/index/index.js',
        headersfooters: './pages/headers-footers/headers-footers.js'
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          })
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