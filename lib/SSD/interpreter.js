exports["SSD"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../itf-impl/Visualiser/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../itf-impl/Visualiser/js/app.js":
/*!****************************************!*\
  !*** ../itf-impl/Visualiser/js/app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
(function () {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! goi-machine */ "../itf-impl/Visualiser/js/goi-machine.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (machine) {
    return function (program, mainCallback, maxTermCalls) {
      var termCalls = 0;
      maxTermCalls = maxTermCalls || 125;

      function trampoline(res) {
        while (res && res.fn) {
          res = res.fn.apply(null, res.args);
        }
      }

      function interpret(program, callback) {
        machine.setPlay(false);
        machine.setPlaying(false);
        machine.compile(program);
        machine.setPlay(true);
        machine.setFinished(false);

        if (!machine.isPlaying()) {
          return {
            fn: autoPlay,
            args: [callback]
          };
        }
      }

      function autoPlay(callback) {
        termCalls++;
        machine.setPlaying(true);
        var result;

        if (!machine.isFinished()) {
          result = machine.pass();
        }

        if (machine.isFinished()) {
          if (typeof result === 'function') {
            return {
              fn: callback,
              args: [null, function () {
                machine.setPlay(false);
                machine.setPlaying(false); // can only receive one argument at a time so this work

                if (arguments.length !== 0) {
                  result(arguments[0]);
                }

                machine.setPlay(true);
                machine.setFinished(false);

                if (!machine.isPlaying()) {
                  return trampoline({
                    fn: autoPlay,
                    args: [callback]
                  });
                }
              }]
            };
          } else {
            return {
              fn: callback,
              args: [null, result]
            };
          }
        } else {
          if (machine.isPlay()) {
            if (global.__residual && termCalls > maxTermCalls) {
              // set to 0 because up till now Prepack evaluated everything
              termCalls = 0;

              global.__residual("void", function (trampoline, autoPlay, callback) {
                return trampoline({
                  fn: autoPlay,
                  args: [callback]
                });
              }, trampoline, autoPlay, callback);
            } else {
              return {
                fn: autoPlay,
                args: [callback]
              };
            }
          } else {
            machine.setPlaying(false);
          }
        }
      }

      trampoline({
        fn: interpret,
        args: [program, mainCallback]
      });
    };
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(global);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../tas458/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/abstraction.js":
/*!****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/abstraction.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Abstraction =
  /**
   * param here is the name of the variable of the abstraction. Body is the
   * subtree  representing the body of the abstraction.
   */
  function Abstraction(pattern, body) {
    _classCallCheck(this, Abstraction);

    this.pattern = pattern;
    this.body = body;
  };

  return Abstraction;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/application.js":
/*!****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/application.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Application =
  /**
   * (lhs rhs) - left-hand side and right-hand side of an application.
   */
  function Application(lhs, rhs) {
    _classCallCheck(this, Application);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  return Application;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/assign-param.js":
/*!*****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/assign-param.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var AssignParam = function AssignParam(param, body) {
    _classCallCheck(this, AssignParam);

    this.param = param;
    this.body = body;
  };

  return AssignParam;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/assign.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/assign.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Assign = function Assign(param, body) {
    _classCallCheck(this, Assign);

    this.param = param;
    this.body = body;
  };

  return Assign;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/binary-op.js":
/*!**************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/binary-op.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/unary-op */ "../itf-impl/Visualiser/js/ast/unary-op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (UnaryOp) {
  var BinaryOp =
  /*#__PURE__*/
  function (_UnaryOp) {
    _inherits(BinaryOp, _UnaryOp);

    function BinaryOp(type, name, v1, v2) {
      var _this;

      _classCallCheck(this, BinaryOp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BinaryOp).call(this, type, name, v1));
      _this.v2 = v2;
      return _this;
    }

    return BinaryOp;
  }(UnaryOp);

  return BinaryOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/cell.js":
/*!*********************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/cell.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Cell = function Cell(term) {
    _classCallCheck(this, Cell);

    this.term = term;
  };

  return Cell;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/change.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/change.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Change = function Change(param, body) {
    _classCallCheck(this, Change);

    this.param = param;
    this.body = body;
  };

  return Change;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/constant.js":
/*!*************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/constant.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Constant = function Constant(value) {
    _classCallCheck(this, Constant);

    this.value = value;
  };

  return Constant;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/deprecation.js":
/*!****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/deprecation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Deprecation = function Deprecation(term) {
    _classCallCheck(this, Deprecation);

    this.term = term;
  };

  return Deprecation;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/deref.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/deref.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Dereference = function Dereference(term) {
    _classCallCheck(this, Dereference);

    this.term = term;
  };

  return Dereference;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/folding.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/folding.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Folding = function Folding(t1, t2) {
    _classCallCheck(this, Folding);

    this.t1 = t1;
    this.t2 = t2;
  };

  return Folding;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/graph-abstraction.js":
/*!**********************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/graph-abstraction.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var GraphAbstraction = function GraphAbstraction(term) {
    _classCallCheck(this, GraphAbstraction);

    this.term = term;
  };

  return GraphAbstraction;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/identifier.js":
/*!***************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/identifier.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Identifier =
  /**
   * name is the string matched for this identifier.
   */
  function Identifier(value, name) {
    _classCallCheck(this, Identifier);

    this.value = value;
    this.name = name;
  };

  return Identifier;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/if-then-else.js":
/*!*****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/if-then-else.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var IfThenElse = function IfThenElse(cond, t1, t2) {
    _classCallCheck(this, IfThenElse);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  return IfThenElse;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/operation.js":
/*!**************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/operation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Operation = function Operation(type, name) {
    _classCallCheck(this, Operation);

    this.type = type;
    this.name = name;
  };

  return Operation;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/pattern.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/pattern.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Pattern = function Pattern(type, id1, id2) {
    _classCallCheck(this, Pattern);

    this.type = type;
    this.id1 = id1;
    this.id2 = id2;
  };

  return Pattern;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/propagation.js":
/*!****************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/propagation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Propagation = function Propagation() {
    _classCallCheck(this, Propagation);
  };

  return Propagation;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/provisional-constant.js":
/*!*************************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/provisional-constant.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var ProvisionalConstant = function ProvisionalConstant(term) {
    _classCallCheck(this, ProvisionalConstant);

    this.term = term;
  };

  return ProvisionalConstant;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/recursion.js":
/*!**************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/recursion.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Recursion = function Recursion(param, body) {
    _classCallCheck(this, Recursion);

    this.param = param;
    this.body = body;
  };

  return Recursion;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/sym-binop.js":
/*!**************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/sym-binop.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/binary-op */ "../itf-impl/Visualiser/js/ast/binary-op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (BinaryOp) {
  var SymmetricBinaryOp =
  /*#__PURE__*/
  function (_BinaryOp) {
    _inherits(SymmetricBinaryOp, _BinaryOp);

    function SymmetricBinaryOp() {
      _classCallCheck(this, SymmetricBinaryOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(SymmetricBinaryOp).apply(this, arguments));
    }

    return SymmetricBinaryOp;
  }(BinaryOp);

  return SymmetricBinaryOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/tuple.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/tuple.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Tuple = function Tuple(lhs, rhs) {
    _classCallCheck(this, Tuple);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  return Tuple;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/ast/unary-op.js":
/*!*************************************************!*\
  !*** ../itf-impl/Visualiser/js/ast/unary-op.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/operation */ "../itf-impl/Visualiser/js/ast/operation.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Operation) {
  var UnaryOp =
  /*#__PURE__*/
  function (_Operation) {
    _inherits(UnaryOp, _Operation);

    function UnaryOp(type, name, v1) {
      var _this;

      _classCallCheck(this, UnaryOp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UnaryOp).call(this, type, name));
      _this.v1 = v1;
      return _this;
    }

    return UnaryOp;
  }(Operation);

  return UnaryOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/box-wrapper.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/box-wrapper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! term */ "../itf-impl/Visualiser/js/term.js"), __webpack_require__(/*! box */ "../itf-impl/Visualiser/js/box.js"), __webpack_require__(/*! nodes/promo */ "../itf-impl/Visualiser/js/nodes/promo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Link, Term, Box, Promo) {
  // !-box 
  var BoxWrapper =
  /*#__PURE__*/
  function (_Term) {
    _inherits(BoxWrapper, _Term);

    function BoxWrapper(prin, box, auxs) {
      var _this;

      _classCallCheck(this, BoxWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BoxWrapper).call(this, prin, auxs));
      _this.box = box;
      return _this;
    }

    _createClass(BoxWrapper, [{
      key: "set",
      value: function set(prin, box, auxs) {
        _get(_getPrototypeOf(BoxWrapper.prototype), "set", this).call(this, prin, auxs);

        this.box = box;
      }
    }, {
      key: "removeAux",
      value: function removeAux(aux) {
        this.auxs.splice(this.auxs.indexOf(aux), 1);
        aux.deleteAndPreserveOutLink();
      }
    }, {
      key: "moveOut",
      value: function moveOut() {
        var _arr = Array.from(this.box.links);

        for (var _i = 0; _i < _arr.length; _i++) {
          var link = _arr[_i];
          link.changeToGroup(this.group);
        }

        var _arr2 = Array.from(this.links);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var _link = _arr2[_i2];

          _link.changeToGroup(this.group);
        }

        var _arr3 = Array.from(this.box.nodes);

        for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
          var node = _arr3[_i3];
          node.changeToGroup(this.group);
        }

        var _arr4 = Array.from(this.auxs);

        for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
          var aux = _arr4[_i4];
          aux.changeToGroup(this.group);
        }

        this.prin.changeToGroup(this.group);

        var _arr5 = Array.from(this.nodes);

        for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
          var _node = _arr5[_i5];

          _node.changeToGroup(this.group);
        }
      }
    }, {
      key: "copyBox",
      value: function copyBox(map) {
        var newBoxWrapper = new BoxWrapper();
        var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
        newBoxWrapper.prin = newPrin;
        map.set(this.prin.key, newPrin.key);
        var newBox = new Box().addToGroup(newBoxWrapper);
        newBoxWrapper.box = newBox;
        newBoxWrapper.auxs = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;
            var newNode;

            if (node instanceof BoxWrapper) {
              newNode = node.copyBox(map).addToGroup(newBox);
            } else {
              var newNode = node.copy().addToGroup(newBox);
              map.set(node.key, newNode.key);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.auxs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var aux = _step2.value;
            var newAux = aux.copy().addToGroup(newBoxWrapper);
            newBoxWrapper.auxs.push(newAux);
            map.set(aux.key, newAux.key);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.box.links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var link = _step3.value;
            var newLink = new Link(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
            newLink.reverse = link.reverse;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _link2 = _step4.value;
            var newLink = new Link(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
            newLink.reverse = _link2.reverse;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return newBoxWrapper;
      }
    }, {
      key: "copy",
      value: function copy() {
        var map = new Map();
        return this.copyBox(map);
      }
    }, {
      key: "delete",
      value: function _delete() {
        this.box.delete();

        var _arr6 = Array.from(this.auxs);

        for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
          var aux = _arr6[_i6];
          aux.delete();
        }

        this.prin.delete();

        _get(_getPrototypeOf(BoxWrapper.prototype), "delete", this).call(this);
      }
    }, {
      key: "deleteAndPreserveLink",
      value: function deleteAndPreserveLink() {
        this.box.delete();

        var _arr7 = Array.from(this.auxs);

        for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
          var aux = _arr7[_i7];
          this.removeAux(aux); // preserve outLink
        }

        this.prin.deleteAndPreserveInLink(); //preserve inLink

        _get(_getPrototypeOf(BoxWrapper.prototype), "delete", this).call(this);
      }
    }], [{
      key: "create",
      value: function create() {
        var wrapper = new BoxWrapper();
        var box = new Box().addToGroup(wrapper);
        var promo = new Promo().addToGroup(wrapper);
        wrapper.set(promo, box, []);
        return wrapper;
      }
    }]);

    return BoxWrapper;
  }(Term);

  return BoxWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/box.js":
/*!****************************************!*\
  !*** ../itf-impl/Visualiser/js/box.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../itf-impl/Visualiser/js/group.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group) {
  // general box-ed subgraph
  var Box =
  /*#__PURE__*/
  function (_Group) {
    _inherits(Box, _Group);

    function Box() {
      var _this;

      _classCallCheck(this, Box);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Box).call(this));
      _this.nodes = [];
      _this.links = [];
      return _this;
    }

    _createClass(Box, [{
      key: "copy",
      value: function copy(graph) {// this shouldnt be call, since every box should be inside a wrapper
      }
    }]);

    return Box;
  }(Group);

  return Box;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/gc.js":
/*!***************************************!*\
  !*** ../itf-impl/Visualiser/js/gc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../itf-impl/Visualiser/js/group.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! nodes/promo */ "../itf-impl/Visualiser/js/nodes/promo.js"), __webpack_require__(/*! nodes/recur */ "../itf-impl/Visualiser/js/nodes/recur.js"), __webpack_require__(/*! nodes/abs */ "../itf-impl/Visualiser/js/nodes/abs.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group, Contract, Promo, Recur, Abs, Weak) {
  var GC =
  /*#__PURE__*/
  function () {
    function GC(graph) {
      _classCallCheck(this, GC);

      this.graph = graph;
      this.noMore = false;
    }

    _createClass(GC, [{
      key: "collect",
      value: function collect() {
        /*
        do {
        	this.noMore = true;
        	this.collectInGroup(this.graph.child);
        } while (!this.noMore)
        */
      }
    }, {
      key: "collectInGroup",
      value: function collectInGroup(group) {
        var _arr = Array.from(group.nodes);

        for (var _i = 0; _i < _arr.length; _i++) {
          var node = _arr[_i];

          if (node instanceof Weak || node instanceof Contract && node.findLinksInto(null).length == 0) {
            var link = node.findLinksOutOf(null)[0];
            var nextNode = this.graph.findNodeByKey(link.to);

            if (!(nextNode instanceof Abs && link.toPort == "w")) {
              this.noMore = false;
              this.collectFromBottom(node);
            }
          } else if (node instanceof Group) {
            this.collectInGroup(node);
          }
        }
      }
    }, {
      key: "collectFromBottom",
      value: function collectFromBottom(node) {
        if (node instanceof Contract && node.findLinksInto(null).length != 0) {} else if (node instanceof Promo || node instanceof Recur) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = node.group.auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var aux = _step.value;
              this.collectFromBottom(aux);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          node.group.delete();
        } else {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = node.findLinksOutOf(null)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var link = _step2.value;
              this.collectFromBottom(this.graph.findNodeByKey(link.to));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          node.delete();
        }
      }
    }]);

    return GC;
  }();

  return GC;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/goi-machine.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/goi-machine.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! parser/pattern */ "../itf-impl/Visualiser/js/parser/pattern.js"), __webpack_require__(/*! ast/abstraction */ "../itf-impl/Visualiser/js/ast/abstraction.js"), __webpack_require__(/*! ast/application */ "../itf-impl/Visualiser/js/ast/application.js"), __webpack_require__(/*! ast/identifier */ "../itf-impl/Visualiser/js/ast/identifier.js"), __webpack_require__(/*! ast/constant */ "../itf-impl/Visualiser/js/ast/constant.js"), __webpack_require__(/*! ast/unary-op */ "../itf-impl/Visualiser/js/ast/unary-op.js"), __webpack_require__(/*! ast/binary-op */ "../itf-impl/Visualiser/js/ast/binary-op.js"), __webpack_require__(/*! ast/sym-binop */ "../itf-impl/Visualiser/js/ast/sym-binop.js"), __webpack_require__(/*! ast/if-then-else */ "../itf-impl/Visualiser/js/ast/if-then-else.js"), __webpack_require__(/*! ast/recursion */ "../itf-impl/Visualiser/js/ast/recursion.js"), __webpack_require__(/*! ast/tuple */ "../itf-impl/Visualiser/js/ast/tuple.js"), __webpack_require__(/*! ast/cell */ "../itf-impl/Visualiser/js/ast/cell.js"), __webpack_require__(/*! ast/provisional-constant */ "../itf-impl/Visualiser/js/ast/provisional-constant.js"), __webpack_require__(/*! ast/change */ "../itf-impl/Visualiser/js/ast/change.js"), __webpack_require__(/*! ast/assign */ "../itf-impl/Visualiser/js/ast/assign.js"), __webpack_require__(/*! ast/assign-param */ "../itf-impl/Visualiser/js/ast/assign-param.js"), __webpack_require__(/*! ast/propagation */ "../itf-impl/Visualiser/js/ast/propagation.js"), __webpack_require__(/*! ast/deprecation */ "../itf-impl/Visualiser/js/ast/deprecation.js"), __webpack_require__(/*! ast/deref */ "../itf-impl/Visualiser/js/ast/deref.js"), __webpack_require__(/*! ast/graph-abstraction */ "../itf-impl/Visualiser/js/ast/graph-abstraction.js"), __webpack_require__(/*! ast/folding */ "../itf-impl/Visualiser/js/ast/folding.js"), __webpack_require__(/*! parser/lexer */ "../itf-impl/Visualiser/js/parser/lexer.js"), __webpack_require__(/*! parser/parser */ "../itf-impl/Visualiser/js/parser/parser.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! graph */ "../itf-impl/Visualiser/js/graph.js"), __webpack_require__(/*! group */ "../itf-impl/Visualiser/js/group.js"), __webpack_require__(/*! term */ "../itf-impl/Visualiser/js/term.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/abs */ "../itf-impl/Visualiser/js/nodes/abs.js"), __webpack_require__(/*! nodes/app */ "../itf-impl/Visualiser/js/nodes/app.js"), __webpack_require__(/*! nodes/binop */ "../itf-impl/Visualiser/js/nodes/binop.js"), __webpack_require__(/*! nodes/sym-binop */ "../itf-impl/Visualiser/js/nodes/sym-binop.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! nodes/der */ "../itf-impl/Visualiser/js/nodes/der.js"), __webpack_require__(/*! nodes/var */ "../itf-impl/Visualiser/js/nodes/var.js"), __webpack_require__(/*! nodes/if */ "../itf-impl/Visualiser/js/nodes/if.js"), __webpack_require__(/*! nodes/recur */ "../itf-impl/Visualiser/js/nodes/recur.js"), __webpack_require__(/*! nodes/start */ "../itf-impl/Visualiser/js/nodes/start.js"), __webpack_require__(/*! nodes/unop */ "../itf-impl/Visualiser/js/nodes/unop.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js"), __webpack_require__(/*! nodes/delta */ "../itf-impl/Visualiser/js/nodes/delta.js"), __webpack_require__(/*! nodes/set */ "../itf-impl/Visualiser/js/nodes/set.js"), __webpack_require__(/*! nodes/setp */ "../itf-impl/Visualiser/js/nodes/setp.js"), __webpack_require__(/*! nodes/dep */ "../itf-impl/Visualiser/js/nodes/dep.js"), __webpack_require__(/*! nodes/deref */ "../itf-impl/Visualiser/js/nodes/deref.js"), __webpack_require__(/*! nodes/prop */ "../itf-impl/Visualiser/js/nodes/prop.js"), __webpack_require__(/*! nodes/ref */ "../itf-impl/Visualiser/js/nodes/ref.js"), __webpack_require__(/*! nodes/prov */ "../itf-impl/Visualiser/js/nodes/prov.js"), __webpack_require__(/*! nodes/pattuple */ "../itf-impl/Visualiser/js/nodes/pattuple.js"), __webpack_require__(/*! nodes/pair */ "../itf-impl/Visualiser/js/nodes/pair.js"), __webpack_require__(/*! nodes/gabs */ "../itf-impl/Visualiser/js/nodes/gabs.js"), __webpack_require__(/*! nodes/fold */ "../itf-impl/Visualiser/js/nodes/fold.js"), __webpack_require__(/*! gc */ "../itf-impl/Visualiser/js/gc.js"), __webpack_require__(/*! helper */ "../itf-impl/Visualiser/js/helper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (PatternType, Abstraction, Application, Identifier, Constant, UnaryOp, BinaryOp, SymmetricBinaryOp, IfThenElse, Recursion, Tuple, Cell, ProvisionalConstant, Change, Assign, AssignParam, Propagation, Deprecation, Dereference, GraphAbstraction, Folding, Lexer, Parser, MachineToken, Link, Graph, Group, Term, BoxWrapper, Abs, App, BinOp, SymBinOp, Const, Contract, Der, Var, If, Recur, Start, UnOp, Weak, Delta, Set, SetParam, Dep, Deref, Prop, Ref, Prov, PatTuple, Pair, GAbs, Fold, GC, Helper) {
  var GoIMachine =
  /*#__PURE__*/
  function () {
    function GoIMachine() {
      _classCallCheck(this, GoIMachine);

      this.graph = new Graph(this);
      Helper.graph = this.graph; // cheating!

      this.token = new MachineToken(this);
      this.gc = new GC(this.graph);
      this.count = 0;
      this.token.isMain = true;
      this.evalTokens = [];
      this.cells = [];
      this.evaluating = false;
      this.newValues = new Map();
      this.hasUpdate = false;
      this.play = false;
      this.playing = false;
      this.finished = false;
    }

    _createClass(GoIMachine, [{
      key: "isPlay",
      value: function isPlay() {
        return this.playing;
      }
    }, {
      key: "setPlay",
      value: function setPlay(playValue) {
        this.play = playValue;
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this.playing;
      }
    }, {
      key: "setPlaying",
      value: function setPlaying(playingValue) {
        this.playing = playingValue;
      }
    }, {
      key: "isFinished",
      value: function isFinished() {
        return this.finished;
      }
    }, {
      key: "setFinished",
      value: function setFinished(finishedValue) {
        this.finished = finishedValue;
      }
    }, {
      key: "compile",
      value: function compile(source) {
        var lexer = new Lexer(source + '\0');
        var parser = new Parser(lexer);
        var ast = parser.parse(); // init

        this.graph.clear();
        this.token.reset();
        this.count = 0;
        this.evalTokens = [];
        this.cells = [];
        this.readyEvalTokens = 0;
        this.evaluating = false;
        this.newValues.clear();
        this.hasUpdate = false; // create graph

        var start = new Start().addToGroup(this.graph.child);
        var term = this.toGraph(ast, this.graph.child);
        new Link(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
        this.deleteVarNode(this.graph.child);
      } // translation

    }, {
      key: "toGraph",
      value: function toGraph(ast, group) {
        var graph = this.graph;

        if (ast instanceof Identifier) {
          var v = new Var(ast.name).addToGroup(group);
          return new Term(v, [v]);
        } else if (ast instanceof Abstraction) {
          var params;
          var paramUsed;
          var auxNodes;

          if (ast.pattern.type == PatternType.Id) {
            params = [ast.pattern.id1];
            paramUsed = [false];
            auxNodes = [null];
          } else if (ast.pattern.type == PatternType.Tuple) {
            params = [ast.pattern.id1, ast.pattern.id2];
            paramUsed = [false, false];
            auxNodes = [null, null];
          }

          var wrapper = BoxWrapper.create().addToGroup(group);
          var abs = new Abs().addToGroup(wrapper.box);
          var term = this.toGraph(ast.body, wrapper.box);
          new Link(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
          new Link(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
          var auxs = Array.from(term.auxs);

          for (var i = 0; i < params.length; i++) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = term.auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _aux = _step.value;

                if (_aux.name == params[i]) {
                  paramUsed[i] = true;
                  auxNodes[i] = _aux;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          for (var i = 0; i < params.length; i++) {
            if (paramUsed[i]) {
              auxs.splice(auxs.indexOf(auxNodes[i]), 1);
            } else {
              auxNodes[i] = new Weak(params[i]).addToGroup(abs.group);
            }
          }

          if (ast.pattern.type == PatternType.Id) new Link(auxNodes[0].key, abs.key, "nw", "w", true).addToGroup(abs.group);else if (ast.pattern.type == PatternType.Tuple) {
            var pattern = new PatTuple().addToGroup(abs.group);
            new Link(auxNodes[0].key, pattern.key, "n", "w").addToGroup(abs.group);
            new Link(auxNodes[1].key, pattern.key, "n", "e").addToGroup(abs.group);
            new Link(pattern.key, abs.key, "nw", "w", true).addToGroup(abs.group);
          }
          wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
          return new Term(wrapper.prin, wrapper.auxs);
        } else if (ast instanceof Application) {
          var app = new App().addToGroup(group); //lhs

          var left = this.toGraph(ast.lhs, group);
          var der = new Der(left.prin.name).addToGroup(group);
          new Link(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

          var right = this.toGraph(ast.rhs, group);
          new Link(app.key, der.key, "w", "s").addToGroup(group);
          new Link(app.key, right.prin.key, "e", "s").addToGroup(group);
          return new Term(app, Term.joinAuxs(left.auxs, right.auxs, group));
        } else if (ast instanceof Constant) {
          var wrapper = BoxWrapper.create().addToGroup(group);
          var constant = new Const(ast.value).addToGroup(wrapper.box);
          wrapper.prin.name = constant.name;
          new Link(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
          return new Term(wrapper.prin, wrapper.auxs);
        } else if (ast instanceof BinaryOp) {
          var binop;
          if (ast instanceof SymmetricBinaryOp) binop = new SymBinOp(ast.name).addToGroup(group);else binop = new BinOp(ast.name).addToGroup(group);
          binop.subType = ast.type;
          var left = this.toGraph(ast.v1, group);
          var right = this.toGraph(ast.v2, group);
          new Link(binop.key, left.prin.key, "w", "s").addToGroup(group);
          new Link(binop.key, right.prin.key, "e", "s").addToGroup(group);
          return new Term(binop, Term.joinAuxs(left.auxs, right.auxs, group));
        } else if (ast instanceof UnaryOp) {
          var unop = new UnOp(ast.name).addToGroup(group);
          unop.subType = ast.type;
          var box = this.toGraph(ast.v1, group);
          new Link(unop.key, box.prin.key, "n", "s").addToGroup(group);
          return new Term(unop, box.auxs);
        } else if (ast instanceof IfThenElse) {
          var ifnode = new If().addToGroup(group);
          var cond = this.toGraph(ast.cond, group);
          var t1 = this.toGraph(ast.t1, group);
          var t2 = this.toGraph(ast.t2, group);
          new Link(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
          new Link(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
          new Link(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
          return new Term(ifnode, Term.joinAuxs(Term.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
        } else if (ast instanceof Recursion) {
          var p1 = ast.param; // recur term

          var wrapper = BoxWrapper.create().addToGroup(group);
          wrapper.prin.delete();
          var recur = new Recur().addToGroup(wrapper);
          wrapper.prin = recur;
          var box = this.toGraph(ast.body, wrapper.box);
          wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
          new Link(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
          var p1Used = false;
          var auxNode1;

          for (var i = 0; i < wrapper.auxs.length; i++) {
            var aux = wrapper.auxs[i];

            if (aux.name == p1) {
              p1Used = true;
              auxNode1 = this.graph.findNodeByKey(aux.findLinksInto(null)[0].from);
              aux.delete();
              break;
            }
          }

          if (p1Used) {// wrapper.auxs.splice(wrapper.auxs.indexOf(auxNode1), 1);
          } else {
            auxNode1 = new Weak(p1).addToGroup(wrapper.box);
          }

          new Link(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
          return new Term(wrapper.prin, wrapper.auxs);
        } else if (ast instanceof Tuple) {
          var pair = new Pair().addToGroup(group);
          var left = this.toGraph(ast.lhs, group);
          var right = this.toGraph(ast.rhs, group);
          new Link(pair.key, left.prin.key, "w", "s").addToGroup(group);
          new Link(pair.key, right.prin.key, "e", "s").addToGroup(group);
          return new Term(pair, Term.joinAuxs(left.auxs, right.auxs, group));
        } else if (ast instanceof Cell) {
          var term = this.toGraph(ast.term, group);
          var ref = new Ref(term.prin.name).addToGroup(group);
          new Link(ref.key, term.prin.key, "n", "s").addToGroup(group);
          return new Term(ref, term.auxs);
        } else if (ast instanceof Deprecation) {
          var term = this.toGraph(ast.term, group);
          var dep = new Dep().addToGroup(group);
          new Link(dep.key, term.prin.key, "n", "s").addToGroup(group);
          return new Term(dep, term.auxs);
        } else if (ast instanceof Dereference) {
          var term = this.toGraph(ast.term, group);
          var deref = new Deref().addToGroup(group);
          new Link(deref.key, term.prin.key, "n", "s").addToGroup(group);
          return new Term(deref, term.auxs);
        } else if (ast instanceof Change) {
          var param = ast.param;
          var delta = new Delta().addToGroup(group);
          var term = this.toGraph(ast.body, group);
          var v = new Var(param).addToGroup(group);
          new Link(delta.key, v.key, "w", "s").addToGroup(group);
          new Link(delta.key, term.prin.key, "e", "s").addToGroup(group);
          var auxs = Array.from(term.auxs);
          var p1Used = false;
          var auxNode1;

          for (var i = 0; i < term.auxs.length; i++) {
            var aux = auxs[i];

            if (aux.name == param) {
              p1Used = true;
              auxs.splice(i, 1);
              var con = new Contract(aux.name).addToGroup(group);
              new Link(aux.key, con.key, "n", "s").addToGroup(group);
              new Link(v.key, con.key, "n", "s").addToGroup(group);
              auxs.push(con);
              break;
            }
          }

          if (!p1Used) auxs.push(v);
          return new Term(delta, auxs);
        } else if (ast instanceof Assign) {
          var param = ast.param;
          var setn = new Set().addToGroup(group);
          var term = this.toGraph(ast.body, group);
          var v = new Var(param).addToGroup(group);
          new Link(setn.key, v.key, "w", "s").addToGroup(group);
          new Link(setn.key, term.prin.key, "e", "s").addToGroup(group);
          var auxs = Array.from(term.auxs);
          var p1Used = false;
          var auxNode1;

          for (var i = 0; i < term.auxs.length; i++) {
            var aux = auxs[i];

            if (aux.name == param) {
              p1Used = true;
              auxs.splice(i, 1);
              var con = new Contract(aux.name).addToGroup(group);
              new Link(aux.key, con.key, "n", "s").addToGroup(group);
              new Link(v.key, con.key, "n", "s").addToGroup(group);
              auxs.push(con);
              break;
            }
          }

          if (!p1Used) auxs.push(v);
          return new Term(setn, auxs);
        } else if (ast instanceof AssignParam) {
          var param = ast.param;
          var setn = new SetParam().addToGroup(group);
          var term = this.toGraph(ast.body, group);
          var v = new Var(param).addToGroup(group);
          new Link(setn.key, v.key, "w", "s").addToGroup(group);
          new Link(setn.key, term.prin.key, "e", "s").addToGroup(group);
          var auxs = Array.from(term.auxs);
          var p1Used = false;
          var auxNode1;

          for (var i = 0; i < term.auxs.length; i++) {
            var aux = auxs[i];

            if (aux.name == param) {
              p1Used = true;
              auxs.splice(i, 1);
              var con = new Contract(aux.name).addToGroup(group);
              new Link(aux.key, con.key, "n", "s").addToGroup(group);
              new Link(v.key, con.key, "n", "s").addToGroup(group);
              auxs.push(con);
              break;
            }
          }

          if (!p1Used) auxs.push(v);
          return new Term(setn, auxs);
        } else if (ast instanceof Propagation) {
          var prop = new Prop().addToGroup(group);
          return new Term(prop, [], []);
        } else if (ast instanceof ProvisionalConstant) {
          var term = this.toGraph(ast.term, group);
          var prov = new Prov(term.prin.name).addToGroup(group);
          new Link(prov.key, term.prin.key, "n", "s").addToGroup(group);
          return new Term(prov, term.auxs);
        } else if (ast instanceof GraphAbstraction) {
          var gabs = new GAbs().addToGroup(group);
          var box = this.toGraph(ast.term, group);
          new Link(gabs.key, box.prin.key, "n", "s").addToGroup(group);
          return new Term(gabs, box.auxs);
        } else if (ast instanceof Folding) {
          var foldOp = new Fold().addToGroup(group); // create lhs and rhs terms

          var left = this.toGraph(ast.t1, group);
          var right = this.toGraph(ast.t2, group); // link lhs and rhs terms

          new Link(foldOp.key, left.prin.key, "w", "s").addToGroup(group);
          new Link(foldOp.key, right.prin.key, "e", "s").addToGroup(group);
          return new Term(foldOp, Term.joinAuxs(left.auxs, right.auxs, group));
        }
      }
    }, {
      key: "deleteVarNode",
      value: function deleteVarNode(group) {
        var _arr = Array.from(group.nodes);

        for (var _i = 0; _i < _arr.length; _i++) {
          var node = _arr[_i];
          if (node instanceof Group) this.deleteVarNode(node);else if (node instanceof Var) node.deleteAndPreserveOutLink();
        }
      }
    }, {
      key: "startPropagation",
      value: function startPropagation() {
        this.evaluating = true;
        this.hasUpdate = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;
            var cell = this.graph.findNodeByKey(key);
            var evalToken = new MachineToken(this);
            evalToken.isMain = false;
            evalToken.setLink(cell.findLinksOutOf('e')[0]);
            this.evalTokens.push(evalToken);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: "shuffle",
      value: function shuffle(a) {
        var j, x, i;

        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
      }
    }, {
      key: "batchPass",
      value: function batchPass(tokens) {
        var arr_2 = Array.from(tokens); // random

        /*
        var arr = Array.from(new Array(tokens.length),(val,index)=>index+1);
        this.shuffle(arr);
        for (var i=0; i<arr.length; i++) {
        	var token = arr_2[arr[i]-1];
        	this.tokenPass(token, flag, dataStack, boxStack, modStack);
        }
        */
        // all progress 1 step

        for (var i = 0; i < arr_2.length; i++) {
          var token = arr_2[i];
          this.tokenPass(token);
        }
      } // machine step

    }, {
      key: "pass",
      value: function pass() {
        if (!this.isFinished()) {
          /*
          this.count++;
          if (this.count == 200) {
          	this.count = 0;
          	this.gc.collect();
          }
          */
          if (this.evaluating) {
            this.batchPass(this.evalTokens);

            if (this.evalTokens.length == 0) {
              this.evaluating = false;
              var machine = this;
              this.newValues.forEach(function (value, key, map) {
                var mod = machine.graph.findNodeByKey(key);
                var oldData = mod.update(value);
                if (oldData != value) machine.hasUpdate = true;
              });
              this.newValues.clear();
              return;
            }
          } else this.tokenPass(this.token);
        }

        return this.getData(this.token);
      }
    }, {
      key: "tokenPass",
      value: function tokenPass(token) {
        var node;

        if (!token.transited) {
          if (token.link != null) {
            var target = token.forward ? token.link.to : token.link.from;
            node = this.graph.findNodeByKey(target);
          } else node = this.graph.findNodeByKey("nd1");

          var nextLink;
          token.rewrite = false;
          nextLink = node.transition(token, token.link);

          if (nextLink != null) {
            token.setLink(nextLink);
            token.transited = true;

            if (token.isMain) {// prints progress
              // console.log(this.getData(token));
            }
          } else {
            token.transited = false;

            if (token.isMain) {
              token.setLink(null); //this.gc.collect();

              this.setPlay(false);
              this.setPlaying(false);
              this.setFinished(true);
            } else token.setLink(token.link);
          }
        } else {
          var target = token.forward ? token.link.from : token.link.to;
          node = this.graph.findNodeByKey(target);
          var nextLink = node.rewrite(token, token.link);

          if (!token.rewrite) {
            token.transited = false;
            this.tokenPass(token);
          } else {
            token.setLink(nextLink);
          }
        }
      }
    }, {
      key: "getData",
      value: function getData(token) {
        var dataStack = Array.from(token.dataStack).reverse();
        dataStack.push('□'); // the latest value is stored in the first element in the dataStack

        var data = dataStack[0]; // data consists of the last node and it's link

        if (data[0] === 'λ') {
          // abstraction
          var machine = this; // this means it doesn't return a simple value

          return function (source) {
            // create AST of the future abstract arguments
            var lexer = new Lexer(source + '\0');
            var parser = new Parser(lexer);
            var ast = parser.parse(); // init

            machine.token.reset();
            machine.count = 0;
            machine.evalTokens = [];
            machine.cells = [];
            machine.readyEvalTokens = 0;
            machine.evaluating = false;
            machine.newValues.clear();
            machine.hasUpdate = false; // get the start node

            var start = machine.graph.findNodeByKey("nd1"); // the start node will point to the node that'll be the lhs of the application

            var left = machine.graph.findNodeByKey(start.links[0].to);
            var leftAuxs = left.group.auxs; // need to remove link out of start nodes

            start.findLinksConnected().forEach(function (link) {
              link.delete();
            }); // follow the same steps from Application in toGraph

            var der = new Der(left.name).addToGroup(machine.graph.child);
            new Link(der.key, left.key, "n", "s").addToGroup(machine.graph.child); // create the rhs from the source AST

            var right = machine.toGraph(ast, machine.graph.child);
            var app = new App().addToGroup(machine.graph.child);
            new Link(app.key, der.key, "w", "s").addToGroup(machine.graph.child);
            new Link(app.key, right.prin.key, "e", "s").addToGroup(machine.graph.child);
            var term = new Term(app, Term.joinAuxs(leftAuxs, right.auxs, machine.graph.child));
            new Link(start.key, term.prin.key, "n", "s").addToGroup(machine.graph.child);
            machine.deleteVarNode(machine.graph.child);
          };
        } else {
          if (data[0] === '•') {
            // this represents the unit so it doesn't return anything
            return undefined;
          } else {
            return data[0];
          }
        }
      }
    }]);

    return GoIMachine;
  }();

  return new GoIMachine();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/graph.js":
/*!******************************************!*\
  !*** ../itf-impl/Visualiser/js/graph.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../itf-impl/Visualiser/js/group.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group) {
  // general graph
  var Graph =
  /*#__PURE__*/
  function () {
    function Graph(machine) {
      _classCallCheck(this, Graph);

      this.machine = machine;
      this.clear();
    }

    _createClass(Graph, [{
      key: "clear",
      value: function clear() {
        this.key = 0;
        this.linkKey = 0;
        this.allNodes = new Map(); // for efficiency searching

        this.allLinks = []; // for printing ONLY

        this.child = new Group();
      } // give a key to a node and add it to allNodes

    }, {
      key: "addNode",
      value: function addNode(node) {
        node.key = 'nd' + this.key;
        this.allNodes.set(node.key, node);
        this.key++;
      } // also removes connected links

    }, {
      key: "removeNode",
      value: function removeNode(node) {
        var _arr = Array.from(node.findLinksConnected());

        for (var _i = 0; _i < _arr.length; _i++) {
          var link = _arr[_i];
          link.delete();
        }

        return this.allNodes.delete(node.key);
      }
    }, {
      key: "findNodeByKey",
      value: function findNodeByKey(key) {
        return this.allNodes.get(key);
      }
    }, {
      key: "addLink",
      value: function addLink(link) {
        this.allLinks.push(link);
      }
    }, {
      key: "removeLink",
      value: function removeLink(link) {
        this.allLinks.splice(this.allLinks.indexOf(link), 1);
      }
    }]);

    return Graph;
  }();

  return Graph;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/group.js":
/*!******************************************!*\
  !*** ../itf-impl/Visualiser/js/group.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node) {
  // general group in a graph (subgraph)
  var Group =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Group, _Node);

    function Group() {
      var _this;

      _classCallCheck(this, Group);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, null, null, null)); // shape, text, name

      _this.nodes = [];
      _this.links = []; // for copying

      return _this;
    }

    _createClass(Group, [{
      key: "addNode",
      value: function addNode(node) {
        this.nodes.push(node);
      }
    }, {
      key: "removeNode",
      value: function removeNode(node) {
        return this.nodes.splice(this.nodes.indexOf(node), 1);
      }
    }, {
      key: "addLink",
      value: function addLink(link) {
        this.links.push(link);
      }
    }, {
      key: "removeLink",
      value: function removeLink(link) {
        var i = this.links.indexOf(link);
        if (i != -1) this.links.splice(i, 1);
      }
    }, {
      key: "delete",
      value: function _delete() {
        var _arr = Array.from(this.nodes);

        for (var _i = 0; _i < _arr.length; _i++) {
          var node = _arr[_i];
          node.delete();
        }

        _get(_getPrototypeOf(Group.prototype), "delete", this).call(this);
      }
    }]);

    return Group;
  }(Node);

  return Group;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/helper.js":
/*!*******************************************!*\
  !*** ../itf-impl/Visualiser/js/helper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  // needed by nodes/mod, nodes/prov, nodes/dep
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  return {
    isNumber: isNumber,
    // needed by goi-machine, link and node
    graph: null
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/link.js":
/*!*****************************************!*\
  !*** ../itf-impl/Visualiser/js/link.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! helper */ "../itf-impl/Visualiser/js/helper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Helper) {
  var Link =
  /*#__PURE__*/
  function () {
    function Link(from, to, fromPort, toPort, reverse) {
      _classCallCheck(this, Link);

      this.from = from;
      this.to = to;
      this.fromPort = fromPort;
      this.toPort = toPort;
      this.reverse = reverse;
      this.colour = null;
      this.penWidth = null;
      this.addToGraph(Helper.graph); // cheating

      this.addToNode(); // cheating
    }

    _createClass(Link, [{
      key: "addToNode",
      value: function addToNode() {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.push(this);
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.push(this);
      }
    }, {
      key: "addToGraph",
      value: function addToGraph(graph) {
        if (graph != null) graph.addLink(this);
        this.graph = graph;
        return this; // to provide chain operation
      }
    }, {
      key: "addToGroup",
      value: function addToGroup(group) {
        group.addLink(this);
        this.group = group;
        return this; // to provide chain operation
      }
    }, {
      key: "changeToGroup",
      value: function changeToGroup(group) {
        this.group.removeLink(this);
        this.addToGroup(group);
        return this;
      }
    }, {
      key: "changeFrom",
      value: function changeFrom(key, port) {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.splice(fromNode.links.indexOf(this), 1);
        this.from = key;
        this.fromPort = port;
        fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.push(this);
      }
    }, {
      key: "changeTo",
      value: function changeTo(key, port) {
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.splice(toNode.links.indexOf(this), 1);
        this.to = key;
        this.toPort = port;
        toNode = this.graph.findNodeByKey(this.to);
        toNode.links.push(this);
      }
    }, {
      key: "focus",
      value: function focus(colour) {
        this.colour = colour;
        this.penWidth = "20";
      }
    }, {
      key: "clearFocus",
      value: function clearFocus() {
        this.colour = null;
        this.penWidth = null;
      }
    }, {
      key: "delete",
      value: function _delete() {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.splice(fromNode.links.indexOf(this), 1);
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.splice(toNode.links.indexOf(this), 1);
        this.group.removeLink(this);
        this.graph.removeLink(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.from + "->" + this.to;
      }
    }]);

    return Link;
  }();

  return Link;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/node.js":
/*!*****************************************!*\
  !*** ../itf-impl/Visualiser/js/node.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var showKey = false;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! helper */ "../itf-impl/Visualiser/js/helper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Helper) {
  var Node =
  /*#__PURE__*/
  function () {
    function Node(shape, text, colour, name) {
      _classCallCheck(this, Node);

      this.key = null;
      this.shape = shape;
      this.text = text;
      this.colour = colour;
      this.name = name; // identifier name or constant name if any

      this.graph = null;
      this.group = null;
      this.width = null;
      this.height = null;
      this.links = [];
      this.addToGraph(Helper.graph); // cheating!
    }

    _createClass(Node, [{
      key: "addToGraph",
      value: function addToGraph(graph) {
        if (graph != null) graph.addNode(this);
        this.graph = graph;
        return this; // to provide chain operation
      }
    }, {
      key: "addToGroup",
      value: function addToGroup(group) {
        group.addNode(this);
        this.group = group;
        return this; // to provide chain operation
      }
    }, {
      key: "changeToGroup",
      value: function changeToGroup(group) {
        this.group.removeNode(this);
        this.addToGroup(group);
        return this;
      }
    }, {
      key: "findLinksConnected",
      value: function findLinksConnected() {
        return this.links;
      }
    }, {
      key: "findLinksInto",
      value: function findLinksInto(toPort) {
        var links = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var link = _step.value;
            if (link.to == this.key && (toPort == null ? true : link.toPort == toPort)) links.push(link);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return links;
      }
    }, {
      key: "findLinksOutOf",
      value: function findLinksOutOf(fromPort) {
        var links = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var link = _step2.value;
            if (link.from == this.key && (fromPort == null ? true : link.fromPort == fromPort)) links.push(link);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return links;
      }
    }, {
      key: "copy",
      value: function copy(graph) {
        var newNode = new Node(this.shape, this.text, this.name).addToGraph(graph);
        newNode.width = this.width;
        newNode.height = this.height;
      } // also delete any connected links

    }, {
      key: "delete",
      value: function _delete() {
        this.group.removeNode(this);
        this.graph.removeNode(this);
      } // machine instructions

    }, {
      key: "transition",
      value: function transition(token, link) {
        return link;
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        token.rewrite = false;
        return nextLink;
      }
    }]);

    return Node;
  }();

  return Node;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/abs.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/abs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/app */ "../itf-impl/Visualiser/js/nodes/app.js"), __webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js"), __webpack_require__(/*! nodes/pattuple */ "../itf-impl/Visualiser/js/nodes/pattuple.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, App, Expo, PatTuple) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Abs =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Abs, _Node);

    function Abs() {
      _classCallCheck(this, Abs);

      return _possibleConstructorReturn(this, _getPrototypeOf(Abs).call(this, null, "λ", "yellow"));
    }

    _createClass(Abs, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key && link.toPort == "s") {
          var data = token.dataStack[token.dataStack.length - 1];

          if (data == CompData.PROMPT) {
            token.dataStack.pop();
            token.dataStack.push([CompData.LAMBDA, CompData.EMPTY]);
            token.forward = false;
            return link;
          } else if (data == CompData.R) {
            var nextLink = this.findLinksOutOf(null)[0];
            token.dataStack.pop();
            token.rewriteFlag = RewriteFlag.F_LAMBDA;
            return nextLink;
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_LAMBDA && nextLink.from == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

          if (prev instanceof App) {
            // M rule
            var appLink = prev.findLinksInto(null)[0];
            var appOtherLink = prev.findLinksOutOf("e")[0];
            var otherNextLink = this.findLinksInto("w")[0];
            nextLink.changeFrom(appLink.from, appLink.fromPort);
            nextLink.changeToGroup(appLink.group);
            otherNextLink.changeTo(appOtherLink.to, appOtherLink.toPort);
            otherNextLink.reverse = false;
            var otherNode = this.graph.findNodeByKey(otherNextLink.from);
            if (otherNode instanceof Expo || otherNode instanceof PatTuple) otherNextLink.fromPort = "n";
            otherNextLink.changeToGroup(appOtherLink.group);
            this.delete();
            prev.delete();
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Abs();
      }
    }]);

    return Abs;
  }(Node);

  return Abs;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/app.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token) {
  var CompData = Token.CompData();

  var App =
  /*#__PURE__*/
  function (_Node) {
    _inherits(App, _Node);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, null, "@", "yellow"));
    }

    _createClass(App, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "e") {
          var nextLink = this.findLinksOutOf("w")[0];
          token.dataStack.pop();
          token.dataStack.push(CompData.R);
          token.forward = true;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new App();
      }
    }]);

    return App;
  }(Node);

  return App;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/binop.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/binop.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! op */ "../itf-impl/Visualiser/js/op.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Link, BoxWrapper, Const, Op, Weak) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();
  var BinOpType = Op.BinOpType;

  var BinOp =
  /*#__PURE__*/
  function (_Node) {
    _inherits(BinOp, _Node);

    function BinOp(text) {
      var _this;

      _classCallCheck(this, BinOp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BinOp).call(this, null, text, "mediumpurple1"));
      _this.subType = null;
      return _this;
    }

    _createClass(BinOp, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "e") {
          var nextLink = this.findLinksOutOf("w")[0];
          token.dataStack.push(CompData.PROMPT);
          token.forward = true;
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "w") {
          if (token.dataStack[token.dataStack.length - 3] == CompData.PROMPT) {
            var l = token.dataStack.pop();
            var r = token.dataStack.pop();
            token.dataStack.pop();
            var result = this.binOpApply(this.subType, l[0], r[0]);
            var type = l[1] == CompData.EMPTY && r[1] == CompData.EMPTY ? CompData.EMPTY : CompData.DEP;
            token.dataStack.push([result, type]);
            token.rewriteFlag = RewriteFlag.F_OP;
            return this.findLinksInto(null)[0];
            ;
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_OP && nextLink.to == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
          var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);
          var data = token.dataStack[token.dataStack.length - 1];

          if (data[1] == CompData.EMPTY) {
            //left instanceof Promo && right instanceof Promo) {
            var wrapper = BoxWrapper.create().addToGroup(this.group);
            var newConst = new Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
            new Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
            nextLink.changeTo(wrapper.prin.key, "s"); //left.group.delete();
            //right.group.delete();

            var weak = new Weak().addToGroup(this.group);
            new Link(weak.key, left.key, "n", "s").addToGroup(this.group);
            var weak = new Weak().addToGroup(this.group);
            new Link(weak.key, right.key, "n", "s").addToGroup(this.group);
            this.delete();
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "binOpApply",
      value: function binOpApply(type, v1, v2) {
        switch (type) {
          case BinOpType.And:
            return v1 && v2;

          case BinOpType.Or:
            return v1 || v2;

          case BinOpType.Plus:
            return parseFloat(v1) + parseFloat(v2);

          case BinOpType.Sub:
            return parseFloat(v1) - parseFloat(v2);

          case BinOpType.Mult:
            return parseFloat(v1) * parseFloat(v2);

          case BinOpType.Div:
            return parseFloat(v1) / parseFloat(v2);

          case BinOpType.Lte:
            return parseFloat(v1) <= parseFloat(v2);
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new BinOp(this.text);
        newNode.subType = this.subType;
        return newNode;
      }
    }], [{
      key: "createPlus",
      value: function createPlus() {
        var node = new BinOp("+");
        node.subType = BinOpType.Plus;
        return node;
      }
    }, {
      key: "createMult",
      value: function createMult() {
        var node = new BinOp("*");
        node.subType = BinOpType.Mult;
        return node;
      }
    }]);

    return BinOp;
  }(Node);

  return BinOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/const.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/const.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token) {
  var CompData = Token.CompData();

  var Const =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Const, _Node);

    function Const(name) {
      _classCallCheck(this, Const);

      return _possibleConstructorReturn(this, _getPrototypeOf(Const).call(this, null, name, "mediumpurple1", name));
    }

    _createClass(Const, [{
      key: "transition",
      value: function transition(token, link) {
        if (token.dataStack[token.dataStack.length - 1] == CompData.PROMPT) {
          token.dataStack.pop();
          token.dataStack.push([this.name, CompData.EMPTY]);
          token.forward = false;
          return link;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Const(this.name);
      }
    }]);

    return Const;
  }(Node);

  return Const;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/contract.js":
/*!***************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/contract.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Expo) {
  var RewriteFlag = Token.RewriteFlag();

  var Contract =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Contract, _Expo);

    function Contract(name) {
      _classCallCheck(this, Contract);

      return _possibleConstructorReturn(this, _getPrototypeOf(Contract).call(this, null, "C", name));
    }

    _createClass(Contract, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.boxStack.push(link);
          token.rewriteFlag = RewriteFlag.F_C;
          return nextLink;
        } else if (link.from == this.key && token.boxStack.length > 0) {
          var nextLink = token.boxStack.pop();
          return nextLink;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_C && nextLink.from == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;

          if (this.findLinksInto(null).length == 1) {
            token.boxStack.pop();
            /*
            for (let _token of nextLink.tokens)
            	_token.boxStack.pop();
            */

            var inLink = this.findLinksInto(null)[0];
            /*
            for (let _token of inLink.tokens)
            	_token.setLink(nextLink);
            */

            nextLink.changeFrom(inLink.from, inLink.fromPort);
            this.delete();
          } else {
            var i = token.boxStack[token.boxStack.length - 1];
            var prev = this.graph.findNodeByKey(i.from);

            if (prev instanceof Contract) {
              token.boxStack.pop();
              /*
              for (let _token of Array.from(nextLink.tokens)) {
              	if (_token.boxStack[token.boxStack.length - 1] == i)
              		_token.boxStack.pop();
              }
              for (let _token of Array.from(i.tokens)) {
              	_token.setLink(nextLink);
              	_token.rewriteFlag = RewriteFlag.F_C;
              }
              */

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = prev.findLinksInto(null)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var link = _step.value;
                  link.changeTo(this.key, "s");
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              prev.delete();
              token.rewriteFlag = RewriteFlag.F_C;
            }
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var con = new Contract(this.name);
        con.text = this.text;
        return con;
      }
    }]);

    return Contract;
  }(Expo);

  return Contract;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/delta.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/delta.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, BoxWrapper, Const, Link, Weak) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Delta =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Delta, _Node);

    function Delta() {
      _classCallCheck(this, Delta);

      return _possibleConstructorReturn(this, _getPrototypeOf(Delta).call(this, null, "Δ", "indianred1"));
    }

    _createClass(Delta, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          if (link.fromPort == "e") {
            var nextLink = this.findLinksOutOf("w")[0];
            token.dataStack.pop();
            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
            return nextLink;
          } else if (link.fromPort == "w") {
            if (token.dataStack[token.dataStack.length - 2] == CompData.PROMPT) {
              var data = token.dataStack.pop();
              token.dataStack.pop();
              token.dataStack.push([CompData.UNIT, CompData.EMPTY]);
              token.rewriteFlag = RewriteFlag.F_DELTA + data[1];
              return this.findLinksInto(null)[0];
            }
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag.substring(0, 3) == RewriteFlag.F_DELTA && nextLink.to == this.key) {
          var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.dataStack[token.dataStack.length - 1];
          var outLink = this.findLinksOutOf("w")[0];
          var weak1 = new Weak().addToGroup(this.group);
          outLink.changeFrom(weak1.key, "n");
          var mod = this.graph.findNodeByKey(key);
          var weak2 = new Weak().addToGroup(this.group);
          mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
          this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
          var wrapper = BoxWrapper.create().addToGroup(this.group);
          var con = new Const(data[0]).addToGroup(wrapper.box);
          new Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
          this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
          this.delete();
          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Delta();
      }
    }]);

    return Delta;
  }(Node);

  return Delta;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/dep.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/dep.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js"), __webpack_require__(/*! helper */ "../itf-impl/Visualiser/js/helper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, BoxWrapper, Const, Link, Weak, Helper) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Dep =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Dep, _Node);

    function Dep() {
      _classCallCheck(this, Dep);

      return _possibleConstructorReturn(this, _getPrototypeOf(Dep).call(this, null, 'p', "mediumpurple1"));
    }

    _createClass(Dep, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          if (token.dataStack[token.dataStack.length - 2] == CompData.PROMPT) {
            var data = token.dataStack.pop();
            token.dataStack.pop();
            token.dataStack.push([data[0], CompData.EMPTY]);
            token.rewriteFlag = RewriteFlag.F_DEP;
            return this.findLinksInto(null)[0];
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (nextLink.to == this.key && token.rewriteFlag == RewriteFlag.F_DEP) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.dataStack[token.dataStack.length - 1];

          if (Helper.isNumber(data[0]) || typeof data[0] === "boolean") {
            var outLink = this.findLinksOutOf(null)[0];
            var weak = new Weak(outLink.text).addToGroup(this.group);
            outLink.changeFrom(weak.key, "n");
            var wrapper = BoxWrapper.create().addToGroup(this.group);
            var newConst = new Const(data[0]).addToGroup(wrapper.box);
            new Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
            nextLink.changeTo(wrapper.prin.key, "s");
            this.delete();
            token.rewrite = true;
          }

          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Dep();
      }
    }]);

    return Dep;
  }(Node);

  return Dep;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/der.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/der.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Expo) {
  var Der =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Der, _Expo);

    function Der(name) {
      _classCallCheck(this, Der);

      return _possibleConstructorReturn(this, _getPrototypeOf(Der).call(this, null, "D", name));
    }

    _createClass(Der, [{
      key: "copy",
      value: function copy() {
        var der = new Der(this.name);
        return der;
      }
    }]);

    return Der;
  }(Expo);

  return Der;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/deref.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/deref.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node) {
  var Deref =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Deref, _Node);

    function Deref() {
      _classCallCheck(this, Deref);

      return _possibleConstructorReturn(this, _getPrototypeOf(Deref).call(this, null, "d", "mediumpurple1"));
    }

    _createClass(Deref, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Deref();
      }
    }]);

    return Deref;
  }(Node);

  return Deref;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/expo.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/expo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node) {
  var Expo =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Expo, _Node);

    function Expo(shape, text, name) {
      var _this;

      _classCallCheck(this, Expo);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Expo).call(this, shape, text, "cyan", name));
      _this.width = ".3";
      _this.height = ".3";
      return _this;
    }

    _createClass(Expo, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          return nextLink;
        } else if (link.from == this.key) {
          var nextLink = this.findLinksInto(null)[0];
          return nextLink;
        }
      }
    }, {
      key: "deleteAndPreserveInLink",
      value: function deleteAndPreserveInLink() {
        var inLink = this.findLinksInto(null)[0];
        var outLink = this.findLinksOutOf(null)[0];

        if (outLink != null && inLink != null) {
          inLink.changeTo(outLink.to, outLink.toPort);
        }

        _get(_getPrototypeOf(Expo.prototype), "delete", this).call(this);
      }
    }, {
      key: "deleteAndPreserveOutLink",
      value: function deleteAndPreserveOutLink() {
        var inLink = this.findLinksInto(null)[0];
        var outLink = this.findLinksOutOf(null)[0];

        if (inLink != null && outLink != null) {
          outLink.changeFrom(inLink.from, inLink.fromPort);
        }

        _get(_getPrototypeOf(Expo.prototype), "delete", this).call(this);
      }
    }]);

    return Expo;
  }(Node);

  return Expo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/fold.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/fold.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js"), __webpack_require__(/*! nodes/der */ "../itf-impl/Visualiser/js/nodes/der.js"), __webpack_require__(/*! nodes/vector */ "../itf-impl/Visualiser/js/nodes/vector.js"), __webpack_require__(/*! nodes/app */ "../itf-impl/Visualiser/js/nodes/app.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! term */ "../itf-impl/Visualiser/js/term.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Link, Token, Weak, Der, Vector, App, Contract, Term, BoxWrapper) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Fold =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Fold, _Node);

    function Fold() {
      _classCallCheck(this, Fold);

      return _possibleConstructorReturn(this, _getPrototypeOf(Fold).call(this, null, "F", "indianred1", null));
    }

    _createClass(Fold, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          token.dataStack.push(CompData.PROMPT);
          return this.findLinksOutOf("e")[0];
        } else if (link.from == this.key && link.fromPort == "e") {
          token.dataStack.push(CompData.PROMPT);
          token.forward = true;
          return this.findLinksOutOf("w")[0];
        } else if (link.from == this.key && link.fromPort == "w") {
          if (token.dataStack[token.dataStack.length - 1][0] == CompData.LAMBDA) {
            token.dataStack.pop();
            var vec = JSON.parse(token.dataStack.pop()[0]);
            token.rewriteFlag = RewriteFlag.F_FOLD + '(' + vec.length + ')';
            return this.findLinksInto(null)[0];
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag.substring(0, 3) == RewriteFlag.F_FOLD && nextLink.to == this.key) {
          var n = parseInt(token.rewriteFlag.substring(4, token.rewriteFlag.length - 1));
          token.rewriteFlag = RewriteFlag.EMPTY;
          var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
          var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

          if (n == 0) {
            var oldGroup = right.group;
            right.group.moveOut();
            oldGroup.deleteAndPreserveLink();
            var weak = new Weak(left.name).addToGroup(this.group);
            this.findLinksOutOf("w")[0].changeFrom(weak.key, 'n');
            var into = this.findLinksInto(null)[0];
            var east = this.findLinksOutOf("e")[0];
            east.changeFrom(into.from, into.fromPort);
            this.delete();
            token.rewrite = true;
            token.forward = true;
            return east;
          } else {
            var term = this.unfolding(n, n, right, this.group);
            new Link(term.auxs[0].key, left.key, 'n', 's').addToGroup(this.group);
            var into = this.findLinksInto(null)[0];
            into.changeTo(term.prin.key, "s");
            this.delete();
            token.rewrite = true;
            token.forward = true;
            return into;
          }
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "unfolding",
      value: function unfolding(size, n, right, group) {
        // create the main app
        var app = new App().addToGroup(group); // create the lhs and rhs of the app
        // app lhs

        var lhs = new App().addToGroup(group);
        var der = new Der().addToGroup(group);
        new Link(der.key, lhs.key, "n", "s").addToGroup(group); // create the lhs and rhs of the lhs 
        // lhs lhs: create a der so we can link the result of one unfold

        var leftDer = new Der().addToGroup(group); // lhs rhs: create the basis for the fold

        var vecWrapper = BoxWrapper.create().addToGroup(group);
        var vec = Vector.createBasis(size, size - n).addToGroup(vecWrapper.box);
        new Link(vecWrapper.prin.key, vec.key, "n", "s").addToGroup(vecWrapper.group);
        var vecDer = new Der().addToGroup(group);
        new Link(vecDer.key, vecWrapper.prin.key, "n", "s").addToGroup(group); // add links for the lhs of the app

        new Link(lhs.key, leftDer.key, "w", "s").addToGroup(group);
        new Link(lhs.key, vecDer.key, "e", "s").addToGroup(group); // app rhs

        var rhs;
        var auxs = new Array(); // set up the app, depending on length of the vector we're folding over

        if (n == 1) {
          if (right instanceof Contract) {
            var newRight = this.graph.findNodeByKey(right.findLinksOutOf(null)[0].to);
            newRight = newRight.copy().addToGroup(group);
            rhs = newRight;
          } else {
            right.group.changeToGroup(group); // change the rhs of the app

            rhs = right;
          } // add new auxiliary


          auxs.push(leftDer);
        } else {
          // create a new rhs, by recursively calling this function
          var term = this.unfolding(size, n - 1, right, group);
          rhs = term.prin; // create and link contract

          var con = new Contract(term.auxs[0].name).addToGroup(group);
          new Link(leftDer.key, con.key, "n", "s").addToGroup(group);
          new Link(term.auxs[0].key, con.key, "n", "s").addToGroup(group); // add new auxiliary

          auxs = auxs.concat(con);
        } // add links to lhs and rhs from app


        new Link(app.key, der.key, "w", "s").addToGroup(group);
        new Link(app.key, rhs.key, "e", "s").addToGroup(group); // return term

        return new Term(app, auxs).addToGroup(group);
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Fold();
      }
    }]);

    return Fold;
  }(Node);

  return Fold;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/gabs.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/gabs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js"), __webpack_require__(/*! nodes/pax */ "../itf-impl/Visualiser/js/nodes/pax.js"), __webpack_require__(/*! nodes/prov */ "../itf-impl/Visualiser/js/nodes/prov.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/vector-match */ "../itf-impl/Visualiser/js/nodes/vector-match.js"), __webpack_require__(/*! nodes/vector */ "../itf-impl/Visualiser/js/nodes/vector.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Link, Token, Weak, Pax, Prov, Contract, BoxWrapper, VectorMatch, Vector) {
  var RewriteFlag = Token.RewriteFlag();

  var GAbs =
  /*#__PURE__*/
  function (_Node) {
    _inherits(GAbs, _Node);

    function GAbs() {
      _classCallCheck(this, GAbs);

      return _possibleConstructorReturn(this, _getPrototypeOf(GAbs).call(this, null, "abs", "indianred1"));
    }

    _createClass(GAbs, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.rewriteFlag = RewriteFlag.F_GABS;
          return nextLink;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_GABS && nextLink.from == this.key) {
          // find the link connected to the current node
          var prevLink = this.findLinksInto(null)[0]; // link the graph inside graph abstraction to a weak node

          var nextGraphLink = this.findLinksOutOf(null)[0];
          var absGraph = this.graph.findNodeByKey(nextGraphLink.to);
          var group = this.group; // create a weak contraction node if it doesn't not already exist

          if (!(absGraph instanceof Contract)) {
            var weak = new Weak(absGraph.name).addToGroup(this.group);
            new Link(weak.key, absGraph.key, "n", "s").addToGroup(this.group);
          } // create the vector of provisional constants


          var provs = this.searchForProvs(this, group, new Map(), new Array()); // tensorify the provisional constants and return the contract to the vector

          var con = this.tensorify(provs, group); // point the previous link to the contract		

          prevLink.changeTo(con.key, 's'); // delete abs node

          this.delete(); // if it's a contract and there is only one link into it

          if (absGraph instanceof Contract && absGraph.findLinksInto(null).length == 1) {
            // one of the links is the current one
            var newAbsGraph = this.graph.findNodeByKey(absGraph.findLinksOutOf(null)[0].to);
            var link = absGraph.findLinksInto(null)[0];
            link.changeTo(newAbsGraph.key, link.toPort);
            absGraph.delete();
          }

          token.rewrite = true;
          token.rewriteFlag = RewriteFlag.EMPTY; // make sure to go back to the previous promo

          return prevLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "tensorify",
      value: function tensorify(provs, group) {
        var l = 0;
        var values = new Array();
        var vecMatchs = [];

        var _arr = Array.from(provs);

        for (var _i = 0; _i < _arr.length; _i++) {
          var prov = _arr[_i];
          provs.splice(provs.indexOf(prov), 1); // create a vector match and link it as a parameter to the new abstraction

          var vecMatch = new VectorMatch().addToGroup(group);
          vecMatch.text = "P" + l;
          vecMatchs.push(vecMatch);
          var inLink = prov.findLinksInto(null)[0];
          new Link(inLink.from, vecMatch.key, inLink.fromPort, "s");
          values.push(prov.name); // create a weak contraction and make it point to prov (dettached)

          var weak = new Weak(prov.name).addToGroup(group);

          if (prov instanceof Contract) {
            // find the content
            var provContent = this.searchForProvContent(prov);
            weak.text = "Ɔ0";
            provContent.findLinksInto(null)[0].changeFrom(weak.key, "n");
          } else {
            weak.text = "Ɔ0";
            prov.findLinksInto(null)[0].changeFrom(weak.key, "n");
          }

          l++;
        }

        var vecWrapper = BoxWrapper.create().addToGroup(group);
        var vec = Vector.create(values).addToGroup(vecWrapper.box);
        var con = new Contract(vec.text).addToGroup(vecWrapper.box);
        new Link(con.key, vec.key, "n", "s").addToGroup(vecWrapper.box);
        new Link(vecWrapper.prin.key, con.key, "n", "s").addToGroup(vecWrapper.group);

        for (var i = 0; i < l; i++) {
          new Link(vecMatchs[i].key, vecWrapper.prin.key, "n", "s").addToGroup(group);
          vecMatchs[i].totalLength = l;
        }

        return con;
      }
    }, {
      key: "searchForProvContent",
      value: function searchForProvContent(node) {
        var nextNode = node.graph.findNodeByKey(node.findLinksOutOf(null)[0].to);

        if (node instanceof Prov) {
          node.findLinksInto(null)[0].changeTo(nextNode.key);
          node.delete();
          return nextNode;
        } else if (node instanceof Contract) {
          node.findLinksInto(null)[0].changeTo(nextNode.key);
          node.delete();
          return this.searchForProvContent(nextNode);
        }

        {
          return this.searchForProvContent(nextNode);
        }
      }
    }, {
      key: "searchForProvs",
      value: function searchForProvs(node, group, map, visitedNodes) {
        var _this = this;

        if (node instanceof Prov) {
          // return the node if it's what we're looking for
          return [node];
        } else if (visitedNodes.indexOf(node.key) != -1) {
          return [];
        } else {
          visitedNodes.push(node.key); // the current node may have multiple nodes

          var links = node.findLinksOutOf(null);

          if (links.length == 0) {
            // if there are no links, return an empty array
            return [];
          } else if (node instanceof Contract) {
            // check if it's a contract first
            var nextProvs = this.searchForProvs(node.graph.findNodeByKey(links[0].to), group, map, visitedNodes);

            if (nextProvs.length > 0) {
              return nextProvs.map(function (nextProv) {
                if (nextProv instanceof Contract) {
                  return nextProv;
                } else {
                  if (!map.get(nextProv.key)) {
                    var newCon = new Contract(nextProv.name).addToGroup(group);
                    nextProv.findLinksInto(null)[0].changeTo(newCon.key);
                    new Link(newCon.key, nextProv.key, "n", "s").addToGroup(group);
                    map.set(nextProv.key, newCon.key);
                    return newCon;
                  } else {
                    return _this.graph.findNodeByKey(map.get(nextProv.key));
                  }
                }
              });
            } else {
              return [];
            }
          } else if (links.length >= 2) {
            // if there are multiple links, return all
            var nodes = [];

            for (var i = 0; i < links.length; i++) {
              var link = links[i]; // this is for lambda abstractions that point to themselves

              if (link.to != link.from) {
                var nextProvs = this.searchForProvs(node.graph.findNodeByKey(link.to), group, map, visitedNodes);
                nextProvs.forEach(function (nextProv) {
                  if (!nodes.some(function (node) {
                    return node.key == nextProv.key;
                  })) {
                    nodes.push(nextProv);
                  }
                });
              }
            }

            return nodes;
          } else {
            return this.searchForProvs(node.graph.findNodeByKey(links[0].to), group, map, visitedNodes);
          }
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new GAbs();
      }
    }]);

    return GAbs;
  }(Node);

  return GAbs;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/if.js":
/*!*********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/if.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Link, Weak) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var If =
  /*#__PURE__*/
  function (_Node) {
    _inherits(If, _Node);

    function If() {
      _classCallCheck(this, If);

      return _possibleConstructorReturn(this, _getPrototypeOf(If).call(this, null, "if", "mediumpurple1"));
    }

    _createClass(If, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("w")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "w") {
          //var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
          var data = token.dataStack[token.dataStack.length - 1];

          if (data[1] == CompData.EMPTY) {
            //left instanceof Promo) {
            if (data[0] == true) {
              var nextLink = this.findLinksOutOf("n")[0];
              token.dataStack.pop();
              token.rewriteFlag = RewriteFlag.F_IF;
              token.forward = true;
              return nextLink;
            } else if (data[0] == false) {
              var nextLink = this.findLinksOutOf("e")[0];
              token.dataStack.pop();
              token.rewriteFlag = RewriteFlag.F_IF;
              token.forward = true;
              return nextLink;
            }
          } else {
            var nextLink = this.findLinksOutOf("n")[0];
            var data = token.dataStack.pop();
            token.dataStack.push(data[0]);
            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
            return nextLink;
          }
        } else if (link.from == this.key) {
          if (link.fromPort == "n") {
            var nextLink = this.findLinksOutOf("e")[0];
            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
            return nextLink;
          } else if (link.fromPort == "e") {
            var nextLink = this.findLinksInto("s")[0];
            var y = token.dataStack.pop();
            var x = token.dataStack.pop();
            var cond = token.dataStack.pop();
            var result;
            if (cond) result = x;else result = y;
            token.dataStack.pop();
            var type = result[1] == CompData.DEP || result[1] == CompData.EMPTY ? CompData.DEP : result[1];
            token.dataStack.push([result[0], type]);
            token.forward = false;
            return nextLink;
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_IF && nextLink.from == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to); //if (left instanceof Promo) {

          var downLink = this.findLinksInto(null)[0];
          var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
          nextLink.changeFrom(downLink.from, downLink.fromPort);
          var weak = new Weak(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
          otherLink.changeFrom(weak.key, "n");
          var weak = new Weak().addToGroup(this.group);
          new Link(weak.key, left.key, "n", "s").addToGroup(this.group);
          this.delete(); //left.group.delete();
          //}

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new If();
      }
    }]);

    return If;
  }(Node);

  return If;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/mod.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/mod.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! helper */ "../itf-impl/Visualiser/js/helper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Helper) {
  var Mod =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Mod, _Node);

    function Mod() {
      var _this;

      _classCallCheck(this, Mod);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Mod).call(this, null, "M", "indianred1"));

      _this.graph.machine.cells.push(_this.key);

      return _this;
    }

    _createClass(Mod, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          return this.findLinksOutOf("w")[0];
        } else if (link.from == this.key && link.fromPort == "w") {
          var data = token.dataStack.pop();
          token.dataStack.push([data[0], this.key]);
          return this.findLinksInto(null)[0];
        } else if (link.from == this.key && link.fromPort == "e") {
          token.machine.newValues.set(this.key, token.dataStack[token.dataStack.length - 1][0]);
          token.delete();
          return null;
        }
      }
    }, {
      key: "update",
      value: function update(data) {
        var leftLink = this.findLinksOutOf("w")[0];

        if (Helper.isNumber(data) || typeof data === "boolean") {
          var value = this.graph.findNodeByKey(leftLink.to);
          var oldData = value.name;
          value.text = data;
          value.name = data;
          return oldData;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var mod = new Mod();
        return mod;
      }
    }]);

    return Mod;
  }(Node);

  return Mod;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/pair.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/pair.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! nodes/pattuple */ "../itf-impl/Visualiser/js/nodes/pattuple.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Link, Contract, PatTuple) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Pair =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Pair, _Node);

    function Pair() {
      _classCallCheck(this, Pair);

      return _possibleConstructorReturn(this, _getPrototypeOf(Pair).call(this, null, ",", "mediumpurple1"));
    }

    _createClass(Pair, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink;

          if (token.dataStack[token.dataStack.length - 1] == CompData.PR) {
            token.dataStack.pop();
            nextLink = this.findLinksOutOf("e")[0];
          } else if (token.dataStack[token.dataStack.length - 1] == CompData.PL) {
            token.dataStack.pop();
            nextLink = this.findLinksOutOf('w')[0];
          } else {
            token.dataStack.push(CompData.PE);
            token.dataStack.push(CompData.PROMPT);
            nextLink = this.findLinksOutOf("e")[0];
            ;
          }

          token.rewriteFlag = RewriteFlag.F_PAIR;
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "e") {
          var nextLink;

          if (token.dataStack[token.dataStack.length - 2] == CompData.PE) {
            nextLink = this.findLinksOutOf("w")[0];
            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
          } else {
            nextLink = this.findLinksInto("s")[0];
            token.dataStack.push(CompData.PR);
            token.forward = false;
          }

          return nextLink;
        } else if (link.from == this.key && link.fromPort == "w") {
          if (token.dataStack[token.dataStack.length - 3] == CompData.PE) {
            var l = token.dataStack.pop();
            var r = token.dataStack.pop();
            token.dataStack.pop();
            token.dataStack.pop();
            var result = "(" + l[0] + "," + r[0] + ")";
            var type = l[1] == CompData.EMPTY && r[1] == CompData.EMPTY ? CompData.EMPTY : CompData.DEP;
            token.dataStack.push([result, type]);
          } else {
            token.dataStack.push(CompData.PL);
          }

          return this.findLinksInto(null)[0];
          ;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_PAIR && nextLink.from == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

          if (prev instanceof Contract) {
            if (nextLink.from == this.key) {
              var link = token.boxStack.pop();
              var inLinks = prev.findLinksInto(null);

              if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
              } else {
                var leftArm = this.findLinksOutOf('w')[0];
                var left = this.graph.findNodeByKey(leftArm.to);
                var rightArm = this.findLinksOutOf('e')[0];
                var right = this.graph.findNodeByKey(rightArm.to);
                var newPair = new Pair().addToGroup(this.group);
                var conL = new Contract(left.name).addToGroup(this.group);
                var conR = new Contract(right.name).addToGroup(this.group);
                leftArm.changeTo(conL.key, "s");
                rightArm.changeTo(conR.key, "s");
                new Link(conL.key, left.key, "n", "s").addToGroup(leftArm.group);
                new Link(conR.key, right.key, "n", "s").addToGroup(rightArm.group);
                new Link(newPair.key, conL.key, "w", "s").addToGroup(newPair.group);
                new Link(newPair.key, conR.key, "e", "s").addToGroup(newPair.group);
                var prevLink = prev.findLinksOutOf(null)[0];
                prevLink.changeTo(newPair.key, "s");
                link.changeTo(this.key, "s");
              }

              token.rewriteFlag = RewriteFlag.F_PAIR;
              token.rewrite = true;
              return nextLink;
            }
          } else if (prev instanceof PatTuple) {
            this.findLinksOutOf("e")[0].changeFrom(prev.findLinksInto("e")[0].from, prev.findLinksInto("e")[0].fromPort);
            this.findLinksOutOf("w")[0].changeFrom(prev.findLinksInto("w")[0].from, prev.findLinksInto("w")[0].fromPort);
            this.delete();
            prev.delete();
            token.rewrite = true;
            return nextLink;
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Pair();
      }
    }]);

    return Pair;
  }(Node);

  return Pair;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/pattuple.js":
/*!***************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/pattuple.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token) {
  var CompData = Token.CompData();

  var PatTuple =
  /*#__PURE__*/
  function (_Node) {
    _inherits(PatTuple, _Node);

    function PatTuple() {
      _classCallCheck(this, PatTuple);

      return _possibleConstructorReturn(this, _getPrototypeOf(PatTuple).call(this, null, "'", "mediumpurple1"));
    }

    _createClass(PatTuple, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("n")[0];
          if (link.toPort == "e") token.dataStack.push(CompData.PR);else if (link.toPort == "w") token.dataStack.push(CompData.PL);
          return nextLink;
        } else if (link.from == this.key) {
          var nextLink;
          var direction = token.dataStack.pop();
          if (direction == CompData.PR) nextLink = this.findLinksInto("e")[0];else if (direction == CompData.PL) nextLink = this.findLinksInto("w")[0];
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new PatTuple();
      }
    }]);

    return PatTuple;
  }(Node);

  return PatTuple;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/pax.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/pax.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Expo) {
  var Pax =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Pax, _Expo);

    function Pax(name) {
      _classCallCheck(this, Pax);

      return _possibleConstructorReturn(this, _getPrototypeOf(Pax).call(this, null, "?", name));
    }

    _createClass(Pax, [{
      key: "copy",
      value: function copy() {
        return new Pax(this.name);
      }
    }, {
      key: "delete",
      value: function _delete() {
        this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

        _get(_getPrototypeOf(Pax.prototype), "delete", this).call(this);
      }
    }]);

    return Pax;
  }(Expo);

  return Pax;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/promo.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/promo.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! term */ "../itf-impl/Visualiser/js/term.js"), __webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js"), __webpack_require__(/*! nodes/der */ "../itf-impl/Visualiser/js/nodes/der.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! nodes/abs */ "../itf-impl/Visualiser/js/nodes/abs.js"), __webpack_require__(/*! nodes/recur */ "../itf-impl/Visualiser/js/nodes/recur.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Term, Expo, Der, Contract, Abs, Recur) {
  var RewriteFlag = Token.RewriteFlag();

  var Promo =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Promo, _Expo);

    function Promo() {
      _classCallCheck(this, Promo);

      return _possibleConstructorReturn(this, _getPrototypeOf(Promo).call(this, null, "!"));
    }

    _createClass(Promo, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.rewriteFlag = RewriteFlag.F_PROMO;
          return nextLink;
        } else if (link.from == this.key) {
          var nextLink = this.findLinksInto(null)[0];
          return nextLink;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_PROMO) {
          token.rewriteFlag = RewriteFlag.EMPTY; // get the previous node

          var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

          if (prev instanceof Der) {
            var oldGroup = this.group;
            oldGroup.moveOut(); // this.group is a box-wrapper

            oldGroup.deleteAndPreserveLink();
            var newNextLink = prev.findLinksInto(null)[0];
            prev.deleteAndPreserveInLink();
            token.rewrite = true;
            return newNextLink;
          } else if (prev instanceof Contract && token.boxStack.length >= 1) {
            // if it's a contract and there are multiple, consective links into it
            if (token.boxStack.length >= 2) {
              // get the least recent link
              var link = token.boxStack[token.dataStack.length - 1];
              var prevPrevNode = this.graph.findNodeByKey(link.from); // if the node leading into the current contract is also a contract, then remove it

              if (prevPrevNode instanceof Contract) {
                token.boxStack.pop();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = prevPrevNode.findLinksInto(null)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _link = _step.value;
                    _link.to = prev.key;
                  } // delete the previous contract

                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }

                prevPrevNode.delete();
                token.rewrite = true;
                return nextLink;
              }
            } // if it's a contract and there aren't multiple, consecutive links into it (not necessarily just one)
            else {
                // get the most recent link
                var link = token.boxStack.pop(); // if the next node is an abstraction, then keep the contract

                var next = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

                if (next instanceof Abs || next instanceof Recur) {
                  var newBoxWrapper = this.group.copy().addToGroup(this.group.group);
                  Term.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);
                  var prevLink = prev.findLinksOutOf(null)[0];
                  prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
                  link.changeTo(this.key, "s");
                } else {
                  var inLinks = Object.assign([], prev.findLinksInto(null)); // iterate through the links leading into the current contract

                  for (var i = 0; i < inLinks.length; i++) {
                    var group; // if the link leading into it is the same as the most reccent link

                    if (inLinks[i].from == link.from && inLinks[i].fromPort == link.fromPort) {
                      group = this.group;
                    } else {
                      // create a new box where the current group is copied and added at a nested level
                      var newBoxWrapper = this.group.copy().addToGroup(this.group.group);
                      group = newBoxWrapper;
                    } // change link into the current node to point to the new box wrapper


                    inLinks[i].changeTo(group.prin.key, "s");
                  } // delete the current contract


                  prev.delete();
                }

                token.rewriteFlag = RewriteFlag.F_PROMO;
                token.rewrite = true;
                return nextLink;
              }
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Promo();
      }
    }]);

    return Promo;
  }(Expo);

  return Promo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/prop.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/prop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, BoxWrapper, Const, Link) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Prop =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Prop, _Node);

    function Prop() {
      _classCallCheck(this, Prop);

      return _possibleConstructorReturn(this, _getPrototypeOf(Prop).call(this, null, "s", "indianred1"));
    }

    _createClass(Prop, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          if (token.dataStack[token.dataStack.length - 1] == CompData.PROMPT) {
            token.dataStack.pop();
            token.dataStack.push([false, CompData.EMPTY]);
            token.rewriteFlag = RewriteFlag.F_PROP;
            token.forward = false;
            token.machine.startPropagation();
            return link;
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_PROP && nextLink.to == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.machine.hasUpdate;
          token.dataStack.pop();
          token.dataStack.push([data, CompData.EMPTY]);
          var wrapper = BoxWrapper.create().addToGroup(this.group);
          var con = new Const(data).addToGroup(wrapper.box);
          new Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
          nextLink.changeTo(wrapper.prin.key, "s");
          this.delete();
          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Prop();
      }
    }]);

    return Prop;
  }(Node);

  return Prop;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/prov.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/prov.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Expo, Token) {
  var CompData = Token.CompData();

  var Prov =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Prov, _Expo);

    function Prov(name) {
      _classCallCheck(this, Prov);

      return _possibleConstructorReturn(this, _getPrototypeOf(Prov).call(this, null, "¡", name));
    }

    _createClass(Prov, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          return this.findLinksOutOf(null)[0];
        } else if (link.from == this.key) {
          var data = token.dataStack.pop();
          token.dataStack.push([data[0], CompData.DEP]);
          token.forward = false;
          return this.findLinksInto(null)[0];
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new Prov(this.name);
        newNode.width = this.width;
        newNode.height = this.height;
        return newNode;
      }
    }]);

    return Prov;
  }(Expo);

  return Prov;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/recur.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/recur.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! term */ "../itf-impl/Visualiser/js/term.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Term, Link, Expo) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Recur =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Recur, _Expo);

    function Recur() {
      _classCallCheck(this, Recur);

      return _possibleConstructorReturn(this, _getPrototypeOf(Recur).call(this, null, "μ", "mediumpurple1"));
    }

    _createClass(Recur, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.rewriteFlag = RewriteFlag.F_RECUR;
          return nextLink;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_RECUR && nextLink.from == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var wrapper = this.group.copy().addToGroup(this.group);
          Term.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);
          var oldGroup = this.group;
          var oldBox = this.group.box;
          this.group.moveOut();
          var leftLink = this.findLinksInto("w")[0];
          leftLink.changeTo(wrapper.prin.key, "s");
          leftLink.fromPort = "n";
          leftLink.reverse = false;
          var inLink = this.findLinksInto("s")[0];
          var outLink = this.findLinksOutOf("e")[0];
          outLink.changeFrom(inLink.from, inLink.fromPort);
          oldGroup.deleteAndPreserveLink();
          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Recur();
      }
    }]);

    return Recur;
  }(Expo);

  return Recur;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/ref.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/ref.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/mod */ "../itf-impl/Visualiser/js/nodes/mod.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Mod, Const, Link) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Ref =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Ref, _Node);

    function Ref() {
      var _this;

      _classCallCheck(this, Ref);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Ref).call(this, 'diamond', '', "indianred1"));
      _this.width = ".3";
      _this.height = ".3";
      return _this;
    }

    _createClass(Ref, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push(data);
          token.rewriteFlag = RewriteFlag.F_MOD;
          return this.findLinksInto(null)[0];
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (nextLink.to == this.key && token.rewriteFlag == RewriteFlag.F_MOD) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.dataStack.pop();
          var mod = new Mod().addToGroup(this.group);
          var con = new Const(data[0]).addToGroup(this.group);
          new Link(mod.key, con.key, "w", "s").addToGroup(this.group);
          var outLink = this.findLinksOutOf(null)[0];
          outLink.changeFrom(mod.key, "e");
          var inLink = this.findLinksInto(null)[0];
          inLink.changeTo(mod.key, "s");
          this.delete();
          token.rewrite = true;
          token.dataStack.push([data[0], mod.key]);
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "deleteAndPreserveInLink",
      value: function deleteAndPreserveInLink() {
        var inLink = this.findLinksInto(null)[0];
        var outLink = this.findLinksOutOf(null)[0];

        if (outLink != null && inLink != null) {
          inLink.changeTo(outLink.to, outLink.toPort);
        }

        _get(_getPrototypeOf(Ref.prototype), "delete", this).call(this);
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Ref();
      }
    }]);

    return Ref;
  }(Node);

  return Ref;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/set.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/set.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, BoxWrapper, Const, Link, Weak) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var Set =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Set, _Node);

    function Set() {
      _classCallCheck(this, Set);

      return _possibleConstructorReturn(this, _getPrototypeOf(Set).call(this, null, "<<~", "indianred1"));
    }

    _createClass(Set, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          if (link.fromPort == "e") {
            var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
            return nextLink;
          } else if (link.fromPort == "w") {
            if (token.dataStack[token.dataStack.length - 3] == CompData.PROMPT) {
              var data = token.dataStack.pop();
              var new_v = token.dataStack.pop();
              token.dataStack.pop();
              token.dataStack.push([CompData.UNIT, CompData.EMPTY]);
              token.rewriteFlag = RewriteFlag.F_DELTA + data[1] + ';' + new_v[0];
              return this.findLinksInto(null)[0];
            }
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag.substring(0, 3) == RewriteFlag.F_DELTA && nextLink.to == this.key) {
          var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
          var s = string.split(";");
          var key = s[0];
          var data = s[1];
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.dataStack[token.dataStack.length - 1];
          var weak1 = new Weak().addToGroup(this.group);
          this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
          var mod = this.graph.findNodeByKey(key);
          var weak2 = new Weak().addToGroup(this.group);
          mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
          this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
          this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];
          var wrapper = BoxWrapper.create().addToGroup(this.group);
          var con = new Const(data[0]).addToGroup(wrapper.box);
          new Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
          this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
          this.delete();
          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Set();
      }
    }]);

    return Set;
  }(Node);

  return Set;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/setp.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/setp.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, BoxWrapper, Const, Link) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();

  var SetParam =
  /*#__PURE__*/
  function (_Node) {
    _inherits(SetParam, _Node);

    function SetParam() {
      _classCallCheck(this, SetParam);

      return _possibleConstructorReturn(this, _getPrototypeOf(SetParam).call(this, null, "<<~~", "indianred1", null));
    }

    _createClass(SetParam, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          if (link.fromPort == "e") {
            var nextLink = this.findLinksOutOf("w")[0];
            token.dataStack.push(CompData.PROMPT);
            token.forward = true;
            return nextLink;
          } else if (link.fromPort == "w") {
            if (token.dataStack[token.dataStack.length - 3] == CompData.PROMPT) {
              var data = token.dataStack.pop();
              var new_v = token.dataStack.pop();
              token.dataStack.pop();
              token.dataStack.push([CompData.UNIT, CompData.EMPTY]);
              token.rewriteFlag = RewriteFlag.F_DELTA + data[1] + ';' + new_v[0];
              return this.findLinksInto(null)[0];
            }
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag.substring(0, 3) == RewriteFlag.F_DELTA && nextLink.to == this.key) {
          var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
          var s = string.split(";");
          var key = s[0];
          var vecData = s[1];
          var weakData = token.dataStack[token.dataStack.length - 1][0];
          token.rewriteFlag = RewriteFlag.EMPTY;
          var vec = this.graph.findNodeByKey(key);
          vec.name = vecData;
          vec.text = vecData;
          var wrapper = BoxWrapper.create().addToGroup(this.group);
          var con = new Const(weakData).addToGroup(wrapper.box);
          new Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
          this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
          var nextNode = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);
          nextNode.delete();
          this.delete();
          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new SetParam();
      }
    }]);

    return SetParam;
  }(Node);

  return SetParam;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/start.js":
/*!************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/start.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token) {
  var CompData = Token.CompData();

  var Start =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Start, _Node);

    function Start() {
      _classCallCheck(this, Start);

      return _possibleConstructorReturn(this, _getPrototypeOf(Start).call(this, "point", "", "black"));
    }

    _createClass(Start, [{
      key: "transition",
      value: function transition(token) {
        if (token.link == null && token.dataStack[token.dataStack.length - 1] == CompData.PROMPT) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.forward = true;
          return nextLink;
        } else return null;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Start();
      }
    }]);

    return Start;
  }(Node);

  return Start;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/sym-binop.js":
/*!****************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/sym-binop.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/vector */ "../itf-impl/Visualiser/js/nodes/vector.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! op */ "../itf-impl/Visualiser/js/op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Vector, Const, Contract, BoxWrapper, Link, Op) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();
  var BinOpType = Op.BinOpType;

  var SymBinOp =
  /*#__PURE__*/
  function (_Node) {
    _inherits(SymBinOp, _Node);

    function SymBinOp(text) {
      var _this;

      _classCallCheck(this, SymBinOp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SymBinOp).call(this, null, text, "mediumpurple", null));
      _this.subType = null;
      return _this;
    }

    _createClass(SymBinOp, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "e") {
          var nextLink = this.findLinksOutOf("w")[0];
          token.dataStack.push(CompData.PROMPT);
          token.forward = true;
          return nextLink;
        } else if (link.from == this.key && link.fromPort == "w") {
          if (token.dataStack[token.dataStack.length - 3] == CompData.PROMPT) {
            var l = token.dataStack.pop();
            var r = token.dataStack.pop();
            token.dataStack.pop();
            var result = this.binOpApply(this.subType, l[0], r[0]);
            token.dataStack.push([result, CompData.EMPTY]);
            token.rewriteFlag = RewriteFlag.F_OP;
            return this.findLinksInto(null)[0];
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_OP && nextLink.to == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var data = token.dataStack[token.dataStack.length - 1][0];
          var leftNode = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
          var rightNode = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

          if (this.subType == BinOpType.SymPlus) {
            if (rightNode instanceof Vector) {
              rightNode.name = data;
              rightNode.text = data;
              nextLink.changeTo(rightNode.key, 's');
              leftNode.delete();
              this.delete();
              token.rewrite = true;
              return nextLink;
            }
          } else if (this.subType == BinOpType.SymMult) {
            if (leftNode instanceof Const && rightNode instanceof Vector) {
              rightNode.name = data;
              rightNode.text = data;
              nextLink.changeTo(rightNode.key, 's');
              leftNode.delete();
              this.delete();
              token.rewrite = true;
              return nextLink;
            }
          } else if (this.subType == BinOpType.SymDot) {// do not replace for now, or we won't be able to update parameters

            /*
            var prevNode = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);
            if (rightNode instanceof Vector && false) {
            	var wrapper = BoxWrapper.create().addToGroup(this.group);
            	var newConst = new Const(data).addToGroup(wrapper.box);
            	wrapper.prin.name = newConst.name;
            	var newNextLink = new Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
            	nextLink.changeTo(wrapper.prin.key, 's');
            	rightNode.delete();
            	this.delete();
            	token.rewrite = true;
            	return newNextLink;
            }
            */
          }
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "binOpApply",
      value: function binOpApply(type, v1, v2) {
        switch (type) {
          case BinOpType.SymPlus:
            v1 = JSON.parse(v1);
            v2 = JSON.parse(v2);
            if (v1.length != v2.length) return null;
            var result = new Array();

            for (var i = 0; i < v1.length; i++) {
              result.push(v1[i] + v2[i]);
            }

            return Vector.stringify(result);

          case BinOpType.SymMult:
            v2 = JSON.parse(v2);
            var result = new Array();

            for (var i = 0; i < v2.length; i++) {
              result.push(v1 * v2[i]);
            }

            return Vector.stringify(result);

          case BinOpType.SymDot:
            v1 = JSON.parse(v1);
            v2 = JSON.parse(v2);
            if (v1.length != v2.length) return null;
            var result = 0;

            for (var i = 0; i < v1.length; i++) {
              result += v1[i] * v2[i];
            }

            return result;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new SymBinOp(this.text);
        newNode.subType = this.subType;
        return newNode;
      }
    }], [{
      key: "createPlus",
      value: function createPlus() {
        var op = new SymBinOp('⊞');
        op.subType = BinOpType.SymPlus;
        return op;
      }
    }, {
      key: "createMult",
      value: function createMult() {
        var op = new SymBinOp('⊠');
        op.subType = BinOpType.SymMult;
        return op;
      }
    }, {
      key: "createDot",
      value: function createDot() {
        var op = new SymBinOp('⊡');
        op.subType = BinOpType.SymDot;
        return op;
      }
    }]);

    return SymBinOp;
  }(Node);

  return SymBinOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/unop.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/unop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! box-wrapper */ "../itf-impl/Visualiser/js/box-wrapper.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js"), __webpack_require__(/*! op */ "../itf-impl/Visualiser/js/op.js"), __webpack_require__(/*! nodes/weak */ "../itf-impl/Visualiser/js/nodes/weak.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token, Link, BoxWrapper, Const, Op, Weak) {
  var CompData = Token.CompData();
  var RewriteFlag = Token.RewriteFlag();
  var UnOpType = Op.UnOpType;

  var UnOp =
  /*#__PURE__*/
  function (_Node) {
    _inherits(UnOp, _Node);

    function UnOp(text) {
      var _this;

      _classCallCheck(this, UnOp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UnOp).call(this, null, text, "mediumpurple1"));
      _this.subType = null;
      return _this;
    }

    _createClass(UnOp, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.dataStack.push(CompData.PROMPT);
          return nextLink;
        } else if (link.from == this.key) {
          if (token.dataStack[token.dataStack.length - 2] == CompData.PROMPT) {
            var v1 = token.dataStack.pop();
            token.dataStack.pop();
            var type = v1[1] == CompData.EMPTY ? CompData.EMPTY : CompData.DEP;
            token.dataStack.push([this.unOpApply(this.subType, v1[0]), CompData.EMPTY]);
            token.rewriteFlag = RewriteFlag.F_OP;
            return this.findLinksInto(null)[0];
          }
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_OP && nextLink.to == this.key) {
          token.rewriteFlag = RewriteFlag.EMPTY;
          var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);
          var data = token.dataStack[token.dataStack.length - 1];

          if (data[1] == CompData.EMPTY) {
            //if (prev instanceof Promo) {
            var wrapper = BoxWrapper.create().addToGroup(this.group);
            var newConst = new Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
            new Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
            nextLink.changeTo(wrapper.prin.key, "s"); //prev.group.delete(); 

            var weak = new Weak().addToGroup(this.group);
            new Link(weak.key, prev.key, "n", "s").addToGroup(this.group);
            this.delete();
          }

          token.rewrite = true;
          return nextLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "unOpApply",
      value: function unOpApply(type, v1) {
        switch (type) {
          case UnOpType.Not:
            return !v1;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new UnOp(this.text);
        newNode.subType = this.subType;
        return newNode;
      }
    }]);

    return UnOp;
  }(Node);

  return UnOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/var.js":
/*!**********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/var.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/der */ "../itf-impl/Visualiser/js/nodes/der.js"), __webpack_require__(/*! nodes/abs */ "../itf-impl/Visualiser/js/nodes/abs.js"), __webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Der, Abs, Expo) {
  var Var =
  /*#__PURE__*/
  function (_Der) {
    _inherits(Var, _Der);

    function Var(name) {
      var _this;

      _classCallCheck(this, Var);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Var).call(this, name));
      _this.text = "V";
      return _this;
    }

    _createClass(Var, [{
      key: "deleteAndPreserveOutLink",
      value: function deleteAndPreserveOutLink() {
        var inLink = this.findLinksInto(null)[0];
        var outLink = this.findLinksOutOf(null)[0];

        if (inLink != null && outLink != null) {
          var inNode = this.graph.findNodeByKey(inLink.from);
          if (this.graph.findNodeByKey(outLink.to) instanceof Abs && inNode instanceof Expo) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
        }

        this.delete();
      }
    }]);

    return Var;
  }(Der);

  return Var;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/vector-match.js":
/*!*******************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/vector-match.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! node */ "../itf-impl/Visualiser/js/node.js"), __webpack_require__(/*! vector */ "../itf-impl/Visualiser/js/nodes/vector.js"), __webpack_require__(/*! nodes/sym-binop */ "../itf-impl/Visualiser/js/nodes/sym-binop.js"), __webpack_require__(/*! op */ "../itf-impl/Visualiser/js/op.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/promo */ "../itf-impl/Visualiser/js/nodes/promo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Node, Vector, SymBinOp, Op, Link, Promo) {
  var RewriteFlag = Token.RewriteFlag();
  var BinOpType = Op.BinOpType;

  var VectorMatch =
  /*#__PURE__*/
  function (_Node) {
    _inherits(VectorMatch, _Node);

    function VectorMatch() {
      var _this;

      _classCallCheck(this, VectorMatch);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VectorMatch).call(this, null, "", "indianred1", null));
      _this.totalLength = 0;
      return _this;
    }

    _createClass(VectorMatch, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          var nextLink = this.findLinksOutOf(null)[0];
          token.rewriteFlag = RewriteFlag.F_PROJ;
          return nextLink;
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        if (token.rewriteFlag == RewriteFlag.F_PROJ && nextLink.from == this.key) {
          // find the link connected to the current node
          var prevLink = this.findLinksInto(null)[0];
          var wrapper = this.group;
          var inLink = this.findLinksInto(null)[0]; // create the dot operation which takes a basis vector as the rhs argument

          var idx = parseInt(this.text.substring(1));
          var vec = Vector.createBasis(this.totalLength, idx).addToGroup(wrapper);
          var dot = SymBinOp.createDot().addToGroup(wrapper);
          dot.subType = BinOpType.SymDot;
          new Link(dot.key, vec.key, "e", "s").addToGroup(wrapper); // point previous link to the dot op

          prevLink.changeTo(dot.key, 's'); // find the node pointed to by the vector match

          var nextNextNode = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);
          var oldNextNode = Object.assign(Object.create(Object.getPrototypeOf(nextNextNode)), nextNextNode); // check if the next node is a promo

          if (nextNextNode instanceof Promo) {
            // if so, then skip it
            nextNextNode = this.graph.findNodeByKey(nextNextNode.findLinksOutOf(null)[0].to);
            var inLinks = oldNextNode.findLinksInto(null); // save here

            var ownKey = this.key;
            inLinks.map(function (inLink) {
              if (inLink.from == ownKey) {
                new Link(inLink.from, nextNextNode.key, "n", "s").addToGroup(wrapper);
                inLink.delete();
              }
            });
          } // create a link from the dot node to the node pointed to by the vector match


          new Link(dot.key, nextNextNode.key, "w", "s").addToGroup(wrapper);
          inLink.changeTo(dot.key, 's'); // if there are no more links leading into the promo node, remove it

          if (oldNextNode.findLinksInto(null).length == 0) {
            oldNextNode.delete();
          }

          this.delete();
          token.rewrite = true;
          token.forward = true;
          token.rewriteFlag = RewriteFlag.EMPTY;
          return inLink;
        } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
          token.rewrite = false;
          return nextLink;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new VectorMatch();
        newNode.text = this.text;
        return newNode;
      }
    }]);

    return VectorMatch;
  }(Node);

  return VectorMatch;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/vector.js":
/*!*************************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/vector.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../itf-impl/Visualiser/js/token.js"), __webpack_require__(/*! nodes/const */ "../itf-impl/Visualiser/js/nodes/const.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Const) {
  var CompData = Token.CompData();

  var Vector =
  /*#__PURE__*/
  function (_Const) {
    _inherits(Vector, _Const);

    function Vector(name) {
      _classCallCheck(this, Vector);

      return _possibleConstructorReturn(this, _getPrototypeOf(Vector).call(this, name));
    }

    _createClass(Vector, [{
      key: "transition",
      value: function transition(token, link) {
        if (token.dataStack[token.dataStack.length - 1] == CompData.PROMPT) {
          token.dataStack.pop();
          token.dataStack.push([this.name, this.key]);
          token.forward = false;
          return link;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        var newNode = new Vector(this.name);
        return newNode;
      }
    }], [{
      key: "generateBaseVector",
      value: function generateBaseVector(size, i) {
        var vector = new Array(size).fill(0);
        vector[i] = 1;
        return vector;
      }
    }, {
      key: "createBasis",
      value: function createBasis(size, i) {
        var basis = this.generateBaseVector(size, i);
        return new Vector(this.stringify(basis));
      }
    }, {
      key: "create",
      value: function create(values) {
        return new Vector(this.stringify(values));
      }
    }, {
      key: "stringify",
      value: function stringify(values) {
        return '[' + values.toString() + ']';
      }
    }]);

    return Vector;
  }(Const);

  return Vector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/nodes/weak.js":
/*!***********************************************!*\
  !*** ../itf-impl/Visualiser/js/nodes/weak.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/expo */ "../itf-impl/Visualiser/js/nodes/expo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Expo) {
  var Weak =
  /*#__PURE__*/
  function (_Expo) {
    _inherits(Weak, _Expo);

    function Weak() {
      _classCallCheck(this, Weak);

      return _possibleConstructorReturn(this, _getPrototypeOf(Weak).call(this, null, 'C0'));
    }

    _createClass(Weak, [{
      key: "copy",
      value: function copy() {
        return new Weak();
      }
    }]);

    return Weak;
  }(Expo);

  return Weak;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/op.js":
/*!***************************************!*\
  !*** ../itf-impl/Visualiser/js/op.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var UnOpType = {
    Not: 0
  };
  var BinOpType = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5,
    SymPlus: 6,
    SymMult: 8,
    SymDot: 9
  };
  var OpType = {
    UnOpType: UnOpType,
    BinOpType: BinOpType
  };
  return OpType;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/parser/lexer.js":
/*!*************************************************!*\
  !*** ../itf-impl/Visualiser/js/parser/lexer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! parser/token */ "../itf-impl/Visualiser/js/parser/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token) {
  var Lexer =
  /*#__PURE__*/
  function () {
    function Lexer(input) {
      _classCallCheck(this, Lexer);

      this._input = input;
      this._index = 0;
      this._token = undefined;

      this._nextToken();
    }
    /**
     * Return the next char of the input or '\0' if we've reached the end
     */


    _createClass(Lexer, [{
      key: "_nextChar",
      value: function _nextChar() {
        if (this._index >= this._input.length) {
          return '\0';
        }

        return this._input[this._index++];
      }
      /**
       * Set this._token based on the remaining of the input
       *
       * This method is meant to be private, it doesn't return a token, just sets
       * up the state for the helper functions.
       */

    }, {
      key: "_nextToken",
      value: function _nextToken() {
        var c;

        do {
          c = this._nextChar();
        } while (/\s/.test(c));

        switch (c) {
          case 'λ':
          case '\\':
            this._token = new Token(Token.LAMBDA);
            break;

          case '.':
            this._token = new Token(Token.DOT);
            break;

          case ',':
            this._token = new Token(Token.COMMA, null, 1);
            break;

          case ';':
            this._token = new Token(Token.SEQ);
            break;

          case '(':
            this._token = new Token(Token.LPAREN);
            break;

          case ')':
            this._token = new Token(Token.RPAREN);
            break;

          case '\0':
            this._token = new Token(Token.EOF);
            break;

          case '~':
            this._token = new Token(Token.NOT);
            break;

          case '&':
            if (this._nextChar() == '&') this._token = new Token(Token.AND, null, 5);else {
              this._index--;
              this.fail();
            }
            break;

          case '|':
            var c2 = this._nextChar();

            if (c2 == '|') this._token = new Token(Token.OR, null, 4);else {
              this._index--;
              this.fail();
            }
            break;

          case '+':
            this._token = new Token(Token.PLUS, null, 12);
            break;

          case '-':
            this._token = new Token(Token.SUB, null, 12);
            break;

          case '*':
            this._token = new Token(Token.MULT, null, 13);
            break;

          case '/':
            this._token = new Token(Token.DIV, null, 13);
            break;

          case '<':
            if (this._nextChar() == '=') this._token = new Token(Token.LTE, null, 10);else {
              this._index--;
              this.fail();
            }
            break;

          case '=':
            this._token = new Token(Token.DEFINE);
            break;

          case '⊞':
            this._token = new Token(Token.SYMPLUS, null, 12);
            break;

          case '⊠':
            this._token = new Token(Token.SYMMULT, null, 13);
            break;

          case '⊡':
            this._token = new Token(Token.SYMDOT, null, 13);
            break;

          default:
            // text for string
            if (/[a-z]|_|'/.test(c)) {
              var str = '';

              do {
                str += c;
                c = this._nextChar();
              } while (/[a-zA-Z]|'|_|[0-9]/.test(c)); // put back the last char which is not part of the identifier


              this._index--;
              if (str == "let") this._token = new Token(Token.LET);else if (str == "in") this._token = new Token(Token.IN);else if (str == "rec") this._token = new Token(Token.REC);else if (str == "true") this._token = new Token(Token.TRUE);else if (str == "false") this._token = new Token(Token.FALSE);else if (str == "if") this._token = new Token(Token.IF);else if (str == "then") this._token = new Token(Token.THEN);else if (str == "else") this._token = new Token(Token.ELSE);else if (str == "link") this._token = new Token(Token.CHANGE);else if (str == "set") this._token = new Token(Token.SET);else if (str == "setp") this._token = new Token(Token.SET_P);else if (str == "to") this._token = new Token(Token.TO);else if (str == "step") this._token = new Token(Token.PROP);else if (str == "peek") this._token = new Token(Token.DEP);else if (str == "deref") this._token = new Token(Token.DEREF);else if (str == "abs") this._token = new Token(Token.ABS);else if (str == "cell") this._token = new Token(Token.CELL);else if (str == "pc") this._token = new Token(Token.PC);else if (str == "fold") this._token = new Token(Token.FOLD);else this._token = new Token(Token.LCID, str);
            } // text for numbers
            else if (/[0-9]/.test(c)) {
                var _str = '';

                do {
                  _str += c;
                  c = this._nextChar();
                } while (/[0-9]/.test(c));

                if (c == '.') {
                  do {
                    _str += c;
                    c = this._nextChar();
                  } while (/[0-9]/.test(c));
                } // put back the last char which is not part of the identifier


                this._index--;
                this._token = new Token(Token.INT, parseFloat(_str));
              } else {
                this.fail();
              }

        }
      }
      /**
       * Assert that the next token has the given type, return it, and skip to the
       * next token.
       */

    }, {
      key: "token",
      value: function token(type) {
        if (!type) {
          return this._token.value;
        }

        var token = this._token;
        this.match(type);
        return token.value;
      }
    }, {
      key: "lookahead",
      value: function lookahead() {
        return this._token;
      }
      /**
       * Throw an unexpected token error - ideally this would print the source
       * location
       */

    }, {
      key: "fail",
      value: function fail() {
        throw new Error("Unexpected token at offset ".concat(this._index));
      }
      /**
       * Returns a boolean indicating whether the next token has the given type.
       */

    }, {
      key: "next",
      value: function next(type) {
        return this._token.type == type;
      }
      /**
       * Assert that the next token has the given type and skip it.
       */

    }, {
      key: "match",
      value: function match(type) {
        if (this.next(type)) {
          this._nextToken();

          return;
        }

        console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
        throw new Error('Parse Error');
      }
      /**
       * Same as `next`, but skips the token if it matches the expected type.
       */

    }, {
      key: "skip",
      value: function skip(type) {
        if (this.next(type)) {
          this._nextToken();

          return true;
        }

        return false;
      }
    }]);

    return Lexer;
  }();

  return Lexer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/parser/parser.js":
/*!**************************************************!*\
  !*** ../itf-impl/Visualiser/js/parser/parser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! parser/token */ "../itf-impl/Visualiser/js/parser/token.js"), __webpack_require__(/*! parser/pattern */ "../itf-impl/Visualiser/js/parser/pattern.js"), __webpack_require__(/*! ast/pattern */ "../itf-impl/Visualiser/js/ast/pattern.js"), __webpack_require__(/*! ast/abstraction */ "../itf-impl/Visualiser/js/ast/abstraction.js"), __webpack_require__(/*! ast/application */ "../itf-impl/Visualiser/js/ast/application.js"), __webpack_require__(/*! ast/identifier */ "../itf-impl/Visualiser/js/ast/identifier.js"), __webpack_require__(/*! ast/constant */ "../itf-impl/Visualiser/js/ast/constant.js"), __webpack_require__(/*! ast/unary-op */ "../itf-impl/Visualiser/js/ast/unary-op.js"), __webpack_require__(/*! ast/sym-binop */ "../itf-impl/Visualiser/js/ast/sym-binop.js"), __webpack_require__(/*! ast/binary-op */ "../itf-impl/Visualiser/js/ast/binary-op.js"), __webpack_require__(/*! ast/if-then-else */ "../itf-impl/Visualiser/js/ast/if-then-else.js"), __webpack_require__(/*! ast/recursion */ "../itf-impl/Visualiser/js/ast/recursion.js"), __webpack_require__(/*! ast/tuple */ "../itf-impl/Visualiser/js/ast/tuple.js"), __webpack_require__(/*! ast/cell */ "../itf-impl/Visualiser/js/ast/cell.js"), __webpack_require__(/*! ast/provisional-constant */ "../itf-impl/Visualiser/js/ast/provisional-constant.js"), __webpack_require__(/*! ast/change */ "../itf-impl/Visualiser/js/ast/change.js"), __webpack_require__(/*! ast/assign */ "../itf-impl/Visualiser/js/ast/assign.js"), __webpack_require__(/*! ast/assign-param */ "../itf-impl/Visualiser/js/ast/assign-param.js"), __webpack_require__(/*! ast/propagation */ "../itf-impl/Visualiser/js/ast/propagation.js"), __webpack_require__(/*! ast/deprecation */ "../itf-impl/Visualiser/js/ast/deprecation.js"), __webpack_require__(/*! ast/deref */ "../itf-impl/Visualiser/js/ast/deref.js"), __webpack_require__(/*! ast/graph-abstraction */ "../itf-impl/Visualiser/js/ast/graph-abstraction.js"), __webpack_require__(/*! ast/folding */ "../itf-impl/Visualiser/js/ast/folding.js"), __webpack_require__(/*! op */ "../itf-impl/Visualiser/js/op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, PatternType, Pattern, Abstraction, Application, Identifier, Constant, UnaryOp, SymmetricBinaryOp, BinaryOp, IfThenElse, Recursion, Tuple, Cell, ProvisionalConstant, Change, Assign, AssignParam, Propagation, Deprecation, Dereference, GraphAbstraction, Folding, Op) {
  var BinOpType = Op.BinOpType;
  var UnOpType = Op.UnOpType;

  var Parser =
  /*#__PURE__*/
  function () {
    function Parser(lexer) {
      _classCallCheck(this, Parser);

      this.lexer = lexer;
    }

    _createClass(Parser, [{
      key: "parse",
      value: function parse() {
        var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

        this.lexer.match(Token.EOF);
        return result;
      } // term ::= LAMBDA LCID DOT term
      //        | LET LCID DEFINE term IN term
      //        | REC LCID DOT term
      //        | IF term THEN term ELSE term
      //        | FOLD (term, term)
      //        | application

    }, {
      key: "term",
      value: function term(ctx) {
        if (this.lexer.skip(Token.LAMBDA)) {
          var _id = this.lexer.token(Token.LCID);

          this.lexer.match(Token.DOT);
          var term = this.term([_id].concat(ctx));
          return new Abstraction(new Pattern(PatternType.Id, _id), term);
        } else if (this.lexer.skip(Token.LET)) {
          if (this.lexer.skip(Token.LPAREN)) {
            var id1 = this.lexer.token(Token.LCID);
            this.lexer.match(Token.COMMA);
            var id2 = this.lexer.token(Token.LCID);
            this.lexer.match(Token.RPAREN);
            var pattern = new Pattern(PatternType.Tuple, id1, id2);
            this.lexer.match(Token.DEFINE);
            var N = this.term(ctx);
            this.lexer.match(Token.IN);
            var M = this.term([id1, id2].concat(ctx));
            return new Application(new Abstraction(pattern, M), N);
          } else {
            var id = this.lexer.token(Token.LCID);
            var pattern = new Pattern(PatternType.Id, id);
            this.lexer.match(Token.DEFINE);
            var N = this.term(ctx);
            this.lexer.match(Token.IN);

            var _M = this.term([id].concat(ctx));

            return new Application(new Abstraction(pattern, _M), N);
          }
        } else if (this.lexer.skip(Token.REC)) {
          var _id2 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.DOT);

          var _term = this.term([_id2].concat(ctx));

          return new Recursion(_id2, _term);
        } else if (this.lexer.skip(Token.IF)) {
          var cond = this.term(ctx);
          this.lexer.match(Token.THEN);
          var t1 = this.term(ctx);
          this.lexer.match(Token.ELSE);
          var t2 = this.term(ctx);
          return new IfThenElse(cond, t1, t2);
        } else if (this.lexer.skip(Token.FOLD)) {
          var term1 = this.atom(ctx);
          var term2 = this.atom(ctx);
          return new Folding(term1, term2);
        } else {
          return this.application(ctx);
        }
      }
    }, {
      key: "isBinaryOp",
      value: function isBinaryOp(token) {
        return token.type == Token.AND || token.type == Token.OR || token.type == Token.PLUS || token.type == Token.SUB || token.type == Token.MULT || token.type == Token.DIV || token.type == Token.LTE || token.type == Token.COMMA || token.type == Token.SYMPLUS || token.type == Token.SYMMULT || token.type == Token.SYMDOT;
      }
    }, {
      key: "parseBinop",
      value: function parseBinop(ctx, lhs, pred) {
        var nextToken = this.lexer.lookahead();

        while (this.isBinaryOp(nextToken) && nextToken.pred >= pred) {
          var op = nextToken;

          this.lexer._nextToken();

          var rhs = this.atom(ctx); //var rhs = this.term(ctx);

          nextToken = this.lexer.lookahead();

          while (this.isBinaryOp(nextToken) && nextToken.pred > op.pred) {
            rhs = this.parseBinop(ctx, rhs, nextToken.pred);
            nextToken = this.lexer.lookahead();
          }

          if (op.type == Token.AND) {
            lhs = new BinaryOp(BinOpType.And, "&&", lhs, rhs);
          } else if (op.type == Token.OR) {
            lhs = new BinaryOp(BinOpType.Or, "||", lhs, rhs);
          } else if (op.type == Token.PLUS) {
            lhs = new BinaryOp(BinOpType.Plus, "+", lhs, rhs);
          } else if (op.type == Token.SUB) {
            lhs = new BinaryOp(BinOpType.Sub, "-", lhs, rhs);
          } else if (op.type == Token.MULT) {
            lhs = new BinaryOp(BinOpType.Mult, "*", lhs, rhs);
          } else if (op.type == Token.DIV) {
            lhs = new BinaryOp(BinOpType.Div, "/", lhs, rhs);
          } else if (op.type == Token.LTE) {
            lhs = new BinaryOp(BinOpType.Lte, "<=", lhs, rhs);
          } else if (op.type == Token.COMMA) {
            lhs = new Tuple(lhs, rhs);
          } else if (op.type == Token.SYMPLUS) {
            lhs = new SymmetricBinaryOp(BinOpType.SymPlus, "⊞", lhs, rhs);
          } else if (op.type == Token.SYMMULT) {
            lhs = new SymmetricBinaryOp(BinOpType.SymMult, "⊠", lhs, rhs);
          } else if (op.type == Token.SYMDOT) {
            lhs = new SymmetricBinaryOp(BinOpType.SymDot, "⊡", lhs, rhs);
          }
        }

        return lhs;
      }
    }, {
      key: "application",
      value: function application(ctx) {
        var lhs = this.atom(ctx);

        while (true) {
          var rhs;

          if (this.isBinaryOp(this.lexer.lookahead())) {
            lhs = this.parseBinop(ctx, lhs, 0);
          } else {
            rhs = this.atom(ctx);

            if (!rhs) {
              return lhs;
            } else {
              lhs = new Application(lhs, rhs);
            }
          }
        }
      } // atom ::= LPAREN term RPAREN
      //        | LCID
      //        | INT
      //        | TRUE
      //        | FALSE
      //        | NOT term
      //        | PROP
      //        | CHANGE LCID TO term

    }, {
      key: "atom",
      value: function atom(ctx) {
        if (this.lexer.skip(Token.LPAREN)) {
          var _term2 = this.term(ctx);

          this.lexer.match(Token.RPAREN);
          return _term2;
        } else if (this.lexer.next(Token.LCID)) {
          var id = this.lexer.token(Token.LCID);
          return new Identifier(ctx.indexOf(id), id);
        } else if (this.lexer.next(Token.INT)) {
          var n = this.lexer.token(Token.INT);
          return new Constant(n);
        } else if (this.lexer.skip(Token.TRUE)) {
          return new Constant(true);
        } else if (this.lexer.skip(Token.FALSE)) {
          return new Constant(false);
        } else if (this.lexer.skip(Token.NOT)) {
          var _term3 = this.term(ctx);

          return new UnaryOp(UnOpType.Not, "~", _term3);
        } else if (this.lexer.skip(Token.PROP)) {
          return new Propagation();
        } else if (this.lexer.skip(Token.DEP)) {
          var term = this.term(ctx);
          return new Deprecation(term);
        } else if (this.lexer.skip(Token.DEREF)) {
          var term = this.term(ctx);
          return new Dereference(term);
        } else if (this.lexer.skip(Token.CELL)) {
          var term = this.term(ctx);
          return new Cell(term);
        } else if (this.lexer.skip(Token.PC)) {
          var term = this.term(ctx);
          return new ProvisionalConstant(term);
        } else if (this.lexer.skip(Token.CHANGE)) {
          var _id3 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.TO);

          var _term4 = this.term(ctx);

          return new Change(_id3, _term4);
        } else if (this.lexer.skip(Token.SET)) {
          var _id4 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.TO);

          var _term5 = this.term(ctx);

          return new Assign(_id4, _term5);
        } else if (this.lexer.skip(Token.SET_P)) {
          var _id5 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.TO);

          var _term6 = this.term(ctx);

          return new AssignParam(_id5, _term6);
        } else if (this.lexer.skip(Token.SET_P)) {
          var _id6 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.TO);

          var _term7 = this.term(ctx);

          return new AssignParam(_id6, _term7);
        } else if (this.lexer.skip(Token.SET_P)) {
          var _id7 = this.lexer.token(Token.LCID);

          this.lexer.match(Token.TO);

          var _term8 = this.term(ctx);

          return new AssignParam(_id7, _term8);
        } else if (this.lexer.skip(Token.ABS)) {
          var _term9 = this.term(ctx);

          return new GraphAbstraction(_term9);
        } else {
          return undefined;
        }
      }
    }]);

    return Parser;
  }();

  return Parser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/parser/pattern.js":
/*!***************************************************!*\
  !*** ../itf-impl/Visualiser/js/parser/pattern.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var PatternType = {
    Id: 0,
    Tuple: 1
  };
  return PatternType;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/parser/token.js":
/*!*************************************************!*\
  !*** ../itf-impl/Visualiser/js/parser/token.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Token =
  /**
   * type should be one of the valid token types list below, and value is an
   * optional value that can carry any extra information necessary for a given
   * token type. (e.g. the matched string for an identifier)
   */
  function Token(type, value, pred) {
    _classCallCheck(this, Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  ;
  ['EOF', // we augment the tokens with EOF, to indicate the end of the input.
  'LAMBDA', 'LPAREN', 'RPAREN', 'LCID', 'DOT', 'COMMA', 'APP', 'LET', 'DEFINE', 'IN', 'REC', 'INT', 'TRUE', 'FALSE', 'NOT', 'AND', 'OR', 'PLUS', 'SUB', 'MULT', 'DIV', 'LTE', 'IF', 'THEN', 'ELSE', 'SET', 'CHANGE', 'TO', 'PROP', 'DEP', 'DEREF', 'ABS', 'CELL', 'PC', 'SYMPLUS', 'SYMMULT', 'SYMDOT', 'SET_P', 'FOLD'].forEach(function (token) {
    return Token[token] = token;
  });
  return Token;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/term.js":
/*!*****************************************!*\
  !*** ../itf-impl/Visualiser/js/term.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../itf-impl/Visualiser/js/group.js"), __webpack_require__(/*! link */ "../itf-impl/Visualiser/js/link.js"), __webpack_require__(/*! nodes/pax */ "../itf-impl/Visualiser/js/nodes/pax.js"), __webpack_require__(/*! nodes/contract */ "../itf-impl/Visualiser/js/nodes/contract.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group, Link, Pax, Contract) {
  // specific group for a term in the calculus
  var Term =
  /*#__PURE__*/
  function (_Group) {
    _inherits(Term, _Group);

    function Term(prin, auxs) {
      var _this;

      _classCallCheck(this, Term);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Term).call(this));

      _this.set(prin, auxs);

      return _this;
    }

    _createClass(Term, [{
      key: "set",
      value: function set(prin, auxs) {
        this.prin = prin;
        this.auxs = auxs;
        return this;
      }
    }, {
      key: "createPaxsOnTopOf",
      value: function createPaxsOnTopOf(auxs) {
        var newPaxs = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var pax = _step.value;
            var newPax = new Pax(pax.name).addToGroup(this);
            if (pax.findLinksOutOf(null).length == 0) new Link(pax.key, newPax.key, "n", "s").addToGroup(this);else {
              var outLink = pax.findLinksOutOf(null)[0];
              new Link(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
              outLink.changeTo(newPax.key, "s");
              outLink.changeToGroup(this);
            }
            newPaxs.push(newPax);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return newPaxs;
      }
    }], [{
      key: "joinAuxs",
      value: function joinAuxs(leftAuxs, rightAuxs, group) {
        var newAuxs = leftAuxs.concat(rightAuxs);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          outter: for (var _iterator2 = leftAuxs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var leftAux = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = rightAuxs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var rightAux = _step3.value;

                if (leftAux.name == rightAux.name) {
                  var con = new Contract(leftAux.name).addToGroup(group);
                  var outLink = leftAux.findLinksOutOf(null)[0];

                  if (typeof outLink != 'undefined') {
                    outLink.changeFrom(con.key, outLink.fromPort);
                  }

                  new Link(rightAux.key, con.key, "n", "s").addToGroup(group);
                  new Link(leftAux.key, con.key, "n", "s").addToGroup(group);
                  newAuxs.splice(newAuxs.indexOf(leftAux), 1);
                  newAuxs.splice(newAuxs.indexOf(rightAux), 1);
                  newAuxs.push(con);
                  continue outter;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return newAuxs;
      }
    }]);

    return Term;
  }(Group);

  return Term;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../itf-impl/Visualiser/js/token.js":
/*!******************************************!*\
  !*** ../itf-impl/Visualiser/js/token.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var _CompData = {
    EMPTY: '-',
    PROMPT: '*',
    LAMBDA: 'λ',
    R: '@',
    UNIT: '•',
    IF0: 'if0',
    IF1: 'if1',
    PL: 'L',
    PR: 'R',
    PE: 'P',
    DEP: 'd'
  };
  var _RewriteFlag = {
    EMPTY: '□',
    F_LAMBDA: '<λ>',
    F_OP: '<$>',
    F_IF: '<if>',
    F_C: '<C>',
    F_PROMO: '<!>',
    F_RECUR: '<μ>',
    F_MOD: '<M>',
    F_DEP: '<p>',
    F_DELTA: '<Δ>',
    F_PROP: '<s>',
    F_PAIR: '<,>',
    F_GABS: '<A>',
    F_PROJ: '<proj>',
    F_FOLD: '<F>'
  };

  var MachineToken =
  /*#__PURE__*/
  function () {
    _createClass(MachineToken, null, [{
      key: "CompData",
      value: function CompData() {
        return _CompData;
      }
    }, {
      key: "RewriteFlag",
      value: function RewriteFlag() {
        return _RewriteFlag;
      }
    }]);

    function MachineToken(machine) {
      _classCallCheck(this, MachineToken);

      this.machine = machine;
      this.reset();
    }

    _createClass(MachineToken, [{
      key: "setLink",
      value: function setLink(link) {
        if (this.link != null) {
          //this.link.tokens.splice(this.link.tokens.indexOf(this), 1);
          this.link.clearFocus();
        }

        this.link = link;

        if (this.link != null) {
          //this.link.tokens.push(this);
          if (this.isMain) this.link.focus("red");else this.link.focus("green");
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.forward = true;
        this.rewrite = false;
        this.transited = false;
        this.link = null;
        this.rewriteFlag = _RewriteFlag.EMPTY;
        this.dataStack = [_CompData.PROMPT];
        this.boxStack = [];
      }
    }, {
      key: "delete",
      value: function _delete() {
        this.setLink(null);
        this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
      }
    }]);

    return MachineToken;
  }();

  return MachineToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });