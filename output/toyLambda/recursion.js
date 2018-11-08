(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [8, 8];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _29_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _1d_interpretTerm = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    // increase number of term calls
    __captured__scope_1_[1]++;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1_[1]--;
      false;
      callback(err, address);
    };

    if (global.__residual) {
      // if we're in pepack, and weve reached its maximum nubmer of calls
      if (__captured__scope_1_[1] > 75 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1_[1] > 75) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
            }, 100);
          }, global.setTimeout, _O_interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[1]--;

          global.__residual("void", _N_.bind(null), _O_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _O_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[1] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _O_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _O_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _O_interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        _S_interpretDereference(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Const':
        _T_interpretConstant(term[1], callback);

        break;

      case 'Op':
        _U_interpretOperator(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _V_interpretAbstraction(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _W_interpretApplication(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _V_interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      boundVariables[abstraction[0]] = addressesToBind.pop();
      hasBeenBound = true;
      false;
    }

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        // we have postponed the input
        if (global.__isAbstract && global.__isAbstract(_X_[address])) {
          global.__residual("void", function (waitForInput, callback) {
            waitForInput(callback);
          }, _1c_waitForInput, callback);
        } else if (isAbstraction && !hasBeenBound && _X_[address] && _X_[address][0] !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          _X_[++__captured__scope_1_[0]] = ['Abstr', [abstraction[0], _X_[address]]];
          address = __captured__scope_1_[0];
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _1d_interpretTerm(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _W_interpretApplication = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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
            if ((!global.__isAbstract || !global.__isAbstract(_X_[newAddress])) && _X_[newAddress] && _X_[newAddress][0] === 'Deref') {
              false;

              if (application[0][0] === 'Deref' && application[0][1][1] === _X_[newAddress][1][1]) {
                false;
                _X_[newAddress] = ['Apply', [_X_[newAddress], _X_[address]]];
              }
            } // clean up stack


            if (address !== newAddress) {
              _X_[address] = _X_[newAddress];
            }

            __captured__scope_1_[0] = address;
            false;
            callback(null, __captured__scope_1_[0]);
          }
        };

        false;

        _1d_interpretTerm(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1d_interpretTerm(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1c_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _X_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _1e_interpretIdentifier = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _X_[1] = _X_[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _X_[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _1c_waitForInput(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _S_interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = function (err, address) {
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          _X_[++__captured__scope_1_[0]] = ['Deref', dereference];
          callback(null, __captured__scope_1_[0]);
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_X_[address])) {
            // only now just wait for input
            global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
              waitForInput(function (err, address) {
                console.log(stack[address]);
                callback(err, emptyAddress);
              });
            }, _1c_waitForInput, __abstract({}, 'console'), _X_, callback, 0);
          } else {
            console.log(_X_[1]);
          }

          callback(null, 0);
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_X_[address])) {
            // only place the wait for input if it's not an abstraction
            if (!isAbstraction) {
              global.__residual("void", function (waitForInput, callback) {
                waitForInput(callback);
              }, _1c_waitForInput, callback);
            } else {
              // otherwise, postpone it
              _X_[++__captured__scope_1_[0]] = _X_[address];
              callback(null, __captured__scope_1_[0]);
            }
          } else {
            const newTerm = _X_[address]; // if the variable stored is an application, then interpret that

            if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _1d_interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm[0] === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm[0] === 'Identifier') {
                // the variable might not be evaluated
                false;
                _X_[address] = ['Deref', _X_[address]];
              }

              _X_[++__captured__scope_1_[0]] = _X_[address];
              callback(null, __captured__scope_1_[0]);
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1e_interpretIdentifier(dereference[1], boundVariables, derefCallback);
  };

  var _T_interpretConstant = function (constant, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false; // just increment the address on the stack and assign it the constant value

    _X_[++__captured__scope_1_[0]] = constant;
    callback(null, __captured__scope_1_[0]);
  };

  var _1f_applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check if both the LHS and RHS are constants

    if (_X_[lhsAddress][0] === undefined && _X_[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _X_[lhsAddress] += _X_[rhsAddress];
          break;

        case 'Minus':
          _X_[lhsAddress] -= _X_[rhsAddress];
          break;

        case 'Times':
          _X_[lhsAddress] *= _X_[rhsAddress];
          break;

        case 'Divide':
          _X_[lhsAddress] /= _X_[rhsAddress];
          break;

        case 'Modulus':
          _X_[lhsAddress] %= _X_[rhsAddress];
          break;

        case 'Eq':
          _X_[lhsAddress] = _X_[lhsAddress] == _X_[rhsAddress];
          break;

        case 'Noteq':
          _X_[lhsAddress] = _X_[lhsAddress] != _X_[rhsAddress];
          break;

        case 'Leq':
          _X_[lhsAddress] = _X_[lhsAddress] <= _X_[rhsAddress];
          break;

        case 'Less':
          _X_[lhsAddress] = _X_[lhsAddress] < _X_[rhsAddress];
          break;

        case 'Geq':
          _X_[lhsAddress] = _X_[lhsAddress] >= _X_[rhsAddress];
          break;

        case 'Greater':
          _X_[lhsAddress] = _X_[lhsAddress] > _X_[rhsAddress];
          break;

        case 'And':
          _X_[lhsAddress] = _X_[lhsAddress] && _X_[rhsAddress];
          break;

        case 'Or':
          _X_[lhsAddress] = _X_[lhsAddress] || _X_[rhsAddress];
          break;

        case 'Negate':
          _X_[lhsAddress] = !_X_[lhsAddress];
          break;

        case 'Negative':
          _X_[lhsAddress] = -_X_[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      // if any of the two is not a constant, make sure the one that is gets transformed into one
      const lhs = _X_[lhsAddress][0] !== undefined ? _X_[lhsAddress] : ['Const', _X_[lhsAddress]];
      const rhs = _X_[rhsAddress][0] !== undefined ? _X_[rhsAddress] : ['Const', _X_[rhsAddress]];
      _X_[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _U_interpretOperator = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1_[0] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1f_applyOperator(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _X_[lhsAddress] || operator[0] === 'And' && !_X_[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_X_[lhsAddress]) {
          _1d_interpretTerm(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _1d_interpretTerm(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _1d_interpretTerm(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _28_ = function (err, address) {
    _29_(err, address > 1 && _X_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[1]--;
    false;
    callback(err, address);
  };

  var _P_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1Z_, 0, err, address);
  };

  var _1g_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1j_, 0, err, address);
  };

  var _1k_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1r_, 0, err, address);
  };

  var _1t_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1u_, 0, err, address);
  };

  var _1u_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1v_, 0, err, address);
  };

  var _1w_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1x_, 0, err, address);
  };

  var _1x_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1y_, 0, err, address);
  };

  var _1z_ = function (err, address) {
    return $_0_factoryFunction.call(this, _28_, 0, err, address);
  };

  var _1j_ = function (err, address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1k_(err);
    } else {
      _1l_.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _1k_(err);
        } else {
          if ((!global.__isAbstract || !global.__isAbstract(_X_[newAddress])) && _X_[newAddress] && _X_[newAddress][0] === 'Deref') {
            false;

            if (_1F_[0][0] === 'Deref' && _1F_[0][1][1] === _X_[newAddress][1][1]) {
              false;
              _X_[newAddress] = ['Apply', [_X_[newAddress], _X_[address]]];
            }
          }

          if (address !== newAddress) {
            _X_[address] = _X_[newAddress];
          }

          __captured__scope_1_[0] = address;
          false;

          _1k_(null, __captured__scope_1_[0]);
        }
      };

      false;

      _1d_interpretTerm(_1F_[0], _1n_, _1l_, lhsCallback, true);
    }
  };

  var $_1_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if ((!global.__isAbstract || !global.__isAbstract(_X_[newAddress])) && _X_[newAddress] && _X_[newAddress][0] === 'Deref') {
        false;

        if (application[0][0] === 'Deref' && application[0][1][1] === _X_[newAddress][1][1]) {
          false;
          _X_[newAddress] = ['Apply', [_X_[newAddress], _X_[address]]];
        }
      }

      if (address !== newAddress) {
        _X_[address] = _X_[newAddress];
      }

      __captured__scope_1_[0] = address;
      false;
      callback(null, __captured__scope_1_[0]);
    }
  };

  var _1Z_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _1g_, _1N_, 8, 0, err, newAddress);
  };

  var _1y_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _1z_, _20_, 5, 0, err, newAddress);
  };

  var _1v_ = function (err, address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1w_(err);
    } else {
      if (global.__isAbstract && global.__isAbstract(_X_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _1c_waitForInput, _1w_);
      } else if (!true && _X_[address] && _X_[address][0] !== undefined) {
        false;
        _X_[++__captured__scope_1_[0]] = ['Abstr', [_a_[0], _X_[address]]];
        address = __captured__scope_1_[0];
      }
    }

    {
      false;
    }

    _1w_(null, address);
  };

  var _1r_ = function (err, rhsAddress) {
    if (err) {
      return _1t_(err, null);
    }

    _1f_applyOperator(_z_[0], 7, rhsAddress, _1t_);
  };

  var _N_ = function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
  };

  console.log(1);
  var _C_ = ["Identifier", "x"];
  var _A_ = ["Deref", _C_];
  var _F_ = ["Const", 1];
  var _8_ = ["Plus", _A_, _F_];
  var _6_ = ["Op", _8_];
  var _4_ = ["x", _6_];
  var _2_ = ["Abstr", _4_];
  var _p_ = ["Identifier", "_print"];
  var _n_ = ["Deref", _p_];
  var _l_ = ["_print", _n_];
  var _j_ = ["Abstr", _l_];
  var _u_ = ["Identifier", "x"];
  var _s_ = ["Deref", _u_];
  var _i_ = [_j_, _s_];
  var _g_ = ["Apply", _i_];
  var _17_ = ["Identifier", "x"];
  var _15_ = ["Deref", _17_];
  var _1A_ = ["Const", 10];
  var _13_ = ["Less", _15_, _1A_];
  var _11_ = ["Op", _13_];
  var _1I_ = ["Identifier", "f"];
  var _1G_ = ["Deref", _1I_];
  var _1Q_ = ["Identifier", "incr"];
  var _1O_ = ["Deref", _1Q_];
  var _1V_ = ["Identifier", "x"];
  var _1T_ = ["Deref", _1V_];
  var _1N_ = [_1O_, _1T_];
  var _1L_ = ["Apply", _1N_];
  var _1F_ = [_1G_, _1L_];
  var _1D_ = ["Apply", _1F_];
  var _z_ = ["And", _11_, _1D_];
  var _x_ = ["Op", _z_];
  var _e_ = ["Or", _g_, _x_];
  var _c_ = ["Op", _e_];
  var _a_ = ["x", _c_];
  var _Y_ = ["Abstr", _a_];
  var _X_ = [, 1,, _2_, _Y_, 1, void 0, true, 1];
  var _20_ = [["Deref", ["Identifier", "f"]], ["Const", 1]];
  var _1l_ = [,];
  _1l_.length = 0;
  var _1n_ = {
    incr: 3,
    f: 4,
    x: 5,
    _print: 6
  };

  _N_(_O_interpretTermLazy, _2_, {
    incr: 3
  }, [8], _P_, true);
})();