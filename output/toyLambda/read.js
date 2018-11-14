(function () {
  var _6_ = function (err, result) {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _A_ = function (address, value) {
    _8_[address] = value;
  };

  var _5_ = function (address) {
    return _8_[address];
  };

  var _4_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _A_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _3_ = function (console, waitForInput, toPrint, lookup, callback, timing) {
    waitForInput(function (err, address) {
      if (toPrint) {
        console.log(lookup(address));
      }

      callback(err, address, timing);
    });
  };

  var _9_ = {
    type: "Deref",
    value: {
      type: "Identifier",
      value: "_read"
    }
  };
  var _8_ = [,, _9_, _9_];

  _3_(console, _4_, false, _5_, _6_, void 0);
})();