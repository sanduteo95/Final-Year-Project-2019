module.exports = function (program, callback) {
    const CALLBACK_TIMEOUT = 1000;
    
    const readline = require('readline');

    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    let termCalls = 0;

    // use callbacks to wait in case there's user input
    interpretLambda(program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, function (err, address) {
        callback(err, stack[address !== printAddress ? address : emptyAddress]);
    });

    function interpretLambda (lambda, boundVariables, callback) {
        // check first if there are any global variables
        if (lambda[0] === 'Def') {
            // point the defined lambda to the stack at a new address
            stack[++stackAddress] = lambda[2];
            boundVariables[lambda[1]] = stackAddress;
            interpretLambda(lambda[3], boundVariables, callback);
        } else {
            // interpret the lambda term
            interpretTerm(lambda, boundVariables, [], callback);
        }
    }

    function interpretTerm (term, boundVariables, variablesToBound, callback, isApplication) {
        termCalls++;

        // add a timeout to preserve the node stack
        const termCallback = function (err, address) {
            if (global.__residual && termCalls > 30) {
                termCalls--;
                __assumeDataProperty(global, 'setTimeout', function (cb, time) {
                    setTimeout(cb, time)
                });
                __residual("void", function(setTimeout, callback, err, address, CALLBACK_TIMEOUT) {
                    setTimeout(function () { 
                        callback(err, address); 
                    }, CALLBACK_TIMEOUT);
                }, global.setTimeout, callback, err, address, CALLBACK_TIMEOUT);
            } else {
                callback(err, address);
            }
        }
        switch(term[0]) {
            case 'Deref':
                interpretDereference(term[1], boundVariables, termCallback);
                break;
            case 'Const':
                interpretConstant(term[1], termCallback);  
                break;
            case 'Op':
                interpretOperator(term[1], boundVariables, variablesToBound, termCallback, isApplication);
                break;
            case 'Abstr':
                interpretAbstraction(term[1], boundVariables, variablesToBound, termCallback, isApplication);
                break;
            case 'Apply':
                interpretApplication(term[1], boundVariables, variablesToBound, termCallback, isApplication);
                break;
            default:
                termCallback(new Error('Failed to interpret term for ' + term[0]), null);
        }
    }

    function interpretAbstraction(abstraction, boundVariables, variablesToBound, callback, isApplication) {
        // bind variable if there is anything to bind
        if (variablesToBound.length > 0) {
            boundVariables[abstraction[0]] = variablesToBound.pop();
        }

        const abstrCallback = function (err, address) {
            // if there is an error, check if it is because abstract variable is not defined
            if(err && isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
                stack[++stackAddress] = ['Abstr', abstraction];
                address = stackAddress;
                err = null;
            }
            // pass the address to the callback
            callback(err, address);
        };

        interpretTerm(abstraction[1], boundVariables, variablesToBound, abstrCallback, isApplication);
    }

    function interpretApplication(application, boundVariables, variablesToBound, callback, isApplication) {
        const rhsCallback = function (err, address) {
            if (err) {
                callback(err);
            } else {
                variablesToBound.push(address);

                const lhsCallback = function (err, newAddress) {
                    if (!err) {
                        // clean up stack
                        if (address !== newAddress) {
                            stack[address] = stack[newAddress];
                        }
                        stackAddress = address;
                    }
                    callback(err, address);
                };
                // check if the LHS is a normal abstraction or a variable
                switch(application[0][0]) {
                    case 'Abstr': case 'Apply':
                        interpretTerm(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);
                        break;
                    case 'Deref':
                        interpretTerm(application[0], boundVariables, variablesToBound, function (err, termAddress) {
                            let term = undefined;
                            if (!err) {
                                term = stack[termAddress];
                                if (term[0] !== 'Abstr' ) {
                                    err = new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]);
                                }
                            }
                            if (err) {
                                callback(err);
                            } else {
                                interpretTerm(term, boundVariables, variablesToBound, lhsCallback, isApplication);
                            }
                        }, isApplication);
                        break;
                    default:
                        callback(new Error('Failed to interpret application for ' + application[0][0]), null);
                } 
            }
        };
        // interpret the RHS termand add it to the variablesToBound array 
        // send an empty array of variables to bind because it's a different scope
        interpretTerm(application[1], boundVariables, [], rhsCallback, true);
    }

    function waitForInput(callback) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('User input:\n', function(input) {
            rl.close();
            callback(input);
        });
    }

    function interpretIdentifier (identifier, boundVariables, callback) {
        // just get the address on the stack pointed at by the identifier
        const address = boundVariables[identifier];
        if(!address) {
            callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
            return;
        }
        
        if(identifier === '_print') {
            stack[printAddress] = stack[address];
            callback(null, printAddress);
        } else if (identifier === '_read') {
            const inputCallback = function (input) {
                stack[readAddress] = input;
                callback(null, readAddress);
            };
            // for prepack
            if (global.__residual) {
                __residual("void", function (waitForInput, callback) {
                    waitForInput(callback);
                }, waitForInput, inputCallback);
            } else {
                waitForInput(inputCallback);
            }
        } else {
            callback(null, address);
        }
    }

    function interpretDereference (dereference, boundVariables, callback) {
        if (dereference[0] !== 'Identifier') {
            return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
        }
        // get address of the identifier on the stack
        interpretIdentifier(dereference[1], boundVariables, function (err, address) {
            if (!err) {
                if (address === printAddress) {
                    console.log(stack[printAddress]);
                } else {
                    // increase the stack address and store the value of the identifier there
                    stack[++stackAddress] = stack[address];
                    address = stackAddress;
                }
            }
            callback(err, address);
        });
    }

    function interpretConstant (constant, callback) {
        // just increment the address on the stack and assign it the constant value
        stack[++stackAddress] = constant;
        callback(null, stackAddress);
    }

    function applyOperator (operator, lhsAddress, rhsAddress, callback) {
        let err = null;
        switch(operator) {
            case 'Plus':   
                stack[lhsAddress] += stack[rhsAddress];
                break;
            case 'Minus':
                stack[lhsAddress] -= stack[rhsAddress];
                break;
            case 'Times':
                stack[lhsAddress] *= stack[rhsAddress];
                break;
            case 'Divide':
                stack[lhsAddress] /= stack[rhsAddress];
                break;
            case 'Modulus':
                stack[lhsAddress] %= stack[rhsAddress];
                break;
            case 'Eq':
                stack[lhsAddress] = stack[lhsAddress] == stack[rhsAddress];
                break;
            case 'Noteq':
                stack[lhsAddress] = stack[lhsAddress] != stack[rhsAddress];
                break;
            case 'Leq':
                stack[lhsAddress] = stack[lhsAddress] <= stack[rhsAddress];
                break;
            case 'Less':
                stack[lhsAddress] = stack[lhsAddress] < stack[rhsAddress];
                break;
            case 'Geq':
                stack[lhsAddress] = stack[lhsAddress] >= stack[rhsAddress];
                break;
            case 'Greater':
                stack[lhsAddress] = stack[lhsAddress] > stack[rhsAddress];
                break;
            case 'And':
                stack[lhsAddress] = stack[lhsAddress] && stack[rhsAddress];
                break;
            case 'Or':
                stack[lhsAddress] = stack[lhsAddress] || stack[rhsAddress];
                break;
            case 'Negate':
                stack[lhsAddress] = !stack[lhsAddress];
                break;
            case 'Negative':
                stack[lhsAddress] = - stack[lhsAddress];
                break;
            default:
                err = new Error('Failed to interpret operator for ' + operator[0]);
        }
        callback(err, lhsAddress);
    }

    function interpretOperator (operator, boundVariables, variablesToBound, callback, isApplication) {
        const lhsOpCallback = function (err, lhsAddress) {
            if (err) {
                return callback(err, null);
            }
            // clean up stack
            stackAddress = lhsAddress;

            const rhsOpCallback = function (err, rhsAddress) {
                if (err) {
                    return callback(err, null);
                }
                applyOperator(operator[0], lhsAddress, rhsAddress, callback);
            };

            if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
                // don't interpret stuff if not needed to
                if ((operator[0] === 'Or' && stack[lhsAddress]) || 
                    (operator[0] === 'And' && !stack[lhsAddress])) {
                    callback(null, lhsAddress);
                } else {
                    interpretTerm(operator[2], boundVariables, variablesToBound, rhsOpCallback, isApplication);
                }
            } else {
                rhsOpCallback();
            }
        };
        interpretTerm(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
    }
}