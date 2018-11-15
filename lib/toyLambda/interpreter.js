module.exports = function (program, callback, addTiming, maxTermCalls) {
    let abstractedConsole;
    let startTime;

    if (global.__residual) {
        abstractedConsole = __abstract({}, 'console');
    }
    
    // variables used for stack management
    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    const reset = function (address) {
        stack = stack.slice(0, address + 1);
        stackAddress = address;
    }

    const extend = function (value) {
        stack[++stackAddress] = value;
        return stackAddress;
    }

    const modify = function (address, value) {
        stack[address] = value;
    }

    const lookup = function (address) {
        return stack[address];
    }

    let memoized = [];

    // global variables used to set-up timeouts to avoid stack overflow 
    let termCalls = 0;
    maxTermCalls = maxTermCalls || 125;
    const CALLBACK_TIMEOUT = 100;

    // global variable used to print out debugging statements
    const logDebug = !global.__residual ? (process.env.DEBUG == 'true') : false ;

    const interpretLambda = function (lambda, boundVariables, callback) {
        if (addTiming) {
            if (global.__residual) {
                global.__residual('void', function (console) {
                    console.time('time');
                }, abstractedConsole);
            } else {
                console.time('time');
            }
        }
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
                        const result = lookup(address);
                        boundVariables[lambda[i].name] = extend(result);
                        memoized[lambda[i].name] = true;
                        logDebug && console.log('FINISHED INTERPRETING DEFINITION')
                    }
                }, false);
            } else {
                // add the lambda definitions to the stack so we only call them if needed
                memoized[lambda[i].name] = true;
                boundVariables[lambda[i].name] = extend(lambda[i].value);
            }
        }
        // interpret the term (the last element in the lambda)
        interpretTerm(lambda[lambda.length - 1], boundVariables, [], callback, false);
    }

    const interpretTerm = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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

                    global.__residual("void", function(setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
                        setTimeout(function () { 
                            interpretTermLazy (term, boundVariables, addressesToBind, callback, isRhsApplication);
                        }, CALLBACK_TIMEOUT);
                    }, global.setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication);
                } else {
                    // decrease now so that when we run the code termCalls is like it was never increased
                    termCalls--;
                    global.__residual("void", function(interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
                        interpretTermLazy (term, boundVariables, addressesToBind, callback, isRhsApplication);
                    }, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication);
                }
            } else {
                interpretTermLazy (term, boundVariables, addressesToBind, callback, isRhsApplication);
            }
        } else {
            // otherwise, if we've reached the maximum number of calls in the interpreter
            if (termCalls > maxTermCalls) {
                // call the function with a timeout
                setTimeout(function () {
                    interpretTermLazy (term, boundVariables, addressesToBind, callback, isRhsApplication);
                }, CALLBACK_TIMEOUT);
            } else {
                // just call the function as it is
                interpretTermLazy (term, boundVariables, addressesToBind, callback, isRhsApplication);
            }
        }
    }

    const interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
        logDebug && console.log('\n---------INTERPRET TERM: ' + JSON.stringify(term))
        const termCallback = function (err, address) {
            // when the function returns, decrease number of term calls
            termCalls--;

            logDebug && console.log('\n---------END INTERPRET TERM: ' +  JSON.stringify(lookup(address)))
            callback(err, address);
        }
        
        switch(term.type) {
            case 'Deref':
                interpretDereference(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);
                break;
            case 'Const':
                interpretConstant(term.value, callback);  
                break;
            case 'Op':
                interpretOperator(term, boundVariables, addressesToBind, termCallback, isRhsApplication);
                break;
            case 'Abstr':
                interpretAbstraction(term, boundVariables, addressesToBind, termCallback, isRhsApplication);
                break;
            case 'Apply':
                interpretApplication(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);
                break;
            default:
                termCallback(new Error('Failed to interpret term for ' + term.type), null);
        }
    }

    const interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
        logDebug && console.log('INTERPRET ABSTRACTION')

        let newBoundVariables = Object.assign({}, boundVariables);

        let hasBeenBound = false;
        // bind variable if there is anything to bind
        if (addressesToBind.length > 0) {
            logDebug && console.log('$$ATTENTION: There are this many addresses to bind: ' + addressesToBind.length)
            newBoundVariables[abstraction.binding] = addressesToBind.pop();
            hasBeenBound = true;
        } 
        else {
            newBoundVariables[abstraction.binding] = extend({
                type: 'Deref',
                value: {
                    type: 'Identifier',
                    value: abstraction.binding
                }
            });
        }
        logDebug && console.log('$$ATTENTION: Abstracted value ' + abstraction.binding + ' has been bound with ' + JSON.stringify(lookup(newBoundVariables[abstraction.binding])))

        const abstrCallback = function (err, address) {
            if(err) {
                callback(err);
            } else {
                const result = lookup(address);
                // if it's the rhs of an application, we are allowed to have unbound variables
                if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
                    logDebug && console.log('$ATTENTION: Variable ' + abstraction.binding + ' needs to be abstracted again');
                    // if the result is not fully evaluated, can't risk leaving out the abstracted variable
                    address = extend({
                        type: 'Abstr', 
                        binding: abstraction.binding,
                        value: result
                    });
                }
            }

            if (hasBeenBound) {
                logDebug && console.log('$ATTENTION: Variable ' + abstraction.binding + ' was replaced so no need to abstract it again');
            }

            // pass the address to the callback
            callback(null, address);
        };

        interpretTerm(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
    }

    const interpretApplication = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
        logDebug && console.log('INTERPRET APPLICATION')
        const rhsCallback = function (err, rhsAddress) {
            if (err) {
                callback(err);
            } else {
                // add the address to the addresses to bind
                addressesToBind.push(rhsAddress);
                logDebug && console.log('$ATTENTION: Added a new address to bind. There are ' + addressesToBind.length)
                logDebug && console.log('---END RHS---')

                const lhsCallback = function (err, lhsAddress) {
                    if (err) {
                        callback(err);
                    } else {
                        let lhs = lookup(lhsAddress);
                        // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS
                        if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
                            logDebug && console.log('$CHECK: The new LHS is a dereference, so check if it was replaced by something else')
                            if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                                logDebug && console.log('$ATTENTION: Application needs to be maintained as long as it is not printing a read value')
                                const rhs = lookup(rhsAddress);
                                modify(lhsAddress, {
                                    type: 'Apply', 
                                    value: {
                                        lhs: lhs, 
                                        rhs: rhs
                                    }
                                });
                                lhs = lookup(lhsAddress);
                            }
                        } else if (global.__isAbstract && global.__isAbstract(lhs)) {
                            if (lhsAddress === printAddress) {
                                lhsAddress = rhsAddress;
                                rhsAddress = printAddress;
                            }
                        }
                        // clean up stack
                        if (rhsAddress !== lhsAddress) {
                            // the new lhs might have changed
                            modify(rhsAddress, lhs);
                        }
                        reset(rhsAddress);

                        logDebug && console.log('---END LHS---')
                        callback(null, stackAddress);   
                    }
                };
                
                logDebug && console.log('\n---START LHS---')
                interpretTerm(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
            }
        };
        logDebug && console.log('---RHS---')
        // interpret the RHS term with an empty array of addresses to bind because it's a different scope
        interpretTerm(application.rhs, boundVariables, [], rhsCallback, true);
    }

    const waitForInput = function (callback) {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('User input:\n', function(input) {
            rl.close();
            modify(readAddress, parseInt(input));
            callback(null, readAddress);
        });
    }

    const interpretIdentifier = function (identifier, boundVariables, callback) {
        logDebug && console.log('INTERPRET IDENTIFIER: ' + identifier)
        // just get the address on the stack pointed at by the identifier
        const address = boundVariables[identifier];
        if(!address) {
            logDebug && console.log('$ERR: Variable ' + identifier + ' is not declared')
            return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));    
        }
        
        if(identifier === '_print') {
            modify(printAddress, lookup(address));
            callback(null, printAddress);
        } else if (identifier === '_read') {
            // prepack can save the variable as it is on the stack, to be evaluated later
            if (global.__residual) {
                // assign the read identifier to the stack as an abstract variable, to postpone the call
                modify(readAddress, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));
                callback(null, readAddress);
            } else {
                waitForInput(callback);
            }
        } else {
            callback(null, address);
        }
    }

    const interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
        logDebug && console.log('INTERPRET DEREFERENCE')
        if (dereference.type !== 'Identifier') {
            return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
        }

        // a dereference could return an abstraction or application, so we can try to evaluate that
        const derefCallback = function (err, address) {
            if (err) {
                callback(err);
            } else {
                // check if we are printing
                if (address === printAddress) {
                    if (global.__isAbstract && global.__isAbstract(lookup(address))) {
                        callback(null, printAddress);
                    } else {
                        console.log(lookup(printAddress));
                        callback(null, extend(true));
                    }
                } else {
                    // this could refer to unknown input (for now just reading)
                    if (global.__residual && global.__isAbstract(lookup(address))) {
                        callback(null, extend(lookup(address)));
                    } else {
                        const newTerm = lookup(address);
                        // if the variable stored is an application, then interpret that
                        if (newTerm && (newTerm.type === 'Abstr' ||  newTerm.type === 'Apply') && (!isRhsApplication || !memoized[dereference.value])) {
                            logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' holds an application')
                            interpretTerm(newTerm, boundVariables, addressesToBind, callback, true);
                        } else {
                            logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' does not need further interpreting')
                            if(newTerm && newTerm.type === 'Identifier') {
                                // the variable might not be evaluated
                                logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' has been stored as a complex lambda')
                                modify(address, {
                                    type: 'Deref', 
                                    value: newTerm
                                });
                            }
                            // look up the address again because it might have changed
                            callback(null, extend(lookup(address)));
                        }
                    }
                }
            }
        }
        // get address of the identifier on the stack
        interpretIdentifier(dereference.value, boundVariables, derefCallback);
    }

    const interpretConstant = function (constant, callback) {
        logDebug && console.log('INTERPRET CONSTANT: ' + constant)
        // just increment the address on the stack and assign it the constant value
        callback(null, extend(constant));
    }

    const applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
        let err = null;
        const lhs = lookup(lhsAddress);
        const rhs = lookup(rhsAddress);
        // check if both the LHS and RHS are fully interpreted 
        if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
            switch(operator) {
                case 'plus':   
                    modify(lhsAddress, lhs + rhs);
                    break;
                case 'minus':
                    modify(lhsAddress, lhs - rhs);
                    break;
                case 'times':
                    modify(lhsAddress, lhs * rhs);
                    break;
                case 'divide':
                    modify(lhsAddress, lhs / rhs);
                    break;
                case 'modulus':
                    modify(lhsAddress, lhs % rhs);
                    break;
                case 'eq':
                    modify(lhsAddress, lhs === rhs);
                    break;
                case 'noteq':
                    modify(lhsAddress, lhs !== rhs);
                    break;
                case 'leq':
                    modify(lhsAddress, lhs <= rhs);
                    break;
                case 'less':
                    modify(lhsAddress, lhs < rhs);
                    break;
                case 'geq':
                    modify(lhsAddress, lhs >= rhs);
                    break;
                case 'greater':
                    modify(lhsAddress, lhs > rhs);
                    break;
                case 'and':
                    modify(lhsAddress, lhs && rhs);
                    break;
                case 'or':
                    modify(lhsAddress, lhs || rhs);
                    break;
                case 'negate':
                    modify(lhsAddress, !lhs);
                    break;
                case 'negative':
                    modify(lhsAddress, -lhs);
                    break;
                default:
                    err = new Error('Failed to interpret operator for ' + operator.type);
            }
        } else {
            // if any of the two are not fully interpreted, make the otther one into a constant
            modify(lhsAddress, {
                type: 'Op', 
                op: operator,
                lhs: lhs.type !== undefined ? lhs : {type: 'Const', value: lhs},
                rhs: rhs.type !== undefined ? rhs : {type: 'Const', value: rhs}
            });
        };

        callback(err, lhsAddress);
    }

    const interpretOperator = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
        logDebug && console.log('INTERPRET OPERATOR: ' + operator.type)
        const lhsOpCallback = function (err, lhsAddress) {
            if (err) {
                return callback(err, null);
            }
            // clean up stack
            reset(lhsAddress);

            const rhsOpCallback = function (err, rhsAddress) {
                if (err) {
                    return callback(err, null);
                }
                applyOperator(operator.op, lhsAddress, rhsAddress, callback);
            };

            if (operator.op !== 'negate' && operator.op !== 'negative') {
                // don't interpret stuff if not needed to
                if ((operator.op === 'or' && lookup(lhsAddress)) || 
                    (operator.op === 'and' && !lookup(lhsAddress))) {
                    callback(null, lhsAddress);
                } else if (operator.op === 'or' && !lookup(lhsAddress)) {
                    interpretTerm(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
                } else {
                    interpretTerm(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
                }
            } else {
                rhsOpCallback(null, emptyAddress);
            }
        };
        interpretTerm(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
    }
    
    const lambdaCallback = function (err, address) {
        if (addTiming) {
            if (global.__residual) {
                global.__residual('void', function (console) {
                    console.timeEnd('time');
                }, abstractedConsole);
            } else {
                console.timeEnd('time');
            }
        } 

        const result = lookup(address);
        if (global.__isAbstract && global.__isAbstract(result)) {
            global.__residual("void", function (console, waitForInput, toPrint, lookup, callback) {
                waitForInput(function (err, address) {
                    if (toPrint) {
                        console.log(lookup(address));
                    }
                    callback(err, address);
                });
            }, abstractedConsole, waitForInput, address === printAddress, lookup, callback);
        } else {
            if (result !== undefined && result.type === 'Abstr') {
                reset(readAddress);
    
                callback(null, function () {
                    let argumentAddresses = [];
                    for(let i=0; i<arguments.length; i++) {
                        argumentAddresses.push(extend(arguments[i]));
                    }
                    interpretAbstraction(result, [], argumentAddresses, lambdaCallback, true);
                });
            } else {
                callback(err, address > printAddress && lookup(address));
            }
        }
    }

    // use callbacks to wait in case there's user input
    interpretLambda(program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, lambdaCallback);
}