(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [4, 3];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _12 = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _N = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // increase number of term calls
    __captured__scope_1[0]++;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1[0]--;
      false;
      callback(err, address);
    };

    if (global.__residual) {
      // if we're in pepack, and we've reached its maximum nubmer of calls
      if (__captured__scope_1[0] > 75 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1[0] > 75) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
            }, 100);
          }, global.setTimeout, _T, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1[0]--;

          global.__residual("void", function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
            interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
          }, _T, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _T(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1[0] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _T(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _T(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _T = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        // a dereference could return an abstraction or application, so we can try to evaluate that
        _f(term[1], boundVariables, function (err, address) {
          if (!err) {
            // this could refer to unknown input (for now just reading)
            if (global.__residual && global.__isAbstract(_3[address])) {
              callback(null, address);
            } else {
              const newTerm = _3[address]; // if the variable stored an abstraction or application, then interpret that

              if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
                false; // filter out variables that were defined after the current identifier

                let scopedBoundVariables = {};
                Object.keys(boundVariables).forEach(function (variable) {
                  if (boundVariables[variable] <= address) {
                    scopedBoundVariables[variable] = boundVariables[variable];
                  }
                });

                _N(newTerm, scopedBoundVariables, addressesToBind, callback, true);
              } else {
                false;

                if (newTerm && newTerm[0] === 'Identifier') {
                  // the variable might not be evaluated
                  false;
                  _3[address] = ['Deref', _3[address]];
                }

                callback(null, address);
              }
            }
          } else {
            callback(err);
          }
        }, isAbstraction);

        break;

      case 'Const':
        _g(term[1], callback);

        break;

      case 'Op':
        _h(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _i(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _j(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _i = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      hasBeenBound = true;
      boundVariables[abstraction[0]] = addressesToBind.pop();
      false;
    }

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else if (isAbstraction && !hasBeenBound && _3[address] && _3[address][0] !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

        _3[++__captured__scope_1[1]] = ['Abstr', [abstraction[0], _3[address]]];
        address = __captured__scope_1[1];
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _N(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _j = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

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
            false; // first check that we don't need to keep the application

            if (_3[newAddress] && (_3[newAddress][0] === 'Deref' && _3[newAddress][0] === application[0][0] && _3[newAddress][1][1] === application[0][1][1] || _3[newAddress][0] === 'Abstr' && _3[newAddress][0] === application[0][0] && _3[newAddress][1] === application[0][1])) {
              false;
              _3[newAddress] = ['Apply', [_3[newAddress], _3[address]]];
            } // clean up stack


            if (address !== newAddress) {
              _3[address] = _3[newAddress];
            }

            __captured__scope_1[1] = address;
            false;
            callback(null, __captured__scope_1[1]);
          }
        };

        false;

        _N(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _N(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1 = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _3[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _p = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _3[1] = _3[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _3[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _1(callback);
      }
    } else {
      // first check check if the value is unkown and it isn't an application, for prepack (for now only input)
      if (global.__residual && global.__isAbstract(_3[address])) {
        global.__residual("void", _0.bind(null), _1, callback);
      } else {
        callback(null, address);
      }
    }
  };

  var _f = function (dereference, boundVariables, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // get address of the identifier on the stack


    _p(dereference[1], boundVariables, function (err, address) {
      // the only error at this point would be from an undefined variable
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          _3[++__captured__scope_1[1]] = dereference;
          callback(null, __captured__scope_1[1]);
        }
      } else {
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_3[address])) {
            global.__residual("void", function (stack, printAddress) {
              console.log(stack[printAddress]);
            }, _3, 1);
          } else {
            console.log(_3[1]);
            callback(err, 0);
          }
        } else {
          // increase the stack address and store the value of the identifier there
          _3[++__captured__scope_1[1]] = _3[address];
          callback(err, __captured__scope_1[1]);
        }
      }
    }, isAbstraction);
  };

  var _g = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false; // just increment the address on the stack and assign it the constant value

    _3[++__captured__scope_1[1]] = constant;
    callback(null, __captured__scope_1[1]);
  };

  var _q = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check for undefined because we can have print

    if (_3[lhsAddress][0] === undefined && _3[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _3[lhsAddress] += _3[rhsAddress];
          break;

        case 'Minus':
          _3[lhsAddress] -= _3[rhsAddress];
          break;

        case 'Times':
          _3[lhsAddress] *= _3[rhsAddress];
          break;

        case 'Divide':
          _3[lhsAddress] /= _3[rhsAddress];
          break;

        case 'Modulus':
          _3[lhsAddress] %= _3[rhsAddress];
          break;

        case 'Eq':
          _3[lhsAddress] = _3[lhsAddress] == _3[rhsAddress];
          break;

        case 'Noteq':
          _3[lhsAddress] = _3[lhsAddress] != _3[rhsAddress];
          break;

        case 'Leq':
          _3[lhsAddress] = _3[lhsAddress] <= _3[rhsAddress];
          break;

        case 'Less':
          _3[lhsAddress] = _3[lhsAddress] < _3[rhsAddress];
          break;

        case 'Geq':
          _3[lhsAddress] = _3[lhsAddress] >= _3[rhsAddress];
          break;

        case 'Greater':
          _3[lhsAddress] = _3[lhsAddress] > _3[rhsAddress];
          break;

        case 'And':
          _3[lhsAddress] = _3[lhsAddress] && _3[rhsAddress];
          break;

        case 'Or':
          _3[lhsAddress] = _3[lhsAddress] || _3[rhsAddress];
          break;

        case 'Negate':
          _3[lhsAddress] = !_3[lhsAddress];
          break;

        case 'Negative':
          _3[lhsAddress] = -_3[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      const lhs = _3[lhsAddress][0] !== undefined ? _3[lhsAddress] : ['Const', _3[lhsAddress]];
      const rhs = _3[rhsAddress][0] !== undefined ? _3[rhsAddress] : ['Const', _3[rhsAddress]];
      _3[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _h = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1[1] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _q(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _3[lhsAddress] || operator[0] === 'And' && !_3[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_3[lhsAddress]) {
          _N(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _N(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _N(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _11 = function (err, address) {
    false;

    _12(err, address > 1 && _3[address]);
  };

  var $_0 = function (callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    __captured__scope_1[0]--;
    false;
    callback(err, address);
  };

  var _E = function (err, address) {
    return $_0.call(this, _O, 0, err, address);
  };

  var _Q = function (err, address) {
    return $_0.call(this, _e, 0, err, address);
  };

  var _k = function (err, address) {
    return $_0.call(this, _r, 0, err, address);
  };

  var _s = function (err, address) {
    return $_0.call(this, _11, 0, err, address);
  };

  var _O = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _Q(err);
    } else {
      _R.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _Q(err);
        } else {
          false;

          if (_3[newAddress] && (_3[newAddress][0] === 'Deref' && _3[newAddress][0] === _U[0][0] && _3[newAddress][1][1] === _U[0][1][1] || _3[newAddress][0] === 'Abstr' && _3[newAddress][0] === _U[0][0] && _3[newAddress][1] === _U[0][1])) {
            false;
            _3[newAddress] = ['Apply', [_3[newAddress], _3[address]]];
          }

          if (address !== newAddress) {
            _3[address] = _3[newAddress];
          }

          __captured__scope_1[1] = address;
          false;

          _Q(null, __captured__scope_1[1]);
        }
      };

      false;

      _N(_U[0], _I, _R, lhsCallback, true);
    }
  };

  var _D = function (err, address) {
    if (!err) {
      if (global.__residual && global.__isAbstract(_3[address])) {
        _E(null, address);
      } else {
        const newTerm = _3[address];

        if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
          false;
          let scopedBoundVariables = {};
          Object.keys(_I).forEach(function (variable) {
            if (_I[variable] <= address) {
              scopedBoundVariables[variable] = _I[variable];
            }
          });

          _N(newTerm, scopedBoundVariables, _L, _E, true);
        } else {
          false;

          if (newTerm && newTerm[0] === 'Identifier') {
            false;
            _3[address] = ['Deref', _3[address]];
          }

          _E(null, address);
        }
      }
    } else {
      _E(err);
    }
  };

  var _2 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      if (!true) {
        _D(err);
      } else {
        _3[++__captured__scope_1[1]] = _8;

        _D(null, __captured__scope_1[1]);
      }
    } else {
      if (address === 1) {
        if (global.__residual && global.__isAbstract(_3[address])) {
          global.__residual("void", function (stack, printAddress) {
            console.log(stack[printAddress]);
          }, _3, 1);
        } else {
          console.log(_3[1]);

          _D(err, 0);
        }
      } else {
        _3[++__captured__scope_1[1]] = _3[address];

        _D(err, __captured__scope_1[1]);
      }
    }
  };

  var _r = function (err, newAddress) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _s(err);
    } else {
      false;

      if (_3[newAddress] && (_3[newAddress][0] === 'Deref' && _3[newAddress][0] === _t[0][0] && _3[newAddress][1][1] === _t[0][1][1] || _3[newAddress][0] === 'Abstr' && _3[newAddress][0] === _t[0][0] && _3[newAddress][1] === _t[0][1])) {
        false;
        _3[newAddress] = ['Apply', [_3[newAddress], _3[3]]];
      }

      if (3 !== newAddress) {
        _3[3] = _3[newAddress];
      }

      __captured__scope_1[1] = 3;
      false;

      _s(null, __captured__scope_1[1]);
    }
  };

  var _e = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _k(err);
    } else if (!true && _3[address] && _3[address][0] !== undefined) {
      false;
      _3[++__captured__scope_1[1]] = ['Abstr', [_l[0], _3[address]]];
      address = __captured__scope_1[1];
    }

    {
      false;
    }

    _k(null, address);
  };

  var _0 = function (waitForInput, callback) {
    waitForInput(callback);
  };

  var _4 = ["Deref", ["Identifier", "_read"]];
  var _3 = [,, _4, _4];
  var _b = ["Identifier", "_print"];
  var _Z = ["Deref", _b];
  var _X = ["_print", _Z];
  var _V = ["Abstr", _X];
  var _8 = ["Identifier", "x"];
  var _G = ["Deref", _8];
  var _U = [_V, _G];
  var _n = ["Apply", _U];
  var _l = ["x", _n];
  var _t = [["Abstr", _l], ["Deref", ["Identifier", "_read"]]];
  var _R = [,];
  _R.length = 0;
  var _J = {
    address: 1
  };
  var _K = {
    address: 2
  };
  var _I = {
    _print: _J,
    _read: _K,
    x: 3
  };
  var _L = [];

  _0(_1, _2);
})();