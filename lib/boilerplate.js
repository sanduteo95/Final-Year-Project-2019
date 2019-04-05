const fs = require('fs');

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

const readFile = fileName => {
    return fs.readFileSync(fileName, 'utf8');;
};

const getOutputFile = fileName => {
    if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd') {
        return '../output/SSD/' + fileName.substring(fileName.indexOf('input/SSD/') + 'input/SSD/'.length, fileName.lastIndexOf('.')) + '.js';
    } else {
        return '../output/toyLambda/' + fileName.substring(fileName.indexOf('input/toyLambda/') + 'input/toyLambda/'.length, fileName.lastIndexOf('.')) + '.js';
    }
};

module.exports = {
    parserBoilerplate: fileName => {
        const code = readFile(fileName);
        return parser.parse(code);
    },
    interpreterBoilerplate: (fileName) => {
        const code = readFile(fileName);
        if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd') {
            SSDInterpreter(code, callback, undefined);
        } else {
            lambdaInterpreter(parser.parse(code), callback, undefined);
        }
    },
    compilerBoilerplate: (fileName, maxTermCalls) => {
        const outputFile = getOutputFile(fileName);
        if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd') {
            SSDCompiler(maxTermCalls, outputFile, fileName);
        } else {
            lambdaCompiler(maxTermCalls, outputFile, fileName);
        }
    },
    futamura1Boilerplate: (fileName, maxTermCalls, futamuraStrategy) => {
        const code = readFile(fileName);
        const outputFile = getOutputFile(fileName);
        const isGoIMachine = fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd';
        if (isGoIMachine) {
            return futamura.apply1(code, callback, maxTermCalls, futamuraStrategy, isGoIMachine, outputFile);
        } else {
            return futamura.apply1(parser.parse(code), callback, maxTermCalls, futamuraStrategy, isGoIMachine, outputFile);
        }        
    },
    futamura2Boilerplate: (futamuraStrategy, isGoIMachine) => {
        return futamura.apply2(futamuraStrategy !== 0, isGoIMachine);
    },
    interpreterBoilerplateTest: (fileName, callbackTest) => {
        const code = readFile(fileName);
        if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd') {
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