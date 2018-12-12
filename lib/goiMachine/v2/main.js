(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["machine"] = factory();
	else
		root["machine"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../viz/CBV-with-CBV-embedding/js/goi-machine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../viz/CBV-with-CBV-embedding/js/ast/binding.js":
/*!*******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/binding.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/term */ "../viz/CBV-with-CBV-embedding/js/ast/term.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Term) {
  /**
   * param here is the name of the variable of the abstraction. Body is the
   * subtree  representing the body of the abstraction.
   */
  var Binding =
  /*#__PURE__*/
  function (_Term) {
    _inherits(Binding, _Term);

    function Binding(ctx, id, param, body) {
      var _this;

      _classCallCheck(this, Binding);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Binding).call(this, ctx));
      _this.id = id;
      _this.param = param;
      _this.body = body;
      return _this;
    }

    return Binding;
  }(Term);

  return Binding;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/ast/operation.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/operation.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/term */ "../viz/CBV-with-CBV-embedding/js/ast/term.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Term) {
  var Operation =
  /*#__PURE__*/
  function (_Term) {
    _inherits(Operation, _Term);

    function Operation(ctx, sig, name, active, eas, das) {
      var _this;

      _classCallCheck(this, Operation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Operation).call(this, ctx));
      _this.sig = sig;
      _this.name = name;
      _this.active = active;
      _this.eas = eas;
      _this.das = das;
      return _this;
    }

    return Operation;
  }(Term);

  return Operation;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/ast/reference.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/reference.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/term */ "../viz/CBV-with-CBV-embedding/js/ast/term.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Term) {
  /**
   * param here is the name of the variable of the reference. Body is the
   * subtree  representing the body of the abstraction.
   */
  var Reference =
  /*#__PURE__*/
  function (_Term) {
    _inherits(Reference, _Term);

    function Reference(ctx, id, param, body) {
      var _this;

      _classCallCheck(this, Reference);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Reference).call(this, ctx));
      _this.id = id;
      _this.param = param;
      _this.body = body;
      return _this;
    }

    return Reference;
  }(Term);

  return Reference;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/ast/term.js":
/*!****************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/term.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Term = function Term(ctx) {
    _classCallCheck(this, Term);

    this.ctx = ctx;
  };

  return Term;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/ast/thunk.js":
/*!*****************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/thunk.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/term */ "../viz/CBV-with-CBV-embedding/js/ast/term.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Term) {
  var Thunk =
  /*#__PURE__*/
  function (_Term) {
    _inherits(Thunk, _Term);

    function Thunk(ctx, inner) {
      var _this;

      _classCallCheck(this, Thunk);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Thunk).call(this, ctx));
      _this.inner = inner;
      return _this;
    }

    return Thunk;
  }(Term);

  return Thunk;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/ast/var.js":
/*!***************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/ast/var.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/term */ "../viz/CBV-with-CBV-embedding/js/ast/term.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Term) {
  /**
   * name is the string matched for this identifier.
   */
  var Var =
  /*#__PURE__*/
  function (_Term) {
    _inherits(Var, _Term);

    function Var(ctx, name) {
      var _this;

      _classCallCheck(this, Var);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Var).call(this, ctx));
      _this.name = name;
      return _this;
    }

    return Var;
  }(Term);

  return Var;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/goi-machine.js":
/*!*******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/goi-machine.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.mainGraph = null;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ast/var */ "../viz/CBV-with-CBV-embedding/js/ast/var.js"), __webpack_require__(/*! ast/operation */ "../viz/CBV-with-CBV-embedding/js/ast/operation.js"), __webpack_require__(/*! ast/binding */ "../viz/CBV-with-CBV-embedding/js/ast/binding.js"), __webpack_require__(/*! ast/reference */ "../viz/CBV-with-CBV-embedding/js/ast/reference.js"), __webpack_require__(/*! ast/thunk */ "../viz/CBV-with-CBV-embedding/js/ast/thunk.js"), __webpack_require__(/*! parser/lexer */ "../viz/CBV-with-CBV-embedding/js/parser/lexer.js"), __webpack_require__(/*! parser/parser */ "../viz/CBV-with-CBV-embedding/js/parser/parser.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! graph */ "../viz/CBV-with-CBV-embedding/js/graph.js"), __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js"), __webpack_require__(/*! term */ "../viz/CBV-with-CBV-embedding/js/term.js"), __webpack_require__(/*! nodes/atom */ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js"), __webpack_require__(/*! nodes/contract */ "../viz/CBV-with-CBV-embedding/js/nodes/contract.js"), __webpack_require__(/*! nodes/start */ "../viz/CBV-with-CBV-embedding/js/nodes/start.js"), __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! nodes/ops/plus */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js"), __webpack_require__(/*! nodes/ops/times */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js"), __webpack_require__(/*! nodes/ops/and */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js"), __webpack_require__(/*! nodes/ops/or */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js"), __webpack_require__(/*! nodes/ops/not */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js"), __webpack_require__(/*! nodes/ops/equals */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js"), __webpack_require__(/*! nodes/ops/if */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Variable, Operation, Binding, Reference, Thunk, Lexer, Parser, MachineToken, Link, Graph, Group, Term, Atom, Contract, Start, Op, IntOp, BoolOp, PlusOp, TimesOp, AndOp, OrOp, NotOp, EqualsOp, IfOp) {
  var Flag = MachineToken.RewriteFlag();

  var GoIMachine =
  /*#__PURE__*/
  function () {
    function GoIMachine() {
      _classCallCheck(this, GoIMachine);

      this.setMachine(new Graph(), new MachineToken(), 0);
    }

    _createClass(GoIMachine, [{
      key: "setMachine",
      value: function setMachine(graphSet, tokenSet, countSet) {
        this.graph = graphSet;
        window.mainGraph = this.graph; // cheating!

        this.token = tokenSet;
        this.count = countSet;
      }
    }, {
      key: "compile",
      value: function compile(source) {
        var lexer = new Lexer(source + '\0');
        var parser = new Parser(lexer);
        var ast = parser.parse();
        this.count = 0;
        this.graph.clear();
        var start = new Start().addToGroup(this.graph.child);
        var term = this.toGraph(ast, this.graph.child, false);
        var link = new Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
        this.token.reset(link);
      } // translation

    }, {
      key: "toGraph",
      value: function toGraph(ast, group) {
        var graph = this.graph;
        var term = new Term().addToGroup(group);

        if (ast instanceof Thunk) {
          term.box();
          ast = ast.inner;
        } // VARIABLES & ATOMS


        if (ast instanceof Variable) {
          var auxs = [];

          for (var i = 0; i < ast.ctx.length; i++) {
            var c = new Contract().addToGroup(term);
            auxs.push(c);
            if (ast.ctx[i].name == ast.name) var prin = c;
          }

          term.set(prin, auxs); // BINDINGS & REFERENCES
        } else if (ast instanceof Binding || ast instanceof Reference) {
          var body = this.toGraph(ast.body, term, false).addToGroup(term);
          var param = this.toGraph(ast.param, term, false).addToGroup(term);
          var auxs = body.auxs;
          var auxNode = auxs[0];
          auxs.splice(0, 1);
          auxs = auxs.concat(param.auxs);

          if (ast instanceof Reference) {
            var atomNode = new Atom("a").addToGroup(param);
            new Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
            param.prin = atomNode;
          }

          new Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
          auxs = Contract.createDNet(ast.ctx.length, auxs, term);
          term.set(body.prin, auxs); // OPERATIONS
        } else if (ast instanceof Operation) {
          var op = this.toOp(ast.name, ast.active).addToGroup(term);
          var auxs = [];
          var next;

          for (var i = 0; i < ast.sig[0]; i++) {
            next = this.toGraph(ast.eas[i], term).addToGroup(term);
            new Link(op.key, next.prin.key, "_", "_").addToGroup(term);
            auxs = auxs.concat(next.auxs);
          }

          for (var i = 0; i < ast.sig[1]; i++) {
            next = this.toGraph(ast.das[i], term).addToGroup(term);
            var link = new Link(op.key, next.prin.key, "_", "_");
            link.visited = true; // hacking

            link.addToGroup(term);
            auxs = auxs.concat(next.auxs);
          }

          auxs = Contract.createDNet(ast.ctx.length, auxs, term, op);
          term.set(op, auxs);
        }

        return term;
      }
    }, {
      key: "toOp",
      value: function toOp(name, active) {
        if (Number.isInteger(parseInt(name))) {
          return new IntOp(name);
        } else if (name == "true" || name == "false") {
          return new BoolOp(name);
        } else if (name == "+") {
          return new PlusOp();
        } else if (name == "*") {
          return new TimesOp();
        } else if (name == "∧") {
          return new AndOp();
        } else if (name == "∨") {
          return new OrOp();
        } else if (name == "¬") {
          return new NotOp();
        } else if (name == "==") {
          return new EqualsOp();
        } else if (name == "if") {
          return new IfOp();
        } else {
          return new Op(name, active);
        }
      }
    }, {
      key: "quotieningRules",
      value: function quotieningRules() {
        // TODO
        // Loop through all links in the graph
        // Perform quotiening rules
        return null;
      } // machine step

    }, {
      key: "transition",
      value: function transition(graphTxt, linkTxt, flagTxt) {
        if (!finished) {
          this.count++;
          var node = this.graph.findNodeByKey(this.token.link.to);
          var nextLink;

          if (this.token.rewriteFlag == Flag.REWRITE) {
            nextLink = node.rewrite(this.token);
          } else {
            nextLink = this.pass(this.token);
          }

          if (nextLink != null) {
            this.token.setLink(nextLink);
            this.printHistory(graphTxt, linkTxt, flagTxt);
          } else {
            this.token.setLink(null);
            play = false;
            playing = false;
            finished = true;
          }
        }
      }
    }, {
      key: "printHistory",
      value: function printHistory(graphTxt, linkTxt, flagTxt) {
        graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
        linkTxt.val(this.token.link + '\n' + linkTxt.val());
        flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
      }
    }, {
      key: "pass",
      value: function pass(token) {
        // this needs cleaning up!
        var link = token.link;

        if (token.rewriteFlag == Flag.SEARCH) {
          var to = this.graph.findNodeByKey(link.to);
          var outlinks = to.findLinksOutOf();

          if (to instanceof Atom) {
            token.rewriteFlag = Flag.RETURN;
            return link;
          } else if (to instanceof Op) {
            if (outlinks.length == 0) {
              if (to.active) {
                token.rewriteFlag = Flag.REWRITE;
              } else {
                token.rewriteFlag = Flag.RETURN;
              }

              return link;
            } else {
              return outlinks[0];
            }
          } else if (to instanceof Contract) {
            token.rewriteFlag = Flag.REWRITE;
            return link;
          }
        } else if (token.rewriteFlag == Flag.RETURN) {
          var from = this.graph.findNodeByKey(link.from);
          var outlinks = from.findLinksOutOf();

          if (this.doneVisiting(link, outlinks)) {
            // HACKING
            if (from.active) {
              token.rewriteFlag = Flag.REWRITE;
              return from.findLinksInto()[0];
            } else {
              token.rewriteFlag = Flag.RETURN;
              return from.findLinksInto()[0];
            }
          } else {
            token.rewriteFlag = Flag.SEARCH;
            var j = this.findJ(link, outlinks);
            return outlinks[j];
          }
        }

        return link;
      }
    }, {
      key: "doneVisiting",
      value: function doneVisiting(link, links) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var l = _step.value;
            if (!l.visited && l != link) return false;
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

        return true;
      }
    }, {
      key: "findJ",
      value: function findJ(link, list) {
        for (var j = 0; j < list.length; j++) {
          if (!list[j].visited && list[j] != link) return j;
        }

        return null;
      }
    }]);

    return GoIMachine;
  }();

  return GoIMachine;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/graph.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/graph.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// general graph
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group) {
  var Graph =
  /*#__PURE__*/
  function () {
    function Graph() {
      _classCallCheck(this, Graph);

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
    }, {
      key: "findLinkByKeys",
      value: function findLinkByKeys(from, to) {
        var fromNode = this.findNodeByKey(from);
        return fromNode.findLinksOutOf().filter(function (x) {
          return x.to == to;
        })[0];
      }
    }, {
      key: "draw",
      value: function draw(width, height) {
        var str = this.child.draw('\n  ');
        str += '\n';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.allLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var link = _step.value;
            str += link.draw('\n  ');
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

        return 'digraph G {' + '\n  rankdir=BT;' + '\n  edge[arrowhead=none,arrowtail=none];' + '\n  node[fixedsize=true,shape=circle]' + '\n  size="' + width + ',' + height + '";' + '\n  labeldistance=0;' + '\n  nodesep=.175;' + '\n  ranksep=.175;' + '\n' + str + '\n}';
      }
    }]);

    return Graph;
  }();

  return Graph;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/group.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/group.js ***!
  \*************************************************/
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

// general group in a graph (subgraph)
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node) {
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
    }, {
      key: "draw",
      value: function draw(level) {
        var str = "";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;
            str += node.draw(level);
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

        return str;
      }
    }, {
      key: "copy",
      value: function copy() {} // should never be called as all groups are in terms

    }]);

    return Group;
  }(Node);

  return Group;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/link.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Link =
  /*#__PURE__*/
  function () {
    function Link(from, to, fromPort, toPort, colour) {
      _classCallCheck(this, Link);

      this.from = from;
      this.to = to;
      this.fromPort = fromPort;
      this.toPort = toPort;
      this.visited = false; // HACKING

      this.reverse = false;
      this.colour = colour;
      this.penWidth = null;
      this.addToGraph(window.mainGraph); // cheating

      if (colour != "lightgrey") {
        // cheating
        this.addToNode(); // cheating
      }
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
        this.visited = true; // HACKING
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
    }, {
      key: "draw",
      value: function draw(level) {
        var str = level;

        if (!this.reverse) {
          str += this.from + '->' + this.to + '[';
          if (this.fromPort != null) str += 'tailport=' + this.fromPort;
          if (this.toPort != null) str += ',headport=' + this.toPort;
        } else {
          str += this.to + '->' + this.from + '[dir=back';
          if (this.fromPort != null) str += ',headport=' + this.fromPort;
          if (this.toPort != null) str += ',tailport=' + this.toPort;
        }

        if (this.colour != null) str += ',color=' + this.colour;
        if (this.penWidth != null) str += ',penwidth=' + this.penWidth;
        str += '];';
        return str;
      }
    }]);

    return Link;
  }();

  return Link;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/node.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/node.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var showKey = false;
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Node =
  /*#__PURE__*/
  function () {
    function Node(shape, text, name) {
      _classCallCheck(this, Node);

      this.key = null;
      this.shape = shape;
      this.text = text;
      this.name = name; // identifier name or constant name if any

      this.graph = null;
      this.group = null;
      this.width = 0.3;
      this.height = 0.3;
      this.links = [];
      this.addToGraph(window.mainGraph); // cheating!
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
      value: function findLinksInto() {
        var links = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var link = _step.value;
            if (link.to == this.key) links.push(link);
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
      value: function findLinksOutOf() {
        var links = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var link = _step2.value;
            if (link.from == this.key) links.push(link);
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
      key: "findNodesOutOf",
      value: function findNodesOutOf() {
        var _this = this;

        var links = this.findLinksOutOf();
        var nodeKeys = links.map(function (l) {
          return l.to;
        });
        return nodeKeys.map(function (k) {
          return _this.graph.findNodeByKey(k);
        });
      }
    }, {
      key: "copy",
      value: function copy(graph) {
        var newNode = new Node(this.shape, this.text, this.name).addToGraph(graph);
        newNode.width = this.width;
        newNode.height = this.height;
        return newNode;
      } // also delete any connected links

    }, {
      key: "delete",
      value: function _delete() {
        this.group.removeNode(this);
        this.graph.removeNode(this);
      }
    }, {
      key: "draw",
      value: function draw(level) {
        var str = level + this.key + '[label="' + this.text;
        if (showKey) str += ':' + this.key;
        str += '"';
        if (this.shape != null) str += ',shape=' + this.shape;
        if (this.width != null) str += ',width=' + this.width;
        if (this.height != null) str += ',height=' + this.height;
        return str += '];';
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
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js":
/*!******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/atom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js"), __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Node) {
  var Flag = Token.RewriteFlag();

  var Atom =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Atom, _Node);

    function Atom(name) {
      var _this;

      _classCallCheck(this, Atom);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Atom).call(this, "circle", "", name));
      _this.height = 0.1;
      _this.width = 0.1;
      return _this;
    }

    return Atom;
  }(Node);

  return Atom;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/contract.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/contract.js ***!
  \**********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js"), __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js"), __webpack_require__(/*! nodes/atom */ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js"), __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! term */ "../viz/CBV-with-CBV-embedding/js/term.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Node, Atom, Op, Term, Link, Group) {
  var Flag = Token.RewriteFlag();

  var Contract =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Contract, _Node);

    function Contract(name) {
      _classCallCheck(this, Contract);

      return _possibleConstructorReturn(this, _getPrototypeOf(Contract).call(this, "point", "", name));
    }

    _createClass(Contract, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          return this.findLinksOutOf(null)[0];
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var link = token.link;
        var inLinks = this.findLinksInto();
        var outLinks = this.findLinksOutOf();
        var nextLink = outLinks[0];
        var nextNode = this.graph.findNodeByKey(nextLink.to);

        if (nextNode instanceof Contract || nextNode instanceof Atom) {
          inLinks.map(function (l) {
            return l.changeTo(nextNode.key, "_");
          });
          nextLink.delete();
          this.delete();
        } else if (nextNode instanceof Op) {
          var term = new Term().addToGroup(this.group);
          var copy = nextNode.copy().addToGroup(term); // clean up here

          var opLinks = nextNode.findLinksOutOf();
          var auxs = Contract.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);
          link.changeTo(copy.key, "_");

          for (var i = 0; i < opLinks.length; i++) {
            opLinks[i].changeFrom(auxs[i].key, "_");
          }

          term.set(copy, auxs);
        }

        token.rewriteFlag = Flag.SEARCH;
        return link;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Contract(this.name);
      }
    }, {
      key: "draw",
      value: function draw(level) {
        return level + this.key + '[shape=' + this.shape + '];';
      }
    }], [{
      key: "createDNet",
      value: function createDNet(cs, inputs, originalGroup, op) {
        var c;
        var from;
        var to;
        var cList = [];
        var group = new Group();

        for (var n = 0; n < cs; n++) {
          c = new Contract().addToGroup(group);
          cList.push(c);
          if (inputs.length == 0) // maybe this needs to be "more elegant"
            new Link(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
        }

        if (cList.length > 0) {
          for (var i = 0; i < inputs.length; i++) {
            from = inputs[i];
            to = cList[i % cs];
            new Link(from.key, to.key, "_", "_").addToGroup(group);
          }
        }

        group.addToGroup(originalGroup);
        return cList;
      }
    }]);

    return Contract;
  }(Node);

  return Contract;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/op.js":
/*!****************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/op.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js"), __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Node, Link) {
  var Flag = Token.RewriteFlag();

  var Op =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Op, _Node);

    function Op(name, active) {
      var _this;

      _classCallCheck(this, Op);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Op).call(this, null, name, name));
      _this.active = active;
      return _this;
    }

    _createClass(Op, [{
      key: "rewrite",
      value: function rewrite(token) {} // default none for passive ops

    }, {
      key: "copy",
      value: function copy() {
        return new Op(this.name, this.active);
      }
    }]);

    return Op;
  }(Node);

  return Op;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, BoolOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var AndOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(AndOp, _Op);

    function AndOp() {
      _classCallCheck(this, AndOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(AndOp).call(this, "∧", true));
    }

    _createClass(AndOp, [{
      key: "copy",
      value: function copy() {
        return new AndOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = outLinks.reduce(function (sum, x) {
          return sum && BoolOp.parseBoolean(_this.graph.findNodeByKey(x.to).name);
        }, true);
        var newNode = new BoolOp(b, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return AndOp;
  }(Op);

  return AndOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js ***!
  \**********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op) {
  var BoolOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(BoolOp, _Op);

    function BoolOp(b) {
      _classCallCheck(this, BoolOp);

      b = BoolOp.parseBoolean(b);
      return _possibleConstructorReturn(this, _getPrototypeOf(BoolOp).call(this, b, false));
    }

    _createClass(BoolOp, [{
      key: "copy",
      value: function copy() {
        return new BoolOp();
      }
    }], [{
      key: "parseBoolean",
      value: function parseBoolean(b) {
        if (b == "false" || b == 0) {
          return false;
        } else {
          return true;
        }
      }
    }]);

    return BoolOp;
  }(Op);

  return BoolOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js":
/*!************************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js ***!
  \************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, BoolOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var EqualsOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(EqualsOp, _Op);

    function EqualsOp() {
      _classCallCheck(this, EqualsOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(EqualsOp).call(this, "==", true));
    }

    _createClass(EqualsOp, [{
      key: "copy",
      value: function copy() {
        return new EqualsOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var left = this.graph.findNodeByKey(outLinks[0].to).name;
        var right = this.graph.findNodeByKey(outLinks[1].to).name;
        var b = left == right;
        var newNode = new BoolOp(b, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return EqualsOp;
  }(Op);

  return EqualsOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js ***!
  \********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, BoolOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var IfOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(IfOp, _Op);

    function IfOp() {
      _classCallCheck(this, IfOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(IfOp).call(this, "if", true));
    }

    _createClass(IfOp, [{
      key: "copy",
      value: function copy() {
        return new IfOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var name = this.graph.findNodeByKey(outLinks[0].to).name;
        var keep;
        var del;

        if (BoolOp.parseBoolean(name)) {
          keep = 1;
          del = 2;
        } else {
          keep = 2;
          del = 1;
        }

        outLinks[del].delete();
        var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks[0].delete();
        this.graph.findNodeByKey(outLinks[0].to).delete();
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return IfOp;
  }(Op);

  return IfOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op) {
  var IntOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(IntOp, _Op);

    function IntOp(n) {
      _classCallCheck(this, IntOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntOp).call(this, n, false));
    }

    return IntOp;
  }(Op);

  return IntOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, BoolOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var NotOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(NotOp, _Op);

    function NotOp() {
      _classCallCheck(this, NotOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(NotOp).call(this, "¬", true));
    }

    _createClass(NotOp, [{
      key: "copy",
      value: function copy() {
        return new NotOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = !BoolOp.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
        var newNode = new BoolOp(b, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return NotOp;
  }(Op);

  return NotOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js ***!
  \********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, BoolOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var OrOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(OrOp, _Op);

    function OrOp() {
      _classCallCheck(this, OrOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(OrOp).call(this, "∨", true));
    }

    _createClass(OrOp, [{
      key: "copy",
      value: function copy() {
        return new OrOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = outLinks.reduce(function (sum, x) {
          return sum || BoolOp.parseBoolean(_this.graph.findNodeByKey(x.to).name);
        }, false);
        var newNode = new BoolOp(b, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return OrOp;
  }(Op);

  return OrOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js ***!
  \**********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, IntOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var PlusOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(PlusOp, _Op);

    function PlusOp() {
      _classCallCheck(this, PlusOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(PlusOp).call(this, "+", true));
    }

    _createClass(PlusOp, [{
      key: "copy",
      value: function copy() {
        return new PlusOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var n = outLinks.reduce(function (sum, x) {
          return sum + _this.graph.findNodeByKey(x.to).name;
        }, 0);
        var newNode = new IntOp(n, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return PlusOp;
  }(Op);

  return PlusOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js":
/*!***********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js ***!
  \***********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js"), __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js"), __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Op, IntOp, Link, Token) {
  var Flag = Token.RewriteFlag();

  var TimesOp =
  /*#__PURE__*/
  function (_Op) {
    _inherits(TimesOp, _Op);

    function TimesOp() {
      _classCallCheck(this, TimesOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(TimesOp).call(this, "*", true));
    }

    _createClass(TimesOp, [{
      key: "copy",
      value: function copy() {
        return new TimesOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var n = outLinks.reduce(function (sum, x) {
          return sum * _this.graph.findNodeByKey(x.to).name;
        }, 1);
        var newNode = new IntOp(n, false).addToGroup(this.group);
        var newLink = new Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = Flag.SEARCH;
        return newLink;
      }
    }]);

    return TimesOp;
  }(Op);

  return TimesOp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/start.js":
/*!*******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/start.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js"), __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Node, Token) {
  var Flag = Token.Flag;

  var Start =
  /*#__PURE__*/
  function (_Node) {
    _inherits(Start, _Node);

    function Start() {
      _classCallCheck(this, Start);

      return _possibleConstructorReturn(this, _getPrototypeOf(Start).call(this, "point", ""));
    }

    _createClass(Start, [{
      key: "transition",
      value: function transition(token) {
        return this.findLinksOutOf(null)[0];
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Start();
      }
    }, {
      key: "draw",
      value: function draw(level) {
        return level + this.key + '[shape=' + this.shape + '];';
      }
    }]);

    return Start;
  }(Node);

  return Start;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/lexer.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/lexer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! parser/token */ "../viz/CBV-with-CBV-embedding/js/parser/token.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token) {
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
          case ',':
            this._token = new Token(Token.COMMA);
            break;

          case ';':
            this._token = new Token(Token.SEMIC);
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

          case '=':
            this._token = new Token(Token.DEF);
            break;

          default:
            // text for string
            if (/[a-zA-Z]|'/.test(c)) {
              var str = '';

              do {
                str += c;
                c = this._nextChar();
              } while (/[a-zA-Z]|'|_/.test(c)); // put back the last char which is not part of the identifier


              this._index--;
              if (str == "bind") this._token = new Token(Token.BIND);else if (str == "in") this._token = new Token(Token.IN);else if (str == "new") this._token = new Token(Token.NEW);else if (str == "PLUS") this._token = new Token(Token.PLUS);else if (str == "TIMES") this._token = new Token(Token.TIMES);else if (str == "AND") this._token = new Token(Token.AND);else if (str == "OR") this._token = new Token(Token.OR);else if (str == "NOT") this._token = new Token(Token.NOT);else if (str == "EQUALS") this._token = new Token(Token.EQUALS);else if (str == "IF") this._token = new Token(Token.IF);else if (str == "TRUE") this._token = new Token(Token.TRUE, true);else if (str == "FALSE") this._token = new Token(Token.FALSE, false);else this._token = new Token(Token.LCID, str);
            } // text for numbers
            else if (/[0-9]/.test(c)) {
                var _str = '';

                do {
                  _str += c;
                  c = this._nextChar();
                } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


                this._index--;
                this._token = new Token(Token.INT, parseInt(_str));
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
      key: "value",
      value: function value() {
        return this._token.value;
      }
    }, {
      key: "lookahead",
      value: function lookahead() {
        return this._token;
      }
    }, {
      key: "lookaheadType",
      value: function lookaheadType() {
        return this._token.type;
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

/***/ "../viz/CBV-with-CBV-embedding/js/parser/parser.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/parser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! parser/token */ "../viz/CBV-with-CBV-embedding/js/parser/token.js"), __webpack_require__(/*! ast/var */ "../viz/CBV-with-CBV-embedding/js/ast/var.js"), __webpack_require__(/*! ast/operation */ "../viz/CBV-with-CBV-embedding/js/ast/operation.js"), __webpack_require__(/*! ast/binding */ "../viz/CBV-with-CBV-embedding/js/ast/binding.js"), __webpack_require__(/*! ast/reference */ "../viz/CBV-with-CBV-embedding/js/ast/reference.js"), __webpack_require__(/*! ast/thunk */ "../viz/CBV-with-CBV-embedding/js/ast/thunk.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Token, Var, Operation, Binding, Reference, Thunk) {
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
      } //  T ::= BIND LCID DEF term IN term  (BIND x = PARAM in BODY)
      //      | NEW  LCID IN term           (NEW x = PARAM in BODY)
      //      | op? ( EAS ; DAS )

    }, {
      key: "term",
      value: function term(ctx, thunk) {
        if (thunk) {
          var inner = this.term(ctx);
          return new Thunk(ctx, inner);
        } else {
          if (this.lexer.skip(Token.BIND)) {
            var id = this.term(ctx);
            id.ctx = [id].concat(id.ctx);
            this.lexer.match(Token.DEF);
            var P = this.term(ctx);
            this.lexer.match(Token.IN);
            var B = this.term([id].concat(ctx));
            return new Binding(ctx, id, P, B);
          } else if (this.lexer.skip(Token.NEW)) {
            var _id = this.term(ctx);

            _id.ctx = [_id].concat(_id.ctx);
            this.lexer.match(Token.DEF);

            var _P = this.term(ctx);

            this.lexer.match(Token.IN);

            var _B = this.term([_id].concat(ctx));

            return new Reference(ctx, _id, _P, _B);
          } else {
            return this.atom(ctx);
          }
        }
      } // atom ::= LPAREN term RPAREN
      //        | LCID

    }, {
      key: "atom",
      value: function atom(ctx) {
        if (this.lexer.skip(Token.LPAREN)) {
          var term = this.term(ctx);
          this.lexer.match(Token.RPAREN);
          return term;
        } else if (this.lexer.next(Token.LCID)) {
          var id = this.lexer.token(Token.LCID);
          return new Var(ctx, id);
        } else {
          return this.operation(ctx);
        }
      } // BUILT-IN OPERATIONS

    }, {
      key: "operation",
      value: function operation(ctx) {
        var name;
        var sig;
        var active;
        var eas = [];
        var das = [];
        var token = this.lexer.lookaheadType();

        switch (token) {
          case Token.PLUS:
            name = "+";
            sig = [2, 0];
            active = true;
            break;

          case Token.TIMES:
            name = "*";
            sig = [2, 0];
            active = true;
            break;

          case Token.AND:
            name = "∧";
            sig = [2, 0];
            active = true;
            break;

          case Token.OR:
            name = "∨";
            sig = [2, 0];
            active = true;
            break;

          case Token.NOT:
            name = "¬";
            sig = [1, 0];
            active = true;
            break;

          case Token.EQUALS:
            name = "==";
            sig = [2, 0];
            active = true;
            break;

          case Token.IF:
            name = "if";
            sig = [1, 2];
            active = true;
            break;

          default:
            name = this.lexer.value();
            sig = [0, 0];
            active = false;
            break;
        }

        this.lexer.match(token);

        if (sig[0] > 0) {
          this.lexer.match(Token.LPAREN);
          eas = this.gatherArgs(ctx, sig[0], false);
          if (sig[1] == 0) this.lexer.match(Token.RPAREN);
        }

        if (sig[1] > 0) {
          if (sig[0] == 0) this.lexer.match(Token.LPAREN);
          this.lexer.match(Token.SEMIC);
          das = this.gatherArgs(ctx, sig[1], true);
          this.lexer.match(Token.RPAREN);
        }

        return new Operation(ctx, sig, name, active, eas, das);
      }
    }, {
      key: "gatherArgs",
      value: function gatherArgs(ctx, type, thunk) {
        var args = [];

        for (var i = 0; i < type; i++) {
          var term = this.term(ctx, thunk);
          args.push(term);

          if (this.lexer.next(Token.COMMA)) {
            this.lexer.match(Token.COMMA);
          }
        }

        return args;
      }
    }]);

    return Parser;
  }();

  return Parser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/token.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/token.js ***!
  \********************************************************/
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

  ['EOF', // we augment the tokens with EOF, to indicate the end of the input.
  'LCID', 'LPAREN', 'RPAREN', 'SEMIC', 'BIND', 'NEW', 'DEF', 'IN', 'PLUS', 'TIMES', 'INT', 'AND', 'OR', 'NOT', 'TRUE', 'FALSE', 'EQUALS', 'IF'].forEach(function (token) {
    return Token[token] = token;
  });
  return Token;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/term.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/term.js ***!
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

// specific group for a term in the calculus
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Group) {
  var Term =
  /*#__PURE__*/
  function (_Group) {
    _inherits(Term, _Group);

    function Term(prin, auxs) {
      var _this;

      _classCallCheck(this, Term);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Term).call(this));
      _this.prin = null;

      _this.set(prin, auxs);

      _this.boxed = false;
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
      key: "box",
      value: function box() {
        this.boxed = true;
        return this.prin;
      }
    }, {
      key: "unbox",
      value: function unbox() {
        this.boxed = false;
        return this.prin;
      }
    }, {
      key: "draw",
      value: function draw(level) {
        if (this.boxed) {
          var str = "";
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var node = _step.value;
              str += node.draw(level + '  ');
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

          return level + 'subgraph cluster_' + this.key + ' {' + level + '  graph[style=dotted];' + str + level + '};';
        }

        return _get(_getPrototypeOf(Term.prototype), "draw", this).call(this, level);
      }
    }]);

    return Term;
  }(Group);

  return Term;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/token.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/token.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var Flag = {
    SEARCH: '?',
    REWRITE: '↯',
    RETURN: '✓'
  };

  var MachineToken =
  /*#__PURE__*/
  function () {
    _createClass(MachineToken, null, [{
      key: "RewriteFlag",
      value: function RewriteFlag() {
        return Flag;
      }
    }]);

    function MachineToken() {
      _classCallCheck(this, MachineToken);

      this.link = null;
      this.rewriteFlag = null;
      this.reset();
    }

    _createClass(MachineToken, [{
      key: "setLink",
      value: function setLink(link) {
        if (this.link != null) this.link.clearFocus();
        this.link = link;

        if (this.link != null) {
          this.link.focus("red");
        }
      }
    }, {
      key: "reset",
      value: function reset(link) {
        this.setLink(link);
        this.rewriteFlag = Flag.SEARCH;
      }
    }]);

    return MachineToken;
  }();

  return MachineToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map