const Prepack = require("prepack");
const path = require('path');
const fs = require('fs');
const ClosureCompiler = require('google-closure-compiler').jsCompiler;

const runClosure = (path, code) => { 
    const closureCompiler = new ClosureCompiler({
        compilation_level: 'ADVANCED',
        checks_only: true // otherwise it'll include JSCOMPILER_PRESERVE
    });

    return new Promise((resolve, reject) => {
        closureCompiler.run([{
            path: path,
            src: code
        }], (exitCode, stdOut, stdErr) => {
            if (exitCode !== 1) {
                return reject(stdErr);
            }
            return resolve(stdOut[0].src)
        }); 
    });
};

const runPrepack = (filePath, fileContents) => {
    const prepackOptions = {
        // Filename to use in error stacks.
        filename: filePath.substring(filePath.lastIndexOf('/') + 1), 
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
        maxStackDepth: 1000,
        // the random seed
        mathRandomSeed: "rnd"
    };
    
    let {code} = Prepack.prepackSources(
        [{
            filePath: filePath, 
            fileContents: fileContents
        }], prepackOptions);
    // replace the last line so we can run the file in the terminal
    code = code.replace('}).call(this);', '}).call(global);')  

    return code;
};

const apply1 = (program, callback, maxTermCalls, futamuraStrategy, isGoIMachine, outputFile) => {
    __dirname = path.resolve(path.dirname(''));
    let filePath, fileContents;
    if (isGoIMachine) { 
        // set up the input for prepack
        filePath = './lib/SSD/interpreter.js';
        fileContents = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        fileContents = fileContents.replace('exports["SSD"] =', 'const SSD =');
        fileContents = fileContents + '\nSSD';
    } else {
        // set up the input for prepack
        filePath = './toyLambda/interpreter.js';
        fileContents = '(' + require(filePath) + ')';
    }
    fileContents += '(' + JSON.stringify(program) + `,` +  callback.toString() + `, ` + maxTermCalls + `);`;

    switch (futamuraStrategy) {
        case 0: // PP
            // just run prepack
            const prepackCode = runPrepack(filePath, fileContents);
            fs.writeFileSync(path.join(__dirname, outputFile), prepackCode);
            return Promise.resolve(path.join(__dirname, outputFile));
            break;
        case 1: // CC
            // just run closure
            return runClosure(filePath, fileContents)
                .then(closureCode => {
                    fs.writeFileSync(path.join(__dirname, outputFile), closureCode);
                    return Promise.resolve(path.join(__dirname, outputFile));
                });
        case 2: // CC + Prepack
            // first run closure
            return runClosure(filePath, fileContents)
                .then(closureCode => {
                    // then run prepack
                    const prepackCode = runPrepack(outputFile, closureCode);
                    fs.writeFileSync(path.join(__dirname, outputFile), prepackCode);
                    return Promise.resolve(path.join(__dirname, outputFile));
                }).catch(err => {
                    return Promise.reject(err);
                });
        case 3: // Prepack + CC
            // first run prepack
            const prepackCode3 = runPrepack(filePath, fileContents);
            fs.writeFileSync(path.join(__dirname, outputFile), prepackCode3);
            // then closure
            return runClosure(outputFile, prepackCode3)
                .then(closureCode => {
                    fs.writeFileSync(path.join(__dirname, outputFile), closureCode);
                    return Promise.resolve(path.join(__dirname, outputFile));
                }).catch(err => {
                    return Promise.reject(err);
                });
        case 4: // CC + Prepack + CC
            // first run closure
            return runClosure(filePath, fileContents)
                .then(closureCode => {
                    // then run prepack
                    const prepackCode4 = runPrepack(outputFile, closureCode);
                    return runClosure(outputFile, prepackCode4)
                }).then(closurePrepackCode => {
                    fs.writeFileSync(path.join(__dirname, outputFile), closurePrepackCode);
                    return Promise.resolve(path.join(__dirname, outputFile));
                }).catch(err => {
                    return Promise.reject(err);
                });
        case 5: // Prepack + CC + Prepack
            // first run prepack
            const prepackCode5 = runPrepack(filePath, fileContents);
            fs.writeFileSync(path.join(__dirname, outputFile), prepackCode5);
            // then closure
            return runClosure(outputFile, prepackCode5)
                .then(closureCode => {
                    // then run prepack
                    const closurePrepackCode = runPrepack(outputFile, closureCode);
                    fs.writeFileSync(path.join(__dirname, outputFile), closurePrepackCode);
                    return Promise.resolve(path.join(__dirname, outputFile));
                }).catch(err => {
                    return Promise.reject(err);
                });
        default:
            // will never reach this case
    }
}

const apply2 = (addClosure, isGoIMachine) => {  
    let prepackFilePath;
    if (isGoIMachine) {
        prepackFilePath = './prepack/SSD.min.js';
    } else {
        prepackFilePath = './prepack/toyLambda.min.js';
    }
    let prepackFileContents = fs.readFileSync(path.join(__dirname, prepackFilePath), 'utf8');
    const outputFile = isGoIMachine ? './SSD/compiler.js' : './toyLambda/compiler.js';

    if (!addClosure) {    
        const prepackCode = runPrepack(prepackFilePath, prepackFileContents);

        fs.writeFileSync(path.join(__dirname, outputFile), prepackCode);
        return Promise.resolve(path.join(__dirname, outputFile));    
    } else {
        // just run closure
        return runClosure(prepackFilePath, prepackFileContents)
            .then(closureCode => {
                fs.writeFileSync(path.join(__dirname, outputFile), closureCode);
                return Promise.resolve(path.join(__dirname, outputFile));
            });
    }
};

module.exports = {
    apply1: apply1,
    apply2: apply2
}