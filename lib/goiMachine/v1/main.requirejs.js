window["goi-machine"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/goiMachine/v1/main.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/goiMachine/v1/main.prepack.js":
/*!*******************************************!*\
  !*** ./lib/goiMachine/v1/main.prepack.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_46, _46, _3O, _3O];
        break;

      case 1:
        __captured = [_48, _48, _3Q, _3Q, _3R, _3R];
        break;

      case 2:
        __captured = [_4C, _4C, _3Y, _3Y];
        break;

      case 3:
        __captured = [_4E, _4E, _3a, _3a];
        break;

      case 4:
        __captured = [_4G, _4G, _3c, _3c];
        break;

      case 5:
        __captured = [_4I, _4I, _3e, _3e];
        break;

      case 6:
        __captured = [_4K, _4K, _3g, _3g];
        break;

      case 7:
        __captured = [_4M, _4M, _3i, _3i];
        break;

      case 8:
        __captured = [_4O, _4O, _3k, _3k];
        break;

      case 9:
        __captured = [_4Q, _4Q, _3m, _3m];
        break;

      case 10:
        __captured = [_4S, _4S, _3o, _3o];
        break;

      case 11:
        __captured = [_4U, _4U, _3q, _3q];
        break;

      case 12:
        __captured = [_4W, _4W, _3s, _3s];
        break;

      case 13:
        __captured = [_4Y, _4Y, _3u, _3u];
        break;

      case 14:
        __captured = [_4a, _4a, _3w, _3w];
        break;

      case 15:
        __captured = [_4c, _4c, _3y, _3y];
        break;

      case 16:
        __captured = [_4e, _4e, _40, _40];
        break;

      case 17:
        __captured = [_4g, _4g, _42, _42];
        break;

      case 18:
        __captured = [_4i, _4i, _44, _44];
        break;

      case 19:
        __captured = [_4A, _4A, _3U, _3U, _3V, _3V];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(20);

  var $$0 = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0 = this;

  var _$1 = _$0.Object;
  var _$2 = _$1.defineProperty;
  var _$3 = _$1.setPrototypeOf;

  var _K = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4E = function (obj) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_4[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_4[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_4[1](obj);
  };

  var _2m = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3Z = function (self, call) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    if (call && (__captured__scope_4[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4F(self);
  };

  var _4F = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3a = function (o) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    __captured__scope_4[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4[3](o);
  };

  var _3W = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2F = function (ctx) {
    _3W(this, _2F);

    this.ctx = ctx;
  };

  var _e = _2F.prototype;

  var _f = function (ctx, name) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    var _this;

    _2m(this, _f);

    _this = _3Z(this, __captured__scope_4[3](_f).call(this, ctx));
    _this.name = name;
    return _this;
  };

  var _4O = function (obj) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_9[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_9[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_9[1](obj);
  };

  var _2r = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3j = function (self, call) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    if (call && (__captured__scope_9[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4P(self);
  };

  var _4P = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3k = function (o) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    __captured__scope_9[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9[3](o);
  };

  var _q = function (ctx, sig, name, active, eas, das) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    var _this;

    _2r(this, _q);

    _this = _3j(this, __captured__scope_9[3](_q).call(this, ctx));
    _this.sig = sig;
    _this.name = name;
    _this.active = active;
    _this.eas = eas;
    _this.das = das;
    return _this;
  };

  var _4I = function (obj) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_6[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_6[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_6[1](obj);
  };

  var _2o = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3d = function (self, call) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    if (call && (__captured__scope_6[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4J(self);
  };

  var _4J = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3e = function (o) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    __captured__scope_6[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6[3](o);
  };

  var _k = function (ctx, id, param, body) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    var _this;

    _2o(this, _k);

    _this = _3d(this, __captured__scope_6[3](_k).call(this, ctx));
    _this.id = id;
    _this.param = param;
    _this.body = body;
    return _this;
  };

  var _4K = function (obj) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_7[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_7[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_7[1](obj);
  };

  var _2p = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3f = function (self, call) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    if (call && (__captured__scope_7[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4L(self);
  };

  var _4L = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3g = function (o) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    __captured__scope_7[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7[3](o);
  };

  var _m = function (ctx, id, param, body) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    var _this;

    _2p(this, _m);

    _this = _3f(this, __captured__scope_7[3](_m).call(this, ctx));
    _this.id = id;
    _this.param = param;
    _this.body = body;
    return _this;
  };

  var _4C = function (obj) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_3[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_3[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_3[1](obj);
  };

  var _2l = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3X = function (self, call) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    if (call && (__captured__scope_3[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4D(self);
  };

  var _4D = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3Y = function (o) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    __captured__scope_3[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3[3](o);
  };

  var _c = function (ctx, inner) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    var _this;

    _2l(this, _c);

    _this = _3X(this, __captured__scope_3[3](_c).call(this, ctx));
    _this.inner = inner;
    return _this;
  };

  var _2f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _45 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _32 = function (type, value, pred) {
    _45(this, _32);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _Q = function (input) {
    _2f(this, _Q);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _R = _Q.prototype;

  var _1N = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _1O = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case ',':
        this._token = new _32(_32.COMMA);
        break;

      case ';':
        this._token = new _32(_32.SEMIC);
        break;

      case '(':
        this._token = new _32(_32.LPAREN);
        break;

      case ')':
        this._token = new _32(_32.RPAREN);
        break;

      case '\0':
        this._token = new _32(_32.EOF);
        break;

      case '=':
        this._token = new _32(_32.DEF);
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
          if (str == "bind") this._token = new _32(_32.BIND);else if (str == "in") this._token = new _32(_32.IN);else if (str == "new") this._token = new _32(_32.NEW);else if (str == "PLUS") this._token = new _32(_32.PLUS);else if (str == "TIMES") this._token = new _32(_32.TIMES);else if (str == "AND") this._token = new _32(_32.AND);else if (str == "OR") this._token = new _32(_32.OR);else if (str == "NOT") this._token = new _32(_32.NOT);else if (str == "EQUALS") this._token = new _32(_32.EQUALS);else if (str == "IF") this._token = new _32(_32.IF);else if (str == "TRUE") this._token = new _32(_32.TRUE, true);else if (str == "FALSE") this._token = new _32(_32.FALSE, false);else this._token = new _32(_32.LCID, str);
        } // text for numbers
        else if (/[0-9]/.test(c)) {
            var _str = '';

            do {
              _str += c;
              c = this._nextChar();
            } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


            this._index--;
            this._token = new _32(_32.INT, parseInt(_str));
          } else {
            this.fail();
          }

    }
  };

  var _1P = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _1Q = function () {
    return this._token.value;
  };

  var _1R = function () {
    return this._token;
  };

  var _1S = function () {
    return this._token.type;
  };

  var _1T = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _1U = function (type) {
    return this._token.type == type;
  };

  var _1V = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _1W = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _2g = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _S = function (lexer) {
    _2g(this, _S);

    this.lexer = lexer;
  };

  var _T = _S.prototype;

  var _1X = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_32.EOF);
    return result;
  };

  var _1Y = function (ctx, thunk) {
    if (thunk) {
      var inner = this.term(ctx);
      return new _c(ctx, inner);
    } else {
      if (this.lexer.skip(_32.BIND)) {
        var id = this.term(ctx);
        id.ctx = [id].concat(id.ctx);
        this.lexer.match(_32.DEF);
        var P = this.term(ctx);
        this.lexer.match(_32.IN);
        var B = this.term([id].concat(ctx));
        return new _k(ctx, id, P, B);
      } else if (this.lexer.skip(_32.NEW)) {
        var _id = this.term(ctx);

        _id.ctx = [_id].concat(_id.ctx);
        this.lexer.match(_32.DEF);

        var _P = this.term(ctx);

        this.lexer.match(_32.IN);

        var _B = this.term([_id].concat(ctx));

        return new _m(ctx, _id, _P, _B);
      } else {
        return this.atom(ctx);
      }
    }
  };

  var _1Z = function (ctx) {
    if (this.lexer.skip(_32.LPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_32.RPAREN);
      return term;
    } else if (this.lexer.next(_32.LCID)) {
      var id = this.lexer.token(_32.LCID);
      return new _f(ctx, id);
    } else {
      return this.operation(ctx);
    }
  };

  var _1a = function (ctx) {
    var name;
    var sig;
    var active;
    var eas = [];
    var das = [];
    var token = this.lexer.lookaheadType();

    switch (token) {
      case _32.PLUS:
        name = "+";
        sig = [2, 0];
        active = true;
        break;

      case _32.TIMES:
        name = "*";
        sig = [2, 0];
        active = true;
        break;

      case _32.AND:
        name = "∧";
        sig = [2, 0];
        active = true;
        break;

      case _32.OR:
        name = "∨";
        sig = [2, 0];
        active = true;
        break;

      case _32.NOT:
        name = "¬";
        sig = [1, 0];
        active = true;
        break;

      case _32.EQUALS:
        name = "==";
        sig = [2, 0];
        active = true;
        break;

      case _32.IF:
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
      this.lexer.match(_32.LPAREN);
      eas = this.gatherArgs(ctx, sig[0], false);
      if (sig[1] == 0) this.lexer.match(_32.RPAREN);
    }

    if (sig[1] > 0) {
      if (sig[0] == 0) this.lexer.match(_32.LPAREN);
      this.lexer.match(_32.SEMIC);
      das = this.gatherArgs(ctx, sig[1], true);
      this.lexer.match(_32.RPAREN);
    }

    return new _q(ctx, sig, name, active, eas, das);
  };

  var _1b = function (ctx, type, thunk) {
    var args = [];

    for (var i = 0; i < type; i++) {
      var term = this.term(ctx, thunk);
      args.push(term);

      if (this.lexer.next(_32.COMMA)) {
        this.lexer.match(_32.COMMA);
      }
    }

    return args;
  };

  var _2e = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _N = function () {
    _2e(this, _N);

    this.link = null;
    this.rewriteFlag = null;
    this.reset();
  };

  var _O = _N.prototype;

  var _1K = function () {
    return _G;
  };

  var _1L = function (link) {
    if (this.link != null) this.link.clearFocus();
    this.link = link;

    if (this.link != null) {
      this.link.focus("red");
    }
  };

  var _1M = function (link) {
    this.setLink(link);
    this.rewriteFlag = _G.SEARCH;
  };

  var _2j = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _X = function (from, to, fromPort, toPort, colour) {
    _2j(this, _X);

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
  };

  var _Y = _X.prototype;

  var _1s = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1t = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1u = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1v = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _1w = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _1x = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1y = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _1z = function () {
    this.colour = null;
    this.penWidth = null;
    this.visited = true; // HACKING
  };

  var _20 = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _21 = function () {
    return this.from + "->" + this.to;
  };

  var _22 = function (level) {
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
  };

  var _2d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4A = function (obj) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_K[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_K[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_K[1](obj);
  };

  var _3S = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3T = function (self, call) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    if (call && (__captured__scope_K[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4B(self);
  };

  var _4B = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3V = function (target, property, receiver) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_K[5] = Reflect.get;
    } else {
      __captured__scope_K[5] = function _get(target, property, receiver) {
        var base = _4l(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_K[5](target, property, receiver || target);
  };

  var _4l = function (object, property) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_K[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _3U = function (o) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    __captured__scope_K[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_K[3](o);
  };

  var _3M = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1r = function (shape, text, name) {
    _3M(this, _1r);

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
  };

  var _W = _1r.prototype;

  var _1f = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1g = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1h = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _1i = function () {
    return this.links;
  };

  var _1j = function () {
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
  };

  var _1k = function () {
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
  };

  var _1l = function () {
    var _this = this;

    var links = this.findLinksOutOf();
    var nodeKeys = links.map(function (l) {
      return l.to;
    });
    return nodeKeys.map(function (k) {
      return _this.graph.findNodeByKey(k);
    });
  };

  var _1m = function (graph) {
    var newNode = new _1r(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
    return newNode;
  };

  var _1n = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _1o = function (level) {
    var str = level + this.key + '[label="' + this.text;
    ;
    str += '"';
    if (this.shape != null) str += ',shape=' + this.shape;
    if (this.width != null) str += ',width=' + this.width;
    if (this.height != null) str += ',height=' + this.height;
    return str += '];';
  };

  var _1p = function (token, link) {
    return link;
  };

  var _1q = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _27 = function () {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    var _this;

    _3S(this, _27);

    _this = _3T(this, __captured__scope_K[3](_27).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _28 = function (node) {
    this.nodes.push(node);
  };

  var _29 = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _2A = function (link) {
    this.links.push(link);
  };

  var _2B = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _2C = function () {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_K[5](__captured__scope_K[3](_27.prototype), "delete", this).call(this);
  };

  var _2D = function (level) {
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
  };

  var _2E = function () {};

  var _L = function () {
    _2d(this, _L);

    this.clear();
  };

  var _M = _L.prototype;

  var _1C = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _27();
  };

  var _1D = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _1E = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _1F = function (key) {
    return this.allNodes.get(key);
  };

  var _1G = function (link) {
    this.allLinks.push(link);
  };

  var _1H = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _1I = function (from, to) {
    var fromNode = this.findNodeByKey(from);
    return fromNode.findLinksOutOf().filter(function (x) {
      return x.to == to;
    })[0];
  };

  var _1J = function (width, height) {
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
  };

  var _48 = function (obj) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_2[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_2[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_2[1](obj);
  };

  var _2k = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3P = function (self, call) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (call && (__captured__scope_2[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _49(self);
  };

  var _49 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3R = function (target, property, receiver) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_2[5] = Reflect.get;
    } else {
      __captured__scope_2[5] = function _get(target, property, receiver) {
        var base = _4k(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_2[5](target, property, receiver || target);
  };

  var _4k = function (object, property) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_2[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _3Q = function (o) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    __captured__scope_2[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2[3](o);
  };

  var _Z = function (prin, auxs) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    var _this;

    _2k(this, _Z);

    _this = _3P(this, __captured__scope_2[3](_Z).call(this));
    _this.prin = null;

    _this.set(prin, auxs);

    _this.boxed = false;
    return _this;
  };

  var _23 = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _24 = function () {
    this.boxed = true;
    return this.prin;
  };

  var _25 = function () {
    this.boxed = false;
    return this.prin;
  };

  var _26 = function (level) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

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

    return __captured__scope_2[5](__captured__scope_2[3](_Z.prototype), "draw", this).call(this, level);
  };

  var _4M = function (obj) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_8[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_8[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_8[1](obj);
  };

  var _2q = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3h = function (self, call) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (call && (__captured__scope_8[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4N(self);
  };

  var _4N = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3i = function (o) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    __captured__scope_8[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8[3](o);
  };

  var _o = function (name) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    var _this;

    _2q(this, _o);

    _this = _3h(this, __captured__scope_8[3](_o).call(this, "circle", "", name));
    _this.height = 0.1;
    _this.width = 0.1;
    return _this;
  };

  var _4G = function (obj) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_5[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_5[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_5[1](obj);
  };

  var _2n = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3b = function (self, call) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (call && (__captured__scope_5[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4H(self);
  };

  var _4H = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3c = function (o) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    __captured__scope_5[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5[3](o);
  };

  var _4i = function (obj) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_J[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_J[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_J[1](obj);
  };

  var _31 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _43 = function (self, call) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    if (call && (__captured__scope_J[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4j(self);
  };

  var _4j = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _44 = function (o) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    __captured__scope_J[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_J[3](o);
  };

  var _1B = function (name, active) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    var _this;

    _31(this, _1B);

    _this = _43(this, __captured__scope_J[3](_1B).call(this, null, name, name));
    _this.active = active;
    return _this;
  };

  var _2L = function (token) {};

  var _2M = function () {
    return new _1B(this.name, this.active);
  };

  var _h = function (name) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    _2n(this, _h);

    return _3b(this, __captured__scope_5[3](_h).call(this, "point", "", name));
  };

  var _2G = function (token, link) {
    if (link.to == this.key) {
      return this.findLinksOutOf(null)[0];
    }
  };

  var _2H = function (token) {
    var link = token.link;
    var inLinks = this.findLinksInto();
    var outLinks = this.findLinksOutOf();
    var nextLink = outLinks[0];
    var nextNode = this.graph.findNodeByKey(nextLink.to);

    if (nextNode instanceof _h || nextNode instanceof _o) {
      inLinks.map(function (l) {
        return l.changeTo(nextNode.key, "_");
      });
      nextLink.delete();
      this.delete();
    } else if (nextNode instanceof _1B) {
      var term = new _Z().addToGroup(this.group);
      var copy = nextNode.copy().addToGroup(term); // clean up here

      var opLinks = nextNode.findLinksOutOf();

      var auxs = _h.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);

      link.changeTo(copy.key, "_");

      for (var i = 0; i < opLinks.length; i++) {
        opLinks[i].changeFrom(auxs[i].key, "_");
      }

      term.set(copy, auxs);
    }

    token.rewriteFlag = _G.SEARCH;
    return link;
  };

  var _2I = function () {
    return new _h(this.name);
  };

  var _2J = function (level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _2K = function (cs, inputs, originalGroup, op) {
    var c;
    var from;
    var to;
    var cList = [];
    var group = new _27();

    for (var n = 0; n < cs; n++) {
      c = new _h().addToGroup(group);
      cList.push(c);
      if (inputs.length == 0) // maybe this needs to be "more elegant"
        new _X(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
    }

    if (cList.length > 0) {
      for (var i = 0; i < inputs.length; i++) {
        from = inputs[i];
        to = cList[i % cs];
        new _X(from.key, to.key, "_", "_").addToGroup(group);
      }
    }

    group.addToGroup(originalGroup);
    return cList;
  };

  var _46 = function (obj) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_1[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_1[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_1[1](obj);
  };

  var _2i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3N = function (self, call) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (call && (__captured__scope_1[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _47(self);
  };

  var _47 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3O = function (o) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    __captured__scope_1[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_1[3](o);
  };

  var _U = function () {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    _2i(this, _U);

    return _3N(this, __captured__scope_1[3](_U).call(this, "point", ""));
  };

  var _1c = function (token) {
    return this.findLinksOutOf(null)[0];
  };

  var _1d = function () {
    return new _U();
  };

  var _1e = function (level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _4Q = function (obj) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_A[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_A[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_A[1](obj);
  };

  var _2s = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3l = function (self, call) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    if (call && (__captured__scope_A[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4R(self);
  };

  var _4R = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3m = function (o) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    __captured__scope_A[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A[3](o);
  };

  var _s = function (n) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    _2s(this, _s);

    return _3l(this, __captured__scope_A[3](_s).call(this, n, false));
  };

  var _4S = function (obj) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_B[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_B[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_B[1](obj);
  };

  var _2t = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3n = function (self, call) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    if (call && (__captured__scope_B[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4T(self);
  };

  var _4T = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3o = function (o) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    __captured__scope_B[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B[3](o);
  };

  var _v = function (b) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    _2t(this, _v);

    b = _v.parseBoolean(b);
    return _3n(this, __captured__scope_B[3](_v).call(this, b, false));
  };

  var _2N = function () {
    return new _v();
  };

  var _2O = function (b) {
    if (b == "false" || b == 0) {
      return false;
    } else {
      return true;
    }
  };

  var _4U = function (obj) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_C[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_C[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_C[1](obj);
  };

  var _2u = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3p = function (self, call) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    if (call && (__captured__scope_C[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4V(self);
  };

  var _4V = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3q = function (o) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    __captured__scope_C[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C[3](o);
  };

  var _x = function () {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    _2u(this, _x);

    return _3p(this, __captured__scope_C[3](_x).call(this, "+", true));
  };

  var _2P = function () {
    return new _x();
  };

  var _2Q = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum + _this.graph.findNodeByKey(x.to).name;
    }, 0);
    var newNode = new _s(n, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4W = function (obj) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_D[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_D[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_D[1](obj);
  };

  var _2v = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3r = function (self, call) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    if (call && (__captured__scope_D[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4X(self);
  };

  var _4X = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3s = function (o) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    __captured__scope_D[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D[3](o);
  };

  var _z = function () {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    _2v(this, _z);

    return _3r(this, __captured__scope_D[3](_z).call(this, "*", true));
  };

  var _2R = function () {
    return new _z();
  };

  var _2S = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum * _this.graph.findNodeByKey(x.to).name;
    }, 1);
    var newNode = new _s(n, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4Y = function (obj) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_E[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_E[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_E[1](obj);
  };

  var _2w = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3t = function (self, call) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    if (call && (__captured__scope_E[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4Z(self);
  };

  var _4Z = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3u = function (o) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    __captured__scope_E[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E[3](o);
  };

  var _11 = function () {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    _2w(this, _11);

    return _3t(this, __captured__scope_E[3](_11).call(this, "∧", true));
  };

  var _2T = function () {
    return new _11();
  };

  var _2U = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum && _v.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, true);
    var newNode = new _v(b, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4a = function (obj) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_F[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_F[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_F[1](obj);
  };

  var _2x = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3v = function (self, call) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    if (call && (__captured__scope_F[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4b(self);
  };

  var _4b = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3w = function (o) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    __captured__scope_F[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F[3](o);
  };

  var _13 = function () {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    _2x(this, _13);

    return _3v(this, __captured__scope_F[3](_13).call(this, "∨", true));
  };

  var _2V = function () {
    return new _13();
  };

  var _2W = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum || _v.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, false);
    var newNode = new _v(b, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4c = function (obj) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_G[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_G[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_G[1](obj);
  };

  var _2y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3x = function (self, call) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (call && (__captured__scope_G[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4d(self);
  };

  var _4d = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3y = function (o) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    __captured__scope_G[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G[3](o);
  };

  var _15 = function () {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    _2y(this, _15);

    return _3x(this, __captured__scope_G[3](_15).call(this, "¬", true));
  };

  var _2X = function () {
    return new _15();
  };

  var _2Y = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = !_v.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
    var newNode = new _v(b, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4e = function (obj) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_H[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_H[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_H[1](obj);
  };

  var _2z = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3z = function (self, call) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    if (call && (__captured__scope_H[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4f(self);
  };

  var _4f = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _40 = function (o) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    __captured__scope_H[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_H[3](o);
  };

  var _17 = function () {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    _2z(this, _17);

    return _3z(this, __captured__scope_H[3](_17).call(this, "==", true));
  };

  var _2Z = function () {
    return new _17();
  };

  var _2a = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var left = this.graph.findNodeByKey(outLinks[0].to).name;
    var right = this.graph.findNodeByKey(outLinks[1].to).name;
    var b = left == right;
    var newNode = new _v(b, false).addToGroup(this.group);
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _4g = function (obj) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_I[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_I[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_I[1](obj);
  };

  var _30 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _41 = function (self, call) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    if (call && (__captured__scope_I[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4h(self);
  };

  var _4h = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _42 = function (o) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    __captured__scope_I[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_I[3](o);
  };

  var _19 = function () {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    _30(this, _19);

    return _41(this, __captured__scope_I[3](_19).call(this, "if", true));
  };

  var _2b = function () {
    return new _19();
  };

  var _2c = function (token) {
    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var name = this.graph.findNodeByKey(outLinks[0].to).name;
    var keep;
    var del;

    if (_v.parseBoolean(name)) {
      keep = 1;
      del = 2;
    } else {
      keep = 2;
      del = 1;
    }

    outLinks[del].delete();
    var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
    var newLink = new _X(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks[0].delete();
    this.graph.findNodeByKey(outLinks[0].to).delete();
    this.delete();
    token.rewriteFlag = _G.SEARCH;
    return newLink;
  };

  var _3 = function () {
    _K(this, _3);

    this.setMachine(new _L(), new _N(), 0);
  };

  var _4 = _3.prototype;

  var _5 = function (graphSet, tokenSet, countSet) {
    this.graph = graphSet;
    window.mainGraph = this.graph; // cheating!

    this.token = tokenSet;
    this.count = countSet;
  };

  var _6 = function (source) {
    var lexer = new _Q(source + '\0');
    var parser = new _S(lexer);
    var ast = parser.parse();
    this.count = 0;
    this.graph.clear();
    var start = new _U().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child, false);
    var link = new _X(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
    this.token.reset(link);
  };

  var _7 = function (ast, group) {
    var graph = this.graph;
    var term = new _Z().addToGroup(group);

    if (ast instanceof _c) {
      term.box();
      ast = ast.inner;
    } // VARIABLES & ATOMS


    if (ast instanceof _f) {
      var auxs = [];

      for (var i = 0; i < ast.ctx.length; i++) {
        var c = new _h().addToGroup(term);
        auxs.push(c);
        if (ast.ctx[i].name == ast.name) var prin = c;
      }

      term.set(prin, auxs); // BINDINGS & REFERENCES
    } else if (ast instanceof _k || ast instanceof _m) {
      var body = this.toGraph(ast.body, term, false).addToGroup(term);
      var param = this.toGraph(ast.param, term, false).addToGroup(term);
      var auxs = body.auxs;
      var auxNode = auxs[0];
      auxs.splice(0, 1);
      auxs = auxs.concat(param.auxs);

      if (ast instanceof _m) {
        var atomNode = new _o("a").addToGroup(param);
        new _X(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
        param.prin = atomNode;
      }

      new _X(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
      auxs = _h.createDNet(ast.ctx.length, auxs, term);
      term.set(body.prin, auxs); // OPERATIONS
    } else if (ast instanceof _q) {
      var op = this.toOp(ast.name, ast.active).addToGroup(term);
      var auxs = [];
      var next;

      for (var i = 0; i < ast.sig[0]; i++) {
        next = this.toGraph(ast.eas[i], term).addToGroup(term);
        new _X(op.key, next.prin.key, "_", "_").addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      for (var i = 0; i < ast.sig[1]; i++) {
        next = this.toGraph(ast.das[i], term).addToGroup(term);
        var link = new _X(op.key, next.prin.key, "_", "_");
        link.visited = true; // hacking

        link.addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      auxs = _h.createDNet(ast.ctx.length, auxs, term, op);
      term.set(op, auxs);
    }

    return term;
  };

  var _8 = function (name, active) {
    if (Number.isInteger(parseInt(name))) {
      return new _s(name);
    } else if (name == "true" || name == "false") {
      return new _v(name);
    } else if (name == "+") {
      return new _x();
    } else if (name == "*") {
      return new _z();
    } else if (name == "∧") {
      return new _11();
    } else if (name == "∨") {
      return new _13();
    } else if (name == "¬") {
      return new _15();
    } else if (name == "==") {
      return new _17();
    } else if (name == "if") {
      return new _19();
    } else {
      return new _1B(name, active);
    }
  };

  var _9 = function () {
    // TODO
    // Loop through all links in the graph
    // Perform quotiening rules
    return null;
  };

  var _A = function (graphTxt, linkTxt, flagTxt) {
    if (!finished) {
      this.count++;
      var node = this.graph.findNodeByKey(this.token.link.to);
      var nextLink;

      if (this.token.rewriteFlag == _G.REWRITE) {
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
  };

  var _C = function (graphTxt, linkTxt, flagTxt) {
    graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
    linkTxt.val(this.token.link + '\n' + linkTxt.val());
    flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
  };

  var _D = function (token) {
    // this needs cleaning up!
    var link = token.link;

    if (token.rewriteFlag == _G.SEARCH) {
      var to = this.graph.findNodeByKey(link.to);
      var outlinks = to.findLinksOutOf();

      if (to instanceof _o) {
        token.rewriteFlag = _G.RETURN;
        return link;
      } else if (to instanceof _1B) {
        if (outlinks.length == 0) {
          if (to.active) {
            token.rewriteFlag = _G.REWRITE;
          } else {
            token.rewriteFlag = _G.RETURN;
          }

          return link;
        } else {
          return outlinks[0];
        }
      } else if (to instanceof _h) {
        token.rewriteFlag = _G.REWRITE;
        return link;
      }
    } else if (token.rewriteFlag == _G.RETURN) {
      var from = this.graph.findNodeByKey(link.from);
      var outlinks = from.findLinksOutOf();

      if (this.doneVisiting(link, outlinks)) {
        // HACKING
        if (from.active) {
          token.rewriteFlag = _G.REWRITE;
          return from.findLinksInto()[0];
        } else {
          token.rewriteFlag = _G.RETURN;
          return from.findLinksInto()[0];
        }
      } else {
        token.rewriteFlag = _G.SEARCH;
        var j = this.findJ(link, outlinks);
        return outlinks[j];
      }
    }

    return link;
  };

  var _E = function (link, links) {
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
  };

  var _F = function (link, list) {
    for (var j = 0; j < list.length; j++) {
      if (!list[j].visited && list[j] != link) return j;
    }

    return null;
  };

  var __constructor = function () {};

  _$0.mainGraph = null;
  $$0.value = _1f, _$2(_W, "addToGraph", $$0);
  $$0.value = _1g, _$2(_W, "addToGroup", $$0);
  $$0.value = _1h, _$2(_W, "changeToGroup", $$0);
  $$0.value = _1i, _$2(_W, "findLinksConnected", $$0);
  $$0.value = _1j, _$2(_W, "findLinksInto", $$0);
  $$0.value = _1k, _$2(_W, "findLinksOutOf", $$0);
  $$0.value = _1l, _$2(_W, "findNodesOutOf", $$0);
  $$0.value = _1m, _$2(_W, "copy", $$0);
  $$0.value = _1n, _$2(_W, "delete", $$0);
  $$0.value = _1o, _$2(_W, "draw", $$0);
  $$0.value = _1p, _$2(_W, "transition", $$0);
  $$0.value = _1q, _$2(_W, "rewrite", $$0);

  var _b = (__constructor.prototype = _W, new __constructor());

  $$0.value = _27, _$2(_b, "constructor", $$0);
  $$0.value = _28, _$2(_b, "addNode", $$0);
  $$0.value = _29, _$2(_b, "removeNode", $$0);
  $$0.value = _2A, _$2(_b, "addLink", $$0);
  $$0.value = _2B, _$2(_b, "removeLink", $$0);
  $$0.value = _2C, _$2(_b, "delete", $$0);
  $$0.value = _2D, _$2(_b, "draw", $$0);
  $$0.value = _2E, _$2(_b, "copy", $$0);
  _27.prototype = _b;

  _$3(_27, _1r);

  $$0.value = _1C, _$2(_M, "clear", $$0);
  $$0.value = _1D, _$2(_M, "addNode", $$0);
  $$0.value = _1E, _$2(_M, "removeNode", $$0);
  $$0.value = _1F, _$2(_M, "findNodeByKey", $$0);
  $$0.value = _1G, _$2(_M, "addLink", $$0);
  $$0.value = _1H, _$2(_M, "removeLink", $$0);
  $$0.value = _1I, _$2(_M, "findLinkByKeys", $$0);
  $$0.value = _1J, _$2(_M, "draw", $$0);
  var _G = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };
  $$0.value = _1K, _$2(_N, "RewriteFlag", $$0);
  $$0.value = _1L, _$2(_O, "setLink", $$0);
  $$0.value = _1M, _$2(_O, "reset", $$0);
  $$0.value = _5, _$2(_4, "setMachine", $$0);
  $$0.value = _1N, _$2(_R, "_nextChar", $$0);
  _32.EOF = "EOF";
  _32.LCID = "LCID";
  _32.LPAREN = "LPAREN";
  _32.RPAREN = "RPAREN";
  _32.SEMIC = "SEMIC";
  _32.BIND = "BIND";
  _32.NEW = "NEW";
  _32.DEF = "DEF";
  _32.IN = "IN";
  _32.PLUS = "PLUS";
  _32.TIMES = "TIMES";
  _32.INT = "INT";
  _32.AND = "AND";
  _32.OR = "OR";
  _32.NOT = "NOT";
  _32.TRUE = "TRUE";
  _32.FALSE = "FALSE";
  _32.EQUALS = "EQUALS";
  _32.IF = "IF";
  $$0.value = _1O, _$2(_R, "_nextToken", $$0);
  $$0.value = _1P, _$2(_R, "token", $$0);
  $$0.value = _1Q, _$2(_R, "value", $$0);
  $$0.value = _1R, _$2(_R, "lookahead", $$0);
  $$0.value = _1S, _$2(_R, "lookaheadType", $$0);
  $$0.value = _1T, _$2(_R, "fail", $$0);
  $$0.value = _1U, _$2(_R, "next", $$0);
  $$0.value = _1V, _$2(_R, "match", $$0);
  $$0.value = _1W, _$2(_R, "skip", $$0);
  $$0.value = _1X, _$2(_T, "parse", $$0);

  var _d = (__constructor.prototype = _e, new __constructor());

  $$0.value = _c, _$2(_d, "constructor", $$0);
  _c.prototype = _d;

  _$3(_c, _2F);

  var _l = (__constructor.prototype = _e, new __constructor());

  $$0.value = _k, _$2(_l, "constructor", $$0);
  _k.prototype = _l;

  _$3(_k, _2F);

  var _n = (__constructor.prototype = _e, new __constructor());

  $$0.value = _m, _$2(_n, "constructor", $$0);
  _m.prototype = _n;

  _$3(_m, _2F);

  $$0.value = _1Y, _$2(_T, "term", $$0);

  var _g = (__constructor.prototype = _e, new __constructor());

  $$0.value = _f, _$2(_g, "constructor", $$0);
  _f.prototype = _g;

  _$3(_f, _2F);

  $$0.value = _1Z, _$2(_T, "atom", $$0);

  var _r = (__constructor.prototype = _e, new __constructor());

  $$0.value = _q, _$2(_r, "constructor", $$0);
  _q.prototype = _r;

  _$3(_q, _2F);

  $$0.value = _1a, _$2(_T, "operation", $$0);
  $$0.value = _1b, _$2(_T, "gatherArgs", $$0);

  var _V = (__constructor.prototype = _W, new __constructor());

  $$0.value = _U, _$2(_V, "constructor", $$0);
  $$0.value = _1c, _$2(_V, "transition", $$0);
  $$0.value = _1d, _$2(_V, "copy", $$0);
  $$0.value = _1e, _$2(_V, "draw", $$0);
  _U.prototype = _V;

  _$3(_U, _1r);

  $$0.value = _1s, _$2(_Y, "addToNode", $$0);
  $$0.value = _1t, _$2(_Y, "addToGraph", $$0);
  $$0.value = _1u, _$2(_Y, "addToGroup", $$0);
  $$0.value = _1v, _$2(_Y, "changeToGroup", $$0);
  $$0.value = _1w, _$2(_Y, "changeFrom", $$0);
  $$0.value = _1x, _$2(_Y, "changeTo", $$0);
  $$0.value = _1y, _$2(_Y, "focus", $$0);
  $$0.value = _1z, _$2(_Y, "clearFocus", $$0);
  $$0.value = _20, _$2(_Y, "delete", $$0);
  $$0.value = _21, _$2(_Y, "toString", $$0);
  $$0.value = _22, _$2(_Y, "draw", $$0);
  $$0.value = _6, _$2(_4, "compile", $$0);

  var _a = (__constructor.prototype = _b, new __constructor());

  $$0.value = _Z, _$2(_a, "constructor", $$0);
  $$0.value = _23, _$2(_a, "set", $$0);
  $$0.value = _24, _$2(_a, "box", $$0);
  $$0.value = _25, _$2(_a, "unbox", $$0);
  $$0.value = _26, _$2(_a, "draw", $$0);
  _Z.prototype = _a;

  _$3(_Z, _27);

  var _j = (__constructor.prototype = _W, new __constructor());

  $$0.value = _h, _$2(_j, "constructor", $$0);
  $$0.value = _2G, _$2(_j, "transition", $$0);

  var _p = (__constructor.prototype = _W, new __constructor());

  $$0.value = _o, _$2(_p, "constructor", $$0);
  _o.prototype = _p;

  _$3(_o, _1r);

  var _u = (__constructor.prototype = _W, new __constructor());

  $$0.value = _1B, _$2(_u, "constructor", $$0);
  $$0.value = _2L, _$2(_u, "rewrite", $$0);
  $$0.value = _2M, _$2(_u, "copy", $$0);
  _1B.prototype = _u;

  _$3(_1B, _1r);

  $$0.value = _2H, _$2(_j, "rewrite", $$0);
  $$0.value = _2I, _$2(_j, "copy", $$0);
  $$0.value = _2J, _$2(_j, "draw", $$0);
  _h.prototype = _j;
  $$0.value = _2K, _$2(_h, "createDNet", $$0);

  _$3(_h, _1r);

  $$0.value = _7, _$2(_4, "toGraph", $$0);

  var _t = (__constructor.prototype = _u, new __constructor());

  $$0.value = _s, _$2(_t, "constructor", $$0);
  _s.prototype = _t;

  _$3(_s, _1B);

  var _w = (__constructor.prototype = _u, new __constructor());

  $$0.value = _v, _$2(_w, "constructor", $$0);
  $$0.value = _2N, _$2(_w, "copy", $$0);
  _v.prototype = _w;
  $$0.value = _2O, _$2(_v, "parseBoolean", $$0);

  _$3(_v, _1B);

  var _y = (__constructor.prototype = _u, new __constructor());

  $$0.value = _x, _$2(_y, "constructor", $$0);
  $$0.value = _2P, _$2(_y, "copy", $$0);
  $$0.value = _2Q, _$2(_y, "rewrite", $$0);
  _x.prototype = _y;

  _$3(_x, _1B);

  var _10 = (__constructor.prototype = _u, new __constructor());

  $$0.value = _z, _$2(_10, "constructor", $$0);
  $$0.value = _2R, _$2(_10, "copy", $$0);
  $$0.value = _2S, _$2(_10, "rewrite", $$0);
  _z.prototype = _10;

  _$3(_z, _1B);

  var _12 = (__constructor.prototype = _u, new __constructor());

  $$0.value = _11, _$2(_12, "constructor", $$0);
  $$0.value = _2T, _$2(_12, "copy", $$0);
  $$0.value = _2U, _$2(_12, "rewrite", $$0);
  _11.prototype = _12;

  _$3(_11, _1B);

  var _14 = (__constructor.prototype = _u, new __constructor());

  $$0.value = _13, _$2(_14, "constructor", $$0);
  $$0.value = _2V, _$2(_14, "copy", $$0);
  $$0.value = _2W, _$2(_14, "rewrite", $$0);
  _13.prototype = _14;

  _$3(_13, _1B);

  var _16 = (__constructor.prototype = _u, new __constructor());

  $$0.value = _15, _$2(_16, "constructor", $$0);
  $$0.value = _2X, _$2(_16, "copy", $$0);
  $$0.value = _2Y, _$2(_16, "rewrite", $$0);
  _15.prototype = _16;

  _$3(_15, _1B);

  var _18 = (__constructor.prototype = _u, new __constructor());

  $$0.value = _17, _$2(_18, "constructor", $$0);
  $$0.value = _2Z, _$2(_18, "copy", $$0);
  $$0.value = _2a, _$2(_18, "rewrite", $$0);
  _17.prototype = _18;

  _$3(_17, _1B);

  var _1A = (__constructor.prototype = _u, new __constructor());

  $$0.value = _19, _$2(_1A, "constructor", $$0);
  $$0.value = _2b, _$2(_1A, "copy", $$0);
  $$0.value = _2c, _$2(_1A, "rewrite", $$0);
  _19.prototype = _1A;

  _$3(_19, _1B);

  $$0.value = _8, _$2(_4, "toOp", $$0);
  $$0.value = _9, _$2(_4, "quotieningRules", $$0);
  $$0.value = _A, _$2(_4, "transition", $$0);
  $$0.value = _C, _$2(_4, "printHistory", $$0);
  $$0.value = _D, _$2(_4, "pass", $$0);
  $$0.value = _E, _$2(_4, "doneVisiting", $$0);
  $$0.value = _F, _$2(_4, "findJ", $$0);
  _$0.machine = _3;
}).call(this);
}.call(window));

/***/ })

/******/ });
//# sourceMappingURL=main.requirejs.js.map