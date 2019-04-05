const fs = require('fs');
const path = require('path');

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
    __dirname = path.resolve(path.dirname(''));
    return fs.readFileSync(path.join(__dirname, fileName), 'utf8');
};

const getOutputFile = (fileName, futamuraStrategy) => {
    let prefix = '';
    if (futamuraStrategy) {
        switch(futamuraStrategy) {
            case 1:
                prefix = 'cc-';
                break;
            case 2:
                prefix = 'pp-cc-';
                break;
            case 3:
                prefix = 'cc-pp-';
                break;
            case 4:
                prefix = 'pp-cc-pp-';
                break;
            case 5:
                prefix = 'cc-pp-cc-';
                break;
            default:
                throw new Error('That option is not allowed!');
        }
    }
    const folderName = fileName.substring(0, fileName.lastIndexOf('/') + 1).replace('input', 'output');
    const jsFileName = prefix + fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.')) + '.js';
    return folderName + jsFileName;
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
        const outputFile = getOutputFile(fileName, 0);
        if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'ssd') {
            SSDCompiler(maxTermCalls, outputFile, fileName);
        } else {
            lambdaCompiler(maxTermCalls, outputFile, fileName);
        }
        console.log(path.join(__dirname, '../' + outputFile));
    },
    futamura1Boilerplate: (fileName, maxTermCalls, futamuraStrategy) => {
        const code = readFile(fileName);
        const outputFile = getOutputFile(fileName, futamuraStrategy);
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