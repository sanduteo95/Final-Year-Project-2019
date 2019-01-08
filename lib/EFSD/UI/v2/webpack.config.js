const path = require('path');

const basePath = path.join(__dirname, '../../../../../EFSD-vis/js');

let config = {
    mode: 'development',
    // Entry, file to be bundled
    entry: {
        'goi-machine': basePath + '/goi-machine.js',
    },
    devtool: 'none',
    output: {
        // Output directory
        path: path.join(__dirname, ''),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'machine'
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
        modules: [
            // Files path which will be referenced while bundling
            basePath,
            path.join(basePath, '/ast'),
            path.join(basePath, '/nodes'),
            path.join(basePath, '/parser')
        ],
        extensions: ['.js'] // File types
    },
    plugins: []
};

module.exports = config;
