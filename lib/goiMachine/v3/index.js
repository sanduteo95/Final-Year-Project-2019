const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');

const filename = '../../../../EFSD-vis/js/goi-machine.js';
const filePath = path.join(__dirname, filename);
let fileContents = fs.readFileSync(filePath, 'utf8');
fileContents = `
if (global.__abstract) {
    __assumeDataProperty(global, "define", function (name, deps, cb) {
        window[name] = global.__optimize(cb);
    });
} 
` + fileContents 

let prepackOptions = {
    // Filename to use in error stacks.
    filename: filename, 
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

console.log(fileContents)
const {code} = Prepack.prepackSources(
    [{
        filePath: filePath, 
        fileContents: fileContents
    }], prepackOptions);

const outputPath = path.join(__dirname, 'main.prepack.js');
fs.writeFileSync(outputPath, code);
