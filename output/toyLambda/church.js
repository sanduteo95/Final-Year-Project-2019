(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [9, 8];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _3q_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _3o_interpretLambda = function (lambda, boundVariables, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const lambdaCallback = function (value) {
      _O_[++__captured__scope_1_[0]] = value;
      boundVariables[lambda[1]] = __captured__scope_1_[0];

      _3o_interpretLambda(lambda[3], boundVariables, callback);
    }; // check first if there are any global variables


    if (lambda[0] === 'Def') {
      // only interpret the definition if it is an application or operator
      if (lambda[2][0] === 'Apply' || lambda[2][0] === 'Operator') {
        false;

        _1f_interpretTerm(lambda[2], boundVariables, [], function (err, address) {
          lambdaCallback(_O_[address]);
        }, true);
      } else {
        lambdaCallback(lambda[2]);
      }
    } else if (lambda[0] === 'RecDef') {
      lambdaCallback(lambda[2]);
    } else {
      // interpret the lambda term
      _1f_interpretTerm(lambda, boundVariables, [], callback, true);
    }
  };

  var _1f_interpretTerm = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
          }, global.setTimeout, _D_interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[1]--;

          global.__residual("void", _C_.bind(null), _D_interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _D_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[1] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _D_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _D_interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _D_interpretTermLazy = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        _J_interpretDereference(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Const':
        _K_interpretConstant(term[1], callback);

        break;

      case 'Op':
        _L_interpretOperator(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _M_interpretAbstraction(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _N_interpretApplication(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _M_interpretAbstraction = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
        if (global.__isAbstract && global.__isAbstract(_O_[address])) {
          global.__residual("void", function (waitForInput, callback) {
            waitForInput(callback);
          }, _1h_waitForInput, callback);
        } else if (isAbstraction && !hasBeenBound && _O_[address] && _O_[address][0] !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          _O_[++__captured__scope_1_[0]] = ['Abstr', [abstraction[0], _O_[address]]];
          address = __captured__scope_1_[0];
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _1f_interpretTerm(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _N_interpretApplication = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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
            if ((!global.__isAbstract || !global.__isAbstract(_O_[newAddress])) && _O_[newAddress] && _O_[newAddress][0] === 'Deref') {
              false;

              if (application[0][0] === 'Deref' && application[0][1][1] === _O_[newAddress][1][1]) {
                false;
                _O_[newAddress] = ['Apply', [_O_[newAddress], _O_[address]]];
              }
            } // clean up stack


            if (address !== newAddress) {
              _O_[address] = _O_[newAddress];
            }

            __captured__scope_1_[0] = address;
            false;
            callback(null, __captured__scope_1_[0]);
          }
        };

        false;

        _1f_interpretTerm(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1f_interpretTerm(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1h_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _O_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _1i_interpretIdentifier = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _O_[1] = _O_[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _O_[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _1h_waitForInput(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _J_interpretDereference = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
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
          _O_[++__captured__scope_1_[0]] = ['Deref', dereference];
          callback(null, __captured__scope_1_[0]);
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_O_[address])) {
            // only now just wait for input
            global.__residual("void", function (waitForInput, console, stack, callback, emptyAddress) {
              waitForInput(function (err, address) {
                console.log(stack[address]);
                callback(err, emptyAddress);
              });
            }, _1h_waitForInput, __abstract({}, 'console'), _O_, callback, 0);
          } else {
            console.log(_O_[1]);
          }

          callback(null, 0);
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_O_[address])) {
            // only place the wait for input if it's not an abstraction
            if (!isAbstraction) {
              global.__residual("void", function (waitForInput, callback) {
                waitForInput(callback);
              }, _1h_waitForInput, callback);
            } else {
              // otherwise, postpone it
              _O_[++__captured__scope_1_[0]] = _O_[address];
              callback(null, __captured__scope_1_[0]);
            }
          } else {
            const newTerm = _O_[address]; // if the variable stored is an application, then interpret that

            if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _1f_interpretTerm(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm[0] === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm[0] === 'Identifier') {
                // the variable might not be evaluated
                false;
                _O_[address] = ['Deref', _O_[address]];
              }

              _O_[++__captured__scope_1_[0]] = _O_[address];
              callback(null, __captured__scope_1_[0]);
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1i_interpretIdentifier(dereference[1], boundVariables, derefCallback);
  };

  var _K_interpretConstant = function (constant, callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false; // just increment the address on the stack and assign it the constant value

    _O_[++__captured__scope_1_[0]] = constant;
    callback(null, __captured__scope_1_[0]);
  };

  var _1j_applyOperator = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check if both the LHS and RHS are constants

    if (_O_[lhsAddress][0] === undefined && _O_[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _O_[lhsAddress] += _O_[rhsAddress];
          break;

        case 'Minus':
          _O_[lhsAddress] -= _O_[rhsAddress];
          break;

        case 'Times':
          _O_[lhsAddress] *= _O_[rhsAddress];
          break;

        case 'Divide':
          _O_[lhsAddress] /= _O_[rhsAddress];
          break;

        case 'Modulus':
          _O_[lhsAddress] %= _O_[rhsAddress];
          break;

        case 'Eq':
          _O_[lhsAddress] = _O_[lhsAddress] == _O_[rhsAddress];
          break;

        case 'Noteq':
          _O_[lhsAddress] = _O_[lhsAddress] != _O_[rhsAddress];
          break;

        case 'Leq':
          _O_[lhsAddress] = _O_[lhsAddress] <= _O_[rhsAddress];
          break;

        case 'Less':
          _O_[lhsAddress] = _O_[lhsAddress] < _O_[rhsAddress];
          break;

        case 'Geq':
          _O_[lhsAddress] = _O_[lhsAddress] >= _O_[rhsAddress];
          break;

        case 'Greater':
          _O_[lhsAddress] = _O_[lhsAddress] > _O_[rhsAddress];
          break;

        case 'And':
          _O_[lhsAddress] = _O_[lhsAddress] && _O_[rhsAddress];
          break;

        case 'Or':
          _O_[lhsAddress] = _O_[lhsAddress] || _O_[rhsAddress];
          break;

        case 'Negate':
          _O_[lhsAddress] = !_O_[lhsAddress];
          break;

        case 'Negative':
          _O_[lhsAddress] = -_O_[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      // if any of the two is not a constant, make sure the one that is gets transformed into one
      const lhs = _O_[lhsAddress][0] !== undefined ? _O_[lhsAddress] : ['Const', _O_[lhsAddress]];
      const rhs = _O_[rhsAddress][0] !== undefined ? _O_[rhsAddress] : ['Const', _O_[rhsAddress]];
      _O_[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _L_interpretOperator = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
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

        _1j_applyOperator(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _O_[lhsAddress] || operator[0] === 'And' && !_O_[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_O_[lhsAddress]) {
          _1f_interpretTerm(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _1f_interpretTerm(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _1f_interpretTerm(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _3p_ = function (err, address) {
    _3q_(err, address > 1 && _O_[address]);
  };

  var _2C_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _O_[++__captured__scope_1_[0]] = value;
    _2D_[_2G_[1]] = __captured__scope_1_[0];

    _3o_interpretLambda(_2G_[3], _2D_, _3p_);
  };

  var _2B_ = function (err, address) {
    _2C_(_O_[address]);
  };

  var $_1_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[1]--;
    false;
    callback(err, address);
  };

  var _G_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1g_, 0, err, address);
  };

  var _1m_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1n_, 0, err, address);
  };

  var _1o_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1r_, 0, err, address);
  };

  var _1s_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1t_, 0, err, address);
  };

  var _1u_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1v_, 0, err, address);
  };

  var _1w_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1x_, 0, err, address);
  };

  var _1x_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1y_, 0, err, address);
  };

  var _1z_ = function (err, address) {
    return $_1_factoryFunction.call(this, _2B_, 0, err, address);
  };

  var $_0_factoryFunction = function (callback, addressesToBind, application, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      addressesToBind.push(address);
      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          callback(err);
        } else {
          if ((!global.__isAbstract || !global.__isAbstract(_O_[newAddress])) && _O_[newAddress] && _O_[newAddress][0] === 'Deref') {
            false;

            if (application[0][0] === 'Deref' && application[0][1][1] === _O_[newAddress][1][1]) {
              false;
              _O_[newAddress] = ['Apply', [_O_[newAddress], _O_[address]]];
            }
          }

          if (address !== newAddress) {
            _O_[address] = _O_[newAddress];
          }

          __captured__scope_1_[0] = address;
          false;
          callback(null, __captured__scope_1_[0]);
        }
      };

      false;

      _1f_interpretTerm(application[0], _5_, addressesToBind, lhsCallback, true);
    }
  };

  var _E_ = function (err, address) {
    return $_0_factoryFunction.call(this, _G_, _H_, _1H_, 0, err, address);
  };

  var _1n_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1o_, _1p_, _16_, 0, err, address);
  };

  var $_3_factoryFunction = function (callback, hasBeenBound, abstraction, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if (global.__isAbstract && global.__isAbstract(_O_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _1h_waitForInput, callback);
      } else if (!hasBeenBound && _O_[address] && _O_[address][0] !== undefined) {
        false;
        _O_[++__captured__scope_1_[0]] = ['Abstr', [abstraction[0], _O_[address]]];
        address = __captured__scope_1_[0];
      }
    }

    if (hasBeenBound) {
      false;
    }

    callback(null, address);
  };

  var _1r_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1s_, false, _12_, 0, err, address);
  };

  var _1t_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1u_, false, _y_, 0, err, address);
  };

  var _1v_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1w_, true, _u_, 0, err, address);
  };

  var $_2_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      if ((!global.__isAbstract || !global.__isAbstract(_O_[newAddress])) && _O_[newAddress] && _O_[newAddress][0] === 'Deref') {
        false;

        if (application[0][0] === 'Deref' && application[0][1][1] === _O_[newAddress][1][1]) {
          false;
          _O_[newAddress] = ['Apply', [_O_[newAddress], _O_[address]]];
        }
      }

      if (address !== newAddress) {
        _O_[address] = _O_[newAddress];
      }

      __captured__scope_1_[0] = address;
      false;
      callback(null, __captured__scope_1_[0]);
    }
  };

  var _1g_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _1m_, _1E_, 9, 0, err, newAddress);
  };

  var _1y_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _1z_, _20_, 8, 0, err, newAddress);
  };

  var _C_ = function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
  };

  var _Z_ = ["Identifier", "z"];
  var _X_ = ["Deref", _Z_];
  var _c_ = ["Const", 1];
  var _V_ = ["Plus", _X_, _c_];
  var _T_ = ["Op", _V_];
  var _R_ = ["z", _T_];
  var _P_ = ["Abstr", _R_];
  var _p_ = ["Identifier", "y"];
  var _n_ = ["Deref", _p_];
  var _l_ = ["y", _n_];
  var _j_ = ["Abstr", _l_];
  var _h_ = ["f", _j_];
  var _f_ = ["Abstr", _h_];
  var _19_ = ["Identifier", "f"];
  var _17_ = ["Deref", _19_];
  var _1K_ = ["Identifier", "n"];
  var _1I_ = ["Deref", _1K_];
  var _2_ = ["Identifier", "f"];
  var _0_ = ["Deref", _2_];
  var _1H_ = [_1I_, _0_];
  var _1F_ = ["Apply", _1H_];
  var _1P_ = ["Identifier", "x"];
  var _1N_ = ["Deref", _1P_];
  var _1E_ = [_1F_, _1N_];
  var _1C_ = ["Apply", _1E_];
  var _16_ = [_17_, _1C_];
  var _14_ = ["Apply", _16_];
  var _12_ = ["x", _14_];
  var _10_ = ["Abstr", _12_];
  var _y_ = ["f", _10_];
  var _w_ = ["Abstr", _y_];
  var _u_ = ["n", _w_];
  var _s_ = ["Abstr", _u_];
  var _1S_ = ["Deref", _p_];
  var _1W_ = ["y", _1S_];
  var _1U_ = ["Abstr", _1W_];
  var _1Z_ = ["f", _1U_];
  var _1X_ = ["Abstr", _1Z_];
  var _1a_ = ["Deref", _1P_];
  var _O_ = [,,, _P_, _f_, _s_, _1S_, _1U_, _1X_, _1a_];
  var _5_ = {
    inc: 3,
    zero: 4,
    next: 5,
    n: 8
  };
  var _2D_ = {
    _print: {
      address: 1
    },
    _read: {
      address: 2
    },
    inc: 3,
    zero: 4,
    next: 5
  };
  var _23_ = ["Identifier", "next"];
  var _21_ = ["Deref", _23_];
  var _28_ = ["Identifier", "zero"];
  var _26_ = ["Deref", _28_];
  var _20_ = [_21_, _26_];
  var _2G_ = ["Def", "one", ["Apply", _20_], ["Def", "add", ["Abstr", ["m", ["Abstr", ["n", ["Abstr", ["f", ["Abstr", ["x", ["Apply", [["Apply", [["Apply", [["Apply", [["Deref", ["Identifier", "m"]], ["Deref", ["Identifier", "next"]]]], ["Deref", ["Identifier", "n"]]]], ["Deref", ["Identifier", "f"]]]], ["Deref", ["Identifier", "x"]]]]]]]]]]]], ["Apply", [["Apply", [["Apply", [["Apply", [["Deref", ["Identifier", "add"]], ["Deref", ["Identifier", "one"]]]], ["Deref", ["Identifier", "one"]]]], ["Deref", ["Identifier", "inc"]]]], ["Const", 0]]]]];
  var _1p_ = [,];
  _1p_.length = 0;
  var _H_ = [9];

  _C_(_D_interpretTermLazy, _0_, _5_, [], _E_, true);
})();