const interpreter = require('./toyLambda/interpreter.js');
const parser = require('./toyLambda/parser.js');
const futamura = require('./futamura.js');

function callbackNormal (addTiming) { 
    if (!addTiming) {
        return function (err, result) {
            if (err) {
                throw err;
            }
            if (typeof result === 'function') {
                console.log('an abstraction');
            } else {
                console.log(JSON.stringify(result));
            }
    
            module.exports = {
                result: result
            };
        };     
    } else {
        return function (err, result, timing) {
            if (err) {
                throw err;
            }
            console.log('Time: ' + timing + 'ms');
            if (typeof result === 'function') {
                console.log('an abstraction');
            } else {
                console.log(JSON.stringify(result));
            }
    
            module.exports = {
                result: result,
                timing: timing
            };
        };        
    }
}

function callbackTest () {     
    return function (err, result) {
        if (err) {
            throw err;
        }
    
        module.exports = result;
    };     
}

function callbackReport () { 
    return function (err, result) { 
        module.exports = function (incomingCallback) {
            incomingCallback(err, result) 
        }; 
    };
}

module.exports = {
    parserBoilerplate: function (code) {
        return parser.parse(code);
    },
    interpreterBoilerplate: function (code, addTiming, maxTermCalls) {
        interpreter(parser.parse(code), callbackNormal(addTiming), addTiming, maxTermCalls);
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
        }, true);
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
    },
    interpreterBoilerplateReport: function (code, callback) {
        interpreter(parser.parse(code), callback, false);
    },
    futamuraBoilerplateReport: function (code, callback) {
        return function (fileName) {
            try {
                const result = futamura.apply(parser.parse(code), callbackReport, fileName, false);
                callback(null, result);
            } catch (err) {
                callback(err);
            }
        };
    }
};