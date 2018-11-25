(function () {
  var _5_ = function (err, result) {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _9_ = function (address, value) {
    _7_[address] = value;
  };

  var _4_ = function (address) {
    return _7_[address];
  };

  var _A_ = function (x) {
    while (x && x.func) {
      x = x.func.apply(null, x.args);
    }
  };

  var _3_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      func: (...args) => rl.question(...args),
      args: ['User input:\n', function (input) {
        rl.close();

        _9_(2, parseInt(input));

        return _A_({
          func: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _2_ = function (console, waitForInput, toPrint, lookup, callback) {
    waitForInput(function (err, address) {
      if (toPrint) {
        console.log(lookup(address));
      }

      return {
        func: callback,
        args: [err, address]
      };
    });
  };

  var _8_ = {
    type: "Deref",
    value: {
      type: "Identifier",
      value: "_read"
    }
  };
  var _7_ = [,, _8_, _8_];

  _2_(console, _3_, false, _4_, _5_);
})();