const path = require('path');

const config = {
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            components: path.resolve('src/components'),
            containers: path.resolve('src/containers'),
            entities: path.resolve('src/entities'),
            actions: path.resolve('src/actions'),
            helpers: path.resolve('src/helpers'),
            pages: path.resolve('src/pages'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    }
                }]
            }
        ],
    },
};

module.exports = config;
