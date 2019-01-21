(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_J_, 2, 5];
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
  var _J_ = [];
  _J_.length = 3;

  var _I_ = value => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _L_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _Q_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _f_ = [];

  var _2_ = (...arguments) => {
    let argumentAddresses = [];

    for (let i = 0; i < arguments.length; i++) {
      argumentAddresses.push(_I_(arguments[i]));
    }

    _L_({
      fn: _M_,
      args: [_5_, [], argumentAddresses, _N_, true]
    });
  };

  var _M_ = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _I_({
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
        const result = _Q_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _I_({
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
      fn: _R_,
      args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
    };
  };

  _f_["export"] = true;

  var _R_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[2]++;

    if (global.__residual && __captured__scope_1_[2] > 125) {
      global.__residual("void", (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
        return trampoline({
          fn: interpretTermLazy,
          args: [term, env, addressesToBind, callback, isRhsApplication]
        });
      }, _L_, _Z_, term, env, addressesToBind, callback, isRhsApplication);
    } else {
      return {
        fn: _Z_,
        args: [term, env, addressesToBind, callback, isRhsApplication]
      };
    }
  };

  var _N_ = (err, address) => {
    const result = _Q_(address);

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
      }, _S_, _X_, _L_, address === 1, _Q_, _U_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _Y_(2);

        return {
          fn: _U_,
          args: [null, (...arguments) => {
            let argumentAddresses = [];

            for (let i = 0; i < arguments.length; i++) {
              argumentAddresses.push(_I_(arguments[i]));
            }

            _L_({
              fn: _M_,
              args: [result, [], argumentAddresses, _N_, true]
            });
          }]
        };
      } else {
        return {
          fn: _U_,
          args: [err, address > 1 && _Q_(address)]
        };
      }
    }
  };

  var _X_ = callback => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _a_(2, parseInt(input));

        return _L_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _Y_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _U_ = (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result);
    module.exports = result;
  };

  var _Z_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    false;

    switch (term.type) {
      case 'Deref':
        return _b_(term.value, env, addressesToBind, callback, isRhsApplication);

      case 'Const':
        return _c_(term.value, callback);

      case 'Op':
        return _d_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Abstr':
        return _M_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Apply':
        return _e_(term.value, env, addressesToBind, callback, isRhsApplication);

      default:
        return {
          fn: callback,
          args: [new Error('Failed to interpret term for ' + term.type), null]
        };
    }
  };

  var _a_ = (address, value) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _b_ = (dereference, env, addressesToBind, callback, isRhsApplication) => {
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
          if (global.__isAbstract && global.__isAbstract(_Q_(address))) {
            return {
              fn: callback,
              args: [null, 1]
            };
          } else {
            console.log(_Q_(1));
            return {
              fn: callback,
              args: [null, _I_(true)]
            };
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_Q_(address))) {
            return {
              fn: callback,
              args: [null, _I_(_Q_(address))]
            };
          } else {
            const newTerm = _Q_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_f_[dereference.value])) {
              false;
              return {
                fn: _R_,
                args: [newTerm, env, addressesToBind, callback, true]
              };
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _a_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              return {
                fn: callback,
                args: [null, _I_(_Q_(address))]
              };
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    return {
      fn: _i_,
      args: [dereference.value, env, derefCallback]
    };
  };

  var _c_ = (constant, callback) => {
    false; // just increment the address on the stack and assign it the constant value

    return {
      fn: callback,
      args: [null, _I_(constant)]
    };
  };

  var _d_ = (operator, env, addressesToBind, callback, isRhsApplication) => {
    false;

    const lhsOpCallback = (err, lhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      } // clean up stack


      _Y_(lhsAddress);

      const rhsOpCallback = (err, rhsAddress) => {
        if (err) {
          return {
            fn: callback,
            args: [err, null]
          };
        }

        return {
          fn: _j_,
          args: [operator.op, lhsAddress, rhsAddress, callback]
        };
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _Q_(lhsAddress) || operator.op === 'and' && !_Q_(lhsAddress)) {
          return {
            fn: callback,
            args: [null, lhsAddress]
          };
        } else if (operator.op === 'or' && !_Q_(lhsAddress)) {
          return {
            fn: _R_,
            args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
          };
        } else {
          return {
            fn: _R_,
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
      fn: _R_,
      args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
    };
  };

  var _e_ = (application, env, addressesToBind, callback) => {
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
            let lhs = _Q_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _Q_(rhsAddress);

                _a_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _Q_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _a_(rhsAddress, lhs);
            }

            _Y_(rhsAddress);

            false;
            return {
              fn: callback,
              args: [null, __captured__scope_1_[1]]
            };
          }
        };

        false;
        return {
          fn: _R_,
          args: [application.lhs, env, addressesToBind, lhsCallback, false]
        };
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    return {
      fn: _R_,
      args: [application.rhs, env, [], rhsCallback, true]
    };
  };

  var _i_ = (identifier, env, callback) => {
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
        _a_(1, _Q_(address));

        return {
          fn: callback,
          args: [null, 1]
        };
      } else if (identifier === '_read') {
        // prepack can save the variable as it is on the stack, to be evaluated later
        if (global.__residual) {
          // assign the read identifier to the stack as an abstract variable, to postpone the call
          _a_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

          return {
            fn: callback,
            args: [null, 2]
          };
        } else {
          return {
            fn: _X_,
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

  var _j_ = (operator, lhsAddress, rhsAddress, callback) => {
    let err = null;

    const lhs = _Q_(lhsAddress);

    const rhs = _Q_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _a_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _a_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _a_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _a_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _a_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _a_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _a_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _a_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _a_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _a_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _a_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _a_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _a_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _a_(lhsAddress, !lhs);

          break;

        case 'negative':
          _a_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _a_(lhsAddress, {
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

  var _5_ = {
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
  var _S_ = console;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = 1, _$2_Object_46defineProperty(_2_, "length", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  console.log(_2_);
  module.exports = _2_;
}).call(global);