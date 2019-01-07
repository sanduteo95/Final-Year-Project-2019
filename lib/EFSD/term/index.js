const EFSD = require('./app.js').EFSD;

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
    maxStackDepth: 10000
};

const appInterpret = (program, addTiming) => {
    return EFSD(program, addTiming)
};

const appFutamura = (program, file, addTiming) => {
    let interpretFilePath = './app.js';
    let interpretFileContents = fs.readFileSync(path.join(__dirname, interpretFilePath), 'utf8');
    // replace the top so that the module does not get included in Prepacked JavaScript
    interpretFileContents = interpretFileContents.replace('exports["EFSD"] =', 'const EFSD =');
 
    let {code} = Prepack.prepackSources(
        [{
            filePath: interpretFilePath, 
            fileContents: interpretFileContents + '\nconst result = EFSD(' + JSON.stringify(program) + `,` + addTiming + `);\nconsole.log(result);\nmodule.exports = result;`
        }], prepackOptions);

    // replace the last line so we can run the file in the terminal
    code = code.replace('}).call(this);', '}).call(global);')
    const outputFile = '../../../output/' + file.substring(file.indexOf('/') + 1, file.indexOf('.')) + '.js';
    fs.writeFileSync(path.join(__dirname, outputFile), code);
    return path.join(__dirname, outputFile);
}

module.exports = {
    interpreter: appInterpret,
    futamura: appFutamura
}