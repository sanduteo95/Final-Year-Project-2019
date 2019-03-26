const SSDInterpreter = require('./SSD/interpreter.js').SSD;
const lambdaInterpreter = require('./toyLambda/interpreter.js');
const SSDCompiler= require('./SSD/compiler.js');
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
    interpreterBoilerplate: (fileName, code, isGoIMachine) => {
        if (isGoIMachine) {
            SSDInterpreter(code, callback, undefined);
        } else {
            lambdaInterpreter(parser.parse(code), callback, undefined);
        }
    },
    compilerBoilerplate: (fileName, maxTermCalls, isGoIMachine) => {
        if (isGoIMachine) {
            const outputFile = './output/SSD/' + fileName.substring(fileName.indexOf('input/SSD/') + 'input/SSD/'.length, fileName.lastIndexOf('.')) + '.js';
            SSDCompiler(maxTermCalls, outputFile, fileName);
        } else {
            const outputFile = './output/toyLambda/' + fileName.substring(fileName.indexOf('input/toyLambda/') + 'input/toyLambda/'.length, fileName.lastIndexOf('.')) + '.js';
            lambdaCompiler(maxTermCalls, outputFile, fileName);
        }
    },
    futamura1Boilerplate: (fileName, code, maxTermCalls, addClosure, closureStrategy, isGoIMachine) => {
        if (isGoIMachine) {
            return futamura.apply1(code, callback, fileName, maxTermCalls, addClosure, closureStrategy, isGoIMachine);
        } else {
            return futamura.apply1(parser.parse(code), callback, fileName, maxTermCalls, addClosure, closureStrategy, isGoIMachine);
        }        
    },
    futamura2Boilerplate: (isGoIMachine, addClosure) => {
        return futamura.apply2(isGoIMachine, addClosure);
    },
    interpreterBoilerplateTest: (fileName, code, callbackTest, isGoIMachine) => {
        if (isGoIMachine) {
            SSDInterpreter(code, (err, result) => {
                callback(err, result);
                callbackTest(err, result);
            }, false);
        } else {
            lambdaInterpreter(parser.parse(code), (err, result) => {
                callback(err, result);
                callbackTest(err, result);
            }, false);
        }
    }
};