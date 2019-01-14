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
    interpreterBoilerplate: (code, addTiming, maxTermCalls) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                EFSDInterpreter(code, callback, addTiming, maxTermCalls);
            } else {
                lambdaInterpreter(parser.parse(code), callback, addTiming, maxTermCalls);
            }
        };
    },
    futamuraBoilerplate: (code, addTiming, maxTermCalls) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                return futamura.apply(code, callback, fileName, addTiming, maxTermCalls);
            } else {
                return futamura.apply(parser.parse(code), callback, fileName, addTiming, maxTermCalls);
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
    },
    futamuraBoilerplateTest: (code, callbackTest) => {
        return fileName => {
            try {
                if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                    const result = futamura.apply(code, callback, fileName, false);
                    callbackTest(null, result);
                } else {
                    const result = futamura.apply(parser.parse(code), callback, fileName, false);
                    callbackTest(null, result);
                }
            } catch (err) {
                callbackTest(err);
            }
        };
    }
};