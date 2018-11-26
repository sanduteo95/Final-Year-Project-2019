(function () {
  var _2_ = (console, waitForInput, toPrint, lookup, callback) => {
    waitForInput((err, address) => {
      if (toPrint) {
        console.log(lookup(address));
      }

      return {
        fn: callback,
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
  var _7_ = [, _8_];

  var _3_ = callback => {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return {
      fn: (...args) => rl.question(...args),
      args: ['User input:\n', input => {
        rl.close();

        _9_(2, parseInt(input));

        return _A_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _4_ = address => {
    return _7_[address];
  };

  var _5_ = (err, result) => {
    if (err) {
      throw err;
    }

    module.exports = result;
  };

  var _9_ = (address, value) => {
    _7_[address] = value;
  };

  var _A_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  _2_(console, _3_, true, _4_, _5_);
})();