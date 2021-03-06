const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const utils = require('./webpack.config.utils');

const port = {
    web: 89,
    was: 8080
};

const pages = [{
    html: 'index',
    script: 'main',
}, {
    html: 'sub',
    script: 'sub',
}, {
    html: 'gallery',
    script: 'gallery',
}, {
    html: 'gallery-read',
    script: 'gallery-read',
}, {
    html: 'about',
    script: 'about',
}, {
    html: 'event-read',
    script: 'event-read',
}, {
    html: 'login',
    script: 'login',
}, {
    html: 'basket',
    script: 'basket',
}, {
    html: 'board',
    script: 'board',
}, {
    html: 'event',
    script: 'event',
}, {
    html: 'delivery',
    script: 'delivery',
}, {
    html: 'product-list',
    script: 'product-list',
}, {
    html: 'product-detail',
    script: 'product-detail',
}];

module.exports = {
    entry: utils.getEntry(pages),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    devServer: {
        contentBase: './dist',
        port: port.web,
        proxy: {
            '/api': 'http://localhost:' + port.was
        }
    },
    plugins: utils.getPlugins(pages)
};