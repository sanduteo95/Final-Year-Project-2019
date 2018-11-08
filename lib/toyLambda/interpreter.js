module.exports = function (program, callback) {
    // variables used for stack management
    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    // variables used to set-up timeouts to avoid stack overflow
    let termCalls = 0;
    const maxTermCalls = !global.__residual ? parseInt(process.env.NUM_CALLS) : 125;

    const logDebug = global.__residual ? false : (process.env.DEBUG == true);

    // use callbacks to wait in case there's user input
    interpretLambda(program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, function (err, address) {
        callback(err, address > printAddress && stack[address]);
    });

    function interpretLambda (lambda, boundVariables, callback) {
        logDebug && console.log('INTERPRET LAMBDA')

        // a lambda will contain an array of 0 or more lambda definitions and a term
        for(let i = 0; i < lambda.length - 1; i++) {
            // if the lambda is not an abstraction, we can interpret some of it
            if (lambda[i].type === 'Def' && lambda[i].value.type !== 'Abstr') {
                logDebug && console.log('INTERPRET DEFINITON: ' + lambda[i].name)
                interpretTerm(lambda[i].value, boundVariables, [], function (err, address) {
                    if (err) {
                        callback(err);
                    } else {
                        stack[++stackAddress] = stack[address];
                        boundVariables[lambda[i].name] = stackAddress;
                        logDebug && console.log('FINISHED INTERPRETING DEFINITION')
                    }
                }, true);
            } else {
                // add the lambda definitions to the stack so we only call them if needed
                stack[++stackAddress] = lambda[i].value;
                boundVariables[lambda[i].name] = stackAddress;
            }
        }
        // interpret the term (the last element in the lambda)
        interpretTerm(lambda[lambda.length - 1], boundVariables, [], callback, true);
    }

    function interpretTerm (term, boundVariables, addressesToBind, callback, isAbstraction) {
        // increase number of term calls
        termCalls++;

        if (global.__residual) {
            // if we're in pepack, and weve reached its maximum nubmer of calls
            if (termCalls > maxTermCalls/9) {
                // check what to leave behind for the interpreter
                if (termCalls > maxTermCalls) {
                    global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
                        setTimeout(cb, time)
                    });

                    global.__residual("void", function(setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
                        setTimeout(function () { 
                            interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction);
                        }, 100);
                    }, global.setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
                } else {
                    // decrease now so that when we run the code termCalls is like it was never increased
                    termCalls--;
                    global.__residual("void", function(interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
                        interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction);
                    }, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
                }
            } else {
                interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction);
            }
        } else {
            // otherwise, if we've reached the maximum number of calls in the interpreter
            if (termCalls > maxTermCalls) {
                // call the function with a timeout
                setTimeout(function () {
                    interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction);
                }, 100);
            } else {
                // just call the function as it is
                interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction);
            }
        }
    }

    function interpretTermLazy (term, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('\n---INTERPRET TERM: ' + JSON.stringify(term))
        const termCallback = function (err, address) {
            // when the function returns, decrease number of term calls
            termCalls--;

            logDebug && console.log('=> ' + JSON.stringify(stack[address]))
            callback(err, address);
        }
        
        switch(term.type) {
            case 'Deref':
                interpretDereference(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);
                break;
            case 'Const':
                interpretConstant(term.value, callback);  
                break;
            case 'Op':
                interpretOperator(term, boundVariables, addressesToBind, termCallback, isAbstraction);
                break;
            case 'Abstr':
                interpretAbstraction(term, boundVariables, addressesToBind, termCallback, isAbstraction);
                break;
            case 'Apply':
                interpretApplication(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);
                break;
            default:
                termCallback(new Error('Failed to interpret term for ' + term.type), null);
        }
    }

    function interpretAbstraction(abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET ABSTRACTION')
        let hasBeenBound = false;
        // bind variable if there is anything to bind
        if (addressesToBind.length > 0) {
            boundVariables[abstraction.binding] = addressesToBind.pop();
            hasBeenBound = true;
            logDebug && console.log('$$ATTENTION: Abstracted value ' + abstraction.binding + ' has been bound with ' + JSON.stringify(stack[boundVariables[abstraction.binding]]))
        }

        const abstrCallback = function (err, address) {
            if(err) {
                callback(err);
            } else {
                // we have postponed the input
                if (global.__isAbstract && global.__isAbstract(stack[address])) {
                    global.__residual("void", function (waitForInput, callback) {
                        waitForInput(callback);
                    }, waitForInput, callback);
                } else if (isAbstraction && !hasBeenBound && stack[address] && stack[address].type !== undefined) {
                    logDebug && console.log('$ATTENTION: Variable ' + abstraction.type + ' needs to be abstracted again');
                    // if the result is not fully evaluated, can't risk leaving out the abstracted variable
                    stack[++stackAddress] = {
                        type: 'Abstr', 
                        binding: abstraction.binding,
                        value: stack[address]
                    };
                    address = stackAddress;
                }
            }

            if (hasBeenBound) {
                logDebug && console.log('$ATTENTION: Variable ' + abstraction.type + ' was replaced so no need to abstract it again');
            }

            // pass the address to the callback
            callback(null, address);
        };

        interpretTerm(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
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
                        // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS
                        if ((!global.__isAbstract || !global.__isAbstract(stack[newAddress])) && stack[newAddress] && stack[newAddress].type === 'Deref') {
                            logDebug && console.log('$CHECK: The new LHS is a dereference, so check if it was replaced by something else')
                            if (application.lhs.type === 'Deref' && application.lhs.value.value === stack[newAddress].value.value) {
                                logDebug && console.log('$ATTENTION: Application needs to be maintained')
                                stack[newAddress] = {
                                    type: 'Apply', 
                                    value: {
                                        lhs: stack[newAddress], 
                                        rhs: stack[address]
                                    }
                                };
                            }
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
                interpretTerm(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
            }
        };
        logDebug && console.log('---RHS---')
        // interpret the RHS term with an empty array of addresses to bind because it's a different scope
        interpretTerm(application.rhs, boundVariables, [], rhsCallback, true);
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
                // assign the read identifier to the stack as an abstract variable, to postpone the call
                stack[readAddress] = global.__abstract({}, '""');
                callback(null, readAddress);
            } else {
                waitForInput(callback);
            }
        } else {
            callback(null, address);
        }
    }

    function interpretDereference (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET DEREFERENCE')
        if (dereference.type !== 'Identifier') {
            return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
        }

        // a dereference could return an abstraction or application, so we can try to evaluate that
        const derefCallback = function (err, address) {
            if (err) {
                // only return the error if we're not in an abstraction
                if(!isAbstraction) {
                    callback(err);
                } else {
                    // increase the stack address and store the value of the identifier there
                    stack[++stackAddress] = {type: 'Deref', value: dereference};
                    callback(null, stackAddress);
                }
            } else {
                // check if we are printing
                if (address === printAddress) {
                    if (global.__residual && global.__isAbstract(stack[address])) {
                        // only now just wait for input
                        global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
                            waitForInput(function (err, address) {
                                console.log(stack[address]);
                                callback(err, emptyAddress);
                            });
                        }, waitForInput, __abstract({}, 'console'), stack, callback, emptyAddress);
                    } else {
                        console.log(stack[printAddress]);
                    }
                    callback(null, emptyAddress);
                } else {
                    // this could refer to unknown input (for now just reading)
                    if (global.__residual && global.__isAbstract(stack[address])) {
                        // only place the wait for input if it's not an abstraction
                        if (!isAbstraction) {
                            global.__residual("void", function (waitForInput, callback) {
                                waitForInput(callback);
                            }, waitForInput, callback);
                        } else {
                            // otherwise, postpone it
                            stack[++stackAddress] = stack[address];
                            callback(null, stackAddress);
                        }
                    } else {
                        const newTerm = stack[address];
                        // if the variable stored is an application, then interpret that
                        if (newTerm && (newTerm.type === 'Abstr' ||  newTerm.type === 'Apply')) {
                            logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' holds an application')
                            // filter out variables that were defined after the current identifier
                            let scopedBoundVariables = {};
                            Object.keys(boundVariables).forEach(function (variable) {
                                if (boundVariables[variable] <= address) {
                                    scopedBoundVariables[variable] = boundVariables[variable];
                                }
                            })
                            interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
                        } else {
                            logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' does not need further interpreting')
                            if(newTerm && newTerm.type === 'Identifier') {
                                // the variable might not be evaluated
                                logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' has been stored as a complex lambda')
                                stack[address] = {
                                    type: 'Deref', 
                                    value: stack[address]
                                };
                            }
                            stack[++stackAddress] = stack[address];
                            callback(null, stackAddress);
                        }
                    }
                }
            }
        }
        // get address of the identifier on the stack
        interpretIdentifier(dereference.value, boundVariables, derefCallback);
    }

    function interpretConstant (constant, callback) {
        logDebug && console.log('INTERPRET CONSTANT: ' + constant)
        // just increment the address on the stack and assign it the constant value
        stack[++stackAddress] = constant;
        callback(null, stackAddress);
    }

    function applyOperator (operator, lhsAddress, rhsAddress, callback) {
        let err = null;
        // check if both the LHS and RHS are fully interpreted 
        if (stack[lhsAddress].type === undefined && stack[rhsAddress].type === undefined) {
            switch(operator) {
                case 'plus':   
                    stack[lhsAddress] += stack[rhsAddress];
                    break;
                case 'minus':
                    stack[lhsAddress] -= stack[rhsAddress];
                    break;
                case 'times':
                    stack[lhsAddress] *= stack[rhsAddress];
                    break;
                case 'divide':
                    stack[lhsAddress] /= stack[rhsAddress];
                    break;
                case 'modulus':
                    stack[lhsAddress] %= stack[rhsAddress];
                    break;
                case 'eq':
                    stack[lhsAddress] = stack[lhsAddress] == stack[rhsAddress];
                    break;
                case 'noteq':
                    stack[lhsAddress] = stack[lhsAddress] != stack[rhsAddress];
                    break;
                case 'leq':
                    stack[lhsAddress] = stack[lhsAddress] <= stack[rhsAddress];
                    break;
                case 'less':
                    stack[lhsAddress] = stack[lhsAddress] < stack[rhsAddress];
                    break;
                case 'geq':
                    stack[lhsAddress] = stack[lhsAddress] >= stack[rhsAddress];
                    break;
                case 'greater':
                    stack[lhsAddress] = stack[lhsAddress] > stack[rhsAddress];
                    break;
                case 'and':
                    stack[lhsAddress] = stack[lhsAddress] && stack[rhsAddress];
                    break;
                case 'or':
                    stack[lhsAddress] = stack[lhsAddress] || stack[rhsAddress];
                    break;
                case 'negate':
                    stack[lhsAddress] = !stack[lhsAddress];
                    break;
                case 'negative':
                    stack[lhsAddress] = - stack[lhsAddress];
                    break;
                default:
                    err = new Error('Failed to interpret operator for ' + operator.type);
            }
        } else {
            // if any of the two are not fully interpreted, make the otther one into a constant
            stack[lhsAddress] = {
                type: 'Op', 
                op: operator,
                lhs: stack[lhsAddress].type !== undefined ? stack[lhsAddress] : {type: 'Const', value: stack[lhsAddress]},
                rhs: stack[rhsAddress].type !== undefined ? stack[rhsAddress] : {type: 'Const', value: stack[rhsAddress]}
            };
        }
        callback(err, lhsAddress);
    }

    function interpretOperator (operator, boundVariables, addressesToBind, callback, isAbstraction) {
        logDebug && console.log('INTERPRET OPERATOR: ' + operator.type)
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
                applyOperator(operator.op, lhsAddress, rhsAddress, callback);
            };

            if (operator.op !== 'negate' && operator.op !== 'negative') {
                // don't interpret stuff if not needed to
                if ((operator.op === 'or' && stack[lhsAddress]) || 
                    (operator.op === 'and' && !stack[lhsAddress])) {
                    callback(null, lhsAddress);
                } else if (operator.op === 'or' && !stack[lhsAddress]) {
                    interpretTerm(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
                } else {
                    interpretTerm(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
                }
            } else {
                rhsOpCallback();
            }
        };
        interpretTerm(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
    }
}