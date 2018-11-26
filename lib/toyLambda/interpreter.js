module.exports = (program, callback, addTiming, maxTermCalls) => {    
    let abstractedConsole;

    if (global.__residual) {
        abstractedConsole = __abstract({}, 'console');
    }
    
    // variables used for stack management
    let emptyAddress = 0;
    let printAddress = 1;
    let readAddress = 2;
    let stackAddress = readAddress;
    let stack = [];

    const reset = address => {
        stack = stack.slice(0, address + 1);
        stackAddress = address;
    }

    const extend = value => {
        stack[++stackAddress] = value;
        return stackAddress;
    }

    const modify = (address, value) => {
        stack[address] = value;
    }

    const lookup = address => {
        return stack[address];
    }

    let memoized = [];
    let termCalls = 0;
    maxTermCalls = maxTermCalls || 125;

    // global variable used to print out debugging statements
    const logDebug = !global.__residual ? (process.env.DEBUG == 'true') : false ;

    const trampoline = res => {
        while (res && res.fn) {
            res = res.fn.apply(null, res.args);
        }
    };

    const interpretLambda = (lambda, env, callback) => {
        if (addTiming) {
            if (global.__residual) {
                global.__residual('void', console => {
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
                trampoline(interpretTerm(lambda[i].value, env, [], (err, address) => {
                    if (err) {
                        return {
                            fn: callback,
                            args: [err]
                        };
                    } else {
                        const result = lookup(address);
                        env[lambda[i].name] = extend(result);
                        memoized[lambda[i].name] = true;
                        logDebug && console.log('FINISHED INTERPRETING DEFINITION')
                        return;
                    }
                }, false));
            } else {
                // add the lambda definitions to the stack so we only call them if needed
                memoized[lambda[i].name] = true;
                env[lambda[i].name] = extend(lambda[i].value);
            }
        }
        // interpret the term (the last element in the lambda)
        return {
            fn: interpretTerm,
            args: [lambda[lambda.length - 1], env, [], callback, false]
        };
    };
    
    const interpretTerm = (term, env, addressesToBind, callback, isRhsApplication) => {
        termCalls++;
        if (global.__residual && termCalls > maxTermCalls) {
            global.__residual("void", (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
                return trampoline({
                    fn: interpretTermLazy,
                    args: [term, env, addressesToBind, callback, isRhsApplication]
                });
            }, trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication);
        } else {
            return {
                fn: interpretTermLazy,
                args: [term, env, addressesToBind, callback, isRhsApplication]
            };
        }
    };

    const interpretTermLazy = (term, env, addressesToBind, callback, isRhsApplication) => {
        logDebug && console.log('\n---------INTERPRET TERM: ' + JSON.stringify(term))        

        switch(term.type) {
            case 'Deref':
                return interpretDereference(term.value, env, addressesToBind, callback, isRhsApplication);
            case 'Const':
                return interpretConstant(term.value, callback);
            case 'Op':
                return interpretOperator(term, env, addressesToBind, callback, isRhsApplication);
            case 'Abstr':
                return interpretAbstraction(term, env, addressesToBind, callback, isRhsApplication);
            case 'Apply':
                return interpretApplication(term.value, env, addressesToBind, callback, isRhsApplication);
            default:
                return {
                    fn: callback,
                    args: [new Error('Failed to interpret term for ' + term.type), null]
                };
        }
    };

    const interpretAbstraction = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
        logDebug && console.log('INTERPRET ABSTRACTION')

        let newEnv = Object.assign({}, env);

        let hasBeenBound = false;
        // bind variable if there is anything to bind
        if (addressesToBind.length > 0) {
            logDebug && console.log('$$ATTENTION: There are this many addresses to bind: ' + addressesToBind.length)
            newEnv[abstraction.binding] = addressesToBind.pop();
            hasBeenBound = true;
        } 
        else {
            newEnv[abstraction.binding] = extend({
                type: 'Deref',
                value: {
                    type: 'Identifier',
                    value: abstraction.binding
                }
            });
        }
        logDebug && console.log('$$ATTENTION: Abstracted value ' + abstraction.binding + ' has been bound with ' + JSON.stringify(lookup(newEnv[abstraction.binding])))

        const abstrCallback = (err, address) => {
            if(err) {
                return {
                    fn: callback,
                    args: [err]
                };
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
            return {
                fn: callback,
                args: [null, address]
            };
        };
        return {
            fn: interpretTerm,
            args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
        };
    };

    const interpretApplication = (application, env, addressesToBind, callback) => {
        logDebug && console.log('INTERPRET APPLICATION')
        const rhsCallback = (err, rhsAddress) => {
            if (err) {
                return {
                    fn: callback,
                    args: [err]
                };
            } else {
                // add the address to the addresses to bind
                addressesToBind.push(rhsAddress);
                logDebug && console.log('$ATTENTION: Added a new address to bind. There are ' + addressesToBind.length)
                logDebug && console.log('---END RHS---')

                const lhsCallback = (err, lhsAddress) => {
                    if (err) {
                        return {
                            fn: callback,
                            args: [err]
                        };
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
                        return {
                            fn: callback,
                            args: [null, stackAddress]
                        };
                    }
                };
                
                logDebug && console.log('\n---START LHS---')
                return {
                    fn: interpretTerm,
                    args: [application.lhs, env, addressesToBind, lhsCallback, false]
                };                   
            }
        };
        logDebug && console.log('---RHS---')
        // interpret the RHS term with an empty array of addresses to bind because it's a different scope
        return {
            fn: interpretTerm,
            args: [application.rhs, env, [], rhsCallback, true]
        };
    };

    const waitForInput = callback => {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return {
            fn: (...args) => (rl.question(...args)),
            args: ['User input:\n', input => {
                rl.close();
                modify(readAddress, parseInt(input));
                return trampoline({
                    fn: callback,
                    args: [null, readAddress]
                });
            }]
        };
    };

    const interpretIdentifier = (identifier, env, callback) => {
        logDebug && console.log('INTERPRET IDENTIFIER: ' + identifier)
        // just get the address on the stack pointed at by the identifier
        const address = env[identifier];
        if(!address) {
            logDebug && console.log('$ERR: Variable ' + identifier + ' is not declared')
            return {
                fn: callback,
                args: [new Error('Variable or named lambda ' + identifier + ' has not been defined')]
            };   
        } else {
            if(identifier === '_print') {
                modify(printAddress, lookup(address));
                return {
                    fn: callback,
                    args: [null, printAddress]
                };
            } else if (identifier === '_read') {
                // prepack can save the variable as it is on the stack, to be evaluated later
                if (global.__residual) {
                    // assign the read identifier to the stack as an abstract variable, to postpone the call
                    modify(readAddress, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));
                    return {
                        fn: callback,
                        args: [null, readAddress]
                    };
                } else {
                    return {
                        fn: waitForInput,
                        args: [callback]
                    };
                }
            } else {
                return {
                    fn: callback,
                    args: [null, address]
                };
            }
        }
    };

    const interpretDereference = (dereference, env, addressesToBind, callback, isRhsApplication) => {
        logDebug && console.log('INTERPRET DEREFERENCE')
        if (dereference.type !== 'Identifier') {
            return {
                fn: callback,
                args: [new Error('Failed to interpreter dereference for ' + dereference.type)]
            };
        }

        // a dereference could return an abstraction or application, so we can try to evaluate that
        const derefCallback = (err, address) => {
            if (err) {
                return {
                    fn: callback,
                    args: [err]
                };
            } else {
                // check if we are printing
                if (address === printAddress) {
                    if (global.__isAbstract && global.__isAbstract(lookup(address))) {
                        return {
                            fn: callback,
                            args: [null, printAddress]
                        };
                    } else {
                        console.log(lookup(printAddress));
                        return {
                            fn: callback,
                            args: [null, extend(true)]
                        };
                    }
                } else {
                    // this could refer to unknown input (for now just reading)
                    if (global.__residual && global.__isAbstract(lookup(address))) {
                        return {
                            fn: callback,
                            args: [null, extend(lookup(address))]
                        };
                    } else {
                        const newTerm = lookup(address);
                        // if the variable stored is an application, then interpret that
                        if (newTerm && (newTerm.type === 'Abstr' ||  newTerm.type === 'Apply') && (!isRhsApplication || !memoized[dereference.value])) {
                            logDebug && console.log('$ATTENTION: Variable ' + dereference.value + ' holds an application')
                            return {
                                fn: interpretTerm,
                                args: [newTerm, env, addressesToBind, callback, true]
                            };
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
                            return {
                                fn: callback,
                                args: [null, extend(lookup(address))]
                            };
                        }
                    }
                }
            }
        }
        // get address of the identifier on the stack
        return {
            fn: interpretIdentifier,
            args: [dereference.value, env, derefCallback]
        };
    };

    const interpretConstant = (constant, callback) => {
        logDebug && console.log('INTERPRET CONSTANT: ' + constant)
        // just increment the address on the stack and assign it the constant value
        return {
            fn: callback, 
            args: [null, extend(constant)]
        };
    };

    const applyOperator = (operator, lhsAddress, rhsAddress, callback) => {
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

        return {
            fn: callback,
            args: [err, lhsAddress]
        };
    };

    const interpretOperator = (operator, env, addressesToBind, callback, isRhsApplication) => {
        logDebug && console.log('INTERPRET OPERATOR: ' + operator.type)
        const lhsOpCallback = (err, lhsAddress) => {
            if (err) {
                return {
                    fn: callback,
                    args: [err, null]
                };
            }
            // clean up stack
            reset(lhsAddress);

            const rhsOpCallback = (err, rhsAddress) => {
                if (err) {
                    return {
                        fn: callback,
                        args: [err, null]
                    };
                }
                return {
                    fn: applyOperator,
                    args: [operator.op, lhsAddress, rhsAddress, callback]
                };
            };

            if (operator.op !== 'negate' && operator.op !== 'negative') {
                // don't interpret stuff if not needed to
                if ((operator.op === 'or' && lookup(lhsAddress)) || 
                    (operator.op === 'and' && !lookup(lhsAddress))) {
                    return {
                        fn: callback,
                        args: [null, lhsAddress]
                    };
                } else if (operator.op === 'or' && !lookup(lhsAddress)) {
                    return {
                        fn: interpretTerm,
                        args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
                    };
                } else {
                    return {
                        fn: interpretTerm,
                        args: [operator.rhs, env, addressesToBind, rhsOpCallback, isRhsApplication]
                    };
                }
            } else {
                return {
                    fn: rhsOpCallback,
                    args: [null, emptyAddress]
                };
            }
        };
        return {
            fn: interpretTerm, 
            args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
        };
    };
    
    const lambdaCallback = (err, address) => {
        if (addTiming) {
            if (global.__residual) {
                global.__residual('void', console => {
                    console.timeEnd('time');
                }, abstractedConsole);
            } else {
                console.timeEnd('time');
            }
        } 

        const result = lookup(address);
        if (global.__isAbstract && global.__isAbstract(result)) {
            global.__residual("void", (console, waitForInput, toPrint, lookup, callback) => {
                waitForInput((err, address) => {
                    if (toPrint) {
                        console.log(lookup(address));
                    }
                    return {
                        fn: callback,
                        args: [err, address]
                    };
                });
            }, abstractedConsole, waitForInput, address === printAddress, lookup, callback);
        } else {
            if (result !== undefined && result.type === 'Abstr') {
                reset(readAddress);
    
                return {
                    fn: callback,
                    args: [null, () => {
                        let argumentAddresses = [];
                        for(let i=0; i<arguments.length; i++) {
                            argumentAddresses.push(extend(arguments[i]));
                        }
                        return interpretAbstraction(result, [], argumentAddresses, lambdaCallback, true);
                    }]
                };
            } else {
                return {
                    fn: callback,
                    args: [err, address > printAddress && lookup(address)]
                };
            }
        }
    };

    // use callbacks to wait in case there's user input
    trampoline({
        fn: interpretLambda,
        args: [program, {'_print': {'address': printAddress}, '_read': {'address': readAddress}}, lambdaCallback]
    });
}