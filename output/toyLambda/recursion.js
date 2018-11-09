(function () {
  function $_9_sub(__1) {
    return $_4_root("Apply", __1);
  }

  function $_8_sub(__1) {
    return $_4_root("Identifier", __1);
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
        __captured = [13, _e_, 8];
        break;

      case 1:
        __captured = [8];
        break;

      case 2:
        __captured = [5];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(3);

  var _2E_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _F_ = function (time, console) {
    time && console.time('interpret');
  };

  var _1d_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _1g_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _1c_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _O_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _1e_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
            }, 100);
          }, global.setTimeout, _H_, term, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _G_.bind(null), _H_, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _H_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _H_(term, boundVariables, addressesToBind, callback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _H_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    }
  };

  var _H_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
        _P_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Const':
        _Q_(term.value, callback);

        break;

      case 'Op':
        _R_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Abstr':
        _S_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Apply':
        _T_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _S_ = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
        const result = _O_(address); // we have postponed the input


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isAbstraction && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _1g_({
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

    _1e_(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
  };

  var _T_ = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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
            let lhs = _O_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _O_(rhsAddress);

                _1c_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _O_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _1c_(rhsAddress, lhs);
            }

            _1d_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _1e_(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1e_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _1n_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _1c_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _1h_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _1c_(1, _O_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _1c_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _1n_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _P_ = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
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
          callback(null, _1g_({
            type: 'Deref',
            value: dereference
          }));
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_O_(address))) {
            callback(null, 1);
          } else {
            console.log(_O_(1));
            callback(null, _1g_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_O_(address))) {
            callback(null, _1g_(_O_(address)));
          } else {
            const newTerm = _O_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _1e_(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _1c_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _1g_(_O_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1h_(dereference.value, boundVariables, derefCallback);
  };

  var _Q_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _1g_(constant));
  };

  var _1i_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _O_(lhsAddress);

    const rhs = _O_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _1c_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _1c_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _1c_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _1c_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _1c_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _1c_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _1c_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _1c_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _1c_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _1c_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _1c_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _1c_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _1c_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _1c_(lhsAddress, !lhs);

          break;

        case 'negative':
          _1c_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _1c_(lhsAddress, {
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

  var _R_ = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _1d_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1i_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _O_(lhsAddress) || operator.op === 'and' && !_O_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_O_(lhsAddress)) {
          _1e_(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _1e_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _1e_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _2D_ = function (err, address) {
    const result = _O_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (time, console, waitForInput, toPrint, lookup, callback) {
        time && console.timeEnd('interpret');
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, void 0, _1_, _1n_, address === 1, _O_, _2E_);
    } else {
      if (global.__residual) {
        global.__residual("void", function (time, console) {
          time && console.timeEnd('interpret');
        }, void 0, _1_);
      } else {
        void 0;
      }

      if (result !== undefined && result.type === 'Abstr') {
        _1d_(2);

        _2E_(null, function (arg) {
          if (!arg) {
            _S_(result, [], [], _2E_, true);
          } else {
            _T_({
              lhs: result,
              rhs: arg
            }, [], [], _2E_, true);
          }
        });
      } else {
        _2E_(err, address > 1 && _O_(address));
      }
    }
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _L_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1f_, 0, err, address);
  };

  var _1m_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1o_, 0, err, address);
  };

  var _1p_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1q_, 0, err, address);
  };

  var _1q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1r_, 0, err, address);
  };

  var _1s_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1t_, 0, err, address);
  };

  var _1v_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1w_, 0, err, address);
  };

  var _1y_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1z_, 0, err, address);
  };

  var _20_ = function (err, address) {
    return $_0_factoryFunction.call(this, _21_, 0, err, address);
  };

  var _21_ = function (err, address) {
    return $_0_factoryFunction.call(this, _22_, 0, err, address);
  };

  var _24_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2D_, 0, err, address);
  };

  var _I_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _L_(err);
    } else {
      _M_.push(rhsAddress);

      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _L_(err);
        } else {
          let lhs = _O_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_U_.lhs.type === 'Deref' && _U_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _O_(rhsAddress);

              _1c_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _O_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _1c_(rhsAddress, lhs);
          }

          _1d_(rhsAddress);

          false;

          _L_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _1e_(_U_.lhs, _9_, _M_, lhsCallback, true);
    }
  };

  var $_2_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _O_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _O_(__captured__scope_2_[0]);

          _1c_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _O_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _1c_(__captured__scope_2_[0], lhs);
      }

      _1d_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _1r_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1s_, _1H_, 1, 0, err, lhsAddress);
  };

  var _22_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _24_, _25_, 2, 0, err, lhsAddress);
  };

  var $_1_factoryFunction = function (callback, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _O_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _1g_({
          type: 'Abstr',
          binding: _t_.binding,
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
    return $_1_factoryFunction.call(this, _1p_, err, address);
  };

  var _1z_ = function (err, address) {
    return $_1_factoryFunction.call(this, _20_, err, address);
  };

  var _1f_ = function (err, lhsAddress) {
    if (err) {
      return _1m_(err, null);
    }

    _1d_(lhsAddress);

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return _1m_(err, null);
      }

      _1i_(_w_.op, lhsAddress, rhsAddress, _1m_);
    };

    if (_w_.op !== 'negate' && _w_.op !== 'negative') {
      if (_w_.op === 'or' && _O_(lhsAddress) || _w_.op === 'and' && !_O_(lhsAddress)) {
        _1m_(null, lhsAddress);
      } else if (_w_.op === 'or' && !_O_(lhsAddress)) {
        _1e_(_w_.rhs, _9_, _M_, _1m_, true);
      } else {
        _1e_(_w_.rhs, _9_, _M_, rhsOpCallback, true);
      }
    } else {
      rhsOpCallback(null, 0);
    }
  };

  var $_3_factoryFunction = function (callback, operator, lhsAddress, err, rhsAddress) {
    if (err) {
      return callback(err, null);
    }

    _1i_(operator.op, lhsAddress, rhsAddress, callback);
  };

  var _1t_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _1v_, _11_, 7, err, rhsAddress);
  };

  var _1w_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _1y_, _w_, 6, err, rhsAddress);
  };

  var _G_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
  };

  var _1_ = console;

  _F_(void 0, _1_);

  console.log(1);

  var _n_ = $_5_sub();

  var _l_ = $_6_sub(_n_);

  var _q_ = $_7_sub(1);

  var _i_ = {
    type: "Op",
    op: "plus",
    lhs: _l_,
    rhs: _q_
  };
  var _f_ = {
    type: "Abstr",
    binding: "x",
    value: _i_
  };

  var _a_ = $_8_sub("_print");

  var _Y_ = $_6_sub(_a_);

  var _V_ = {
    type: "Abstr",
    binding: "_print",
    value: _Y_
  };

  var _6_ = $_5_sub();

  var _4_ = $_6_sub(_6_);

  var _U_ = {
    lhs: _V_,
    rhs: _4_
  };

  var _z_ = $_9_sub(_U_);

  var _19_ = $_5_sub();

  var _17_ = $_6_sub(_19_);

  var _1C_ = $_7_sub(10);

  var _14_ = {
    type: "Op",
    op: "less",
    lhs: _17_,
    rhs: _1C_
  };

  var _1K_ = $_8_sub("f");

  var _1I_ = $_6_sub(_1K_);

  var _1S_ = $_8_sub("incr");

  var _1Q_ = $_6_sub(_1S_);

  var _1X_ = $_5_sub();

  var _1V_ = $_6_sub(_1X_);

  var _1P_ = {
    lhs: _1Q_,
    rhs: _1V_
  };

  var _1N_ = $_9_sub(_1P_);

  var _1H_ = {
    lhs: _1I_,
    rhs: _1N_
  };

  var _1F_ = $_9_sub(_1H_);

  var _11_ = {
    type: "Op",
    op: "and",
    lhs: _14_,
    rhs: _1F_
  };
  var _w_ = {
    type: "Op",
    op: "and",
    lhs: _z_,
    rhs: _11_
  };
  var _t_ = {
    type: "Abstr",
    binding: "x",
    value: _w_
  };
  var _e_ = [, 1,, _f_, _t_, 1, true, true, 2];
  var _9_ = {
    incr: 3,
    f: 4,
    x: 8
  };
  var _25_ = {
    lhs: {
      type: "Deref",
      value: {
        type: "Identifier",
        value: "f"
      }
    },
    rhs: {
      type: "Const",
      value: 1
    }
  };
  var _M_ = [,];
  _M_.length = 0;

  _G_(_H_, _4_, _9_, [], _I_, true);
})();