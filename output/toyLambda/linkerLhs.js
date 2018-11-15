(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_B_, 2, 0];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _Q_ = function (err, result) {
    if (err) {
      throw err;
    }

    if (typeof result === 'function') {
      module.exports = result;
    } else {
      console.log(result);
    }
  };

  var _R_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _A_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _U_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _H_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _I_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    // increase number of term calls
    __captured__scope_1_[2]++;

    if (global.__residual) {
      // if we're in pepack, and weve reached its maximum nubmer of calls
      if (__captured__scope_1_[2] > 125 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1_[2] > 125) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
            }, 100);
          }, global.setTimeout, _T_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[2]--;

          global.__residual("void", function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
            interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
          }, _T_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _T_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[2] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _T_(term, boundVariables, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _T_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _T_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1_[2]--;
      false;
      callback(err, address);
    };

    switch (term.type) {
      case 'Deref':
        _V_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _W_(term.value, callback);

        break;

      case 'Op':
        _X_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _D_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _Y_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _D_ = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;
    let newBoundVariables = Object.assign({}, boundVariables);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newBoundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newBoundVariables[abstraction.binding] = _A_({
        type: 'Deref',
        value: {
          type: 'Identifier',
          value: abstraction.binding
        }
      });
    }

    false;

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        const result = _H_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _A_({
            type: 'Abstr',
            binding: abstraction.binding,
            value: result
          });
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _I_(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
  };

  var _Y_ = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = function (err, rhsAddress) {
      if (err) {
        callback(err);
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;
        false;

        const lhsCallback = function (err, lhsAddress) {
          if (err) {
            callback(err);
          } else {
            let lhs = _H_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _H_(rhsAddress);

                _U_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _H_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _U_(rhsAddress, lhs);
            }

            _R_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[1]);
          }
        };

        false;

        _I_(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _I_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _P_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _U_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _c_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _U_(1, _H_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _U_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _P_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _V_ = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    if (dereference.type !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_H_(address))) {
            callback(null, 1);
          } else {
            console.log(_H_(1));
            callback(null, _A_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_H_(address))) {
            callback(null, _A_(_H_(address)));
          } else {
            const newTerm = _H_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_Z_[dereference.value])) {
              false;

              _I_(newTerm, boundVariables, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _U_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _A_(_H_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _c_(dereference.value, boundVariables, derefCallback);
  };

  var _W_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _A_(constant));
  };

  var _d_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _H_(lhsAddress);

    const rhs = _H_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _U_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _U_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _U_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _U_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _U_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _U_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _U_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _U_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _U_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _U_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _U_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _U_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _U_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _U_(lhsAddress, !lhs);

          break;

        case 'negative':
          _U_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _U_(lhsAddress, {
        type: 'Op',
        op: operator,
        lhs: lhs.type !== undefined ? lhs : {
          type: 'Const',
          value: lhs
        },
        rhs: rhs.type !== undefined ? rhs : {
          type: 'Const',
          value: rhs
        }
      });
    }

    ;
    callback(err, lhsAddress);
  };

  var _X_ = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _R_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _d_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _H_(lhsAddress) || operator.op === 'and' && !_H_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_H_(lhsAddress)) {
          _I_(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          _I_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _I_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _E_ = function (err, address) {
    const result = _H_(address);

    let timing;
    ;

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (console, waitForInput, toPrint, lookup, callback, timing) {
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address, timing);
        });
      }, _L_, _P_, address === 1, _H_, _Q_, timing);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _R_(2);

        _Q_(null, function () {
          let argumentAddresses = [];

          for (let i = 0; i < arguments.length; i++) {
            argumentAddresses.push(_A_(arguments[i]));
          }

          _D_(result, [], argumentAddresses, _E_, true);
        }, timing);
      } else {
        _Q_(err, address > 1 && _H_(address), timing);
      }
    }
  };

  var _2_ = function () {
    let argumentAddresses = [];

    for (let i = 0; i < arguments.length; i++) {
      argumentAddresses.push(_A_(arguments[i]));
    }

    _D_(_3_, [], argumentAddresses, _E_, true);
  };

  var _B_ = [];
  _B_.length = 3;
  var _Z_ = [];
  _Z_.func = true;
  var _3_ = {
    type: "Abstr",
    binding: "x",
    value: {
      type: "Deref",
      value: {
        type: "Identifier",
        value: "x"
      }
    }
  };

  var _J_ = new Date();

  var _L_ = console;
  module.exports = _2_;
})();