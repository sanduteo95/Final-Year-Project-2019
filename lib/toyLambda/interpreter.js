module.exports = function (program, callback) {
    const readline = require('readline');

    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    // use callbacks to wait in case there's user input
    interpretLambda(program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, function (err, address) {
        // if there is an error, throw it
        if (err) {
            callback(err, null);
            return;
        }
        // otherwise, return the result
        // if the address is empty then it returns undefined
        if (address != printAddress) {
            callback(null, stack[address]);
        } else {
            callback(null, stack[emptyAddress]);
        }
    });

    function interpretLambda (lambda, boundVariables, callback) {
        // check first if there are any global variables
        if (lambda[0] === 'Def') {
            // point the defined lambda to the stack at a new address
            stackAddress = stackAddress + 1;
            stack[stackAddress] = lambda[2];
            boundVariables[lambda[1]] = {
                address: stackAddress
            }
            interpretLambda(lambda[3], boundVariables, callback);
        } else {
            // interpret the lambda term
            interpretTerm(lambda, boundVariables, [], function (err, address) {
                // if there is an error run callback with it
                if (err) {
                    callback(err, null);
                    return;
                }
                // otherwise run callback with the address
                callback(null, address);
            });
        }
    }

    function interpretTerm (term, boundVariables, variablesToBound, callback, isApplication) {
        switch(term[0]) {
            case 'Deref':
                interpretDereference(term[1], boundVariables, callback);
                break;
            case 'Const':
                interpretConstant(term[1], callback);  
                break;
            case 'Op':
                interpretOperator(term[1], boundVariables, variablesToBound, callback, isApplication);
                break;
            case 'Abstr':
                interpretAbstraction(term[1], boundVariables, variablesToBound, callback, isApplication);
                break;
            case 'Apply':
                interpretApplication(term[1], boundVariables, variablesToBound, callback, isApplication);
                break;
            default:
                callback(new Error('Failed to interpret term for ' + term[0]), null);
                return;
        }
    }

    function interpretAbstraction(abstraction, boundVariables, variablesToBound, callback, isApplication) {
        // bind variable if there is anything to bind
        if (variablesToBound.length > 0) {
            const numCalls = !boundVariables[abstraction[0]] ? 0 : boundVariables[abstraction[0]].numCalls;
            boundVariables[abstraction[0]] = {
                address: variablesToBound.pop(),
                numCalls: numCalls + 1
            };
        }

        if (global.__residual && boundVariables[abstraction[0]] && boundVariables[abstraction[0]].numCalls > 2) {
            __residual("void", function (stack, stackAddress, interpretTerm, abstraction, boundVariables, variablesToBound, callback, isApplication) {
                interpretTerm(abstraction[1], boundVariables, variablesToBound, function (err, address) {
                    // if there is an error
                    if(err) {
                        // check if the error is because abstract variable is not defined
                        if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
                            stackAddress = stackAddress + 1;
                            stack[stackAddress] = ['Abstr', abstraction];
                            address = stackAddress;
                        } else {
                            // otherwise callback the error
                            callback(err, null);
                            return;
                        }
                    }
                    // pass the address to the callback
                    callback(null, address);
                }, isApplication);
            }, stack, stackAddress, interpretTerm, abstraction, boundVariables, variablesToBound, callback, isApplication);
        } else {
            interpretTerm(abstraction[1], boundVariables, variablesToBound, function (err, address) {
                // if there is an error
                if(err) {
                    // check if the error is because abstract variable is not defined
                    if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
                        stackAddress = stackAddress + 1;
                        stack[stackAddress] = ['Abstr', abstraction];
                        address = stackAddress;
                    } else {
                        // otherwise callback the error
                        callback(err, null);
                        return;
                    }
                }
                // pass the address to the callback
                callback(null, address);
            }, isApplication);
        }
    }

    function interpretApplication(application, boundVariables, variablesToBound, callback, isApplication) {
        const rhsCallback = function (err, address) {
            if (err) {
                callback(err, null);
                return;
            }
            variablesToBound.push(address);

            const lhsCallback = function (err, newAddress) {
                if (err) {
                    callback(err, null);
                    return;
                }

                // clean up stack
                if (address !== newAddress) {
                    stack[address] = stack[newAddress];
                }
                stackAddress = address;
                callback(null, address);
            };
            // check if the LHS is a normal abstraction or a variable
            switch(application[0][0]) {
                case 'Abstr': case 'Apply':
                    interpretTerm(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);
                    break;
                case 'Deref':
                    interpretTerm(application[0], boundVariables, variablesToBound, function (err, termAddress) {
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        const term = stack[termAddress];
                        if (term[0] !== 'Abstr' ) {
                            callback(new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]), null);
                            return;
                        }
                        interpretTerm(term, boundVariables, variablesToBound, lhsCallback, isApplication);
                    }, isApplication);
                    break;
                default:
                    callback(new Error('Failed to interpret application for ' + application[0][0]), null);
                    return;
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
            stackAddress = stackAddress + 1;
            stack[stackAddress] = input;
            callback(null, stackAddress);
        });
    }

    function interpretIdentifier (identifier, boundVariables, callback) {
        // just get the address on the stack pointed at by the identifier
        const address = !boundVariables[identifier] ? undefined : boundVariables[identifier].address;
        if(!address) {
            callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
            return;
        }
        if(identifier === '_print') {
            stack[printAddress] = stack[address];
            callback(null, printAddress);
        } else if (identifier === '_read') {
            // for prepack
            if (global.__residual) {
                __residual("void", function (waitForInput, callback) {
                    waitForInput(callback);
                }, waitForInput, callback);
            } else {
                waitForInput(callback);
            }
        } else {
            callback(null, address);
        }
    }

    function interpretDereference (dereference, boundVariables, callback) {
        if (dereference[0] !== 'Identifier') {
            callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
            return;
        }
        // get address of the identifier on the stack
        interpretIdentifier(dereference[1], boundVariables, function (err, address) {
            if (err) {
                callback(err, null);
                return;
            }
            if (address === printAddress) {
                console.log(stack[printAddress]);
                callback(null, printAddress);
            } else {
                // increase the stack address and store the value of the identifier there
                stackAddress = stackAddress + 1;
                stack[stackAddress] = stack[address];
                callback(null, stackAddress);
            }
        });
    }

    function interpretConstant (constant, callback) {
        // just increment the address on the stack and assign it the constant value
        stackAddress = stackAddress + 1;
        stack[stackAddress] = constant;
        callback(null, stackAddress);
    }

    function applyOperator (operator, lhsAddress, rhsAddress, callback) {
        switch(operator) {
            case 'Plus':   
                stack[lhsAddress] = stack[lhsAddress] + stack[rhsAddress];
                break;
            case 'Minus':
                stack[lhsAddress] = stack[lhsAddress] - stack[rhsAddress];
                break;
            case 'Times':
                stack[lhsAddress] = stack[lhsAddress] * stack[rhsAddress];
                break;
            case 'Divide':
                stack[lhsAddress] = stack[lhsAddress] / stack[rhsAddress];
                break;
            case 'Modulus':
                stack[lhsAddress] = stack[lhsAddress] % stack[rhsAddress];
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
                callback(new Error('Failed to interpret operator for ' + operator[0]), null);
                return;
        }
        callback(null, lhsAddress);
    }

    function interpretOperator (operator, boundVariables, variablesToBound, callback, isApplication) {
        const lhsOpCallback = function (err, lhsAddress) {
            if (err) {
                callback(err, null);
                return;
            }
            // clean up stack
            stackAddress = lhsAddress;

            const rhsOpCallback = function (err, rhsAddress) {
                if (err) {
                    callback(err, null);
                    return;
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
                rhsOpCallback(null, undefined);
            }
        };
        interpretTerm(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
    }
}