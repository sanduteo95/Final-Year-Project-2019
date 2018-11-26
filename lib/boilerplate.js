const interpreter = require('./toyLambda/interpreter.js');
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

    module.exports = result; 
};

module.exports = {
    parserBoilerplate: code => {
        return parser.parse(code);
    },
    interpreterBoilerplate: (code, addTiming, maxTermCalls) => {
        interpreter(parser.parse(code), callbackNormal, addTiming, maxTermCalls);
    },
    futamuraBoilerplate: (code, addTiming, maxTermCalls) => {
        return fileName => {
            return futamura.apply(parser.parse(code), callbackNormal, fileName, addTiming, maxTermCalls);
        };
    },
    interpreterBoilerplateTest: (code, callback) => {
        interpreter(parser.parse(code), (err, result) => {
            callbackTest(err, result);
            callback(err, result);
        }, false);
    },
    futamuraBoilerplateTest: (code, callback) => {
        return fileName => {
            try {
                const result = futamura.apply(parser.parse(code), callbackTest, fileName, false);
                callback(null, result);
            } catch (err) {
                callback(err);
            }
        };
    }
};