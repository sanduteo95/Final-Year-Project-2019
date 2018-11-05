(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [2, 2];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _Z = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _X = function (term, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    __captured__scope_1[1]++; // add a timeout to preserve the node stack

    const termCallback = function (err, address) {
      if (global.__residual && __captured__scope_1[1] > 30) {
        __captured__scope_1[1]--;

        __assumeDataProperty(global, 'setTimeout', function (cb, time) {
          setTimeout(cb, time);
        });

        __residual("void", function (setTimeout, callback, err, address, CALLBACK_TIMEOUT) {
          setTimeout(function () {
            callback(err, address);
          }, CALLBACK_TIMEOUT);
        }, global.setTimeout, callback, err, address, 1000);
      } else {
        callback(err, address);
      }
    };

    switch (term[0]) {
      case 'Deref':
        _a(term[1], boundVariables, termCallback);

        break;

      case 'Const':
        _b(term[1], termCallback);

        break;

      case 'Op':
        _c(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      case 'Abstr':
        _d(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      case 'Apply':
        _e(term[1], boundVariables, variablesToBound, termCallback, isApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _d = function (abstraction, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // bind variable if there is anything to bind
    if (variablesToBound.length > 0) {
      boundVariables[abstraction[0]] = variablesToBound.pop();
    }

    const abstrCallback = function (err, address) {
      // if there is an error, check if it is because abstract variable is not defined
      if (err && isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
        _4[++__captured__scope_1[0]] = ['Abstr', abstraction];
        address = __captured__scope_1[0];
        err = null;
      } // pass the address to the callback


      callback(err, address);
    };

    _X(abstraction[1], boundVariables, variablesToBound, abstrCallback, isApplication);
  };

  var _e = function (application, boundVariables, variablesToBound, callback, isApplication) {
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
              _4[address] = _4[newAddress];
            }

            __captured__scope_1[0] = address;
          }

          callback(err, address);
        }; // check if the LHS is a normal abstraction or a variable


        switch (application[0][0]) {
          case 'Abstr':
          case 'Apply':
            _X(application[0], boundVariables, variablesToBound, lhsCallback, isApplication);

            break;

          case 'Deref':
            _X(application[0], boundVariables, variablesToBound, function (err, termAddress) {
              let term = undefined;

              if (!err) {
                term = _4[termAddress];

                if (term[0] !== 'Abstr') {
                  err = new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]);
                }
              }

              if (err) {
                callback(err);
              } else {
                _X(term, boundVariables, variablesToBound, lhsCallback, isApplication);
              }
            }, isApplication);

            break;

          default:
            callback(new Error('Failed to interpret application for ' + application[0][0]), null);
        }
      }
    }; // interpret the RHS termand add it to the variablesToBound array 
    // send an empty array of variables to bind because it's a different scope


    _X(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1 = function (callback) {
    const rl = _3.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('User input:\n', function (input) {
      rl.close();
      callback(input);
    });
  };

  var _g = function (identifier, boundVariables, callback) {
    // just get the address on the stack pointed at by the identifier
    const address = boundVariables[identifier];

    if (!address) {
      callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'), null);
      return;
    }

    if (identifier === '_print') {
      _4[1] = _4[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      const inputCallback = function (input) {
        _4[2] = input;
        callback(null, 2);
      }; // for prepack


      if (global.__residual) {
        __residual("void", _0.bind(null), _1, inputCallback);
      } else {
        _1(inputCallback);
      }
    } else {
      callback(null, address);
    }
  };

  var _a = function (dereference, boundVariables, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // get address of the identifier on the stack


    _g(dereference[1], boundVariables, function (err, address) {
      if (!err) {
        if (address === 1) {
          console.log(_4[1]);
        } else {
          // increase the stack address and store the value of the identifier there
          _4[++__captured__scope_1[0]] = _4[address];
          address = __captured__scope_1[0];
        }
      }

      callback(err, address);
    });
  };

  var _b = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    // just increment the address on the stack and assign it the constant value
    _4[++__captured__scope_1[0]] = constant;
    callback(null, __captured__scope_1[0]);
  };

  var _h = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    switch (operator) {
      case 'Plus':
        _4[lhsAddress] += _4[rhsAddress];
        break;

      case 'Minus':
        _4[lhsAddress] -= _4[rhsAddress];
        break;

      case 'Times':
        _4[lhsAddress] *= _4[rhsAddress];
        break;

      case 'Divide':
        _4[lhsAddress] /= _4[rhsAddress];
        break;

      case 'Modulus':
        _4[lhsAddress] %= _4[rhsAddress];
        break;

      case 'Eq':
        _4[lhsAddress] = _4[lhsAddress] == _4[rhsAddress];
        break;

      case 'Noteq':
        _4[lhsAddress] = _4[lhsAddress] != _4[rhsAddress];
        break;

      case 'Leq':
        _4[lhsAddress] = _4[lhsAddress] <= _4[rhsAddress];
        break;

      case 'Less':
        _4[lhsAddress] = _4[lhsAddress] < _4[rhsAddress];
        break;

      case 'Geq':
        _4[lhsAddress] = _4[lhsAddress] >= _4[rhsAddress];
        break;

      case 'Greater':
        _4[lhsAddress] = _4[lhsAddress] > _4[rhsAddress];
        break;

      case 'And':
        _4[lhsAddress] = _4[lhsAddress] && _4[rhsAddress];
        break;

      case 'Or':
        _4[lhsAddress] = _4[lhsAddress] || _4[rhsAddress];
        break;

      case 'Negate':
        _4[lhsAddress] = !_4[lhsAddress];
        break;

      case 'Negative':
        _4[lhsAddress] = -_4[lhsAddress];
        break;

      default:
        err = new Error('Failed to interpret operator for ' + operator[0]);
    }

    callback(err, lhsAddress);
  };

  var _c = function (operator, boundVariables, variablesToBound, callback, isApplication) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      __captured__scope_1[0] = lhsAddress;

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _h(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _4[lhsAddress] || operator[0] === 'And' && !_4[lhsAddress]) {
          callback(null, lhsAddress);
        } else {
          _X(operator[2], boundVariables, variablesToBound, rhsOpCallback, isApplication);
        }
      } else {
        rhsOpCallback();
      }
    };

    _X(operator[1], boundVariables, variablesToBound, lhsOpCallback, isApplication);
  };

  var _Y = function (err, address) {
    _Z(err, _4[address !== 1 ? address : 0]);
  };

  var $_0 = function (callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (global.__residual && __captured__scope_1[1] > 30) {
      __captured__scope_1[1]--;

      __assumeDataProperty(global, 'setTimeout', function (cb, time) {
        setTimeout(cb, time);
      });

      __residual("void", function (setTimeout, callback, err, address, CALLBACK_TIMEOUT) {
        setTimeout(function () {
          callback(err, address);
        }, CALLBACK_TIMEOUT);
      }, global.setTimeout, callback, err, address, 1000);
    } else {
      callback(err, address);
    }
  };

  var _8 = function (err, address) {
    return $_0.call(this, _A, 0, err, address);
  };

  var _C = function (err, address) {
    return $_0.call(this, _Y, 0, err, address);
  };

  var _A = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (err) {
      _C(err);
    } else {
      _D.push(address);

      const lhsCallback = function (err, newAddress) {
        if (!err) {
          if (address !== newAddress) {
            _4[address] = _4[newAddress];
          }

          __captured__scope_1[0] = address;
        }

        _C(err, address);
      };

      switch (_E[0][0]) {
        case 'Abstr':
        case 'Apply':
          _X(_E[0], _T, _D, lhsCallback, void 0);

          break;

        case 'Deref':
          _X(_E[0], _T, _D, function (err, termAddress) {
            let term = undefined;

            if (!err) {
              term = _4[termAddress];

              if (term[0] !== 'Abstr') {
                err = new Error('Failed to interpret application for named lambda ' + _E[0][1][1] + ' which stores a ' + term[0]);
              }
            }

            if (err) {
              _C(err);
            } else {
              _X(term, _T, _D, lhsCallback, void 0);
            }
          }, void 0);

          break;

        default:
          _C(new Error('Failed to interpret application for ' + _E[0][0]), null);

      }
    }
  };

  var _6 = function (err, address) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (!err) {
      if (address === 1) {
        console.log(_4[1]);
      } else {
        _4[++__captured__scope_1[0]] = _4[address];
        address = __captured__scope_1[0];
      }
    }

    _8(err, address);
  };

  var _2 = function (input) {
    _4[2] = input;

    _6(null, 2);
  };

  var _0 = function (waitForInput, callback) {
    waitForInput(callback);
  };

  var _3 = require("readline");

  var _4 = [];
  var _D = [];
  var _E = [["Abstr", ["x", ["Deref", ["Identifier", "x"]]]], ["Deref", ["Identifier", "_read"]]];
  var _T = {
    _print: {
      address: 1
    },
    _read: {
      address: 2
    }
  };

  _0(_1, _2);
})();