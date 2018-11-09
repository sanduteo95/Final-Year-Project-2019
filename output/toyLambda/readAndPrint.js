(function () {
  var _7_ = function (err, result) {
    if (err) {
      throw err;
    } else {
      module.exports = result;
    }
  };

  var _3_ = function (time, console) {
    time && console.time('interpret');
  };

  var _B_ = function (address, value) {
    _9_[address] = value;
  };

  var _6_ = function (address) {
    return _9_[address];
  };

  var _5_ = function (callback) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('User input:\n', function (input) {
      rl.close();

      _B_(2, parseInt(input));

      callback(null, 2);
    });
  };

  var _4_ = function (time, console, waitForInput, toPrint, lookup, callback) {
    time && console.timeEnd('interpret');
    waitForInput(function (err, address) {
      if (toPrint) {
        console.log(lookup(address));
      }

      callback(err, address);
    });
  };

  var _1_ = console;

  _3_(void 0, _1_);

  var _A_ = {
    type: "Deref",
    value: {
      type: "Identifier",
      value: "_read"
    }
  };
  var _9_ = [, _A_];

  _4_(void 0, _1_, _5_, true, _6_, _7_);
})();