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
    inlineExpressions: true,
    // If true, logs statistics about the number of objects, functions and ids generated.
    logStatistics: false,
    // If true, prints the JS stack inside of Prepack along with the stack in the Prepacked program. Useful for debugging Prepack itself.
    internalDebug: true,
    // Number of milliseconds to run a program before it times out. Useful to avoid infinite loops in the Prepacked program.
    timeout: Infinity
};

function apply(program, file, isToyLambda) { 
    let interpretFilePath;
    if (!isToyLambda) {
        interpretFilePath = './toyJS/interpreter.js';
    } else {
        interpretFilePath = './toyLambda/interpreter.js';
    }
    const interpretFileContents = isToyLambda ? '(' + require(interpretFilePath) + ')' : fs.readFileSync(path.join(__dirname, interpretFilePath), 'utf8');
 
    const {code, map} = Prepack.prepackSources(
        [{
            filePath: interpretFilePath, 
            fileContents: isToyLambda ? interpretFileContents + '(' + JSON.stringify(program) + ', function(err, result) { if (err) { throw err; } else { module.exports = result; }});' : interpretFileContents + '(' + JSON.stringify(program) + ');'
        }], prepackOptions);
        

    const outputFile = '../output/' + file.substring(file.indexOf('/') + 1, file.indexOf('.')) + '.js';
    fs.writeFileSync(path.join(__dirname, outputFile), code);
    return path.join(__dirname, outputFile);
}

module.exports = {
    apply: apply
}