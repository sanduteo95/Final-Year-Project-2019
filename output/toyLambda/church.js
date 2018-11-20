(function () {
  function $_F_sub(__1) {
    return $_E_root(_1r_, __1);
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
        __captured = [13, _h_, 15];
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

  var _3w_ = function (err, result) {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _2x_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _2t_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _2v_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _a_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _2u_ = function (term, env, addressesToBind, callback, isRhsApplication) {
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

          global.__residual("void", function (setTimeout, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) {
            setTimeout(function () {
              interpretTermLazy(term, env, addressesToBind, callback, isRhsApplication);
            }, 100);
          }, global.setTimeout, _W_, term, env, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _V_.bind(null), _W_, term, env, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _W_(term, env, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 125) {
        // call the function with a timeout
        setTimeout(function () {
          _W_(term, env, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _W_(term, env, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _W_ = function (term, env, addressesToBind, callback, isRhsApplication) {
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
        _b_(term.value, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _c_(term.value, callback);

        break;

      case 'Op':
        _d_(term, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _e_(term, env, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _f_(term.value, env, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _e_ = function (abstraction, env, addressesToBind, callback, isRhsApplication) {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _2t_({
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
        const result = _a_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _2t_({
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

    _2u_(abstraction.value, newEnv, addressesToBind, abstrCallback, true);
  };

  var _f_ = function (application, env, addressesToBind, callback, isRhsApplication) {
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
            let lhs = _a_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _a_(rhsAddress);

                _2v_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _a_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _2v_(rhsAddress, lhs);
            }

            _2x_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _2u_(application.lhs, env, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _2u_(application.rhs, env, [], rhsCallback, true);
  };

  var _34_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _2v_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _2w_ = function (identifier, env, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = env[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _2v_(1, _a_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _2v_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _34_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _b_ = function (dereference, env, addressesToBind, callback, isRhsApplication) {
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
          if (global.__isAbstract && global.__isAbstract(_a_(address))) {
            callback(null, 1);
          } else {
            console.log(_a_(1));
            callback(null, _2t_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_a_(address))) {
            callback(null, _2t_(_a_(address)));
          } else {
            const newTerm = _a_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_2q_[dereference.value])) {
              false;

              _2u_(newTerm, env, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _2v_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _2t_(_a_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _2w_(dereference.value, env, derefCallback);
  };

  var _c_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _2t_(constant));
  };

  var _2y_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _a_(lhsAddress);

    const rhs = _a_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _2v_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _2v_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _2v_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _2v_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _2v_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _2v_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _2v_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _2v_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _2v_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _2v_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _2v_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _2v_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _2v_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _2v_(lhsAddress, !lhs);

          break;

        case 'negative':
          _2v_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _2v_(lhsAddress, {
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

  var _d_ = function (operator, env, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _2x_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _2y_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _a_(lhsAddress) || operator.op === 'and' && !_a_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_a_(lhsAddress)) {
          _2u_(operator.rhs, env, addressesToBind, callback, isRhsApplication);
        } else {
          _2u_(operator.rhs, env, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _2u_(operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _3u_ = function (err, address) {
    ;

    const result = _a_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (console, waitForInput, toPrint, lookup, callback) {
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, _3v_, _34_, address === 1, _a_, _3w_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _2x_(2);

        _3w_(null, function () {
          let argumentAddresses = [];

          for (let i = 0; i < arguments.length; i++) {
            argumentAddresses.push(_2t_(arguments[i]));
          }

          _e_(result, [], argumentAddresses, _3u_, true);
        });
      } else {
        _3w_(err, address > 1 && _a_(address));
      }
    }
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _X_ = function (err, address) {
    return $_0_factoryFunction.call(this, _g_, 0, err, address);
  };

  var _2z_ = function (err, address) {
    return $_0_factoryFunction.call(this, _35_, 0, err, address);
  };

  var _36_ = function (err, address) {
    return $_0_factoryFunction.call(this, _37_, 0, err, address);
  };

  var _38_ = function (err, address) {
    return $_0_factoryFunction.call(this, _39_, 0, err, address);
  };

  var _3A_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3B_, 0, err, address);
  };

  var _3C_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3D_, 0, err, address);
  };

  var _3E_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3F_, 0, err, address);
  };

  var _3F_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3G_, 0, err, address);
  };

  var _3H_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3T_, 0, err, address);
  };

  var _3U_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3d_, 0, err, address);
  };

  var _3e_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3n_, 0, err, address);
  };

  var _3o_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3u_, 0, err, address);
  };

  var _g_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _2z_(err);
    } else {
      _30_.push(rhsAddress);

      false;
      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _2z_(err);
        } else {
          let lhs = _a_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_2J_.lhs.type === 'Deref' && _2J_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _a_(rhsAddress);

              _2v_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _a_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _2v_(rhsAddress, lhs);
          }

          _2x_(rhsAddress);

          false;

          _2z_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _2u_(_2J_.lhs, _E_, _30_, lhsCallback, false);
    }
  };

  var $_1_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _a_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _a_(__captured__scope_2_[0]);

          _2v_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _a_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _2v_(__captured__scope_2_[0], lhs);
      }

      _2x_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _35_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _36_, _2G_, 1, 0, err, lhsAddress);
  };

  var _3G_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3H_, _3I_, 2, 0, err, lhsAddress);
  };

  var _3T_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3U_, _3V_, 3, 0, err, lhsAddress);
  };

  var _3d_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3e_, _3f_, 4, 0, err, lhsAddress);
  };

  var _3n_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3o_, _3p_, 5, 0, err, lhsAddress);
  };

  var $_2_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _a_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _2t_({
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

  var _37_ = function (err, address) {
    return $_2_factoryFunction.call(this, _38_, _2B_, err, address);
  };

  var _39_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3A_, _28_, err, address);
  };

  var _3B_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3C_, _25_, err, address);
  };

  var _3D_ = function (err, address) {
    return $_2_factoryFunction.call(this, _3E_, _22_, err, address);
  };

  var _V_ = function (interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) {
    interpretTermLazy(term, env, addressesToBind, callback, isRhsApplication);
  };

  var _8_ = $_4_sub();

  var _6_ = $_5_sub(_8_);

  var _B_ = $_3_root("Const", 1);

  var _3_ = {
    type: "Op",
    op: "plus",
    lhs: _6_,
    rhs: _B_
  };

  var _0_ = $_B_sub(_3_);

  var _q_ = $_4_sub();

  var _o_ = $_5_sub(_q_);

  var _l_ = $_B_sub(_o_);

  var _i_ = $_C_sub(_l_);

  var _17_ = $_6_sub();

  var _15_ = $_5_sub(_17_);

  var _1I_ = $_7_sub();

  var _1G_ = $_5_sub(_1I_);

  var _1N_ = $_6_sub();

  var _1L_ = $_5_sub(_1N_);

  var _1F_ = $_E_root(_1G_, _1L_);

  var _1D_ = $_8_sub(_1F_);

  var _1S_ = $_4_sub();

  var _1Q_ = $_5_sub(_1S_);

  var _1C_ = $_E_root(_1D_, _1Q_);

  var _1A_ = $_8_sub(_1C_);

  var _14_ = $_E_root(_15_, _1A_);

  var _12_ = $_8_sub(_14_);

  var _z_ = $_B_sub(_12_);

  var _w_ = $_C_sub(_z_);

  var _t_ = $_D_sub(_w_);

  var _1e_ = $_6_sub();

  var _1c_ = $_5_sub(_1e_);

  var _1i_ = $_4_sub();

  var _1g_ = $_5_sub(_1i_);

  var _1b_ = $_E_root(_1c_, _1g_);

  var _1Z_ = $_8_sub(_1b_);

  var _1X_ = $_B_sub(_1Z_);

  var _1V_ = $_C_sub(_1X_);

  var _1t_ = $_6_sub();

  var _1r_ = $_5_sub(_1t_);

  var _20_ = $_4_sub();

  var _1y_ = $_5_sub(_20_);

  var _1x_ = $_F_sub(_1y_);

  var _1v_ = $_8_sub(_1x_);

  var _1q_ = $_F_sub(_1v_);

  var _1o_ = $_8_sub(_1q_);

  var _1m_ = $_B_sub(_1o_);

  var _1k_ = $_C_sub(_1m_);

  var _2S_ = $_9_sub("m");

  var _2Q_ = $_5_sub(_2S_);

  var _2X_ = $_9_sub("next");

  var _2V_ = $_5_sub(_2X_);

  var _2P_ = $_E_root(_2Q_, _2V_);

  var _2N_ = $_8_sub(_2P_);

  var _2c_ = $_7_sub();

  var _2a_ = $_5_sub(_2c_);

  var _2M_ = $_E_root(_2N_, _2a_);

  var _2K_ = $_8_sub(_2M_);

  var _2h_ = $_6_sub();

  var _2f_ = $_5_sub(_2h_);

  var _2J_ = $_E_root(_2K_, _2f_);

  var _2H_ = $_8_sub(_2J_);

  var _2m_ = $_4_sub();

  var _2k_ = $_5_sub(_2m_);

  var _2G_ = $_E_root(_2H_, _2k_);

  var _2E_ = $_8_sub(_2G_);

  var _2B_ = $_B_sub(_2E_);

  var _28_ = $_C_sub(_2B_);

  var _25_ = $_D_sub(_28_);

  var _22_ = $_A_root("Abstr", "m", _25_);

  var _h_ = [,,, _0_, _i_, _t_, _1V_, _1V_, _1k_, _1k_, _22_, 0, _0_, _1k_, _1k_, 0];
  var _2q_ = [];
  _2q_.inc = true;
  _2q_.zero = true;
  _2q_.next = true;
  _2q_.one = true;
  _2q_.wo = true;
  _2q_.add = true;
  var _F_ = {
    address: 1
  };
  var _H_ = {
    address: 2
  };
  var _E_ = {
    _print: _F_,
    _read: _H_,
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
  var _3v_ = console;

  var _3L_ = $_9_sub("add");

  var _3J_ = $_5_sub(_3L_);

  var _3Q_ = $_9_sub("wo");

  var _3O_ = $_5_sub(_3Q_);

  var _3I_ = $_E_root(_3J_, _3O_);

  var _3W_ = $_8_sub(_3I_);

  var _3a_ = $_9_sub("wo");

  var _3Y_ = $_5_sub(_3a_);

  var _3V_ = $_E_root(_3W_, _3Y_);

  var _3g_ = $_8_sub(_3V_);

  var _3k_ = $_9_sub("inc");

  var _3i_ = $_5_sub(_3k_);

  var _3f_ = $_E_root(_3g_, _3i_);

  var _3p_ = $_E_root({
    type: "Apply",
    value: _3f_
  }, {
    type: "Const",
    value: 0
  });

  var _30_ = [15,,,,];
  _30_.length = 1;

  _V_(_W_, _0_, _E_, [], _X_, true);
})();