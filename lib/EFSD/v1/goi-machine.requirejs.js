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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/EFSD/v1/goi-machine.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/EFSD/v1/goi-machine.prepack.js":
/*!********************************************!*\
  !*** ./lib/EFSD/v1/goi-machine.prepack.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_48, _48, _1S, _1S];
        break;

      case 1:
        __captured = [_6Z, _6Z, _5W, _5W];
        break;

      case 2:
        __captured = [_6d, _6d, _5c, _5c];
        break;

      case 3:
        __captured = [_6g, _6g, _5g, _5g];
        break;

      case 4:
        __captured = [_6i, _6i, _5i, _5i, _5j, _5j];
        break;

      case 5:
        __captured = [_6l, _6l, _5n, _5n];
        break;

      case 6:
        __captured = [_6n, _6n, _5p, _5p];
        break;

      case 7:
        __captured = [_6p, _6p, _5r, _5r];
        break;

      case 8:
        __captured = [_6r, _6r, _5t, _5t];
        break;

      case 9:
        __captured = [_6t, _6t, _5v, _5v];
        break;

      case 10:
        __captured = [_6v, _6v, _5y, _5y];
        break;

      case 11:
        __captured = [_6y, _6y, _62, _62];
        break;

      case 12:
        __captured = [_70, _70, _64, _64];
        break;

      case 13:
        __captured = [_72, _72, _66, _66];
        break;

      case 14:
        __captured = [_74, _74, _68, _68];
        break;

      case 15:
        __captured = [_76, _76, _6A, _6A];
        break;

      case 16:
        __captured = [_7B, _7B, _6C, _6C, _6D, _6D];
        break;

      case 17:
        __captured = [_7D, _7D, _6F, _6F];
        break;

      case 18:
        __captured = [_7F, _7F, _6H, _6H];
        break;

      case 19:
        __captured = [_7H, _7H, _6J, _6J];
        break;

      case 20:
        __captured = [_7J, _7J, _6L, _6L];
        break;

      case 21:
        __captured = [_7L, _7L, _6N, _6N];
        break;

      case 22:
        __captured = [_7N, _7N, _6P, _6P];
        break;

      case 23:
        __captured = [_6b, _6b, _5Z, _5Z, _5a, _5a];
        break;

      case 24:
        __captured = [_7c, _7c, _7R, _7R, _7S, _7S];
        break;

      case 25:
        __captured = [_7e, _7e, _7V, _7V];
        break;

      case 26:
        __captured = [_7g, _7g, _7X, _7X];
        break;

      case 27:
        __captured = [_7j, _7j, _7b, _7b];
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
  var _$3 = _$0.Map;
  var _$4 = _$1.defineProperty;
  var _$5 = _$1.setPrototypeOf;

  var _2g = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4P = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1t = function (param, body) {
    _4P(this, _1t);

    this.param = param;
    this.body = body;
  };

  var _4T = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _20 = function (lhs, rhs) {
    _4T(this, _20);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _4M = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1m = function (value, name) {
    _4M(this, _1m);

    this.value = value;
    this.name = name;
  };

  var _4W = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _24 = function (value) {
    _4W(this, _24);

    this.value = value;
  };

  var _5w = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3W = function (type, name) {
    _5w(this, _3W);

    this.type = type;
    this.name = name;
  };

  var _2A = _3W.prototype;

  var _70 = function (obj) {
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

  var _4a = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _63 = function (self, call) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    if (call && (__captured__scope_D[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _71(self);
  };

  var _71 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _64 = function (o) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    __captured__scope_D[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D[3](o);
  };

  var _2D = function (type, name, v1) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    var _this;

    _4a(this, _2D);

    _this = _63(this, __captured__scope_D[3](_2D).call(this, type, name));
    _this.v1 = v1;
    return _this;
  };

  var _6v = function (obj) {
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

  var _4Y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5x = function (self, call) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    if (call && (__captured__scope_B[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6w(self);
  };

  var _6w = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5y = function (o) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    __captured__scope_B[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B[3](o);
  };

  var _27 = function (type, name, v1, v2) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    var _this;

    _4Y(this, _27);

    _this = _5x(this, __captured__scope_B[3](_27).call(this, type, name, v1));
    _this.v2 = v2;
    return _this;
  };

  var _4e = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2G = function (cond, t1, t2) {
    _4e(this, _2G);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  var _4g = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2J = function (param, body) {
    _4g(this, _2J);

    this.param = param;
    this.body = body;
  };

  var _4i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2M = function (term) {
    _4i(this, _2M);

    this.term = term;
  };

  var _4o = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2V = function (param, body) {
    _4o(this, _2V);

    this.param = param;
    this.body = body;
  };

  var _4r = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2a = function (param, body) {
    _4r(this, _2a);

    this.param = param;
    this.body = body;
  };

  var _4t = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2d = function () {
    _4t(this, _2d);
  };

  var _4k = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2P = function (term) {
    _4k(this, _2P);

    this.term = term;
  };

  var _4m = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2S = function (term) {
    _4m(this, _2S);

    this.term = term;
  };

  var _4A = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6Y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4w = function (type, value, pred) {
    _6Y(this, _4w);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _1e = function (input) {
    _4A(this, _1e);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _1f = _1e.prototype;

  var _2h = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _2i = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case 'λ':
      case '\\':
        this._token = new _4w(_4w.LAMBDA);
        break;

      case '.':
        this._token = new _4w(_4w.DOT);
        break;

      case ',':
        this._token = new _4w(_4w.COMMA);
        break;

      case ';':
        this._token = new _4w(_4w.SEQ);
        break;

      case '(':
        this._token = new _4w(_4w.LPAREN);
        break;

      case ')':
        this._token = new _4w(_4w.RPAREN);
        break;

      case '{':
        this._token = new _4w(_4w.CLPAREN);
        break;

      case '}':
        this._token = new _4w(_4w.CRPAREN);
        break;

      case '\0':
        this._token = new _4w(_4w.EOF);
        break;

      case '~':
        this._token = new _4w(_4w.NOT);
        break;

      case '&':
        if (this._nextChar() == '&') this._token = new _4w(_4w.AND, null, 5);else {
          this._index--;
          this.fail();
        }
        break;

      case '|':
        var c2 = this._nextChar();

        if (c2 == '|') this._token = new _4w(_4w.OR, null, 4);else {
          this._index--;
          this.fail();
        }
        break;

      case '+':
        this._token = new _4w(_4w.PLUS, null, 12);
        break;

      case '-':
        this._token = new _4w(_4w.SUB, null, 12);
        break;

      case '*':
        this._token = new _4w(_4w.MULT, null, 13);
        break;

      case '/':
        this._token = new _4w(_4w.DIV, null, 13);
        break;

      case '<':
        if (this._nextChar() == '=') this._token = new _4w(_4w.LTE, null, 10);else {
          this._index--;
          this.fail();
        }
        break;

      case '=':
        this._token = new _4w(_4w.DEFINE);
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
          if (str == "let") this._token = new _4w(_4w.LET);else if (str == "in") this._token = new _4w(_4w.IN);else if (str == "rec") this._token = new _4w(_4w.REC);else if (str == "true") this._token = new _4w(_4w.TRUE);else if (str == "false") this._token = new _4w(_4w.FALSE);else if (str == "if") this._token = new _4w(_4w.IF);else if (str == "then") this._token = new _4w(_4w.THEN);else if (str == "else") this._token = new _4w(_4w.ELSE);else if (str == "link") this._token = new _4w(_4w.CHANGE);else if (str == "set") this._token = new _4w(_4w.SET);else if (str == "to") this._token = new _4w(_4w.TO);else if (str == "step") this._token = new _4w(_4w.PROP);else if (str == "peek") this._token = new _4w(_4w.DEP);else if (str == "deref") this._token = new _4w(_4w.DEREF);else this._token = new _4w(_4w.LCID, str);
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
            this._token = new _4w(_4w.INT, parseFloat(_str));
          } else {
            this.fail();
          }

    }
  };

  var _2j = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _2k = function () {
    return this._token;
  };

  var _2l = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _2m = function (type) {
    return this._token.type == type;
  };

  var _2n = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _2o = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _4J = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1g = function (lexer) {
    _4J(this, _1g);

    this.lexer = lexer;
  };

  var _1h = _1g.prototype;

  var _2p = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_4w.EOF);
    return result;
  };

  var _2q = function (ctx) {
    if (this.lexer.skip(_4w.LAMBDA)) {
      var id = this.lexer.token(_4w.LCID);
      this.lexer.match(_4w.DOT);
      var term = this.term([id].concat(ctx));
      return new _1t(id, term);
    } else if (this.lexer.skip(_4w.LET)) {
      var _id = this.lexer.token(_4w.LCID);

      this.lexer.match(_4w.DEFINE);
      var N = this.term(ctx);
      this.lexer.match(_4w.IN);
      var M = this.term([_id].concat(ctx));
      return new _20(new _1t(_id, M), N);
    } else if (this.lexer.skip(_4w.REC)) {
      var _id2 = this.lexer.token(_4w.LCID);

      this.lexer.match(_4w.DOT);

      var _term = this.term([_id2].concat(ctx));

      return new _2J(_id2, _term);
    } else if (this.lexer.skip(_4w.IF)) {
      var cond = this.term(ctx);
      this.lexer.match(_4w.THEN);
      var t1 = this.term(ctx);
      this.lexer.match(_4w.ELSE);
      var t2 = this.term(ctx);
      return new _2G(cond, t1, t2);
    } else {
      return this.application(ctx);
    }
  };

  var _2r = function (token) {
    return token.type == _4w.AND || token.type == _4w.OR || token.type == _4w.PLUS || token.type == _4w.SUB || token.type == _4w.MULT || token.type == _4w.DIV || token.type == _4w.LTE;
  };

  var _2s = function (ctx, lhs, pred) {
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

      if (op.type == _4w.AND) {
        lhs = new _27(_4B.And, "&&", lhs, rhs);
      } else if (op.type == _4w.OR) {
        lhs = new _27(_4B.Or, "||", lhs, rhs);
      } else if (op.type == _4w.PLUS) {
        lhs = new _27(_4B.Plus, "+", lhs, rhs);
      } else if (op.type == _4w.SUB) {
        lhs = new _27(_4B.Sub, "-", lhs, rhs);
      } else if (op.type == _4w.MULT) {
        lhs = new _27(_4B.Mult, "*", lhs, rhs);
      } else if (op.type == _4w.DIV) {
        lhs = new _27(_4B.Div, "/", lhs, rhs);
      } else if (op.type == _4w.LTE) {
        lhs = new _27(_4B.Lte, "<=", lhs, rhs);
      }
    }

    return lhs;
  };

  var _2t = function (ctx) {
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

  var _2u = function (ctx) {
    if (this.lexer.skip(_4w.LPAREN)) {
      var _term2 = this.term(ctx);

      this.lexer.match(_4w.RPAREN);
      return _term2;
    } else if (this.lexer.next(_4w.LCID)) {
      var id = this.lexer.token(_4w.LCID);
      return new _1m(ctx.indexOf(id), id);
    } else if (this.lexer.next(_4w.INT)) {
      var n = this.lexer.token(_4w.INT);
      return new _24(n);
    } else if (this.lexer.skip(_4w.TRUE)) {
      return new _24(true);
    } else if (this.lexer.skip(_4w.FALSE)) {
      return new _24(false);
    } else if (this.lexer.skip(_4w.NOT)) {
      var _term3 = this.term(ctx);

      return new _2D(_4b.Not, "~", _term3);
    } else if (this.lexer.skip(_4w.PROP)) {
      return new _2d();
    } else if (this.lexer.skip(_4w.DEP)) {
      var term = this.term(ctx);
      return new _2P(term);
    } else if (this.lexer.skip(_4w.DEREF)) {
      var term = this.term(ctx);
      return new _2S(term);
    } else if (this.lexer.skip(_4w.CLPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_4w.CRPAREN);
      return new _2M(term);
    } else if (this.lexer.skip(_4w.CHANGE)) {
      var _id3 = this.lexer.token(_4w.LCID);

      this.lexer.match(_4w.TO);

      var _term4 = this.term(ctx);

      return new _2V(_id3, _term4);
    } else if (this.lexer.skip(_4w.SET)) {
      var _id4 = this.lexer.token(_4w.LCID);

      this.lexer.match(_4w.TO);

      var _term5 = this.term(ctx);

      return new _2a(_id4, _term5);
    } else {
      return undefined;
    }
  };

  var _1d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _u = function (machine) {
    _1d(this, _u);

    this.machine = machine;
    this.reset();
  };

  var _L = _u.prototype;

  var _1N = function () {
    return _1W;
  };

  var _1O = function () {
    return _1C;
  };

  var _r = function (link) {
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

  var _s = function () {
    this.forward = true;
    this.rewrite = false;
    this.transited = false;
    this.link = null;
    this.rewriteFlag = _1C.EMPTY;
    this.dataStack = [_1W.PROMPT];
    this.boxStack = [];
  };

  var _t = function () {
    this.setLink(null);
    this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
  };

  var _4L = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1U = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var _1k = function (from, to, fromPort, toPort, reverse) {
    _4L(this, _1k);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.reverse = reverse;
    this.colour = null;
    this.penWidth = null;
    this.addToGraph(_1B.mainGraph); // cheating

    this.addToNode(); // cheating
  };

  var _1l = _1k.prototype;

  var _2x = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _2y = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _2z = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _30 = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _31 = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _32 = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _33 = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _34 = function () {
    this.colour = null;
    this.penWidth = null;
  };

  var _35 = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _36 = function () {
    return this.from + "->" + this.to;
  };

  var _1V = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _48 = function (obj) {
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

  var _1P = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1Q = function (self, call) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (call && (__captured__scope_1[1](call) === "object" || typeof call === "function")) {
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

  var _1S = function (target, property, receiver) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_1[3] = Reflect.get;
    } else {
      __captured__scope_1[3] = function _get(target, property, receiver) {
        var base = _4v(target, property);

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

  var _4v = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _1R(object);
      if (object === null) break;
    }

    return object;
  };

  var _1T = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _j = function (shape, text, colour, name) {
    _1T(this, _j);

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
    this.addToGraph(_1B.mainGraph); // cheating!
  };

  var _C = _j.prototype;

  var _Y = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _Z = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _a = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _b = function () {
    return this.links;
  };

  var _c = function (toPort) {
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

  var _d = function (fromPort) {
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

  var _e = function (graph) {
    var newNode = new _j(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
  };

  var _f = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _g = function (token, link) {
    return link;
  };

  var _h = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _S = function () {
    var _this;

    _1P(this, _S);

    _this = _1Q(this, _1R(_S).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _T = function (node) {
    this.nodes.push(node);
  };

  var _U = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _V = function (link) {
    this.links.push(link);
  };

  var _W = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _X = function () {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_1[3](_1R(_S.prototype), "delete", this).call(this);
  };

  var _q = function (machine) {
    _1V(this, _q);

    this.machine = machine;
    this.clear();
  };

  var _D = _q.prototype;

  var _k = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _S();
  };

  var _l = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _m = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _n = function (key) {
    return this.allNodes.get(key);
  };

  var _o = function (link) {
    this.allLinks.push(link);
  };

  var _p = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _6g = function (obj) {
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

  var _4O = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5f = function (self, call) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    if (call && (__captured__scope_4[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6h(self);
  };

  var _6h = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5g = function (o) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    __captured__scope_4[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4[3](o);
  };

  var _7c = function (obj) {
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

  var _6f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7Q = function (self, call) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    if (call && (__captured__scope_P[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7d(self);
  };

  var _7d = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7S = function (target, property, receiver) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_P[5] = Reflect.get;
    } else {
      __captured__scope_P[5] = function _get(target, property, receiver) {
        var base = _7i(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_P[5](target, property, receiver || target);
  };

  var _7i = function (object, property) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_P[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _7R = function (o) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    __captured__scope_P[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_P[3](o);
  };

  var _6b = function (obj) {
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

  var _5X = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5Y = function (self, call) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    if (call && (__captured__scope_O[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6c(self);
  };

  var _6c = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5a = function (target, property, receiver) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_O[5] = Reflect.get;
    } else {
      __captured__scope_O[5] = function _get(target, property, receiver) {
        var base = _7P(target, property);

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

  var _7P = function (object, property) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_O[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _5Z = function (o) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    __captured__scope_O[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_O[3](o);
  };

  var _39 = function (shape, text, name) {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var _this;

    _5X(this, _39);

    _this = _5Y(this, __captured__scope_O[3](_39).call(this, shape, text, "cyan", name));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _3A = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _3B = function () {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_O[5](__captured__scope_O[3](_39.prototype), "delete", this).call(this);
  };

  var _3C = function () {
    var __captured__scope_O = __scope_0[23] || __get_scope_binding_0(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (inLink != null && outLink != null) {
      outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    __captured__scope_O[5](__captured__scope_O[3](_39.prototype), "delete", this).call(this);
  };

  var _5d = function (name) {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    _6f(this, _5d);

    return _7Q(this, __captured__scope_P[3](_5d).call(this, null, "?", name));
  };

  var _6Q = function () {
    return new _5d(this.name);
  };

  var _6R = function () {
    var __captured__scope_P = __scope_0[24] || __get_scope_binding_0(24);

    this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

    __captured__scope_P[5](__captured__scope_P[3](_5d.prototype), "delete", this).call(this);
  };

  var _7J = function (obj) {
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

  var _4q = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6K = function (self, call) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    if (call && (__captured__scope_L[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7K(self);
  };

  var _7K = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6L = function (o) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    __captured__scope_L[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_L[3](o);
  };

  var _2Y = function (name) {
    var __captured__scope_L = __scope_0[20] || __get_scope_binding_0(20);

    _4q(this, _2Y);

    return _6K(this, __captured__scope_L[3](_2Y).call(this, null, "C", name));
  };

  var _3z = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.boxStack.push(link);
      token.rewriteFlag = _1C.F_C;
      return nextLink;
    } else if (link.from == this.key && token.boxStack.length > 0) {
      var nextLink = token.boxStack.pop();
      return nextLink;
    }
  };

  var _40 = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_C && nextLink.from == this.key) {
      token.rewriteFlag = _1C.EMPTY;

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

        if (prev instanceof _2Y) {
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
          token.rewriteFlag = _1C.F_C;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _41 = function () {
    var con = new _2Y(this.name);
    con.text = this.text;
    return con;
  };

  var _1r = function (prin, auxs) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    var _this;

    _4O(this, _1r);

    _this = _5f(this, __captured__scope_4[3](_1r).call(this));

    _this.set(prin, auxs);

    return _this;
  };

  var _3D = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _3E = function (auxs) {
    var newPaxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pax = _step.value;
        var newPax = new _5d(pax.name).addToGroup(this);
        if (pax.findLinksOutOf(null).length == 0) new _1k(pax.key, newPax.key, "n", "s").addToGroup(this);else {
          var outLink = pax.findLinksOutOf(null)[0];
          new _1k(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
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

  var _3F = function (leftAuxs, rightAuxs, group) {
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
              var con = new _2Y(leftAux.name).addToGroup(group);
              var outLink = leftAux.findLinksOutOf(null)[0];

              if (typeof outLink != 'undefined') {
                outLink.changeFrom(con.key, outLink.fromPort);
              }

              new _1k(rightAux.key, con.key, "n", "s").addToGroup(group);
              new _1k(leftAux.key, con.key, "n", "s").addToGroup(group);
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

  var _6i = function (obj) {
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

  var _4Q = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5h = function (self, call) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (call && (__captured__scope_5[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6j(self);
  };

  var _6j = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5j = function (target, property, receiver) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_5[5] = Reflect.get;
    } else {
      __captured__scope_5[5] = function _get(target, property, receiver) {
        var base = _7T(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_5[5](target, property, receiver || target);
  };

  var _7T = function (object, property) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_5[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _5i = function (o) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    __captured__scope_5[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5[3](o);
  };

  var _7e = function (obj) {
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

  var _6k = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7U = function (self, call) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    if (call && (__captured__scope_Q[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7f(self);
  };

  var _7f = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7V = function (o) {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    __captured__scope_Q[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_Q[3](o);
  };

  var _5k = function () {
    var __captured__scope_Q = __scope_0[25] || __get_scope_binding_0(25);

    var _this;

    _6k(this, _5k);

    _this = _7U(this, __captured__scope_Q[3](_5k).call(this));
    _this.nodes = [];
    _this.links = [];
    return _this;
  };

  var _6S = function (graph) {// this shouldnt be call, since every box should be inside a wrapper
  };

  var _7g = function (obj) {
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

  var _6x = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7W = function (self, call) {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    if (call && (__captured__scope_R[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7h(self);
  };

  var _7h = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7X = function (o) {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    __captured__scope_R[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_R[3](o);
  };

  var _6r = function (obj) {
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

  var _4V = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5s = function (self, call) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    if (call && (__captured__scope_9[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6s(self);
  };

  var _6s = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5t = function (o) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    __captured__scope_9[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9[3](o);
  };

  var _23 = function (name) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    _4V(this, _23);

    return _5s(this, __captured__scope_9[3](_23).call(this, null, "D", name));
  };

  var _38 = function () {
    var der = new _23(this.name);
    return der;
  };

  var _5z = function () {
    var __captured__scope_R = __scope_0[26] || __get_scope_binding_0(26);

    _6x(this, _5z);

    return _7W(this, __captured__scope_R[3](_5z).call(this, null, "!"));
  };

  var _6T = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.rewriteFlag = _1C.F_PROMO;
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _6U = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_PROMO) {
      token.rewriteFlag = _1C.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

      if (prev instanceof _23) {
        var oldGroup = this.group;
        oldGroup.moveOut(); // this.group is a box-wrapper

        oldGroup.deleteAndPreserveLink();
        var newNextLink = prev.findLinksInto(null)[0];
        prev.deleteAndPreserveInLink(); // preserve inLink

        token.rewrite = true;
        return newNextLink;
      } else if (prev instanceof _2Y && token.boxStack.length >= 1) {
        if (nextLink.from == this.key) {
          var link = token.boxStack.pop();
          var inLinks = prev.findLinksInto(null);

          if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
          } else {
            var newBoxWrapper = this.group.copy().addToGroup(this.group.group);

            _1r.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

            var prevLink = prev.findLinksOutOf(null)[0];
            prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
            link.changeTo(this.key, "s");
          }

          token.rewriteFlag = _1C.F_PROMO;
          token.rewrite = true;
          return nextLink;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _6V = function () {
    return new _5z();
  };

  var _1u = function (prin, box, auxs) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    var _this;

    _4Q(this, _1u);

    _this = _5h(this, __captured__scope_5[3](_1u).call(this, prin, auxs));
    _this.box = box;
    return _this;
  };

  var _3G = function (prin, box, auxs) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    __captured__scope_5[5](__captured__scope_5[3](_1u.prototype), "set", this).call(this, prin, auxs);

    this.box = box;
  };

  var _3H = function (aux) {
    this.auxs.splice(this.auxs.indexOf(aux), 1);
    aux.deleteAndPreserveOutLink();
  };

  var _3I = function () {
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

  var _3J = function (map) {
    var newBoxWrapper = new _1u();
    var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
    newBoxWrapper.prin = newPrin;
    map.set(this.prin.key, newPrin.key);
    var newBox = new _5k().addToGroup(newBoxWrapper);
    newBoxWrapper.box = newBox;
    newBoxWrapper.auxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var newNode;

        if (node instanceof _1u) {
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
        var newLink = new _1k(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
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
        var newLink = new _1k(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
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

  var _3K = function () {
    var map = new Map();
    return this.copyBox(map);
  };

  var _3L = function () {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    this.box.delete();

    var _arr6 = Array.from(this.auxs);

    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var aux = _arr6[_i6];
      aux.delete();
    }

    this.prin.delete();

    __captured__scope_5[5](__captured__scope_5[3](_1u.prototype), "delete", this).call(this);
  };

  var _3M = function () {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    this.box.delete();

    var _arr7 = Array.from(this.auxs);

    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var aux = _arr7[_i7];
      this.removeAux(aux); // preserve outLink
    }

    this.prin.deleteAndPreserveInLink(); //preserve inLink

    __captured__scope_5[5](__captured__scope_5[3](_1u.prototype), "delete", this).call(this);
  };

  var _3N = function () {
    var wrapper = new _1u();
    var box = new _5k().addToGroup(wrapper);
    var promo = new _5z().addToGroup(wrapper);
    wrapper.set(promo, box, []);
    return wrapper;
  };

  var _6l = function (obj) {
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

  var _4R = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5m = function (self, call) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    if (call && (__captured__scope_6[1](call) === "object" || typeof call === "function")) {
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

  var _5n = function (o) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    __captured__scope_6[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6[3](o);
  };

  var _6p = function (obj) {
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

  var _4U = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5q = function (self, call) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (call && (__captured__scope_8[1](call) === "object" || typeof call === "function")) {
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

  var _5r = function (o) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    __captured__scope_8[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8[3](o);
  };

  var _21 = function () {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    _4U(this, _21);

    return _5q(this, __captured__scope_8[3](_21).call(this, null, "@", "yellow"));
  };

  var _3S = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.pop();
      token.dataStack.push(_1W.R);
      token.forward = true;
      return nextLink;
    }
  };

  var _3T = function () {
    return new _21();
  };

  var _1w = function () {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    _4R(this, _1w);

    return _5m(this, __captured__scope_6[3](_1w).call(this, null, "λ", "yellow"));
  };

  var _3O = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var data = token.dataStack[token.dataStack.length - 1];

      if (data == _1W.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push([_1W.LAMBDA, _1W.EMPTY]);
        token.forward = false;
        return link;
      } else if (data == _1W.R) {
        var nextLink = this.findLinksOutOf(null)[0];
        token.dataStack.pop();
        token.rewriteFlag = _1C.F_LAMBDA;
        return nextLink;
      }
    }
  };

  var _3P = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_LAMBDA && nextLink.from == this.key) {
      token.rewriteFlag = _1C.EMPTY;
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
        if (otherNode instanceof _39) otherNextLink.fromPort = "n";
        otherNextLink.changeToGroup(appOtherLink.group);
        this.delete();
        prev.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3Q = function () {
    return new _1w();
  };

  var _6y = function (obj) {
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

  var _4Z = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _61 = function (self, call) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    if (call && (__captured__scope_C[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6z(self);
  };

  var _6z = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _62 = function (o) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    __captured__scope_C[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C[3](o);
  };

  var _6t = function (obj) {
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

  var _4X = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5u = function (self, call) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    if (call && (__captured__scope_A[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6u(self);
  };

  var _6u = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5v = function (o) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    __captured__scope_A[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A[3](o);
  };

  var _25 = function (name) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    _4X(this, _25);

    return _5u(this, __captured__scope_A[3](_25).call(this, null, name, "mediumpurple1", name));
  };

  var _3U = function (token, link) {
    if (token.dataStack[token.dataStack.length - 1] == _1W.PROMPT) {
      token.dataStack.pop();
      token.dataStack.push([this.name, _1W.EMPTY]);
      token.forward = false;
      return link;
    }
  };

  var _3V = function () {
    return new _25(this.name);
  };

  var _2B = function (text) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    var _this;

    _4Z(this, _2B);

    _this = _61(this, __captured__scope_C[3](_2B).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3X = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1W.PROMPT);
      token.forward = true;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _1W.PROMPT) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        var result = this.binOpApply(this.subType, l[0], r[0]);
        token.dataStack.push([result, _1W.EMPTY]);
        token.rewriteFlag = _1C.F_OP;
        return this.findLinksInto(null)[0];
        ;
      }
    }
  };

  var _3Y = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1C.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
      var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

      if (left instanceof _5z && right instanceof _5z) {
        var wrapper = _1u.create().addToGroup(this.group);

        var newConst = new _25(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _1k(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        left.group.delete();
        right.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3Z = function (type, v1, v2) {
    switch (type) {
      case _4B.And:
        return v1 && v2;

      case _4B.Or:
        return v1 || v2;

      case _4B.Plus:
        return parseFloat(v1) + parseFloat(v2);

      case _4B.Sub:
        return parseFloat(v1) - parseFloat(v2);

      case _4B.Mult:
        return parseFloat(v1) * parseFloat(v2);

      case _4B.Div:
        return parseFloat(v1) / parseFloat(v2);

      case _4B.Lte:
        return parseFloat(v1) <= parseFloat(v2);
    }
  };

  var _3a = function () {
    var newNode = new _2B(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _3b = function () {
    var node = new _2B("+");
    node.subType = _4B.Plus;
    return node;
  };

  var _3c = function () {
    var node = new _2B("*");
    node.subType = _4B.Mult;
    return node;
  };

  var _6d = function (obj) {
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

  var _4N = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5b = function (self, call) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    if (call && (__captured__scope_3[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6e(self);
  };

  var _6e = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5c = function (o) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    __captured__scope_3[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3[3](o);
  };

  var _1n = function (name) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    var _this;

    _4N(this, _1n);

    _this = _5b(this, __captured__scope_3[3](_1n).call(this, name));
    _this.text = "V";
    return _this;
  };

  var _37 = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];
    var inNode = this.graph.findNodeByKey(inLink.from);

    if (inLink != null && outLink != null) {
      if (this.graph.findNodeByKey(outLink.to) instanceof _1w && inNode instanceof _39) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    this.delete();
  };

  var _74 = function (obj) {
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

  var _4f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _67 = function (self, call) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    if (call && (__captured__scope_F[1](call) === "object" || typeof call === "function")) {
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

  var _68 = function (o) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    __captured__scope_F[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F[3](o);
  };

  var _6n = function (obj) {
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

  var _4S = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5o = function (self, call) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    if (call && (__captured__scope_7[1](call) === "object" || typeof call === "function")) {
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

  var _5p = function (o) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    __captured__scope_7[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7[3](o);
  };

  var _1y = function () {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    _4S(this, _1y);

    return _5o(this, __captured__scope_7[3](_1y).call(this, null, 'C0'));
  };

  var _3R = function () {
    return new _1y();
  };

  var _2H = function () {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    _4f(this, _2H);

    return _67(this, __captured__scope_F[3](_2H).call(this, null, "if", "mediumpurple1"));
  };

  var _3h = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _5z) {
        if (token.dataStack[token.dataStack.length - 1][0] == true) {
          var nextLink = this.findLinksOutOf("n")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1C.F_IF;
          token.forward = true;
          return nextLink;
        } else if (token.dataStack[token.dataStack.length - 1][0] == false) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1C.F_IF;
          token.forward = true;
          return nextLink;
        }
      } else {
        var nextLink = this.findLinksOutOf("n")[0];
        var data = token.dataStack.pop();
        token.dataStack.push(data[0]);
        token.dataStack.push(_1W.PROMPT);
        token.forward = true;
        return nextLink;
      }
    } else if (link.from == this.key) {
      if (link.fromPort == "n") {
        var nextLink = this.findLinksOutOf("e")[0];
        token.dataStack.push(_1W.PROMPT);
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

  var _3i = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_IF && nextLink.from == this.key) {
      token.rewriteFlag = _1C.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _5z) {
        var downLink = this.findLinksInto(null)[0];
        var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
        nextLink.changeFrom(downLink.from, downLink.fromPort);
        var weak = new _1y(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
        otherLink.changeFrom(weak.key, "n");
        this.delete();
        left.group.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3j = function () {
    return new _2H();
  };

  var _76 = function (obj) {
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

  var _4h = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _69 = function (self, call) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (call && (__captured__scope_G[1](call) === "object" || typeof call === "function")) {
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

  var _6A = function (o) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    __captured__scope_G[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G[3](o);
  };

  var _2K = function () {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    _4h(this, _2K);

    return _69(this, __captured__scope_G[3](_2K).call(this, null, "μ", "mediumpurple1"));
  };

  var _3k = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.rewriteFlag = _1C.F_RECUR;
      return nextLink;
    }
  };

  var _3l = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_RECUR && nextLink.from == this.key) {
      token.rewriteFlag = _1C.EMPTY;
      var wrapper = this.group.copy().addToGroup(this.group);

      _1r.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);

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
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3m = function () {
    return new _2K();
  };

  var _6Z = function (obj) {
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

  var _4K = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5V = function (self, call) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (call && (__captured__scope_2[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6a(self);
  };

  var _6a = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5W = function (o) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    __captured__scope_2[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2[3](o);
  };

  var _1i = function () {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    _4K(this, _1i);

    return _5V(this, __captured__scope_2[3](_1i).call(this, "point", "", "black"));
  };

  var _2v = function (token) {
    if (token.link == null && token.dataStack[token.dataStack.length - 1] == _1W.PROMPT) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.forward = true;
      return nextLink;
    } else return null;
  };

  var _2w = function () {
    return new _1i();
  };

  var _72 = function (obj) {
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

  var _4d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _65 = function (self, call) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    if (call && (__captured__scope_E[1](call) === "object" || typeof call === "function")) {
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

  var _66 = function (o) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    __captured__scope_E[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E[3](o);
  };

  var _2E = function (text) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    var _this;

    _4d(this, _2E);

    _this = _65(this, __captured__scope_E[3](_2E).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3d = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1W.PROMPT) {
        var v1 = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([this.unOpApply(this.subType, v1[0]), _1W.EMPTY]);
        token.rewriteFlag = _1C.F_OP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _3e = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1C.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

      if (prev instanceof _5z) {
        var wrapper = _1u.create().addToGroup(this.group);

        var newConst = new _25(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _1k(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        prev.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3f = function (type, v1) {
    switch (type) {
      case _4b.Not:
        return !v1;
    }
  };

  var _3g = function () {
    var newNode = new _2E(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _7H = function (obj) {
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

  var _4p = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6I = function (self, call) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    if (call && (__captured__scope_K[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7I(self);
  };

  var _7I = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6J = function (o) {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    __captured__scope_K[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_K[3](o);
  };

  var _2W = function () {
    var __captured__scope_K = __scope_0[19] || __get_scope_binding_0(19);

    _4p(this, _2W);

    return _6I(this, __captured__scope_K[3](_2W).call(this, null, "Δ", "indianred1"));
  };

  var _3w = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.pop();
        token.dataStack.push(_1W.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 2] == _1W.PROMPT) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1W.UNIT, _1W.EMPTY]);
          token.rewriteFlag = _1C.F_DELTA + data[1];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _3x = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1C.F_DELTA && nextLink.to == this.key) {
      var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      token.rewriteFlag = _1C.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _1y().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1y().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");

      var wrapper = _1u.create().addToGroup(this.group);

      var con = new _25(data[0]).addToGroup(wrapper.box);
      new _1k(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3y = function () {
    return new _2W();
  };

  var _7L = function (obj) {
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

  var _4s = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6M = function (self, call) {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    if (call && (__captured__scope_M[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7M(self);
  };

  var _7M = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6N = function (o) {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    __captured__scope_M[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_M[3](o);
  };

  var _2b = function () {
    var __captured__scope_M = __scope_0[21] || __get_scope_binding_0(21);

    _4s(this, _2b);

    return _6M(this, __captured__scope_M[3](_2b).call(this, null, "<<~", "indianred1"));
  };

  var _42 = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

        token.dataStack.push(_1W.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 3] == _1W.PROMPT) {
          var data = token.dataStack.pop();
          var new_v = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1W.UNIT, _1W.EMPTY]);
          token.rewriteFlag = _1C.F_DELTA + data[1] + ';' + new_v[0];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _43 = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1C.F_DELTA && nextLink.to == this.key) {
      var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      var s = string.split(";");
      var key = s[0];
      var data = s[1];
      token.rewriteFlag = _1C.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _1y().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1y().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
      this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];

      var wrapper = _1u.create().addToGroup(this.group);

      var con = new _25(data[0]).addToGroup(wrapper.box);
      new _1k(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _44 = function () {
    return new _2b();
  };

  var _7D = function (obj) {
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

  var _4l = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6E = function (self, call) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    if (call && (__captured__scope_I[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7E(self);
  };

  var _7E = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6F = function (o) {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    __captured__scope_I[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_I[3](o);
  };

  var _2Q = function () {
    var __captured__scope_I = __scope_0[17] || __get_scope_binding_0(17);

    _4l(this, _2Q);

    return _6E(this, __captured__scope_I[3](_2Q).call(this, null, 'p', "mediumpurple1"));
  };

  var _3r = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1W.PROMPT) {
        var data = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([data[0], _1W.EMPTY]);
        token.rewriteFlag = _1C.F_DEP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _3s = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1C.F_DEP) {
      token.rewriteFlag = _1C.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];

      if (_1B.isNumber(data[0]) || typeof data[0] === "boolean") {
        var outLink = this.findLinksOutOf(null)[0];
        var weak = new _1y(outLink.text).addToGroup(this.group);
        outLink.changeFrom(weak.key, "n");

        var wrapper = _1u.create().addToGroup(this.group);

        var newConst = new _25(data[0]).addToGroup(wrapper.box);
        new _1k(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        this.delete();
        token.rewrite = true;
      }

      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3t = function () {
    return new _2Q();
  };

  var _7F = function (obj) {
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

  var _4n = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6G = function (self, call) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    if (call && (__captured__scope_J[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7G(self);
  };

  var _7G = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6H = function (o) {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    __captured__scope_J[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_J[3](o);
  };

  var _2T = function () {
    var __captured__scope_J = __scope_0[18] || __get_scope_binding_0(18);

    _4n(this, _2T);

    return _6G(this, __captured__scope_J[3](_2T).call(this, null, "d", "mediumpurple1"));
  };

  var _3u = function (token, link) {
    if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
  };

  var _3v = function () {
    return new _2T();
  };

  var _7j = function (obj) {
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

  var _7Y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7a = function (self, call) {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    if (call && (__captured__scope_S[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7k(self);
  };

  var _7k = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7b = function (o) {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    __captured__scope_S[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_S[3](o);
  };

  var _6W = function () {
    var __captured__scope_S = __scope_0[27] || __get_scope_binding_0(27);

    var _this;

    _7Y(this, _6W);

    _this = _7a(this, __captured__scope_S[3](_6W).call(this, null, "M", "indianred1"));

    _this.graph.machine.cells.push(_this.key);

    return _this;
  };

  var _78 = function (token, link) {
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
  };

  var _79 = function (data) {
    var leftLink = this.findLinksOutOf("w")[0];

    if (_1B.isNumber(data) || typeof data === "boolean") {
      var value = this.graph.findNodeByKey(leftLink.to);
      var oldData = value.name;
      value.text = data;
      value.name = data;
      return oldData;
    }
  };

  var _7A = function () {
    var mod = new _6W();
    return mod;
  };

  var _7N = function (obj) {
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

  var _4u = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6O = function (self, call) {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    if (call && (__captured__scope_N[1](call) === "object" || typeof call === "function")) {
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

  var _6P = function (o) {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    __captured__scope_N[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_N[3](o);
  };

  var _2e = function () {
    var __captured__scope_N = __scope_0[22] || __get_scope_binding_0(22);

    _4u(this, _2e);

    return _6O(this, __captured__scope_N[3](_2e).call(this, null, "s", "indianred1"));
  };

  var _45 = function (token, link) {
    if (link.to == this.key) {
      if (token.dataStack[token.dataStack.length - 1] == _1W.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push(false);
        token.rewriteFlag = _1C.F_PROP;
        token.forward = false;
        token.machine.startPropagation();
        return link;
      }
    }
  };

  var _46 = function (token, nextLink) {
    if (token.rewriteFlag == _1C.F_PROP && nextLink.to == this.key) {
      token.rewriteFlag = _1C.EMPTY;
      var data = token.machine.hasUpdate;
      token.dataStack.pop();
      token.dataStack.push([data, _1W.EMPTY]);

      var wrapper = _1u.create().addToGroup(this.group);

      var con = new _25(data).addToGroup(wrapper.box);
      new _1k(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      nextLink.changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _47 = function () {
    return new _2e();
  };

  var _7B = function (obj) {
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

  var _4j = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6B = function (self, call) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    if (call && (__captured__scope_H[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7C(self);
  };

  var _7C = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6D = function (target, property, receiver) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_H[5] = Reflect.get;
    } else {
      __captured__scope_H[5] = function _get(target, property, receiver) {
        var base = _7Z(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_H[5](target, property, receiver || target);
  };

  var _7Z = function (object, property) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_H[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _6C = function (o) {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    __captured__scope_H[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_H[3](o);
  };

  var _2N = function () {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    var _this;

    _4j(this, _2N);

    _this = _6B(this, __captured__scope_H[3](_2N).call(this, 'diamond', '', "indianred1"));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _3n = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1W.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      var data = token.dataStack.pop();
      token.dataStack.pop();
      token.dataStack.push(data);
      token.rewriteFlag = _1C.F_MOD;
      return this.findLinksInto(null)[0];
    }
  };

  var _3o = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1C.F_MOD) {
      token.rewriteFlag = _1C.EMPTY;
      var data = token.dataStack.pop();

      if (_1B.isNumber(data[0]) || typeof data[0] === "boolean") {
        var mod = new _6W().addToGroup(this.group);
        var con = new _25(data[0]).addToGroup(this.group);
        new _1k(mod.key, con.key, "w", "s").addToGroup(this.group);
        var outLink = this.findLinksOutOf(null)[0];
        outLink.changeFrom(mod.key, "e");
        var inLink = this.findLinksInto(null)[0];
        inLink.changeTo(mod.key, "s");
        this.delete();
        token.rewrite = true;
        token.dataStack.push([data[0], mod.key]);
      }

      return nextLink;
    } else if (token.rewriteFlag == _1C.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3p = function () {
    var __captured__scope_H = __scope_0[16] || __get_scope_binding_0(16);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_H[5](__captured__scope_H[3](_2N.prototype), "delete", this).call(this);
  };

  var _3q = function () {
    return new _2N();
  };

  var _1A = function () {
    _2g(this, _1A);

    this.graph = new _q(this);
    _1B.mainGraph = this.graph; // cheating!

    this.token = new _u(this);
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
  };

  var _Q = _1A.prototype;

  var _v = function () {
    return this.playing;
  };

  var _w = function (playValue) {
    this.play = playValue;
  };

  var _x = function () {
    return this.playing;
  };

  var _y = function (playingValue) {
    this.playing = playingValue;
  };

  var _z = function () {
    return this.finished;
  };

  var _10 = function (finishedValue) {
    this.finished = finishedValue;
  };

  var _11 = function (source) {
    var lexer = new _1e(source + '\0');
    var parser = new _1g(lexer);
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

    var start = new _1i().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    new _1k(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
    this.deleteVarNode(this.graph.child);
  };

  var _12 = function (ast, group) {
    var graph = this.graph;

    if (ast instanceof _1m) {
      var v = new _1n(ast.name).addToGroup(group);
      return new _1r(v, [v]);
    } else if (ast instanceof _1t) {
      var param = ast.param;

      var wrapper = _1u.create().addToGroup(group);

      var abs = new _1w().addToGroup(wrapper.box);
      var term = this.toGraph(ast.body, wrapper.box);
      new _1k(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
      new _1k(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
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
        auxNode = new _1y(param).addToGroup(abs.group);
      }

      new _1k(auxNode.key, abs.key, "nw", "w", true).addToGroup(abs.group);
      wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
      return new _1r(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _20) {
      var app = new _21().addToGroup(group); //lhs

      var left = this.toGraph(ast.lhs, group);
      var der = new _23(left.prin.name).addToGroup(group);
      new _1k(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

      var right = this.toGraph(ast.rhs, group);
      new _1k(app.key, der.key, "w", "s").addToGroup(group);
      new _1k(app.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1r(app, _1r.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _24) {
      var wrapper = _1u.create().addToGroup(group);

      var constant = new _25(ast.value).addToGroup(wrapper.box);
      new _1k(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
      return new _1r(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _27) {
      var binop = new _2B(ast.name).addToGroup(group);
      binop.subType = ast.type;
      var left = this.toGraph(ast.v1, group);
      var right = this.toGraph(ast.v2, group);
      new _1k(binop.key, left.prin.key, "w", "s").addToGroup(group);
      new _1k(binop.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1r(binop, _1r.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _2D) {
      var unop = new _2E(ast.name).addToGroup(group);
      unop.subType = ast.type;
      var box = this.toGraph(ast.v1, group);
      new _1k(unop.key, box.prin.key, "n", "s").addToGroup(group);
      return new _1r(unop, box.auxs);
    } else if (ast instanceof _2G) {
      var ifnode = new _2H().addToGroup(group);
      var cond = this.toGraph(ast.cond, group);
      var t1 = this.toGraph(ast.t1, group);
      var t2 = this.toGraph(ast.t2, group);
      new _1k(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
      new _1k(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
      new _1k(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
      return new _1r(ifnode, _1r.joinAuxs(_1r.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
    } else if (ast instanceof _2J) {
      var p1 = ast.param; // recur term

      var wrapper = _1u.create().addToGroup(group);

      wrapper.prin.delete();
      var recur = new _2K().addToGroup(wrapper);
      wrapper.prin = recur;
      var box = this.toGraph(ast.body, wrapper.box);
      wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
      new _1k(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
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
        auxNode1 = new _1y(p1).addToGroup(wrapper.box);
      }

      new _1k(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
      return new _1r(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _2M) {
      var term = this.toGraph(ast.term, group);
      var prov = new _2N().addToGroup(group);
      new _1k(prov.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1r(prov, term.auxs);
    } else if (ast instanceof _2P) {
      var term = this.toGraph(ast.term, group);
      var dep = new _2Q().addToGroup(group);
      new _1k(dep.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1r(dep, term.auxs);
    } else if (ast instanceof _2S) {
      var term = this.toGraph(ast.term, group);
      var deref = new _2T().addToGroup(group);
      new _1k(deref.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1r(deref, term.auxs);
    } else if (ast instanceof _2V) {
      var param = ast.param;
      var delta = new _2W().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1n(param).addToGroup(group);
      new _1k(delta.key, v.key, "w", "s").addToGroup(group);
      new _1k(delta.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _2Y(aux.name).addToGroup(group);
          new _1k(aux.key, con.key, "n", "s").addToGroup(group);
          new _1k(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1r(delta, auxs);
    } else if (ast instanceof _2a) {
      var param = ast.param;
      var setn = new _2b().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1n(param).addToGroup(group);
      new _1k(setn.key, v.key, "w", "s").addToGroup(group);
      new _1k(setn.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _2Y(aux.name).addToGroup(group);
          new _1k(aux.key, con.key, "n", "s").addToGroup(group);
          new _1k(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1r(setn, auxs);
    } else if (ast instanceof _2d) {
      var prop = new _2e().addToGroup(group);
      return new _1r(prop, []);
    }
  };

  var _13 = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node instanceof _S) this.deleteVarNode(node);else if (node instanceof _1n) node.deleteAndPreserveOutLink();
    }
  };

  var _14 = function () {
    this.evaluating = true;
    this.hasUpdate = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var cell = this.graph.findNodeByKey(key);
        var evalToken = new _u(this);
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

  var _15 = function (a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  var _16 = function (tokens) {
    var arr_2 = Array.from(tokens); // all progress 1 step

    for (var i = 0; i < arr_2.length; i++) {
      var token = arr_2[i];
      this.tokenPass(token);
    }
  };

  var _17 = function () {
    if (!this.isFinished()) {
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
  };

  var _18 = function (token) {
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
      } else {
        token.transited = false;

        if (token.isMain) {
          token.setLink(null);
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
  };

  var _19 = function (token) {
    return token.dataStack.length == 0 ? '□' : Array.from(token.dataStack).reverse().toString() + ',□';
  };

  var __constructor = function () {};

  var _1R = _$2;

  var _1 = (__constructor.prototype = _D, new __constructor());

  _1.key = 0;
  _1.linkKey = 0;

  var _4 = new _$3();

  _1.allNodes = _4;
  var _5 = [];
  _1.allLinks = _5;
  var _1B = {
    isNumber: _1U,
    graph: null,
    mainGraph: _1
  };
  $$0.value = _Y, _$4(_C, "addToGraph", $$0);
  $$0.value = _Z, _$4(_C, "addToGroup", $$0);
  $$0.value = _a, _$4(_C, "changeToGroup", $$0);
  $$0.value = _b, _$4(_C, "findLinksConnected", $$0);
  $$0.value = _c, _$4(_C, "findLinksInto", $$0);
  $$0.value = _d, _$4(_C, "findLinksOutOf", $$0);
  $$0.value = _e, _$4(_C, "copy", $$0);
  $$0.value = _f, _$4(_C, "delete", $$0);
  $$0.value = _g, _$4(_C, "transition", $$0);
  $$0.value = _h, _$4(_C, "rewrite", $$0);

  var _B = (__constructor.prototype = _C, new __constructor());

  $$0.value = _S, _$4(_B, "constructor", $$0);
  $$0.value = _T, _$4(_B, "addNode", $$0);
  $$0.value = _U, _$4(_B, "removeNode", $$0);
  $$0.value = _V, _$4(_B, "addLink", $$0);
  $$0.value = _W, _$4(_B, "removeLink", $$0);
  $$0.value = _X, _$4(_B, "delete", $$0);

  var _6 = (__constructor.prototype = _B, new __constructor());

  _6.key = null;
  _6.shape = null;
  _6.text = null;
  _6.colour = null;
  _6.name = void 0;
  _6.graph = void 0;
  _6.group = null;
  _6.width = null;
  _6.height = null;
  var _9 = [];
  _6.links = _9;
  var _A = [];
  _6.nodes = _A;
  _1.child = _6;
  _S.prototype = _B;

  _$5(_S, _j);

  $$0.value = _k, _$4(_D, "clear", $$0);
  $$0.value = _l, _$4(_D, "addNode", $$0);
  $$0.value = _m, _$4(_D, "removeNode", $$0);
  $$0.value = _n, _$4(_D, "findNodeByKey", $$0);
  $$0.value = _o, _$4(_D, "addLink", $$0);
  $$0.value = _p, _$4(_D, "removeLink", $$0);
  var _1W = {
    EMPTY: "-",
    PROMPT: "*",
    LAMBDA: "\u03BB",
    R: "@",
    UNIT: "\u2022",
    IF0: "if0",
    IF1: "if1"
  };
  $$0.value = _1N, _$4(_u, "CompData", $$0);
  var _1C = {
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
  $$0.value = _1O, _$4(_u, "RewriteFlag", $$0);
  $$0.value = _r, _$4(_L, "setLink", $$0);
  $$0.value = _s, _$4(_L, "reset", $$0);
  $$0.value = _t, _$4(_L, "delete", $$0);
  $$0.value = _v, _$4(_Q, "isPlay", $$0);
  $$0.value = _w, _$4(_Q, "setPlay", $$0);
  $$0.value = _x, _$4(_Q, "isPlaying", $$0);
  $$0.value = _y, _$4(_Q, "setPlaying", $$0);
  $$0.value = _z, _$4(_Q, "isFinished", $$0);
  $$0.value = _10, _$4(_Q, "setFinished", $$0);
  $$0.value = _2h, _$4(_1f, "_nextChar", $$0);
  _4w.EOF = "EOF";
  _4w.LAMBDA = "LAMBDA";
  _4w.LPAREN = "LPAREN";
  _4w.RPAREN = "RPAREN";
  _4w.CLPAREN = "CLPAREN";
  _4w.CRPAREN = "CRPAREN";
  _4w.LCID = "LCID";
  _4w.DOT = "DOT";
  _4w.COMMA = "COMMA";
  _4w.APP = "APP";
  _4w.LET = "LET";
  _4w.DEFINE = "DEFINE";
  _4w.IN = "IN";
  _4w.REC = "REC";
  _4w.INT = "INT";
  _4w.TRUE = "TRUE";
  _4w.FALSE = "FALSE";
  _4w.NOT = "NOT";
  _4w.AND = "AND";
  _4w.OR = "OR";
  _4w.PLUS = "PLUS";
  _4w.SUB = "SUB";
  _4w.MULT = "MULT";
  _4w.DIV = "DIV";
  _4w.LTE = "LTE";
  _4w.IF = "IF";
  _4w.THEN = "THEN";
  _4w.ELSE = "ELSE";
  _4w.SET = "SET";
  _4w.CHANGE = "CHANGE";
  _4w.TO = "TO";
  _4w.PROP = "PROP";
  _4w.DEP = "DEP";
  _4w.DEREF = "DEREF";
  $$0.value = _2i, _$4(_1f, "_nextToken", $$0);
  $$0.value = _2j, _$4(_1f, "token", $$0);
  $$0.value = _2k, _$4(_1f, "lookahead", $$0);
  $$0.value = _2l, _$4(_1f, "fail", $$0);
  $$0.value = _2m, _$4(_1f, "next", $$0);
  $$0.value = _2n, _$4(_1f, "match", $$0);
  $$0.value = _2o, _$4(_1f, "skip", $$0);
  $$0.value = _2p, _$4(_1h, "parse", $$0);
  $$0.value = _2q, _$4(_1h, "term", $$0);
  $$0.value = _2r, _$4(_1h, "isBinaryOp", $$0);

  var _29 = (__constructor.prototype = _2A, new __constructor());

  _2D.prototype = _29;

  _$5(_2D, _3W);

  $$0.value = _2D, _$4(_29, "constructor", $$0);

  var _28 = (__constructor.prototype = _29, new __constructor());

  $$0.value = _27, _$4(_28, "constructor", $$0);
  _27.prototype = _28;

  _$5(_27, _2D);

  var _4B = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5
  };
  $$0.value = _2s, _$4(_1h, "parseBinop", $$0);
  $$0.value = _2t, _$4(_1h, "application", $$0);
  var _4b = {
    Not: 0
  };
  $$0.value = _2u, _$4(_1h, "atom", $$0);

  var _1j = (__constructor.prototype = _C, new __constructor());

  $$0.value = _1i, _$4(_1j, "constructor", $$0);
  $$0.value = _2v, _$4(_1j, "transition", $$0);
  $$0.value = _2w, _$4(_1j, "copy", $$0);
  _1i.prototype = _1j;

  _$5(_1i, _j);

  $$0.value = _2x, _$4(_1l, "addToNode", $$0);
  $$0.value = _2y, _$4(_1l, "addToGraph", $$0);
  $$0.value = _2z, _$4(_1l, "addToGroup", $$0);
  $$0.value = _30, _$4(_1l, "changeToGroup", $$0);
  $$0.value = _31, _$4(_1l, "changeFrom", $$0);
  $$0.value = _32, _$4(_1l, "changeTo", $$0);
  $$0.value = _33, _$4(_1l, "focus", $$0);
  $$0.value = _34, _$4(_1l, "clearFocus", $$0);
  $$0.value = _35, _$4(_1l, "delete", $$0);
  $$0.value = _36, _$4(_1l, "toString", $$0);
  $$0.value = _11, _$4(_Q, "compile", $$0);

  var _1q = (__constructor.prototype = _C, new __constructor());

  _39.prototype = _1q;

  _$5(_39, _j);

  $$0.value = _39, _$4(_1q, "constructor", $$0);
  $$0.value = _3A, _$4(_1q, "transition", $$0);
  $$0.value = _3B, _$4(_1q, "deleteAndPreserveInLink", $$0);
  $$0.value = _3C, _$4(_1q, "deleteAndPreserveOutLink", $$0);

  var _1p = (__constructor.prototype = _1q, new __constructor());

  _23.prototype = _1p;

  _$5(_23, _39);

  $$0.value = _23, _$4(_1p, "constructor", $$0);
  $$0.value = _38, _$4(_1p, "copy", $$0);

  var _1o = (__constructor.prototype = _1p, new __constructor());

  $$0.value = _1n, _$4(_1o, "constructor", $$0);

  var _1x = (__constructor.prototype = _C, new __constructor());

  $$0.value = _1w, _$4(_1x, "constructor", $$0);
  $$0.value = _3O, _$4(_1x, "transition", $$0);

  var _22 = (__constructor.prototype = _C, new __constructor());

  $$0.value = _21, _$4(_22, "constructor", $$0);
  $$0.value = _3S, _$4(_22, "transition", $$0);
  $$0.value = _3T, _$4(_22, "copy", $$0);
  _21.prototype = _22;

  _$5(_21, _j);

  $$0.value = _3P, _$4(_1x, "rewrite", $$0);
  $$0.value = _3Q, _$4(_1x, "copy", $$0);
  _1w.prototype = _1x;

  _$5(_1w, _j);

  $$0.value = _37, _$4(_1o, "deleteAndPreserveOutLink", $$0);
  _1n.prototype = _1o;

  _$5(_1n, _23);

  var _1s = (__constructor.prototype = _B, new __constructor());

  $$0.value = _1r, _$4(_1s, "constructor", $$0);
  $$0.value = _3D, _$4(_1s, "set", $$0);

  var _5e = (__constructor.prototype = _1q, new __constructor());

  $$0.value = _5d, _$4(_5e, "constructor", $$0);
  $$0.value = _6Q, _$4(_5e, "copy", $$0);
  $$0.value = _6R, _$4(_5e, "delete", $$0);
  _5d.prototype = _5e;

  _$5(_5d, _39);

  $$0.value = _3E, _$4(_1s, "createPaxsOnTopOf", $$0);
  _1r.prototype = _1s;

  var _2Z = (__constructor.prototype = _1q, new __constructor());

  $$0.value = _2Y, _$4(_2Z, "constructor", $$0);
  $$0.value = _3z, _$4(_2Z, "transition", $$0);
  $$0.value = _40, _$4(_2Z, "rewrite", $$0);
  $$0.value = _41, _$4(_2Z, "copy", $$0);
  _2Y.prototype = _2Z;

  _$5(_2Y, _39);

  $$0.value = _3F, _$4(_1r, "joinAuxs", $$0);

  _$5(_1r, _S);

  var _1v = (__constructor.prototype = _1s, new __constructor());

  $$0.value = _1u, _$4(_1v, "constructor", $$0);
  $$0.value = _3G, _$4(_1v, "set", $$0);
  $$0.value = _3H, _$4(_1v, "removeAux", $$0);
  $$0.value = _3I, _$4(_1v, "moveOut", $$0);

  var _5l = (__constructor.prototype = _B, new __constructor());

  $$0.value = _5k, _$4(_5l, "constructor", $$0);
  $$0.value = _6S, _$4(_5l, "copy", $$0);
  _5k.prototype = _5l;

  _$5(_5k, _S);

  $$0.value = _3J, _$4(_1v, "copyBox", $$0);
  $$0.value = _3K, _$4(_1v, "copy", $$0);
  $$0.value = _3L, _$4(_1v, "delete", $$0);
  $$0.value = _3M, _$4(_1v, "deleteAndPreserveLink", $$0);
  _1u.prototype = _1v;

  var _60 = (__constructor.prototype = _1q, new __constructor());

  $$0.value = _5z, _$4(_60, "constructor", $$0);
  $$0.value = _6T, _$4(_60, "transition", $$0);
  $$0.value = _6U, _$4(_60, "rewrite", $$0);
  $$0.value = _6V, _$4(_60, "copy", $$0);
  _5z.prototype = _60;

  _$5(_5z, _39);

  $$0.value = _3N, _$4(_1u, "create", $$0);

  _$5(_1u, _1r);

  var _1z = (__constructor.prototype = _1q, new __constructor());

  $$0.value = _1y, _$4(_1z, "constructor", $$0);
  $$0.value = _3R, _$4(_1z, "copy", $$0);
  _1y.prototype = _1z;

  _$5(_1y, _39);

  var _26 = (__constructor.prototype = _C, new __constructor());

  $$0.value = _25, _$4(_26, "constructor", $$0);
  $$0.value = _3U, _$4(_26, "transition", $$0);
  $$0.value = _3V, _$4(_26, "copy", $$0);
  _25.prototype = _26;

  _$5(_25, _j);

  var _2C = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2B, _$4(_2C, "constructor", $$0);
  $$0.value = _3X, _$4(_2C, "transition", $$0);
  $$0.value = _3Y, _$4(_2C, "rewrite", $$0);
  $$0.value = _3Z, _$4(_2C, "binOpApply", $$0);
  $$0.value = _3a, _$4(_2C, "copy", $$0);
  _2B.prototype = _2C;
  $$0.value = _3b, _$4(_2B, "createPlus", $$0);
  $$0.value = _3c, _$4(_2B, "createMult", $$0);

  _$5(_2B, _j);

  var _2F = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2E, _$4(_2F, "constructor", $$0);
  $$0.value = _3d, _$4(_2F, "transition", $$0);
  $$0.value = _3e, _$4(_2F, "rewrite", $$0);
  $$0.value = _3f, _$4(_2F, "unOpApply", $$0);
  $$0.value = _3g, _$4(_2F, "copy", $$0);
  _2E.prototype = _2F;

  _$5(_2E, _j);

  var _2I = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2H, _$4(_2I, "constructor", $$0);
  $$0.value = _3h, _$4(_2I, "transition", $$0);
  $$0.value = _3i, _$4(_2I, "rewrite", $$0);
  $$0.value = _3j, _$4(_2I, "copy", $$0);
  _2H.prototype = _2I;

  _$5(_2H, _j);

  var _2L = (__constructor.prototype = _1q, new __constructor());

  $$0.value = _2K, _$4(_2L, "constructor", $$0);
  $$0.value = _3k, _$4(_2L, "transition", $$0);
  $$0.value = _3l, _$4(_2L, "rewrite", $$0);
  $$0.value = _3m, _$4(_2L, "copy", $$0);
  _2K.prototype = _2L;

  _$5(_2K, _39);

  var _2O = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2N, _$4(_2O, "constructor", $$0);
  $$0.value = _3n, _$4(_2O, "transition", $$0);

  var _6X = (__constructor.prototype = _C, new __constructor());

  $$0.value = _6W, _$4(_6X, "constructor", $$0);
  $$0.value = _78, _$4(_6X, "transition", $$0);
  $$0.value = _79, _$4(_6X, "update", $$0);
  $$0.value = _7A, _$4(_6X, "copy", $$0);
  _6W.prototype = _6X;

  _$5(_6W, _j);

  $$0.value = _3o, _$4(_2O, "rewrite", $$0);
  $$0.value = _3p, _$4(_2O, "deleteAndPreserveInLink", $$0);
  $$0.value = _3q, _$4(_2O, "copy", $$0);
  _2N.prototype = _2O;

  _$5(_2N, _j);

  var _2R = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2Q, _$4(_2R, "constructor", $$0);
  $$0.value = _3r, _$4(_2R, "transition", $$0);
  $$0.value = _3s, _$4(_2R, "rewrite", $$0);
  $$0.value = _3t, _$4(_2R, "copy", $$0);
  _2Q.prototype = _2R;

  _$5(_2Q, _j);

  var _2U = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2T, _$4(_2U, "constructor", $$0);
  $$0.value = _3u, _$4(_2U, "transition", $$0);
  $$0.value = _3v, _$4(_2U, "copy", $$0);
  _2T.prototype = _2U;

  _$5(_2T, _j);

  var _2X = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2W, _$4(_2X, "constructor", $$0);
  $$0.value = _3w, _$4(_2X, "transition", $$0);
  $$0.value = _3x, _$4(_2X, "rewrite", $$0);
  $$0.value = _3y, _$4(_2X, "copy", $$0);
  _2W.prototype = _2X;

  _$5(_2W, _j);

  var _2c = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2b, _$4(_2c, "constructor", $$0);
  $$0.value = _42, _$4(_2c, "transition", $$0);
  $$0.value = _43, _$4(_2c, "rewrite", $$0);
  $$0.value = _44, _$4(_2c, "copy", $$0);
  _2b.prototype = _2c;

  _$5(_2b, _j);

  var _2f = (__constructor.prototype = _C, new __constructor());

  $$0.value = _2e, _$4(_2f, "constructor", $$0);
  $$0.value = _45, _$4(_2f, "transition", $$0);
  $$0.value = _46, _$4(_2f, "rewrite", $$0);
  $$0.value = _47, _$4(_2f, "copy", $$0);
  _2e.prototype = _2f;

  _$5(_2e, _j);

  $$0.value = _12, _$4(_Q, "toGraph", $$0);
  $$0.value = _13, _$4(_Q, "deleteVarNode", $$0);
  $$0.value = _14, _$4(_Q, "startPropagation", $$0);
  $$0.value = _15, _$4(_Q, "shuffle", $$0);
  $$0.value = _16, _$4(_Q, "batchPass", $$0);
  $$0.value = _17, _$4(_Q, "pass", $$0);
  $$0.value = _18, _$4(_Q, "tokenPass", $$0);
  $$0.value = _19, _$4(_Q, "getData", $$0);

  var _0 = (__constructor.prototype = _Q, new __constructor());

  _0.graph = _1;

  var _E = (__constructor.prototype = _L, new __constructor());

  _E.machine = _0;
  _E.forward = true;
  _E.rewrite = false;
  _E.transited = false;
  _E.link = null;
  _E.rewriteFlag = "\u25A1";
  var _I = ["*"];
  _E.dataStack = _I;
  var _K = [];
  _E.boxStack = _K;
  _E.isMain = true;
  _0.token = _E;
  _0.count = 0;
  var _N = [];
  _0.evalTokens = _N;
  var _O = [];
  _0.cells = _O;
  _0.evaluating = false;

  var _P = new _$3();

  _0.newValues = _P;
  _0.hasUpdate = false;
  _0.play = false;
  _0.playing = false;
  _0.finished = false;
  _1.machine = _0;
  _$0.machine = _0;
}).call(this);
}.call(window));

/***/ })

/******/ });