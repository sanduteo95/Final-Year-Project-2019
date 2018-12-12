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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/goiMachine/v2/main.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/goiMachine/v2/main.prepack.js":
/*!*******************************************!*\
  !*** ./lib/goiMachine/v2/main.prepack.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function () {
  var __get_scope_binding_0_get_95scope_95binding = function __get_scope_binding_0_get_95scope_95binding(__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_43__95typeof, _43__95typeof, _3L__95getPrototypeOf, _3L__95getPrototypeOf];
        break;

      case 1:
        __captured = [_45__95typeof, _45__95typeof, _3N__95getPrototypeOf, _3N__95getPrototypeOf, _3O__95get, _3O__95get];
        break;

      case 2:
        __captured = [_49__95typeof, _49__95typeof, _3V__95getPrototypeOf, _3V__95getPrototypeOf];
        break;

      case 3:
        __captured = [_4B__95typeof, _4B__95typeof, _3X__95getPrototypeOf, _3X__95getPrototypeOf];
        break;

      case 4:
        __captured = [_4D__95typeof, _4D__95typeof, _3Z__95getPrototypeOf, _3Z__95getPrototypeOf];
        break;

      case 5:
        __captured = [_4F__95typeof, _4F__95typeof, _3b__95getPrototypeOf, _3b__95getPrototypeOf];
        break;

      case 6:
        __captured = [_4H__95typeof, _4H__95typeof, _3d__95getPrototypeOf, _3d__95getPrototypeOf];
        break;

      case 7:
        __captured = [_4J__95typeof, _4J__95typeof, _3f__95getPrototypeOf, _3f__95getPrototypeOf];
        break;

      case 8:
        __captured = [_4L__95typeof, _4L__95typeof, _3h__95getPrototypeOf, _3h__95getPrototypeOf];
        break;

      case 9:
        __captured = [_4N__95typeof, _4N__95typeof, _3j__95getPrototypeOf, _3j__95getPrototypeOf];
        break;

      case 10:
        __captured = [_4P__95typeof, _4P__95typeof, _3l__95getPrototypeOf, _3l__95getPrototypeOf];
        break;

      case 11:
        __captured = [_4R__95typeof, _4R__95typeof, _3n__95getPrototypeOf, _3n__95getPrototypeOf];
        break;

      case 12:
        __captured = [_4T__95typeof, _4T__95typeof, _3p__95getPrototypeOf, _3p__95getPrototypeOf];
        break;

      case 13:
        __captured = [_4V__95typeof, _4V__95typeof, _3r__95getPrototypeOf, _3r__95getPrototypeOf];
        break;

      case 14:
        __captured = [_4X__95typeof, _4X__95typeof, _3t__95getPrototypeOf, _3t__95getPrototypeOf];
        break;

      case 15:
        __captured = [_4Z__95typeof, _4Z__95typeof, _3v__95getPrototypeOf, _3v__95getPrototypeOf];
        break;

      case 16:
        __captured = [_4b__95typeof, _4b__95typeof, _3x__95getPrototypeOf, _3x__95getPrototypeOf];
        break;

      case 17:
        __captured = [_4d__95typeof, _4d__95typeof, _3z__95getPrototypeOf, _3z__95getPrototypeOf];
        break;

      case 18:
        __captured = [_4f__95typeof, _4f__95typeof, _41__95getPrototypeOf, _41__95getPrototypeOf];
        break;

      case 19:
        __captured = [_47__95typeof, _47__95typeof, _3R__95getPrototypeOf, _3R__95getPrototypeOf, _3S__95get, _3S__95get];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(20);

  var $$0_enumerable_58false_44configurable_58true_44writable_58true = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46defineProperty = _$1_Object.defineProperty;
  var _$3_Object_46setPrototypeOf = _$1_Object.setPrototypeOf;

  var _J__95classCallCheck = function _J__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4B__95typeof = function _4B__95typeof(obj) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_4_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_4_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_4_[1](obj);
  };

  var _2j__95classCallCheck = function _2j__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3W__95possibleConstructorReturn = function _3W__95possibleConstructorReturn(self, call) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (call && (__captured__scope_4_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4C__95assertThisInitialized(self);
  };

  var _4C__95assertThisInitialized = function _4C__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3X__95getPrototypeOf = function _3X__95getPrototypeOf(o) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    __captured__scope_4_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4_[3](o);
  };

  var _3T__95classCallCheck = function _3T__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2C_Term = function _2C_Term(ctx) {
    _3T__95classCallCheck(this, _2C_Term);

    this.ctx = ctx;
  };

  var _c_ = _2C_Term.prototype;

  var _d_Var = function _d_Var(ctx, name) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    var _this;

    _2j__95classCallCheck(this, _d_Var);

    _this = _3W__95possibleConstructorReturn(this, __captured__scope_4_[3](_d_Var).call(this, ctx));
    _this.name = name;
    return _this;
  };

  var _4L__95typeof = function _4L__95typeof(obj) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_9_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_9_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_9_[1](obj);
  };

  var _2o__95classCallCheck = function _2o__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3g__95possibleConstructorReturn = function _3g__95possibleConstructorReturn(self, call) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (call && (__captured__scope_9_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4M__95assertThisInitialized(self);
  };

  var _4M__95assertThisInitialized = function _4M__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3h__95getPrototypeOf = function _3h__95getPrototypeOf(o) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    __captured__scope_9_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9_[3](o);
  };

  var _n_Operation = function _n_Operation(ctx, sig, name, active, eas, das) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    var _this;

    _2o__95classCallCheck(this, _n_Operation);

    _this = _3g__95possibleConstructorReturn(this, __captured__scope_9_[3](_n_Operation).call(this, ctx));
    _this.sig = sig;
    _this.name = name;
    _this.active = active;
    _this.eas = eas;
    _this.das = das;
    return _this;
  };

  var _4F__95typeof = function _4F__95typeof(obj) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_6_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_6_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_6_[1](obj);
  };

  var _2l__95classCallCheck = function _2l__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3a__95possibleConstructorReturn = function _3a__95possibleConstructorReturn(self, call) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (call && (__captured__scope_6_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4G__95assertThisInitialized(self);
  };

  var _4G__95assertThisInitialized = function _4G__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3b__95getPrototypeOf = function _3b__95getPrototypeOf(o) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    __captured__scope_6_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6_[3](o);
  };

  var _h_Binding = function _h_Binding(ctx, id, param, body) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    var _this;

    _2l__95classCallCheck(this, _h_Binding);

    _this = _3a__95possibleConstructorReturn(this, __captured__scope_6_[3](_h_Binding).call(this, ctx));
    _this.id = id;
    _this.param = param;
    _this.body = body;
    return _this;
  };

  var _4H__95typeof = function _4H__95typeof(obj) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_7_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_7_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_7_[1](obj);
  };

  var _2m__95classCallCheck = function _2m__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3c__95possibleConstructorReturn = function _3c__95possibleConstructorReturn(self, call) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (call && (__captured__scope_7_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4I__95assertThisInitialized(self);
  };

  var _4I__95assertThisInitialized = function _4I__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3d__95getPrototypeOf = function _3d__95getPrototypeOf(o) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    __captured__scope_7_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7_[3](o);
  };

  var _j_Reference = function _j_Reference(ctx, id, param, body) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    var _this;

    _2m__95classCallCheck(this, _j_Reference);

    _this = _3c__95possibleConstructorReturn(this, __captured__scope_7_[3](_j_Reference).call(this, ctx));
    _this.id = id;
    _this.param = param;
    _this.body = body;
    return _this;
  };

  var _49__95typeof = function _49__95typeof(obj) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_3_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_3_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_3_[1](obj);
  };

  var _2i__95classCallCheck = function _2i__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3U__95possibleConstructorReturn = function _3U__95possibleConstructorReturn(self, call) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (call && (__captured__scope_3_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4A__95assertThisInitialized(self);
  };

  var _4A__95assertThisInitialized = function _4A__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3V__95getPrototypeOf = function _3V__95getPrototypeOf(o) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    __captured__scope_3_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3_[3](o);
  };

  var _a_Thunk = function _a_Thunk(ctx, inner) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    var _this;

    _2i__95classCallCheck(this, _a_Thunk);

    _this = _3U__95possibleConstructorReturn(this, __captured__scope_3_[3](_a_Thunk).call(this, ctx));
    _this.inner = inner;
    return _this;
  };

  var _2c__95classCallCheck = function _2c__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _42__95classCallCheck = function _42__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2z_Token = function _2z_Token(type, value, pred) {
    _42__95classCallCheck(this, _2z_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _O_Lexer = function _O_Lexer(input) {
    _2c__95classCallCheck(this, _O_Lexer);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _P_ = _O_Lexer.prototype;

  var _1K_ = function _1K_() {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _1L_ = function _1L_() {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case ',':
        this._token = new _2z_Token(_2z_Token.COMMA);
        break;

      case ';':
        this._token = new _2z_Token(_2z_Token.SEMIC);
        break;

      case '(':
        this._token = new _2z_Token(_2z_Token.LPAREN);
        break;

      case ')':
        this._token = new _2z_Token(_2z_Token.RPAREN);
        break;

      case '\0':
        this._token = new _2z_Token(_2z_Token.EOF);
        break;

      case '=':
        this._token = new _2z_Token(_2z_Token.DEF);
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
          if (str == "bind") this._token = new _2z_Token(_2z_Token.BIND);else if (str == "in") this._token = new _2z_Token(_2z_Token.IN);else if (str == "new") this._token = new _2z_Token(_2z_Token.NEW);else if (str == "PLUS") this._token = new _2z_Token(_2z_Token.PLUS);else if (str == "TIMES") this._token = new _2z_Token(_2z_Token.TIMES);else if (str == "AND") this._token = new _2z_Token(_2z_Token.AND);else if (str == "OR") this._token = new _2z_Token(_2z_Token.OR);else if (str == "NOT") this._token = new _2z_Token(_2z_Token.NOT);else if (str == "EQUALS") this._token = new _2z_Token(_2z_Token.EQUALS);else if (str == "IF") this._token = new _2z_Token(_2z_Token.IF);else if (str == "TRUE") this._token = new _2z_Token(_2z_Token.TRUE, true);else if (str == "FALSE") this._token = new _2z_Token(_2z_Token.FALSE, false);else this._token = new _2z_Token(_2z_Token.LCID, str);
        } // text for numbers
        else if (/[0-9]/.test(c)) {
            var _str = '';

            do {
              _str += c;
              c = this._nextChar();
            } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


            this._index--;
            this._token = new _2z_Token(_2z_Token.INT, parseInt(_str));
          } else {
            this.fail();
          }

    }
  };

  var _1M_ = function _1M_(type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _1N_ = function _1N_() {
    return this._token.value;
  };

  var _1O_ = function _1O_() {
    return this._token;
  };

  var _1P_ = function _1P_() {
    return this._token.type;
  };

  var _1Q_ = function _1Q_() {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _1R_ = function _1R_(type) {
    return this._token.type == type;
  };

  var _1S_ = function _1S_(type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _1T_ = function _1T_(type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _2d__95classCallCheck = function _2d__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Q_Parser = function _Q_Parser(lexer) {
    _2d__95classCallCheck(this, _Q_Parser);

    this.lexer = lexer;
  };

  var _R_ = _Q_Parser.prototype;

  var _1U_ = function _1U_() {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_2z_Token.EOF);
    return result;
  };

  var _1V_ = function _1V_(ctx, thunk) {
    if (thunk) {
      var inner = this.term(ctx);
      return new _a_Thunk(ctx, inner);
    } else {
      if (this.lexer.skip(_2z_Token.BIND)) {
        var id = this.term(ctx);
        id.ctx = [id].concat(id.ctx);
        this.lexer.match(_2z_Token.DEF);
        var P = this.term(ctx);
        this.lexer.match(_2z_Token.IN);
        var B = this.term([id].concat(ctx));
        return new _h_Binding(ctx, id, P, B);
      } else if (this.lexer.skip(_2z_Token.NEW)) {
        var _id = this.term(ctx);

        _id.ctx = [_id].concat(_id.ctx);
        this.lexer.match(_2z_Token.DEF);

        var _P = this.term(ctx);

        this.lexer.match(_2z_Token.IN);

        var _B = this.term([_id].concat(ctx));

        return new _j_Reference(ctx, _id, _P, _B);
      } else {
        return this.atom(ctx);
      }
    }
  };

  var _1W_ = function _1W_(ctx) {
    if (this.lexer.skip(_2z_Token.LPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_2z_Token.RPAREN);
      return term;
    } else if (this.lexer.next(_2z_Token.LCID)) {
      var id = this.lexer.token(_2z_Token.LCID);
      return new _d_Var(ctx, id);
    } else {
      return this.operation(ctx);
    }
  };

  var _1X_ = function _1X_(ctx) {
    var name;
    var sig;
    var active;
    var eas = [];
    var das = [];
    var token = this.lexer.lookaheadType();

    switch (token) {
      case _2z_Token.PLUS:
        name = "+";
        sig = [2, 0];
        active = true;
        break;

      case _2z_Token.TIMES:
        name = "*";
        sig = [2, 0];
        active = true;
        break;

      case _2z_Token.AND:
        name = "∧";
        sig = [2, 0];
        active = true;
        break;

      case _2z_Token.OR:
        name = "∨";
        sig = [2, 0];
        active = true;
        break;

      case _2z_Token.NOT:
        name = "¬";
        sig = [1, 0];
        active = true;
        break;

      case _2z_Token.EQUALS:
        name = "==";
        sig = [2, 0];
        active = true;
        break;

      case _2z_Token.IF:
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
      this.lexer.match(_2z_Token.LPAREN);
      eas = this.gatherArgs(ctx, sig[0], false);
      if (sig[1] == 0) this.lexer.match(_2z_Token.RPAREN);
    }

    if (sig[1] > 0) {
      if (sig[0] == 0) this.lexer.match(_2z_Token.LPAREN);
      this.lexer.match(_2z_Token.SEMIC);
      das = this.gatherArgs(ctx, sig[1], true);
      this.lexer.match(_2z_Token.RPAREN);
    }

    return new _n_Operation(ctx, sig, name, active, eas, das);
  };

  var _1Y_ = function _1Y_(ctx, type, thunk) {
    var args = [];

    for (var i = 0; i < type; i++) {
      var term = this.term(ctx, thunk);
      args.push(term);

      if (this.lexer.next(_2z_Token.COMMA)) {
        this.lexer.match(_2z_Token.COMMA);
      }
    }

    return args;
  };

  var _2b__95classCallCheck = function _2b__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _M_MachineToken = function _M_MachineToken() {
    _2b__95classCallCheck(this, _M_MachineToken);

    this.link = null;
    this.rewriteFlag = null;
    this.reset();
  };

  var _N_ = _M_MachineToken.prototype;

  var _1H_ = function _1H_() {
    return _F_Flag;
  };

  var _1I_ = function _1I_(link) {
    if (this.link != null) this.link.clearFocus();
    this.link = link;

    if (this.link != null) {
      this.link.focus("red");
    }
  };

  var _1J_ = function _1J_(link) {
    this.setLink(link);
    this.rewriteFlag = _F_Flag.SEARCH;
  };

  var _2g__95classCallCheck = function _2g__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _V_Link = function _V_Link(from, to, fromPort, toPort, colour) {
    _2g__95classCallCheck(this, _V_Link);

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

  var _W_ = _V_Link.prototype;

  var _1p_ = function _1p_() {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1q_ = function _1q_(graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1r_ = function _1r_(group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1s_ = function _1s_(group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _1t_ = function _1t_(key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _1u_ = function _1u_(key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1v_ = function _1v_(colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _1w_ = function _1w_() {
    this.colour = null;
    this.penWidth = null;
    this.visited = true; // HACKING
  };

  var _1x_ = function _1x_() {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _1y_ = function _1y_() {
    return this.from + "->" + this.to;
  };

  var _1z_ = function _1z_(level) {
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

  var _2a__95classCallCheck = function _2a__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _47__95typeof = function _47__95typeof(obj) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_K_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_K_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_K_[1](obj);
  };

  var _3P__95classCallCheck = function _3P__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3Q__95possibleConstructorReturn = function _3Q__95possibleConstructorReturn(self, call) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (call && (__captured__scope_K_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _48__95assertThisInitialized(self);
  };

  var _48__95assertThisInitialized = function _48__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3S__95get = function _3S__95get(target, property, receiver) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_K_[5] = Reflect.get;
    } else {
      __captured__scope_K_[5] = function _get(target, property, receiver) {
        var base = _4i__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_K_[5](target, property, receiver || target);
  };

  var _4i__95superPropBase = function _4i__95superPropBase(object, property) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_K_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _3R__95getPrototypeOf = function _3R__95getPrototypeOf(o) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    __captured__scope_K_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_K_[3](o);
  };

  var _3J__95classCallCheck = function _3J__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1o_Node = function _1o_Node(shape, text, name) {
    _3J__95classCallCheck(this, _1o_Node);

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

  var _U_ = _1o_Node.prototype;

  var _1c_ = function _1c_(graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1d_ = function _1d_(group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1e_ = function _1e_(group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _1f_ = function _1f_() {
    return this.links;
  };

  var _1g_ = function _1g_() {
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

  var _1h_ = function _1h_() {
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

  var _1i_ = function _1i_() {
    var _this = this;

    var links = this.findLinksOutOf();
    var nodeKeys = links.map(function (l) {
      return l.to;
    });
    return nodeKeys.map(function (k) {
      return _this.graph.findNodeByKey(k);
    });
  };

  var _1j_ = function _1j_(graph) {
    var newNode = new _1o_Node(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
    return newNode;
  };

  var _1k_ = function _1k_() {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _1l_ = function _1l_(level) {
    var str = level + this.key + '[label="' + this.text;
    ;
    str += '"';
    if (this.shape != null) str += ',shape=' + this.shape;
    if (this.width != null) str += ',width=' + this.width;
    if (this.height != null) str += ',height=' + this.height;
    return str += '];';
  };

  var _1m_ = function _1m_(token, link) {
    return link;
  };

  var _1n_ = function _1n_(token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _24_Group = function _24_Group() {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    var _this;

    _3P__95classCallCheck(this, _24_Group);

    _this = _3Q__95possibleConstructorReturn(this, __captured__scope_K_[3](_24_Group).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _25_ = function _25_(node) {
    this.nodes.push(node);
  };

  var _26_ = function _26_(node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _27_ = function _27_(link) {
    this.links.push(link);
  };

  var _28_ = function _28_(link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _29_ = function _29_() {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_K_[5](__captured__scope_K_[3](_24_Group.prototype), "delete", this).call(this);
  };

  var _2A_ = function _2A_(level) {
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

  var _2B_ = function _2B_() {};

  var _K_Graph = function _K_Graph() {
    _2a__95classCallCheck(this, _K_Graph);

    this.clear();
  };

  var _L_ = _K_Graph.prototype;

  var _19_ = function _19_() {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _24_Group();
  };

  var _1A_ = function _1A_(node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _1B_ = function _1B_(node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _1C_ = function _1C_(key) {
    return this.allNodes.get(key);
  };

  var _1D_ = function _1D_(link) {
    this.allLinks.push(link);
  };

  var _1E_ = function _1E_(link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _1F_ = function _1F_(from, to) {
    var fromNode = this.findNodeByKey(from);
    return fromNode.findLinksOutOf().filter(function (x) {
      return x.to == to;
    })[0];
  };

  var _1G_ = function _1G_(width, height) {
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

  var _45__95typeof = function _45__95typeof(obj) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_2_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_2_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_2_[1](obj);
  };

  var _2h__95classCallCheck = function _2h__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3M__95possibleConstructorReturn = function _3M__95possibleConstructorReturn(self, call) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (call && (__captured__scope_2_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _46__95assertThisInitialized(self);
  };

  var _46__95assertThisInitialized = function _46__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3O__95get = function _3O__95get(target, property, receiver) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_2_[5] = Reflect.get;
    } else {
      __captured__scope_2_[5] = function _get(target, property, receiver) {
        var base = _4h__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_2_[5](target, property, receiver || target);
  };

  var _4h__95superPropBase = function _4h__95superPropBase(object, property) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_2_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _3N__95getPrototypeOf = function _3N__95getPrototypeOf(o) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2_[3](o);
  };

  var _X_Term = function _X_Term(prin, auxs) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    var _this;

    _2h__95classCallCheck(this, _X_Term);

    _this = _3M__95possibleConstructorReturn(this, __captured__scope_2_[3](_X_Term).call(this));
    _this.prin = null;

    _this.set(prin, auxs);

    _this.boxed = false;
    return _this;
  };

  var _20_ = function _20_(prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _21_ = function _21_() {
    this.boxed = true;
    return this.prin;
  };

  var _22_ = function _22_() {
    this.boxed = false;
    return this.prin;
  };

  var _23_ = function _23_(level) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

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

    return __captured__scope_2_[5](__captured__scope_2_[3](_X_Term.prototype), "draw", this).call(this, level);
  };

  var _4J__95typeof = function _4J__95typeof(obj) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_8_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_8_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_8_[1](obj);
  };

  var _2n__95classCallCheck = function _2n__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3e__95possibleConstructorReturn = function _3e__95possibleConstructorReturn(self, call) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (call && (__captured__scope_8_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4K__95assertThisInitialized(self);
  };

  var _4K__95assertThisInitialized = function _4K__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3f__95getPrototypeOf = function _3f__95getPrototypeOf(o) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    __captured__scope_8_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8_[3](o);
  };

  var _l_Atom = function _l_Atom(name) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    var _this;

    _2n__95classCallCheck(this, _l_Atom);

    _this = _3e__95possibleConstructorReturn(this, __captured__scope_8_[3](_l_Atom).call(this, "circle", "", name));
    _this.height = 0.1;
    _this.width = 0.1;
    return _this;
  };

  var _4D__95typeof = function _4D__95typeof(obj) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_5_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_5_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_5_[1](obj);
  };

  var _2k__95classCallCheck = function _2k__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3Y__95possibleConstructorReturn = function _3Y__95possibleConstructorReturn(self, call) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (call && (__captured__scope_5_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4E__95assertThisInitialized(self);
  };

  var _4E__95assertThisInitialized = function _4E__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3Z__95getPrototypeOf = function _3Z__95getPrototypeOf(o) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    __captured__scope_5_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5_[3](o);
  };

  var _4f__95typeof = function _4f__95typeof(obj) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_J_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_J_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_J_[1](obj);
  };

  var _2y__95classCallCheck = function _2y__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _40__95possibleConstructorReturn = function _40__95possibleConstructorReturn(self, call) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (call && (__captured__scope_J_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4g__95assertThisInitialized(self);
  };

  var _4g__95assertThisInitialized = function _4g__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _41__95getPrototypeOf = function _41__95getPrototypeOf(o) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    __captured__scope_J_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_J_[3](o);
  };

  var _18_Op = function _18_Op(name, active) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    var _this;

    _2y__95classCallCheck(this, _18_Op);

    _this = _40__95possibleConstructorReturn(this, __captured__scope_J_[3](_18_Op).call(this, null, name, name));
    _this.active = active;
    return _this;
  };

  var _2I_ = function _2I_(token) {};

  var _2J_ = function _2J_() {
    return new _18_Op(this.name, this.active);
  };

  var _f_Contract = function _f_Contract(name) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    _2k__95classCallCheck(this, _f_Contract);

    return _3Y__95possibleConstructorReturn(this, __captured__scope_5_[3](_f_Contract).call(this, "point", "", name));
  };

  var _2D_ = function _2D_(token, link) {
    if (link.to == this.key) {
      return this.findLinksOutOf(null)[0];
    }
  };

  var _2E_ = function _2E_(token) {
    var link = token.link;
    var inLinks = this.findLinksInto();
    var outLinks = this.findLinksOutOf();
    var nextLink = outLinks[0];
    var nextNode = this.graph.findNodeByKey(nextLink.to);

    if (nextNode instanceof _f_Contract || nextNode instanceof _l_Atom) {
      inLinks.map(function (l) {
        return l.changeTo(nextNode.key, "_");
      });
      nextLink.delete();
      this.delete();
    } else if (nextNode instanceof _18_Op) {
      var term = new _X_Term().addToGroup(this.group);
      var copy = nextNode.copy().addToGroup(term); // clean up here

      var opLinks = nextNode.findLinksOutOf();

      var auxs = _f_Contract.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);

      link.changeTo(copy.key, "_");

      for (var i = 0; i < opLinks.length; i++) {
        opLinks[i].changeFrom(auxs[i].key, "_");
      }

      term.set(copy, auxs);
    }

    token.rewriteFlag = _F_Flag.SEARCH;
    return link;
  };

  var _2F_ = function _2F_() {
    return new _f_Contract(this.name);
  };

  var _2G_ = function _2G_(level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _2H_ = function _2H_(cs, inputs, originalGroup, op) {
    var c;
    var from;
    var to;
    var cList = [];
    var group = new _24_Group();

    for (var n = 0; n < cs; n++) {
      c = new _f_Contract().addToGroup(group);
      cList.push(c);
      if (inputs.length == 0) // maybe this needs to be "more elegant"
        new _V_Link(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
    }

    if (cList.length > 0) {
      for (var i = 0; i < inputs.length; i++) {
        from = inputs[i];
        to = cList[i % cs];
        new _V_Link(from.key, to.key, "_", "_").addToGroup(group);
      }
    }

    group.addToGroup(originalGroup);
    return cList;
  };

  var _43__95typeof = function _43__95typeof(obj) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_1_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_1_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_1_[1](obj);
  };

  var _2f__95classCallCheck = function _2f__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3K__95possibleConstructorReturn = function _3K__95possibleConstructorReturn(self, call) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (call && (__captured__scope_1_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _44__95assertThisInitialized(self);
  };

  var _44__95assertThisInitialized = function _44__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3L__95getPrototypeOf = function _3L__95getPrototypeOf(o) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_1_[3](o);
  };

  var _S_Start = function _S_Start() {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    _2f__95classCallCheck(this, _S_Start);

    return _3K__95possibleConstructorReturn(this, __captured__scope_1_[3](_S_Start).call(this, "point", ""));
  };

  var _1Z_ = function _1Z_(token) {
    return this.findLinksOutOf(null)[0];
  };

  var _1a_ = function _1a_() {
    return new _S_Start();
  };

  var _1b_ = function _1b_(level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _4N__95typeof = function _4N__95typeof(obj) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_A_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_A_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_A_[1](obj);
  };

  var _2p__95classCallCheck = function _2p__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3i__95possibleConstructorReturn = function _3i__95possibleConstructorReturn(self, call) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (call && (__captured__scope_A_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4O__95assertThisInitialized(self);
  };

  var _4O__95assertThisInitialized = function _4O__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3j__95getPrototypeOf = function _3j__95getPrototypeOf(o) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    __captured__scope_A_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A_[3](o);
  };

  var _p_IntOp = function _p_IntOp(n) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    _2p__95classCallCheck(this, _p_IntOp);

    return _3i__95possibleConstructorReturn(this, __captured__scope_A_[3](_p_IntOp).call(this, n, false));
  };

  var _4P__95typeof = function _4P__95typeof(obj) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_B_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_B_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_B_[1](obj);
  };

  var _2q__95classCallCheck = function _2q__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3k__95possibleConstructorReturn = function _3k__95possibleConstructorReturn(self, call) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (call && (__captured__scope_B_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4Q__95assertThisInitialized(self);
  };

  var _4Q__95assertThisInitialized = function _4Q__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3l__95getPrototypeOf = function _3l__95getPrototypeOf(o) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    __captured__scope_B_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B_[3](o);
  };

  var _s_BoolOp = function _s_BoolOp(b) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    _2q__95classCallCheck(this, _s_BoolOp);

    b = _s_BoolOp.parseBoolean(b);
    return _3k__95possibleConstructorReturn(this, __captured__scope_B_[3](_s_BoolOp).call(this, b, false));
  };

  var _2K_ = function _2K_() {
    return new _s_BoolOp();
  };

  var _2L_ = function _2L_(b) {
    if (b == "false" || b == 0) {
      return false;
    } else {
      return true;
    }
  };

  var _4R__95typeof = function _4R__95typeof(obj) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_C_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_C_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_C_[1](obj);
  };

  var _2r__95classCallCheck = function _2r__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3m__95possibleConstructorReturn = function _3m__95possibleConstructorReturn(self, call) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (call && (__captured__scope_C_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4S__95assertThisInitialized(self);
  };

  var _4S__95assertThisInitialized = function _4S__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3n__95getPrototypeOf = function _3n__95getPrototypeOf(o) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    __captured__scope_C_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C_[3](o);
  };

  var _u_PlusOp = function _u_PlusOp() {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    _2r__95classCallCheck(this, _u_PlusOp);

    return _3m__95possibleConstructorReturn(this, __captured__scope_C_[3](_u_PlusOp).call(this, "+", true));
  };

  var _2M_ = function _2M_() {
    return new _u_PlusOp();
  };

  var _2N_ = function _2N_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum + _this.graph.findNodeByKey(x.to).name;
    }, 0);
    var newNode = new _p_IntOp(n, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4T__95typeof = function _4T__95typeof(obj) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_D_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_D_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_D_[1](obj);
  };

  var _2s__95classCallCheck = function _2s__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3o__95possibleConstructorReturn = function _3o__95possibleConstructorReturn(self, call) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (call && (__captured__scope_D_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4U__95assertThisInitialized(self);
  };

  var _4U__95assertThisInitialized = function _4U__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3p__95getPrototypeOf = function _3p__95getPrototypeOf(o) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    __captured__scope_D_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D_[3](o);
  };

  var _w_TimesOp = function _w_TimesOp() {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    _2s__95classCallCheck(this, _w_TimesOp);

    return _3o__95possibleConstructorReturn(this, __captured__scope_D_[3](_w_TimesOp).call(this, "*", true));
  };

  var _2O_ = function _2O_() {
    return new _w_TimesOp();
  };

  var _2P_ = function _2P_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum * _this.graph.findNodeByKey(x.to).name;
    }, 1);
    var newNode = new _p_IntOp(n, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4V__95typeof = function _4V__95typeof(obj) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_E_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_E_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_E_[1](obj);
  };

  var _2t__95classCallCheck = function _2t__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3q__95possibleConstructorReturn = function _3q__95possibleConstructorReturn(self, call) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (call && (__captured__scope_E_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4W__95assertThisInitialized(self);
  };

  var _4W__95assertThisInitialized = function _4W__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3r__95getPrototypeOf = function _3r__95getPrototypeOf(o) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    __captured__scope_E_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E_[3](o);
  };

  var _y_AndOp = function _y_AndOp() {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    _2t__95classCallCheck(this, _y_AndOp);

    return _3q__95possibleConstructorReturn(this, __captured__scope_E_[3](_y_AndOp).call(this, "∧", true));
  };

  var _2Q_ = function _2Q_() {
    return new _y_AndOp();
  };

  var _2R_ = function _2R_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum && _s_BoolOp.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, true);
    var newNode = new _s_BoolOp(b, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4X__95typeof = function _4X__95typeof(obj) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_F_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_F_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_F_[1](obj);
  };

  var _2u__95classCallCheck = function _2u__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3s__95possibleConstructorReturn = function _3s__95possibleConstructorReturn(self, call) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (call && (__captured__scope_F_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4Y__95assertThisInitialized(self);
  };

  var _4Y__95assertThisInitialized = function _4Y__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3t__95getPrototypeOf = function _3t__95getPrototypeOf(o) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    __captured__scope_F_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F_[3](o);
  };

  var _10_OrOp = function _10_OrOp() {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    _2u__95classCallCheck(this, _10_OrOp);

    return _3s__95possibleConstructorReturn(this, __captured__scope_F_[3](_10_OrOp).call(this, "∨", true));
  };

  var _2S_ = function _2S_() {
    return new _10_OrOp();
  };

  var _2T_ = function _2T_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum || _s_BoolOp.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, false);
    var newNode = new _s_BoolOp(b, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4Z__95typeof = function _4Z__95typeof(obj) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_G_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_G_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_G_[1](obj);
  };

  var _2v__95classCallCheck = function _2v__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3u__95possibleConstructorReturn = function _3u__95possibleConstructorReturn(self, call) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (call && (__captured__scope_G_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4a__95assertThisInitialized(self);
  };

  var _4a__95assertThisInitialized = function _4a__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3v__95getPrototypeOf = function _3v__95getPrototypeOf(o) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    __captured__scope_G_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G_[3](o);
  };

  var _12_NotOp = function _12_NotOp() {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    _2v__95classCallCheck(this, _12_NotOp);

    return _3u__95possibleConstructorReturn(this, __captured__scope_G_[3](_12_NotOp).call(this, "¬", true));
  };

  var _2U_ = function _2U_() {
    return new _12_NotOp();
  };

  var _2V_ = function _2V_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = !_s_BoolOp.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
    var newNode = new _s_BoolOp(b, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4b__95typeof = function _4b__95typeof(obj) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_H_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_H_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_H_[1](obj);
  };

  var _2w__95classCallCheck = function _2w__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3w__95possibleConstructorReturn = function _3w__95possibleConstructorReturn(self, call) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (call && (__captured__scope_H_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4c__95assertThisInitialized(self);
  };

  var _4c__95assertThisInitialized = function _4c__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3x__95getPrototypeOf = function _3x__95getPrototypeOf(o) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    __captured__scope_H_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_H_[3](o);
  };

  var _14_EqualsOp = function _14_EqualsOp() {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    _2w__95classCallCheck(this, _14_EqualsOp);

    return _3w__95possibleConstructorReturn(this, __captured__scope_H_[3](_14_EqualsOp).call(this, "==", true));
  };

  var _2W_ = function _2W_() {
    return new _14_EqualsOp();
  };

  var _2X_ = function _2X_(token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var left = this.graph.findNodeByKey(outLinks[0].to).name;
    var right = this.graph.findNodeByKey(outLinks[1].to).name;
    var b = left == right;
    var newNode = new _s_BoolOp(b, false).addToGroup(this.group);
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _4d__95typeof = function _4d__95typeof(obj) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      __captured__scope_I_[1] = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      __captured__scope_I_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return __captured__scope_I_[1](obj);
  };

  var _2x__95classCallCheck = function _2x__95classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3y__95possibleConstructorReturn = function _3y__95possibleConstructorReturn(self, call) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (call && (__captured__scope_I_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _4e__95assertThisInitialized(self);
  };

  var _4e__95assertThisInitialized = function _4e__95assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3z__95getPrototypeOf = function _3z__95getPrototypeOf(o) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    __captured__scope_I_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_I_[3](o);
  };

  var _16_IfOp = function _16_IfOp() {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    _2x__95classCallCheck(this, _16_IfOp);

    return _3y__95possibleConstructorReturn(this, __captured__scope_I_[3](_16_IfOp).call(this, "if", true));
  };

  var _2Y_ = function _2Y_() {
    return new _16_IfOp();
  };

  var _2Z_ = function _2Z_(token) {
    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var name = this.graph.findNodeByKey(outLinks[0].to).name;
    var keep;
    var del;

    if (_s_BoolOp.parseBoolean(name)) {
      keep = 1;
      del = 2;
    } else {
      keep = 2;
      del = 1;
    }

    outLinks[del].delete();
    var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
    var newLink = new _V_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks[0].delete();
    this.graph.findNodeByKey(outLinks[0].to).delete();
    this.delete();
    token.rewriteFlag = _F_Flag.SEARCH;
    return newLink;
  };

  var _3_GoIMachine = function _3_GoIMachine() {
    _J__95classCallCheck(this, _3_GoIMachine);

    this.setMachine(new _K_Graph(), new _M_MachineToken(), 0);
  };

  var _4_ = _3_GoIMachine.prototype;

  var _5_ = function _5_(graphSet, tokenSet, countSet) {
    this.graph = graphSet;
    window.mainGraph = this.graph; // cheating!

    this.token = tokenSet;
    this.count = countSet;
  };

  var _6_ = function _6_(source) {
    var lexer = new _O_Lexer(source + '\0');
    var parser = new _Q_Parser(lexer);
    var ast = parser.parse();
    this.count = 0;
    this.graph.clear();
    var start = new _S_Start().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child, false);
    var link = new _V_Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
    this.token.reset(link);
  };

  var _7_ = function _7_(ast, group) {
    var graph = this.graph;
    var term = new _X_Term().addToGroup(group);

    if (ast instanceof _a_Thunk) {
      term.box();
      ast = ast.inner;
    } // VARIABLES & ATOMS


    if (ast instanceof _d_Var) {
      var auxs = [];

      for (var i = 0; i < ast.ctx.length; i++) {
        var c = new _f_Contract().addToGroup(term);
        auxs.push(c);
        if (ast.ctx[i].name == ast.name) var prin = c;
      }

      term.set(prin, auxs); // BINDINGS & REFERENCES
    } else if (ast instanceof _h_Binding || ast instanceof _j_Reference) {
      var body = this.toGraph(ast.body, term, false).addToGroup(term);
      var param = this.toGraph(ast.param, term, false).addToGroup(term);
      var auxs = body.auxs;
      var auxNode = auxs[0];
      auxs.splice(0, 1);
      auxs = auxs.concat(param.auxs);

      if (ast instanceof _j_Reference) {
        var atomNode = new _l_Atom("a").addToGroup(param);
        new _V_Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
        param.prin = atomNode;
      }

      new _V_Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
      auxs = _f_Contract.createDNet(ast.ctx.length, auxs, term);
      term.set(body.prin, auxs); // OPERATIONS
    } else if (ast instanceof _n_Operation) {
      var op = this.toOp(ast.name, ast.active).addToGroup(term);
      var auxs = [];
      var next;

      for (var i = 0; i < ast.sig[0]; i++) {
        next = this.toGraph(ast.eas[i], term).addToGroup(term);
        new _V_Link(op.key, next.prin.key, "_", "_").addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      for (var i = 0; i < ast.sig[1]; i++) {
        next = this.toGraph(ast.das[i], term).addToGroup(term);
        var link = new _V_Link(op.key, next.prin.key, "_", "_");
        link.visited = true; // hacking

        link.addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      auxs = _f_Contract.createDNet(ast.ctx.length, auxs, term, op);
      term.set(op, auxs);
    }

    return term;
  };

  var _8_ = function _8_(name, active) {
    if (Number.isInteger(parseInt(name))) {
      return new _p_IntOp(name);
    } else if (name == "true" || name == "false") {
      return new _s_BoolOp(name);
    } else if (name == "+") {
      return new _u_PlusOp();
    } else if (name == "*") {
      return new _w_TimesOp();
    } else if (name == "∧") {
      return new _y_AndOp();
    } else if (name == "∨") {
      return new _10_OrOp();
    } else if (name == "¬") {
      return new _12_NotOp();
    } else if (name == "==") {
      return new _14_EqualsOp();
    } else if (name == "if") {
      return new _16_IfOp();
    } else {
      return new _18_Op(name, active);
    }
  };

  var _9_ = function _9_() {
    // TODO
    // Loop through all links in the graph
    // Perform quotiening rules
    return null;
  };

  var _A_ = function _A_(graphTxt, linkTxt, flagTxt) {
    if (!finished) {
      this.count++;
      var node = this.graph.findNodeByKey(this.token.link.to);
      var nextLink;

      if (this.token.rewriteFlag == _F_Flag.REWRITE) {
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

  var _B_ = function _B_(graphTxt, linkTxt, flagTxt) {
    graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
    linkTxt.val(this.token.link + '\n' + linkTxt.val());
    flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
  };

  var _C_ = function _C_(token) {
    // this needs cleaning up!
    var link = token.link;

    if (token.rewriteFlag == _F_Flag.SEARCH) {
      var to = this.graph.findNodeByKey(link.to);
      var outlinks = to.findLinksOutOf();

      if (to instanceof _l_Atom) {
        token.rewriteFlag = _F_Flag.RETURN;
        return link;
      } else if (to instanceof _18_Op) {
        if (outlinks.length == 0) {
          if (to.active) {
            token.rewriteFlag = _F_Flag.REWRITE;
          } else {
            token.rewriteFlag = _F_Flag.RETURN;
          }

          return link;
        } else {
          return outlinks[0];
        }
      } else if (to instanceof _f_Contract) {
        token.rewriteFlag = _F_Flag.REWRITE;
        return link;
      }
    } else if (token.rewriteFlag == _F_Flag.RETURN) {
      var from = this.graph.findNodeByKey(link.from);
      var outlinks = from.findLinksOutOf();

      if (this.doneVisiting(link, outlinks)) {
        // HACKING
        if (from.active) {
          token.rewriteFlag = _F_Flag.REWRITE;
          return from.findLinksInto()[0];
        } else {
          token.rewriteFlag = _F_Flag.RETURN;
          return from.findLinksInto()[0];
        }
      } else {
        token.rewriteFlag = _F_Flag.SEARCH;
        var j = this.findJ(link, outlinks);
        return outlinks[j];
      }
    }

    return link;
  };

  var _D_ = function _D_(link, links) {
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

  var _E_ = function _E_(link, list) {
    for (var j = 0; j < list.length; j++) {
      if (!list[j].visited && list[j] != link) return j;
    }

    return null;
  };

  var __constructor = function __constructor() {};

  _$0_global.mainGraph = null;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1c_, _$2_Object_46defineProperty(_U_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1d_, _$2_Object_46defineProperty(_U_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1e_, _$2_Object_46defineProperty(_U_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1f_, _$2_Object_46defineProperty(_U_, "findLinksConnected", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1g_, _$2_Object_46defineProperty(_U_, "findLinksInto", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1h_, _$2_Object_46defineProperty(_U_, "findLinksOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1i_, _$2_Object_46defineProperty(_U_, "findNodesOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1j_, _$2_Object_46defineProperty(_U_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1k_, _$2_Object_46defineProperty(_U_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1l_, _$2_Object_46defineProperty(_U_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1m_, _$2_Object_46defineProperty(_U_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1n_, _$2_Object_46defineProperty(_U_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Z_ = (__constructor.prototype = _U_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _24_Group, _$2_Object_46defineProperty(_Z_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _25_, _$2_Object_46defineProperty(_Z_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _26_, _$2_Object_46defineProperty(_Z_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _27_, _$2_Object_46defineProperty(_Z_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _28_, _$2_Object_46defineProperty(_Z_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _29_, _$2_Object_46defineProperty(_Z_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2A_, _$2_Object_46defineProperty(_Z_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2B_, _$2_Object_46defineProperty(_Z_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _24_Group.prototype = _Z_;

  _$3_Object_46setPrototypeOf(_24_Group, _1o_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _19_, _$2_Object_46defineProperty(_L_, "clear", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1A_, _$2_Object_46defineProperty(_L_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1B_, _$2_Object_46defineProperty(_L_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1C_, _$2_Object_46defineProperty(_L_, "findNodeByKey", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1D_, _$2_Object_46defineProperty(_L_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1E_, _$2_Object_46defineProperty(_L_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1F_, _$2_Object_46defineProperty(_L_, "findLinkByKeys", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1G_, _$2_Object_46defineProperty(_L_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _F_Flag = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1H_, _$2_Object_46defineProperty(_M_MachineToken, "RewriteFlag", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1I_, _$2_Object_46defineProperty(_N_, "setLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1J_, _$2_Object_46defineProperty(_N_, "reset", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _5_, _$2_Object_46defineProperty(_4_, "setMachine", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1K_, _$2_Object_46defineProperty(_P_, "_nextChar", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2z_Token.EOF = "EOF";
  _2z_Token.LCID = "LCID";
  _2z_Token.LPAREN = "LPAREN";
  _2z_Token.RPAREN = "RPAREN";
  _2z_Token.SEMIC = "SEMIC";
  _2z_Token.BIND = "BIND";
  _2z_Token.NEW = "NEW";
  _2z_Token.DEF = "DEF";
  _2z_Token.IN = "IN";
  _2z_Token.PLUS = "PLUS";
  _2z_Token.TIMES = "TIMES";
  _2z_Token.INT = "INT";
  _2z_Token.AND = "AND";
  _2z_Token.OR = "OR";
  _2z_Token.NOT = "NOT";
  _2z_Token.TRUE = "TRUE";
  _2z_Token.FALSE = "FALSE";
  _2z_Token.EQUALS = "EQUALS";
  _2z_Token.IF = "IF";
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1L_, _$2_Object_46defineProperty(_P_, "_nextToken", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1M_, _$2_Object_46defineProperty(_P_, "token", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1N_, _$2_Object_46defineProperty(_P_, "value", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1O_, _$2_Object_46defineProperty(_P_, "lookahead", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1P_, _$2_Object_46defineProperty(_P_, "lookaheadType", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Q_, _$2_Object_46defineProperty(_P_, "fail", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1R_, _$2_Object_46defineProperty(_P_, "next", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1S_, _$2_Object_46defineProperty(_P_, "match", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1T_, _$2_Object_46defineProperty(_P_, "skip", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1U_, _$2_Object_46defineProperty(_R_, "parse", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _b_ = (__constructor.prototype = _c_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _a_Thunk, _$2_Object_46defineProperty(_b_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _a_Thunk.prototype = _b_;

  _$3_Object_46setPrototypeOf(_a_Thunk, _2C_Term);

  var _i_ = (__constructor.prototype = _c_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _h_Binding, _$2_Object_46defineProperty(_i_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _h_Binding.prototype = _i_;

  _$3_Object_46setPrototypeOf(_h_Binding, _2C_Term);

  var _k_ = (__constructor.prototype = _c_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _j_Reference, _$2_Object_46defineProperty(_k_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _j_Reference.prototype = _k_;

  _$3_Object_46setPrototypeOf(_j_Reference, _2C_Term);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1V_, _$2_Object_46defineProperty(_R_, "term", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _e_ = (__constructor.prototype = _c_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _d_Var, _$2_Object_46defineProperty(_e_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _d_Var.prototype = _e_;

  _$3_Object_46setPrototypeOf(_d_Var, _2C_Term);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1W_, _$2_Object_46defineProperty(_R_, "atom", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _o_ = (__constructor.prototype = _c_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _n_Operation, _$2_Object_46defineProperty(_o_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _n_Operation.prototype = _o_;

  _$3_Object_46setPrototypeOf(_n_Operation, _2C_Term);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1X_, _$2_Object_46defineProperty(_R_, "operation", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Y_, _$2_Object_46defineProperty(_R_, "gatherArgs", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _T_ = (__constructor.prototype = _U_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _S_Start, _$2_Object_46defineProperty(_T_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Z_, _$2_Object_46defineProperty(_T_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1a_, _$2_Object_46defineProperty(_T_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1b_, _$2_Object_46defineProperty(_T_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _S_Start.prototype = _T_;

  _$3_Object_46setPrototypeOf(_S_Start, _1o_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1p_, _$2_Object_46defineProperty(_W_, "addToNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1q_, _$2_Object_46defineProperty(_W_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1r_, _$2_Object_46defineProperty(_W_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1s_, _$2_Object_46defineProperty(_W_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1t_, _$2_Object_46defineProperty(_W_, "changeFrom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1u_, _$2_Object_46defineProperty(_W_, "changeTo", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1v_, _$2_Object_46defineProperty(_W_, "focus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1w_, _$2_Object_46defineProperty(_W_, "clearFocus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1x_, _$2_Object_46defineProperty(_W_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1y_, _$2_Object_46defineProperty(_W_, "toString", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1z_, _$2_Object_46defineProperty(_W_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6_, _$2_Object_46defineProperty(_4_, "compile", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Y_ = (__constructor.prototype = _Z_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _X_Term, _$2_Object_46defineProperty(_Y_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _20_, _$2_Object_46defineProperty(_Y_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _21_, _$2_Object_46defineProperty(_Y_, "box", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _22_, _$2_Object_46defineProperty(_Y_, "unbox", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _23_, _$2_Object_46defineProperty(_Y_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _X_Term.prototype = _Y_;

  _$3_Object_46setPrototypeOf(_X_Term, _24_Group);

  var _g_ = (__constructor.prototype = _U_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _f_Contract, _$2_Object_46defineProperty(_g_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2D_, _$2_Object_46defineProperty(_g_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _m_ = (__constructor.prototype = _U_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _l_Atom, _$2_Object_46defineProperty(_m_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _l_Atom.prototype = _m_;

  _$3_Object_46setPrototypeOf(_l_Atom, _1o_Node);

  var _r_ = (__constructor.prototype = _U_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _18_Op, _$2_Object_46defineProperty(_r_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2I_, _$2_Object_46defineProperty(_r_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2J_, _$2_Object_46defineProperty(_r_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _18_Op.prototype = _r_;

  _$3_Object_46setPrototypeOf(_18_Op, _1o_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2E_, _$2_Object_46defineProperty(_g_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2F_, _$2_Object_46defineProperty(_g_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2G_, _$2_Object_46defineProperty(_g_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _f_Contract.prototype = _g_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2H_, _$2_Object_46defineProperty(_f_Contract, "createDNet", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$3_Object_46setPrototypeOf(_f_Contract, _1o_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _7_, _$2_Object_46defineProperty(_4_, "toGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _q_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _p_IntOp, _$2_Object_46defineProperty(_q_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _p_IntOp.prototype = _q_;

  _$3_Object_46setPrototypeOf(_p_IntOp, _18_Op);

  var _t_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _s_BoolOp, _$2_Object_46defineProperty(_t_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2K_, _$2_Object_46defineProperty(_t_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _s_BoolOp.prototype = _t_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2L_, _$2_Object_46defineProperty(_s_BoolOp, "parseBoolean", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$3_Object_46setPrototypeOf(_s_BoolOp, _18_Op);

  var _v_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _u_PlusOp, _$2_Object_46defineProperty(_v_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2M_, _$2_Object_46defineProperty(_v_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2N_, _$2_Object_46defineProperty(_v_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _u_PlusOp.prototype = _v_;

  _$3_Object_46setPrototypeOf(_u_PlusOp, _18_Op);

  var _x_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _w_TimesOp, _$2_Object_46defineProperty(_x_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2O_, _$2_Object_46defineProperty(_x_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2P_, _$2_Object_46defineProperty(_x_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _w_TimesOp.prototype = _x_;

  _$3_Object_46setPrototypeOf(_w_TimesOp, _18_Op);

  var _z_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _y_AndOp, _$2_Object_46defineProperty(_z_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2Q_, _$2_Object_46defineProperty(_z_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2R_, _$2_Object_46defineProperty(_z_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _y_AndOp.prototype = _z_;

  _$3_Object_46setPrototypeOf(_y_AndOp, _18_Op);

  var _11_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _10_OrOp, _$2_Object_46defineProperty(_11_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2S_, _$2_Object_46defineProperty(_11_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2T_, _$2_Object_46defineProperty(_11_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _10_OrOp.prototype = _11_;

  _$3_Object_46setPrototypeOf(_10_OrOp, _18_Op);

  var _13_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _12_NotOp, _$2_Object_46defineProperty(_13_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2U_, _$2_Object_46defineProperty(_13_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2V_, _$2_Object_46defineProperty(_13_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _12_NotOp.prototype = _13_;

  _$3_Object_46setPrototypeOf(_12_NotOp, _18_Op);

  var _15_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _14_EqualsOp, _$2_Object_46defineProperty(_15_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2W_, _$2_Object_46defineProperty(_15_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2X_, _$2_Object_46defineProperty(_15_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _14_EqualsOp.prototype = _15_;

  _$3_Object_46setPrototypeOf(_14_EqualsOp, _18_Op);

  var _17_ = (__constructor.prototype = _r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _16_IfOp, _$2_Object_46defineProperty(_17_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2Y_, _$2_Object_46defineProperty(_17_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2Z_, _$2_Object_46defineProperty(_17_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _16_IfOp.prototype = _17_;

  _$3_Object_46setPrototypeOf(_16_IfOp, _18_Op);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _8_, _$2_Object_46defineProperty(_4_, "toOp", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _9_, _$2_Object_46defineProperty(_4_, "quotieningRules", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _A_, _$2_Object_46defineProperty(_4_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _B_, _$2_Object_46defineProperty(_4_, "printHistory", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _C_, _$2_Object_46defineProperty(_4_, "pass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _D_, _$2_Object_46defineProperty(_4_, "doneVisiting", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _E_, _$2_Object_46defineProperty(_4_, "findJ", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _$0_global.machine = _3_GoIMachine;
}).call(this);
}.call(window));

/***/ })

/******/ });
//# sourceMappingURL=main.requirejs.js.map