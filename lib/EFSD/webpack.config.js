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
            globalObject: 'window',
            libraryTarget: 'window'
        },
        module: {
            rules: [
                {
                    test: require.resolve(basePath + '/' + env + '/main.prepack.js'),
                    use: [
                        'imports-loader?this=>window',
                    ]
                }
            ]
        },
        plugins: []
    };
};

module.exports = config;
