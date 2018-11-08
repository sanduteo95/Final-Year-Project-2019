(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [0, 3];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _T_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _3_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _6_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _R_ = function (err, address) {
    _T_(err, address > 1 && _6_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    // when the function returns, decrease number of term calls
    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _4_ = function (err, address) {
    return $_0_factoryFunction.call(this, _A_, 0, err, address);
  };

  var _C_ = function (err, address) {
    return $_0_factoryFunction.call(this, _R_, 0, err, address);
  };

  var _A_ = function (err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (err) {
      _C_(err);
    } else {
      // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS
      if ((!global.__isAbstract || !global.__isAbstract(_6_[newAddress])) && _6_[newAddress] && _6_[newAddress].type === 'Deref') {
        false;

        if (_D_.lhs.type === 'Deref' && _D_.lhs.value.value === _6_[newAddress].value.value) {
          false;
          _6_[newAddress] = {
            type: 'Apply',
            value: {
              lhs: _6_[newAddress],
              rhs: _6_[3]
            }
          };
        }
      } // clean up stack


      if (3 !== newAddress) {
        _6_[3] = _6_[newAddress];
      }

      __captured__scope_1_[1] = 3;
      false;

      _C_(null, __captured__scope_1_[1]);
    }
  };

  var _2_ = function (waitForInput, callback) {
    waitForInput(callback);
  };

  var _0_ = "";
  var _6_ = [,, _0_, _0_, _0_];
  var _D_ = {
    lhs: {
      type: "Abstr",
      binding: "x",
      value: {
        type: "Deref",
        value: {
          type: "Identifier",
          value: "x"
        }
      }
    },
    rhs: {
      type: "Deref",
      value: {
        type: "Identifier",
        value: "_read"
      }
    }
  };

  _2_(_3_waitForInput, _4_);

  module.exports = _0_;
})();