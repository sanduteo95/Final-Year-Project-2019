const path = require('path');
const webpack = require('webpack');

let basePath = __dirname;

let config = env => {
   return {
       mode: 'development',
        // Entry, file to be bundled
        entry: {
            'main': basePath + '/' + env + '/main.prepack.js',
        },
        devtool: 'source-map',
        output: {
            // Output directory
            path: path.join(__dirname, env),
            library: 'goi-machine',
            filename: '[name].requirejs.js',
            libraryTarget: 'amd',
            globalObject: 'window',
            libraryTarget: 'window'
        },
        amd: { jQuery: true },
        module: {
            rules: [
                {
                    test: /(\.js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        // babel-loader to convert ES6 code to ES5
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: []
                        }
                    }
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new webpack.DefinePlugin({
                "graph": null
            })
        ]
    };
};

module.exports = config;
