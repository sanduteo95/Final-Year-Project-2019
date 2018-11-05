(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [30, 11];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _2E = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _1h = function (term, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    __captured__scope_1[0]++; // add a timeout to preserve the node stack

    const termCallback = function (err, address) {
      if (global.__residual && __captured__scope_1[0] > 30) {
        __captured__scope_1[0]--;

        __assumeDataProperty(global, 'setTimeout', function (cb, time) {
          setTimeout(cb, time);
        });

        __residual("void", _5.bind(null), global.setTimeout, callback, err, address, 1000);
      } else {
        callback(err, address);
      }
    };

    switch (term[0]) {
      case 'Deref':
        _1k(term[1], boundVariables, termCallback);

        break;

      case 'Const':
        _1l(term[1], termCallback);

        break;

      case 'Op':
        _1m(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      case 'Abstr':
        _1n(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      case 'Apply':
        _1o(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _1n = function (abstraction, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // bind variable if there is anything to bind
    if (variablesToBound.length > 0) {
      boundVariables[abstraction[0]] = variablesToBound.pop();
    }

    const abstrCallback = function (err, address) {
      // if there is an error, check if it is because abstract variable is not defined
      if (err && isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
        _8[++__captured__scope_1[1]] = ['Abstr', abstraction];
        address = __captured__scope_1[1];
        err = null;
      } // pass the address to the callback


      callback(err, address);
    };

    _1h(abstraction[1], boundVariables, variablesToBound, abstrCallback, isApplication);
  };

  var _1o = function (application, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const rhsCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        variablesToBound.push(address);

        const lhsCallback = function (err, newAddress) {
          if (!err) {
            // clean up stack
            if (address !== newAddress) {
              _8[address] = _8[newAddress];
            }

            __captured__scope_1[1] = address;
          }

          callback(err, address);
        }; // check if the LHS is a normal abstraction or a variable


        switch (application[0][0]) {
          case 'Abstr':
          case 'Apply':
            _1h(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);

            break;

          case 'Deref':
            _1h(application[0], boundVariables, variablesToBound, function (err, termAddress) {
              let term = undefined;

              if (!err) {
                term = _8[termAddress];

                if (term[0] !== 'Abstr') {
                  err = new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]);
                }
              }

              if (err) {
                callback(err);
              } else {
                _1h(term, boundVariables, variablesToBound, lhsCallback, isApplication);
              }
            }, isApplication);

            break;

          default:
            callback(new Error('Failed to interpret application for ' + application[0][0]), null);
        }
      }
    }; // interpret the RHS termand add it to the variablesToBound array 
    // send an empty array of variables to bind because it's a different scope


    _1h(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1u = function (callback) {
    const rl = _1w.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('User input:\n', function (input) {
      rl.close();
      callback(input);
    });
  };

  var _1s = function (identifier, boundVariables, callback) {
    // just get the address on the stack pointed at by the identifier
    const address = boundVariables[identifier];

    if (!address) {
      callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
      return;
    }

    if (identifier === '_print') {
      _8[1] = _8[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      const inputCallback = function (input) {
        _8[2] = input;
        callback(null, 2);
      }; // for prepack


      if (global.__residual) {
        __residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _1u, inputCallback);
      } else {
        _1u(inputCallback);
      }
    } else {
      callback(null, address);
    }
  };

  var _1k = function (dereference, boundVariables, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // get address of the identifier on the stack


    _1s(dereference[1], boundVariables, function (err, address) {
      if (!err) {
        if (address === 1) {
          console.log(_8[1]);
        } else {
          // increase the stack address and store the value of the identifier there
          _8[++__captured__scope_1[1]] = _8[address];
          address = __captured__scope_1[1];
        }
      }

      callback(err, address);
    });
  };

  var _1l = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // just increment the address on the stack and assign it the constant value
    _8[++__captured__scope_1[1]] = constant;
    callback(null, __captured__scope_1[1]);
  };

  var _1q = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    switch (operator) {
      case 'Plus':
        _8[lhsAddress] += _8[rhsAddress];
        break;

      case 'Minus':
        _8[lhsAddress] -= _8[rhsAddress];
        break;

      case 'Times':
        _8[lhsAddress] *= _8[rhsAddress];
        break;

      case 'Divide':
        _8[lhsAddress] /= _8[rhsAddress];
        break;

      case 'Modulus':
        _8[lhsAddress] %= _8[rhsAddress];
        break;

      case 'Eq':
        _8[lhsAddress] = _8[lhsAddress] == _8[rhsAddress];
        break;

      case 'Noteq':
        _8[lhsAddress] = _8[lhsAddress] != _8[rhsAddress];
        break;

      case 'Leq':
        _8[lhsAddress] = _8[lhsAddress] <= _8[rhsAddress];
        break;

      case 'Less':
        _8[lhsAddress] = _8[lhsAddress] < _8[rhsAddress];
        break;

      case 'Geq':
        _8[lhsAddress] = _8[lhsAddress] >= _8[rhsAddress];
        break;

      case 'Greater':
        _8[lhsAddress] = _8[lhsAddress] > _8[rhsAddress];
        break;

      case 'And':
        _8[lhsAddress] = _8[lhsAddress] && _8[rhsAddress];
        break;

      case 'Or':
        _8[lhsAddress] = _8[lhsAddress] || _8[rhsAddress];
        break;

      case 'Negate':
        _8[lhsAddress] = !_8[lhsAddress];
        break;

      case 'Negative':
        _8[lhsAddress] = -_8[lhsAddress];
        break;

      default:
        err = new Error('Failed to interpret operator for ' + operator[0]);
    }

    callback(err, lhsAddress);
  };

  var _1m = function (operator, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1[1] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1q(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _8[lhsAddress] || operator[0] === 'And' && !_8[lhsAddress]) {
          callback(null, lhsAddress);
        } else {
          _1h(operator[2], boundVariables, variablesToBound, rhsOpCallback, isApplication);
        }
      } else {
        rhsOpCallback();
      }
    };

    _1h(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
  };

  var _2D = function (err, address) {
    _2E(err, _8[address !== 1 ? address : 0]);
  };

  var $_0 = function (callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (global.__residual && __captured__scope_1[0] > 30) {
      __captured__scope_1[0]--;

      __assumeDataProperty(global, 'setTimeout', function (cb, time) {
        setTimeout(cb, time);
      });

      __residual("void", _5.bind(null), global.setTimeout, callback, err, address, 1000);
    } else {
      callback(err, address);
    }
  };

  var _1V = function (err, address) {
    return $_0.call(this, _1i, 0, err, address);
  };

  var _1j = function (err, address) {
    return $_0.call(this, _1r, 0, err, address);
  };

  var _1t = function (err, address) {
    return $_0.call(this, _1v, 0, err, address);
  };

  var _1x = function (err, address) {
    return $_0.call(this, _1y, 0, err, address);
  };

  var _1z = function (err, address) {
    return $_0.call(this, _20, 0, err, address);
  };

  var _21 = function (err, address) {
    return $_0.call(this, _22, 0, err, address);
  };

  var _23 = function (err, address) {
    return $_0.call(this, _24, 0, err, address);
  };

  var _25 = function (err, address) {
    return $_0.call(this, _26, 0, err, address);
  };

  var _27 = function (err, address) {
    return $_0.call(this, _28, 0, err, address);
  };

  var _2A = function (err, address) {
    return $_0.call(this, _2B, 0, err, address);
  };

  var _2C = function (err, address) {
    return $_0.call(this, _2D, 0, err, address);
  };

  var _7 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _1V(err);
    } else {
      _1W.push(address);

      const lhsCallback = function (err, newAddress) {
        if (!err) {
          if (address !== newAddress) {
            _8[address] = _8[newAddress];
          }

          __captured__scope_1[1] = address;
        }

        _1V(err, address);
      };

      switch (_h[0][0]) {
        case 'Abstr':
        case 'Apply':
          _1h(_h[0], _1Y, _1W, lhsCallback, void 0);

          break;

        case 'Deref':
          _1h(_h[0], _1Y, _1W, function (err, termAddress) {
            let term = undefined;

            if (!err) {
              term = _8[termAddress];

              if (term[0] !== 'Abstr') {
                err = new Error('Failed to interpret application for named lambda ' + _h[0][1][1] + ' which stores a ' + term[0]);
              }
            }

            if (err) {
              _1V(err);
            } else {
              _1h(term, _1Y, _1W, lhsCallback, void 0);
            }
          }, void 0);

          break;

        default:
          _1V(new Error('Failed to interpret application for ' + _h[0][0]), null);

      }
    }
  };

  var $_3 = function (address, callback, __scope_1, err, newAddress) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (!err) {
      if (address !== newAddress) {
        _8[address] = _8[newAddress];
      }

      __captured__scope_1[1] = address;
    }

    callback(err, address);
  };

  var _20 = function (err, newAddress) {
    return $_3.call(this, 9, _21, 0, err, newAddress);
  };

  var _28 = function (err, newAddress) {
    return $_3.call(this, 6, _2A, 0, err, newAddress);
  };

  var _2B = function (err, newAddress) {
    return $_3.call(this, 5, _2C, 0, err, newAddress);
  };

  var $_2 = function (abstraction, callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err && void 0 && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
      _8[++__captured__scope_1[1]] = ['Abstr', abstraction];
      address = __captured__scope_1[1];
      err = null;
    }

    callback(err, address);
  };

  var _1v = function (err, address) {
    return $_2.call(this, _V, _1x, 0, err, address);
  };

  var _1y = function (err, address) {
    return $_2.call(this, _R, _1z, 0, err, address);
  };

  var _24 = function (err, address) {
    return $_2.call(this, _V, _25, 0, err, address);
  };

  var _26 = function (err, address) {
    return $_2.call(this, _R, _27, 0, err, address);
  };

  var $_1 = function (callback, operator, __scope_1, err, lhsAddress) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      return callback(err, null);
    }

    __captured__scope_1[1] = lhsAddress;

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return callback(err, null);
      }

      _1q(operator[0], lhsAddress, rhsAddress, callback);
    };

    if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
      if (operator[0] === 'Or' && _8[lhsAddress] || operator[0] === 'And' && !_8[lhsAddress]) {
        callback(null, lhsAddress);
      } else {
        _1h(operator[2], _1Y, _1W, rhsOpCallback, void 0);
      }
    } else {
      rhsOpCallback();
    }
  };

  var _1i = function (err, lhsAddress) {
    return $_1.call(this, _1j, _d, 0, err, lhsAddress);
  };

  var _1r = function (err, lhsAddress) {
    return $_1.call(this, _1t, _Z, 0, err, lhsAddress);
  };

  var _22 = function (err, rhsAddress) {
    if (err) {
      return _23(err, null);
    }

    _1q(_Z[0], 8, rhsAddress, _23);
  };

  var _6 = function (cb, time) {
    setTimeout(cb, time);
  };

  var _5 = function (setTimeout, callback, err, address, CALLBACK_TIMEOUT) {
    setTimeout(function () {
      callback(err, address);
    }, CALLBACK_TIMEOUT);
  };

  console.log(1);
  var _o = ["Identifier", "_print"];
  var _m = ["Deref", _o];
  var _k = ["_print", _m];
  var _i = ["Abstr", _k];
  var _t = ["Identifier", "x"];
  var _r = ["Deref", _t];
  var _h = [_i, _r];
  var _f = ["Apply", _h];
  var _12 = ["Identifier", "x"];
  var _10 = ["Deref", _12];
  var _15 = ["Const", 10];
  var _y = ["Less", _10, _15];
  var _w = ["Op", _y];
  var _d = ["And", _f, _w];
  var _b = ["Op", _d];
  var _1D = ["Identifier", "f"];
  var _1B = ["Deref", _1D];
  var _1L = ["Identifier", "incr"];
  var _1J = ["Deref", _1L];
  var _1Q = ["Identifier", "x"];
  var _1O = ["Deref", _1Q];
  var _1I = [_1J, _1O];
  var _1G = ["Apply", _1I];
  var _1A = [_1B, _1G];
  var _18 = ["Apply", _1A];
  var _Z = ["And", _b, _18];
  var _X = ["Op", _Z];
  var _V = ["f", _X];
  var _J = ["Identifier", "x"];
  var _H = ["Deref", _J];
  var _M = ["Const", 1];
  var _F = ["Plus", _H, _M];
  var _D = ["Op", _F];
  var _B = ["x", _D];
  var _9 = ["Abstr", _B];
  var _T = ["Abstr", _V];
  var _R = ["x", _T];
  var _P = ["Abstr", _R];
  var _8 = [, 1,, _9, _P, _P, 1, _P, true, 2, _P, 2, 1];

  var _1w = require("readline");

  var _1a = {
    address: 2
  };
  var _1Y = {
    _print: 8,
    _read: _1a,
    incr: 3,
    f: 5,
    x: 9
  };
  var _1W = [,,];
  _1W.length = 0;

  _5(_6, _7, null, 11, 1000);
})();