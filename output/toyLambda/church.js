(function () {
  function $_H_root(__0, __1) {
    return {
      lhs: __0,
      rhs: __1
    };
  }

  function $_G_sub(__2) {
    return $_B_root("Abstr", "n", __2);
  }

  function $_F_sub(__2) {
    return $_B_root("Abstr", "x", __2);
  }

  function $_E_sub(__2) {
    return $_B_root("Abstr", "f", __2);
  }

  function $_D_sub(__2) {
    return $_B_root("Abstr", "y", __2);
  }

  function $_C_sub(__2) {
    return $_B_root("Abstr", "z", __2);
  }

  function $_B_root(__0, __1, __2) {
    return {
      type: __0,
      binding: __1,
      value: __2
    };
  }

  function $_A_sub(__1) {
    return $_3_root("Apply", __1);
  }

  function $_9_sub(__1) {
    return $_3_root("Deref", __1);
  }

  function $_8_sub() {
    return $_3_root("Deref", _10_);
  }

  function $_7_sub() {
    return $_3_root("Deref", _j_);
  }

  function $_6_sub() {
    return $_3_root("Const", 1);
  }

  function $_5_sub() {
    return $_3_root("Deref", _V_);
  }

  function $_4_sub(__1) {
    return $_3_root("Identifier", __1);
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
        __captured = [13, 21];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _3x_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _31_interpretTerm = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
          }, global.setTimeout, _I_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _H_.bind(null), _I_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _I_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _I_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _I_interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    }
  };

  var _I_interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
        _2u_interpretDereference(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Const':
        _2v_interpretConstant(term.value, callback);

        break;

      case 'Op':
        _2w_interpretOperator(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Abstr':
        _2x_interpretAbstraction(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Apply':
        _2y_interpretApplication(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _2x_interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
        if (global.__isAbstract && global.__isAbstract(_M_[address])) {
          global.__residual("void", function (waitForInput, callback) {
            waitForInput(callback);
          }, _33_waitForInput, callback);
        } else if (isAbstraction && !hasBeenBound && _M_[address] && _M_[address].type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          _M_[++__captured__scope_1_[1]] = {
            type: 'Abstr',
            binding: abstraction.binding,
            value: _M_[address]
          };
          address = __captured__scope_1_[1];
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _31_interpretTerm(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
  };

  var _2y_interpretApplication = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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
            if ((!global.__isAbstract || !global.__isAbstract(_M_[newAddress])) && _M_[newAddress] && _M_[newAddress].type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === _M_[newAddress].value.value) {
                false;
                _M_[newAddress] = {
                  type: 'Apply',
                  value: {
                    lhs: _M_[newAddress],
                    rhs: _M_[address]
                  }
                };
              }
            } // clean up stack


            if (address !== newAddress) {
              _M_[address] = _M_[newAddress];
            }

            __captured__scope_1_[1] = address;
            false;
            callback(null, __captured__scope_1_[1]);
          }
        };

        false;

        _31_interpretTerm(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _31_interpretTerm(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _33_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _M_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _34_interpretIdentifier = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _M_[1] = _M_[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _M_[2] = global.__abstract({}, '""');
        callback(null, 2);
      } else {
        _33_waitForInput(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _2u_interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
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
          _M_[++__captured__scope_1_[1]] = {
            type: 'Deref',
            value: dereference
          };
          callback(null, __captured__scope_1_[1]);
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_M_[address])) {
            // only now just wait for input
            global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
              waitForInput(function (err, address) {
                console.log(stack[address]);
                callback(err, emptyAddress);
              });
            }, _33_waitForInput, __abstract({}, 'console'), _M_, callback, 0);
          } else {
            console.log(_M_[1]);
          }

          callback(null, 0);
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_M_[address])) {
            // only place the wait for input if it's not an abstraction
            if (!isAbstraction) {
              global.__residual("void", function (waitForInput, callback) {
                waitForInput(callback);
              }, _33_waitForInput, callback);
            } else {
              // otherwise, postpone it
              _M_[++__captured__scope_1_[1]] = _M_[address];
              callback(null, __captured__scope_1_[1]);
            }
          } else {
            const newTerm = _M_[address]; // if the variable stored is an application, then interpret that

            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _31_interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;
                _M_[address] = {
                  type: 'Deref',
                  value: _M_[address]
                };
              }

              _M_[++__captured__scope_1_[1]] = _M_[address];
              callback(null, __captured__scope_1_[1]);
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _34_interpretIdentifier(dereference.value, boundVariables, derefCallback);
  };

  var _2v_interpretConstant = function (constant, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false; // just increment the address on the stack and assign it the constant value

    _M_[++__captured__scope_1_[1]] = constant;
    callback(null, __captured__scope_1_[1]);
  };

  var _35_applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check if both the LHS and RHS are fully interpreted 

    if (_M_[lhsAddress].type === undefined && _M_[rhsAddress].type === undefined) {
      switch (operator) {
        case 'plus':
          _M_[lhsAddress] += _M_[rhsAddress];
          break;

        case 'minus':
          _M_[lhsAddress] -= _M_[rhsAddress];
          break;

        case 'times':
          _M_[lhsAddress] *= _M_[rhsAddress];
          break;

        case 'divide':
          _M_[lhsAddress] /= _M_[rhsAddress];
          break;

        case 'modulus':
          _M_[lhsAddress] %= _M_[rhsAddress];
          break;

        case 'eq':
          _M_[lhsAddress] = _M_[lhsAddress] == _M_[rhsAddress];
          break;

        case 'noteq':
          _M_[lhsAddress] = _M_[lhsAddress] != _M_[rhsAddress];
          break;

        case 'leq':
          _M_[lhsAddress] = _M_[lhsAddress] <= _M_[rhsAddress];
          break;

        case 'less':
          _M_[lhsAddress] = _M_[lhsAddress] < _M_[rhsAddress];
          break;

        case 'geq':
          _M_[lhsAddress] = _M_[lhsAddress] >= _M_[rhsAddress];
          break;

        case 'greater':
          _M_[lhsAddress] = _M_[lhsAddress] > _M_[rhsAddress];
          break;

        case 'and':
          _M_[lhsAddress] = _M_[lhsAddress] && _M_[rhsAddress];
          break;

        case 'or':
          _M_[lhsAddress] = _M_[lhsAddress] || _M_[rhsAddress];
          break;

        case 'negate':
          _M_[lhsAddress] = !_M_[lhsAddress];
          break;

        case 'negative':
          _M_[lhsAddress] = -_M_[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _M_[lhsAddress] = {
        type: 'Op',
        op: operator,
        lhs: _M_[lhsAddress].type !== undefined ? _M_[lhsAddress] : {
          type: 'Const',
          value: _M_[lhsAddress]
        },
        rhs: _M_[rhsAddress].type !== undefined ? _M_[rhsAddress] : {
          type: 'Const',
          value: _M_[rhsAddress]
        }
      };
    }

    callback(err, lhsAddress);
  };

  var _2w_interpretOperator = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
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

        _35_applyOperator(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _M_[lhsAddress] || operator.op === 'and' && !_M_[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_M_[lhsAddress]) {
          _31_interpretTerm(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _31_interpretTerm(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _31_interpretTerm(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _3w_ = function (err, address) {
    _3x_(err, address > 1 && _M_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _2q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _32_, 0, err, address);
  };

  var _38_ = function (err, address) {
    return $_0_factoryFunction.call(this, _39_, 0, err, address);
  };

  var _3A_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3B_, 0, err, address);
  };

  var _3C_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3D_, 0, err, address);
  };

  var _3E_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3F_, 0, err, address);
  };

  var _3G_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3H_, 0, err, address);
  };

  var _3H_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3I_, 0, err, address);
  };

  var _3J_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3V_, 0, err, address);
  };

  var _3W_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3f_, 0, err, address);
  };

  var _3g_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3p_, 0, err, address);
  };

  var _3q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3w_, 0, err, address);
  };

  var _J_ = function (err, address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _2q_(err);
    } else {
      _2r_.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _2q_(err);
        } else {
          if ((!global.__isAbstract || !global.__isAbstract(_M_[newAddress])) && _M_[newAddress] && _M_[newAddress].type === 'Deref') {
            false;

            if (_1u_.lhs.type === 'Deref' && _1u_.lhs.value.value === _M_[newAddress].value.value) {
              false;
              _M_[newAddress] = {
                type: 'Apply',
                value: {
                  lhs: _M_[newAddress],
                  rhs: _M_[address]
                }
              };
            }
          }

          if (address !== newAddress) {
            _M_[address] = _M_[newAddress];
          }

          __captured__scope_1_[1] = address;
          false;

          _2q_(null, __captured__scope_1_[1]);
        }
      };

      false;

      _31_interpretTerm(_1u_.lhs, _5_, _2r_, lhsCallback, true);
    }
  };

  var $_2_factoryFunction = function (callback, abstraction, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if (global.__isAbstract && global.__isAbstract(_M_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _33_waitForInput, callback);
      } else if (!true && _M_[address] && _M_[address].type !== undefined) {
        false;
        _M_[++__captured__scope_1_[1]] = {
          type: 'Abstr',
          binding: abstraction.binding,
          value: _M_[address]
        };
        address = __captured__scope_1_[1];
      }
    }

    {
      false;
    }
    callback(null, address);
  };

  var _39_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3A_, _1m_, 0, err, address);
  };

  var _3B_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3C_, _1j_, 0, err, address);
  };

  var _3D_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3E_, _1g_, 0, err, address);
  };

  var _3F_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3G_, _1d_, 0, err, address);
  };

  var $_1_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if ((!global.__isAbstract || !global.__isAbstract(_M_[newAddress])) && _M_[newAddress] && _M_[newAddress].type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === _M_[newAddress].value.value) {
          false;
          _M_[newAddress] = {
            type: 'Apply',
            value: {
              lhs: _M_[newAddress],
              rhs: _M_[address]
            }
          };
        }
      }

      if (address !== newAddress) {
        _M_[address] = _M_[newAddress];
      }

      __captured__scope_1_[1] = address;
      false;
      callback(null, __captured__scope_1_[1]);
    }
  };

  var _32_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _38_, _1r_, 21, 0, err, newAddress);
  };

  var _3I_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _3J_, _3K_, 20, 0, err, newAddress);
  };

  var _3V_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _3W_, _3X_, 17, 0, err, newAddress);
  };

  var _3f_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _3g_, _3h_, 14, 0, err, newAddress);
  };

  var _3p_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _3q_, _3r_, 11, 0, err, newAddress);
  };

  var _H_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
  };

  var _V_ = $_4_sub("z");

  var _T_ = $_5_sub();

  var _Y_ = $_6_sub();

  var _Q_ = {
    type: "Op",
    op: "plus",
    lhs: _T_,
    rhs: _Y_
  };

  var _N_ = $_C_sub(_Q_);

  var _j_ = $_4_sub("y");

  var _h_ = $_7_sub();

  var _e_ = $_D_sub(_h_);

  var _b_ = $_E_sub(_e_);

  var _10_ = $_4_sub("f");

  var _y_ = $_8_sub();

  var _1B_ = $_4_sub("n");

  var _19_ = $_9_sub(_1B_);

  var _1G_ = $_4_sub("f");

  var _1E_ = $_9_sub(_1G_);

  var _18_ = $_H_root(_19_, _1E_);

  var _16_ = $_A_sub(_18_);

  var _1L_ = $_4_sub("x");

  var _1J_ = $_9_sub(_1L_);

  var _15_ = $_H_root(_16_, _1J_);

  var _13_ = $_A_sub(_15_);

  var _x_ = $_H_root(_y_, _13_);

  var _v_ = $_A_sub(_x_);

  var _s_ = $_F_sub(_v_);

  var _p_ = $_E_sub(_s_);

  var _m_ = $_G_sub(_p_);

  var _1O_ = $_7_sub();

  var _1Q_ = $_D_sub(_1O_);

  var _1Z_ = $_8_sub();

  var _1b_ = $_9_sub(_1L_);

  var _1Y_ = $_H_root(_1Z_, _1b_);

  var _1W_ = $_A_sub(_1Y_);

  var _1U_ = $_F_sub(_1W_);

  var _1S_ = $_E_sub(_1U_);

  var _23_ = $_4_sub("m");

  var _21_ = $_9_sub(_23_);

  var _28_ = $_4_sub("next");

  var _26_ = $_9_sub(_28_);

  var _20_ = $_H_root(_21_, _26_);

  var _1y_ = $_A_sub(_20_);

  var _2D_ = $_4_sub("n");

  var _2B_ = $_9_sub(_2D_);

  var _1x_ = $_H_root(_1y_, _2B_);

  var _1v_ = $_A_sub(_1x_);

  var _2_ = $_4_sub("f");

  var _0_ = $_9_sub(_2_);

  var _1u_ = $_H_root(_1v_, _0_);

  var _1s_ = $_A_sub(_1u_);

  var _2I_ = $_4_sub("x");

  var _2G_ = $_9_sub(_2I_);

  var _1r_ = $_H_root(_1s_, _2G_);

  var _1p_ = $_A_sub(_1r_);

  var _1m_ = $_F_sub(_1p_);

  var _1j_ = $_E_sub(_1m_);

  var _1g_ = $_G_sub(_1j_);

  var _1d_ = $_B_root("Abstr", "m", _1g_);

  var _2O_ = $_5_sub();

  var _2Q_ = $_6_sub();

  var _2M_ = {
    type: "Op",
    op: "plus",
    lhs: _2O_,
    rhs: _2Q_
  };

  var _2S_ = $_C_sub(_2M_);

  var _2X_ = $_8_sub();

  var _2Z_ = $_9_sub(_1L_);

  var _2W_ = $_H_root(_2X_, _2Z_);

  var _2U_ = $_A_sub(_2W_);

  var _2b_ = $_F_sub(_2U_);

  var _2d_ = $_E_sub(_2b_);

  var _2i_ = $_8_sub();

  var _2k_ = $_9_sub(_1L_);

  var _2h_ = $_H_root(_2i_, _2k_);

  var _2f_ = $_A_sub(_2h_);

  var _2m_ = $_F_sub(_2f_);

  var _2o_ = $_E_sub(_2m_);

  var _M_ = [,,, _N_, _b_, _m_, _1O_, _1Q_, _1S_, _1S_, _1d_, 0, _2M_, 1, _2S_, _2U_, _2b_, _2d_, _2f_, _2m_, _2o_, 0];
  var _5_ = {
    inc: 3,
    zero: 4,
    next: 5,
    one: 9,
    add: 10,
    m: 20,
    n: 17,
    f: 14,
    x: 11
  };

  var _3N_ = $_4_sub("add");

  var _3L_ = $_9_sub(_3N_);

  var _3S_ = $_4_sub("one");

  var _3Q_ = $_9_sub(_3S_);

  var _3K_ = $_H_root(_3L_, _3Q_);

  var _3Y_ = $_A_sub(_3K_);

  var _3c_ = $_4_sub("one");

  var _3a_ = $_9_sub(_3c_);

  var _3X_ = $_H_root(_3Y_, _3a_);

  var _3i_ = $_A_sub(_3X_);

  var _3m_ = $_4_sub("inc");

  var _3k_ = $_9_sub(_3m_);

  var _3h_ = $_H_root(_3i_, _3k_);

  var _3r_ = $_H_root({
    type: "Apply",
    value: _3h_
  }, {
    type: "Const",
    value: 0
  });

  var _2r_ = [21,,,,];
  _2r_.length = 1;

  _H_(_I_interpretTermLazy, _0_, _5_, [], _J_, true);
})();