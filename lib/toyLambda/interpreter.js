module.exports = function (program, callback) {
    // variables used for stack management
    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    // variables used to set-up timeouts to avoid stack overflow
    let termCalls = 0;
    const maxTermCalls = !global.__residual ? process.env.NUM_CALLS : 75;

    const logDebug = !global.__residual ? false : (!global.__residual && process.env.DEBUG);

    // use callbacks to wait in case there's user input
    interpretLambda(program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, function (err, address) {
        callback(err, address > printAddress && stack[address]);
    });

    function interpretLambda (lambda, boundVariables, callback) {
        logDebug && console.log('INTERPRET LAMBDA')
        const lambdaCallback = function (value) {
            stack[++stackAddress] = value;
            boundVariables[lambda[1]] = stackAddress;
            interpretLambda(lambda[3], boundVariables, callback);
        }
        // check first if there are any global variables
        if (lambda[0] === 'Def') {
            // only interpret the definition if it is an application or operator
            if (lambda[2][0] === 'Apply' || lambda[2][0] === 'Operator') {
                logDebug && console.log('INTERPRET DEFINITON: ' + lambda[1])
                interpretTerm(lambda[2], boundVariables, [], function (err, address) {
                    lambdaCallback(stack[address]);
                }, true);
            } else {
                lambdaCallback(lambda[2]);
            }
        } else if (lambda[0] === 'RecDef') {
            lambdaCallback(lambda[2]);
        } else {
            // interpret the lambda term
            interpretTerm(lambda, boundVariables, [], callback, true);
        }
    }

    function interpretTerm (term, boundVariables, addressesToBind, callback, isAbstraction) {
        // increase number of term calls
        termCalls++;

        const termCallback = function (err, address) {
            // when the function returns, decrease number of term calls
            termCalls--;

            logDebug && console.log('=> ' + JSON.stringify(stack[address]))
            callback(err, address);
        }

        if (global.__residual) {
            // if we're in pepack, and we've reached its maximum nubmer of calls
            if (termCalls > maxTermCalls/9) {
                // check what to leave behind for the interpreter
                if (termCalls > maxTermCalls) {
                    global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
                        setTimeout(cb, time)
                    });

                    global.__residual("void", function(setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
                        setTimeout(function () { 
                            interpretTermLazy (term, boundVariables, addressesToBind, termCallback, isAbstraction);
                        }, 100);
                    }, global.setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction);
                } else {
                    // decrease now so that when we run the code termCalls is like it was never increased
                    termCalls--;
                    global.__residual("void", function(interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
                        interpretTermLazy (term, boundVariables, addressesToBind, termCallback, isAbstraction);
                    }, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
                }
            } else {
                interpretTermLazy (term, boundVariables, addressesToBind, termCallback, isAbstraction);
            }
        } else {
            // otherwise, if we've reached the maximum number of calls in the interpreter
            if (termCalls > maxTermCalls) {
                // call the function with a timeout
                setTimeout(function () {
                    interpretTermLazy (term, boundVariables, addressesToBind, termCallback, isAbstraction);
                }, 100);
            } else {
                // just call the function as it is
                interpretTermLazy (term, boundVariables, addressesToBind, termCallback, isAbstraction);
            }
        }
    }

    function interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('\n---INTERPRET TERM: ' + JSON.stringify(term))
        switch(term[0]) {
            case 'Deref':
                // a dereference could return an abstraction or application, so we can try to evaluate that
                interpretDereference(term[1], boundVariables, function (err, address) {
                    if (!err) {
                        // this could refer to unknown input (for now just reading)
                        if (global.__residual && global.__isAbstract(stack[address])) {
                            callback(null, address);
                        } else {
                            const newTerm = stack[address];
                            // if the variable stored an abstraction or application, then interpret that
                            if (newTerm && (newTerm[0] === 'Abstr' ||  newTerm[0] === 'Apply')) {
                                logDebug && console.log('$ATTENTION: Variable ' + term[1][1] + ' holds a complex lambda')
                                // filter out variables that were defined after the current identifier
                                let scopedBoundVariables = {};
                                Object.keys(boundVariables).forEach(function (variable) {
                                    if (boundVariables[variable] <= address) {
                                        scopedBoundVariables[variable] = boundVariables[variable];
                                    }
                                })
                                interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, true);
                            } else {
                                logDebug && console.log('$ATTENTION: Variable ' + term[1][1] + ' does not need further interpreting')
                                if(newTerm && newTerm[0] === 'Identifier') {
                                    // the variable might not be evaluated
                                    logDebug && console.log('$ATTENTION: Variable ' + term[1][1] + ' has been stored as a complex lambda')
                                    stack[address] = ['Deref', stack[address]];
                                }
                                callback(null, address);
                            }
                        }
                    } else {
                        callback(err);
                    }
                }, isAbstraction)
                break;
            case 'Const':
                interpretConstant(term[1], callback);  
                break;
            case 'Op':
                interpretOperator(term[1], boundVariables, addressesToBind, callback, isAbstraction);
                break;
            case 'Abstr':
                interpretAbstraction(term[1], boundVariables, addressesToBind, callback, isAbstraction);
                break;
            case 'Apply':
                interpretApplication(term[1], boundVariables, addressesToBind, callback, isAbstraction);
                break;
            default:
                callback(new Error('Failed to interpret term for ' + term[0]), null);
        }
    }

    function interpretAbstraction(abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET ABSTRACTION')
        let hasBeenBound = false;
        // bind variable if there is anything to bind
        if (addressesToBind.length > 0) {
            hasBeenBound = true;
            boundVariables[abstraction[0]] = addressesToBind.pop();
            logDebug && console.log('$$ATTENTION: Abstracted value ' + abstraction[0] + ' has been bound with' + JSON.stringify(stack[boundVariables[abstraction[0]]]))
        }

        const abstrCallback = function (err, address) {
            if(err) {
                callback(err);
            } else if (isAbstraction && !hasBeenBound && stack[address] && stack[address][0] !== undefined) {
                logDebug && console.log('$ATTENTION: Variable ' + abstraction[0] + ' needs to be abstracted again');
                // if the result is not fully evaluated, can't risk leaving out the abstracted variable
                stack[++stackAddress] = ['Abstr', [abstraction[0], stack[address]]];
                address = stackAddress;
            }

            if (hasBeenBound) {
                logDebug && console.log('$ATTENTION: Variable ' + abstraction[0] + ' was replaced so no need to abstract it again');
            }

            // pass the address to the callback
            callback(null, address);
        };

        interpretTerm(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
    }

    function interpretApplication(application, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET APPLICATION')
        const rhsCallback = function (err, address) {
            if (err) {
                callback(err);
            } else {
                // add the address to the addresses to bind
                addressesToBind.push(address);
                logDebug && console.log('---END RHS---')

                const lhsCallback = function (err, newAddress) {
                    if (err) {
                        callback(err);
                    } else {
                        logDebug && console.log('$CHECK: Has Abstract/Dereference ' + JSON.stringify(application[0]) + ' been replaced?')
                        // first check that we don't need to keep the application
                        if (stack[newAddress] && ((stack[newAddress][0] === 'Deref' && stack[newAddress][0] === application[0][0] && stack[newAddress][1][1] === application[0][1][1])
                            || (stack[newAddress][0] === 'Abstr' && stack[newAddress][0] === application[0][0] && stack[newAddress][1] === application[0][1]))) {
                            logDebug && console.log('$ATTENTION: Application needs to be maintained')
                            stack[newAddress] = ['Apply', [stack[newAddress], stack[address]]];
                        }

                        // clean up stack
                        if (address !== newAddress) {
                            stack[address] = stack[newAddress];
                        }
                        stackAddress = address;

                        logDebug && console.log('---END LHS---')
                        callback(null, stackAddress);
                    }
                };
                
                logDebug && console.log('\n---START LHS---')
                interpretTerm(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
            }
        };
        logDebug && console.log('---RHS---')
        // interpret the RHS term with an empty array of addresses to bind because it's a different scope
        interpretTerm(application[1], boundVariables, [], rhsCallback, true);
    }

    function waitForInput(callback) {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('User input:\n', function(input) {
            rl.close();
            stack[readAddress] = parseInt(input);
            callback(null, readAddress);
        });
    }

    function interpretIdentifier (identifier, boundVariables, callback) {
        logDebug && console.log('INTERPRET IDENTIFIER: ' + identifier)
        // just get the address on the stack pointed at by the identifier
        const address = boundVariables[identifier];
        if(!address) {
            logDebug && console.log('$ERR: Variable ' + identifier + ' is not declared')
            return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));    
        }
        
        if(identifier === '_print') {
            stack[printAddress] = stack[address];
            callback(null, printAddress);
        } else if (identifier === '_read') {
            // prepack can save the variable as it is on the stack, to be evaluated later
            if (global.__residual) {
                // assign the read identifier to the stack as an abstract variable
                // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
                stack[readAddress] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
                callback(null, readAddress);
            } else {
                waitForInput(callback);
            }
        } else {
            // first check check if the value is unkown and it isn't an application, for prepack (for now only input)
            if (global.__residual && global.__isAbstract(stack[address])) {
                global.__residual("void", function (waitForInput, callback) {
                    waitForInput(callback);
                }, waitForInput, callback);
            } else {
                callback(null, address);
            }
        }
    }

    function interpretDereference (dereference, boundVariables, callback, isAbstraction) {
        logDebug && console.log('INTERPRET DEREFERENCE')
        if (dereference[0] !== 'Identifier') {
            return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
        }
        // get address of the identifier on the stack
        interpretIdentifier(dereference[1], boundVariables, function (err, address) {
            // the only error at this point would be from an undefined variable
            if (err) {
                // only return the error if we're not in an abstraction
                if(!isAbstraction) {
                    callback(err);
                } else {
                    // increase the stack address and store the value of the identifier there
                    stack[++stackAddress] = dereference;
                    callback(null, stackAddress);
                }
            } else {
                if (address === printAddress) {
                    if (global.__residual && global.__isAbstract(stack[address])) {
                        global.__residual("void", function (stack, printAddress) {
                            console.log(stack[printAddress]);
                        }, stack, printAddress);
                    } else {
                        console.log(stack[printAddress]);
                        callback(err, emptyAddress);
                    }
                } else {
                    // increase the stack address and store the value of the identifier there
                    stack[++stackAddress] = stack[address];
                    callback(err, stackAddress);
                }
            }
        }, isAbstraction);
    }

    function interpretConstant (constant, callback) {
        logDebug && console.log('INTERPRET CONSTANT: ' + constant)
        // just increment the address on the stack and assign it the constant value
        stack[++stackAddress] = constant;
        callback(null, stackAddress);
    }

    function applyOperator (operator, lhsAddress, rhsAddress, callback) {
        let err = null;
        // check for undefined because we can have print
        if (stack[lhsAddress][0] === undefined && stack[rhsAddress][0] === undefined) {
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
        } else {
            const lhs = stack[lhsAddress][0] !== undefined ? stack[lhsAddress] : ['Const', stack[lhsAddress]];
            const rhs = stack[rhsAddress][0] !== undefined ? stack[rhsAddress] : ['Const', stack[rhsAddress]]
            stack[lhsAddress] = ['Op', [operator, lhs, rhs]]
        }
        callback(err, lhsAddress);
    }

    function interpretOperator (operator, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET OPERATOR: ' + operator[0])
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
                } else if (operator[0] === 'Or' && !stack[lhsAddress]) {
                    interpretTerm(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
                } else {
                    interpretTerm(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
                }
            } else {
                rhsOpCallback();
            }
        };
        interpretTerm(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
    }
}