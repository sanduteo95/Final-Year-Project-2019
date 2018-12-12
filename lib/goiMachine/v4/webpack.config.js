const path = require('path');
const webpack = require('webpack');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

const configuration = {
    // Filename to use in error stacks.
    filename: 'goi-machine.js', 
    // Determines whether a source map file should be generated.
    sourceMaps: true,
    // Select a built-in environment compatibility.
    compatibility: 'jsc-600-1-4-17', // browser, jsc-600-1-4-17
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

const basePath = path.join(__dirname, '../../../../teo-viz');

const bower_components = new RegExp(path.join(basePath, '../bower_components'))

let config = {
    mode: 'development',
    // Entry, file to be bundled
    entry: {
        'main': basePath + '/js/goi-machine.js',
    },
    devtool: 'source-map',
    output: {
        // Output directory
        path: path.join(__dirname, ''),
        library: 'Machine',
        filename: '[name].prepack.js',
        libraryTarget: 'umd',
        globalObject: 'global'
    },
    amd: { 
        jQuery: true 
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                exclude: bower_components,
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
            'ast/term': basePath + '/js/parser/ast.js',
            'ast/var': basePath + '/js/parser/ast.js',
            'ast/atom': basePath + '/js/parser/ast.js',
            'ast/binding': basePath + '/js/parser/ast.js',
            'ast/reference': basePath + '/js/parser/ast.js',
            'ast/operation': basePath + '/js/parser/ast.js',
            'ast/thunk': basePath + '/js/parser/ast.js',
            'group': basePath + '/js/group.js',
            'goi-machine': basePath + '/js/goi-machine.js',
            'token': basePath + '/js/token.js',
            'term': basePath + '/js/term.js',
            'parser/parser': basePath + '/js/parser/parser.js',
            'parser/lexer': basePath + '/js/parser/lexer.js',
            'parser/token': basePath + '/js/parser/token.js',
            'nodes/start': basePath + '/js/nodes/start.js',
            'nodes/ops/times': basePath + '/js/nodes/ops/times.js',
            'nodes/ops/add': basePath + '/js/nodes/ops/add.js',
            'nodes/ops/and': basePath + '/js/nodes/ops/and.js',
            'nodes/ops/or': basePath + '/js/nodes/ops/or.js',
            'nodes/ops/not': basePath + '/js/nodes/ops/not.js',
            'nodes/ops/int': basePath + '/js/nodes/ops/int.js',
            'nodes/ops/if': basePath + '/js/nodes/ops/if.js',
            'nodes/ops/plus': basePath + '/js/nodes/ops/plus.js',
            'nodes/ops/equals': basePath + '/js/nodes/ops/equals.js',
            'nodes/ops/bool': basePath + '/js/nodes/ops/bool.js',
            'nodes/op': basePath + '/js/nodes/op.js',
            'nodes/contract': basePath + '/js/nodes/contract.js',
            'nodes/atom': basePath + '/js/nodes/atom.js',
            'node': basePath + '/js/node.js',
            'link': basePath + '/js/link.js',
            'graph': basePath + '/js/graph.js'
        },
        modules: [
            // Files path which will be referenced while bundling
            '../../../teo-viz/js/**/*.js',
            path.resolve(basePath)
        ],
        extensions: ['.js'] // File types
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            "graph": null
        }),
        new PrepackWebpackPlugin(configuration)
    ]
};

module.exports = config;
