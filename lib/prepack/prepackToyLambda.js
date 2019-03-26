const Prepack = require('prepack');
const fs = require('fs');
const path = require('path');

const interpreter = require('../toyLambda/interpreter.js');
const parser = require('../toyLambda/parser.js');

const prepackOptions = {
    filename: 'interpreter', 
    compatibility: 'node-react',
    inlineExpressions: true,
    logStatistics: false,
    internalDebug: false,
    timeout: Infinity,
    maxStackDepth: 1000,
    mathRandomSeed: "rnd"
};

const callback = (err, result) => {
    if (err) {
        throw err;
    }
    
    console.log(result.toString());
    module.exports = result;
};

function compiler (maxTermCalls, outputFile, inputFile) {
    let program;
    if (!global.__residual) {
        __dirname = path.resolve(path.dirname(''));
        program = parser.parse(fs.readFileSync(path.join(__dirname, inputFile), 'utf8'));
    } else {
        program = global.__residual("object", function (__dirname, path, parser, fs, inputFile) {
            __dirname = path.resolve(path.dirname(''));
            return parser.parse(fs.readFileSync(path.join(__dirname, inputFile), 'utf8'));
        }, __dirname, path, parser, fs, inputFile);
    }
    // the arguments will be the parsed program, callback function and max term calls
    const code = Prepack.prepackSources(
        [{
            filePath: "./interpreter.js",
            fileContents: `(${interpreter})(${JSON.stringify(program)},${callback.toString()}, ${maxTermCalls});`
        }], prepackOptions).code;
    
    if (!global.__residual) {
        fs.writeFileSync(path.join(__dirname, outputFile), code);
    } else {
        global.__residual("void", function (__dirname, path, fs, outputFile) {
            fs.writeFileSync(path.join(__dirname, outputFile), code);
        }, __dirname, path, fs, outputFile);
    }
}

module.exports = compiler;