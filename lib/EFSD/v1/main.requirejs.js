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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/EFSD/v1/main.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/EFSD/v1/main.prepack.js":
/*!*************************************!*\
  !*** ./lib/EFSD/v1/main.prepack.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_55, _55, _2i, _2i];
        break;

      case 1:
        __captured = [_6l, _6l, _5C, _5C];
        break;

      case 2:
        __captured = [_6n, _6n, _5E, _5E];
        break;

      case 3:
        __captured = [_6p, _6p, _5G, _5G];
        break;

      case 4:
        __captured = [_6s, _6s, _5s, _5s];
        break;

      case 5:
        __captured = [_6u, _6u, _5u, _5u];
        break;

      case 6:
        __captured = [_6x, _6x, _5y, _5y];
        break;

      case 7:
        __captured = [_6z, _6z, _60, _60, _61, _61];
        break;

      case 8:
        __captured = [_72, _72, _65, _65];
        break;

      case 9:
        __captured = [_74, _74, _67, _67];
        break;

      case 10:
        __captured = [_76, _76, _69, _69];
        break;

      case 11:
        __captured = [_78, _78, _6C, _6C];
        break;

      case 12:
        __captured = [_7A, _7A, _6E, _6E];
        break;

      case 13:
        __captured = [_7C, _7C, _6G, _6G];
        break;

      case 14:
        __captured = [_7E, _7E, _6I, _6I];
        break;

      case 15:
        __captured = [_7G, _7G, _6K, _6K];
        break;

      case 16:
        __captured = [_7I, _7I, _6M, _6M];
        break;

      case 17:
        __captured = [_7N, _7N, _6O, _6O, _6P, _6P];
        break;

      case 18:
        __captured = [_7P, _7P, _6R, _6R];
        break;

      case 19:
        __captured = [_7R, _7R, _6T, _6T];
        break;

      case 20:
        __captured = [_7T, _7T, _6V, _6V];
        break;

      case 21:
        __captured = [_7V, _7V, _6X, _6X];
        break;

      case 22:
        __captured = [_7X, _7X, _6Z, _6Z];
        break;

      case 23:
        __captured = [_6j, _6j, _59, _59, _5A, _5A];
        break;

      case 24:
        __captured = [_7a, _7a, _6c, _6c];
        break;

      case 25:
        __captured = [_7m, _7m, _7d, _7d, _7e, _7e];
        break;

      case 26:
        __captured = [_7o, _7o, _7h, _7h];
        break;

      case 27:
        __captured = [_7r, _7r, _7l, _7l];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(28);

  var $$0 = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0 = this;

  var _$1 = _$0.Object;
  var _$2 = _$1.getPrototypeOf;
  var _$3 = _$1.defineProperty;
  var _$4 = _$1.setPrototypeOf;
  var _$5 = _$0.Map;

  var _2e = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4c = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1x = function (param, body) {
    _4c(this, _1x);

    this.param = param;
    this.body = body;
  };

  var _4e = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _20 = function (lhs, rhs) {
    _4e(this, _20);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _4Z = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1r = function (value, name) {
    _4Z(this, _1r);

    this.value = value;
    this.name = name;
  };

  var _4h = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _24 = function (value) {
    _4h(this, _24);

    this.value = value;
  };

  var _6A = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3i = function (type, name) {
    _6A(this, _3i);

    this.type = type;
    this.name = name;
  };

  var _2A = _3i.prototype;

  var _7C = function (obj) {
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

  var _4l = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6F = function (self, call) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    if (call && (__captured__scope_E[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7D(self);
  };

  var _7D = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6G = function (o) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    __captured__scope_E[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E[3](o);
  };

  var _2D = function (type, name, v1) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    var _this;

    _4l(this, _2D);

    _this = _6F(this, __captured__scope_E[3](_2D).call(this, type, name));
    _this.v1 = v1;
    return _this;
  };

  var _78 = function (obj) {
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

  var _4j = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6B = function (self, call) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    if (call && (__captured__scope_C[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _79(self);
  };

  var _79 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6C = function (o) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    __captured__scope_C[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C[3](o);
  };

  var _27 = function (type, name, v1, v2) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    var _this;

    _4j(this, _27);

    _this = _6B(this, __captured__scope_C[3](_27).call(this, type, name, v1));
    _this.v2 = v2;
    return _this;
  };

  var _4p = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2G = function (cond, t1, t2) {
    _4p(this, _2G);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  var _4r = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2J = function (param, body) {
    _4r(this, _2J);

    this.param = param;
    this.body = body;
  };

  var _4t = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2M = function (term) {
    _4t(this, _2M);

    this.term = term;
  };

  var _4z = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2V = function (param, body) {
    _4z(this, _2V);

    this.param = param;
    this.body = body;
  };

  var _51 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2Y = function (param, body) {
    _51(this, _2Y);

    this.param = param;
    this.body = body;
  };

  var _53 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2b = function () {
    _53(this, _2b);
  };

  var _4v = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2P = function (term) {
    _4v(this, _2P);

    this.term = term;
  };

  var _4x = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2S = function (term) {
    _4x(this, _2S);

    this.term = term;
  };

  var _4N = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6r = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5I = function (type, value, pred) {
    _6r(this, _5I);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _1j = function (input) {
    _4N(this, _1j);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _1k = _1j.prototype;

  var _2y = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _2z = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case 'λ':
      case '\\':
        this._token = new _5I(_5I.LAMBDA);
        break;

      case '.':
        this._token = new _5I(_5I.DOT);
        break;

      case ',':
        this._token = new _5I(_5I.COMMA);
        break;

      case ';':
        this._token = new _5I(_5I.SEQ);
        break;

      case '(':
        this._token = new _5I(_5I.LPAREN);
        break;

      case ')':
        this._token = new _5I(_5I.RPAREN);
        break;

      case '{':
        this._token = new _5I(_5I.CLPAREN);
        break;

      case '}':
        this._token = new _5I(_5I.CRPAREN);
        break;

      case '\0':
        this._token = new _5I(_5I.EOF);
        break;

      case '~':
        this._token = new _5I(_5I.NOT);
        break;

      case '&':
        if (this._nextChar() == '&') this._token = new _5I(_5I.AND, null, 5);else {
          this._index--;
          this.fail();
        }
        break;

      case '|':
        var c2 = this._nextChar();

        if (c2 == '|') this._token = new _5I(_5I.OR, null, 4);else {
          this._index--;
          this.fail();
        }
        break;

      case '+':
        this._token = new _5I(_5I.PLUS, null, 12);
        break;

      case '-':
        this._token = new _5I(_5I.SUB, null, 12);
        break;

      case '*':
        this._token = new _5I(_5I.MULT, null, 13);
        break;

      case '/':
        this._token = new _5I(_5I.DIV, null, 13);
        break;

      case '<':
        if (this._nextChar() == '=') this._token = new _5I(_5I.LTE, null, 10);else {
          this._index--;
          this.fail();
        }
        break;

      case '=':
        this._token = new _5I(_5I.DEFINE);
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
          if (str == "let") this._token = new _5I(_5I.LET);else if (str == "in") this._token = new _5I(_5I.IN);else if (str == "rec") this._token = new _5I(_5I.REC);else if (str == "true") this._token = new _5I(_5I.TRUE);else if (str == "false") this._token = new _5I(_5I.FALSE);else if (str == "if") this._token = new _5I(_5I.IF);else if (str == "then") this._token = new _5I(_5I.THEN);else if (str == "else") this._token = new _5I(_5I.ELSE);else if (str == "link") this._token = new _5I(_5I.CHANGE);else if (str == "set") this._token = new _5I(_5I.SET);else if (str == "to") this._token = new _5I(_5I.TO);else if (str == "step") this._token = new _5I(_5I.PROP);else if (str == "peek") this._token = new _5I(_5I.DEP);else if (str == "deref") this._token = new _5I(_5I.DEREF);else this._token = new _5I(_5I.LCID, str);
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
            this._token = new _5I(_5I.INT, parseFloat(_str));
          } else {
            this.fail();
          }

    }
  };

  var _30 = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _31 = function () {
    return this._token;
  };

  var _32 = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _33 = function (type) {
    return this._token.type == type;
  };

  var _34 = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _35 = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _4W = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1l = function (lexer) {
    _4W(this, _1l);

    this.lexer = lexer;
  };

  var _1m = _1l.prototype;

  var _36 = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_5I.EOF);
    return result;
  };

  var _37 = function (ctx) {
    if (this.lexer.skip(_5I.LAMBDA)) {
      var id = this.lexer.token(_5I.LCID);
      this.lexer.match(_5I.DOT);
      var term = this.term([id].concat(ctx));
      return new _1x(id, term);
    } else if (this.lexer.skip(_5I.LET)) {
      var _id = this.lexer.token(_5I.LCID);

      this.lexer.match(_5I.DEFINE);
      var N = this.term(ctx);
      this.lexer.match(_5I.IN);
      var M = this.term([_id].concat(ctx));
      return new _20(new _1x(_id, M), N);
    } else if (this.lexer.skip(_5I.REC)) {
      var _id2 = this.lexer.token(_5I.LCID);

      this.lexer.match(_5I.DOT);

      var _term = this.term([_id2].concat(ctx));

      return new _2J(_id2, _term);
    } else if (this.lexer.skip(_5I.IF)) {
      var cond = this.term(ctx);
      this.lexer.match(_5I.THEN);
      var t1 = this.term(ctx);
      this.lexer.match(_5I.ELSE);
      var t2 = this.term(ctx);
      return new _2G(cond, t1, t2);
    } else {
      return this.application(ctx);
    }
  };

  var _38 = function (token) {
    return token.type == _5I.AND || token.type == _5I.OR || token.type == _5I.PLUS || token.type == _5I.SUB || token.type == _5I.MULT || token.type == _5I.DIV || token.type == _5I.LTE;
  };

  var _39 = function (ctx, lhs, pred) {
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

      if (op.type == _5I.AND) {
        lhs = new _27(_4O.And, "&&", lhs, rhs);
      } else if (op.type == _5I.OR) {
        lhs = new _27(_4O.Or, "||", lhs, rhs);
      } else if (op.type == _5I.PLUS) {
        lhs = new _27(_4O.Plus, "+", lhs, rhs);
      } else if (op.type == _5I.SUB) {
        lhs = new _27(_4O.Sub, "-", lhs, rhs);
      } else if (op.type == _5I.MULT) {
        lhs = new _27(_4O.Mult, "*", lhs, rhs);
      } else if (op.type == _5I.DIV) {
        lhs = new _27(_4O.Div, "/", lhs, rhs);
      } else if (op.type == _5I.LTE) {
        lhs = new _27(_4O.Lte, "<=", lhs, rhs);
      }
    }

    return lhs;
  };

  var _3A = function (ctx) {
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
          lhs = new _20(lhs, rhs);
        }
      }
    }
  };

  var _3B = function (ctx) {
    if (this.lexer.skip(_5I.LPAREN)) {
      var _term2 = this.term(ctx);

      this.lexer.match(_5I.RPAREN);
      return _term2;
    } else if (this.lexer.next(_5I.LCID)) {
      var id = this.lexer.token(_5I.LCID);
      return new _1r(ctx.indexOf(id), id);
    } else if (this.lexer.next(_5I.INT)) {
      var n = this.lexer.token(_5I.INT);
      return new _24(n);
    } else if (this.lexer.skip(_5I.TRUE)) {
      return new _24(true);
    } else if (this.lexer.skip(_5I.FALSE)) {
      return new _24(false);
    } else if (this.lexer.skip(_5I.NOT)) {
      var _term3 = this.term(ctx);

      return new _2D(_4m.Not, "~", _term3);
    } else if (this.lexer.skip(_5I.PROP)) {
      return new _2b();
    } else if (this.lexer.skip(_5I.DEP)) {
      var term = this.term(ctx);
      return new _2P(term);
    } else if (this.lexer.skip(_5I.DEREF)) {
      var term = this.term(ctx);
      return new _2S(term);
    } else if (this.lexer.skip(_5I.CLPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_5I.CRPAREN);
      return new _2M(term);
    } else if (this.lexer.skip(_5I.CHANGE)) {
      var _id3 = this.lexer.token(_5I.LCID);

      this.lexer.match(_5I.TO);

      var _term4 = this.term(ctx);

      return new _2V(_id3, _term4);
    } else if (this.lexer.skip(_5I.SET)) {
      var _id4 = this.lexer.token(_5I.LCID);

      this.lexer.match(_5I.TO);

      var _term5 = this.term(ctx);

      return new _2Y(_id4, _term5);
    } else {
      return undefined;
    }
  };

  var _1a = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Z = function (machine) {
    _1a(this, _Z);

    this.machine = machine;
    this.reset();
  };

  var _B = _Z.prototype;

  var _1R = function () {
    return _1T;
  };

  var _1S = function () {
    return _1G;
  };

  var _W = function (link) {
    if (this.link != null) {
      //this.link.tokens.splice(this.link.tokens.indexOf(this), 1);
      this.link.clearFocus();
    }

    this.link = link;

    if (this.link != null) {
      //this.link.tokens.push(this);
      if (this.isMain) this.link.focus("red");else this.link.focus("green");
    }
  };

  var _X = function () {
    this.forward = true;
    this.rewrite = false;
    this.transited = false;
    this.link = null;
    this.rewriteFlag = _1G.EMPTY;
    this.dataStack = [_1T.PROMPT];
    this.boxStack = [];
  };

  var _Y = function () {
    this.setLink(null);
    this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
  };

  var _4Y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1p = function (from, to, fromPort, toPort, reverse) {
    _4Y(this, _1p);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.reverse = reverse;
    this.colour = null;
    this.penWidth = null;
    this.addToGraph(window.mainGraph); // cheating

    this.addToNode(); // cheating
  };

  var _1q = _1p.prototype;

  var _3F = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _3G = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _3H = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _3I = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _3J = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _3K = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _3L = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _3M = function () {
    this.colour = null;
    this.penWidth = null;
  };

  var _3N = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _3O = function () {
    return this.from + "->" + this.to;
  };

  var _3P = function (level) {
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

  var _2k = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _55 = function (obj) {
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

  var _2f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2g = function (self, call) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (call && (__captured__scope_1[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _56(self);
  };

  var _56 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2i = function (target, property, receiver) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_1[3] = Reflect.get;
    } else {
      __captured__scope_1[3] = function _get(target, property, receiver) {
        var base = _6a(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_1[3](target, property, receiver || target);
  };

  var _6a = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _2h(object);
      if (object === null) break;
    }

    return object;
  };

  var _2j = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _17 = function (shape, text, colour, name) {
    _2j(this, _17);

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
    this.addToGraph(window.mainGraph); // cheating!
  };

  var _S = _17.prototype;

  var _w = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _x = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _y = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _z = function () {
    return this.links;
  };

  var _10 = function (toPort) {
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
  };

  var _11 = function (fromPort) {
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
  };

  var _12 = function (graph) {
    var newNode = new _17(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
  };

  var _13 = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _14 = function (level) {
    var str = level + this.key + '[label="' + this.text;
    ;
    str += '"';
    if (this.shape != null) str += ',shape=' + this.shape;
    if (this.width != null) str += ',width=' + this.width;
    if (this.height != null) str += ',height=' + this.height;
    str += ',fillcolor=' + this.colour;
    return str += '];';
  };

  var _15 = function (token, link) {
    return link;
  };

  var _16 = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _p = function () {
    var _this;

    _2f(this, _p);

    _this = _2g(this, _2h(_p).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _q = function (node) {
    this.nodes.push(node);
  };

  var _r = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _s = function (link) {
    this.links.push(link);
  };

  var _t = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _u = function () {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_1[3](_2h(_p.prototype), "delete", this).call(this);
  };

  var _v = function (level) {
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

  var _1F = function (machine) {
    _2k(this, _1F);

    this.machine = machine;
    this.clear();
  };

  var _T = _1F.prototype;

  var _18 = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _p();
  };

  var _19 = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _1A = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _1B = function (key) {
    return this.allNodes.get(key);
  };

  var _1C = function (link) {
    this.allLinks.push(link);
  };

  var _1D = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _1E = function (width, height) {
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

    return 'digraph G {' + '\n  rankdir=BT;' + '\n  edge[arrowhead=none,arrowtail=none];' + '\n  node[fixedsize=true,shape=circle,style=filled]' + '\n  size="' + width + ',' + height + '";' + '\n  labeldistance=0;' + '\n  nodesep=.175;' + '\n  ranksep=.175;' + '\n' + str + '\n}';
  };

  var _6x = function (obj) {
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

  var _4b = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5x = function (self, call) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    if (call && (__captured__scope_7[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6y(self);
  };

  var _6y = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5y = function (o) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    __captured__scope_7[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7[3](o);
  };

  var _7m = function (obj) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_Q[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_Q[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_Q[1](obj);
  };

  var _6w = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7c = function (self, call) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    if (call && (__captured__scope_Q[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7n(self);
  };

  var _7n = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7e = function (target, property, receiver) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_Q[5] = Reflect.get;
    } else {
      __captured__scope_Q[5] = function _get(target, property, receiver) {
        var base = _7q(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_Q[5](target, property, receiver || target);
  };

  var _7q = function (object, property) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_Q[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _7d = function (o) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    __captured__scope_Q[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_Q[3](o);
  };

  var _6j = function (obj) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_O[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_O[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_O[1](obj);
  };

  var _57 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _58 = function (self, call) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    if (call && (__captured__scope_O[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6k(self);
  };

  var _6k = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5A = function (target, property, receiver) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_O[5] = Reflect.get;
    } else {
      __captured__scope_O[5] = function _get(target, property, receiver) {
        var base = _7Z(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_O[5](target, property, receiver || target);
  };

  var _7Z = function (object, property) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_O[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _59 = function (o) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    __captured__scope_O[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_O[3](o);
  };

  var _2m = function (shape, text, name) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var _this;

    _57(this, _2m);

    _this = _58(this, __captured__scope_O[3](_2m).call(this, shape, text, "cyan", name));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _2n = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _2o = function () {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_O[5](__captured__scope_O[3](_2m.prototype), "delete", this).call(this);
  };

  var _2p = function () {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (inLink != null && outLink != null) {
      outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    __captured__scope_O[5](__captured__scope_O[3](_2m.prototype), "delete", this).call(this);
  };

  var _5v = function (name) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    _6w(this, _5v);

    return _7c(this, __captured__scope_Q[3](_5v).call(this, null, "?", name));
  };

  var _6d = function () {
    return new _5v(this.name);
  };

  var _6e = function () {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

    __captured__scope_Q[5](__captured__scope_Q[3](_5v.prototype), "delete", this).call(this);
  };

  var _6n = function (obj) {
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

  var _4I = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5D = function (self, call) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    if (call && (__captured__scope_3[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6o(self);
  };

  var _6o = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5E = function (o) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    __captured__scope_3[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3[3](o);
  };

  var _1e = function (name) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    _4I(this, _1e);

    return _5D(this, __captured__scope_3[3](_1e).call(this, null, "C", name));
  };

  var _2q = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.boxStack.push(link);
      token.rewriteFlag = _1G.F_C;
      return nextLink;
    } else if (link.from == this.key && token.boxStack.length > 0) {
      var nextLink = token.boxStack.pop();
      return nextLink;
    }
  };

  var _2r = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_C && nextLink.from == this.key) {
      token.rewriteFlag = _1G.EMPTY;

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
        var i = token.boxStack.last();
        var prev = this.graph.findNodeByKey(i.from);

        if (prev instanceof _1e) {
          token.boxStack.pop();
          /*
                        for (let _token of Array.from(nextLink.tokens)) {
                        	if (_token.boxStack.last() == i)
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
          token.rewriteFlag = _1G.F_C;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _2s = function () {
    var con = new _1e(this.name);
    con.text = this.text;
    return con;
  };

  var _1v = function (prin, auxs) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    var _this;

    _4b(this, _1v);

    _this = _5x(this, __captured__scope_7[3](_1v).call(this));

    _this.set(prin, auxs);

    return _this;
  };

  var _3S = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _3T = function (auxs) {
    var newPaxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pax = _step.value;
        var newPax = new _5v(pax.name).addToGroup(this);
        if (pax.findLinksOutOf(null).length == 0) new _1p(pax.key, newPax.key, "n", "s").addToGroup(this);else {
          var outLink = pax.findLinksOutOf(null)[0];
          new _1p(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
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
  };

  var _3U = function (leftAuxs, rightAuxs, group) {
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
              var con = new _1e(leftAux.name).addToGroup(group);
              var outLink = leftAux.findLinksOutOf(null)[0];

              if (typeof outLink != 'undefined') {
                outLink.changeFrom(con.key, outLink.fromPort);
              }

              new _1p(rightAux.key, con.key, "n", "s").addToGroup(group);
              new _1p(leftAux.key, con.key, "n", "s").addToGroup(group);
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
  };

  var _6z = function (obj) {
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

  var _4d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5z = function (self, call) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (call && (__captured__scope_8[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _70(self);
  };

  var _70 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _61 = function (target, property, receiver) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_8[5] = Reflect.get;
    } else {
      __captured__scope_8[5] = function _get(target, property, receiver) {
        var base = _7f(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_8[5](target, property, receiver || target);
  };

  var _7f = function (object, property) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_8[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _60 = function (o) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    __captured__scope_8[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8[3](o);
  };

  var _7o = function (obj) {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_R[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_R[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_R[1](obj);
  };

  var _71 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7g = function (self, call) {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    if (call && (__captured__scope_R[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7p(self);
  };

  var _7p = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7h = function (o) {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    __captured__scope_R[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_R[3](o);
  };

  var _62 = function () {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    var _this;

    _71(this, _62);

    _this = _7g(this, __captured__scope_R[3](_62).call(this));
    _this.nodes = [];
    _this.links = [];
    return _this;
  };

  var _6f = function (graph) {// this shouldnt be call, since every box should be inside a wrapper
  };

  var _6g = function (level) {
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
  };

  var _7a = function (obj) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_P[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_P[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_P[1](obj);
  };

  var _5H = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6b = function (self, call) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    if (call && (__captured__scope_P[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7b(self);
  };

  var _7b = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6c = function (o) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    __captured__scope_P[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_P[3](o);
  };

  var _74 = function (obj) {
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

  var _4g = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _66 = function (self, call) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    if (call && (__captured__scope_A[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _75(self);
  };

  var _75 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _67 = function (o) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    __captured__scope_A[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A[3](o);
  };

  var _23 = function (name) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    _4g(this, _23);

    return _66(this, __captured__scope_A[3](_23).call(this, null, "D", name));
  };

  var _3R = function () {
    var der = new _23(this.name);
    return der;
  };

  var _2w = function () {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    _5H(this, _2w);

    return _6b(this, __captured__scope_P[3](_2w).call(this, null, "!"));
  };

  var _4K = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.rewriteFlag = _1G.F_PROMO;
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _4L = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_PROMO) {
      token.rewriteFlag = _1G.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

      if (prev instanceof _23) {
        var oldGroup = this.group;
        oldGroup.moveOut(); // this.group is a box-wrapper

        oldGroup.deleteAndPreserveLink();
        var newNextLink = prev.findLinksInto(null)[0];
        prev.deleteAndPreserveInLink(); // preserve inLink

        token.rewrite = true;
        return newNextLink;
      } else if (prev instanceof _1e && token.boxStack.length >= 1) {
        if (nextLink.from == this.key) {
          var link = token.boxStack.pop();
          var inLinks = prev.findLinksInto(null);

          if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
          } else {
            var newBoxWrapper = this.group.copy().addToGroup(this.group.group);

            _1v.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

            var prevLink = prev.findLinksOutOf(null)[0];
            prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
            link.changeTo(this.key, "s");
          }

          token.rewriteFlag = _1G.F_PROMO;
          token.rewrite = true;
          return nextLink;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _4M = function () {
    return new _2w();
  };

  var _1y = function (prin, box, auxs) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    var _this;

    _4d(this, _1y);

    _this = _5z(this, __captured__scope_8[3](_1y).call(this, prin, auxs));
    _this.box = box;
    return _this;
  };

  var _3V = function (prin, box, auxs) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    __captured__scope_8[5](__captured__scope_8[3](_1y.prototype), "set", this).call(this, prin, auxs);

    this.box = box;
  };

  var _3W = function (aux) {
    this.auxs.splice(this.auxs.indexOf(aux), 1);
    aux.deleteAndPreserveOutLink();
  };

  var _3X = function () {
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
  };

  var _3Y = function (map) {
    var newBoxWrapper = new _1y();
    var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
    newBoxWrapper.prin = newPrin;
    map.set(this.prin.key, newPrin.key);
    var newBox = new _62().addToGroup(newBoxWrapper);
    newBoxWrapper.box = newBox;
    newBoxWrapper.auxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var newNode;

        if (node instanceof _1y) {
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
        var newLink = new _1p(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
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
        var newLink = new _1p(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
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
  };

  var _3Z = function () {
    var map = new Map();
    return this.copyBox(map);
  };

  var _3a = function () {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    this.box.delete();

    var _arr6 = Array.from(this.auxs);

    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var aux = _arr6[_i6];
      aux.delete();
    }

    this.prin.delete();

    __captured__scope_8[5](__captured__scope_8[3](_1y.prototype), "delete", this).call(this);
  };

  var _3b = function () {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    this.box.delete();

    var _arr7 = Array.from(this.auxs);

    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var aux = _arr7[_i7];
      this.removeAux(aux); // preserve outLink
    }

    this.prin.deleteAndPreserveInLink(); //preserve inLink

    __captured__scope_8[5](__captured__scope_8[3](_1y.prototype), "delete", this).call(this);
  };

  var _3c = function (level) {
    var str = "";
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = this.nodes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var node = _step5.value;
        str += node.draw(level);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return str;
  };

  var _3d = function () {
    var wrapper = new _1y();
    var box = new _62().addToGroup(wrapper);
    var promo = new _2w().addToGroup(wrapper);
    wrapper.set(promo, box, []);
    return wrapper;
  };

  var _6p = function (obj) {
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

  var _4J = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5F = function (self, call) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    if (call && (__captured__scope_4[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6q(self);
  };

  var _6q = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5G = function (o) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    __captured__scope_4[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4[3](o);
  };

  var _72 = function (obj) {
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

  var _4f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _64 = function (self, call) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    if (call && (__captured__scope_9[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _73(self);
  };

  var _73 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _65 = function (o) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    __captured__scope_9[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9[3](o);
  };

  var _21 = function () {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    _4f(this, _21);

    return _64(this, __captured__scope_9[3](_21).call(this, null, "@", "yellow"));
  };

  var _3e = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.pop();
      token.dataStack.push(_1T.R);
      token.forward = true;
      return nextLink;
    }
  };

  var _3f = function () {
    return new _21();
  };

  var _1g = function () {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    _4J(this, _1g);

    return _5F(this, __captured__scope_4[3](_1g).call(this, null, "λ", "yellow"));
  };

  var _2t = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var data = token.dataStack.last();

      if (data == _1T.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push([_1T.LAMBDA, _1T.EMPTY]);
        token.forward = false;
        return link;
      } else if (data == _1T.R) {
        var nextLink = this.findLinksOutOf(null)[0];
        token.dataStack.pop();
        token.rewriteFlag = _1G.F_LAMBDA;
        return nextLink;
      }
    }
  };

  var _2u = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_LAMBDA && nextLink.from == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _21) {
        // M rule
        var appLink = prev.findLinksInto(null)[0];
        var appOtherLink = prev.findLinksOutOf("e")[0];
        var otherNextLink = this.findLinksInto("w")[0];
        nextLink.changeFrom(appLink.from, appLink.fromPort);
        nextLink.changeToGroup(appLink.group);
        otherNextLink.changeTo(appOtherLink.to, appOtherLink.toPort);
        otherNextLink.reverse = false;
        var otherNode = this.graph.findNodeByKey(otherNextLink.from);
        if (otherNode instanceof _2m) otherNextLink.fromPort = "n";
        otherNextLink.changeToGroup(appOtherLink.group);
        this.delete();
        prev.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _2v = function () {
    return new _1g();
  };

  var _7A = function (obj) {
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

  var _4k = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6D = function (self, call) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    if (call && (__captured__scope_D[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7B(self);
  };

  var _7B = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6E = function (o) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    __captured__scope_D[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D[3](o);
  };

  var _76 = function (obj) {
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

  var _4i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _68 = function (self, call) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    if (call && (__captured__scope_B[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _77(self);
  };

  var _77 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _69 = function (o) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    __captured__scope_B[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B[3](o);
  };

  var _25 = function (name) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    _4i(this, _25);

    return _68(this, __captured__scope_B[3](_25).call(this, null, name, "mediumpurple1", name));
  };

  var _3g = function (token, link) {
    if (token.dataStack.last() == _1T.PROMPT) {
      token.dataStack.pop();
      token.dataStack.push([this.name, _1T.EMPTY]);
      token.forward = false;
      return link;
    }
  };

  var _3h = function () {
    return new _25(this.name);
  };

  var _2B = function (text) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    var _this;

    _4k(this, _2B);

    _this = _6D(this, __captured__scope_D[3](_2B).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3j = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1T.PROMPT);
      token.forward = true;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _1T.PROMPT) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        var result = this.binOpApply(this.subType, l[0], r[0]);
        token.dataStack.push([result, _1T.EMPTY]);
        token.rewriteFlag = _1G.F_OP;
        return this.findLinksInto(null)[0];
        ;
      }
    }
  };

  var _3k = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
      var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

      if (left instanceof _2w && right instanceof _2w) {
        var wrapper = _1y.create().addToGroup(this.group);

        var newConst = new _25(token.dataStack.last()[0]).addToGroup(wrapper.box);
        new _1p(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        left.group.delete();
        right.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3l = function (type, v1, v2) {
    switch (type) {
      case _4O.And:
        return v1 && v2;

      case _4O.Or:
        return v1 || v2;

      case _4O.Plus:
        return parseFloat(v1) + parseFloat(v2);

      case _4O.Sub:
        return parseFloat(v1) - parseFloat(v2);

      case _4O.Mult:
        return parseFloat(v1) * parseFloat(v2);

      case _4O.Div:
        return parseFloat(v1) / parseFloat(v2);

      case _4O.Lte:
        return parseFloat(v1) <= parseFloat(v2);
    }
  };

  var _3m = function () {
    var newNode = new _2B(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _3n = function () {
    var node = new _2B("+");
    node.subType = _4O.Plus;
    return node;
  };

  var _3o = function () {
    var node = new _2B("*");
    node.subType = _4O.Mult;
    return node;
  };

  var _6u = function (obj) {
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

  var _4a = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5t = function (self, call) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    if (call && (__captured__scope_6[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6v(self);
  };

  var _6v = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5u = function (o) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    __captured__scope_6[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6[3](o);
  };

  var _1s = function (name) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    var _this;

    _4a(this, _1s);

    _this = _5t(this, __captured__scope_6[3](_1s).call(this, name));
    _this.text = "V";
    return _this;
  };

  var _3Q = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];
    var inNode = this.graph.findNodeByKey(inLink.from);

    if (inLink != null && outLink != null) {
      if (this.graph.findNodeByKey(outLink.to) instanceof _1g && inNode instanceof _2m) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    this.delete();
  };

  var _7G = function (obj) {
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

  var _4q = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6J = function (self, call) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (call && (__captured__scope_G[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7H(self);
  };

  var _7H = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6K = function (o) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    __captured__scope_G[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G[3](o);
  };

  var _6l = function (obj) {
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

  var _4H = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5B = function (self, call) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (call && (__captured__scope_2[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6m(self);
  };

  var _6m = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5C = function (o) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    __captured__scope_2[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2[3](o);
  };

  var _1b = function () {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    _4H(this, _1b);

    return _5B(this, __captured__scope_2[3](_1b).call(this, null, 'C0'));
  };

  var _2l = function () {
    return new _1b();
  };

  var _2H = function () {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    _4q(this, _2H);

    return _6J(this, __captured__scope_G[3](_2H).call(this, null, "if", "mediumpurple1"));
  };

  var _3t = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _2w) {
        if (token.dataStack.last()[0] == true) {
          var nextLink = this.findLinksOutOf("n")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1G.F_IF;
          token.forward = true;
          return nextLink;
        } else if (token.dataStack.last()[0] == false) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1G.F_IF;
          token.forward = true;
          return nextLink;
        }
      } else {
        var nextLink = this.findLinksOutOf("n")[0];
        var data = token.dataStack.pop();
        token.dataStack.push(data[0]);
        token.dataStack.push(_1T.PROMPT);
        token.forward = true;
        return nextLink;
      }
    } else if (link.from == this.key) {
      if (link.fromPort == "n") {
        var nextLink = this.findLinksOutOf("e")[0];
        token.dataStack.push(_1T.PROMPT);
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
        token.dataStack.push(result);
        token.forward = false;
        return nextLink;
      }
    }
  };

  var _3u = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_IF && nextLink.from == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _2w) {
        var downLink = this.findLinksInto(null)[0];
        var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
        nextLink.changeFrom(downLink.from, downLink.fromPort);
        var weak = new _1b(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
        otherLink.changeFrom(weak.key, "n");
        this.delete();
        left.group.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3v = function () {
    return new _2H();
  };

  var _7I = function (obj) {
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

  var _4s = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6L = function (self, call) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    if (call && (__captured__scope_H[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7J(self);
  };

  var _7J = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6M = function (o) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    __captured__scope_H[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_H[3](o);
  };

  var _2K = function () {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    _4s(this, _2K);

    return _6L(this, __captured__scope_H[3](_2K).call(this, null, "μ", "mediumpurple1"));
  };

  var _3w = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.rewriteFlag = _1G.F_RECUR;
      return nextLink;
    }
  };

  var _3x = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_RECUR && nextLink.from == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var wrapper = this.group.copy().addToGroup(this.group);

      _1v.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);

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
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3y = function () {
    return new _2K();
  };

  var _6s = function (obj) {
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

  var _4X = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5r = function (self, call) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (call && (__captured__scope_5[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6t(self);
  };

  var _6t = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5s = function (o) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    __captured__scope_5[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5[3](o);
  };

  var _1n = function () {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    _4X(this, _1n);

    return _5r(this, __captured__scope_5[3](_1n).call(this, "point", "", "black"));
  };

  var _3C = function (token) {
    if (token.link == null && token.dataStack.last() == _1T.PROMPT) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.forward = true;
      return nextLink;
    } else return null;
  };

  var _3D = function () {
    return new _1n();
  };

  var _3E = function (level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _7E = function (obj) {
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

  var _4o = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6H = function (self, call) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    if (call && (__captured__scope_F[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7F(self);
  };

  var _7F = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6I = function (o) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    __captured__scope_F[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F[3](o);
  };

  var _2E = function (text) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    var _this;

    _4o(this, _2E);

    _this = _6H(this, __captured__scope_F[3](_2E).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3p = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1T.PROMPT) {
        var v1 = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([this.unOpApply(this.subType, v1[0]), _1T.EMPTY]);
        token.rewriteFlag = _1G.F_OP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _3q = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

      if (prev instanceof _2w) {
        var wrapper = _1y.create().addToGroup(this.group);

        var newConst = new _25(token.dataStack.last()[0]).addToGroup(wrapper.box);
        new _1p(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        prev.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3r = function (type, v1) {
    switch (type) {
      case _4m.Not:
        return !v1;
    }
  };

  var _3s = function () {
    var newNode = new _2E(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _7T = function (obj) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_L[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_L[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_L[1](obj);
  };

  var _50 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6U = function (self, call) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    if (call && (__captured__scope_L[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7U(self);
  };

  var _7U = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6V = function (o) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    __captured__scope_L[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_L[3](o);
  };

  var _2W = function () {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    _50(this, _2W);

    return _6U(this, __captured__scope_L[3](_2W).call(this, null, "Δ", "indianred1"));
  };

  var _48 = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.pop();
        token.dataStack.push(_1T.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 2] == _1T.PROMPT) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1T.UNIT, _1T.EMPTY]);
          token.rewriteFlag = _1G.F_DELTA + data[1];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _49 = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1G.F_DELTA && nextLink.to == this.key) {
      var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      token.rewriteFlag = _1G.EMPTY;
      var data = token.dataStack.last();
      var weak1 = new _1b().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1b().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");

      var wrapper = _1y.create().addToGroup(this.group);

      var con = new _25(data[0]).addToGroup(wrapper.box);
      new _1p(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _4A = function () {
    return new _2W();
  };

  var _7V = function (obj) {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_M[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_M[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_M[1](obj);
  };

  var _52 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6W = function (self, call) {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    if (call && (__captured__scope_M[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7W(self);
  };

  var _7W = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6X = function (o) {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    __captured__scope_M[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_M[3](o);
  };

  var _2Z = function () {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    _52(this, _2Z);

    return _6W(this, __captured__scope_M[3](_2Z).call(this, null, "<<~", "indianred1"));
  };

  var _4B = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

        token.dataStack.push(_1T.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 3] == _1T.PROMPT) {
          var data = token.dataStack.pop();
          var new_v = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1T.UNIT, _1T.EMPTY]);
          token.rewriteFlag = _1G.F_DELTA + data[1] + ';' + new_v[0];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _4C = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1G.F_DELTA && nextLink.to == this.key) {
      var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      var s = string.split(";");
      var key = s[0];
      var data = s[1];
      token.rewriteFlag = _1G.EMPTY;
      var data = token.dataStack.last();
      var weak1 = new _1b().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1b().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
      this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];

      var wrapper = _1y.create().addToGroup(this.group);

      var con = new _25(data[0]).addToGroup(wrapper.box);
      new _1p(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _4D = function () {
    return new _2Z();
  };

  var _7P = function (obj) {
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

  var _4w = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6Q = function (self, call) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    if (call && (__captured__scope_J[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7Q(self);
  };

  var _7Q = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6R = function (o) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    __captured__scope_J[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_J[3](o);
  };

  var _2Q = function () {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    _4w(this, _2Q);

    return _6Q(this, __captured__scope_J[3](_2Q).call(this, null, 'p', "mediumpurple1"));
  };

  var _43 = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1T.PROMPT) {
        var data = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([data[0], _1T.EMPTY]);
        token.rewriteFlag = _1G.F_DEP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _44 = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1G.F_DEP) {
      token.rewriteFlag = _1G.EMPTY;
      var data = token.dataStack.last();

      if (isNumber(data[0]) || typeof data[0] === "boolean") {
        var outLink = this.findLinksOutOf(null)[0];
        var weak = new _1b(outLink.text).addToGroup(this.group);
        outLink.changeFrom(weak.key, "n");

        var wrapper = _1y.create().addToGroup(this.group);

        var newConst = new _25(data[0]).addToGroup(wrapper.box);
        new _1p(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        this.delete();
        token.rewrite = true;
      }

      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _45 = function () {
    return new _2Q();
  };

  var _7R = function (obj) {
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

  var _4y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6S = function (self, call) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    if (call && (__captured__scope_K[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7S(self);
  };

  var _7S = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6T = function (o) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    __captured__scope_K[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_K[3](o);
  };

  var _2T = function () {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    _4y(this, _2T);

    return _6S(this, __captured__scope_K[3](_2T).call(this, null, "d", "mediumpurple1"));
  };

  var _46 = function (token, link) {
    if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
  };

  var _47 = function () {
    return new _2T();
  };

  var _7r = function (obj) {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_S[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_S[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_S[1](obj);
  };

  var _7i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7k = function (self, call) {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    if (call && (__captured__scope_S[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7s(self);
  };

  var _7s = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7l = function (o) {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    __captured__scope_S[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_S[3](o);
  };

  var _6h = function () {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    var _this;

    _7i(this, _6h);

    _this = _7k(this, __captured__scope_S[3](_6h).call(this, null, "M", "indianred1"));

    _this.graph.machine.cells.push(_this.key);

    return _this;
  };

  var _7K = function (token, link) {
    if (link.to == this.key) {
      return this.findLinksOutOf("w")[0];
    } else if (link.from == this.key && link.fromPort == "w") {
      var data = token.dataStack.pop();
      token.dataStack.push([data[0], this.key]);
      return this.findLinksInto(null)[0];
    } else if (link.from == this.key && link.fromPort == "e") {
      token.machine.newValues.set(this.key, token.dataStack.last()[0]);
      token.delete();
      return null;
    }
  };

  var _7L = function (data) {
    var leftLink = this.findLinksOutOf("w")[0];

    if (isNumber(data) || typeof data === "boolean") {
      var value = this.graph.findNodeByKey(leftLink.to);
      var oldData = value.name;
      value.text = data;
      value.name = data;
      return oldData;
    }
  };

  var _7M = function () {
    var mod = new _6h();
    return mod;
  };

  var _7X = function (obj) {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_N[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_N[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_N[1](obj);
  };

  var _54 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6Y = function (self, call) {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    if (call && (__captured__scope_N[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7Y(self);
  };

  var _7Y = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6Z = function (o) {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    __captured__scope_N[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_N[3](o);
  };

  var _2c = function () {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    _54(this, _2c);

    return _6Y(this, __captured__scope_N[3](_2c).call(this, null, "s", "indianred1"));
  };

  var _4E = function (token, link) {
    if (link.to == this.key) {
      if (token.dataStack.last() == _1T.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push(false);
        token.rewriteFlag = _1G.F_PROP;
        token.forward = false;
        token.machine.startPropagation();
        return link;
      }
    }
  };

  var _4F = function (token, nextLink) {
    if (token.rewriteFlag == _1G.F_PROP && nextLink.to == this.key) {
      token.rewriteFlag = _1G.EMPTY;
      var data = token.machine.hasUpdate;
      token.dataStack.pop();
      token.dataStack.push([data, _1T.EMPTY]);

      var wrapper = _1y.create().addToGroup(this.group);

      var con = new _25(data).addToGroup(wrapper.box);
      new _1p(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      nextLink.changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _4G = function () {
    return new _2c();
  };

  var _7N = function (obj) {
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

  var _4u = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6N = function (self, call) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    if (call && (__captured__scope_I[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7O(self);
  };

  var _7O = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6P = function (target, property, receiver) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_I[5] = Reflect.get;
    } else {
      __captured__scope_I[5] = function _get(target, property, receiver) {
        var base = _7j(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_I[5](target, property, receiver || target);
  };

  var _7j = function (object, property) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_I[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _6O = function (o) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    __captured__scope_I[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_I[3](o);
  };

  var _2N = function () {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    var _this;

    _4u(this, _2N);

    _this = _6N(this, __captured__scope_I[3](_2N).call(this, 'diamond', '', "indianred1"));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _3z = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1T.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      var data = token.dataStack.pop();
      token.dataStack.pop();
      token.dataStack.push(data);
      token.rewriteFlag = _1G.F_MOD;
      return this.findLinksInto(null)[0];
    }
  };

  var _40 = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1G.F_MOD) {
      token.rewriteFlag = _1G.EMPTY;
      var data = token.dataStack.pop();

      if (isNumber(data[0]) || typeof data[0] === "boolean") {
        var mod = new _6h().addToGroup(this.group);
        var con = new _25(data[0]).addToGroup(this.group);
        new _1p(mod.key, con.key, "w", "s").addToGroup(this.group);
        var outLink = this.findLinksOutOf(null)[0];
        outLink.changeFrom(mod.key, "e");
        var inLink = this.findLinksInto(null)[0];
        inLink.changeTo(mod.key, "s");
        this.delete();
        token.rewrite = true;
        token.dataStack.push([data[0], mod.key]);
      }

      return nextLink;
    } else if (token.rewriteFlag == _1G.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _41 = function () {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_I[5](__captured__scope_I[3](_2N.prototype), "delete", this).call(this);
  };

  var _42 = function () {
    return new _2N();
  };

  var _1i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _d = function (graph) {
    _1i(this, _d);

    this.graph = graph;
    this.noMore = false;
  };

  var _D = _d.prototype;

  var _a = function () {
    /*
            do {
            	this.noMore = true;
            	this.collectInGroup(this.graph.child);
            } while (!this.noMore)
            */
  };

  var _b = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];

      if (node instanceof _1b || node instanceof _1e && node.findLinksInto(null).length == 0) {
        var link = node.findLinksOutOf(null)[0];
        var nextNode = this.graph.findNodeByKey(link.to);

        if (!(nextNode instanceof _1g && link.toPort == "w")) {
          this.noMore = false;
          this.collectFromBottom(node);
        }
      } else if (node instanceof _p) {
        this.collectInGroup(node);
      }
    }
  };

  var _c = function (node) {
    if (node instanceof _1e && node.findLinksInto(null).length != 0) {} else if (node instanceof _2w || node instanceof _2K) {
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
  };

  var _o = function () {
    _2e(this, _o);

    this.graph = new _1F(this);
    window.mainGraph = this.graph; // cheating!

    this.token = new _Z(this);
    this.gc = new _d(this.graph);
    this.count = 0;
    this.token.isMain = true;
    this.evalTokens = [];
    this.cells = [];
    this.evaluating = false;
    this.newValues = new Map();
    this.hasUpdate = false;
  };

  var _I = _o.prototype;

  var _e = function (source) {
    var lexer = new _1j(source + '\0');
    var parser = new _1l(lexer);
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

    var start = new _1n().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    new _1p(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
    this.deleteVarNode(this.graph.child);
  };

  var _f = function (ast, group) {
    var graph = this.graph;

    if (ast instanceof _1r) {
      var v = new _1s(ast.name).addToGroup(group);
      return new _1v(v, [v]);
    } else if (ast instanceof _1x) {
      var param = ast.param;

      var wrapper = _1y.create().addToGroup(group);

      var abs = new _1g().addToGroup(wrapper.box);
      var term = this.toGraph(ast.body, wrapper.box);
      new _1p(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
      new _1p(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
      var auxs = Array.from(term.auxs);
      var paramUsed = false;
      var auxNode;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = term.auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _aux = _step.value;

          if (_aux.name == param) {
            paramUsed = true;
            auxNode = _aux;
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

      if (paramUsed) {
        auxs.splice(auxs.indexOf(auxNode), 1);
      } else {
        auxNode = new _1b(param).addToGroup(abs.group);
      }

      new _1p(auxNode.key, abs.key, "nw", "w", true).addToGroup(abs.group);
      wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
      return new _1v(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _20) {
      var app = new _21().addToGroup(group); //lhs

      var left = this.toGraph(ast.lhs, group);
      var der = new _23(left.prin.name).addToGroup(group);
      new _1p(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

      var right = this.toGraph(ast.rhs, group);
      new _1p(app.key, der.key, "w", "s").addToGroup(group);
      new _1p(app.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1v(app, _1v.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _24) {
      var wrapper = _1y.create().addToGroup(group);

      var constant = new _25(ast.value).addToGroup(wrapper.box);
      new _1p(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
      return new _1v(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _27) {
      var binop = new _2B(ast.name).addToGroup(group);
      binop.subType = ast.type;
      var left = this.toGraph(ast.v1, group);
      var right = this.toGraph(ast.v2, group);
      new _1p(binop.key, left.prin.key, "w", "s").addToGroup(group);
      new _1p(binop.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1v(binop, _1v.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _2D) {
      var unop = new _2E(ast.name).addToGroup(group);
      unop.subType = ast.type;
      var box = this.toGraph(ast.v1, group);
      new _1p(unop.key, box.prin.key, "n", "s").addToGroup(group);
      return new _1v(unop, box.auxs);
    } else if (ast instanceof _2G) {
      var ifnode = new _2H().addToGroup(group);
      var cond = this.toGraph(ast.cond, group);
      var t1 = this.toGraph(ast.t1, group);
      var t2 = this.toGraph(ast.t2, group);
      new _1p(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
      new _1p(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
      new _1p(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
      return new _1v(ifnode, _1v.joinAuxs(_1v.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
    } else if (ast instanceof _2J) {
      var p1 = ast.param; // recur term

      var wrapper = _1y.create().addToGroup(group);

      wrapper.prin.delete();
      var recur = new _2K().addToGroup(wrapper);
      wrapper.prin = recur;
      var box = this.toGraph(ast.body, wrapper.box);
      wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
      new _1p(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
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
        auxNode1 = new _1b(p1).addToGroup(wrapper.box);
      }

      new _1p(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
      return new _1v(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _2M) {
      var term = this.toGraph(ast.term, group);
      var prov = new _2N().addToGroup(group);
      new _1p(prov.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1v(prov, term.auxs);
    } else if (ast instanceof _2P) {
      var term = this.toGraph(ast.term, group);
      var dep = new _2Q().addToGroup(group);
      new _1p(dep.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1v(dep, term.auxs);
    } else if (ast instanceof _2S) {
      var term = this.toGraph(ast.term, group);
      var deref = new _2T().addToGroup(group);
      new _1p(deref.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1v(deref, term.auxs);
    } else if (ast instanceof _2V) {
      var param = ast.param;
      var delta = new _2W().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1s(param).addToGroup(group);
      new _1p(delta.key, v.key, "w", "s").addToGroup(group);
      new _1p(delta.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _1e(aux.name).addToGroup(group);
          new _1p(aux.key, con.key, "n", "s").addToGroup(group);
          new _1p(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1v(delta, auxs);
    } else if (ast instanceof _2Y) {
      var param = ast.param;
      var setn = new _2Z().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1s(param).addToGroup(group);
      new _1p(setn.key, v.key, "w", "s").addToGroup(group);
      new _1p(setn.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _1e(aux.name).addToGroup(group);
          new _1p(aux.key, con.key, "n", "s").addToGroup(group);
          new _1p(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1v(setn, auxs);
    } else if (ast instanceof _2b) {
      var prop = new _2c().addToGroup(group);
      return new _1v(prop, []);
    }
  };

  var _g = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node instanceof _p) this.deleteVarNode(node);else if (node instanceof _1s) node.deleteAndPreserveOutLink();
    }
  };

  var _h = function () {
    this.evaluating = true;
    this.hasUpdate = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var cell = this.graph.findNodeByKey(key);
        var evalToken = new _Z(this);
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
  };

  var _j = function (a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  var _k = function (tokens) {
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
  };

  var _l = function (flag, dataStack, boxStack, modStack) {
    if (!finished) {
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
      } else this.tokenPass(this.token, flag, dataStack, boxStack);
    }
  };

  var _m = function (token, flag, dataStack, boxStack) {
    var node;

    if (!token.transited) {
      if (token.link != null) {
        var target = token.forward ? token.link.to : token.link.from;
        node = this.graph.findNodeByKey(target);
      } else node = this.graph.findNodeByKey("nd1");

      var nextLink;
      token.rewrite = false;
      nextLink = node.transition(token, token.link);
      console.log(nextLink);

      if (nextLink != null) {
        token.setLink(nextLink);
        token.transited = true;

        if (token.isMain) {
          this.printHistory(token, flag, dataStack, boxStack);
        }
      } else {
        token.transited = false;

        if (token.isMain) {
          token.setLink(null); //this.gc.collect();

          play = false;
          playing = false;
          finished = true;
        } else token.setLink(token.link);
      }
    } else {
      var target = token.forward ? token.link.from : token.link.to;
      node = this.graph.findNodeByKey(target);
      var nextLink = node.rewrite(token, token.link);
      console.log(nextLink);

      if (!token.rewrite) {
        token.transited = false;
        this.tokenPass(token, flag, dataStack, boxStack);
      } else {
        token.setLink(nextLink);
        if (token.isMain) this.printHistory(token, flag, dataStack, boxStack);
      }
    }
  };

  var _n = function (token, flag, dataStack, boxStack) {
    flag.val(token.rewriteFlag + '\n' + flag.val());
    var dataStr = token.dataStack.length == 0 ? '□' : Array.from(token.dataStack).reverse().toString() + ',□';
    dataStack.val(dataStr + '\n' + dataStack.val());
    var boxStr = token.boxStack.length == 0 ? '□' : Array.from(token.boxStack).reverse().toString() + ',□';
    boxStack.val(boxStr + '\n' + boxStack.val());
  };

  var __constructor = function () {};

  _$0.mainGraph = null;
  var _2h = _$2;
  $$0.value = _w, _$3(_S, "addToGraph", $$0);
  $$0.value = _x, _$3(_S, "addToGroup", $$0);
  $$0.value = _y, _$3(_S, "changeToGroup", $$0);
  $$0.value = _z, _$3(_S, "findLinksConnected", $$0);
  $$0.value = _10, _$3(_S, "findLinksInto", $$0);
  $$0.value = _11, _$3(_S, "findLinksOutOf", $$0);
  $$0.value = _12, _$3(_S, "copy", $$0);
  $$0.value = _13, _$3(_S, "delete", $$0);
  $$0.value = _14, _$3(_S, "draw", $$0);
  $$0.value = _15, _$3(_S, "transition", $$0);
  $$0.value = _16, _$3(_S, "rewrite", $$0);

  var _R = (__constructor.prototype = _S, new __constructor());

  $$0.value = _p, _$3(_R, "constructor", $$0);
  $$0.value = _q, _$3(_R, "addNode", $$0);
  $$0.value = _r, _$3(_R, "removeNode", $$0);
  $$0.value = _s, _$3(_R, "addLink", $$0);
  $$0.value = _t, _$3(_R, "removeLink", $$0);
  $$0.value = _u, _$3(_R, "delete", $$0);
  $$0.value = _v, _$3(_R, "draw", $$0);
  _p.prototype = _R;

  _$4(_p, _17);

  $$0.value = _18, _$3(_T, "clear", $$0);
  $$0.value = _19, _$3(_T, "addNode", $$0);
  $$0.value = _1A, _$3(_T, "removeNode", $$0);
  $$0.value = _1B, _$3(_T, "findNodeByKey", $$0);
  $$0.value = _1C, _$3(_T, "addLink", $$0);
  $$0.value = _1D, _$3(_T, "removeLink", $$0);
  $$0.value = _1E, _$3(_T, "draw", $$0);

  var _2 = (__constructor.prototype = _T, new __constructor());

  var _1T = {
    EMPTY: "-",
    PROMPT: "*",
    LAMBDA: "\u03BB",
    R: "@",
    UNIT: "\u2022",
    IF0: "if0",
    IF1: "if1"
  };
  $$0.value = _1R, _$3(_Z, "CompData", $$0);
  var _1G = {
    EMPTY: "\u25A1",
    F_LAMBDA: "<\u03BB>",
    F_OP: "<$>",
    F_IF: "<if>",
    F_C: "<C>",
    F_PROMO: "<!>",
    F_RECUR: "<\u03BC>",
    F_MOD: "<M>",
    F_DEP: "<p>",
    F_DELTA: "<\u0394>",
    F_PROP: "<s>"
  };
  $$0.value = _1S, _$3(_Z, "RewriteFlag", $$0);
  $$0.value = _W, _$3(_B, "setLink", $$0);
  $$0.value = _X, _$3(_B, "reset", $$0);
  $$0.value = _Y, _$3(_B, "delete", $$0);
  $$0.value = _a, _$3(_D, "collect", $$0);

  var _1d = (__constructor.prototype = _S, new __constructor());

  _2m.prototype = _1d;

  _$4(_2m, _17);

  $$0.value = _2m, _$3(_1d, "constructor", $$0);
  $$0.value = _2n, _$3(_1d, "transition", $$0);
  $$0.value = _2o, _$3(_1d, "deleteAndPreserveInLink", $$0);
  $$0.value = _2p, _$3(_1d, "deleteAndPreserveOutLink", $$0);

  var _1c = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _1b, _$3(_1c, "constructor", $$0);
  $$0.value = _2l, _$3(_1c, "copy", $$0);
  _1b.prototype = _1c;

  _$4(_1b, _2m);

  var _1f = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _1e, _$3(_1f, "constructor", $$0);
  $$0.value = _2q, _$3(_1f, "transition", $$0);
  $$0.value = _2r, _$3(_1f, "rewrite", $$0);
  $$0.value = _2s, _$3(_1f, "copy", $$0);
  _1e.prototype = _1f;

  _$4(_1e, _2m);

  var _1h = (__constructor.prototype = _S, new __constructor());

  $$0.value = _1g, _$3(_1h, "constructor", $$0);
  $$0.value = _2t, _$3(_1h, "transition", $$0);

  var _22 = (__constructor.prototype = _S, new __constructor());

  $$0.value = _21, _$3(_22, "constructor", $$0);
  $$0.value = _3e, _$3(_22, "transition", $$0);
  $$0.value = _3f, _$3(_22, "copy", $$0);
  _21.prototype = _22;

  _$4(_21, _17);

  $$0.value = _2u, _$3(_1h, "rewrite", $$0);
  $$0.value = _2v, _$3(_1h, "copy", $$0);
  _1g.prototype = _1h;

  _$4(_1g, _17);

  $$0.value = _b, _$3(_D, "collectInGroup", $$0);

  var _2x = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _2w, _$3(_2x, "constructor", $$0);
  $$0.value = _4K, _$3(_2x, "transition", $$0);

  var _1u = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _23, _$3(_1u, "constructor", $$0);
  $$0.value = _3R, _$3(_1u, "copy", $$0);
  _23.prototype = _1u;

  _$4(_23, _2m);

  var _1w = (__constructor.prototype = _R, new __constructor());

  $$0.value = _1v, _$3(_1w, "constructor", $$0);
  $$0.value = _3S, _$3(_1w, "set", $$0);

  var _5w = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _5v, _$3(_5w, "constructor", $$0);
  $$0.value = _6d, _$3(_5w, "copy", $$0);
  $$0.value = _6e, _$3(_5w, "delete", $$0);
  _5v.prototype = _5w;

  _$4(_5v, _2m);

  $$0.value = _3F, _$3(_1q, "addToNode", $$0);
  $$0.value = _3G, _$3(_1q, "addToGraph", $$0);
  $$0.value = _3H, _$3(_1q, "addToGroup", $$0);
  $$0.value = _3I, _$3(_1q, "changeToGroup", $$0);
  $$0.value = _3J, _$3(_1q, "changeFrom", $$0);
  $$0.value = _3K, _$3(_1q, "changeTo", $$0);
  $$0.value = _3L, _$3(_1q, "focus", $$0);
  $$0.value = _3M, _$3(_1q, "clearFocus", $$0);
  $$0.value = _3N, _$3(_1q, "delete", $$0);
  $$0.value = _3O, _$3(_1q, "toString", $$0);
  $$0.value = _3P, _$3(_1q, "draw", $$0);
  $$0.value = _3T, _$3(_1w, "createPaxsOnTopOf", $$0);
  _1v.prototype = _1w;
  $$0.value = _3U, _$3(_1v, "joinAuxs", $$0);

  _$4(_1v, _p);

  $$0.value = _4L, _$3(_2x, "rewrite", $$0);
  $$0.value = _4M, _$3(_2x, "copy", $$0);
  _2w.prototype = _2x;

  _$4(_2w, _2m);

  var _2L = (__constructor.prototype = _1d, new __constructor());

  $$0.value = _2K, _$3(_2L, "constructor", $$0);
  $$0.value = _3w, _$3(_2L, "transition", $$0);
  $$0.value = _3x, _$3(_2L, "rewrite", $$0);
  $$0.value = _3y, _$3(_2L, "copy", $$0);
  _2K.prototype = _2L;

  _$4(_2K, _2m);

  $$0.value = _c, _$3(_D, "collectFromBottom", $$0);
  $$0.value = _2y, _$3(_1k, "_nextChar", $$0);
  _5I.EOF = "EOF";
  _5I.LAMBDA = "LAMBDA";
  _5I.LPAREN = "LPAREN";
  _5I.RPAREN = "RPAREN";
  _5I.CLPAREN = "CLPAREN";
  _5I.CRPAREN = "CRPAREN";
  _5I.LCID = "LCID";
  _5I.DOT = "DOT";
  _5I.COMMA = "COMMA";
  _5I.APP = "APP";
  _5I.LET = "LET";
  _5I.DEFINE = "DEFINE";
  _5I.IN = "IN";
  _5I.REC = "REC";
  _5I.INT = "INT";
  _5I.TRUE = "TRUE";
  _5I.FALSE = "FALSE";
  _5I.NOT = "NOT";
  _5I.AND = "AND";
  _5I.OR = "OR";
  _5I.PLUS = "PLUS";
  _5I.SUB = "SUB";
  _5I.MULT = "MULT";
  _5I.DIV = "DIV";
  _5I.LTE = "LTE";
  _5I.IF = "IF";
  _5I.THEN = "THEN";
  _5I.ELSE = "ELSE";
  _5I.SET = "SET";
  _5I.CHANGE = "CHANGE";
  _5I.TO = "TO";
  _5I.PROP = "PROP";
  _5I.DEP = "DEP";
  _5I.DEREF = "DEREF";
  $$0.value = _2z, _$3(_1k, "_nextToken", $$0);
  $$0.value = _30, _$3(_1k, "token", $$0);
  $$0.value = _31, _$3(_1k, "lookahead", $$0);
  $$0.value = _32, _$3(_1k, "fail", $$0);
  $$0.value = _33, _$3(_1k, "next", $$0);
  $$0.value = _34, _$3(_1k, "match", $$0);
  $$0.value = _35, _$3(_1k, "skip", $$0);
  $$0.value = _36, _$3(_1m, "parse", $$0);
  $$0.value = _37, _$3(_1m, "term", $$0);
  $$0.value = _38, _$3(_1m, "isBinaryOp", $$0);

  var _29 = (__constructor.prototype = _2A, new __constructor());

  _2D.prototype = _29;

  _$4(_2D, _3i);

  $$0.value = _2D, _$3(_29, "constructor", $$0);

  var _28 = (__constructor.prototype = _29, new __constructor());

  $$0.value = _27, _$3(_28, "constructor", $$0);
  _27.prototype = _28;

  _$4(_27, _2D);

  var _4O = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5
  };
  $$0.value = _39, _$3(_1m, "parseBinop", $$0);
  $$0.value = _3A, _$3(_1m, "application", $$0);
  var _4m = {
    Not: 0
  };
  $$0.value = _3B, _$3(_1m, "atom", $$0);

  var _1o = (__constructor.prototype = _S, new __constructor());

  $$0.value = _1n, _$3(_1o, "constructor", $$0);
  $$0.value = _3C, _$3(_1o, "transition", $$0);
  $$0.value = _3D, _$3(_1o, "copy", $$0);
  $$0.value = _3E, _$3(_1o, "draw", $$0);
  _1n.prototype = _1o;

  _$4(_1n, _17);

  $$0.value = _e, _$3(_I, "compile", $$0);

  var _1t = (__constructor.prototype = _1u, new __constructor());

  $$0.value = _1s, _$3(_1t, "constructor", $$0);
  $$0.value = _3Q, _$3(_1t, "deleteAndPreserveOutLink", $$0);
  _1s.prototype = _1t;

  _$4(_1s, _23);

  var _1z = (__constructor.prototype = _1w, new __constructor());

  $$0.value = _1y, _$3(_1z, "constructor", $$0);
  $$0.value = _3V, _$3(_1z, "set", $$0);
  $$0.value = _3W, _$3(_1z, "removeAux", $$0);
  $$0.value = _3X, _$3(_1z, "moveOut", $$0);

  var _63 = (__constructor.prototype = _R, new __constructor());

  $$0.value = _62, _$3(_63, "constructor", $$0);
  $$0.value = _6f, _$3(_63, "copy", $$0);
  $$0.value = _6g, _$3(_63, "draw", $$0);
  _62.prototype = _63;

  _$4(_62, _p);

  $$0.value = _3Y, _$3(_1z, "copyBox", $$0);
  $$0.value = _3Z, _$3(_1z, "copy", $$0);
  $$0.value = _3a, _$3(_1z, "delete", $$0);
  $$0.value = _3b, _$3(_1z, "deleteAndPreserveLink", $$0);
  $$0.value = _3c, _$3(_1z, "draw", $$0);
  _1y.prototype = _1z;
  $$0.value = _3d, _$3(_1y, "create", $$0);

  _$4(_1y, _1v);

  var _26 = (__constructor.prototype = _S, new __constructor());

  $$0.value = _25, _$3(_26, "constructor", $$0);
  $$0.value = _3g, _$3(_26, "transition", $$0);
  $$0.value = _3h, _$3(_26, "copy", $$0);
  _25.prototype = _26;

  _$4(_25, _17);

  var _2C = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2B, _$3(_2C, "constructor", $$0);
  $$0.value = _3j, _$3(_2C, "transition", $$0);
  $$0.value = _3k, _$3(_2C, "rewrite", $$0);
  $$0.value = _3l, _$3(_2C, "binOpApply", $$0);
  $$0.value = _3m, _$3(_2C, "copy", $$0);
  _2B.prototype = _2C;
  $$0.value = _3n, _$3(_2B, "createPlus", $$0);
  $$0.value = _3o, _$3(_2B, "createMult", $$0);

  _$4(_2B, _17);

  var _2F = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2E, _$3(_2F, "constructor", $$0);
  $$0.value = _3p, _$3(_2F, "transition", $$0);
  $$0.value = _3q, _$3(_2F, "rewrite", $$0);
  $$0.value = _3r, _$3(_2F, "unOpApply", $$0);
  $$0.value = _3s, _$3(_2F, "copy", $$0);
  _2E.prototype = _2F;

  _$4(_2E, _17);

  var _2I = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2H, _$3(_2I, "constructor", $$0);
  $$0.value = _3t, _$3(_2I, "transition", $$0);
  $$0.value = _3u, _$3(_2I, "rewrite", $$0);
  $$0.value = _3v, _$3(_2I, "copy", $$0);
  _2H.prototype = _2I;

  _$4(_2H, _17);

  var _2O = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2N, _$3(_2O, "constructor", $$0);
  $$0.value = _3z, _$3(_2O, "transition", $$0);

  var _6i = (__constructor.prototype = _S, new __constructor());

  $$0.value = _6h, _$3(_6i, "constructor", $$0);
  $$0.value = _7K, _$3(_6i, "transition", $$0);
  $$0.value = _7L, _$3(_6i, "update", $$0);
  $$0.value = _7M, _$3(_6i, "copy", $$0);
  _6h.prototype = _6i;

  _$4(_6h, _17);

  $$0.value = _40, _$3(_2O, "rewrite", $$0);
  $$0.value = _41, _$3(_2O, "deleteAndPreserveInLink", $$0);
  $$0.value = _42, _$3(_2O, "copy", $$0);
  _2N.prototype = _2O;

  _$4(_2N, _17);

  var _2R = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2Q, _$3(_2R, "constructor", $$0);
  $$0.value = _43, _$3(_2R, "transition", $$0);
  $$0.value = _44, _$3(_2R, "rewrite", $$0);
  $$0.value = _45, _$3(_2R, "copy", $$0);
  _2Q.prototype = _2R;

  _$4(_2Q, _17);

  var _2U = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2T, _$3(_2U, "constructor", $$0);
  $$0.value = _46, _$3(_2U, "transition", $$0);
  $$0.value = _47, _$3(_2U, "copy", $$0);
  _2T.prototype = _2U;

  _$4(_2T, _17);

  var _2X = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2W, _$3(_2X, "constructor", $$0);
  $$0.value = _48, _$3(_2X, "transition", $$0);
  $$0.value = _49, _$3(_2X, "rewrite", $$0);
  $$0.value = _4A, _$3(_2X, "copy", $$0);
  _2W.prototype = _2X;

  _$4(_2W, _17);

  var _2a = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2Z, _$3(_2a, "constructor", $$0);
  $$0.value = _4B, _$3(_2a, "transition", $$0);
  $$0.value = _4C, _$3(_2a, "rewrite", $$0);
  $$0.value = _4D, _$3(_2a, "copy", $$0);
  _2Z.prototype = _2a;

  _$4(_2Z, _17);

  var _2d = (__constructor.prototype = _S, new __constructor());

  $$0.value = _2c, _$3(_2d, "constructor", $$0);
  $$0.value = _4E, _$3(_2d, "transition", $$0);
  $$0.value = _4F, _$3(_2d, "rewrite", $$0);
  $$0.value = _4G, _$3(_2d, "copy", $$0);
  _2c.prototype = _2d;

  _$4(_2c, _17);

  $$0.value = _f, _$3(_I, "toGraph", $$0);
  $$0.value = _g, _$3(_I, "deleteVarNode", $$0);
  $$0.value = _h, _$3(_I, "startPropagation", $$0);
  $$0.value = _j, _$3(_I, "shuffle", $$0);
  $$0.value = _k, _$3(_I, "batchPass", $$0);
  $$0.value = _l, _$3(_I, "pass", $$0);
  $$0.value = _m, _$3(_I, "tokenPass", $$0);
  $$0.value = _n, _$3(_I, "printHistory", $$0);

  var _3 = (__constructor.prototype = _I, new __constructor());

  _3.graph = _2;

  var _4 = (__constructor.prototype = _B, new __constructor());

  _4.machine = _3;
  _4.forward = true;
  _4.rewrite = false;
  _4.transited = false;
  _4.link = null;
  _4.rewriteFlag = "\u25A1";
  var _8 = ["*"];
  _4.dataStack = _8;
  var _A = [];
  _4.boxStack = _A;
  _4.isMain = true;
  _3.token = _4;

  var _C = (__constructor.prototype = _D, new __constructor());

  _C.graph = _2;
  _C.noMore = false;
  _3.gc = _C;
  _3.count = 0;
  var _F = [];
  _3.evalTokens = _F;
  var _G = [];
  _3.cells = _G;
  _3.evaluating = false;

  var _H = new _$5();

  _3.newValues = _H;
  _3.hasUpdate = false;
  _2.machine = _3;
  _2.key = 0;
  _2.linkKey = 0;

  var _L = new _$5();

  _2.allNodes = _L;
  var _M = [];
  _2.allLinks = _M;

  var _N = (__constructor.prototype = _R, new __constructor());

  _N.key = null;
  _N.shape = null;
  _N.text = null;
  _N.colour = null;
  _N.name = void 0;
  _N.graph = null;
  _N.group = null;
  _N.width = null;
  _N.height = null;
  var _P = [];
  _N.links = _P;
  var _Q = [];
  _N.nodes = _Q;
  _2.child = _N;
  _$0.mainGraph = _2;
  _$0.machine = _3;
}).call(this);
}.call(window));

/***/ })

/******/ });
//# sourceMappingURL=main.requirejs.js.map