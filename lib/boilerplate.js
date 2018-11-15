const interpreter = require('./toyLambda/interpreter.js');
const parser = require('./toyLambda/parser.js');
const futamura = require('./futamura.js');

function callbackNormal (err, result) {
    if (err) {
        throw err;
    }
    if (typeof result === 'function') {
        console.log('an abstraction');
    } else {
        console.log(JSON.stringify(result));
    }

    module.exports = result;
}

function callbackTest (err, result) {
    if (err) {
        throw err;
    }

    module.exports = result; 
}

module.exports = {
    parserBoilerplate: function (code) {
        return parser.parse(code);
    },
    interpreterBoilerplate: function (code, addTiming, maxTermCalls) {
        interpreter(parser.parse(code), callbackNormal, addTiming, maxTermCalls);
    },
    futamuraBoilerplate: function (code, addTiming, maxTermCalls) {
        return function (fileName) {
            return futamura.apply(parser.parse(code), callbackNormal, fileName, addTiming, maxTermCalls);
        };
    },
    interpreterBoilerplateTest: function (code, callback) {
        interpreter(parser.parse(code), function (err, result) {
            callbackTest(err, result);
            callback(err, result);
        }, false);
    },
    futamuraBoilerplateTest: function (code, callback) {
        return function (fileName) {
            try {
                const result = futamura.apply(parser.parse(code), callbackTest, fileName, false);
                callback(null, result);
            } catch (err) {
                callback(err);
            }
        };
    }
};