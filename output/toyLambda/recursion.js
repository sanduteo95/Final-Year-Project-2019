(function () {
  function $_F_sub(__3, __4) {
    return $_E_root(_E_, _G_, 3, __3, __4);
  }

  function $_E_root(__0, __1, __2, __3, __4) {
    return {
      _print: __0,
      _read: __1,
      f: __2,
      x: __3,
      sum: __4
    };
  }

  function $_D_sub(__1, __2, __3) {
    return $_C_root("Op", __1, __2, __3);
  }

  function $_C_root(__0, __1, __2, __3) {
    return {
      type: __0,
      op: __1,
      lhs: __2,
      rhs: __3
    };
  }

  function $_B_sub() {
    return $_5_root("Identifier", "sum");
  }

  function $_A_sub(__1) {
    return $_5_root("Apply", __1);
  }

  function $_9_sub() {
    return $_5_root("Identifier", "f");
  }

  function $_8_sub(__1) {
    return $_5_root("Const", __1);
  }

  function $_7_sub(__1) {
    return $_5_root("Deref", __1);
  }

  function $_6_sub() {
    return $_5_root("Identifier", "x");
  }

  function $_5_root(__0, __1) {
    return {
      type: __0,
      value: __1
    };
  }

  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [66, _j_, 38];
        break;

      case 1:
        __captured = [36];
        break;

      case 2:
        __captured = [34];
        break;

      case 3:
        __captured = [31];
        break;

      case 4:
        __captured = [29];
        break;

      case 5:
        __captured = [26];
        break;

      case 6:
        __captured = [24];
        break;

      case 7:
        __captured = [21];
        break;

      case 8:
        __captured = [19];
        break;

      case 9:
        __captured = [16];
        break;

      case 10:
        __captured = [14];
        break;

      case 11:
        __captured = [11];
        break;

      case 12:
        __captured = [9];
        break;

      case 13:
        __captured = [6];
        break;

      case 14:
        __captured = [5];
        break;

      case 15:
        __captured = [4];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(16);

  var _41_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _N_ = function (time, console) {
    time && console.time('interpret');
  };

  var _1m_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1] = __captured__scope_1_[1].slice(0, address + 1);
    __captured__scope_1_[2] = address;
  };

  var _1p_ = function (value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][++__captured__scope_1_[2]] = value;
    return __captured__scope_1_[2];
  };

  var _1l_ = function (address, value) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[1][address] = value;
  };

  var _W_ = function (address) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[1][address];
  };

  var _1n_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    // increase number of term calls
    __captured__scope_1_[0]++;

    if (global.__residual) {
      // if we're in pepack, and weve reached its maximum nubmer of calls
      if (__captured__scope_1_[0] > 600 / 9) {
        // check what to leave behind for the interpreter
        if (__captured__scope_1_[0] > 600) {
          global.__assumeDataProperty(global, 'setTimeout', function (cb, time) {
            setTimeout(cb, time);
          });

          global.__residual("void", function (setTimeout, interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
            setTimeout(function () {
              interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
            }, 100);
          }, global.setTimeout, _P_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          // decrease now so that when we run the code termCalls is like it was never increased
          __captured__scope_1_[0]--;

          global.__residual("void", _O_.bind(null), _P_, term, boundVariables, addressesToBind, callback, isRhsApplication);
        }
      } else {
        _P_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    } else {
      // otherwise, if we've reached the maximum number of calls in the interpreter
      if (__captured__scope_1_[0] > 600) {
        // call the function with a timeout
        setTimeout(function () {
          _P_(term, boundVariables, addressesToBind, callback, isRhsApplication);
        }, 100);
      } else {
        // just call the function as it is
        _P_(term, boundVariables, addressesToBind, callback, isRhsApplication);
      }
    }
  };

  var _P_ = function (term, boundVariables, addressesToBind, callback, isRhsApplication) {
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
        _X_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Const':
        _Y_(term.value, callback);

        break;

      case 'Op':
        _Z_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Abstr':
        _a_(term, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      case 'Apply':
        _b_(term.value, boundVariables, addressesToBind, termCallback, isRhsApplication);

        break;

      default:
        termCallback(new Error('Failed to interpret term for ' + term.type), null);
    }
  };

  var _a_ = function (abstraction, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;
    let newBoundVariables = Object.assign({}, boundVariables);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newBoundVariables[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newBoundVariables[abstraction.binding] = _1p_({
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
        const result = _W_(address); // if it's the rhs of an application, we are allowed to have unbound variables


        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

          address = _1p_({
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

    _1n_(abstraction.value, newBoundVariables, addressesToBind, abstrCallback, true);
  };

  var _b_ = function (application, boundVariables, addressesToBind, callback, isRhsApplication) {
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
            let lhs = _W_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _W_(rhsAddress);

                _1l_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _W_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            } // clean up stack


            if (rhsAddress !== lhsAddress) {
              // the new lhs might have changed
              _1l_(rhsAddress, lhs);
            }

            _1m_(rhsAddress);

            false;
            callback(null, __captured__scope_1_[2]);
          }
        };

        false;

        _1n_(application.lhs, boundVariables, addressesToBind, lhsCallback, false);
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    _1n_(application.rhs, boundVariables, [], rhsCallback, true);
  };

  var _1v_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _1l_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _1q_ = function (identifier, boundVariables, callback) {
    false; // just get the address on the stack pointed at by the identifier

    const address = boundVariables[identifier];

    if (!address) {
      false;
      return callback(new Error('Variable or named lambda ' + identifier + ' has not been defined'));
    }

    if (identifier === '_print') {
      _1l_(1, _W_(address));

      callback(null, 1);
    } else if (identifier === '_read') {
      // prepack can save the variable as it is on the stack, to be evaluated later
      if (global.__residual) {
        // assign the read identifier to the stack as an abstract variable, to postpone the call
        _1l_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

        callback(null, 2);
      } else {
        _1v_(callback);
      }
    } else {
      callback(null, address);
    }
  };

  var _X_ = function (dereference, boundVariables, addressesToBind, callback, isRhsApplication) {
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
          if (global.__isAbstract && global.__isAbstract(_W_(address))) {
            callback(null, 1);
          } else {
            console.log(_W_(1));
            callback(null, _1p_(true));
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_W_(address))) {
            callback(null, _1p_(_W_(address)));
          } else {
            const newTerm = _W_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_1j_[dereference.value])) {
              false;

              _1n_(newTerm, boundVariables, addressesToBind, callback, true);
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _1l_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              callback(null, _1p_(_W_(address)));
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    _1q_(dereference.value, boundVariables, derefCallback);
  };

  var _Y_ = function (constant, callback) {
    false; // just increment the address on the stack and assign it the constant value

    callback(null, _1p_(constant));
  };

  var _1r_ = function (operator, lhsAddress, rhsAddress, callback) {
    let err = null;

    const lhs = _W_(lhsAddress);

    const rhs = _W_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _1l_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _1l_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _1l_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _1l_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _1l_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _1l_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _1l_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _1l_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _1l_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _1l_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _1l_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _1l_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _1l_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _1l_(lhsAddress, !lhs);

          break;

        case 'negative':
          _1l_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _1l_(lhsAddress, {
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

  var _Z_ = function (operator, boundVariables, addressesToBind, callback, isRhsApplication) {
    false;

    const lhsOpCallback = function (err, lhsAddress) {
      if (err) {
        return callback(err, null);
      } // clean up stack


      _1m_(lhsAddress);

      const rhsOpCallback = function (err, rhsAddress) {
        if (err) {
          return callback(err, null);
        }

        _1r_(operator.op, lhsAddress, rhsAddress, callback);
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _W_(lhsAddress) || operator.op === 'and' && !_W_(lhsAddress)) {
          callback(null, lhsAddress);
        } else if (operator.op === 'or' && !_W_(lhsAddress)) {
          _1n_(operator.rhs, boundVariables, addressesToBind, callback, isRhsApplication);
        } else {
          _1n_(operator.rhs, boundVariables, addressesToBind, rhsOpCallback, isRhsApplication);
        }
      } else {
        rhsOpCallback(null, 0);
      }
    };

    _1n_(operator.lhs, boundVariables, addressesToBind, lhsOpCallback, isRhsApplication);
  };

  var _40_ = function (err, address) {
    const result = _W_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", function (time, console, waitForInput, toPrint, lookup, callback) {
        time && console.timeEnd('interpret');
        waitForInput(function (err, address) {
          if (toPrint) {
            console.log(lookup(address));
          }

          callback(err, address);
        });
      }, false, _1_, _1v_, address === 1, _W_, _41_);
    } else {
      if (global.__residual) {
        global.__residual("void", function (time, console) {
          time && console.timeEnd('interpret');
        }, false, _1_);
      } else {
        false;
      }

      if (result !== undefined && result.type === 'Abstr') {
        _1m_(2);

        _41_(null, function (arg) {
          if (!arg) {
            _a_(result, [], [], _41_, true);
          } else {
            _b_({
              lhs: result,
              rhs: arg
            }, [], [], _41_, true);
          }
        });
      } else {
        _41_(err, address > 1 && _W_(address));
      }
    }
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _S_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1o_, 0, err, address);
  };

  var _1u_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1w_, 0, err, address);
  };

  var _1x_ = function (err, address) {
    return $_0_factoryFunction.call(this, _1y_, 0, err, address);
  };

  var _1z_ = function (err, address) {
    return $_0_factoryFunction.call(this, _20_, 0, err, address);
  };

  var _21_ = function (err, address) {
    return $_0_factoryFunction.call(this, _22_, 0, err, address);
  };

  var _23_ = function (err, address) {
    return $_0_factoryFunction.call(this, _24_, 0, err, address);
  };

  var _24_ = function (err, address) {
    return $_0_factoryFunction.call(this, _25_, 0, err, address);
  };

  var _26_ = function (err, address) {
    return $_0_factoryFunction.call(this, _27_, 0, err, address);
  };

  var _29_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2A_, 0, err, address);
  };

  var _2B_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2C_, 0, err, address);
  };

  var _2D_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2H_, 0, err, address);
  };

  var _2I_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2J_, 0, err, address);
  };

  var _2K_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2L_, 0, err, address);
  };

  var _2L_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2M_, 0, err, address);
  };

  var _2N_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2O_, 0, err, address);
  };

  var _2Q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2R_, 0, err, address);
  };

  var _2S_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2T_, 0, err, address);
  };

  var _2U_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2Y_, 0, err, address);
  };

  var _2Z_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2a_, 0, err, address);
  };

  var _2b_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2c_, 0, err, address);
  };

  var _2c_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2d_, 0, err, address);
  };

  var _2e_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2f_, 0, err, address);
  };

  var _2h_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2i_, 0, err, address);
  };

  var _2j_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2k_, 0, err, address);
  };

  var _2l_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2p_, 0, err, address);
  };

  var _2q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2r_, 0, err, address);
  };

  var _2s_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2t_, 0, err, address);
  };

  var _2t_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2u_, 0, err, address);
  };

  var _2v_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2w_, 0, err, address);
  };

  var _2y_ = function (err, address) {
    return $_0_factoryFunction.call(this, _2z_, 0, err, address);
  };

  var _30_ = function (err, address) {
    return $_0_factoryFunction.call(this, _31_, 0, err, address);
  };

  var _32_ = function (err, address) {
    return $_0_factoryFunction.call(this, _36_, 0, err, address);
  };

  var _37_ = function (err, address) {
    return $_0_factoryFunction.call(this, _38_, 0, err, address);
  };

  var _39_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3A_, 0, err, address);
  };

  var _3A_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3B_, 0, err, address);
  };

  var _3C_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3D_, 0, err, address);
  };

  var _3F_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3G_, 0, err, address);
  };

  var _3H_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3I_, 0, err, address);
  };

  var _3J_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3N_, 0, err, address);
  };

  var _3O_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3P_, 0, err, address);
  };

  var _3Q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3R_, 0, err, address);
  };

  var _3R_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3S_, 0, err, address);
  };

  var _3T_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3U_, 0, err, address);
  };

  var _3W_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3X_, 0, err, address);
  };

  var _3Y_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3Z_, 0, err, address);
  };

  var _3a_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3e_, 0, err, address);
  };

  var _3f_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3g_, 0, err, address);
  };

  var _3h_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3i_, 0, err, address);
  };

  var _3i_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3j_, 0, err, address);
  };

  var _3k_ = function (err, address) {
    return $_0_factoryFunction.call(this, _3t_, 0, err, address);
  };

  var _3u_ = function (err, address) {
    return $_0_factoryFunction.call(this, _40_, 0, err, address);
  };

  var _Q_ = function (err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _S_(err);
    } else {
      _T_.push(rhsAddress);

      false;
      false;

      const lhsCallback = function (err, lhsAddress) {
        if (err) {
          _S_(err);
        } else {
          let lhs = _W_(lhsAddress);

          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (_c_.lhs.type === 'Deref' && _c_.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _W_(rhsAddress);

              _1l_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _W_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          }

          if (rhsAddress !== lhsAddress) {
            _1l_(rhsAddress, lhs);
          }

          _1m_(rhsAddress);

          false;

          _S_(null, __captured__scope_1_[2]);
        }
      };

      false;

      _1n_(_c_.lhs, _D_, _T_, lhsCallback, false);
    }
  };

  var $_2_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      let lhs = _W_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _W_(__captured__scope_2_[0]);

          _1l_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _W_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _1l_(__captured__scope_2_[0], lhs);
      }

      _1m_(__captured__scope_2_[0]);

      false;
      callback(null, __captured__scope_1_[2]);
    }
  };

  var _1w_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _1x_, _v_, 1, 0, err, lhsAddress);
  };

  var _25_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _26_, _c_, 2, 0, err, lhsAddress);
  };

  var _2A_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2B_, _v_, 3, 0, err, lhsAddress);
  };

  var _2M_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2N_, _c_, 4, 0, err, lhsAddress);
  };

  var _2R_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2S_, _v_, 5, 0, err, lhsAddress);
  };

  var _2d_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2e_, _c_, 6, 0, err, lhsAddress);
  };

  var _2i_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2j_, _v_, 7, 0, err, lhsAddress);
  };

  var _2u_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _2v_, _c_, 8, 0, err, lhsAddress);
  };

  var _2z_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _30_, _v_, 9, 0, err, lhsAddress);
  };

  var _3B_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3C_, _c_, 10, 0, err, lhsAddress);
  };

  var _3G_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3H_, _v_, 11, 0, err, lhsAddress);
  };

  var _3S_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3T_, _c_, 12, 0, err, lhsAddress);
  };

  var _3X_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3Y_, _v_, 13, 0, err, lhsAddress);
  };

  var _3j_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3k_, _3l_, 14, 0, err, lhsAddress);
  };

  var _3t_ = function (err, lhsAddress) {
    return $_2_factoryFunction.call(this, _3u_, _3v_, 15, 0, err, lhsAddress);
  };

  var $_4_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      callback(err);
    } else {
      const result = _W_(address);

      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false;
        address = _1p_({
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

  var _20_ = function (err, address) {
    return $_4_factoryFunction.call(this, _21_, _n_, err, address);
  };

  var _22_ = function (err, address) {
    return $_4_factoryFunction.call(this, _23_, _k_, err, address);
  };

  var _2H_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2I_, _n_, err, address);
  };

  var _2J_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2K_, _k_, err, address);
  };

  var _2Y_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2Z_, _n_, err, address);
  };

  var _2a_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2b_, _k_, err, address);
  };

  var _2p_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2q_, _n_, err, address);
  };

  var _2r_ = function (err, address) {
    return $_4_factoryFunction.call(this, _2s_, _k_, err, address);
  };

  var _36_ = function (err, address) {
    return $_4_factoryFunction.call(this, _37_, _n_, err, address);
  };

  var _38_ = function (err, address) {
    return $_4_factoryFunction.call(this, _39_, _k_, err, address);
  };

  var _3N_ = function (err, address) {
    return $_4_factoryFunction.call(this, _3O_, _n_, err, address);
  };

  var _3P_ = function (err, address) {
    return $_4_factoryFunction.call(this, _3Q_, _k_, err, address);
  };

  var _3e_ = function (err, address) {
    return $_4_factoryFunction.call(this, _3f_, _n_, err, address);
  };

  var _3g_ = function (err, address) {
    return $_4_factoryFunction.call(this, _3h_, _k_, err, address);
  };

  var $_3_factoryFunction = function (callback, boundVariables, err, lhsAddress) {
    if (err) {
      return callback(err, null);
    }

    _1m_(lhsAddress);

    const rhsOpCallback = function (err, rhsAddress) {
      if (err) {
        return callback(err, null);
      }

      _1r_(_q_.op, lhsAddress, rhsAddress, callback);
    };

    if (_q_.op !== 'negate' && _q_.op !== 'negative') {
      if (_q_.op === 'or' && _W_(lhsAddress) || _q_.op === 'and' && !_W_(lhsAddress)) {
        callback(null, lhsAddress);
      } else if (_q_.op === 'or' && !_W_(lhsAddress)) {
        _1n_(_q_.rhs, boundVariables, _T_, callback, true);
      } else {
        _1n_(_q_.rhs, boundVariables, _T_, rhsOpCallback, true);
      }
    } else {
      rhsOpCallback(null, 0);
    }
  };

  var _1y_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _1z_, _D_, err, lhsAddress);
  };

  var _2C_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _2D_, _2E_, err, lhsAddress);
  };

  var _2T_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _2U_, _2V_, err, lhsAddress);
  };

  var _2k_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _2l_, _2m_, err, lhsAddress);
  };

  var _31_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _32_, _33_, err, lhsAddress);
  };

  var _3I_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _3J_, _3K_, err, lhsAddress);
  };

  var _3Z_ = function (err, lhsAddress) {
    return $_3_factoryFunction.call(this, _3a_, _3b_, err, lhsAddress);
  };

  var $_1_factoryFunction = function (callback, lhsAddress, err, rhsAddress) {
    if (err) {
      return callback(err, null);
    }

    _1r_(_w_.op, lhsAddress, rhsAddress, callback);
  };

  var _1o_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _1u_, 38, err, rhsAddress);
  };

  var _27_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _29_, 33, err, rhsAddress);
  };

  var _2O_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _2Q_, 28, err, rhsAddress);
  };

  var _2f_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _2h_, 23, err, rhsAddress);
  };

  var _2w_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _2y_, 18, err, rhsAddress);
  };

  var _3D_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _3F_, 13, err, rhsAddress);
  };

  var _3U_ = function (err, rhsAddress) {
    return $_1_factoryFunction.call(this, _3W_, 8, err, rhsAddress);
  };

  var _O_ = function (interpretTermLazy, term, boundVariables, addressesToBind, callback, isRhsApplication) {
    interpretTermLazy(term, boundVariables, addressesToBind, callback, isRhsApplication);
  };

  var _1_ = console;

  _N_(false, _1_);

  var _14_ = $_6_sub();

  var _12_ = $_7_sub(_14_);

  var _17_ = $_8_sub(10);

  var _z_ = $_D_sub("less", _12_, _17_);

  var _f_ = $_9_sub();

  var _d_ = $_7_sub(_f_);

  var _7_ = $_6_sub();

  var _5_ = $_7_sub(_7_);

  var _A_ = $_8_sub(1);

  var _2_ = $_D_sub("plus", _5_, _A_);

  var _c_ = {
    lhs: _d_,
    rhs: _2_
  };

  var _1A_ = $_A_sub(_c_);

  var _w_ = $_D_sub("and", _z_, _1A_);

  var _1H_ = $_B_sub();

  var _1F_ = $_7_sub(_1H_);

  var _1M_ = $_6_sub();

  var _1K_ = $_7_sub(_1M_);

  var _1C_ = $_D_sub("plus", _1F_, _1K_);

  var _v_ = {
    lhs: _w_,
    rhs: _1C_
  };

  var _t_ = $_A_sub(_v_);

  var _1R_ = $_B_sub();

  var _1P_ = $_7_sub(_1R_);

  var _q_ = $_D_sub("or", _t_, _1P_);

  var _n_ = {
    type: "Abstr",
    binding: "sum",
    value: _q_
  };
  var _k_ = {
    type: "Abstr",
    binding: "x",
    value: _n_
  };
  var _j_ = [,,, _k_, 0, 1, 1, 1, true, 2, 1, 3, 2, true, 3, 1, 6, 3, true, 4, 1, 10, 4, true, 5, 1, 15, 5, true, 6, 1, 21, 6, true, 7, 1, 28, 7, true];
  var _1j_ = [];
  _1j_.f = true;
  var _E_ = {
    address: 1
  };
  var _G_ = {
    address: 2
  };

  var _D_ = $_F_sub(34, 31);

  var _3o_ = $_9_sub();

  var _3m_ = $_7_sub(_3o_);

  var _3r_ = $_8_sub(1);

  var _3l_ = {
    lhs: _3m_,
    rhs: _3r_
  };
  var _3v_ = {
    lhs: {
      type: "Apply",
      value: _3l_
    },
    rhs: {
      type: "Const",
      value: 0
    }
  };

  var _3b_ = $_F_sub(5, 4);

  var _T_ = [36,,];
  _T_.length = 1;

  var _3K_ = $_F_sub(9, 6);

  var _33_ = $_F_sub(14, 11);

  var _2m_ = $_F_sub(19, 16);

  var _2V_ = $_F_sub(24, 21);

  var _2E_ = $_F_sub(29, 26);

  _O_(_P_, _2_, _D_, [], _Q_, true);
})();