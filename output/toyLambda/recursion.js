(function () {
  function $_C_sub(__1, __2, __3) {
    return $_B_root("Op", __1, __2, __3);
  }

  function $_B_root(__0, __1, __2, __3) {
    return {
      type: __0,
      op: __1,
      lhs: __2,
      rhs: __3
    };
  }

  function $_A_sub() {
    return $_4_root("Identifier", "sum");
  }

  function $_9_sub(__1) {
    return $_4_root("Apply", __1);
  }

  function $_8_sub() {
    return $_4_root("Identifier", "f");
  }

  function $_7_sub(__1) {
    return $_4_root("Const", __1);
  }

  function $_6_sub(__1) {
    return $_4_root("Deref", __1);
  }

  function $_5_sub() {
    return $_4_root("Identifier", "x");
  }

  function $_4_root(__0, __1) {
    return {
      type: __0,
      value: __1
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [13, _c_, 8];
        break;

      case 1:
        __captured = [6];
        break;

      case 2:
        __captured = [5];
        break;

      case 3:
        __captured = [4];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(4);

  var _2E_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _H_ = function (time, console) {
    time && console.time('interpret');
  };

  var _U_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _1b_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _1c_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _O_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _1Z_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    // increase number of term calls
    __captured__scope_1_[0]++;

    if (global.__residual) {
      // if we're in pepack, and weve reached its maximum nubmer of calls
      if (__captured__scope_1_[0] > 125 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1_[0] > 125) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
            }, 100);
          }, global.setTimeout, _J_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _I_.bind(null), _J_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _J_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _J_(term, boundVariables, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _J_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _J_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const termCallback = function (err, address) {
      // when the function returns, decrease number of term calls
      __captured__scope_1_[0]--;
      false;
      callback(err, address);
    };

    switch (term.type) {
      case 'Deref':
        _P_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _Q_(term.value, callback);

        break;

      case 'Op':
        _R_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _S_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _T_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _S_ = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;
    let newBoundVariables = Object.assign({}, boundVariables);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newBoundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newBoundVariables[abstraction.binding] = _1b_({
        type: 'Deref',
        value: {
          type: 'Identifier',
          value: abstraction.binding
        }
      });
    }

    false;

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        const result = _O_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _1b_({
            type: 'Abstr',
            binding: abstraction.binding,
            value: result
          });
        }
      }

      if (hasBeenBound) {
        false;
      } // pass the address to the callback


      callback(null, address);
    };

    _1Z_(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
  };

  var _T_ = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = function (err, rhsAddress) {
      if (err) {
        callback(err);
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;
        false;

        const lhsCallback = function (err, lhsAddress) {
          if (err) {
            callback(err);
          } else {
            let lhs = _O_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _O_(rhsAddress);

                _1c_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _O_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _1c_(rhsAddress, lhs);
            }

            _U_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _1Z_(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1Z_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _1k_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _1c_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _1d_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _1c_(1, _O_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _1c_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _1k_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _P_ = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    if (dereference.type !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_O_(address))) {
            callback(null, 1);
          } else {
            console.log(_O_(1));
            callback(null, _1b_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_O_(address))) {
            callback(null, _1b_(_O_(address)));
          } else {
            const newTerm = _O_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_1W_[dereference.value])) {
              false;

              _1Z_(newTerm, boundVariables, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _1c_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _1b_(_O_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1d_(dereference.value, boundVariables, derefCallback);
  };

  var _Q_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _1b_(constant));
  };

  var _1Y_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _O_(lhsAddress);

    const rhs = _O_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _1c_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _1c_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _1c_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _1c_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _1c_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _1c_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _1c_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _1c_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _1c_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _1c_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _1c_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _1c_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _1c_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _1c_(lhsAddress, !lhs);

          break;

        case 'negative':
          _1c_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _1c_(lhsAddress, {
        type: 'Op',
        op: operator,
        lhs: lhs.type !== undefined ? lhs : {
          type: 'Const',
          value: lhs
        },
        rhs: rhs.type !== undefined ? rhs : {
          type: 'Const',
          value: rhs
        }
      });
    }

    ;
    callback(err, lhsAddress);
  };

  var _R_ = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _U_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1Y_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _O_(lhsAddress) || operator.op === 'and' && !_O_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_O_(lhsAddress)) {
          _1Z_(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          _1Z_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _1Z_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _2D_ = function (err, address) {
    const result = _O_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (time, console, waitForInput, toPrint, lookup, callback) {
        time && console.timeEnd('interpret');
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, void 0, _1_, _1k_, address === 1, _O_, _2E_);
    } else {
      if (global.__residual) {
        global.__residual("void", function (time, console) {
          time && console.timeEnd('interpret');
        }, void 0, _1_);
      } else {
        void 0;
      }

      if (result !== undefined && result.type === 'Abstr') {
        _U_(2);

        _2E_(null, function (arg) {
          if (!arg) {
            _S_(result, [], [], _2E_, true);
          } else {
            _T_({
              lhs: result,
              rhs: arg
            }, [], [], _2E_, true);
          }
        });
      } else {
        _2E_(err, address > 1 && _O_(address));
      }
    }
  };

  var $_1_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _N_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1a_, 0, err, address);
  };

  var _1g_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1l_, 0, err, address);
  };

  var _1m_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1n_, 0, err, address);
  };

  var _1o_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1p_, 0, err, address);
  };

  var _1q_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1r_, 0, err, address);
  };

  var _1s_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1t_, 0, err, address);
  };

  var _1u_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1v_, 0, err, address);
  };

  var _1v_ = function (err, address) {
    return $_1_factoryFunction.call(this, _1w_, 0, err, address);
  };

  var _1x_ = function (err, address) {
    return $_1_factoryFunction.call(this, _26_, 0, err, address);
  };

  var _27_ = function (err, address) {
    return $_1_factoryFunction.call(this, _2D_, 0, err, address);
  };

  var _1a_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _1g_(err);
    } else {
      _1h_.push(rhsAddress);

      false;
      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _1g_(err);
        } else {
          let lhs = _O_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_15_.lhs.type === 'Deref' && _15_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _O_(rhsAddress);

              _1c_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _O_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _1c_(rhsAddress, lhs);
          }

          _U_(rhsAddress);

          false;

          _1g_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _1Z_(_15_.lhs, _7_, _1h_, lhsCallback, false);
    }
  };

  var $_2_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _O_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _O_(__captured__scope_2_[0]);

          _1c_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _O_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _1c_(__captured__scope_2_[0], lhs);
      }

      _U_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _1n_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1o_, _o_, 1, 0, err, lhsAddress);
  };

  var _1w_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1x_, _1y_, 2, 0, err, lhsAddress);
  };

  var _26_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _27_, _28_, 3, 0, err, lhsAddress);
  };

  var $_3_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _O_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _1b_({
          type: 'Abstr',
          binding: abstraction.binding,
          value: result
        });
      }
    }

    {
      false;
    }
    callback(null, address);
  };

  var _1r_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1s_, _g_, err, address);
  };

  var _1t_ = function (err, address) {
    return $_3_factoryFunction.call(this, _1u_, _d_, err, address);
  };

  var $_0_factoryFunction = function (callback, operator, addressesToBind, err, lhsAddress) {
    if (err) {
      return callback(err, null);
    }

    _U_(lhsAddress);

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return callback(err, null);
      }

      _1Y_(operator.op, lhsAddress, rhsAddress, callback);
    };

    if (operator.op !== 'negate' && operator.op !== 'negative') {
      if (operator.op === 'or' && _O_(lhsAddress) || operator.op === 'and' && !_O_(lhsAddress)) {
        callback(null, lhsAddress);
      } else if (operator.op === 'or' && !_O_(lhsAddress)) {
        _1Z_(operator.rhs, _7_, addressesToBind, callback, true);
      } else {
        _1Z_(operator.rhs, _7_, addressesToBind, rhsOpCallback, true);
      }
    } else {
      rhsOpCallback(null, 0);
    }
  };

  var _K_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _N_, _V_, _F_, err, lhsAddress);
  };

  var _1p_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _1q_, _j_, _1h_, err, lhsAddress);
  };

  var _1l_ = function (err, rhsAddress) {
    if (err) {
      return _1m_(err, null);
    }

    _1Y_(_p_.op, 8, rhsAddress, _1m_);
  };

  var _I_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
  };

  var _1_ = console;

  _H_(void 0, _1_);

  var _x_ = $_5_sub();

  var _v_ = $_6_sub(_x_);

  var _10_ = $_7_sub(10);

  var _s_ = $_C_sub("less", _v_, _10_);

  var _18_ = $_8_sub();

  var _16_ = $_6_sub(_18_);

  var _4_ = $_5_sub();

  var _2_ = $_6_sub(_4_);

  var _Y_ = $_7_sub(1);

  var _V_ = $_C_sub("plus", _2_, _Y_);

  var _15_ = {
    lhs: _16_,
    rhs: _V_
  };

  var _13_ = $_9_sub(_15_);

  var _p_ = $_C_sub("and", _s_, _13_);

  var _1G_ = $_A_sub();

  var _1E_ = $_6_sub(_1G_);

  var _1L_ = $_5_sub();

  var _1J_ = $_6_sub(_1L_);

  var _1B_ = $_C_sub("plus", _1E_, _1J_);

  var _o_ = {
    lhs: _p_,
    rhs: _1B_
  };

  var _m_ = $_9_sub(_o_);

  var _1Q_ = $_A_sub();

  var _1O_ = $_6_sub(_1Q_);

  var _j_ = $_C_sub("or", _m_, _1O_);

  var _g_ = {
    type: "Abstr",
    binding: "sum",
    value: _j_
  };
  var _d_ = {
    type: "Abstr",
    binding: "x",
    value: _g_
  };
  var _c_ = [,,, _d_, 0, 1, 1, 1, true];
  var _1W_ = [];
  _1W_.f = true;
  var _8_ = {
    address: 1
  };
  var _A_ = {
    address: 2
  };
  var _7_ = {
    _print: _8_,
    _read: _A_,
    f: 3,
    x: 5,
    sum: 4
  };
  var _F_ = [];

  var _21_ = $_8_sub();

  var _1z_ = $_6_sub(_21_);

  var _24_ = $_7_sub(1);

  var _1y_ = {
    lhs: _1z_,
    rhs: _24_
  };
  var _28_ = {
    lhs: {
      type: "Apply",
      value: _1y_
    },
    rhs: {
      type: "Const",
      value: 0
    }
  };
  var _1h_ = [6,,];
  _1h_.length = 1;

  _I_(_J_, _2_, _7_, _F_, _K_, true);
})();