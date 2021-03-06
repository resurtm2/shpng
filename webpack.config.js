const webpack = require('webpack');
const path = require('path');

module.exports = {
    name: 'shpng',
    target: 'web',
    entry: [
        path.join(__dirname, 'frontend', 'main.scss'),
        path.join(__dirname, 'frontend', 'main.jsx')
    ],
    output: {
        path: path.join(__dirname, 'dist', 'frontend'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)(.*)$/,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
