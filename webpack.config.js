const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
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
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: './pages/index/index.pug'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
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
                test: /\.pug$/,
                loader: 'pug-loader'
            }
            
        ]
    }
}