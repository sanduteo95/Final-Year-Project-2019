(function () {
  function $_8_sub(__1) {
    return $_3_root("Apply", __1);
  }

  function $_7_sub(__1) {
    return $_3_root("Identifier", __1);
  }

  function $_6_sub(__1) {
    return $_3_root("Const", __1);
  }

  function $_5_sub(__1) {
    return $_3_root("Deref", __1);
  }

  function $_4_sub() {
    return $_3_root("Identifier", "x");
  }

  function $_3_root(__0, __1) {
    return {
      type: __0,
      value: __1
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [13, 8];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _25_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _1Z_interpretTerm = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
          }, global.setTimeout, _E_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _D_.bind(null), _E_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _E_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _E_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _E_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    }
  };

  var _E_interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
        _1S_interpretDereference(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Const':
        _1T_interpretConstant(term.value, callback);

        break;

      case 'Op':
        _1U_interpretOperator(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Abstr':
        _1V_interpretAbstraction(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Apply':
        _1W_interpretApplication(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _1V_interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

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
        // we have postponed the input
        if (global.__isAbstract && global.__isAbstract(_I_[address])) {
          global.__residual("void", function (waitForInput, callback) {
            waitForInput(callback);
          }, _1b_waitForInput, callback);
        } else if (isAbstraction && !hasBeenBound && _I_[address] && _I_[address].type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          _I_[++__captured__scope_1_[1]] = {
            type: 'Abstr',
            binding: abstraction.binding,
            value: _I_[address]
          };
          address = __captured__scope_1_[1];
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _1Z_interpretTerm(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
  };

  var _1W_interpretApplication = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(address);
        false;

        const lhsCallback = function (err, newAddress) {
          if (err) {
            callback(err);
          } else {
            // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS
            if ((!global.__isAbstract || !global.__isAbstract(_I_[newAddress])) && _I_[newAddress] && _I_[newAddress].type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === _I_[newAddress].value.value) {
                false;
                _I_[newAddress] = {
                  type: 'Apply',
                  value: {
                    lhs: _I_[newAddress],
                    rhs: _I_[address]
                  }
                };
              }
            } // clean up stack


            if (address !== newAddress) {
              _I_[address] = _I_[newAddress];
            }

            __captured__scope_1_[1] = address;
            false;
            callback(null, __captured__scope_1_[1]);
          }
        };

        false;

        _1Z_interpretTerm(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1Z_interpretTerm(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _1b_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _I_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _1c_interpretIdentifier = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _I_[1] = _I_[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _I_[2] = global.__abstract({}, '""');
        callback(null, 2);
      } else {
        _1b_waitForInput(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _1S_interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

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
          _I_[++__captured__scope_1_[1]] = {
            type: 'Deref',
            value: dereference
          };
          callback(null, __captured__scope_1_[1]);
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_I_[address])) {
            // only now just wait for input
            global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
              waitForInput(function (err, address) {
                console.log(stack[address]);
                callback(err, emptyAddress);
              });
            }, _1b_waitForInput, __abstract({}, 'console'), _I_, callback, 0);
          } else {
            console.log(_I_[1]);
          }

          callback(null, 0);
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_I_[address])) {
            // only place the wait for input if it's not an abstraction
            if (!isAbstraction) {
              global.__residual("void", function (waitForInput, callback) {
                waitForInput(callback);
              }, _1b_waitForInput, callback);
            } else {
              // otherwise, postpone it
              _I_[++__captured__scope_1_[1]] = _I_[address];
              callback(null, __captured__scope_1_[1]);
            }
          } else {
            const newTerm = _I_[address]; // if the variable stored is an application, then interpret that

            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _1Z_interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;
                _I_[address] = {
                  type: 'Deref',
                  value: _I_[address]
                };
              }

              _I_[++__captured__scope_1_[1]] = _I_[address];
              callback(null, __captured__scope_1_[1]);
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1c_interpretIdentifier(dereference.value, boundVariables, derefCallback);
  };

  var _1T_interpretConstant = function (constant, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false; // just increment the address on the stack and assign it the constant value

    _I_[++__captured__scope_1_[1]] = constant;
    callback(null, __captured__scope_1_[1]);
  };

  var _1d_applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check if both the LHS and RHS are fully interpreted 

    if (_I_[lhsAddress].type === undefined && _I_[rhsAddress].type === undefined) {
      switch (operator) {
        case 'plus':
          _I_[lhsAddress] += _I_[rhsAddress];
          break;

        case 'minus':
          _I_[lhsAddress] -= _I_[rhsAddress];
          break;

        case 'times':
          _I_[lhsAddress] *= _I_[rhsAddress];
          break;

        case 'divide':
          _I_[lhsAddress] /= _I_[rhsAddress];
          break;

        case 'modulus':
          _I_[lhsAddress] %= _I_[rhsAddress];
          break;

        case 'eq':
          _I_[lhsAddress] = _I_[lhsAddress] == _I_[rhsAddress];
          break;

        case 'noteq':
          _I_[lhsAddress] = _I_[lhsAddress] != _I_[rhsAddress];
          break;

        case 'leq':
          _I_[lhsAddress] = _I_[lhsAddress] <= _I_[rhsAddress];
          break;

        case 'less':
          _I_[lhsAddress] = _I_[lhsAddress] < _I_[rhsAddress];
          break;

        case 'geq':
          _I_[lhsAddress] = _I_[lhsAddress] >= _I_[rhsAddress];
          break;

        case 'greater':
          _I_[lhsAddress] = _I_[lhsAddress] > _I_[rhsAddress];
          break;

        case 'and':
          _I_[lhsAddress] = _I_[lhsAddress] && _I_[rhsAddress];
          break;

        case 'or':
          _I_[lhsAddress] = _I_[lhsAddress] || _I_[rhsAddress];
          break;

        case 'negate':
          _I_[lhsAddress] = !_I_[lhsAddress];
          break;

        case 'negative':
          _I_[lhsAddress] = -_I_[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _I_[lhsAddress] = {
        type: 'Op',
        op: operator,
        lhs: _I_[lhsAddress].type !== undefined ? _I_[lhsAddress] : {
          type: 'Const',
          value: _I_[lhsAddress]
        },
        rhs: _I_[rhsAddress].type !== undefined ? _I_[rhsAddress] : {
          type: 'Const',
          value: _I_[rhsAddress]
        }
      };
    }

    callback(err, lhsAddress);
  };

  var _1U_interpretOperator = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1_[1] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1d_applyOperator(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _I_[lhsAddress] || operator.op === 'and' && !_I_[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_I_[lhsAddress]) {
          _1Z_interpretTerm(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _1Z_interpretTerm(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _1Z_interpretTerm(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _24_ = function (err, address) {
    _25_(err, address > 1 && _I_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _1P_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1a_, 0, err, address);
  };

  var _1g_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1h_, 0, err, address);
  };

  var _1i_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1j_, 0, err, address);
  };

  var _1j_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1k_, 0, err, address);
  };

  var _1l_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1m_, 0, err, address);
  };

  var _1o_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1p_, 0, err, address);
  };

  var _1p_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1q_, 0, err, address);
  };

  var _1r_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1s_, 0, err, address);
  };

  var _1s_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1t_, 0, err, address);
  };

  var _1v_ = function (err, address) {
    return $_0_factoryFunction.call(this, _24_, 0, err, address);
  };

  var _F_ = function (err, address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1P_(err);
    } else {
      _1Q_.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _1P_(err);
        } else {
          if ((!global.__isAbstract || !global.__isAbstract(_I_[newAddress])) && _I_[newAddress] && _I_[newAddress].type === 'Deref') {
            false;

            if (_f_.lhs.type === 'Deref' && _f_.lhs.value.value === _I_[newAddress].value.value) {
              false;
              _I_[newAddress] = {
                type: 'Apply',
                value: {
                  lhs: _I_[newAddress],
                  rhs: _I_[address]
                }
              };
            }
          }

          if (address !== newAddress) {
            _I_[address] = _I_[newAddress];
          }

          __captured__scope_1_[1] = address;
          false;

          _1P_(null, __captured__scope_1_[1]);
        }
      };

      false;

      _1Z_interpretTerm(_f_.lhs, _7_, _1Q_, lhsCallback, true);
    }
  };

  var $_2_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if ((!global.__isAbstract || !global.__isAbstract(_I_[newAddress])) && _I_[newAddress] && _I_[newAddress].type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === _I_[newAddress].value.value) {
          false;
          _I_[newAddress] = {
            type: 'Apply',
            value: {
              lhs: _I_[newAddress],
              rhs: _I_[address]
            }
          };
        }
      }

      if (address !== newAddress) {
        _I_[address] = _I_[newAddress];
      }

      __captured__scope_1_[1] = address;
      false;
      callback(null, __captured__scope_1_[1]);
    }
  };

  var _1k_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _1l_, _14_, 8, 0, err, newAddress);
  };

  var _1t_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _1v_, _1w_, 5, 0, err, newAddress);
  };

  var $_1_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if (global.__isAbstract && global.__isAbstract(_I_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _1b_waitForInput, callback);
      } else if (!true && _I_[address] && _I_[address].type !== undefined) {
        false;
        _I_[++__captured__scope_1_[1]] = {
          type: 'Abstr',
          binding: _X_.binding,
          value: _I_[address]
        };
        address = __captured__scope_1_[1];
      }
    }

    {
      false;
    }
    callback(null, address);
  };

  var _1h_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1i_, 0, err, address);
  };

  var _1q_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1r_, 0, err, address);
  };

  var _1a_ = function (err, lhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      return _1g_(err, null);
    }

    __captured__scope_1_[1] = lhsAddress;

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return _1g_(err, null);
      }

      _1d_applyOperator(_a_.op, lhsAddress, rhsAddress, _1g_);
    };

    if (_a_.op !== 'negate' && _a_.op !== 'negative') {
      if (_a_.op === 'or' && _I_[lhsAddress] || _a_.op === 'and' && !_I_[lhsAddress]) {
        _1g_(null, lhsAddress);
      } else if (_a_.op === 'or' && !_I_[lhsAddress]) {
        _1Z_interpretTerm(_a_.rhs, _7_, _1Q_, _1g_, true);
      } else {
        _1Z_interpretTerm(_a_.rhs, _7_, _1Q_, rhsOpCallback, true);
      }
    } else {
      rhsOpCallback();
    }
  };

  var _1m_ = function (err, rhsAddress) {
    if (err) {
      return _1o_(err, null);
    }

    _1d_applyOperator(_o_.op, 7, rhsAddress, _1o_);
  };

  var _D_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
  };

  console.log(1);

  var _R_ = $_4_sub();

  var _P_ = $_5_sub(_R_);

  var _U_ = $_6_sub(1);

  var _M_ = {
    type: "Op",
    op: "plus",
    lhs: _P_,
    rhs: _U_
  };
  var _J_ = {
    type: "Abstr",
    binding: "x",
    value: _M_
  };

  var _l_ = $_7_sub("_print");

  var _j_ = $_5_sub(_l_);

  var _g_ = {
    type: "Abstr",
    binding: "_print",
    value: _j_
  };

  var _4_ = $_4_sub();

  var _2_ = $_5_sub(_4_);

  var _f_ = {
    lhs: _g_,
    rhs: _2_
  };

  var _d_ = $_8_sub(_f_);

  var _w_ = $_4_sub();

  var _u_ = $_5_sub(_w_);

  var _z_ = $_6_sub(10);

  var _r_ = {
    type: "Op",
    op: "less",
    lhs: _u_,
    rhs: _z_
  };

  var _17_ = $_7_sub("f");

  var _15_ = $_5_sub(_17_);

  var _1F_ = $_7_sub("incr");

  var _1D_ = $_5_sub(_1F_);

  var _1K_ = $_4_sub();

  var _1I_ = $_5_sub(_1K_);

  var _1C_ = {
    lhs: _1D_,
    rhs: _1I_
  };

  var _1A_ = $_8_sub(_1C_);

  var _14_ = {
    lhs: _15_,
    rhs: _1A_
  };

  var _12_ = $_8_sub(_14_);

  var _o_ = {
    type: "Op",
    op: "and",
    lhs: _r_,
    rhs: _12_
  };
  var _a_ = {
    type: "Op",
    op: "or",
    lhs: _d_,
    rhs: _o_
  };
  var _X_ = {
    type: "Abstr",
    binding: "x",
    value: _a_
  };
  var _I_ = [, 1,, _J_, _X_, 1, void 0, true, 2, 2, 1];
  var _7_ = {
    incr: 3,
    f: 4,
    x: 8
  };
  var _1w_ = {
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
  var _1Q_ = [,];
  _1Q_.length = 0;

  _D_(_E_interpretTermLazy, _2_, _7_, [], _F_, true);
})();