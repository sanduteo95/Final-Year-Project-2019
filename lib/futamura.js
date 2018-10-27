const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');

const prepackOptions = {
    // Filename to use in error stacks.
    filename: 'interpreter.js', 
    // If provided, this input source map file is used as the input before generating a new source map.
    inputSourceMapFilename: null, 
    // Determines whether a source map file should be generated.
    sourceMaps: false,
    // Select a built-in environment compatibility.
    compatibility: 'node-react',
    // Logs evaluated function calls.
    trace: false,
    // If true, try to retain original variable and function names as part of the generated code.
    debugNames: false,
    // Enables two passes in the serializer to improve code quality by avoiding intermediate variables.
    inlineExpressions: false,
    // If true, logs statistics about the number of objects, functions and ids generated.
    logStatistics: false,
    // If true, prints the JS stack inside of Prepack along with the stack in the Prepacked program. Useful for debugging Prepack itself.
    internalDebug: true,
    // Number of milliseconds to run a program before it times out. Useful to avoid infinite loops in the Prepacked program.
    timeout: Infinity
};

function futamura1(program, file) { 
    const interpretFilePath = './interpreter.js';
    const interpretFileContents = require(interpretFilePath);
 
    const {code, map} = Prepack.prepackSources(
        [{
            filePath: interpretFilePath, 
            fileContents: 'global.result = ' + interpretFileContents + '(' + JSON.stringify(program) + ');'
        }], prepackOptions);
        
    const outputFile = '../output/futamura1/' + file.substring(file.indexOf('/') + 1);
    fs.writeFileSync(path.join(__dirname, outputFile), code); 
    return outputFile;
}

module.exports = {
    futamura1: futamura1
}