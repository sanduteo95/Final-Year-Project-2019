const EFSDInterpreter = require('./EFSD/term/app.js').EFSD;
const lambdaInterpreter = require('./toyLambda/interpreter.js');
const parser = require('./toyLambda/parser.js');
const futamura = require('./futamura.js');

callback = (err, result) => {
    if (err) {
        throw err;
    }
    
    console.log(result);
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
    futamuraBoilerplate: (code, maxTermCalls, addClosure, closureStrategy) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                return futamura.apply(code, callback, fileName, maxTermCalls, addClosure, closureStrategy);
            } else {
                return futamura.apply(parser.parse(code), callback, fileName, maxTermCalls, addClosure, closureStrategy);
            }        
        };
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