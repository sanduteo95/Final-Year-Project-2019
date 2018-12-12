const path = require('path');
const webpack = require('webpack');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

const configuration = {
    // Filename to use in error stacks.
    filename: 'goi-machine.js', 
    // Determines whether a source map file should be generated.
    sourceMaps: true,
    // Select a built-in environment compatibility.
    compatibility: 'browser', // browser, jsc-600-1-4-17
    // Logs evaluated function calls.
    trace: false,
    // If true, try to retain original variable and function names as part of the generated code.
    debugNames: true,
    // Enables two passes in the serializer to improve code quality by avoiding intermediate variables.
    inlineExpressions: true,
    // If true, logs statistics about the number of objects, functions and ids generated.
    logStatistics: false,
    // If true, prints the JS stack inside of Prepack along with the stack in the Prepacked program. Useful for debugging Prepack itself.
    internalDebug: false,
    // Number of milliseconds to run a program before it times out. Useful to avoid infinite loops in the Prepacked program.
    timeout: Infinity,
    // Increase maximum stack depth
    maxStackDepth: 1000
};

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
        filename: '[name].prepack.js',
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
        }),
        new PrepackWebpackPlugin(configuration)
    ]
};

module.exports = config;
