const _ = require("lodash");
const path = require('path');

const basePath = path.join(__dirname, '../../../../viz/CBV-with-CBV-embedding/js');

const config = env => {
    return {
        mode: 'development',
        // Entry, file to be bundled
        entry: {
            'main': basePath + '/goi-machine.js',
        },
        output: {
            // Output directory
            path: path.join(__dirname, ''),
            library: 'Machine',
            filename: '[name].js',
        },
        devtool: "source-maps",
        amd: {
            jQuery: true
        },
        module: {
            // this is how we configure AMD style shims
            // see the shims() function below
            rules: [
                {
                    test: /(\.js)$/
                }
                // , { 
                //     test: /jquery/, 
                //     loader: 'exports?$' 
                // }, {
                //     test: /goi-machine/,
                //     loader: 'exports?machine'
                // }
            ]
        },
        resolve: {
            alias: {
                d3: basePath + '../bower_components/d3/d3',
                "dot-checker": basePath + '../bower_components/graphviz-d3-renderer/dist/dot-checker',
                "layout-worker": basePath + '../bower_components/graphviz-d3-renderer/dist/layout-worker',
                worker: basePath + '../bower_components/requirejs-web-workers/src/worker',
                renderer: basePath + '../bower_components/graphviz-d3-renderer/dist/renderer',
                jquery: basePath + '../bower_components/jquery/dist/jquery',
                'ast/term': basePath + '/parser/ast.js',
                'ast/var': basePath + '/parser/ast.js',
                'ast/atom': basePath + '/parser/ast.js',
                'ast/binding': basePath + '/parser/ast.js',
                'ast/reference': basePath + '/parser/ast.js',
                'ast/operation': basePath + '/parser/ast.js',
                'ast/thunk': basePath + '/parser/ast.js',
                'group': basePath + '/group.js'
            },
            modules: [
                // Files path which will be referenced while bundling
                path.resolve(basePath)
            ],
            extensions: ['.js'] // File types
        },
        plugins: []
    };
};

module.exports = config;
