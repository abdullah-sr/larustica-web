const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const config = {
    entry: `${APP_DIR}/main.js`,
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            { test: /\.js$/, include: APP_DIR, use: 'babel-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.(png|jpg|gif|svg)/, use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images/',
                    },
                }},
            // { test: /\.html$/, use: 'html-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/base.html`,
            filename: 'index.html',
            page: 'home',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/base.html`,
            filename: 'gallery.html',
            page: 'gallery',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/base.html`,
            filename: 'menu.html',
            page: 'menu',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/base.html`,
            filename: 'story.html',
            page: 'story',
            hash: true,
        }),
        new UglifyJsPlugin(),
    ],
};

module.exports = config;