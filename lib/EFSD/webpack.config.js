const path = require('path');

let basePath = __dirname;
let config = env => {
   return {
       mode: 'development',
        // Entry, file to be bundled
        entry: {
            'goi-machine': basePath + '/' + env + '/goi-machine.prepack.js',
        },
        devtool: 'none',
        output: {
            // Output directory
            path: path.join(__dirname, env),
            library: 'goi-machine',
            filename: '[name].requirejs.js',
            globalObject: 'window',
            libraryTarget: 'window' // or 'amd' but both work
        },
        module: {
            rules: [
                {
                    test: require.resolve(basePath + '/' + env + '/goi-machine.prepack.js'),
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
