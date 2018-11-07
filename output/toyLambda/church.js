(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [11, 8];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(1);

  var _3q = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _3o = function (lambda, boundVariables, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    const lambdaCallback = function (value) {
      _G[++__captured__scope_1[0]] = value;
      boundVariables[lambda[1]] = __captured__scope_1[0];

      _3o(lambda[3], boundVariables, callback);
    }; // check first if there are any global variables


    if (lambda[0] === 'Def') {
      // only interpret the definition if it is an application or operator
      if (lambda[2][0] === 'Apply' || lambda[2][0] === 'Operator') {
        false;

        _1Y(lambda[2], boundVariables, [], function (err, address) {
          lambdaCallback(_G[address]);
        }, true);
      } else {
        lambdaCallback(lambda[2]);
      }
    } else if (lambda[0] === 'RecDef') {
      lambdaCallback(lambda[2]);
    } else {
      // interpret the lambda term
      _1Y(lambda, boundVariables, [], callback, true);
    }
  };

  var _1Y = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
          }, global.setTimeout, _D, term, boundVariables, addressesToBind, termCallback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1[1]--;

          global.__residual("void", _C.bind(null), _D, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _D(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1[1] > 75) {
        // call the function with a timeout
        setTimeout(function () {
          _D(term, boundVariables, addressesToBind, termCallback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _D(term, boundVariables, addressesToBind, termCallback, isAbstraction);
      }
    }
  };

  var _D = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    switch (term[0]) {
      case 'Deref':
        // a dereference could return an abstraction or application, so we can try to evaluate that
        _1X(term[1], boundVariables, function (err, address) {
          if (!err) {
            // this could refer to unknown input (for now just reading)
            if (global.__residual && global.__isAbstract(_G[address])) {
              callback(null, address);
            } else {
              const newTerm = _G[address]; // if the variable stored an abstraction or application, then interpret that

              if (newTerm && (newTerm[0] === 'Abstr' || newTerm[0] === 'Apply')) {
                false; // filter out variables that were defined after the current identifier

                let scopedBoundVariables = {};
                Object.keys(boundVariables).forEach(function (variable) {
                  if (boundVariables[variable] <= address) {
                    scopedBoundVariables[variable] = boundVariables[variable];
                  }
                });

                _1Y(newTerm, scopedBoundVariables, addressesToBind, callback, true);
              } else {
                false;

                if (newTerm && newTerm[0] === 'Identifier') {
                  // the variable might not be evaluated
                  false;
                  _G[address] = ['Deref', _G[address]];
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
        _1Z(term[1], callback);

        break;

      case 'Op':
        _1a(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Abstr':
        _1b(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      case 'Apply':
        _1c(term[1], boundVariables, addressesToBind, callback, isAbstraction);

        break;

      default:
        callback(new Error('Failed to interpret term for ' + term[0]), null);
    }
  };

  var _1b = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
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
      } else if (isAbstraction && !hasBeenBound && _G[address] && _G[address][0] !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

        _G[++__captured__scope_1[0]] = ['Abstr', [abstraction[0], _G[address]]];
        address = __captured__scope_1[0];
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _1Y(abstraction[1], boundVariables, addressesToBind, abstrCallback, true);
  };

  var _1c = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
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

            if (_G[newAddress] && (_G[newAddress][0] === 'Deref' && _G[newAddress][0] === application[0][0] && _G[newAddress][1][1] === application[0][1][1] || _G[newAddress][0] === 'Abstr' && _G[newAddress][0] === application[0][0] && _G[newAddress][1] === application[0][1])) {
              false;
              _G[newAddress] = ['Apply', [_G[newAddress], _G[address]]];
            } // clean up stack


            if (address !== newAddress) {
              _G[address] = _G[newAddress];
            }

            __captured__scope_1[0] = address;
            false;
            callback(null, __captured__scope_1[0]);
          }
        };

        false;

        _1Y(application[0], boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1Y(application[1], boundVariables, [], rhsCallback, true);
  };

  var _1m = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _G[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _1i = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _G[1] = _G[address];
      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable
        // TODO: It's using the AST notation in case we have more unknown input and can interpret the stack value when we see it's abstract
        _G[2] = global.__abstract({}, '["Deref", ["Identifier", "_read"]]');
        callback(null, 2);
      } else {
        _1m(callback);
      }
    } else {
      // first check check if the value is unkown and it isn't an application, for prepack (for now only input)
      if (global.__residual && global.__isAbstract(_G[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _1m, callback);
      } else {
        callback(null, address);
      }
    }
  };

  var _1X = function (dereference, boundVariables, callback, isAbstraction) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false;

    if (dereference[0] !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference[0]), null);
    } // get address of the identifier on the stack


    _1i(dereference[1], boundVariables, function (err, address) {
      // the only error at this point would be from an undefined variable
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          _G[++__captured__scope_1[0]] = dereference;
          callback(null, __captured__scope_1[0]);
        }
      } else {
        if (address === 1) {
          if (global.__residual && global.__isAbstract(_G[address])) {
            global.__residual("void", function (stack, printAddress) {
              console.log(stack[printAddress]);
            }, _G, 1);
          } else {
            console.log(_G[1]);
            callback(err, 0);
          }
        } else {
          // increase the stack address and store the value of the identifier there
          _G[++__captured__scope_1[0]] = _G[address];
          callback(err, __captured__scope_1[0]);
        }
      }
    }, isAbstraction);
  };

  var _1Z = function (constant, callback) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    false; // just increment the address on the stack and assign it the constant value

    _G[++__captured__scope_1[0]] = constant;
    callback(null, __captured__scope_1[0]);
  };

  var _1j = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null; // check for undefined because we can have print

    if (_G[lhsAddress][0] === undefined && _G[rhsAddress][0] === undefined) {
      switch (operator) {
        case 'Plus':
          _G[lhsAddress] += _G[rhsAddress];
          break;

        case 'Minus':
          _G[lhsAddress] -= _G[rhsAddress];
          break;

        case 'Times':
          _G[lhsAddress] *= _G[rhsAddress];
          break;

        case 'Divide':
          _G[lhsAddress] /= _G[rhsAddress];
          break;

        case 'Modulus':
          _G[lhsAddress] %= _G[rhsAddress];
          break;

        case 'Eq':
          _G[lhsAddress] = _G[lhsAddress] == _G[rhsAddress];
          break;

        case 'Noteq':
          _G[lhsAddress] = _G[lhsAddress] != _G[rhsAddress];
          break;

        case 'Leq':
          _G[lhsAddress] = _G[lhsAddress] <= _G[rhsAddress];
          break;

        case 'Less':
          _G[lhsAddress] = _G[lhsAddress] < _G[rhsAddress];
          break;

        case 'Geq':
          _G[lhsAddress] = _G[lhsAddress] >= _G[rhsAddress];
          break;

        case 'Greater':
          _G[lhsAddress] = _G[lhsAddress] > _G[rhsAddress];
          break;

        case 'And':
          _G[lhsAddress] = _G[lhsAddress] && _G[rhsAddress];
          break;

        case 'Or':
          _G[lhsAddress] = _G[lhsAddress] || _G[rhsAddress];
          break;

        case 'Negate':
          _G[lhsAddress] = !_G[lhsAddress];
          break;

        case 'Negative':
          _G[lhsAddress] = -_G[lhsAddress];
          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator[0]);
      }
    } else {
      const lhs = _G[lhsAddress][0] !== undefined ? _G[lhsAddress] : ['Const', _G[lhsAddress]];
      const rhs = _G[rhsAddress][0] !== undefined ? _G[rhsAddress] : ['Const', _G[rhsAddress]];
      _G[lhsAddress] = ['Op', [operator, lhs, rhs]];
    }

    callback(err, lhsAddress);
  };

  var _1a = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
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

        _1j(operator[0], lhsAddress, rhsAddress, callback);
      };

      if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
        // don't interpret stuff if not needed to
        if (operator[0] === 'Or' && _G[lhsAddress] || operator[0] === 'And' && !_G[lhsAddress]) {
          callback(null, lhsAddress);
        } else if (operator[0] === 'Or' && !_G[lhsAddress]) {
          _1Y(operator[2], boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _1Y(operator[2], boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback();
      }
    };

    _1Y(operator[1], boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _3p = function (err, address) {
    false;

    _3q(err, address > 1 && _G[address]);
  };

  var _2C = function (value) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    _G[++__captured__scope_1[0]] = value;
    _2D[_2G[1]] = __captured__scope_1[0];

    _3o(_2G[3], _2D, _3p);
  };

  var _2B = function (err, address) {
    _2C(_G[address]);
  };

  var $_1 = function (callback, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    __captured__scope_1[1]--;
    false;
    callback(err, address);
  };

  var _1U = function (err, address) {
    return $_1.call(this, _1h, 0, err, address);
  };

  var _1l = function (err, address) {
    return $_1.call(this, _1n, 0, err, address);
  };

  var _1o = function (err, address) {
    return $_1.call(this, _1r, 0, err, address);
  };

  var _1s = function (err, address) {
    return $_1.call(this, _1t, 0, err, address);
  };

  var _1u = function (err, address) {
    return $_1.call(this, _1v, 0, err, address);
  };

  var _1w = function (err, address) {
    return $_1.call(this, _1x, 0, err, address);
  };

  var _1x = function (err, address) {
    return $_1.call(this, _1y, 0, err, address);
  };

  var _1z = function (err, address) {
    return $_1.call(this, _2B, 0, err, address);
  };

  var $_0 = function (callback, addressesToBind, application, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err);
    } else {
      addressesToBind.push(address);
      false;

      const lhsCallback = function (err, newAddress) {
        if (err) {
          callback(err);
        } else {
          false;

          if (_G[newAddress] && (_G[newAddress][0] === 'Deref' && _G[newAddress][0] === application[0][0] && _G[newAddress][1][1] === application[0][1][1] || _G[newAddress][0] === 'Abstr' && _G[newAddress][0] === application[0][0] && _G[newAddress][1] === application[0][1])) {
            false;
            _G[newAddress] = ['Apply', [_G[newAddress], _G[address]]];
          }

          if (address !== newAddress) {
            _G[address] = _G[newAddress];
          }

          __captured__scope_1[0] = address;
          false;
          callback(null, __captured__scope_1[0]);
        }
      };

      false;

      _1Y(application[0], _5, addressesToBind, lhsCallback, true);
    }
  };

  var _E = function (err, address) {
    return $_0.call(this, _1U, _1V, _19, 0, err, address);
  };

  var _1n = function (err, address) {
    return $_0.call(this, _1o, _1p, _y, 0, err, address);
  };

  var $_3 = function (callback, hasBeenBound, abstraction, __scope_1, err, address) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err);
    } else if (!hasBeenBound && _G[address] && _G[address][0] !== undefined) {
      false;
      _G[++__captured__scope_1[0]] = ['Abstr', [abstraction[0], _G[address]]];
      address = __captured__scope_1[0];
    }

    if (hasBeenBound) {
      false;
    }

    callback(null, address);
  };

  var _1r = function (err, address) {
    return $_3.call(this, _1s, false, _u, 0, err, address);
  };

  var _1t = function (err, address) {
    return $_3.call(this, _1u, false, _q, 0, err, address);
  };

  var _1v = function (err, address) {
    return $_3.call(this, _1w, true, _m, 0, err, address);
  };

  var $_2 = function (callback, application, address, __scope_1, err, newAddress) {
    var __captured__scope_1 = __scope_0[__scope_1] || __get_scope_binding_0(__scope_1);

    if (err) {
      callback(err);
    } else {
      false;

      if (_G[newAddress] && (_G[newAddress][0] === 'Deref' && _G[newAddress][0] === application[0][0] && _G[newAddress][1][1] === application[0][1][1] || _G[newAddress][0] === 'Abstr' && _G[newAddress][0] === application[0][0] && _G[newAddress][1] === application[0][1])) {
        false;
        _G[newAddress] = ['Apply', [_G[newAddress], _G[address]]];
      }

      if (address !== newAddress) {
        _G[address] = _G[newAddress];
      }

      __captured__scope_1[0] = address;
      false;
      callback(null, __captured__scope_1[0]);
    }
  };

  var _1h = function (err, newAddress) {
    return $_2.call(this, _1l, _16, 11, 0, err, newAddress);
  };

  var _1y = function (err, newAddress) {
    return $_2.call(this, _1z, _20, 9, 0, err, newAddress);
  };

  var _C = function (interpretTermLazy, term, boundVariables, addressesToBind, termCallback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, termCallback, isAbstraction);
  };

  var _R = ["Identifier", "z"];
  var _P = ["Deref", _R];
  var _U = ["Const", 1];
  var _N = ["Plus", _P, _U];
  var _L = ["Op", _N];
  var _J = ["z", _L];
  var _H = ["Abstr", _J];
  var _h = ["Identifier", "y"];
  var _f = ["Deref", _h];
  var _d = ["y", _f];
  var _b = ["Abstr", _d];
  var _Z = ["f", _b];
  var _X = ["Abstr", _Z];
  var _11 = ["Identifier", "f"];
  var _z = ["Deref", _11];
  var _1C = ["Identifier", "n"];
  var _1A = ["Deref", _1C];
  var _2 = ["Identifier", "f"];
  var _0 = ["Deref", _2];
  var _19 = [_1A, _0];
  var _17 = ["Apply", _19];
  var _1H = ["Identifier", "x"];
  var _1F = ["Deref", _1H];
  var _16 = [_17, _1F];
  var _14 = ["Apply", _16];
  var _y = [_z, _14];
  var _w = ["Apply", _y];
  var _u = ["x", _w];
  var _s = ["Abstr", _u];
  var _q = ["f", _s];
  var _o = ["Abstr", _q];
  var _m = ["n", _o];
  var _k = ["Abstr", _m];
  var _1K = ["Deref", _h];
  var _1O = ["y", _1K];
  var _1M = ["Abstr", _1O];
  var _1R = ["f", _1M];
  var _1P = ["Abstr", _1R];
  var _1S = ["Deref", _1H];
  var _G = [,,, _H, _X, _k, _X, _1K, _1M, _1P, _k, _1S];
  var _5 = {
    inc: 3,
    zero: 4,
    next: 5,
    n: 9
  };
  var _2D = {
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
  var _23 = ["Identifier", "next"];
  var _21 = ["Deref", _23];
  var _28 = ["Identifier", "zero"];
  var _26 = ["Deref", _28];
  var _20 = [_21, _26];
  var _2G = ["Def", "one", ["Apply", _20], ["Def", "add", ["Abstr", ["m", ["Abstr", ["n", ["Abstr", ["f", ["Abstr", ["x", ["Apply", [["Apply", [["Apply", [["Apply", [["Deref", ["Identifier", "m"]], ["Deref", ["Identifier", "next"]]]], ["Deref", ["Identifier", "n"]]]], ["Deref", ["Identifier", "f"]]]], ["Deref", ["Identifier", "x"]]]]]]]]]]]], ["Apply", [["Apply", [["Apply", [["Apply", [["Deref", ["Identifier", "add"]], ["Deref", ["Identifier", "one"]]]], ["Deref", ["Identifier", "one"]]]], ["Deref", ["Identifier", "inc"]]]], ["Const", 0]]]]];
  var _1p = [,];
  _1p.length = 0;
  var _1V = [11];

  _C(_D, _0, _5, [], _E, true);
})();