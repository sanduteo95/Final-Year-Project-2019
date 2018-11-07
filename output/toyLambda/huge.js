(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [9, 8];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _2I = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _X = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // increase number of term calls
    __captured__scope_1[1]++;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1[1]--;
      false;
      callback(err, address);
    };

    if (global.__residual) {
      // if we're in pepack, and we've reached its maximum nubmer of calls
      if (__captured__scope_1[1] > 75 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1[1] > 75) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
            }, 100);
          }, global.setTimeout, _H, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1[1]--;

          global.__residual("void", _G.bind(null), _H, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _H(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1[1] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _H(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _H(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _H = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        // a dereference could return an abstraction or application, so we can try to evaluate that
        _W(term[1], boundVariables, function (err, address) {
          if (!err) {
            // this could refer to unknown input (for now just reading)
            if (global.__residual && global.__isAbstract(_K[address])) {
              callback(null, address);
            } else {
              const newTerm = _K[address]; // if the variable stored an abstraction or application, then interpret that

              if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
                false; // filter out variables that were defined after the current identifier

                let scopedBoundVariables = {};
                Object.keys(boundVariables).forEach(function (variable) {
                  if (boundVariables[variable] <= address) {
                    scopedBoundVariables[variable] = boundVariables[variable];
                  }
                });

                _X(newTerm, scopedBoundVariables, addressesToBind, callback, true);
              } else {
                false;

                if (newTerm && newTerm[0] === 'Identifier') {
                  // the variable might not be evaluated
                  false;
                  _K[address] = ['Deref', _K[address]];
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
        _Y(term[1], callback);

        break;

      case 'Op':
        _Z(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _a(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _b(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _a = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
      } else if (isAbstraction && !hasBeenBound && _K[address] && _K[address][0] !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

        _K[++__captured__scope_1[0]] = ['Abstr', [abstraction[0], _K[address]]];
        address = __captured__scope_1[0];
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _X(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _b = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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

            if (_K[newAddress] && (_K[newAddress][0] === 'Deref' && _K[newAddress][0] === application[0][0] && _K[newAddress][1][1] === application[0][1][1] || _K[newAddress][0] === 'Abstr' && _K[newAddress][0] === application[0][0] && _K[newAddress][1] === application[0][1])) {
              false;
              _K[newAddress] = ['Apply', [_K[newAddress], _K[address]]];
            } // clean up stack


            if (address !== newAddress) {
              _K[address] = _K[newAddress];
            }

            __captured__scope_1[0] = address;
            false;
            callback(null, __captured__scope_1[0]);
          }
        };

        false;

        _X(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _X(application[1], boundVariables, [], rhsCallback, true);
  };

  var _w = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _K[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _h = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _K[1] = _K[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _K[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _w(callback);
      }
    } else {
      // first check check if the value is unkown and it isn't an application, for prepack (for now only input)
      if (global.__residual && global.__isAbstract(_K[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _w, callback);
      } else {
        callback(null, address);
      }
    }
  };

  var _W = function (dereference, boundVariables, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // get address of the identifier on the stack


    _h(dereference[1], boundVariables, function (err, address) {
      // the only error at this point would be from an undefined variable
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          _K[++__captured__scope_1[0]] = dereference;
          callback(null, __captured__scope_1[0]);
        }
      } else {
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_K[address])) {
            global.__residual("void", function (stack, printAddress) {
              console.log(stack[printAddress]);
            }, _K, 1);
          } else {
            console.log(_K[1]);
            callback(err, 0);
          }
        } else {
          // increase the stack address and store the value of the identifier there
          _K[++__captured__scope_1[0]] = _K[address];
          callback(err, __captured__scope_1[0]);
        }
      }
    }, isAbstraction);
  };

  var _Y = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false; // just increment the address on the stack and assign it the constant value

    _K[++__captured__scope_1[0]] = constant;
    callback(null, __captured__scope_1[0]);
  };

  var _i = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check for undefined because we can have print

    if (_K[lhsAddress][0] === undefined && _K[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _K[lhsAddress] += _K[rhsAddress];
          break;

        case 'Minus':
          _K[lhsAddress] -= _K[rhsAddress];
          break;

        case 'Times':
          _K[lhsAddress] *= _K[rhsAddress];
          break;

        case 'Divide':
          _K[lhsAddress] /= _K[rhsAddress];
          break;

        case 'Modulus':
          _K[lhsAddress] %= _K[rhsAddress];
          break;

        case 'Eq':
          _K[lhsAddress] = _K[lhsAddress] == _K[rhsAddress];
          break;

        case 'Noteq':
          _K[lhsAddress] = _K[lhsAddress] != _K[rhsAddress];
          break;

        case 'Leq':
          _K[lhsAddress] = _K[lhsAddress] <= _K[rhsAddress];
          break;

        case 'Less':
          _K[lhsAddress] = _K[lhsAddress] < _K[rhsAddress];
          break;

        case 'Geq':
          _K[lhsAddress] = _K[lhsAddress] >= _K[rhsAddress];
          break;

        case 'Greater':
          _K[lhsAddress] = _K[lhsAddress] > _K[rhsAddress];
          break;

        case 'And':
          _K[lhsAddress] = _K[lhsAddress] && _K[rhsAddress];
          break;

        case 'Or':
          _K[lhsAddress] = _K[lhsAddress] || _K[rhsAddress];
          break;

        case 'Negate':
          _K[lhsAddress] = !_K[lhsAddress];
          break;

        case 'Negative':
          _K[lhsAddress] = -_K[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      const lhs = _K[lhsAddress][0] !== undefined ? _K[lhsAddress] : ['Const', _K[lhsAddress]];
      const rhs = _K[rhsAddress][0] !== undefined ? _K[rhsAddress] : ['Const', _K[rhsAddress]];
      _K[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _Z = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1[0] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _i(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _K[lhsAddress] || operator[0] === 'And' && !_K[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_K[lhsAddress]) {
          _X(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _X(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _X(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _2H = function (err, address) {
    false;

    _2I(err, address > 1 && _K[address]);
  };

  var $_0 = function (callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    __captured__scope_1[1]--;
    false;
    callback(err, address);
  };

  var _I = function (err, address) {
    return $_0.call(this, _c, 0, err, address);
  };

  var _j = function (err, address) {
    return $_0.call(this, _x, 0, err, address);
  };

  var _y = function (err, address) {
    return $_0.call(this, _13, 0, err, address);
  };

  var _14 = function (err, address) {
    return $_0.call(this, _19, 0, err, address);
  };

  var _1A = function (err, address) {
    return $_0.call(this, _1S, 0, err, address);
  };

  var _1T = function (err, address) {
    return $_0.call(this, _1c, 0, err, address);
  };

  var _1d = function (err, address) {
    return $_0.call(this, _27, 0, err, address);
  };

  var _28 = function (err, address) {
    return $_0.call(this, _2H, 0, err, address);
  };

  var _1c = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _1d(err);
    } else {
      _1e.push(address);

      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          _1d(err);
        } else {
          false;

          if (_K[newAddress] && (_K[newAddress][0] === 'Deref' && _K[newAddress][0] === _1g[0][0] && _K[newAddress][1][1] === _1g[0][1][1] || _K[newAddress][0] === 'Abstr' && _K[newAddress][0] === _1g[0][0] && _K[newAddress][1] === _1g[0][1])) {
            false;
            _K[newAddress] = ['Apply', [_K[newAddress], _K[address]]];
          }

          if (address !== newAddress) {
            _K[address] = _K[newAddress];
          }

          __captured__scope_1[0] = address;
          false;

          _1d(null, __captured__scope_1[0]);
        }
      };

      false;

      _X(_1g[0], _24, _1e, lhsCallback, true);
    }
  };

  var $_2 = function (callback, abstraction, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err);
    } else if (!true && _K[address] && _K[address][0] !== undefined) {
      false;
      _K[++__captured__scope_1[0]] = ['Abstr', [abstraction[0], _K[address]]];
      address = __captured__scope_1[0];
    }

    {
      false;
    }
    callback(null, address);
  };

  var _x = function (err, address) {
    return $_2.call(this, _y, _z, 0, err, address);
  };

  var _13 = function (err, address) {
    return $_2.call(this, _14, _15, 0, err, address);
  };

  var $_1 = function (callback, application, address, __scope_1, err, newAddress) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err);
    } else {
      false;

      if (_K[newAddress] && (_K[newAddress][0] === 'Deref' && _K[newAddress][0] === application[0][0] && _K[newAddress][1][1] === application[0][1][1] || _K[newAddress][0] === 'Abstr' && _K[newAddress][0] === application[0][0] && _K[newAddress][1] === application[0][1])) {
        false;
        _K[newAddress] = ['Apply', [_K[newAddress], _K[address]]];
      }

      if (address !== newAddress) {
        _K[address] = _K[newAddress];
      }

      __captured__scope_1[0] = address;
      false;
      callback(null, __captured__scope_1[0]);
    }
  };

  var _c = function (err, newAddress) {
    return $_1.call(this, _j, _k, 8, 0, err, newAddress);
  };

  var _19 = function (err, newAddress) {
    return $_1.call(this, _1A, _1B, 7, 0, err, newAddress);
  };

  var _1S = function (err, newAddress) {
    return $_1.call(this, _1T, _1U, 6, 0, err, newAddress);
  };

  var _27 = function (err, newAddress) {
    return $_1.call(this, _28, _29, 4, 0, err, newAddress);
  };

  var _G = function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
  };

  var _N = ["Identifier", "x"];
  var _L = ["Deref", _N];
  var _S = ["x", _L];
  var _Q = ["Abstr", _S];
  var _6 = ["Identifier", "x"];
  var _4 = ["Deref", _6];
  var _2 = ["x", _4];
  var _0 = ["Abstr", _2];
  var _K = [,,, _L, _Q, _4, _0, 12, 12, _0];
  var _C = [8,,];
  _C.length = 1;
  var _1u = ["Identifier", "y"];
  var _1s = ["Deref", _1u];
  var _1z = ["Identifier", "x"];
  var _1x = ["Deref", _1z];
  var _1r = [_1s, _1x];
  var _1p = ["Apply", _1r];
  var _1n = ["y", _1p];
  var _1l = ["Abstr", _1n];
  var _1j = ["x", _1l];
  var _1h = ["Abstr", _1j];
  var _n = ["Identifier", "y"];
  var _l = ["Deref", _n];
  var _s = ["Identifier", "x"];
  var _q = ["Deref", _s];
  var _k = [_l, _q];
  var _11 = ["Apply", _k];
  var _z = ["y", _11];
  var _17 = ["Abstr", _z];
  var _15 = ["x", _17];
  var _1C = ["Abstr", _15];
  var _1N = ["Identifier", "x"];
  var _1L = ["Deref", _1N];
  var _1J = ["x", _1L];
  var _1H = ["Abstr", _1J];
  var _1Q = ["Const", 12];
  var _1G = [_1H, _1Q];
  var _1E = ["Apply", _1G];
  var _1B = [_1C, _1E];
  var _1V = ["Apply", _1B];
  var _1a = ["Deref", _6];
  var _1Z = ["x", _1a];
  var _1X = ["Abstr", _1Z];
  var _1U = [_1V, _1X];
  var _22 = ["Apply", _1U];
  var _1g = [_1h, _22];
  var _29 = [["Apply", _1g], ["Abstr", ["x", ["Deref", _N]]]];
  var _1e = [4];
  var _24 = {
    _print: {
      address: 1
    },
    _read: {
      address: 2
    },
    x: 7,
    y: 6
  };

  _G(_H, _0, {
    x: 7,
    y: 6
  }, _C, _I, true);
})();