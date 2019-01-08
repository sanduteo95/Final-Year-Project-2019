const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');

let prepackOptions = {
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

apply = (program, callback, file, addTiming, maxTermCalls) => { 
    let filePath, fileContents;
    if (file.substring(file.lastIndexOf('.') + 1) === 'efsd') { 
        filePath = './EFSD/term/app.js';
        fileContents = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        fileContents = fileContents.replace('exports["EFSD"] =', 'const EFSD =');
        fileContents = fileContents + '\nEFSD'
    } else {
        filePath = './toyLambda/interpreter.js';
        fileContents = '(' + require(filePath) + ')';
    }
    fileContents += '(' + JSON.stringify(program) + `,` +  callback.toString() + `, ` + addTiming + `, ` + maxTermCalls + `);`;

    let {code} = Prepack.prepackSources(
        [{
            filePath: filePath, 
            fileContents: fileContents
        }], prepackOptions);

    // replace the last line so we can run the file in the terminal
    code = code.replace('}).call(this);', '}).call(global);')  

    const outputFile = '../output/' + file.substring(file.indexOf('/') + 1, file.indexOf('.')) + '.js';
    fs.writeFileSync(path.join(__dirname, outputFile), code);
    return path.join(__dirname, outputFile);
}

module.exports = {
    apply: apply
}