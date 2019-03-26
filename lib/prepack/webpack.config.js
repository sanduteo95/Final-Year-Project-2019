const path = require('path');

module.exports = {
    context: path.resolve(__dirname, ''),
    entry: {
        SSD: './prepackSSD.js',
        toyLambda: './prepackToyLambda.js',
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, ''),
        filename: '[name].min.js',
        library: 'compiler', // to assign the results to a global variable compiler
        libraryTarget: 'umd'
    },
    mode: 'none',
    externals: {
        fs: 'fs',
        path: 'path',
        os: 'os',
        tty: 'tty',
        util: 'util',
        crypto: 'crypto',
        readline: 'readline'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: []
                    }
                  }          
            }
        ]
    }
};