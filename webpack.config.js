const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Melhora a exibição dos erros no console do navegador. Pois mostra o código do componente como ele realmente é, e não compilado com o babel.
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        // fallback: {
        //     "fs": false,
        //     "os": false,
        //     "path": false
        // },
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), // recarrega a aplicação toda vez que há uma mudança
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') // Opção utilizada para não precisar importar o script js no index.html
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(), // plugin para não perde os states da aplicação ao ser recarregada a aplicação, após uma mudança.
        // new webpack.DefinePlugin({
        //     process: { env: {} }
        // }), // pode utilizar variáveis de ambiente
    ].filter(Boolean), // para adicionar lógica condicional aos plugins. Pois caso o resultado seja falso, esse false é filtrado, não causando erro na aplicação.
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}