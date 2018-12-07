const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');

const filename = 'main.js';
const filePath = path.join(__dirname, filename);
let fileContents = fs.readFileSync(filePath, 'utf8');
const sourceMapContents = fs.readFileSync(filePath + '.map', 'utf8');

let prepackOptions = {
    // Filename to use in error stacks.
    filename: filename, 
    // Determines whether a source map file should be generated.
    sourceMaps: true,
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

const {code, map} = Prepack.prepackSources(
    [{
        filePath: filePath, 
        fileContents: fileContents + '\wwinddow.Machine  = Machine',
        sourceMapContents: sourceMapContents
    }], prepackOptions);

const outputPath = path.join(__dirname, 'main.prepack.js');
fs.writeFileSync(outputPath, code);
const outputMapPath = path.join(__dirname, 'main.prepack.js.map');
fs.writeFileSync(outputMapPath, JSON.stringify(map));
