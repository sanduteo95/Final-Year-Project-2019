(function () {
  var _6_ = function (time, console) {
    time && console.time('interpret');
  };

  var _7_ = function (time, console) {
    time && console.timeEnd('interpret');
  };

  var _1_ = console;

  _6_(void 0, _1_);

  console.log(2);

  _7_(void 0, _1_);

  module.exports = true;
})();