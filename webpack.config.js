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
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.(png|jpg|gif|svg)/, use: 'file-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/index.html`,
            filename: 'index.html',
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: `${APP_DIR}/gallery.html`,
            filename: 'gallery.html',
            hash: true,
        }),
        new UglifyJsPlugin(),
    ],
};

module.exports = config;