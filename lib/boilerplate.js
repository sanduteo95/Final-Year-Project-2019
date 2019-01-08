const EFSDInterpreter = require('./EFSD/term/app.js').EFSD;
const lambdaInterpreter = require('./toyLambda/interpreter.js');
const parser = require('./toyLambda/parser.js');
const futamura = require('./futamura.js');

callbackNormal = (err, result) => {
    if (err) {
        throw err;
    }
    if (typeof result === 'function') {
        console.log('an abstraction');
    } else {
        console.log(JSON.stringify(result));
    }

    module.exports = result;
};

callbackTest = (err, result) => {
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
                EFSDInterpreter(code, callbackNormal, addTiming, maxTermCalls);
            } else {
                lambdaInterpreter(parser.parse(code), callbackNormal, addTiming, maxTermCalls);
            }
        };
    },
    futamuraBoilerplate: (code, addTiming, maxTermCalls) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                return futamura.apply(code, callbackNormal, fileName, addTiming, maxTermCalls);
            } else {
                return futamura.apply(parser.parse(code), callbackNormal, fileName, addTiming, maxTermCalls);
            }        
        };
    },
    interpreterBoilerplateTest: (code, callback) => {
        return fileName => {
            if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                EFSDInterpreter(code, (err, result) => {
                    callbackTest(err, result);
                    callback(err, result);
                }, false);
            } else {
                lambdaInterpreter(parser.parse(code), (err, result) => {
                    callbackTest(err, result);
                    callback(err, result);
                }, false);
            }
        };
    },
    futamuraBoilerplateTest: (code, callback) => {
        return fileName => {
            try {
                if (fileName.substring(fileName.lastIndexOf('.') + 1) === 'efsd') {
                    const result = futamura.apply(code, callbackTest, fileName, false);
                    callback(null, result);
                } else {
                    const result = futamura.apply(parser.parse(code), callbackTest, fileName, false);
                    callback(null, result);
                }
            } catch (err) {
                callback(err);
            }
        };
    }
};