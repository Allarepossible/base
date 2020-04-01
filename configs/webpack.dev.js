const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');

const baseConfig = require('./webpack.common');
const HOST_NAME = 'demo4148341.mockable.io';

const config = {
    mode: 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        index: './src/index.tsx',
        vendor: ['react', 'react-dom', 'react-hot-loader', 'react-router-dom', 'styled-components'],
    },
    // devServer: {
    //     contentBase: 'src',
    //     host: '127.0.0.1',
    //     disableHostCheck: true,
    //     hot: true,
    //     port: 8080,
    //     proxy: [{
    //         context: ['/api'],
    //         target: `http://${HOST_NAME}`
    //     }],
    //     clientLogLevel: "none"
    // },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: "./src/assets/favicon.ico"
        }),
    ],
    optimization: {
        splitChunks: {
            name: 'vendor',
        }
    },
    devtool: 'source-map',
};

module.exports = () => {
    return merge(baseConfig, config);
};
