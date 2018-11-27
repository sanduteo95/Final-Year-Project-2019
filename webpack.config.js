const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

let basePath = path.join(__dirname, '../viz/CBV-with-CBV-embedding/js');

let config = {
    mode: 'development',
    // Entry, file to be bundled
    entry: {
        'main': basePath + '/goi-machine.js',
    },
    devtool: 'source-map',
    output: {
        // Output directory
        path: path.join(__dirname, 'lib/goiMachine'),
        library: '[name]',
        filename: '[name].min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
                test: /(\.js)$/,
                exclude: /(node_modules|bower_components)/,
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
            'jquery': basePath + './../jquery-ui/jquery.js',
            'ast/atom': basePath + '/parser/ast.js',
            'ast/binding': basePath + '/parser/ast.js',
            'ast/operation': basePath + '/parser/ast.js',
            'ast/reference': basePath + '/parser/ast.js',
            'ast/term': basePath + '/parser/ast.js',
            'ast/var': basePath + '/parser/ast.js',
            'graph': basePath + '/graph.js',
            'group': basePath + '/group.js',
            'link': basePath + '/link.js',
            'nodes/atom': basePath + '/nodes/atom.js',
            'nodes/contract': basePath + '/nodes/contract.js',
            'nodes/op': basePath + '/nodes/op.js',
            'nodes/ops/int': basePath + '/nodes/ops/int.js',
            'nodes/ops/plus': basePath + '/nodes/ops/plus.js',
            'nodes/ops/times': basePath + '/nodes/ops/times.js',
            'nodes/start': basePath + '/nodes/start.js',
            'parser/lexer': basePath + '/parser/lexer.js',
            'parser/parser': basePath + '/parser/parser.js',
            'term': basePath + '/term.js',
            'token': basePath + '/token.js',
        },
        modules: [
            // Files path which will be referenced while bundling
            '../viz/CBV-with-CBV-embedding/js/**/*.js',
            path.resolve(basePath)
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
