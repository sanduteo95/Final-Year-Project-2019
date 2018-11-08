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

  var _2H_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _e_interpretTerm = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
          }, global.setTimeout, _G_interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[1]--;

          global.__residual("void", _F_.bind(null), _G_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _G_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[1] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _G_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _G_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _G_interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        _K_interpretDereference(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Const':
        _L_interpretConstant(term[1], callback);

        break;

      case 'Op':
        _M_interpretOperator(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _N_interpretAbstraction(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _O_interpretApplication(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _N_interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
        if (global.__isAbstract && global.__isAbstract(_P_[address])) {
          global.__residual("void", function (waitForInput, callback) {
            waitForInput(callback);
          }, _d_waitForInput, callback);
        } else if (isAbstraction && !hasBeenBound && _P_[address] && _P_[address][0] !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          _P_[++__captured__scope_1_[0]] = ['Abstr', [abstraction[0], _P_[address]]];
          address = __captured__scope_1_[0];
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _e_interpretTerm(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _O_interpretApplication = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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
            if ((!global.__isAbstract || !global.__isAbstract(_P_[newAddress])) && _P_[newAddress] && _P_[newAddress][0] === 'Deref') {
              false;

              if (application[0][0] === 'Deref' && application[0][1][1] === _P_[newAddress][1][1]) {
                false;
                _P_[newAddress] = ['Apply', [_P_[newAddress], _P_[address]]];
              }
            } // clean up stack


            if (address !== newAddress) {
              _P_[address] = _P_[newAddress];
            }

            __captured__scope_1_[0] = address;
            false;
            callback(null, __captured__scope_1_[0]);
          }
        };

        false;

        _e_interpretTerm(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _e_interpretTerm(application[1], boundVariables, [], rhsCallback, true);
  };

  var _d_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _P_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _f_interpretIdentifier = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _P_[1] = _P_[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _P_[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _d_waitForInput(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _K_interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
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
          _P_[++__captured__scope_1_[0]] = ['Deref', dereference];
          callback(null, __captured__scope_1_[0]);
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_P_[address])) {
            // only now just wait for input
            global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
              waitForInput(function (err, address) {
                console.log(stack[address]);
                callback(err, emptyAddress);
              });
            }, _d_waitForInput, __abstract({}, 'console'), _P_, callback, 0);
          } else {
            console.log(_P_[1]);
          }

          callback(null, 0);
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_P_[address])) {
            // only place the wait for input if it's not an abstraction
            if (!isAbstraction) {
              global.__residual("void", function (waitForInput, callback) {
                waitForInput(callback);
              }, _d_waitForInput, callback);
            } else {
              // otherwise, postpone it
              _P_[++__captured__scope_1_[0]] = _P_[address];
              callback(null, __captured__scope_1_[0]);
            }
          } else {
            const newTerm = _P_[address]; // if the variable stored is an application, then interpret that

            if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _e_interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm[0] === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm[0] === 'Identifier') {
                // the variable might not be evaluated
                false;
                _P_[address] = ['Deref', _P_[address]];
              }

              _P_[++__captured__scope_1_[0]] = _P_[address];
              callback(null, __captured__scope_1_[0]);
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _f_interpretIdentifier(dereference[1], boundVariables, derefCallback);
  };

  var _L_interpretConstant = function (constant, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false; // just increment the address on the stack and assign it the constant value

    _P_[++__captured__scope_1_[0]] = constant;
    callback(null, __captured__scope_1_[0]);
  };

  var _g_applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check if both the LHS and RHS are constants

    if (_P_[lhsAddress][0] === undefined && _P_[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _P_[lhsAddress] += _P_[rhsAddress];
          break;

        case 'Minus':
          _P_[lhsAddress] -= _P_[rhsAddress];
          break;

        case 'Times':
          _P_[lhsAddress] *= _P_[rhsAddress];
          break;

        case 'Divide':
          _P_[lhsAddress] /= _P_[rhsAddress];
          break;

        case 'Modulus':
          _P_[lhsAddress] %= _P_[rhsAddress];
          break;

        case 'Eq':
          _P_[lhsAddress] = _P_[lhsAddress] == _P_[rhsAddress];
          break;

        case 'Noteq':
          _P_[lhsAddress] = _P_[lhsAddress] != _P_[rhsAddress];
          break;

        case 'Leq':
          _P_[lhsAddress] = _P_[lhsAddress] <= _P_[rhsAddress];
          break;

        case 'Less':
          _P_[lhsAddress] = _P_[lhsAddress] < _P_[rhsAddress];
          break;

        case 'Geq':
          _P_[lhsAddress] = _P_[lhsAddress] >= _P_[rhsAddress];
          break;

        case 'Greater':
          _P_[lhsAddress] = _P_[lhsAddress] > _P_[rhsAddress];
          break;

        case 'And':
          _P_[lhsAddress] = _P_[lhsAddress] && _P_[rhsAddress];
          break;

        case 'Or':
          _P_[lhsAddress] = _P_[lhsAddress] || _P_[rhsAddress];
          break;

        case 'Negate':
          _P_[lhsAddress] = !_P_[lhsAddress];
          break;

        case 'Negative':
          _P_[lhsAddress] = -_P_[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      // if any of the two is not a constant, make sure the one that is gets transformed into one
      const lhs = _P_[lhsAddress][0] !== undefined ? _P_[lhsAddress] : ['Const', _P_[lhsAddress]];
      const rhs = _P_[rhsAddress][0] !== undefined ? _P_[rhsAddress] : ['Const', _P_[rhsAddress]];
      _P_[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _M_interpretOperator = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
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

        _g_applyOperator(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _P_[lhsAddress] || operator[0] === 'And' && !_P_[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_P_[lhsAddress]) {
          _e_interpretTerm(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _e_interpretTerm(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _e_interpretTerm(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _2G_ = function (err, address) {
    _2H_(err, address > 1 && _P_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[1]--;
    false;
    callback(err, address);
  };

  var _H_ = function (err, address) {
    return $_0_factoryFunction.call(this, _a_, 0, err, address);
  };

  var _h_ = function (err, address) {
    return $_0_factoryFunction.call(this, _v_, 0, err, address);
  };

  var _w_ = function (err, address) {
    return $_0_factoryFunction.call(this, _11_, 0, err, address);
  };

  var _12_ = function (err, address) {
    return $_0_factoryFunction.call(this, _17_, 0, err, address);
  };

  var _19_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1R_, 0, err, address);
  };

  var _1S_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1b_, 0, err, address);
  };

  var _1c_ = function (err, address) {
    return $_0_factoryFunction.call(this, _26_, 0, err, address);
  };

  var _27_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2G_, 0, err, address);
  };

  var _1b_ = function (err, address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1c_(err);
    } else {
      _1d_.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _1c_(err);
        } else {
          if ((!global.__isAbstract || !global.__isAbstract(_P_[newAddress])) && _P_[newAddress] && _P_[newAddress][0] === 'Deref') {
            false;

            if (_1f_[0][0] === 'Deref' && _1f_[0][1][1] === _P_[newAddress][1][1]) {
              false;
              _P_[newAddress] = ['Apply', [_P_[newAddress], _P_[address]]];
            }
          }

          if (address !== newAddress) {
            _P_[address] = _P_[newAddress];
          }

          __captured__scope_1_[0] = address;
          false;

          _1c_(null, __captured__scope_1_[0]);
        }
      };

      false;

      _e_interpretTerm(_1f_[0], _23_, _1d_, lhsCallback, true);
    }
  };

  var $_2_factoryFunction = function (callback, abstraction, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if (global.__isAbstract && global.__isAbstract(_P_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _d_waitForInput, callback);
      } else if (!true && _P_[address] && _P_[address][0] !== undefined) {
        false;
        _P_[++__captured__scope_1_[0]] = ['Abstr', [abstraction[0], _P_[address]]];
        address = __captured__scope_1_[0];
      }
    }

    {
      false;
    }
    callback(null, address);
  };

  var _v_ = function (err, address) {
    return $_2_factoryFunction.call(this, _w_, _x_, 0, err, address);
  };

  var _11_ = function (err, address) {
    return $_2_factoryFunction.call(this, _12_, _13_, 0, err, address);
  };

  var $_1_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if ((!global.__isAbstract || !global.__isAbstract(_P_[newAddress])) && _P_[newAddress] && _P_[newAddress][0] === 'Deref') {
        false;

        if (application[0][0] === 'Deref' && application[0][1][1] === _P_[newAddress][1][1]) {
          false;
          _P_[newAddress] = ['Apply', [_P_[newAddress], _P_[address]]];
        }
      }

      if (address !== newAddress) {
        _P_[address] = _P_[newAddress];
      }

      __captured__scope_1_[0] = address;
      false;
      callback(null, __captured__scope_1_[0]);
    }
  };

  var _a_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _h_, _i_, 8, 0, err, newAddress);
  };

  var _17_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _19_, _1A_, 7, 0, err, newAddress);
  };

  var _1R_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _1S_, _1T_, 6, 0, err, newAddress);
  };

  var _26_ = function (err, newAddress) {
    return $_1_factoryFunction.call(this, _27_, _28_, 4, 0, err, newAddress);
  };

  var _F_ = function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
  };

  var _S_ = ["Identifier", "x"];
  var _Q_ = ["Deref", _S_];
  var _X_ = ["x", _Q_];
  var _V_ = ["Abstr", _X_];
  var _6_ = ["Identifier", "x"];
  var _4_ = ["Deref", _6_];
  var _2_ = ["x", _4_];
  var _0_ = ["Abstr", _2_];
  var _P_ = [,,, _Q_, _V_, _4_, _0_, 12, 12];
  var _B_ = [8,,];
  _B_.length = 1;
  var _1t_ = ["Identifier", "y"];
  var _1r_ = ["Deref", _1t_];
  var _1y_ = ["Identifier", "x"];
  var _1w_ = ["Deref", _1y_];
  var _1q_ = [_1r_, _1w_];
  var _1o_ = ["Apply", _1q_];
  var _1m_ = ["y", _1o_];
  var _1k_ = ["Abstr", _1m_];
  var _1i_ = ["x", _1k_];
  var _1g_ = ["Abstr", _1i_];
  var _l_ = ["Identifier", "y"];
  var _j_ = ["Deref", _l_];
  var _q_ = ["Identifier", "x"];
  var _o_ = ["Deref", _q_];
  var _i_ = [_j_, _o_];
  var _z_ = ["Apply", _i_];
  var _x_ = ["y", _z_];
  var _15_ = ["Abstr", _x_];
  var _13_ = ["x", _15_];
  var _1B_ = ["Abstr", _13_];
  var _1M_ = ["Identifier", "x"];
  var _1K_ = ["Deref", _1M_];
  var _1I_ = ["x", _1K_];
  var _1G_ = ["Abstr", _1I_];
  var _1P_ = ["Const", 12];
  var _1F_ = [_1G_, _1P_];
  var _1D_ = ["Apply", _1F_];
  var _1A_ = [_1B_, _1D_];
  var _1U_ = ["Apply", _1A_];
  var _1Z_ = ["Deref", _6_];
  var _1Y_ = ["x", _1Z_];
  var _1W_ = ["Abstr", _1Y_];
  var _1T_ = [_1U_, _1W_];
  var _21_ = ["Apply", _1T_];
  var _1f_ = [_1g_, _21_];
  var _28_ = [["Apply", _1f_], ["Abstr", ["x", ["Deref", _S_]]]];
  var _1d_ = [4];
  var _23_ = {
    _print: {
      address: 1
    },
    _read: {
      address: 2
    },
    x: 7,
    y: 6
  };

  _F_(_G_interpretTermLazy, _0_, {
    y: 6
  }, _B_, _H_, true);
})();