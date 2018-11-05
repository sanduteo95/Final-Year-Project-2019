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

  $$0.value = "Variable or named lambda x has not been defined", _$4(_0, "message", $$0);
  $$0.value = "Error: Variable or named lambda x has not been defined\n    at interpretIdentifier (./toyLambda/interpreter.js:155:22)\n    at interpretDereference (./toyLambda/interpreter.js:185:9)\n    at interpretTerm (./toyLambda/interpreter.js:53:17)\n    at interpretOperator (./toyLambda/interpreter.js:286:9)\n    at interpretTerm (./toyLambda/interpreter.js:59:17)\n    at interpretAbstraction (./toyLambda/interpreter.js:89:9)\n    at interpretTerm (./toyLambda/interpreter.js:62:17)\n    at interpretLambda (./toyLambda/interpreter.js:28:13)\n    at ./toyLambda/interpreter.js:15:5\n    at ./toyLambda/interpreter.js:1:1", _$4(_0, "stack", $$0);
  throw _0;
}).call(this);