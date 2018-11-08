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

  var _r_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _7_waitForInput = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();
      _1_[2] = parseInt(input);
      callback(null, 2);
    });
  };

  var _p_ = function (err, address) {
    _r_(err, address > 1 && _1_[address]);
  };

  var $_0_factoryFunction = function (callback, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    // when the function returns, decrease number of term calls
    __captured__scope_1_[0]--;
    false;
    callback(err, address);
  };

  var _8_ = function (err, address) {
    return $_0_factoryFunction.call(this, _D_, 0, err, address);
  };

  var _F_ = function (err, address) {
    return $_0_factoryFunction.call(this, _O_, 0, err, address);
  };

  var _Q_ = function (err, address) {
    return $_0_factoryFunction.call(this, _Z_, 0, err, address);
  };

  var _a_ = function (err, address) {
    return $_0_factoryFunction.call(this, _f_, 0, err, address);
  };

  var _g_ = function (err, address) {
    return $_0_factoryFunction.call(this, _p_, 0, err, address);
  };

  var $_2_factoryFunction = function (callback, application, address, __scope_1_, err, newAddress) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      // we might have to keep the appication as it is if the RHS wasn't replaced in the LHS
      if ((!global.__isAbstract || !global.__isAbstract(_1_[newAddress])) && _1_[newAddress] && _1_[newAddress][0] === 'Deref') {
        false;

        if (application[0][0] === 'Deref' && application[0][1][1] === _1_[newAddress][1][1]) {
          false;
          _1_[newAddress] = ['Apply', [_1_[newAddress], _1_[address]]];
        }
      } // clean up stack


      if (address !== newAddress) {
        _1_[address] = _1_[newAddress];
      }

      __captured__scope_1_[1] = address;
      false;
      callback(null, __captured__scope_1_[1]);
    }
  };

  var _O_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _Q_, _R_, 4, 0, err, newAddress);
  };

  var _f_ = function (err, newAddress) {
    return $_2_factoryFunction.call(this, _g_, _h_, 3, 0, err, newAddress);
  };

  var $_1_factoryFunction = function (callback, abstraction, __scope_1_, err, address) {
    var __captured__scope_1_ = __scope_0_main[__scope_1_] || __get_scope_binding_0_get_95scope_95binding(__scope_1_);

    if (err) {
      callback(err);
    } else {
      // we have postponed the input
      if (global.__isAbstract && global.__isAbstract(_1_[address])) {
        global.__residual("void", function (waitForInput, callback) {
          waitForInput(callback);
        }, _7_waitForInput, callback);
      } else if (!true && _1_[address] && _1_[address][0] !== undefined) {
        false; // if the result is not fully evaluated, can't risk leaving out the abstracted variable

        _1_[++__captured__scope_1_[1]] = ['Abstr', [abstraction[0], _1_[address]]];
        address = __captured__scope_1_[1];
      }
    }

    {
      false;
    }
    // pass the address to the callback
    callback(null, address);
  };

  var _D_ = function (err, address) {
    return $_1_factoryFunction.call(this, _F_, _G_, 0, err, address);
  };

  var _Z_ = function (err, address) {
    return $_1_factoryFunction.call(this, _a_, _b_, 0, err, address);
  };

  var _6_ = function (waitForInput, console, stack, callback, emptyAddress) {
    waitForInput(function (err, address) {
      console.log(stack[address]);
      callback(err, emptyAddress);
    });
  };

  var _2_ = ["Deref", ["Identifier", "_read"]];
  var _1_ = [, _2_, _2_, void 0, void 0];
  var _K_ = ["Identifier", "_print"];
  var _I_ = ["Deref", _K_];
  var _G_ = ["_print", _I_];
  var _S_ = ["Abstr", _G_];
  var _W_ = ["Identifier", "x"];
  var _U_ = ["Deref", _W_];
  var _R_ = [_S_, _U_];
  var _d_ = ["Apply", _R_];
  var _b_ = ["x", _d_];
  var _h_ = [["Abstr", _b_], ["Deref", ["Identifier", "_read"]]];

  _6_(_7_waitForInput, console, _1_, _8_, 0);

  module.exports = void 0;
})();