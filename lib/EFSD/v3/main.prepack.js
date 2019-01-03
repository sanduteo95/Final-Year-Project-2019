var union_arrays;
(function () {
  var $$0_enumerable_58false_44configurable_58true_44writable_58true = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0_global = this;

  var _$1_ReferenceError = _$0_global.ReferenceError;
  var _$2_ReferenceError_46prototype = _$1_ReferenceError.prototype;
  var _$3_Object = _$0_global.Object;
  var _$4_Object_46defineProperty = _$3_Object.defineProperty;

  var _6_union_95arrays = function (x, y) {
    var obj = {};

    for (var i = x.length - 1; i >= 0; --i) obj[x[i]] = x[i];

    for (var i = y.length - 1; i >= 0; --i) obj[y[i]] = y[i];

    var res = [];

    for (var k in obj) {
      if (obj.hasOwnProperty(k)) // <-- optional
        res.push(obj[k]);
    }

    return res;
  };

  var __constructor = function () {};

  _$0_global.union_arrays = _6_union_95arrays;
  _$0_global.mainGraph = null;

  var _3_ = (__constructor.prototype = _$2_ReferenceError_46prototype, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = "name is not defined", _$4_Object_46defineProperty(_3_, "message", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = "ReferenceError: name is not defined\n    at /Users/teo/Documents/UNIVERSITY/5th year/Project/EFSD-vis/js/goi-machine.js:4:16\n    at /Users/teo/Documents/UNIVERSITY/5th year/Project/EFSD-vis/js/goi-machine.js:24:1", _$4_Object_46defineProperty(_3_, "stack", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  throw _3_;
}).call(this);