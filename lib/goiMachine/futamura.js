const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'main.min.js');
const fileContents = fs.readFileSync(filePath, 'utf8');
const sourceMapContents = fs.readFileSync(filePath + '.map', 'utf8');

let prepackOptions = {
    // Filename to use in error stacks.
    filename: 'main.min.js', 
    // If provided, this input source map file is used as the input before generating a new source map.
    inputSourceMapFilename: null, 
    // Determines whether a source map file should be generated.
    sourceMaps: false,
    // Select a built-in environment compatibility.
    compatibility: 'browser',
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

const {code} = Prepack.prepackSources(
    [{
        filePath: filePath, 
        fileContents: fileContents,
        sourceMapContents: sourceMapContents
    }], prepackOptions);

const outputPath = path.join(__dirname, 'main.prepack.js');
fs.writeFileSync(outputPath, code);
