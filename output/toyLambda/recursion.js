(function () {
  function $_C_sub(__1, __2, __3) {
    return $_B_root("Op", __1, __2, __3);
  }

  function $_B_root(__0, __1, __2, __3) {
    return {
      type: __0,
      op: __1,
      lhs: __2,
      rhs: __3
    };
  }

  function $_A_sub() {
    return $_4_root("Identifier", "sum");
  }

  function $_9_sub(__1) {
    return $_4_root("Apply", __1);
  }

  function $_8_sub() {
    return $_4_root("Identifier", "f");
  }

  function $_7_sub(__1) {
    return $_4_root("Const", __1);
  }

  function $_6_sub(__1) {
    return $_4_root("Deref", __1);
  }

  function $_5_sub() {
    return $_4_root("Identifier", "x");
  }

  function $_4_root(__0, __1) {
    return {
      type: __0,
      value: __1
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [13, _Z_, 8];
        break;

      case 1:
        __captured = [6];
        break;

      case 2:
        __captured = [5];
        break;

      case 3:
        __captured = [4];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(4);

  var _2C_ = function (err, result) {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _R_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _1Y_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _1Z_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _L_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _1W_ = function (term, env, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    // increase number of term calls
    __captured__scope_1_[0]++;

    if (global.__residual) {
      // if we're in pepack, and weve reached its maximum nubmer of calls
      if (__captured__scope_1_[0] > 125 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1_[0] > 125) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) {
            setTimeout(function () {
              interpretTermLazy(term, env, addressesToBind, callback, isRhsApplication);
            }, 100);
          }, global.setTimeout, _G_, term, env, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _F_.bind(null), _G_, term, env, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _G_(term, env, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _G_(term, env, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _G_(term, env, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _G_ = function (term, env, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1_[0]--;
      false;
      callback(err, address);
    };

    switch (term.type) {
      case 'Deref':
        _M_(term.value, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _N_(term.value, callback);

        break;

      case 'Op':
        _O_(term, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _P_(term, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _Q_(term.value, env, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _P_ = function (abstraction, env, addressesToBind, callback, isRhsApplication) {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _1Y_({
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

          address = _1Y_({
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

    _1W_(abstraction.value, newEnv, addressesToBind, abstrCallback, true);
  };

  var _Q_ = function (application, env, addressesToBind, callback, isRhsApplication) {
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

                _1Z_(lhsAddress, {
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
              _1Z_(rhsAddress, lhs);
            }

            _R_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _1W_(application.lhs, env, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1W_(application.rhs, env, [], rhsCallback, true);
  };

  var _1h_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _1Z_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _1a_ = function (identifier, env, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = env[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _1Z_(1, _L_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _1Z_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _1h_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _M_ = function (dereference, env, addressesToBind, callback, isRhsApplication) {
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
            callback(null, _1Y_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_L_(address))) {
            callback(null, _1Y_(_L_(address)));
          } else {
            const newTerm = _L_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_1T_[dereference.value])) {
              false;

              _1W_(newTerm, env, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _1Z_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _1Y_(_L_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1a_(dereference.value, env, derefCallback);
  };

  var _N_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _1Y_(constant));
  };

  var _1V_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _L_(lhsAddress);

    const rhs = _L_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _1Z_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _1Z_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _1Z_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _1Z_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _1Z_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _1Z_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _1Z_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _1Z_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _1Z_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _1Z_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _1Z_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _1Z_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _1Z_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _1Z_(lhsAddress, !lhs);

          break;

        case 'negative':
          _1Z_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _1Z_(lhsAddress, {
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

  var _O_ = function (operator, env, addressesToBind, callback, isRhsApplication) {
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

        _1V_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _L_(lhsAddress) || operator.op === 'and' && !_L_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_L_(lhsAddress)) {
          _1W_(operator.rhs, env, addressesToBind, callback, isRhsApplication);
        } else {
          _1W_(operator.rhs, env, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _1W_(operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _2A_ = function (err, address) {
    ;

    const result = _L_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (console, waitForInput, toPrint, lookup, callback) {
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, _2B_, _1h_, address === 1, _L_, _2C_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _R_(2);

        _2C_(null, function () {
          let argumentAddresses = [];

          for (let i = 0; i < arguments.length; i++) {
            argumentAddresses.push(_1Y_(arguments[i]));
          }

          _P_(result, [], argumentAddresses, _2A_, true);
        });
      } else {
        _2C_(err, address > 1 && _L_(address));
      }
    }
  };

  var $_1_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _K_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1X_, 0, err, address);
  };

  var _1d_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1i_, 0, err, address);
  };

  var _1j_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1k_, 0, err, address);
  };

  var _1l_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1m_, 0, err, address);
  };

  var _1n_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1o_, 0, err, address);
  };

  var _1p_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1q_, 0, err, address);
  };

  var _1r_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1s_, 0, err, address);
  };

  var _1s_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1t_, 0, err, address);
  };

  var _1u_ = function (err, address) {
    return $_1_factoryFunction.call(this, _23_, 0, err, address);
  };

  var _24_ = function (err, address) {
    return $_1_factoryFunction.call(this, _2A_, 0, err, address);
  };

  var _1X_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1d_(err);
    } else {
      _1e_.push(rhsAddress);

      false;
      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _1d_(err);
        } else {
          let lhs = _L_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_12_.lhs.type === 'Deref' && _12_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _L_(rhsAddress);

              _1Z_(lhsAddress, {
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
          }

          if (rhsAddress !== lhsAddress) {
            _1Z_(rhsAddress, lhs);
          }

          _R_(rhsAddress);

          false;

          _1d_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _1W_(_12_.lhs, _5_, _1e_, lhsCallback, false);
    }
  };

  var $_2_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _L_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _L_(__captured__scope_2_[0]);

          _1Z_(lhsAddress, {
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
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _1Z_(__captured__scope_2_[0], lhs);
      }

      _R_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _1k_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1l_, _l_, 1, 0, err, lhsAddress);
  };

  var _1t_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1u_, _1v_, 2, 0, err, lhsAddress);
  };

  var _23_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _24_, _25_, 3, 0, err, lhsAddress);
  };

  var $_3_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _L_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _1Y_({
          type: 'Abstr',
          binding: abstraction.binding,
          value: result
        });
      }
    }

    {
      false;
    }
    callback(null, address);
  };

  var _1o_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1p_, _d_, err, address);
  };

  var _1q_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1r_, _a_, err, address);
  };

  var $_0_factoryFunction = function (callback, operator, addressesToBind, err, lhsAddress) {
    if (err) {
      return callback(err, null);
    }

    _R_(lhsAddress);

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return callback(err, null);
      }

      _1V_(operator.op, lhsAddress, rhsAddress, callback);
    };

    if (operator.op !== 'negate' && operator.op !== 'negative') {
      if (operator.op === 'or' && _L_(lhsAddress) || operator.op === 'and' && !_L_(lhsAddress)) {
        callback(null, lhsAddress);
      } else if (operator.op === 'or' && !_L_(lhsAddress)) {
        _1W_(operator.rhs, _5_, addressesToBind, callback, true);
      } else {
        _1W_(operator.rhs, _5_, addressesToBind, rhsOpCallback, true);
      }
    } else {
      rhsOpCallback(null, 0);
    }
  };

  var _H_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _K_, _S_, _D_, err, lhsAddress);
  };

  var _1m_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _1n_, _g_, _1e_, err, lhsAddress);
  };

  var _1i_ = function (err, rhsAddress) {
    if (err) {
      return _1j_(err, null);
    }

    _1V_(_m_.op, 8, rhsAddress, _1j_);
  };

  var _F_ = function (interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) {
    interpretTermLazy(term, env, addressesToBind, callback, isRhsApplication);
  };

  var _u_ = $_5_sub();

  var _s_ = $_6_sub(_u_);

  var _x_ = $_7_sub(10);

  var _p_ = $_C_sub("less", _s_, _x_);

  var _15_ = $_8_sub();

  var _13_ = $_6_sub(_15_);

  var _2_ = $_5_sub();

  var _0_ = $_6_sub(_2_);

  var _V_ = $_7_sub(1);

  var _S_ = $_C_sub("plus", _0_, _V_);

  var _12_ = {
    lhs: _13_,
    rhs: _S_
  };

  var _10_ = $_9_sub(_12_);

  var _m_ = $_C_sub("and", _p_, _10_);

  var _1D_ = $_A_sub();

  var _1B_ = $_6_sub(_1D_);

  var _1I_ = $_5_sub();

  var _1G_ = $_6_sub(_1I_);

  var _18_ = $_C_sub("plus", _1B_, _1G_);

  var _l_ = {
    lhs: _m_,
    rhs: _18_
  };

  var _j_ = $_9_sub(_l_);

  var _1N_ = $_A_sub();

  var _1L_ = $_6_sub(_1N_);

  var _g_ = $_C_sub("or", _j_, _1L_);

  var _d_ = {
    type: "Abstr",
    binding: "sum",
    value: _g_
  };
  var _a_ = {
    type: "Abstr",
    binding: "x",
    value: _d_
  };
  var _Z_ = [,,, _a_, 0, 1, 1, 1, true];
  var _1T_ = [];
  _1T_.f = true;
  var _6_ = {
    address: 1
  };
  var _8_ = {
    address: 2
  };
  var _5_ = {
    _print: _6_,
    _read: _8_,
    f: 3,
    x: 5,
    sum: 4
  };
  var _D_ = [];
  var _2B_ = console;

  var _1y_ = $_8_sub();

  var _1w_ = $_6_sub(_1y_);

  var _21_ = $_7_sub(1);

  var _1v_ = {
    lhs: _1w_,
    rhs: _21_
  };
  var _25_ = {
    lhs: {
      type: "Apply",
      value: _1v_
    },
    rhs: {
      type: "Const",
      value: 0
    }
  };
  var _1e_ = [6,,];
  _1e_.length = 1;

  _F_(_G_, _0_, _5_, _D_, _H_, true);
})();