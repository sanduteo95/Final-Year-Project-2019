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

  $$0.value = "Variable n has not been defined", _$4(_0, "message", $$0);
  $$0.value = "Error: Variable n has not been defined\n    at interpretIdentifier (./interpreter.js:350:19)\n    at interpretDereference (./interpreter.js:367:25)\n    at interpretExpression (./interpreter.js:304:24)\n    at interpretOperator (./interpreter.js:395:24)\n    at interpretExpression (./interpreter.js:306:24)\n    at interpretStatement (./interpreter.js:286:24)\n    at interpretBody (./interpreter.js:187:24)\n    at interpretApplication (./interpreter.js:110:25)\n    at interpretExpression (./interpreter.js:302:24)\n    at interpretStatement (./interpreter.js:286:24)\n    at interpretFunctions (./interpreter.js:54:20)\n    at interpretFunctions (./interpreter.js:65:20)\n    at interpretProgram (./interpreter.js:47:20)\n    at interpret (./interpreter.js:13:29)\n    at ./interpreter.js:1:18", _$4(_0, "stack", $$0);
  throw _0;
}).call(this);