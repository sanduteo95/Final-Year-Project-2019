(function () {
  var _2_ = (console, waitForInput, trampoline, toPrint, lookup, callback) => {
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
  };

  var _9_ = {
    type: "Deref",
    value: {
      type: "Identifier",
      value: "_read"
    }
  };
  var _8_ = [,, _9_, _9_];

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

        _A_(2, parseInt(input));

        return _4_({
          fn: callback,
          args: [null, 2]
        });
      }]
    };
  };

  var _4_ = res => {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _5_ = address => {
    return _8_[address];
  };

  var _6_ = (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result);
    module.exports = result;
  };

  var _A_ = (address, value) => {
    _8_[address] = value;
  };

  _2_(console, _3_, _4_, false, _5_, _6_);
})();