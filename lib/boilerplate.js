const EFSDInterpreter = require('./EFSD/term/app.js').EFSD;
const lambdaInterpreter = require('./toyLambda/interpreter.js');
const EFSDCompiler= require('./EFSD/compiler.js');
const lambdaCompiler = require('./toyLambda/compiler.js');
const parser = require('./toyLambda/parser.js');
const futamura = require('./futamura.js');

const callback = (err, result) => {
    if (err) {
        throw err;
    }
    
    if (result) {
        console.log(result.toString());
    }
    module.exports = result;
};

module.exports = {
    parserBoilerplate: code => {
        return parser.parse(code);
    },
    interpreterBoilerplate: (code, maxTermCalls) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                EFSDInterpreter(code, callback, maxTermCalls);
            } else {
                lambdaInterpreter(parser.parse(code), callback, maxTermCalls);
            }
        };
    },
    compilerBoilerplate: fileName => {
        if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
            const outputFile = './output/EFSD/' + fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.')) + '.js';
            EFSDCompiler(outputFile, fileName);
        } else {
            const outputFile = './output/toyLambda/' + fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.')) + '.js';
            lambdaCompiler(outputFile, fileName);
        }
    },
    futamura1Boilerplate: (code, maxTermCalls, addClosure, closureStrategy) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                return futamura.apply1(code, callback, fileName, maxTermCalls, addClosure, closureStrategy);
            } else {
                return futamura.apply1(parser.parse(code), callback, fileName, maxTermCalls, addClosure, closureStrategy);
            }        
        };
    },
    futamura2Boilerplate: (isGoIMachine, addClosure) => {
        return futamura.apply2(isGoIMachine, addClosure);
    },
    interpreterBoilerplateTest: (code, callbackTest) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                EFSDInterpreter(code, (err, result) => {
                    callback(err, result);
                    callbackTest(err, result);
                }, false);
            } else {
                lambdaInterpreter(parser.parse(code), (err, result) => {
                    callback(err, result);
                    callbackTest(err, result);
                }, false);
            }
        };
    }
};