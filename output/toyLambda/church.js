(function () {
  function $_H_root(__0, __1) {
    return {
      lhs: __0,
      rhs: __1
    };
  }

  function $_G_sub(__2) {
    return $_B_root("Abstr", "n", __2);
  }

  function $_F_sub(__2) {
    return $_B_root("Abstr", "x", __2);
  }

  function $_E_sub(__2) {
    return $_B_root("Abstr", "f", __2);
  }

  function $_D_sub(__2) {
    return $_B_root("Abstr", "y", __2);
  }

  function $_C_sub(__2) {
    return $_B_root("Abstr", "z", __2);
  }

  function $_B_root(__0, __1, __2) {
    return {
      type: __0,
      binding: __1,
      value: __2
    };
  }

  function $_A_sub(__1) {
    return $_3_root("Apply", __1);
  }

  function $_9_sub(__1) {
    return $_3_root("Deref", __1);
  }

  function $_8_sub() {
    return $_3_root("Deref", _1a_);
  }

  function $_7_sub() {
    return $_3_root("Deref", _1J_);
  }

  function $_6_sub() {
    return $_3_root("Const", 1);
  }

  function $_5_sub() {
    return $_3_root("Deref", _15_);
  }

  function $_4_sub(__1) {
    return $_3_root("Identifier", __1);
  }

  function $_3_root(__0, __1) {
    return {
      type: __0,
      value: __1
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [13, _w_, 21];
        break;

      case 1:
        __captured = [21];
        break;

      case 2:
        __captured = [20];
        break;

      case 3:
        __captured = [17];
        break;

      case 4:
        __captured = [14];
        break;

      case 5:
        __captured = [11];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(6);

  var _45_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _J_ = function (time, console) {
    time && console.time('interpret');
  };

  var _36_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _39_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _35_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _T_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _37_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
            }, 100);
          }, global.setTimeout, _L_, term, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _K_.bind(null), _L_, term, boundVariables, addressesToBind, callback, isAbstraction);
        }
      } else {
        _L_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _L_(term, boundVariables, addressesToBind, callback, isAbstraction);
        }, 100);
      } else {
        // just call the function as it is
        _L_(term, boundVariables, addressesToBind, callback, isAbstraction);
      }
    }
  };

  var _L_ = function (term, boundVariables, addressesToBind, callback, isAbstraction) {
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
        _U_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Const':
        _V_(term.value, callback);

        break;

      case 'Op':
        _W_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Abstr':
        _X_(term, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      case 'Apply':
        _Y_(term.value, boundVariables, addressesToBind, termCallback, isAbstraction);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _X_ = function (abstraction, boundVariables, addressesToBind, callback, isAbstraction) {
    false;
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      boundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
      false;
    }

    const abstrCallback = function (err, address) {
      if (err) {
        callback(err);
      } else {
        const result = _T_(address); // we have postponed the input


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isAbstraction && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _39_({
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

    _37_(abstraction.value, boundVariables, addressesToBind, abstrCallback, true);
  };

  var _Y_ = function (application, boundVariables, addressesToBind, callback, isAbstraction) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = function (err, rhsAddress) {
      if (err) {
        callback(err);
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;

        const lhsCallback = function (err, lhsAddress) {
          if (err) {
            callback(err);
          } else {
            let lhs = _T_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _T_(rhsAddress);

                _35_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _T_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _35_(rhsAddress, lhs);
            }

            _36_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _37_(application.lhs, boundVariables, addressesToBind, lhsCallback, isAbstraction);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _37_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _3G_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _35_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _3A_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _35_(1, _T_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _35_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _3G_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _U_ = function (dereference, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    if (dereference.type !== 'Identifier') {
      return callback(new Error('Failed to interpreter dereference for ' + dereference.type), null);
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = function (err, address) {
      if (err) {
        // only return the error if we're not in an abstraction
        if (!isAbstraction) {
          callback(err);
        } else {
          // increase the stack address and store the value of the identifier there
          callback(null, _39_({
            type: 'Deref',
            value: dereference
          }));
        }
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_T_(address))) {
            callback(null, 1);
          } else {
            console.log(_T_(1));
            callback(null, _39_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_T_(address))) {
            callback(null, _39_(_T_(address)));
          } else {
            const newTerm = _T_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply')) {
              false; // filter out variables that were defined after the current identifier

              let scopedBoundVariables = {};
              Object.keys(boundVariables).forEach(function (variable) {
                if (boundVariables[variable] <= address) {
                  scopedBoundVariables[variable] = boundVariables[variable];
                }
              });

              _37_(newTerm, scopedBoundVariables, addressesToBind, callback, newTerm.type === 'Abstr');
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _35_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _39_(_T_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _3A_(dereference.value, boundVariables, derefCallback);
  };

  var _V_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _39_(constant));
  };

  var _3B_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _T_(lhsAddress);

    const rhs = _T_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _35_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _35_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _35_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _35_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _35_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _35_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _35_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _35_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _35_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _35_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _35_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _35_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _35_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _35_(lhsAddress, !lhs);

          break;

        case 'negative':
          _35_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _35_(lhsAddress, {
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

  var _W_ = function (operator, boundVariables, addressesToBind, callback, isAbstraction) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _36_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _3B_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _T_(lhsAddress) || operator.op === 'and' && !_T_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_T_(lhsAddress)) {
          _37_(operator.rhs, boundVariables, addressesToBind, callback, isAbstraction);
        } else {
          _37_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isAbstraction);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _37_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isAbstraction);
  };

  var _44_ = function (err, address) {
    const result = _T_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (time, console, waitForInput, toPrint, lookup, callback) {
        time && console.timeEnd('interpret');
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, void 0, _1_, _3G_, address === 1, _T_, _45_);
    } else {
      if (global.__residual) {
        global.__residual("void", function (time, console) {
          time && console.timeEnd('interpret');
        }, void 0, _1_);
      } else {
        void 0;
      }

      if (result !== undefined && result.type === 'Abstr') {
        _36_(2);

        _45_(null, function (arg) {
          if (!arg) {
            _X_(result, [], [], _45_, true);
          } else {
            _Y_({
              lhs: result,
              rhs: arg
            }, [], [], _45_, true);
          }
        });
      } else {
        _45_(err, address > 1 && _T_(address));
      }
    }
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _P_ = function (err, address) {
    return $_0_factoryFunction.call(this, _38_, 0, err, address);
  };

  var _3F_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3H_, 0, err, address);
  };

  var _3I_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3J_, 0, err, address);
  };

  var _3K_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3L_, 0, err, address);
  };

  var _3M_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3N_, 0, err, address);
  };

  var _3O_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3P_, 0, err, address);
  };

  var _3P_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3Q_, 0, err, address);
  };

  var _3R_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3d_, 0, err, address);
  };

  var _3e_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3n_, 0, err, address);
  };

  var _3o_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3x_, 0, err, address);
  };

  var _3y_ = function (err, address) {
    return $_0_factoryFunction.call(this, _44_, 0, err, address);
  };

  var _M_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _P_(err);
    } else {
      _Q_.push(rhsAddress);

      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _P_(err);
        } else {
          let lhs = _T_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_Z_.lhs.type === 'Deref' && _Z_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _T_(rhsAddress);

              _35_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _T_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _35_(rhsAddress, lhs);
          }

          _36_(rhsAddress);

          false;

          _P_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _37_(_Z_.lhs, _7_, _Q_, lhsCallback, true);
    }
  };

  var $_2_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _T_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _39_({
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

  var _3H_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3I_, _2M_, err, address);
  };

  var _3J_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3K_, _2J_, err, address);
  };

  var _3L_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3M_, _2G_, err, address);
  };

  var _3N_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3O_, _2D_, err, address);
  };

  var $_1_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _T_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _T_(__captured__scope_2_[0]);

          _35_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _T_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _35_(__captured__scope_2_[0], lhs);
      }

      _36_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _38_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3F_, _2R_, 1, 0, err, lhsAddress);
  };

  var _3Q_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3R_, _3S_, 2, 0, err, lhsAddress);
  };

  var _3d_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3e_, _3f_, 3, 0, err, lhsAddress);
  };

  var _3n_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3o_, _3p_, 4, 0, err, lhsAddress);
  };

  var _3x_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3y_, _3z_, 5, 0, err, lhsAddress);
  };

  var _K_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isAbstraction) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isAbstraction);
  };

  var _1_ = console;

  _J_(void 0, _1_);

  var _15_ = $_4_sub("z");

  var _13_ = $_5_sub();

  var _18_ = $_6_sub();

  var _10_ = {
    type: "Op",
    op: "plus",
    lhs: _13_,
    rhs: _18_
  };

  var _x_ = $_C_sub(_10_);

  var _1J_ = $_4_sub("y");

  var _1H_ = $_7_sub();

  var _1E_ = $_D_sub(_1H_);

  var _1B_ = $_E_sub(_1E_);

  var _1a_ = $_4_sub("f");

  var _1Y_ = $_8_sub();

  var _1l_ = $_4_sub("n");

  var _1j_ = $_9_sub(_1l_);

  var _1q_ = $_4_sub("f");

  var _1o_ = $_9_sub(_1q_);

  var _1i_ = $_H_root(_1j_, _1o_);

  var _1g_ = $_A_sub(_1i_);

  var _1v_ = $_4_sub("x");

  var _1t_ = $_9_sub(_1v_);

  var _1f_ = $_H_root(_1g_, _1t_);

  var _1d_ = $_A_sub(_1f_);

  var _1X_ = $_H_root(_1Y_, _1d_);

  var _1V_ = $_A_sub(_1X_);

  var _1S_ = $_F_sub(_1V_);

  var _1P_ = $_E_sub(_1S_);

  var _1M_ = $_G_sub(_1P_);

  var _1y_ = $_7_sub();

  var _20_ = $_D_sub(_1y_);

  var _29_ = $_8_sub();

  var _2B_ = $_9_sub(_1v_);

  var _28_ = $_H_root(_29_, _2B_);

  var _26_ = $_A_sub(_28_);

  var _24_ = $_F_sub(_26_);

  var _22_ = $_E_sub(_24_);

  var _i_ = $_4_sub("m");

  var _g_ = $_9_sub(_i_);

  var _n_ = $_4_sub("next");

  var _l_ = $_9_sub(_n_);

  var _f_ = $_H_root(_g_, _l_);

  var _d_ = $_A_sub(_f_);

  var _s_ = $_4_sub("n");

  var _q_ = $_9_sub(_s_);

  var _c_ = $_H_root(_d_, _q_);

  var _a_ = $_A_sub(_c_);

  var _4_ = $_4_sub("f");

  var _2_ = $_9_sub(_4_);

  var _Z_ = $_H_root(_a_, _2_);

  var _2S_ = $_A_sub(_Z_);

  var _2W_ = $_4_sub("x");

  var _2U_ = $_9_sub(_2W_);

  var _2R_ = $_H_root(_2S_, _2U_);

  var _2P_ = $_A_sub(_2R_);

  var _2M_ = $_F_sub(_2P_);

  var _2J_ = $_E_sub(_2M_);

  var _2G_ = $_G_sub(_2J_);

  var _2D_ = $_B_root("Abstr", "m", _2G_);

  var _2c_ = $_5_sub();

  var _2e_ = $_6_sub();

  var _2a_ = {
    type: "Op",
    op: "plus",
    lhs: _2c_,
    rhs: _2e_
  };

  var _2g_ = $_C_sub(_2a_);

  var _2l_ = $_8_sub();

  var _2n_ = $_9_sub(_1v_);

  var _2k_ = $_H_root(_2l_, _2n_);

  var _2i_ = $_A_sub(_2k_);

  var _2p_ = $_F_sub(_2i_);

  var _2r_ = $_E_sub(_2p_);

  var _2w_ = $_8_sub();

  var _2y_ = $_9_sub(_1v_);

  var _2v_ = $_H_root(_2w_, _2y_);

  var _2t_ = $_A_sub(_2v_);

  var _30_ = $_F_sub(_2t_);

  var _32_ = $_E_sub(_30_);

  var _w_ = [,,, _x_, _1B_, _1M_, _1y_, _20_, _22_, _22_, _2D_, 0, _2a_, 1, _2g_, _2i_, _2p_, _2r_, _2t_, _30_, _32_, 0];
  var _7_ = {
    inc: 3,
    zero: 4,
    next: 5,
    one: 9,
    add: 10,
    m: 20,
    n: 17,
    f: 14,
    x: 11
  };

  var _3V_ = $_4_sub("add");

  var _3T_ = $_9_sub(_3V_);

  var _3a_ = $_4_sub("one");

  var _3Y_ = $_9_sub(_3a_);

  var _3S_ = $_H_root(_3T_, _3Y_);

  var _3g_ = $_A_sub(_3S_);

  var _3k_ = $_4_sub("one");

  var _3i_ = $_9_sub(_3k_);

  var _3f_ = $_H_root(_3g_, _3i_);

  var _3q_ = $_A_sub(_3f_);

  var _3u_ = $_4_sub("inc");

  var _3s_ = $_9_sub(_3u_);

  var _3p_ = $_H_root(_3q_, _3s_);

  var _3z_ = $_H_root({
    type: "Apply",
    value: _3p_
  }, {
    type: "Const",
    value: 0
  });

  var _Q_ = [21,,,,];
  _Q_.length = 1;

  _K_(_L_, _2_, _7_, [], _M_, true);
})();