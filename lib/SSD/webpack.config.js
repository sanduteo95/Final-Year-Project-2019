const path = require('path');

const basePath = path.join(__dirname, '../../../../itf-impl/Visualiser/js');

let config = {
    mode: 'development',
    // Entry, file to be bundled
    entry: {
        'interpreter': basePath + '/app.js',
    },
    devtool: 'none',
    output: {
        // Output directory
        path: path.join(__dirname, ''),
        filename: '[name].js',
        libraryTarget: 'commonjs', // commonjs2 for interpreter and var for futamura
        globalObject: 'global',
        library: 'SSD'
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                include: new RegExp(basePath),
                use: {
                    // babel-loader to convert ES6 code to ES5 + amdCleaning requirejs code into simple JS code, taking care of modules to load as desired
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: []
                    }
                }
            }, {
                test: require.resolve(basePath + '/app.js'),
                use: [
                    'imports-loader?this=>global',
                ]
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
