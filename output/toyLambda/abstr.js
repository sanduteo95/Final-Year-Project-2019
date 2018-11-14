(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_P_, 2, 1];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _H_ = function (err, result) {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _U_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _K_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _T_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _L_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _M_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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
          }, global.setTimeout, _W_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[2]--;

          global.__residual("void", function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
            interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
          }, _W_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _W_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[2] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _W_(term, boundVariables, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _W_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _W_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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
        _X_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _Y_(term.value, callback);

        break;

      case 'Op':
        _Z_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _G_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _J_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _G_ = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;
    let newBoundVariables = Object.assign({}, boundVariables);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newBoundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newBoundVariables[abstraction.binding] = _K_({
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
        const result = _L_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _K_({
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

    _M_(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
  };

  var _J_ = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
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
            let lhs = _L_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _L_(rhsAddress);

                _T_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _L_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _T_(rhsAddress, lhs);
            }

            _U_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[1]);
          }
        };

        false;

        _M_(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _M_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _f_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _T_(2, parseInt(input));

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
      _T_(1, _L_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _T_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _f_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _X_ = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
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
          if (global.__isAbstract && global.__isAbstract(_L_(address))) {
            callback(null, 1);
          } else {
            console.log(_L_(1));
            callback(null, _K_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_L_(address))) {
            callback(null, _K_(_L_(address)));
          } else {
            const newTerm = _L_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_a_[dereference.value])) {
              false;

              _M_(newTerm, boundVariables, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _T_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _K_(_L_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _c_(dereference.value, boundVariables, derefCallback);
  };

  var _Y_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _K_(constant));
  };

  var _e_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _L_(lhsAddress);

    const rhs = _L_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _T_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _T_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _T_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _T_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _T_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _T_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _T_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _T_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _T_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _T_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _T_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _T_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _T_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _T_(lhsAddress, !lhs);

          break;

        case 'negative':
          _T_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _T_(lhsAddress, {
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

  var _Z_ = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _U_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _e_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _L_(lhsAddress) || operator.op === 'and' && !_L_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_L_(lhsAddress)) {
          _M_(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          _M_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _M_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _2_ = function (arg) {
    if (!arg) {
      _G_(_3_, [], [], _H_, true);
    } else {
      _J_({
        lhs: _3_,
        rhs: arg
      }, [], [], _H_, true);
    }
  };

  var _P_ = [];
  _P_.length = 3;
  var _a_ = [];
  _a_["export"] = true;
  var _3_ = {
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
  module.exports = _2_;
})();