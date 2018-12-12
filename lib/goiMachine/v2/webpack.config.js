const path = require('path');
const webpack = require('webpack');

const basePath = path.join(__dirname, '../../../../viz/CBV-with-CBV-embedding/js');

let config = {
    mode: 'development',
    // Entry, file to be bundled
    entry: {
        'main': basePath + '/goi-machine.js',
    },
    devtool: 'source-map',
    output: {
        // Output directory
        path: path.join(__dirname, ''),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'machine'
    },
    amd: { 
        jQuery: true 
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                include: basePath,
                use: {
                    // babel-loader to convert ES6 code to ES5 + amdCleaning requirejs code into simple JS code, taking care of modules to load as desired
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: []
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            d3: basePath + '../bower_components/d3/d3',
            "dot-checker": basePath + '../bower_components/graphviz-d3-renderer/dist/dot-checker',
            "layout-worker": basePath + '../bower_components/graphviz-d3-renderer/dist/layout-worker',
            worker: basePath + '../bower_components/requirejs-web-workers/src/worker',
            renderer: basePath + '../bower_components/graphviz-d3-renderer/dist/renderer',
            jquery: basePath + '../bower_components/jquery/dist/jquery'
        },
        extensions: ['', '.js'],
        modules: [
            // Files path which will be referenced while bundling
            basePath,
            path.join(basePath, '/nodes'),
            path.join(basePath, '/parser')
        ],
        extensions: ['.js'] // File types
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

module.exports = config;
