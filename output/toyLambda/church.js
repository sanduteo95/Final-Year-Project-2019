(function () {
  function $_F_sub(__1) {
    return $_E_root(_1u_, __1);
  }

  function $_E_root(__0, __1) {
    return {
      lhs: __0,
      rhs: __1
    };
  }

  function $_D_sub(__2) {
    return $_A_root("Abstr", "n", __2);
  }

  function $_C_sub(__2) {
    return $_A_root("Abstr", "f", __2);
  }

  function $_B_sub(__2) {
    return $_A_root("Abstr", "x", __2);
  }

  function $_A_root(__0, __1, __2) {
    return {
      type: __0,
      binding: __1,
      value: __2
    };
  }

  function $_9_sub(__1) {
    return $_3_root("Identifier", __1);
  }

  function $_8_sub(__1) {
    return $_3_root("Apply", __1);
  }

  function $_7_sub() {
    return $_3_root("Identifier", "n");
  }

  function $_6_sub() {
    return $_3_root("Identifier", "f");
  }

  function $_5_sub(__1) {
    return $_3_root("Deref", __1);
  }

  function $_4_sub() {
    return $_3_root("Identifier", "x");
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
        __captured = [13, _k_, 15];
        break;

      case 1:
        __captured = [15];
        break;

      case 2:
        __captured = [14];
        break;

      case 3:
        __captured = [13];
        break;

      case 4:
        __captured = [12];
        break;

      case 5:
        __captured = [11];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(6);

  var _3y_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _X_ = function (time, console) {
    time && console.time('interpret');
  };

  var _30_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _2w_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _2y_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _d_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _2x_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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
          }, global.setTimeout, _Z_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _Y_.bind(null), _Z_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _Z_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _Z_(term, boundVariables, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _Z_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _Z_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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
        _e_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _f_(term.value, callback);

        break;

      case 'Op':
        _g_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _h_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _i_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _h_ = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;
    let newBoundVariables = Object.assign({}, boundVariables);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newBoundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newBoundVariables[abstraction.binding] = _2w_({
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
        const result = _d_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _2w_({
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

    _2x_(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
  };

  var _i_ = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
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
            let lhs = _d_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _d_(rhsAddress);

                _2y_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _d_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _2y_(rhsAddress, lhs);
            }

            _30_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _2x_(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _2x_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _37_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _2y_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _2z_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _2y_(1, _d_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _2y_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _37_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _e_ = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
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
          if (global.__isAbstract && global.__isAbstract(_d_(address))) {
            callback(null, 1);
          } else {
            console.log(_d_(1));
            callback(null, _2w_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_d_(address))) {
            callback(null, _2w_(_d_(address)));
          } else {
            const newTerm = _d_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_2t_[dereference.value])) {
              false;

              _2x_(newTerm, boundVariables, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _2y_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _2w_(_d_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _2z_(dereference.value, boundVariables, derefCallback);
  };

  var _f_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _2w_(constant));
  };

  var _31_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _d_(lhsAddress);

    const rhs = _d_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _2y_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _2y_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _2y_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _2y_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _2y_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _2y_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _2y_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _2y_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _2y_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _2y_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _2y_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _2y_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _2y_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _2y_(lhsAddress, !lhs);

          break;

        case 'negative':
          _2y_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _2y_(lhsAddress, {
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

  var _g_ = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _30_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _31_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _d_(lhsAddress) || operator.op === 'and' && !_d_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_d_(lhsAddress)) {
          _2x_(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          _2x_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _2x_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _3x_ = function (err, address) {
    const result = _d_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (time, console, waitForInput, toPrint, lookup, callback) {
        time && console.timeEnd('interpret');
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, void 0, _1_, _37_, address === 1, _d_, _3y_);
    } else {
      if (global.__residual) {
        global.__residual("void", function (time, console) {
          time && console.timeEnd('interpret');
        }, void 0, _1_);
      } else {
        void 0;
      }

      if (result !== undefined && result.type === 'Abstr') {
        _30_(2);

        _3y_(null, function (arg) {
          if (!arg) {
            _h_(result, [], [], _3y_, true);
          } else {
            _i_({
              lhs: result,
              rhs: arg
            }, [], [], _3y_, true);
          }
        });
      } else {
        _3y_(err, address > 1 && _d_(address));
      }
    }
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _a_ = function (err, address) {
    return $_0_factoryFunction.call(this, _j_, 0, err, address);
  };

  var _32_ = function (err, address) {
    return $_0_factoryFunction.call(this, _38_, 0, err, address);
  };

  var _39_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3A_, 0, err, address);
  };

  var _3B_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3C_, 0, err, address);
  };

  var _3D_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3E_, 0, err, address);
  };

  var _3F_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3G_, 0, err, address);
  };

  var _3H_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3I_, 0, err, address);
  };

  var _3I_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3J_, 0, err, address);
  };

  var _3K_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3W_, 0, err, address);
  };

  var _3X_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3g_, 0, err, address);
  };

  var _3h_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3q_, 0, err, address);
  };

  var _3r_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3x_, 0, err, address);
  };

  var _j_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _32_(err);
    } else {
      _33_.push(rhsAddress);

      false;
      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _32_(err);
        } else {
          let lhs = _d_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_2M_.lhs.type === 'Deref' && _2M_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _d_(rhsAddress);

              _2y_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _d_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _2y_(rhsAddress, lhs);
          }

          _30_(rhsAddress);

          false;

          _32_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _2x_(_2M_.lhs, _G_, _33_, lhsCallback, false);
    }
  };

  var $_1_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _d_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _d_(__captured__scope_2_[0]);

          _2y_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _d_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _2y_(__captured__scope_2_[0], lhs);
      }

      _30_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _38_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _39_, _2J_, 1, 0, err, lhsAddress);
  };

  var _3J_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3K_, _3L_, 2, 0, err, lhsAddress);
  };

  var _3W_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3X_, _3Y_, 3, 0, err, lhsAddress);
  };

  var _3g_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3h_, _3i_, 4, 0, err, lhsAddress);
  };

  var _3q_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3r_, _3s_, 5, 0, err, lhsAddress);
  };

  var $_2_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _d_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _2w_({
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

  var _3A_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3B_, _2E_, err, address);
  };

  var _3C_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3D_, _2B_, err, address);
  };

  var _3E_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3F_, _28_, err, address);
  };

  var _3G_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3H_, _25_, err, address);
  };

  var _Y_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
  };

  var _1_ = console;

  _X_(void 0, _1_);

  var _A_ = $_4_sub();

  var _8_ = $_5_sub(_A_);

  var _D_ = $_3_root("Const", 1);

  var _5_ = {
    type: "Op",
    op: "plus",
    lhs: _8_,
    rhs: _D_
  };

  var _2_ = $_B_sub(_5_);

  var _t_ = $_4_sub();

  var _r_ = $_5_sub(_t_);

  var _o_ = $_B_sub(_r_);

  var _l_ = $_C_sub(_o_);

  var _1A_ = $_6_sub();

  var _18_ = $_5_sub(_1A_);

  var _1L_ = $_7_sub();

  var _1J_ = $_5_sub(_1L_);

  var _1Q_ = $_6_sub();

  var _1O_ = $_5_sub(_1Q_);

  var _1I_ = $_E_root(_1J_, _1O_);

  var _1G_ = $_8_sub(_1I_);

  var _1V_ = $_4_sub();

  var _1T_ = $_5_sub(_1V_);

  var _1F_ = $_E_root(_1G_, _1T_);

  var _1D_ = $_8_sub(_1F_);

  var _17_ = $_E_root(_18_, _1D_);

  var _15_ = $_8_sub(_17_);

  var _12_ = $_B_sub(_15_);

  var _z_ = $_C_sub(_12_);

  var _w_ = $_D_sub(_z_);

  var _1h_ = $_6_sub();

  var _1f_ = $_5_sub(_1h_);

  var _1l_ = $_4_sub();

  var _1j_ = $_5_sub(_1l_);

  var _1e_ = $_E_root(_1f_, _1j_);

  var _1c_ = $_8_sub(_1e_);

  var _1a_ = $_B_sub(_1c_);

  var _1Y_ = $_C_sub(_1a_);

  var _1w_ = $_6_sub();

  var _1u_ = $_5_sub(_1w_);

  var _23_ = $_4_sub();

  var _21_ = $_5_sub(_23_);

  var _20_ = $_F_sub(_21_);

  var _1y_ = $_8_sub(_20_);

  var _1t_ = $_F_sub(_1y_);

  var _1r_ = $_8_sub(_1t_);

  var _1p_ = $_B_sub(_1r_);

  var _1n_ = $_C_sub(_1p_);

  var _2V_ = $_9_sub("m");

  var _2T_ = $_5_sub(_2V_);

  var _2a_ = $_9_sub("next");

  var _2Y_ = $_5_sub(_2a_);

  var _2S_ = $_E_root(_2T_, _2Y_);

  var _2Q_ = $_8_sub(_2S_);

  var _2f_ = $_7_sub();

  var _2d_ = $_5_sub(_2f_);

  var _2P_ = $_E_root(_2Q_, _2d_);

  var _2N_ = $_8_sub(_2P_);

  var _2k_ = $_6_sub();

  var _2i_ = $_5_sub(_2k_);

  var _2M_ = $_E_root(_2N_, _2i_);

  var _2K_ = $_8_sub(_2M_);

  var _2p_ = $_4_sub();

  var _2n_ = $_5_sub(_2p_);

  var _2J_ = $_E_root(_2K_, _2n_);

  var _2H_ = $_8_sub(_2J_);

  var _2E_ = $_B_sub(_2H_);

  var _2B_ = $_C_sub(_2E_);

  var _28_ = $_D_sub(_2B_);

  var _25_ = $_A_root("Abstr", "m", _28_);

  var _k_ = [,,, _2_, _l_, _w_, _1Y_, _1Y_, _1n_, _1n_, _25_, 0, _2_, _1n_, _1n_, 0];
  var _2t_ = [];
  _2t_.inc = true;
  _2t_.zero = true;
  _2t_.next = true;
  _2t_.one = true;
  _2t_.wo = true;
  _2t_.add = true;
  var _H_ = {
    address: 1
  };
  var _J_ = {
    address: 2
  };
  var _G_ = {
    _print: _H_,
    _read: _J_,
    inc: 3,
    zero: 4,
    next: 5,
    one: 7,
    wo: 9,
    add: 10,
    m: 14,
    n: 13,
    f: 12,
    x: 11
  };

  var _3O_ = $_9_sub("add");

  var _3M_ = $_5_sub(_3O_);

  var _3T_ = $_9_sub("wo");

  var _3R_ = $_5_sub(_3T_);

  var _3L_ = $_E_root(_3M_, _3R_);

  var _3Z_ = $_8_sub(_3L_);

  var _3d_ = $_9_sub("wo");

  var _3b_ = $_5_sub(_3d_);

  var _3Y_ = $_E_root(_3Z_, _3b_);

  var _3j_ = $_8_sub(_3Y_);

  var _3n_ = $_9_sub("inc");

  var _3l_ = $_5_sub(_3n_);

  var _3i_ = $_E_root(_3j_, _3l_);

  var _3s_ = $_E_root({
    type: "Apply",
    value: _3i_
  }, {
    type: "Const",
    value: 0
  });

  var _33_ = [15,,,,];
  _33_.length = 1;

  _Y_(_Z_, _2_, _G_, [], _a_, true);
})();