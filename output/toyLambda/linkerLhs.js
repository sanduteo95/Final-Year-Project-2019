(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_M_, 2, 21];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var $$0_enumerable_58false_44configurable_58true_44writable_58false = {
    enumerable: false,
    configurable: true,
    writable: false
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46defineProperty = _$1_Object.defineProperty;

  var _a_ = function (err, result) {
    if (err) {
      throw err;
    }

    if (typeof result === 'function') {
      module.exports = result;
    } else {
      console.log(result);
    }
  };

  var _M_ = [];
  _M_.length = 3;

  var _L_ = value => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _O_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _U_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _i_ = [];

  var _2_ = (...arguments) => {
    let argumentAddresses = [];

    for (let i = 0; i < arguments.length; i++) {
      argumentAddresses.push(_L_(arguments[i]));
    }

    _O_({
      fn: _P_,
      args: [_4_, [], argumentAddresses, _Q_, true]
    });
  };

  var _P_ = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _L_({
        type: 'Deref',
        value: {
          type: 'Identifier',
          value: abstraction.binding
        }
      });
    }

    false;

    const abstrCallback = (err, address) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        const result = _U_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _L_({
            type: 'Abstr',
            binding: abstraction.binding,
            value: result
          });
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      return {
        fn: callback,
        args: [null, address]
      };
    };

    return {
      fn: _V_,
      args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
    };
  };

  _i_.func = true;

  var _V_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[2]++;

    if (global.__residual && __captured__scope_1_[2] > 125) {
      global.__residual("void", (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
        return trampoline({
          fn: interpretTermLazy,
          args: [term, env, addressesToBind, callback, isRhsApplication]
        });
      }, _O_, _c_, term, env, addressesToBind, callback, isRhsApplication);
    } else {
      return {
        fn: _c_,
        args: [term, env, addressesToBind, callback, isRhsApplication]
      };
    }
  };

  var _Q_ = (err, address) => {
    ;

    const result = _U_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", (console, waitForInput, trampoline, toPrint, lookup, callback) => {
        trampoline({
          fn: waitForInput,
          args: [(err, address) => {
            if (toPrint) {
              console.log(lookup(address));
            }

            return {
              fn: callback,
              args: [err, lookup(address)]
            };
          }]
        });
      }, _T_, _Z_, _O_, address === 1, _U_, _a_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _b_(2);

        return {
          fn: _a_,
          args: [null, (...arguments) => {
            let argumentAddresses = [];

            for (let i = 0; i < arguments.length; i++) {
              argumentAddresses.push(_L_(arguments[i]));
            }

            _O_({
              fn: _P_,
              args: [result, [], argumentAddresses, _Q_, true]
            });
          }]
        };
      } else {
        return {
          fn: _a_,
          args: [err, address > 1 && _U_(address)]
        };
      }
    }
  };

  var _Z_ = callback => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _d_(2, parseInt(input));

        return _O_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _b_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _c_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    false;

    switch (term.type) {
      case 'Deref':
        return _e_(term.value, env, addressesToBind, callback, isRhsApplication);

      case 'Const':
        return _f_(term.value, callback);

      case 'Op':
        return _g_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Abstr':
        return _P_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Apply':
        return _h_(term.value, env, addressesToBind, callback, isRhsApplication);

      default:
        return {
          fn: callback,
          args: [new Error('Failed to interpret term for ' + term.type), null]
        };
    }
  };

  var _d_ = (address, value) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _e_ = (dereference, env, addressesToBind, callback, isRhsApplication) => {
    false;

    if (dereference.type !== 'Identifier') {
      return {
        fn: callback,
        args: [new Error('Failed to interpreter dereference for ' + dereference.type)]
      };
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = (err, address) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_U_(address))) {
            return {
              fn: callback,
              args: [null, 1]
            };
          } else {
            console.log(_U_(1));
            return {
              fn: callback,
              args: [null, _L_(true)]
            };
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_U_(address))) {
            return {
              fn: callback,
              args: [null, _L_(_U_(address))]
            };
          } else {
            const newTerm = _U_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_i_[dereference.value])) {
              false;
              return {
                fn: _V_,
                args: [newTerm, env, addressesToBind, callback, true]
              };
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _d_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              return {
                fn: callback,
                args: [null, _L_(_U_(address))]
              };
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    return {
      fn: _l_,
      args: [dereference.value, env, derefCallback]
    };
  };

  var _f_ = (constant, callback) => {
    false; // just increment the address on the stack and assign it the constant value

    return {
      fn: callback,
      args: [null, _L_(constant)]
    };
  };

  var _g_ = (operator, env, addressesToBind, callback, isRhsApplication) => {
    false;

    const lhsOpCallback = (err, lhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      } // clean up stack


      _b_(lhsAddress);

      const rhsOpCallback = (err, rhsAddress) => {
        if (err) {
          return {
            fn: callback,
            args: [err, null]
          };
        }

        return {
          fn: _m_,
          args: [operator.op, lhsAddress, rhsAddress, callback]
        };
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _U_(lhsAddress) || operator.op === 'and' && !_U_(lhsAddress)) {
          return {
            fn: callback,
            args: [null, lhsAddress]
          };
        } else if (operator.op === 'or' && !_U_(lhsAddress)) {
          return {
            fn: _V_,
            args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
          };
        } else {
          return {
            fn: _V_,
            args: [operator.rhs, env, addressesToBind, rhsOpCallback, isRhsApplication]
          };
        }
      } else {
        return {
          fn: rhsOpCallback,
          args: [null, 0]
        };
      }
    };

    return {
      fn: _V_,
      args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
    };
  };

  var _h_ = (application, env, addressesToBind, callback) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = (err, rhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;
        false;

        const lhsCallback = (err, lhsAddress) => {
          if (err) {
            return {
              fn: callback,
              args: [err]
            };
          } else {
            let lhs = _U_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _U_(rhsAddress);

                _d_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _U_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _d_(rhsAddress, lhs);
            }

            _b_(rhsAddress);

            false;
            return {
              fn: callback,
              args: [null, __captured__scope_1_[1]]
            };
          }
        };

        false;
        return {
          fn: _V_,
          args: [application.lhs, env, addressesToBind, lhsCallback, false]
        };
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    return {
      fn: _V_,
      args: [application.rhs, env, [], rhsCallback, true]
    };
  };

  var _l_ = (identifier, env, callback) => {
    false; // just get the address on the stack pointed at by the identifier

    const address = env[identifier];

    if (!address) {
      false;
      return {
        fn: callback,
        args: [new Error('Variable or named lambda ' + identifier + ' has not been defined')]
      };
    } else {
      if (identifier === '_print') {
        _d_(1, _U_(address));

        return {
          fn: callback,
          args: [null, 1]
        };
      } else if (identifier === '_read') {
        // prepack can save the variable as it is on the stack, to be evaluated later
        if (global.__residual) {
          // assign the read identifier to the stack as an abstract variable, to postpone the call
          _d_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

          return {
            fn: callback,
            args: [null, 2]
          };
        } else {
          return {
            fn: _Z_,
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

  var _m_ = (operator, lhsAddress, rhsAddress, callback) => {
    let err = null;

    const lhs = _U_(lhsAddress);

    const rhs = _U_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _d_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _d_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _d_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _d_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _d_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _d_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _d_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _d_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _d_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _d_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _d_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _d_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _d_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _d_(lhsAddress, !lhs);

          break;

        case 'negative':
          _d_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _d_(lhsAddress, {
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
    return {
      fn: callback,
      args: [err, lhsAddress]
    };
  };

  var _4_ = {
    type: "Abstr",
    binding: "x",
    value: {
      type: "Op",
      op: "plus",
      lhs: {
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
      },
      rhs: {
        type: "Const",
        value: 1
      }
    }
  };
  var _T_ = console;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = 1, _$2_Object_46defineProperty(_2_, "length", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  module.exports = _2_;
}).call(global);