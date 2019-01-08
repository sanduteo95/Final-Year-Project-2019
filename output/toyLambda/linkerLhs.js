(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_C_, 2, 15];
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

  var _C_ = [];
  _C_.length = 3;

  var _B_ = value => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _E_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _K_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _Y_ = [];

  var _2_ = (...arguments) => {
    let argumentAddresses = [];

    for (let i = 0; i < arguments.length; i++) {
      argumentAddresses.push(_B_(arguments[i]));
    }

    _E_({
      fn: _F_,
      args: [_4_, [], argumentAddresses, _G_, true]
    });
  };

  var _F_ = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _B_({
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
        const result = _K_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _B_({
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
      fn: _L_,
      args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
    };
  };

  _Y_.func = true;

  var _L_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[2]++;

    if (global.__residual && __captured__scope_1_[2] > 125) {
      global.__residual("void", (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
        return trampoline({
          fn: interpretTermLazy,
          args: [term, env, addressesToBind, callback, isRhsApplication]
        });
      }, _E_, _S_, term, env, addressesToBind, callback, isRhsApplication);
    } else {
      return {
        fn: _S_,
        args: [term, env, addressesToBind, callback, isRhsApplication]
      };
    }
  };

  var _G_ = (err, address) => {
    ;

    const result = _K_(address);

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
      }, _J_, _P_, _E_, address === 1, _K_, _Q_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _R_(2);

        return {
          fn: _Q_,
          args: [null, (...arguments) => {
            let argumentAddresses = [];

            for (let i = 0; i < arguments.length; i++) {
              argumentAddresses.push(_B_(arguments[i]));
            }

            _E_({
              fn: _F_,
              args: [result, [], argumentAddresses, _G_, true]
            });
          }]
        };
      } else {
        return {
          fn: _Q_,
          args: [err, address > 1 && _K_(address)]
        };
      }
    }
  };

  var _P_ = callback => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _T_(2, parseInt(input));

        return _E_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _R_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _S_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    false;

    switch (term.type) {
      case 'Deref':
        return _U_(term.value, env, addressesToBind, callback, isRhsApplication);

      case 'Const':
        return _V_(term.value, callback);

      case 'Op':
        return _W_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Abstr':
        return _F_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Apply':
        return _X_(term.value, env, addressesToBind, callback, isRhsApplication);

      default:
        return {
          fn: callback,
          args: [new Error('Failed to interpret term for ' + term.type), null]
        };
    }
  };

  var _T_ = (address, value) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _U_ = (dereference, env, addressesToBind, callback, isRhsApplication) => {
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
          if (global.__isAbstract && global.__isAbstract(_K_(address))) {
            return {
              fn: callback,
              args: [null, 1]
            };
          } else {
            console.log(_K_(1));
            return {
              fn: callback,
              args: [null, _B_(true)]
            };
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_K_(address))) {
            return {
              fn: callback,
              args: [null, _B_(_K_(address))]
            };
          } else {
            const newTerm = _K_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_Y_[dereference.value])) {
              false;
              return {
                fn: _L_,
                args: [newTerm, env, addressesToBind, callback, true]
              };
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


              return {
                fn: callback,
                args: [null, _B_(_K_(address))]
              };
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    return {
      fn: _b_,
      args: [dereference.value, env, derefCallback]
    };
  };

  var _V_ = (constant, callback) => {
    false; // just increment the address on the stack and assign it the constant value

    return {
      fn: callback,
      args: [null, _B_(constant)]
    };
  };

  var _W_ = (operator, env, addressesToBind, callback, isRhsApplication) => {
    false;

    const lhsOpCallback = (err, lhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      } // clean up stack


      _R_(lhsAddress);

      const rhsOpCallback = (err, rhsAddress) => {
        if (err) {
          return {
            fn: callback,
            args: [err, null]
          };
        }

        return {
          fn: _c_,
          args: [operator.op, lhsAddress, rhsAddress, callback]
        };
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _K_(lhsAddress) || operator.op === 'and' && !_K_(lhsAddress)) {
          return {
            fn: callback,
            args: [null, lhsAddress]
          };
        } else if (operator.op === 'or' && !_K_(lhsAddress)) {
          return {
            fn: _L_,
            args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
          };
        } else {
          return {
            fn: _L_,
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
      fn: _L_,
      args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
    };
  };

  var _X_ = (application, env, addressesToBind, callback) => {
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
            let lhs = _K_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _K_(rhsAddress);

                _T_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _K_(lhsAddress);
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

            _R_(rhsAddress);

            false;
            return {
              fn: callback,
              args: [null, __captured__scope_1_[1]]
            };
          }
        };

        false;
        return {
          fn: _L_,
          args: [application.lhs, env, addressesToBind, lhsCallback, false]
        };
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    return {
      fn: _L_,
      args: [application.rhs, env, [], rhsCallback, true]
    };
  };

  var _b_ = (identifier, env, callback) => {
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
        _T_(1, _K_(address));

        return {
          fn: callback,
          args: [null, 1]
        };
      } else if (identifier === '_read') {
        // prepack can save the variable as it is on the stack, to be evaluated later
        if (global.__residual) {
          // assign the read identifier to the stack as an abstract variable, to postpone the call
          _T_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

          return {
            fn: callback,
            args: [null, 2]
          };
        } else {
          return {
            fn: _P_,
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

  var _c_ = (operator, lhsAddress, rhsAddress, callback) => {
    let err = null;

    const lhs = _K_(lhsAddress);

    const rhs = _K_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


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
    return {
      fn: callback,
      args: [err, lhsAddress]
    };
  };

  var _4_ = {
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
  var _J_ = console;
  $$0_enumerable_58false_44configurable_58true_44writable_58false.value = 1, _$2_Object_46defineProperty(_2_, "length", $$0_enumerable_58false_44configurable_58true_44writable_58false);
  module.exports = _2_;
}).call(global);