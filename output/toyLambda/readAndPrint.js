(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [2];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _i = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _f = function (term, boundVariables, variablesToBound, callback, isApplication) {
    switch (term[0]) {
      case 'Deref':
        _h(term[1], boundVariables, callback);

        break;

      case 'Const':
        _j(term[1], callback);

        break;

      case 'Op':
        _k(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      case 'Abstr':
        _l(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      case 'Apply':
        _m(term[1], boundVariables, variablesToBound, callback, isApplication);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
        return;
    }
  };

  var _l = function (abstraction, boundVariables, variablesToBound, callback, isApplication) {
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
      __residual("void", function (stack, stackAddress, interpretTerm, abstraction, boundVariables, variablesToBound, callback, isApplication) {
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
      }, _5, __captured__scope_1[0], _f, abstraction, boundVariables, variablesToBound, callback, isApplication);
    } else {
      _f(abstraction[1], boundVariables, variablesToBound, function (err, address) {
        // if there is an error
        if (err) {
          // check if the error is because abstract variable is not defined
          if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
            __captured__scope_1[0] = __captured__scope_1[0] + 1;
            _5[__captured__scope_1[0]] = ['Abstr', abstraction];
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

  var _m = function (application, boundVariables, variablesToBound, callback, isApplication) {
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
          _5[address] = _5[newAddress];
        }

        __captured__scope_1[0] = address;
        callback(null, address);
      }; // check if the LHS is a normal abstraction or a variable


      switch (application[0][0]) {
        case 'Abstr':
        case 'Apply':
          _f(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);

          break;

        case 'Deref':
          _f(application[0], boundVariables, variablesToBound, function (err, termAddress) {
            if (err) {
              callback(err, null);
              return;
            }

            const term = _5[termAddress];

            if (term[0] !== 'Abstr') {
              callback(new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]), null);
              return;
            }

            _f(term, boundVariables, variablesToBound, lhsCallback, isApplication);
          }, isApplication);

          break;

        default:
          callback(new Error('Failed to interpret application for ' + application[0][0]), null);
          return;
      }
    }; // interpret the RHS termand add it to the variablesToBound array 
    // send an empty array of variables to bind because it's a different scope


    _f(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1 = function (callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const rl = _3.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('User input:\n', function (input) {
      rl.close();
      __captured__scope_1[0] = __captured__scope_1[0] + 1;
      _5[__captured__scope_1[0]] = input;
      callback(null, __captured__scope_1[0]);
    });
  };

  var _o = function (identifier, boundVariables, callback) {
    // just get the address on the stack pointed at by the identifier
    const address = !boundVariables[identifier] ? undefined : boundVariables[identifier].address;

    if (!address) {
      callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
      return;
    }

    if (identifier === '_print') {
      _5[1] = _5[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // for prepack
      if (global.__residual) {
        __residual("void", _0.bind(null), _1, callback);
      } else {
        _1(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _h = function (dereference, boundVariables, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (dereference[0] !== 'Identifier') {
      callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
      return;
    } // get address of the identifier on the stack


    _o(dereference[1], boundVariables, function (err, address) {
      if (err) {
        callback(err, null);
        return;
      }

      if (address === 1) {
        console.log(_5[1]);
        callback(null, 1);
      } else {
        // increase the stack address and store the value of the identifier there
        __captured__scope_1[0] = __captured__scope_1[0] + 1;
        _5[__captured__scope_1[0]] = _5[address];
        callback(null, __captured__scope_1[0]);
      }
    });
  };

  var _j = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // just increment the address on the stack and assign it the constant value
    __captured__scope_1[0] = __captured__scope_1[0] + 1;
    _5[__captured__scope_1[0]] = constant;
    callback(null, __captured__scope_1[0]);
  };

  var _p = function (operator, lhsAddress, rhsAddress, callback) {
    switch (operator) {
      case 'Plus':
        _5[lhsAddress] = _5[lhsAddress] + _5[rhsAddress];
        break;

      case 'Minus':
        _5[lhsAddress] = _5[lhsAddress] - _5[rhsAddress];
        break;

      case 'Times':
        _5[lhsAddress] = _5[lhsAddress] * _5[rhsAddress];
        break;

      case 'Divide':
        _5[lhsAddress] = _5[lhsAddress] / _5[rhsAddress];
        break;

      case 'Modulus':
        _5[lhsAddress] = _5[lhsAddress] % _5[rhsAddress];
        break;

      case 'Eq':
        _5[lhsAddress] = _5[lhsAddress] == _5[rhsAddress];
        break;

      case 'Noteq':
        _5[lhsAddress] = _5[lhsAddress] != _5[rhsAddress];
        break;

      case 'Leq':
        _5[lhsAddress] = _5[lhsAddress] <= _5[rhsAddress];
        break;

      case 'Less':
        _5[lhsAddress] = _5[lhsAddress] < _5[rhsAddress];
        break;

      case 'Geq':
        _5[lhsAddress] = _5[lhsAddress] >= _5[rhsAddress];
        break;

      case 'Greater':
        _5[lhsAddress] = _5[lhsAddress] > _5[rhsAddress];
        break;

      case 'And':
        _5[lhsAddress] = _5[lhsAddress] && _5[rhsAddress];
        break;

      case 'Or':
        _5[lhsAddress] = _5[lhsAddress] || _5[rhsAddress];
        break;

      case 'Negate':
        _5[lhsAddress] = !_5[lhsAddress];
        break;

      case 'Negative':
        _5[lhsAddress] = -_5[lhsAddress];
        break;

      default:
        callback(new Error('Failed to interpret operator for ' + operator[0]), null);
        return;
    }

    callback(null, lhsAddress);
  };

  var _k = function (operator, boundVariables, variablesToBound, callback, isApplication) {
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

        _p(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _5[lhsAddress] || operator[0] === 'And' && !_5[lhsAddress]) {
          callback(null, lhsAddress);
        } else {
          _f(operator[2], boundVariables, variablesToBound, rhsOpCallback, isApplication);
        }
      } else {
        rhsOpCallback(null, undefined);
      }
    };

    _f(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
  };

  var _g = function (err, address) {
    // if there is an error, throw it
    if (err) {
      _i(err, null);

      return;
    } // otherwise, return the result
    // if the address is empty then it returns undefined


    if (address != 1) {
      _i(null, _5[address]);
    } else {
      _i(null, _5[0]);
    }
  };

  var _8 = function (err, address) {
    // if there is an error run callback with it
    if (err) {
      _g(err, null);

      return;
    } // otherwise run callback with the address


    _g(null, address);
  };

  var _7 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _8(err, null);

      return;
    }

    _9.push(address);

    const lhsCallback = function (err, newAddress) {
      if (err) {
        _8(err, null);

        return;
      }

      if (address !== newAddress) {
        _5[address] = _5[newAddress];
      }

      __captured__scope_1[0] = address;

      _8(null, address);
    };

    switch (_A[0][0]) {
      case 'Abstr':
      case 'Apply':
        _f(_A[0], _b, _9, lhsCallback, void 0);

        break;

      case 'Deref':
        _f(_A[0], _b, _9, function (err, termAddress) {
          if (err) {
            _8(err, null);

            return;
          }

          const term = _5[termAddress];

          if (term[0] !== 'Abstr') {
            _8(new Error('Failed to interpret application for named lambda ' + _A[0][1][1] + ' which stores a ' + term[0]), null);

            return;
          }

          _f(term, _b, _9, lhsCallback, void 0);
        }, void 0);

        break;

      default:
        _8(new Error('Failed to interpret application for ' + _A[0][0]), null);

        return;
    }
  };

  var _2 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _7(err, null);

      return;
    }

    if (address === 1) {
      console.log(_5[1]);

      _7(null, 1);
    } else {
      __captured__scope_1[0] = __captured__scope_1[0] + 1;
      _5[__captured__scope_1[0]] = _5[address];

      _7(null, __captured__scope_1[0]);
    }
  };

  var _0 = function (waitForInput, callback) {
    waitForInput(callback);
  };

  var _3 = require("readline");

  var _5 = [];
  var _9 = [];
  var _A = [["Abstr", ["x", ["Apply", [["Abstr", ["_print", ["Deref", ["Identifier", "_print"]]]], ["Deref", ["Identifier", "x"]]]]]], ["Deref", ["Identifier", "_read"]]];
  var _b = {
    _print: {
      address: 1
    },
    _read: {
      address: 2
    }
  };

  _0(_1, _2);
})();