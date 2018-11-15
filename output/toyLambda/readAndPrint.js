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

  var _3_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _9_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _2_ = function (console, waitForInput, toPrint, lookup, callback) {
    waitForInput(function (err, address) {
      if (toPrint) {
        console.log(lookup(address));
      }

      callback(err, address);
    });
  };

  var _8_ = {
    type: "Deref",
    value: {
      type: "Identifier",
      value: "_read"
    }
  };
  var _7_ = [, _8_];

  _2_(console, _3_, true, _4_, _5_);
})();