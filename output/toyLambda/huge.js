(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [7];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _20 = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _a = function (term, boundVariables, variablesToBound, callback, isApplication) {
    switch (term[0]) {
      case 'Deref':
        _c(term[1], boundVariables, callback);

        break;

      case 'Const':
        _e(term[1], callback);

        break;

      case 'Op':
        _f(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      case 'Abstr':
        _g(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      case 'Apply':
        _h(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
        return;
    }
  };

  var _g = function (abstraction, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // bind variable if there is anything to bind
    if (variablesToBound.length > 0) {
      const numCalls = !boundVariables[abstraction[0]] ? 0 : boundVariables[abstraction[0]].numCalls;
      boundVariables[abstraction[0]] = {
        address: variablesToBound.pop(),
        numCalls: numCalls + 1
      };
    }

    if (global.__residual && boundVariables[abstraction[0]] && boundVariables[abstraction[0]].numCalls > 2) {
      __residual("void", _Z.bind(null), _0, __captured__scope_1[0], _a, abstraction, boundVariables, variablesToBound, callback, isApplication);
    } else {
      _a(abstraction[1], boundVariables, variablesToBound, function (err, address) {
        // if there is an error
        if (err) {
          // check if the error is because abstract variable is not defined
          if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
            __captured__scope_1[0] = __captured__scope_1[0] + 1;
            _0[__captured__scope_1[0]] = ['Abstr', abstraction];
            address = __captured__scope_1[0];
          } else {
            // otherwise callback the error
            callback(err, null);
            return;
          }
        } // pass the address to the callback


        callback(null, address);
      }, isApplication);
    }
  };

  var _h = function (application, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const rhsCallback = function (err, address) {
      if (err) {
        callback(err, null);
        return;
      }

      variablesToBound.push(address);

      const lhsCallback = function (err, newAddress) {
        if (err) {
          callback(err, null);
          return;
        } // clean up stack


        if (address !== newAddress) {
          _0[address] = _0[newAddress];
        }

        __captured__scope_1[0] = address;
        callback(null, address);
      }; // check if the LHS is a normal abstraction or a variable


      switch (application[0][0]) {
        case 'Abstr':
        case 'Apply':
          _a(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);

          break;

        case 'Deref':
          _a(application[0], boundVariables, variablesToBound, function (err, termAddress) {
            if (err) {
              callback(err, null);
              return;
            }

            const term = _0[termAddress];

            if (term[0] !== 'Abstr') {
              callback(new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]), null);
              return;
            }

            _a(term, boundVariables, variablesToBound, lhsCallback, isApplication);
          }, isApplication);

          break;

        default:
          callback(new Error('Failed to interpret application for ' + application[0][0]), null);
          return;
      }
    }; // interpret the RHS termand add it to the variablesToBound array 
    // send an empty array of variables to bind because it's a different scope


    _a(application[1], boundVariables, [], rhsCallback, true);
  };

  var _10 = function (callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const rl = _15.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('User input:\n', function (input) {
      rl.close();
      __captured__scope_1[0] = __captured__scope_1[0] + 1;
      _0[__captured__scope_1[0]] = input;
      callback(null, __captured__scope_1[0]);
    });
  };

  var _i = function (identifier, boundVariables, callback) {
    // just get the address on the stack pointed at by the identifier
    const address = !boundVariables[identifier] ? undefined : boundVariables[identifier].address;

    if (!address) {
      callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
      return;
    }

    if (identifier === '_print') {
      _0[1] = _0[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // for prepack
      if (global.__residual) {
        __residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _10, callback);
      } else {
        _10(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _c = function (dereference, boundVariables, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (dereference[0] !== 'Identifier') {
      callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
      return;
    } // get address of the identifier on the stack


    _i(dereference[1], boundVariables, function (err, address) {
      if (err) {
        callback(err, null);
        return;
      }

      if (address === 1) {
        console.log(_0[1]);
        callback(null, 1);
      } else {
        // increase the stack address and store the value of the identifier there
        __captured__scope_1[0] = __captured__scope_1[0] + 1;
        _0[__captured__scope_1[0]] = _0[address];
        callback(null, __captured__scope_1[0]);
      }
    });
  };

  var _e = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // just increment the address on the stack and assign it the constant value
    __captured__scope_1[0] = __captured__scope_1[0] + 1;
    _0[__captured__scope_1[0]] = constant;
    callback(null, __captured__scope_1[0]);
  };

  var _y = function (operator, lhsAddress, rhsAddress, callback) {
    switch (operator) {
      case 'Plus':
        _0[lhsAddress] = _0[lhsAddress] + _0[rhsAddress];
        break;

      case 'Minus':
        _0[lhsAddress] = _0[lhsAddress] - _0[rhsAddress];
        break;

      case 'Times':
        _0[lhsAddress] = _0[lhsAddress] * _0[rhsAddress];
        break;

      case 'Divide':
        _0[lhsAddress] = _0[lhsAddress] / _0[rhsAddress];
        break;

      case 'Modulus':
        _0[lhsAddress] = _0[lhsAddress] % _0[rhsAddress];
        break;

      case 'Eq':
        _0[lhsAddress] = _0[lhsAddress] == _0[rhsAddress];
        break;

      case 'Noteq':
        _0[lhsAddress] = _0[lhsAddress] != _0[rhsAddress];
        break;

      case 'Leq':
        _0[lhsAddress] = _0[lhsAddress] <= _0[rhsAddress];
        break;

      case 'Less':
        _0[lhsAddress] = _0[lhsAddress] < _0[rhsAddress];
        break;

      case 'Geq':
        _0[lhsAddress] = _0[lhsAddress] >= _0[rhsAddress];
        break;

      case 'Greater':
        _0[lhsAddress] = _0[lhsAddress] > _0[rhsAddress];
        break;

      case 'And':
        _0[lhsAddress] = _0[lhsAddress] && _0[rhsAddress];
        break;

      case 'Or':
        _0[lhsAddress] = _0[lhsAddress] || _0[rhsAddress];
        break;

      case 'Negate':
        _0[lhsAddress] = !_0[lhsAddress];
        break;

      case 'Negative':
        _0[lhsAddress] = -_0[lhsAddress];
        break;

      default:
        callback(new Error('Failed to interpret operator for ' + operator[0]), null);
        return;
    }

    callback(null, lhsAddress);
  };

  var _f = function (operator, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        callback(err, null);
        return;
      } // clean up stack


      __captured__scope_1[0] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          callback(err, null);
          return;
        }

        _y(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _0[lhsAddress] || operator[0] === 'And' && !_0[lhsAddress]) {
          callback(null, lhsAddress);
        } else {
          _a(operator[2], boundVariables, variablesToBound, rhsOpCallback, isApplication);
        }
      } else {
        rhsOpCallback(null, undefined);
      }
    };

    _a(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
  };

  var _1z = function (err, address) {
    // if there is an error, throw it
    if (err) {
      _20(err, null);

      return;
    } // otherwise, return the result
    // if the address is empty then it returns undefined


    if (address != 1) {
      _20(null, _0[address]);
    } else {
      _20(null, _0[0]);
    }
  };

  var _1y = function (err, address) {
    // if there is an error run callback with it
    if (err) {
      _1z(err, null);

      return;
    } // otherwise run callback with the address


    _1z(null, address);
  };

  var _19 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _1A(err, null);

      return;
    }

    _1B.push(address);

    const lhsCallback = function (err, newAddress) {
      if (err) {
        _1A(err, null);

        return;
      }

      if (address !== newAddress) {
        _0[address] = _0[newAddress];
      }

      __captured__scope_1[0] = address;

      _1A(null, address);
    };

    switch (_1D[0][0]) {
      case 'Abstr':
      case 'Apply':
        _a(_1D[0], _L, _1B, lhsCallback, void 0);

        break;

      case 'Deref':
        _a(_1D[0], _L, _1B, function (err, termAddress) {
          if (err) {
            _1A(err, null);

            return;
          }

          const term = _0[termAddress];

          if (term[0] !== 'Abstr') {
            _1A(new Error('Failed to interpret application for named lambda ' + _1D[0][1][1] + ' which stores a ' + term[0]), null);

            return;
          }

          _a(term, _L, _1B, lhsCallback, void 0);
        }, void 0);

        break;

      default:
        _1A(new Error('Failed to interpret application for ' + _1D[0][0]), null);

        return;
    }
  };

  var $_1 = function (abstraction, callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      if (err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
        __captured__scope_1[0] = __captured__scope_1[0] + 1;
        _0[__captured__scope_1[0]] = ['Abstr', abstraction];
        address = __captured__scope_1[0];
      } else {
        callback(err, null);
        return;
      }
    }

    callback(null, address);
  };

  var _d = function (err, address) {
    return $_1.call(this, _j, _z, 0, err, address);
  };

  var _z = function (err, address) {
    return $_1.call(this, _11, _16, 0, err, address);
  };

  var $_0 = function (callback, address, __scope_1, err, newAddress) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err, null);
      return;
    }

    if (address !== newAddress) {
      _0[address] = _0[newAddress];
    }

    __captured__scope_1[0] = address;
    callback(null, address);
  };

  var _b = function (err, newAddress) {
    return $_0.call(this, _d, 6, 0, err, newAddress);
  };

  var _16 = function (err, newAddress) {
    return $_0.call(this, _18, 5, 0, err, newAddress);
  };

  var _18 = function (err, newAddress) {
    return $_0.call(this, _19, 4, 0, err, newAddress);
  };

  var _1A = function (err, newAddress) {
    return $_0.call(this, _1y, 3, 0, err, newAddress);
  };

  var _Z = function (stack, stackAddress, interpretTerm, abstraction, boundVariables, variablesToBound, callback, isApplication) {
    interpretTerm(abstraction[1], boundVariables, variablesToBound, function (err, address) {
      // if there is an error
      if (err) {
        // check if the error is because abstract variable is not defined
        if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
          stackAddress = stackAddress + 1;
          stack[stackAddress] = ['Abstr', abstraction];
          address = stackAddress;
        } else {
          // otherwise callback the error
          callback(err, null);
          return;
        }
      } // pass the address to the callback


      callback(null, address);
    }, isApplication);
  };

  var _7 = ["Identifier", "x"];
  var _5 = ["Deref", _7];
  var _3 = ["x", _5];
  var _1 = ["Abstr", _3];
  var _G = ["Identifier", "x"];
  var _E = ["Deref", _G];
  var _C = ["x", _E];
  var _A = ["Abstr", _C];
  var _0 = [,,, _1, _A, 12, 12, _A];

  var _15 = require("readline");

  var _M = {
    address: 1
  };
  var _O = {
    address: 2
  };
  var _Q = {
    address: 6,
    numCalls: 3
  };
  var _T = {
    address: 4,
    numCalls: 1
  };
  var _L = {
    _print: _M,
    _read: _O,
    x: _Q,
    y: _T
  };
  var _W = [,,];
  _W.length = 0;
  var _q = ["Identifier", "y"];
  var _o = ["Deref", _q];
  var _v = ["Identifier", "x"];
  var _t = ["Deref", _v];
  var _n = [_o, _t];
  var _l = ["Apply", _n];
  var _j = ["y", _l];
  var _13 = ["Abstr", _j];
  var _11 = ["x", _13];
  var _1B = [3];
  var _1D = [["Abstr", ["x", ["Abstr", ["y", ["Apply", [["Deref", ["Identifier", "y"]], ["Deref", ["Identifier", "x"]]]]]]]], ["Apply", [["Apply", [["Abstr", _11], ["Apply", [["Abstr", ["x", ["Deref", ["Identifier", "x"]]]], ["Const", 12]]]]], ["Abstr", _C]]]];

  _Z(_0, 7, _a, _C, _L, _W, _b, true);
})();