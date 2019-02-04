(function () {
  function $_J_sub(__1) {
    return $_F_root(_3q_, __1);
  }

  function $_I_sub(__1) {
    return $_F_root(_3T_, __1);
  }

  function $_H_sub(__1) {
    return $_F_root(_3B_, __1);
  }

  function $_G_sub(__1) {
    return $_F_root(_22_, __1);
  }

  function $_F_root(__0, __1) {
    return {
      lhs: __0,
      rhs: __1
    };
  }

  function $_E_sub(__2) {
    return $_B_root("Abstr", "n", __2);
  }

  function $_D_sub(__2) {
    return $_B_root("Abstr", "f", __2);
  }

  function $_C_sub(__2) {
    return $_B_root("Abstr", "x", __2);
  }

  function $_B_root(__0, __1, __2) {
    return {
      type: __0,
      binding: __1,
      value: __2
    };
  }

  function $_A_sub(__1) {
    return $_3_root("Identifier", __1);
  }

  function $_9_sub(__1) {
    return $_3_root("Apply", __1);
  }

  function $_8_sub() {
    return $_3_root("Identifier", "n");
  }

  function $_7_sub() {
    return $_3_root("Identifier", "f");
  }

  function $_6_sub() {
    return $_3_root("Const", 1);
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
        __captured = [_h_, 36, 126];
        break;

      case 1:
        __captured = [36];
        break;

      case 2:
        __captured = [35];
        break;

      case 3:
        __captured = [31];
        break;

      case 4:
        __captured = [30];
        break;

      case 5:
        __captured = [25];
        break;

      case 6:
        __captured = [24];
        break;

      case 7:
        __captured = [19];
        break;

      case 8:
        __captured = [15];
        break;

      case 9:
        __captured = [14];
        break;

      case 10:
        __captured = [13];
        break;

      case 11:
        __captured = [12];
        break;

      case 12:
        __captured = [11];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(13);

  var $_2_factoryFunction = function (callback, addressesToBind, application, env, __scope_1_, err, rhsAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

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
          let lhs = _48_(lhsAddress); // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS


          if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
            false;

            if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
              false;

              const rhs = _48_(rhsAddress);

              _4C_(lhsAddress, {
                type: 'Apply',
                value: {
                  lhs: lhs,
                  rhs: rhs
                }
              });

              lhs = _48_(lhsAddress);
            }
          } else if (global.__isAbstract && global.__isAbstract(lhs)) {
            if (lhsAddress === 1) {
              lhsAddress = rhsAddress;
              rhsAddress = 1;
            }
          } // clean up stack


          if (rhsAddress !== lhsAddress) {
            // the new lhs might have changed
            _4C_(rhsAddress, lhs);
          }

          _Y_(rhsAddress);

          false;
          return {
            fn: callback,
            args: [null, __captured__scope_1_[1]]
          };
        }
      };

      false;
      return {
        fn: _49_,
        args: [application.lhs, env, addressesToBind, lhsCallback, false]
      };
    }
  };

  var _4G_ = function (err, rhsAddress) {
    return $_2_factoryFunction.call(this, _4I_, _4J_, _3p_, _4L_, 0, err, rhsAddress);
  };

  var _4Q_ = function (err, rhsAddress) {
    return $_2_factoryFunction.call(this, _4R_, _4S_, _1F_, _4U_, 0, err, rhsAddress);
  };

  var $_1_factoryFunction = function (callback, application, __scope_2_, __scope_1_, err, lhsAddress) {
    var __captured__scope_2_ = __scope_0_main[__scope_2_] || __get_scope_binding_0_get_95scope_95binding(__scope_2_);

    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      return {
        fn: callback,
        args: [err]
      };
    } else {
      let lhs = _48_(lhsAddress);

      if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
        false;

        if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
          false;

          const rhs = _48_(__captured__scope_2_[0]);

          _4C_(lhsAddress, {
            type: 'Apply',
            value: {
              lhs: lhs,
              rhs: rhs
            }
          });

          lhs = _48_(lhsAddress);
        }
      } else if (global.__isAbstract && global.__isAbstract(lhs)) {
        if (lhsAddress === 1) {
          lhsAddress = __captured__scope_2_[0];
          __captured__scope_2_[0] = 1;
        }
      }

      if (__captured__scope_2_[0] !== lhsAddress) {
        _4C_(__captured__scope_2_[0], lhs);
      }

      _Y_(__captured__scope_2_[0]);

      false;
      return {
        fn: callback,
        args: [null, __captured__scope_1_[1]]
      };
    }
  };

  var _4A_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4G_, _3w_, 1, 0, err, lhsAddress);
  };

  var _4O_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4P_, _1Q_, 2, 0, err, lhsAddress);
  };

  var _4P_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4Q_, _1N_, 3, 0, err, lhsAddress);
  };

  var _4Z_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4a_, _21_, 4, 0, err, lhsAddress);
  };

  var _4c_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4e_, _2a_, 5, 0, err, lhsAddress);
  };

  var _4e_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4g_, _2X_, 6, 0, err, lhsAddress);
  };

  var _4g_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4h_, _2U_, 7, 0, err, lhsAddress);
  };

  var _4h_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4i_, _2R_, 8, 0, err, lhsAddress);
  };

  var _4m_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _4n_, _4o_, 9, 0, err, lhsAddress);
  };

  var _4n_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _50_, _51_, 10, 0, err, lhsAddress);
  };

  var _50_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _5A_, _5B_, 11, 0, err, lhsAddress);
  };

  var _5A_ = function (err, lhsAddress) {
    return $_1_factoryFunction.call(this, _5K_, _5L_, 12, 0, err, lhsAddress);
  };

  var $_0_factoryFunction = function (callback, abstraction, err, address) {
    if (err) {
      return {
        fn: callback,
        args: [err]
      };
    } else {
      const result = _48_(address); // if it's the rhs of an application, we are allowed to have unbound variables


      if ((!global.__isAbstract || !global.__isAbstract(result)) && true && !true && result && result.type !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

        address = _4B_({
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

  var _S_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4A_, _44_, err, address);
  };

  var _4I_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4N_, _3l_, err, address);
  };

  var _4N_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4O_, _3j_, err, address);
  };

  var _4R_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4X_, _1A_, err, address);
  };

  var _4X_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4Y_, _17_, err, address);
  };

  var _4Y_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4Z_, _14_, err, address);
  };

  var _4a_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4b_, _1x_, err, address);
  };

  var _4b_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4c_, _1v_, err, address);
  };

  var _4i_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4j_, _2M_, err, address);
  };

  var _4j_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4k_, _2J_, err, address);
  };

  var _4k_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4l_, _2G_, err, address);
  };

  var _4l_ = function (err, address) {
    return $_0_factoryFunction.call(this, _4m_, _2D_, err, address);
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

  var _o_ = $_4_sub();

  var _m_ = $_5_sub(_o_);

  var _r_ = $_6_sub();

  var _k_ = {
    type: "Op",
    op: "plus",
    lhs: _m_,
    rhs: _r_
  };

  var _i_ = $_C_sub(_k_);

  var _11_ = $_4_sub();

  var _z_ = $_5_sub(_11_);

  var _w_ = $_C_sub(_z_);

  var _t_ = $_D_sub(_w_);

  var _1I_ = $_7_sub();

  var _1G_ = $_5_sub(_1I_);

  var _1T_ = $_8_sub();

  var _1R_ = $_5_sub(_1T_);

  var _1Y_ = $_7_sub();

  var _1W_ = $_5_sub(_1Y_);

  var _1Q_ = $_F_root(_1R_, _1W_);

  var _1O_ = $_9_sub(_1Q_);

  var _1d_ = $_4_sub();

  var _1b_ = $_5_sub(_1d_);

  var _1N_ = $_F_root(_1O_, _1b_);

  var _1L_ = $_9_sub(_1N_);

  var _1F_ = $_F_root(_1G_, _1L_);

  var _1D_ = $_9_sub(_1F_);

  var _1A_ = $_C_sub(_1D_);

  var _17_ = $_D_sub(_1A_);

  var _14_ = $_E_sub(_17_);

  var _1p_ = $_7_sub();

  var _1n_ = $_5_sub(_1p_);

  var _1t_ = $_4_sub();

  var _1r_ = $_5_sub(_1t_);

  var _1m_ = $_F_root(_1n_, _1r_);

  var _1k_ = $_9_sub(_1m_);

  var _1i_ = $_C_sub(_1k_);

  var _1g_ = $_D_sub(_1i_);

  var _24_ = $_7_sub();

  var _22_ = $_5_sub(_24_);

  var _2B_ = $_4_sub();

  var _29_ = $_5_sub(_2B_);

  var _28_ = $_G_sub(_29_);

  var _26_ = $_9_sub(_28_);

  var _21_ = $_G_sub(_26_);

  var _1z_ = $_9_sub(_21_);

  var _1x_ = $_C_sub(_1z_);

  var _1v_ = $_D_sub(_1x_);

  var _2d_ = $_A_sub("m");

  var _2b_ = $_5_sub(_2d_);

  var _2i_ = $_A_sub("next");

  var _2g_ = $_5_sub(_2i_);

  var _2a_ = $_F_root(_2b_, _2g_);

  var _2Y_ = $_9_sub(_2a_);

  var _2n_ = $_8_sub();

  var _2l_ = $_5_sub(_2n_);

  var _2X_ = $_F_root(_2Y_, _2l_);

  var _2V_ = $_9_sub(_2X_);

  var _2s_ = $_7_sub();

  var _2q_ = $_5_sub(_2s_);

  var _2U_ = $_F_root(_2V_, _2q_);

  var _2S_ = $_9_sub(_2U_);

  var _2x_ = $_4_sub();

  var _2v_ = $_5_sub(_2x_);

  var _2R_ = $_F_root(_2S_, _2v_);

  var _2P_ = $_9_sub(_2R_);

  var _2M_ = $_C_sub(_2P_);

  var _2J_ = $_D_sub(_2M_);

  var _2G_ = $_E_sub(_2J_);

  var _2D_ = $_B_root("Abstr", "m", _2G_);

  var _33_ = $_4_sub();

  var _31_ = $_5_sub(_33_);

  var _37_ = $_6_sub();

  var _35_ = {
    type: "Op",
    op: "plus",
    lhs: _31_,
    rhs: _37_
  };

  var _39_ = $_C_sub(_35_);

  var _3D_ = $_7_sub();

  var _3B_ = $_5_sub(_3D_);

  var _3H_ = $_4_sub();

  var _3F_ = $_5_sub(_3H_);

  var _3O_ = $_H_sub(_3F_);

  var _3M_ = $_9_sub(_3O_);

  var _3L_ = $_H_sub(_3M_);

  var _3J_ = $_9_sub(_3L_);

  var _3P_ = $_C_sub(_3J_);

  var _3R_ = $_D_sub(_3P_);

  var _3V_ = $_7_sub();

  var _3T_ = $_5_sub(_3V_);

  var _3Z_ = $_4_sub();

  var _3X_ = $_5_sub(_3Z_);

  var _3g_ = $_I_sub(_3X_);

  var _3e_ = $_9_sub(_3g_);

  var _3d_ = $_I_sub(_3e_);

  var _3b_ = $_9_sub(_3d_);

  var _3h_ = $_C_sub(_3b_);

  var _3s_ = $_7_sub();

  var _3q_ = $_5_sub(_3s_);

  var _42_ = $_4_sub();

  var _40_ = $_5_sub(_42_);

  var _3z_ = $_J_sub(_40_);

  var _3x_ = $_9_sub(_3z_);

  var _3w_ = $_J_sub(_3x_);

  var _3u_ = $_9_sub(_3w_);

  var _3p_ = $_J_sub(_3u_);

  var _3n_ = $_9_sub(_3p_);

  var _3l_ = $_C_sub(_3n_);

  var _3j_ = $_D_sub(_3l_);

  var _2_ = $_4_sub();

  var _0_ = $_5_sub(_2_);

  var _c_ = $_6_sub();

  var _Z_ = {
    type: "Op",
    op: "plus",
    lhs: _0_,
    rhs: _c_
  };

  var _44_ = $_C_sub(_Z_);

  var _h_ = [,,, _i_, _t_, _14_, _1g_, _1g_, _1v_, _1v_, _2D_, 0, _i_, _1v_, _1v_, 0, _31_, _35_, 1, _39_, _3B_, _3F_, _3J_, _3P_, _3R_, _14_, _3T_, _3X_, _3b_, _3h_, _3j_, 0, _0_, _Z_, 1, _44_, 1];

  var _48_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    return __captured__scope_1_[0][address];
  };

  var _4B_ = value => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][++__captured__scope_1_[1]] = value;
    return __captured__scope_1_[1];
  };

  var _g_ = [];
  _g_.inc = true;
  _g_.zero = true;
  _g_.next = true;
  _g_.one = true;

  var _P_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    false;

    switch (term.type) {
      case 'Deref':
        return _T_(term.value, env, addressesToBind, callback, isRhsApplication);

      case 'Const':
        return _U_(term.value, callback);

      case 'Op':
        return _V_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Abstr':
        return _W_(term, env, addressesToBind, callback, isRhsApplication);

      case 'Apply':
        return _X_(term.value, env, addressesToBind, callback, isRhsApplication);

      default:
        return {
          fn: callback,
          args: [new Error('Failed to interpret term for ' + term.type), null]
        };
    }
  };

  var _T_ = (dereference, env, addressesToBind, callback, isRhsApplication) => {
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
          if (global.__isAbstract && global.__isAbstract(_48_(address))) {
            return {
              fn: callback,
              args: [null, 1]
            };
          } else {
            console.log(_48_(1));
            return {
              fn: callback,
              args: [null, _4B_(true)]
            };
          }
        } else {
          // this could refer to unknown input (for now just reading)
          if (global.__residual && global.__isAbstract(_48_(address))) {
            return {
              fn: callback,
              args: [null, _4B_(_48_(address))]
            };
          } else {
            const newTerm = _48_(address); // if the variable stored is an application, then interpret that


            if (newTerm && (newTerm.type === 'Abstr' || newTerm.type === 'Apply') && (!isRhsApplication || !_g_[dereference.value])) {
              false;
              return {
                fn: _49_,
                args: [newTerm, env, addressesToBind, callback, true]
              };
            } else {
              false;

              if (newTerm && newTerm.type === 'Identifier') {
                // the variable might not be evaluated
                false;

                _4C_(address, {
                  type: 'Deref',
                  value: newTerm
                });
              } // look up the address again because it might have changed


              return {
                fn: callback,
                args: [null, _4B_(_48_(address))]
              };
            }
          }
        }
      }
    }; // get address of the identifier on the stack


    return {
      fn: _4D_,
      args: [dereference.value, env, derefCallback]
    };
  };

  var _U_ = (constant, callback) => {
    false; // just increment the address on the stack and assign it the constant value

    return {
      fn: callback,
      args: [null, _4B_(constant)]
    };
  };

  var _V_ = (operator, env, addressesToBind, callback, isRhsApplication) => {
    false;

    const lhsOpCallback = (err, lhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err, null]
        };
      } // clean up stack


      _Y_(lhsAddress);

      const rhsOpCallback = (err, rhsAddress) => {
        if (err) {
          return {
            fn: callback,
            args: [err, null]
          };
        }

        return {
          fn: _47_,
          args: [operator.op, lhsAddress, rhsAddress, callback]
        };
      };

      if (operator.op !== 'negate' && operator.op !== 'negative') {
        // don't interpret stuff if not needed to
        if (operator.op === 'or' && _48_(lhsAddress) || operator.op === 'and' && !_48_(lhsAddress)) {
          return {
            fn: callback,
            args: [null, lhsAddress]
          };
        } else if (operator.op === 'or' && !_48_(lhsAddress)) {
          return {
            fn: _49_,
            args: [operator.rhs, env, addressesToBind, callback, isRhsApplication]
          };
        } else {
          return {
            fn: _49_,
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
      fn: _49_,
      args: [operator.lhs, env, addressesToBind, lhsOpCallback, isRhsApplication]
    };
  };

  var _W_ = (abstraction, env, addressesToBind, callback, isRhsApplication) => {
    false;
    let newEnv = Object.assign({}, env);
    let hasBeenBound = false; // bind variable if there is anything to bind

    if (addressesToBind.length > 0) {
      false;
      newEnv[abstraction.binding] = addressesToBind.pop();
      hasBeenBound = true;
    } else {
      newEnv[abstraction.binding] = _4B_({
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
        const result = _48_(address);

        if ((!global.__isAbstract || !global.__isAbstract(result)) && isRhsApplication && !hasBeenBound && result && result.type !== undefined) {
          false;
          address = _4B_({
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
      fn: _49_,
      args: [abstraction.value, newEnv, addressesToBind, abstrCallback, true]
    };
  };

  var _X_ = (application, env, addressesToBind, callback) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    false;

    const rhsCallback = (err, rhsAddress) => {
      if (err) {
        return {
          fn: callback,
          args: [err]
        };
      } else {
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
            let lhs = _48_(lhsAddress);

            if ((!global.__isAbstract || !global.__isAbstract(lhs)) && lhs && lhs.type === 'Deref') {
              false;

              if (application.lhs.type === 'Deref' && application.lhs.value.value === lhs.value.value) {
                false;

                const rhs = _48_(rhsAddress);

                _4C_(lhsAddress, {
                  type: 'Apply',
                  value: {
                    lhs: lhs,
                    rhs: rhs
                  }
                });

                lhs = _48_(lhsAddress);
              }
            } else if (global.__isAbstract && global.__isAbstract(lhs)) {
              if (lhsAddress === 1) {
                lhsAddress = rhsAddress;
                rhsAddress = 1;
              }
            }

            if (rhsAddress !== lhsAddress) {
              _4C_(rhsAddress, lhs);
            }

            _Y_(rhsAddress);

            false;
            return {
              fn: callback,
              args: [null, __captured__scope_1_[1]]
            };
          }
        };

        false;
        return {
          fn: _49_,
          args: [application.lhs, env, addressesToBind, lhsCallback, false]
        };
      }
    };

    false; // interpret the RHS term with an empty array of addresses to bind because it's a different scope

    return {
      fn: _49_,
      args: [application.rhs, env, [], rhsCallback, true]
    };
  };

  var _Y_ = address => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0] = __captured__scope_1_[0].slice(0, address + 1);
    __captured__scope_1_[1] = address;
  };

  var _47_ = (operator, lhsAddress, rhsAddress, callback) => {
    let err = null;

    const lhs = _48_(lhsAddress);

    const rhs = _48_(rhsAddress); // check if both the LHS and RHS are fully interpreted 


    if ((!lhs || lhs.type === undefined) && (!rhs || rhs.type === undefined)) {
      switch (operator) {
        case 'plus':
          _4C_(lhsAddress, lhs + rhs);

          break;

        case 'minus':
          _4C_(lhsAddress, lhs - rhs);

          break;

        case 'times':
          _4C_(lhsAddress, lhs * rhs);

          break;

        case 'divide':
          _4C_(lhsAddress, lhs / rhs);

          break;

        case 'modulus':
          _4C_(lhsAddress, lhs % rhs);

          break;

        case 'eq':
          _4C_(lhsAddress, lhs === rhs);

          break;

        case 'noteq':
          _4C_(lhsAddress, lhs !== rhs);

          break;

        case 'leq':
          _4C_(lhsAddress, lhs <= rhs);

          break;

        case 'less':
          _4C_(lhsAddress, lhs < rhs);

          break;

        case 'geq':
          _4C_(lhsAddress, lhs >= rhs);

          break;

        case 'greater':
          _4C_(lhsAddress, lhs > rhs);

          break;

        case 'and':
          _4C_(lhsAddress, lhs && rhs);

          break;

        case 'or':
          _4C_(lhsAddress, lhs || rhs);

          break;

        case 'negate':
          _4C_(lhsAddress, !lhs);

          break;

        case 'negative':
          _4C_(lhsAddress, -lhs);

          break;

        default:
          err = new Error('Failed to interpret operator for ' + operator.type);
      }
    } else {
      // if any of the two are not fully interpreted, make the otther one into a constant
      _4C_(lhsAddress, {
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

  _g_.wo = true;

  var _49_ = (term, env, addressesToBind, callback, isRhsApplication) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[2]++;

    if (global.__residual && __captured__scope_1_[2] > 125) {
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

  _g_.add = true;

  var _4C_ = (address, value) => {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0][address] = value;
  };

  var _4D_ = (identifier, env, callback) => {
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
        _4C_(1, _48_(address));

        return {
          fn: callback,
          args: [null, 1]
        };
      } else if (identifier === '_read') {
        // prepack can save the variable as it is on the stack, to be evaluated later
        if (global.__residual) {
          // assign the read identifier to the stack as an abstract variable, to postpone the call
          _4C_(2, global.__abstract('object', '({type: "Deref", value: {type: "Identifier", value: "_read"}})'));

          return {
            fn: callback,
            args: [null, 2]
          };
        } else {
          return {
            fn: _4H_,
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

  var _4H_ = callback => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _4C_(2, parseInt(input));

        return _O_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _6_ = {
    address: 1
  };
  var _8_ = {
    address: 2
  };
  var _5_ = {
    _print: _6_,
    _read: _8_,
    inc: 3,
    zero: 4,
    next: 5,
    one: 7,
    wo: 9,
    add: 10,
    m: 14,
    n: 30,
    f: 35,
    x: 36
  };
  var _K_ = [,];
  _K_.length = 0;
  var _5Q_ = console;

  var _5K_ = (err, address) => {
    const result = _48_(address);

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
      }, _5Q_, _4H_, _O_, address === 1, _48_, _5R_);
    } else {
      if (result !== undefined && result.type === 'Abstr') {
        _Y_(2);

        return {
          fn: _5R_,
          args: [null, (...arguments) => {
            let argumentAddresses = [];

            for (let i = 0; i < arguments.length; i++) {
              argumentAddresses.push(_4B_(arguments[i]));
            }

            _O_({
              fn: _W_,
              args: [result, [], argumentAddresses, _5K_, true]
            });
          }]
        };
      } else {
        return {
          fn: _5R_,
          args: [err, address > 1 && _48_(address)]
        };
      }
    }
  };

  var _5R_ = (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result);
    module.exports = result;
  };

  var _4r_ = $_A_sub("add");

  var _4p_ = $_5_sub(_4r_);

  var _4w_ = $_A_sub("wo");

  var _4u_ = $_5_sub(_4w_);

  var _4o_ = $_F_root(_4p_, _4u_);

  var _Q_ = (err, lhsAddress) => {
    if (err) {
      return {
        fn: _S_,
        args: [err, null]
      };
    }

    _Y_(lhsAddress);

    const rhsOpCallback = (err, rhsAddress) => {
      if (err) {
        return {
          fn: _S_,
          args: [err, null]
        };
      }

      return {
        fn: _47_,
        args: [_Z_.op, lhsAddress, rhsAddress, _S_]
      };
    };

    if (_Z_.op !== 'negate' && _Z_.op !== 'negative') {
      if (_Z_.op === 'or' && _48_(lhsAddress) || _Z_.op === 'and' && !_48_(lhsAddress)) {
        return {
          fn: _S_,
          args: [null, lhsAddress]
        };
      } else if (_Z_.op === 'or' && !_48_(lhsAddress)) {
        return {
          fn: _49_,
          args: [_Z_.rhs, _5_, _K_, _S_, true]
        };
      } else {
        return {
          fn: _49_,
          args: [_Z_.rhs, _5_, _K_, rhsOpCallback, true]
        };
      }
    } else {
      return {
        fn: rhsOpCallback,
        args: [null, 0]
      };
    }
  };

  var _52_ = $_9_sub(_4o_);

  var _56_ = $_A_sub("wo");

  var _54_ = $_5_sub(_56_);

  var _51_ = $_F_root(_52_, _54_);

  var _5C_ = $_9_sub(_51_);

  var _5G_ = $_A_sub("inc");

  var _5E_ = $_5_sub(_5G_);

  var _5B_ = $_F_root(_5C_, _5E_);

  var _5L_ = $_F_root({
    type: "Apply",
    value: _5B_
  }, {
    type: "Const",
    value: 0
  });

  var _4S_ = [,,,,];
  _4S_.length = 0;
  var _4U_ = {
    _print: _6_,
    _read: _8_,
    inc: 3,
    zero: 4,
    next: 5,
    one: 7,
    wo: 9,
    add: 10,
    m: 14,
    n: 30,
    f: 19,
    x: 15
  };
  var _4J_ = [,,];
  _4J_.length = 0;
  var _4L_ = {
    _print: _6_,
    _read: _8_,
    inc: 3,
    zero: 4,
    next: 5,
    one: 7,
    wo: 9,
    add: 10,
    m: 14,
    n: 30,
    f: 35,
    x: 31
  };

  _N_(_O_, _P_, _0_, _5_, _K_, _Q_, true);
})();