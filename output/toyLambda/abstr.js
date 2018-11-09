(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_U_, 2, 1];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _M_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _3_ = function (time, console) {
    time && console.time('interpret');
  };

  var _Y_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _Q_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _X_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _P_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _R_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
            }, 100);
          }, global.setTimeout, _b_, term, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[2]--;

          global.__residual("void", function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
            interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
          }, _b_, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _b_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[2] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _b_(term, boundVariables, addressesToBind, callback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _b_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    }
  };

  var _b_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
        _c_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Const':
        _d_(term.value, callback);

        break;

      case 'Op':
        _e_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Abstr':
        _L_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Apply':
        _O_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _L_ = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
    false;
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      boundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
      false;
    }

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        const result = _P_(address); // we have postponed the input


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isAbstraction && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _Q_({
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

    _R_(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
  };

  var _O_ = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = function (err, rhsAddress) {
      if (err) {
        callback(err);
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;

        const lhsCallback = function (err, lhsAddress) {
          if (err) {
            callback(err);
          } else {
            let lhs = _P_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _P_(rhsAddress);

                _X_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _P_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _X_(rhsAddress, lhs);
            }

            _Y_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[1]);
          }
        };

        false;

        _R_(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _R_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _i_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _X_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _f_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _X_(1, _P_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _X_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _i_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _c_ = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    if (dereference.type !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = function (err, address) {
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          callback(null, _Q_({
            type: 'Deref',
            value: dereference
          }));
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_P_(address))) {
            callback(null, 1);
          } else {
            console.log(_P_(1));
            callback(null, _Q_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_P_(address))) {
            callback(null, _Q_(_P_(address)));
          } else {
            const newTerm = _P_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _R_(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _X_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _Q_(_P_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _f_(dereference.value, boundVariables, derefCallback);
  };

  var _d_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _Q_(constant));
  };

  var _h_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _P_(lhsAddress);

    const rhs = _P_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _X_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _X_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _X_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _X_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _X_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _X_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _X_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _X_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _X_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _X_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _X_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _X_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _X_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _X_(lhsAddress, !lhs);

          break;

        case 'negative':
          _X_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _X_(lhsAddress, {
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

  var _e_ = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _Y_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _h_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _P_(lhsAddress) || operator.op === 'and' && !_P_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_P_(lhsAddress)) {
          _R_(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _R_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _R_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _4_ = function (time, console) {
    time && console.timeEnd('interpret');
  };

  var _6_ = function (arg) {
    if (!arg) {
      _L_(_7_, [], [], _M_, true);
    } else {
      _O_({
        lhs: _7_,
        rhs: arg
      }, [], [], _M_, true);
    }
  };

  var _1_ = console;

  _3_(void 0, _1_);

  _4_(void 0, _1_);

  var _U_ = [];
  _U_.length = 3;
  var _7_ = {
    type: "Abstr",
    binding: "x",
    value: {
      type: "Op",
      op: "plus",
      lhs: {
        type: "Deref",
        value: {
          type: "Identifier",
          value: "x"
        }
      },
      rhs: {
        type: "Const",
        value: 1
      }
    }
  };
  module.exports = _6_;
})();