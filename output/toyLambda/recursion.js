(function () {
  function $_E_sub(__3, __4) {
    return $_D_root(_C_, _E_, 3, __3, __4);
  }

  function $_D_root(__0, __1, __2, __3, __4) {
    return {
      _print: __0,
      _read: __1,
      f: __2,
      x: __3,
      sum: __4
    };
  }

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
        __captured = [41];
        break;

      case 1:
        __captured = [_y_, 42, 126];
        break;

      case 2:
        __captured = [39];
        break;

      case 3:
        __captured = [36];
        break;

      case 4:
        __captured = [34];
        break;

      case 5:
        __captured = [31];
        break;

      case 6:
        __captured = [29];
        break;

      case 7:
        __captured = [26];
        break;

      case 8:
        __captured = [24];
        break;

      case 9:
        __captured = [21];
        break;

      case 10:
        __captured = [19];
        break;

      case 11:
        __captured = [16];
        break;

      case 12:
        __captured = [14];
        break;

      case 13:
        __captured = [11];
        break;

      case 14:
        __captured = [9];
        break;

      case 15:
        __captured = [6];
        break;

      case 16:
        __captured = [5];
        break;

      case 17:
        __captured = [4];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(18);

  var $_1_factoryFunction = function (callback, application, __scope_1_, __scope_2_, err, lhsAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    if (err) {
      return {
        fn: callback,
        args: [err]
      };
    } else {
      let lhs = _1l_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _1l_(__captured__scope_1_[0]);

          _1o_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _1l_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_1_[0];
          __captured__scope_1_[0] = 1;
        }
      } // clean up stack


      if (__captured__scope_1_[0] !== lhsAddress) {
        // the new lhs might have changed
        _1o_(__captured__scope_1_[0], lhs);
      }

      _X_(__captured__scope_1_[0]);

      false;
      return {
        fn: callback,
        args: [null, __captured__scope_2_[1]]
      };
    }
  };

  var _R_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _1n_, _1A_, 0, 1, err, lhsAddress);
  };

  var _1w_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _1x_, _d_, 2, 1, err, lhsAddress);
  };

  var _1z_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _20_, _1A_, 3, 1, err, lhsAddress);
  };

  var _26_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _27_, _d_, 4, 1, err, lhsAddress);
  };

  var _29_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2A_, _1A_, 5, 1, err, lhsAddress);
  };

  var _2G_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2H_, _d_, 6, 1, err, lhsAddress);
  };

  var _2J_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2K_, _1A_, 7, 1, err, lhsAddress);
  };

  var _2Q_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2R_, _d_, 8, 1, err, lhsAddress);
  };

  var _2T_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2U_, _1A_, 9, 1, err, lhsAddress);
  };

  var _2a_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2b_, _d_, 10, 1, err, lhsAddress);
  };

  var _2d_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2e_, _1A_, 11, 1, err, lhsAddress);
  };

  var _2k_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2l_, _d_, 12, 1, err, lhsAddress);
  };

  var _2n_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2o_, _1A_, 13, 1, err, lhsAddress);
  };

  var _2u_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2v_, _d_, 14, 1, err, lhsAddress);
  };

  var _2x_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _2y_, _1A_, 15, 1, err, lhsAddress);
  };

  var _34_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _35_, _36_, 16, 1, err, lhsAddress);
  };

  var _35_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _3E_, _3F_, 17, 1, err, lhsAddress);
  };

  var $_2_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      return {
        fn: callback,
        args: [err]
      };
    } else {
      const result = _1l_(address); // if it's the rhs of an application, we are allowed to have unbound variables


      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

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
    // pass the address to the callback
    return {
      fn: callback,
      args: [null, address]
    };
  };

  var _1t_ = function (err, address) {
    return $_2_factoryFunction.call(this, _1v_, _12_, err, address);
  };

  var _1v_ = function (err, address) {
    return $_2_factoryFunction.call(this, _1w_, _z_, err, address);
  };

  var _21_ = function (err, address) {
    return $_2_factoryFunction.call(this, _25_, _12_, err, address);
  };

  var _25_ = function (err, address) {
    return $_2_factoryFunction.call(this, _26_, _z_, err, address);
  };

  var _2B_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2F_, _12_, err, address);
  };

  var _2F_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2G_, _z_, err, address);
  };

  var _2L_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2P_, _12_, err, address);
  };

  var _2P_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2Q_, _z_, err, address);
  };

  var _2V_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2Z_, _12_, err, address);
  };

  var _2Z_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2a_, _z_, err, address);
  };

  var _2f_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2j_, _12_, err, address);
  };

  var _2j_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2k_, _z_, err, address);
  };

  var _2p_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2t_, _12_, err, address);
  };

  var _2t_ = function (err, address) {
    return $_2_factoryFunction.call(this, _2u_, _z_, err, address);
  };

  var _2z_ = function (err, address) {
    return $_2_factoryFunction.call(this, _33_, _12_, err, address);
  };

  var _33_ = function (err, address) {
    return $_2_factoryFunction.call(this, _34_, _z_, err, address);
  };

  var $_0_factoryFunction = function (callback, operator, env, isRhsApplication, err, lhsAddress) {
    if (err) {
      return {
        fn: callback,
        args: [err, null]
      };
    } // clean up stack


    _X_(lhsAddress);

    const rhsOpCallback = (err, rhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      }

      return {
        fn: _1k_,
        args: [operator.op, lhsAddress, rhsAddress, callback]
      };
    };

    if (operator.op !== 'negate' && operator.op !== 'negative') {
      // don't interpret stuff if not needed to
      if (operator.op === 'or' && _1l_(lhsAddress) || operator.op === 'and' && !_1l_(lhsAddress)) {
        return {
          fn: callback,
          args: [null, lhsAddress]
        };
      } else if (operator.op === 'or' && !_1l_(lhsAddress)) {
        return {
          fn: _1m_,
          args: [operator.rhs, env, _J_, callback, isRhsApplication]
        };
      } else {
        return {
          fn: _1m_,
          args: [operator.rhs, env, _J_, rhsOpCallback, isRhsApplication]
        };
      }
    } else {
      return {
        fn: rhsOpCallback,
        args: [null, 0]
      };
    }
  };

  var _Q_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _R_, _Y_, _B_, false, err, lhsAddress);
  };

  var _1n_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _1t_, _15_, _B_, true, err, lhsAddress);
  };

  var _20_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _21_, _15_, _22_, true, err, lhsAddress);
  };

  var _2A_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2B_, _15_, _2C_, true, err, lhsAddress);
  };

  var _2K_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2L_, _15_, _2M_, true, err, lhsAddress);
  };

  var _2U_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2V_, _15_, _2W_, true, err, lhsAddress);
  };

  var _2e_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2f_, _15_, _2g_, true, err, lhsAddress);
  };

  var _2o_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2p_, _15_, _2q_, true, err, lhsAddress);
  };

  var _2y_ = function (err, lhsAddress) {
    return $_0_factoryFunction.call(this, _2z_, _15_, _30_, true, err, lhsAddress);
  };

  var $_3_factoryFunction = function (callback, lhsAddress, err, rhsAddress) {
    if (err) {
      return {
        fn: callback,
        args: [err, null]
      };
    }

    return {
      fn: _1k_,
      args: [_Y_.op, lhsAddress, rhsAddress, callback]
    };
  };

  var _1x_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _1z_, 38, err, rhsAddress);
  };

  var _27_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _29_, 33, err, rhsAddress);
  };

  var _2H_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _2J_, 28, err, rhsAddress);
  };

  var _2R_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _2T_, 23, err, rhsAddress);
  };

  var _2b_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _2d_, 18, err, rhsAddress);
  };

  var _2l_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _2n_, 13, err, rhsAddress);
  };

  var _2v_ = function (err, rhsAddress) {
    return $_3_factoryFunction.call(this, _2x_, 8, err, rhsAddress);
  };

  var _N_ = (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
    return trampoline({
      fn: interpretTermLazy,
      args: [term, env, addressesToBind, callback, isRhsApplication]
    });
  };

  var _O_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _5_ = $_5_sub();

  var _3_ = $_6_sub(_5_);

  var _8_ = $_7_sub(10);

  var _0_ = $_C_sub("less", _3_, _8_);

  var _g_ = $_8_sub();

  var _e_ = $_6_sub(_g_);

  var _o_ = $_5_sub();

  var _m_ = $_6_sub(_o_);

  var _r_ = $_7_sub(1);

  var _j_ = $_C_sub("plus", _m_, _r_);

  var _d_ = {
    lhs: _e_,
    rhs: _j_
  };

  var _b_ = $_9_sub(_d_);

  var _Y_ = $_C_sub("and", _0_, _b_);

  var _1G_ = $_A_sub();

  var _1E_ = $_6_sub(_1G_);

  var _1L_ = $_5_sub();

  var _1J_ = $_6_sub(_1L_);

  var _1B_ = $_C_sub("plus", _1E_, _1J_);

  var _1A_ = {
    lhs: _Y_,
    rhs: _1B_
  };

  var _18_ = $_9_sub(_1A_);

  var _1Q_ = $_A_sub();

  var _1O_ = $_6_sub(_1Q_);

  var _15_ = $_C_sub("or", _18_, _1O_);

  var _12_ = {
    type: "Abstr",
    binding: "sum",
    value: _15_
  };
  var _z_ = {
    type: "Abstr",
    binding: "x",
    value: _12_
  };
  var _y_ = [,,, _z_, 0, 1, 1, 1, true, 2, 1, 3, 2, true, 3, 1, 6, 3, true, 4, 1, 10, 4, true, 5, 1, 15, 5, true, 6, 1, 21, 6, true, 7, 1, 28, 7, true, 8, 1, 36, 8];

  var _1l_ = address => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    return __captured__scope_2_[0][address];
  };

  var _1p_ = value => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[0][++__captured__scope_2_[1]] = value;
    return __captured__scope_2_[1];
  };

  var _P_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    false;

    switch (term.type) {
      case 'Deref':
        return _S_(term.value, env, addressesToBind, callback, isRhsApplication);

      case 'Const':
        return _T_(term.value, callback);

      case 'Op':
        return _U_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Abstr':
        return _V_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Apply':
        return _W_(term.value, env, addressesToBind, callback, isRhsApplication);

      default:
        return {
          fn: callback,
          args: [new Error('Failed to interpret term for ' + term.type), null]
        };
    }
  };

  var _S_ = (dereference, env, addressesToBind, callback, isRhsApplication) => {
    false;

    if (dereference.type !== 'Identifier') {
      return {
        fn: callback,
        args: [new Error('Failed to interpreter dereference for ' + dereference.type)]
      };
    } // a dereference could return an abstraction or application, so we can try to evaluate that


    const derefCallback = (err, address) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        // check if we are printing
        if (address === 1) {
          if (global.__isAbstract && global.__isAbstract(_1l_(address))) {
            return {
              fn: callback,
              args: [null, 1]
            };
          } else {
            console.log(_1l_(1));
            return {
              fn: callback,
              args: [null, _1p_(true)]
            };
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_1l_(address))) {
            return {
              fn: callback,
              args: [null, _1p_(_1l_(address))]
            };
          } else {
            const newTerm = _1l_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_w_[dereference.value])) {
              false;
              return {
                fn: _1m_,
                args: [newTerm, env, addressesToBind, callback, true]
              };
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _1o_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              return {
                fn: callback,
                args: [null, _1p_(_1l_(address))]
              };
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    return {
      fn: _1q_,
      args: [dereference.value, env, derefCallback]
    };
  };

  var _T_ = (constant, callback) => {
    false; // just increment the address on the stack and assign it the constant value

    return {
      fn: callback,
      args: [null, _1p_(constant)]
    };
  };

  var _U_ = (operator, env, addressesToBind, callback, isRhsApplication) => {
    false;

    const lhsOpCallback = (err, lhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      }

      _X_(lhsAddress);

      const rhsOpCallback = (err, rhsAddress) => {
        if (err) {
          return {
            fn: callback,
            args: [err, null]
          };
        }

        return {
          fn: _1k_,
          args: [operator.op, lhsAddress, rhsAddress, callback]
        };
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        if (operator.op === 'or' && _1l_(lhsAddress) || operator.op === 'and' && !_1l_(lhsAddress)) {
          return {
            fn: callback,
            args: [null, lhsAddress]
          };
        } else if (operator.op === 'or' && !_1l_(lhsAddress)) {
          return {
            fn: _1m_,
            args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
          };
        } else {
          return {
            fn: _1m_,
            args: [operator.rhs, env, addressesToBind, rhsOpCallback, isRhsApplication]
          };
        }
      } else {
        return {
          fn: rhsOpCallback,
          args: [null, 0]
        };
      }
    };

    return {
      fn: _1m_,
      args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
    };
  };

  var _V_ = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _1p_({
        type: 'Deref',
        value: {
          type: 'Identifier',
          value: abstraction.binding
        }
      });
    }

    false;

    const abstrCallback = (err, address) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        const result = _1l_(address);

        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false;
          address = _1p_({
            type: 'Abstr',
            binding: abstraction.binding,
            value: result
          });
        }
      }

      if (hasBeenBound) {
        false;
      }

      return {
        fn: callback,
        args: [null, address]
      };
    };

    return {
      fn: _1m_,
      args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
    };
  };

  var _W_ = (application, env, addressesToBind, callback) => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    false;

    const rhsCallback = (err, rhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
        // add the address to the addresses to bind
        addressesToBind.push(rhsAddress);
        false;
        false;

        const lhsCallback = (err, lhsAddress) => {
          if (err) {
            return {
              fn: callback,
              args: [err]
            };
          } else {
            let lhs = _1l_(lhsAddress);

            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _1l_(rhsAddress);

                _1o_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _1l_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            }

            if (rhsAddress !== lhsAddress) {
              _1o_(rhsAddress, lhs);
            }

            _X_(rhsAddress);

            false;
            return {
              fn: callback,
              args: [null, __captured__scope_2_[1]]
            };
          }
        };

        false;
        return {
          fn: _1m_,
          args: [application.lhs, env, addressesToBind, lhsCallback, false]
        };
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    return {
      fn: _1m_,
      args: [application.rhs, env, [], rhsCallback, true]
    };
  };

  var _X_ = address => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[0] = __captured__scope_2_[0].slice(0, address + 1);
    __captured__scope_2_[1] = address;
  };

  var _1k_ = (operator, lhsAddress, rhsAddress, callback) => {
    let err = null;

    const lhs = _1l_(lhsAddress);

    const rhs = _1l_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _1o_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _1o_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _1o_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _1o_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _1o_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _1o_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _1o_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _1o_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _1o_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _1o_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _1o_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _1o_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _1o_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _1o_(lhsAddress, !lhs);

          break;

        case 'negative':
          _1o_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _1o_(lhsAddress, {
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
    return {
      fn: callback,
      args: [err, lhsAddress]
    };
  };

  var _w_ = [];

  var _1m_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[2]++;

    if (global.__residual && __captured__scope_2_[2] > 125) {
      global.__residual("void", (trampoline, interpretTermLazy, term, env, addressesToBind, callback, isRhsApplication) => {
        return trampoline({
          fn: interpretTermLazy,
          args: [term, env, addressesToBind, callback, isRhsApplication]
        });
      }, _O_, _P_, term, env, addressesToBind, callback, isRhsApplication);
    } else {
      return {
        fn: _P_,
        args: [term, env, addressesToBind, callback, isRhsApplication]
      };
    }
  };

  var _1o_ = (address, value) => {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[0][address] = value;
  };

  _w_.f = true;

  var _1q_ = (identifier, env, callback) => {
    false; // just get the address on the stack pointed at by the identifier

    const address = env[identifier];

    if (!address) {
      false;
      return {
        fn: callback,
        args: [new Error('Variable or named lambda ' + identifier + ' has not been defined')]
      };
    } else {
      if (identifier === '_print') {
        _1o_(1, _1l_(address));

        return {
          fn: callback,
          args: [null, 1]
        };
      } else if (identifier === '_read') {
        // prepack can save the variable as it is on the stack, to be evaluated later
        if (global.__residual) {
          // assign the read identifier to the stack as an abstract variable, to postpone the call
          _1o_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

          return {
            fn: callback,
            args: [null, 2]
          };
        } else {
          return {
            fn: _1u_,
            args: [callback]
          };
        }
      } else {
        return {
          fn: callback,
          args: [null, address]
        };
      }
    }
  };

  var _1u_ = callback => {
    let readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _1o_(2, parseInt(input));

        return _O_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _C_ = {
    address: 1
  };
  var _E_ = {
    address: 2
  };

  var _B_ = $_E_sub(39, 36);

  var _J_ = [41,,];
  _J_.length = 1;
  var _3K_ = console;

  var _3E_ = (err, address) => {
    const result = _1l_(address);

    if (global.__isAbstract && global.__isAbstract(result)) {
      global.__residual("void", (console, waitForInput, trampoline, toPrint, lookup, callback) => {
        trampoline({
          fn: waitForInput,
          args: [(err, address) => {
            if (toPrint) {
              console.log(lookup(address));
            }

            return {
              fn: callback,
              args: [err, lookup(address)]
            };
          }]
        });
      }, _3K_, _1u_, _O_, address === 1, _1l_, _3L_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _X_(2);

        return {
          fn: _3L_,
          args: [null, (...args) => {
            let argumentAddresses = [];

            for (let i = 0; i < args.length; i++) {
              argumentAddresses.push(_1p_(args[i]));
            }

            _O_({
              fn: _V_,
              args: [result, [], argumentAddresses, _3E_, true]
            });
          }]
        };
      } else {
        return {
          fn: _3L_,
          args: [err, address > 1 && _1l_(address)]
        };
      }
    }
  };

  var _3L_ = (err, result) => {
    if (err) {
      throw err;
    }

    if (result) {
      console.log(result.toString());
    }

    module.exports = result;
  };

  var _39_ = $_8_sub();

  var _37_ = $_6_sub(_39_);

  var _3C_ = $_7_sub(1);

  var _36_ = {
    lhs: _37_,
    rhs: _3C_
  };
  var _3F_ = {
    lhs: {
      type: "Apply",
      value: _36_
    },
    rhs: {
      type: "Const",
      value: 0
    }
  };

  var _30_ = $_E_sub(5, 4);

  var _2q_ = $_E_sub(9, 6);

  var _2g_ = $_E_sub(14, 11);

  var _2W_ = $_E_sub(19, 16);

  var _2M_ = $_E_sub(24, 21);

  var _2C_ = $_E_sub(29, 26);

  var _22_ = $_E_sub(34, 31);

  _N_(_O_, _P_, _0_, _B_, _J_, _Q_, false);
})();