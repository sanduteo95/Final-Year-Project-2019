(function () {
  var $$0 = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0 = this;

  var _$1 = _$0.Error;
  var _$2 = _$1.prototype;
  var _$3 = _$0.Object;
  var _$4 = _$3.defineProperty;

  var __constructor = function () {};

  var _0 = (__constructor.prototype = _$2, new __constructor());

  $$0.value = "error", _$4(_0, "message", $$0);
  $$0.value = "Error: error\n    at interpretBody (./interpreter.js:154:31)\n    at interpretApplication (./interpreter.js:106:25)\n    at interpretExpression (./interpreter.js:298:24)\n    at interpretStatement (./interpreter.js:282:24)\n    at interpretFunctions (./interpreter.js:50:20)\n    at interpretFunctions (./interpreter.js:61:20)\n    at interpretProgram (./interpreter.js:43:20)\n    at ./interpreter.js:11:21\n    at ./interpreter.js:1:18", _$4(_0, "stack", $$0);
  throw _0;
}).call(this);