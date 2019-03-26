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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/SSD/UI/v2/goi-machine.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/SSD/UI/v2/goi-machine.prepack.js":
/*!***********************************************!*\
  !*** ./lib/SSD/UI/v2/goi-machine.prepack.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_47__95typeof, _47__95typeof, _1R__95get, _1R__95get];
        break;

      case 1:
        __captured = [_6Y__95typeof, _6Y__95typeof, _5V__95getPrototypeOf, _5V__95getPrototypeOf];
        break;

      case 2:
        __captured = [_6c__95typeof, _6c__95typeof, _5b__95getPrototypeOf, _5b__95getPrototypeOf];
        break;

      case 3:
        __captured = [_6f__95typeof, _6f__95typeof, _5f__95getPrototypeOf, _5f__95getPrototypeOf];
        break;

      case 4:
        __captured = [_6h__95typeof, _6h__95typeof, _5h__95getPrototypeOf, _5h__95getPrototypeOf, _5i__95get, _5i__95get];
        break;

      case 5:
        __captured = [_6k__95typeof, _6k__95typeof, _5m__95getPrototypeOf, _5m__95getPrototypeOf];
        break;

      case 6:
        __captured = [_6m__95typeof, _6m__95typeof, _5o__95getPrototypeOf, _5o__95getPrototypeOf];
        break;

      case 7:
        __captured = [_6o__95typeof, _6o__95typeof, _5q__95getPrototypeOf, _5q__95getPrototypeOf];
        break;

      case 8:
        __captured = [_6q__95typeof, _6q__95typeof, _5s__95getPrototypeOf, _5s__95getPrototypeOf];
        break;

      case 9:
        __captured = [_6s__95typeof, _6s__95typeof, _5u__95getPrototypeOf, _5u__95getPrototypeOf];
        break;

      case 10:
        __captured = [_6u__95typeof, _6u__95typeof, _5x__95getPrototypeOf, _5x__95getPrototypeOf];
        break;

      case 11:
        __captured = [_6x__95typeof, _6x__95typeof, _61__95getPrototypeOf, _61__95getPrototypeOf];
        break;

      case 12:
        __captured = [_6z__95typeof, _6z__95typeof, _63__95getPrototypeOf, _63__95getPrototypeOf];
        break;

      case 13:
        __captured = [_71__95typeof, _71__95typeof, _65__95getPrototypeOf, _65__95getPrototypeOf];
        break;

      case 14:
        __captured = [_73__95typeof, _73__95typeof, _67__95getPrototypeOf, _67__95getPrototypeOf];
        break;

      case 15:
        __captured = [_75__95typeof, _75__95typeof, _69__95getPrototypeOf, _69__95getPrototypeOf];
        break;

      case 16:
        __captured = [_7A__95typeof, _7A__95typeof, _6B__95getPrototypeOf, _6B__95getPrototypeOf, _6C__95get, _6C__95get];
        break;

      case 17:
        __captured = [_7C__95typeof, _7C__95typeof, _6E__95getPrototypeOf, _6E__95getPrototypeOf];
        break;

      case 18:
        __captured = [_7E__95typeof, _7E__95typeof, _6G__95getPrototypeOf, _6G__95getPrototypeOf];
        break;

      case 19:
        __captured = [_7G__95typeof, _7G__95typeof, _6I__95getPrototypeOf, _6I__95getPrototypeOf];
        break;

      case 20:
        __captured = [_7I__95typeof, _7I__95typeof, _6K__95getPrototypeOf, _6K__95getPrototypeOf];
        break;

      case 21:
        __captured = [_7K__95typeof, _7K__95typeof, _6M__95getPrototypeOf, _6M__95getPrototypeOf];
        break;

      case 22:
        __captured = [_7M__95typeof, _7M__95typeof, _6O__95getPrototypeOf, _6O__95getPrototypeOf];
        break;

      case 23:
        __captured = [_6a__95typeof, _6a__95typeof, _5Y__95getPrototypeOf, _5Y__95getPrototypeOf, _5Z__95get, _5Z__95get];
        break;

      case 24:
        __captured = [_7b__95typeof, _7b__95typeof, _7Q__95getPrototypeOf, _7Q__95getPrototypeOf, _7R__95get, _7R__95get];
        break;

      case 25:
        __captured = [_7d__95typeof, _7d__95typeof, _7U__95getPrototypeOf, _7U__95getPrototypeOf];
        break;

      case 26:
        __captured = [_7f__95typeof, _7f__95typeof, _7W__95getPrototypeOf, _7W__95getPrototypeOf];
        break;

      case 27:
        __captured = [_7i__95typeof, _7i__95typeof, _7a__95getPrototypeOf, _7a__95getPrototypeOf];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(28);

  var $$0_enumerable_58false_44configurable_58true_44writable_58true = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46getPrototypeOf = _$1_Object.getPrototypeOf;
  var _$3_Map = _$0_global.Map;
  var _$4_Object_46defineProperty = _$1_Object.defineProperty;
  var _$5_Object_46setPrototypeOf = _$1_Object.setPrototypeOf;

  var _2f__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4O__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1s_Abstraction = function (param, body) {
    _4O__95classCallCheck(this, _1s_Abstraction);

    this.param = param;
    this.body = body;
  };

  var _4S__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1z_Application = function (lhs, rhs) {
    _4S__95classCallCheck(this, _1z_Application);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _4L__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1l_Identifier = function (value, name) {
    _4L__95classCallCheck(this, _1l_Identifier);

    this.value = value;
    this.name = name;
  };

  var _4V__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _23_Constant = function (value) {
    _4V__95classCallCheck(this, _23_Constant);

    this.value = value;
  };

  var _5v__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3V_Operation = function (type, name) {
    _5v__95classCallCheck(this, _3V_Operation);

    this.type = type;
    this.name = name;
  };

  var _29_ = _3V_Operation.prototype;

  var _6z__95typeof = function (obj) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_D_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_D_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_D_[1](obj);
  };

  var _4Z__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _62__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (call && (__captured__scope_D_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _70__95assertThisInitialized(self);
  };

  var _70__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _63__95getPrototypeOf = function (o) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    __captured__scope_D_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D_[3](o);
  };

  var _2C_UnaryOp = function (type, name, v1) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    var _this;

    _4Z__95classCallCheck(this, _2C_UnaryOp);

    _this = _62__95possibleConstructorReturn(this, __captured__scope_D_[3](_2C_UnaryOp).call(this, type, name));
    _this.v1 = v1;
    return _this;
  };

  var _6u__95typeof = function (obj) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_B_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_B_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_B_[1](obj);
  };

  var _4X__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5w__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (call && (__captured__scope_B_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6v__95assertThisInitialized(self);
  };

  var _6v__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5x__95getPrototypeOf = function (o) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    __captured__scope_B_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B_[3](o);
  };

  var _26_BinaryOp = function (type, name, v1, v2) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    var _this;

    _4X__95classCallCheck(this, _26_BinaryOp);

    _this = _5w__95possibleConstructorReturn(this, __captured__scope_B_[3](_26_BinaryOp).call(this, type, name, v1));
    _this.v2 = v2;
    return _this;
  };

  var _4d__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2F_IfThenElse = function (cond, t1, t2) {
    _4d__95classCallCheck(this, _2F_IfThenElse);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  var _4f__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2I_Recursion = function (param, body) {
    _4f__95classCallCheck(this, _2I_Recursion);

    this.param = param;
    this.body = body;
  };

  var _4h__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2L_ProvisionalConstant = function (term) {
    _4h__95classCallCheck(this, _2L_ProvisionalConstant);

    this.term = term;
  };

  var _4n__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2U_Change = function (param, body) {
    _4n__95classCallCheck(this, _2U_Change);

    this.param = param;
    this.body = body;
  };

  var _4q__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2Z_Assign = function (param, body) {
    _4q__95classCallCheck(this, _2Z_Assign);

    this.param = param;
    this.body = body;
  };

  var _4s__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2c_Propagation = function () {
    _4s__95classCallCheck(this, _2c_Propagation);
  };

  var _4j__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2O_Deprecation = function (term) {
    _4j__95classCallCheck(this, _2O_Deprecation);

    this.term = term;
  };

  var _4l__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2R_Dereference = function (term) {
    _4l__95classCallCheck(this, _2R_Dereference);

    this.term = term;
  };

  var _49__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6X__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _4v_Token = function (type, value, pred) {
    _6X__95classCallCheck(this, _4v_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _1d_Lexer = function (input) {
    _49__95classCallCheck(this, _1d_Lexer);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _1e_ = _1d_Lexer.prototype;

  var _2g_ = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _2h_ = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case 'λ':
      case '\\':
        this._token = new _4v_Token(_4v_Token.LAMBDA);
        break;

      case '.':
        this._token = new _4v_Token(_4v_Token.DOT);
        break;

      case ',':
        this._token = new _4v_Token(_4v_Token.COMMA);
        break;

      case ';':
        this._token = new _4v_Token(_4v_Token.SEQ);
        break;

      case '(':
        this._token = new _4v_Token(_4v_Token.LPAREN);
        break;

      case ')':
        this._token = new _4v_Token(_4v_Token.RPAREN);
        break;

      case '{':
        this._token = new _4v_Token(_4v_Token.CLPAREN);
        break;

      case '}':
        this._token = new _4v_Token(_4v_Token.CRPAREN);
        break;

      case '\0':
        this._token = new _4v_Token(_4v_Token.EOF);
        break;

      case '~':
        this._token = new _4v_Token(_4v_Token.NOT);
        break;

      case '&':
        if (this._nextChar() == '&') this._token = new _4v_Token(_4v_Token.AND, null, 5);else {
          this._index--;
          this.fail();
        }
        break;

      case '|':
        var c2 = this._nextChar();

        if (c2 == '|') this._token = new _4v_Token(_4v_Token.OR, null, 4);else {
          this._index--;
          this.fail();
        }
        break;

      case '+':
        this._token = new _4v_Token(_4v_Token.PLUS, null, 12);
        break;

      case '-':
        this._token = new _4v_Token(_4v_Token.SUB, null, 12);
        break;

      case '*':
        this._token = new _4v_Token(_4v_Token.MULT, null, 13);
        break;

      case '/':
        this._token = new _4v_Token(_4v_Token.DIV, null, 13);
        break;

      case '<':
        if (this._nextChar() == '=') this._token = new _4v_Token(_4v_Token.LTE, null, 10);else {
          this._index--;
          this.fail();
        }
        break;

      case '=':
        this._token = new _4v_Token(_4v_Token.DEFINE);
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
          if (str == "let") this._token = new _4v_Token(_4v_Token.LET);else if (str == "in") this._token = new _4v_Token(_4v_Token.IN);else if (str == "rec") this._token = new _4v_Token(_4v_Token.REC);else if (str == "true") this._token = new _4v_Token(_4v_Token.TRUE);else if (str == "false") this._token = new _4v_Token(_4v_Token.FALSE);else if (str == "if") this._token = new _4v_Token(_4v_Token.IF);else if (str == "then") this._token = new _4v_Token(_4v_Token.THEN);else if (str == "else") this._token = new _4v_Token(_4v_Token.ELSE);else if (str == "link") this._token = new _4v_Token(_4v_Token.CHANGE);else if (str == "set") this._token = new _4v_Token(_4v_Token.SET);else if (str == "to") this._token = new _4v_Token(_4v_Token.TO);else if (str == "step") this._token = new _4v_Token(_4v_Token.PROP);else if (str == "peek") this._token = new _4v_Token(_4v_Token.DEP);else if (str == "deref") this._token = new _4v_Token(_4v_Token.DEREF);else this._token = new _4v_Token(_4v_Token.LCID, str);
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
            this._token = new _4v_Token(_4v_Token.INT, parseFloat(_str));
          } else {
            this.fail();
          }

    }
  };

  var _2i_ = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _2j_ = function () {
    return this._token;
  };

  var _2k_ = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _2l_ = function (type) {
    return this._token.type == type;
  };

  var _2m_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _2n_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _4I__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1f_Parser = function (lexer) {
    _4I__95classCallCheck(this, _1f_Parser);

    this.lexer = lexer;
  };

  var _1g_ = _1f_Parser.prototype;

  var _2o_ = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_4v_Token.EOF);
    return result;
  };

  var _2p_ = function (ctx) {
    if (this.lexer.skip(_4v_Token.LAMBDA)) {
      var id = this.lexer.token(_4v_Token.LCID);
      this.lexer.match(_4v_Token.DOT);
      var term = this.term([id].concat(ctx));
      return new _1s_Abstraction(id, term);
    } else if (this.lexer.skip(_4v_Token.LET)) {
      var _id = this.lexer.token(_4v_Token.LCID);

      this.lexer.match(_4v_Token.DEFINE);
      var N = this.term(ctx);
      this.lexer.match(_4v_Token.IN);
      var M = this.term([_id].concat(ctx));
      return new _1z_Application(new _1s_Abstraction(_id, M), N);
    } else if (this.lexer.skip(_4v_Token.REC)) {
      var _id2 = this.lexer.token(_4v_Token.LCID);

      this.lexer.match(_4v_Token.DOT);

      var _term = this.term([_id2].concat(ctx));

      return new _2I_Recursion(_id2, _term);
    } else if (this.lexer.skip(_4v_Token.IF)) {
      var cond = this.term(ctx);
      this.lexer.match(_4v_Token.THEN);
      var t1 = this.term(ctx);
      this.lexer.match(_4v_Token.ELSE);
      var t2 = this.term(ctx);
      return new _2F_IfThenElse(cond, t1, t2);
    } else {
      return this.application(ctx);
    }
  };

  var _2q_ = function (token) {
    return token.type == _4v_Token.AND || token.type == _4v_Token.OR || token.type == _4v_Token.PLUS || token.type == _4v_Token.SUB || token.type == _4v_Token.MULT || token.type == _4v_Token.DIV || token.type == _4v_Token.LTE;
  };

  var _2r_ = function (ctx, lhs, pred) {
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

      if (op.type == _4v_Token.AND) {
        lhs = new _26_BinaryOp(_4A_BinOpType.And, "&&", lhs, rhs);
      } else if (op.type == _4v_Token.OR) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Or, "||", lhs, rhs);
      } else if (op.type == _4v_Token.PLUS) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Plus, "+", lhs, rhs);
      } else if (op.type == _4v_Token.SUB) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Sub, "-", lhs, rhs);
      } else if (op.type == _4v_Token.MULT) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Mult, "*", lhs, rhs);
      } else if (op.type == _4v_Token.DIV) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Div, "/", lhs, rhs);
      } else if (op.type == _4v_Token.LTE) {
        lhs = new _26_BinaryOp(_4A_BinOpType.Lte, "<=", lhs, rhs);
      }
    }

    return lhs;
  };

  var _2s_ = function (ctx) {
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
          lhs = new _1z_Application(lhs, rhs);
        }
      }
    }
  };

  var _2t_ = function (ctx) {
    if (this.lexer.skip(_4v_Token.LPAREN)) {
      var _term2 = this.term(ctx);

      this.lexer.match(_4v_Token.RPAREN);
      return _term2;
    } else if (this.lexer.next(_4v_Token.LCID)) {
      var id = this.lexer.token(_4v_Token.LCID);
      return new _1l_Identifier(ctx.indexOf(id), id);
    } else if (this.lexer.next(_4v_Token.INT)) {
      var n = this.lexer.token(_4v_Token.INT);
      return new _23_Constant(n);
    } else if (this.lexer.skip(_4v_Token.TRUE)) {
      return new _23_Constant(true);
    } else if (this.lexer.skip(_4v_Token.FALSE)) {
      return new _23_Constant(false);
    } else if (this.lexer.skip(_4v_Token.NOT)) {
      var _term3 = this.term(ctx);

      return new _2C_UnaryOp(_4a_UnOpType.Not, "~", _term3);
    } else if (this.lexer.skip(_4v_Token.PROP)) {
      return new _2c_Propagation();
    } else if (this.lexer.skip(_4v_Token.DEP)) {
      var term = this.term(ctx);
      return new _2O_Deprecation(term);
    } else if (this.lexer.skip(_4v_Token.DEREF)) {
      var term = this.term(ctx);
      return new _2R_Dereference(term);
    } else if (this.lexer.skip(_4v_Token.CLPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_4v_Token.CRPAREN);
      return new _2L_ProvisionalConstant(term);
    } else if (this.lexer.skip(_4v_Token.CHANGE)) {
      var _id3 = this.lexer.token(_4v_Token.LCID);

      this.lexer.match(_4v_Token.TO);

      var _term4 = this.term(ctx);

      return new _2U_Change(_id3, _term4);
    } else if (this.lexer.skip(_4v_Token.SET)) {
      var _id4 = this.lexer.token(_4v_Token.LCID);

      this.lexer.match(_4v_Token.TO);

      var _term5 = this.term(ctx);

      return new _2Z_Assign(_id4, _term5);
    } else {
      return undefined;
    }
  };

  var _1c__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _t_MachineToken = function (machine) {
    _1c__95classCallCheck(this, _t_MachineToken);

    this.machine = machine;
    this.reset();
  };

  var _L_ = _t_MachineToken.prototype;

  var _1M_ = function () {
    return _1V_CompData;
  };

  var _1N_ = function () {
    return _1B_RewriteFlag;
  };

  var _q_ = function (link) {
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

  var _r_ = function () {
    this.forward = true;
    this.rewrite = false;
    this.transited = false;
    this.link = null;
    this.rewriteFlag = _1B_RewriteFlag.EMPTY;
    this.dataStack = [_1V_CompData.PROMPT];
    this.boxStack = [];
  };

  var _s_ = function () {
    this.setLink(null);
    this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
  };

  var _4K__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1T_isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var _1j_Link = function (from, to, fromPort, toPort, reverse) {
    _4K__95classCallCheck(this, _1j_Link);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.reverse = reverse;
    this.colour = null;
    this.penWidth = null;
    this.addToGraph(_1A_.mainGraph); // cheating

    this.addToNode(); // cheating
  };

  var _1k_ = _1j_Link.prototype;

  var _2w_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _2x_ = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _2y_ = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _2z_ = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _30_ = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _31_ = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _32_ = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _33_ = function () {
    this.colour = null;
    this.penWidth = null;
  };

  var _34_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _35_ = function () {
    return this.from + "->" + this.to;
  };

  var _1U__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _47__95typeof = function (obj) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_1_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_1_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_1_[1](obj);
  };

  var _1O__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1P__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (call && (__captured__scope_1_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _48__95assertThisInitialized(self);
  };

  var _48__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _1R__95get = function (target, property, receiver) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_1_[3] = Reflect.get;
    } else {
      __captured__scope_1_[3] = function _get(target, property, receiver) {
        var base = _4u__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_1_[3](target, property, receiver || target);
  };

  var _4u__95superPropBase = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _1Q_(object);
      if (object === null) break;
    }

    return object;
  };

  var _1S__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _i_Node = function (shape, text, colour, name) {
    _1S__95classCallCheck(this, _i_Node);

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
    this.addToGraph(_1A_.mainGraph); // cheating!
  };

  var _C_ = _i_Node.prototype;

  var _Y_ = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _Z_ = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _a_ = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _b_ = function () {
    return this.links;
  };

  var _c_ = function (toPort) {
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

  var _d_ = function (fromPort) {
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

  var _e_ = function (graph) {
    var newNode = new _i_Node(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
  };

  var _f_ = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _g_ = function (token, link) {
    return link;
  };

  var _h_ = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _S_Group = function () {
    var _this;

    _1O__95classCallCheck(this, _S_Group);

    _this = _1P__95possibleConstructorReturn(this, _1Q_(_S_Group).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _T_ = function (node) {
    this.nodes.push(node);
  };

  var _U_ = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _V_ = function (link) {
    this.links.push(link);
  };

  var _W_ = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _X_ = function () {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_1_[3](_1Q_(_S_Group.prototype), "delete", this).call(this);
  };

  var _p_Graph = function (machine) {
    _1U__95classCallCheck(this, _p_Graph);

    this.machine = machine;
    this.clear();
  };

  var _D_ = _p_Graph.prototype;

  var _j_ = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _S_Group();
  };

  var _k_ = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _l_ = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _m_ = function (key) {
    return this.allNodes.get(key);
  };

  var _n_ = function (link) {
    this.allLinks.push(link);
  };

  var _o_ = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _6f__95typeof = function (obj) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_4_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_4_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_4_[1](obj);
  };

  var _4N__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5e__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (call && (__captured__scope_4_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6g__95assertThisInitialized(self);
  };

  var _6g__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5f__95getPrototypeOf = function (o) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    __captured__scope_4_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4_[3](o);
  };

  var _7b__95typeof = function (obj) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_P_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_P_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_P_[1](obj);
  };

  var _6e__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7P__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    if (call && (__captured__scope_P_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7c__95assertThisInitialized(self);
  };

  var _7c__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7R__95get = function (target, property, receiver) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_P_[5] = Reflect.get;
    } else {
      __captured__scope_P_[5] = function _get(target, property, receiver) {
        var base = _7h__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_P_[5](target, property, receiver || target);
  };

  var _7h__95superPropBase = function (object, property) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_P_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _7Q__95getPrototypeOf = function (o) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    __captured__scope_P_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_P_[3](o);
  };

  var _6a__95typeof = function (obj) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_O_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_O_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_O_[1](obj);
  };

  var _5W__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5X__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    if (call && (__captured__scope_O_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6b__95assertThisInitialized(self);
  };

  var _6b__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5Z__95get = function (target, property, receiver) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_O_[5] = Reflect.get;
    } else {
      __captured__scope_O_[5] = function _get(target, property, receiver) {
        var base = _7O__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_O_[5](target, property, receiver || target);
  };

  var _7O__95superPropBase = function (object, property) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_O_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _5Y__95getPrototypeOf = function (o) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    __captured__scope_O_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_O_[3](o);
  };

  var _38_Expo = function (shape, text, name) {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    var _this;

    _5W__95classCallCheck(this, _38_Expo);

    _this = _5X__95possibleConstructorReturn(this, __captured__scope_O_[3](_38_Expo).call(this, shape, text, "cyan", name));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _39_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _3A_ = function () {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_O_[5](__captured__scope_O_[3](_38_Expo.prototype), "delete", this).call(this);
  };

  var _3B_ = function () {
    var __captured__scope_O_ = __scope_0_main[23] || __get_scope_binding_0_get_95scope_95binding(23);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (inLink != null && outLink != null) {
      outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    __captured__scope_O_[5](__captured__scope_O_[3](_38_Expo.prototype), "delete", this).call(this);
  };

  var _5c_Pax = function (name) {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    _6e__95classCallCheck(this, _5c_Pax);

    return _7P__95possibleConstructorReturn(this, __captured__scope_P_[3](_5c_Pax).call(this, null, "?", name));
  };

  var _6P_ = function () {
    return new _5c_Pax(this.name);
  };

  var _6Q_ = function () {
    var __captured__scope_P_ = __scope_0_main[24] || __get_scope_binding_0_get_95scope_95binding(24);

    this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

    __captured__scope_P_[5](__captured__scope_P_[3](_5c_Pax.prototype), "delete", this).call(this);
  };

  var _7I__95typeof = function (obj) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_L_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_L_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_L_[1](obj);
  };

  var _4p__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6J__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    if (call && (__captured__scope_L_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7J__95assertThisInitialized(self);
  };

  var _7J__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6K__95getPrototypeOf = function (o) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    __captured__scope_L_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_L_[3](o);
  };

  var _2X_Contract = function (name) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    _4p__95classCallCheck(this, _2X_Contract);

    return _6J__95possibleConstructorReturn(this, __captured__scope_L_[3](_2X_Contract).call(this, null, "C", name));
  };

  var _3y_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.boxStack.push(link);
      token.rewriteFlag = _1B_RewriteFlag.F_C;
      return nextLink;
    } else if (link.from == this.key && token.boxStack.length > 0) {
      var nextLink = token.boxStack.pop();
      return nextLink;
    }
  };

  var _3z_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_C && nextLink.from == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;

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

        if (prev instanceof _2X_Contract) {
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
          token.rewriteFlag = _1B_RewriteFlag.F_C;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _40_ = function () {
    var con = new _2X_Contract(this.name);
    con.text = this.text;
    return con;
  };

  var _1q_Term = function (prin, auxs) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    var _this;

    _4N__95classCallCheck(this, _1q_Term);

    _this = _5e__95possibleConstructorReturn(this, __captured__scope_4_[3](_1q_Term).call(this));

    _this.set(prin, auxs);

    return _this;
  };

  var _3C_ = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _3D_ = function (auxs) {
    var newPaxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pax = _step.value;
        var newPax = new _5c_Pax(pax.name).addToGroup(this);
        if (pax.findLinksOutOf(null).length == 0) new _1j_Link(pax.key, newPax.key, "n", "s").addToGroup(this);else {
          var outLink = pax.findLinksOutOf(null)[0];
          new _1j_Link(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
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

  var _3E_ = function (leftAuxs, rightAuxs, group) {
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
              var con = new _2X_Contract(leftAux.name).addToGroup(group);
              var outLink = leftAux.findLinksOutOf(null)[0];

              if (typeof outLink != 'undefined') {
                outLink.changeFrom(con.key, outLink.fromPort);
              }

              new _1j_Link(rightAux.key, con.key, "n", "s").addToGroup(group);
              new _1j_Link(leftAux.key, con.key, "n", "s").addToGroup(group);
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

  var _6h__95typeof = function (obj) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_5_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_5_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_5_[1](obj);
  };

  var _4P__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5g__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (call && (__captured__scope_5_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6i__95assertThisInitialized(self);
  };

  var _6i__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5i__95get = function (target, property, receiver) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_5_[5] = Reflect.get;
    } else {
      __captured__scope_5_[5] = function _get(target, property, receiver) {
        var base = _7S__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_5_[5](target, property, receiver || target);
  };

  var _7S__95superPropBase = function (object, property) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_5_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _5h__95getPrototypeOf = function (o) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    __captured__scope_5_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5_[3](o);
  };

  var _7d__95typeof = function (obj) {
    var __captured__scope_Q_ = __scope_0_main[25] || __get_scope_binding_0_get_95scope_95binding(25);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_Q_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_Q_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_Q_[1](obj);
  };

  var _6j__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7T__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_Q_ = __scope_0_main[25] || __get_scope_binding_0_get_95scope_95binding(25);

    if (call && (__captured__scope_Q_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7e__95assertThisInitialized(self);
  };

  var _7e__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7U__95getPrototypeOf = function (o) {
    var __captured__scope_Q_ = __scope_0_main[25] || __get_scope_binding_0_get_95scope_95binding(25);

    __captured__scope_Q_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_Q_[3](o);
  };

  var _5j_Box = function () {
    var __captured__scope_Q_ = __scope_0_main[25] || __get_scope_binding_0_get_95scope_95binding(25);

    var _this;

    _6j__95classCallCheck(this, _5j_Box);

    _this = _7T__95possibleConstructorReturn(this, __captured__scope_Q_[3](_5j_Box).call(this));
    _this.nodes = [];
    _this.links = [];
    return _this;
  };

  var _6R_ = function (graph) {// this shouldnt be call, since every box should be inside a wrapper
  };

  var _7f__95typeof = function (obj) {
    var __captured__scope_R_ = __scope_0_main[26] || __get_scope_binding_0_get_95scope_95binding(26);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_R_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_R_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_R_[1](obj);
  };

  var _6w__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7V__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_R_ = __scope_0_main[26] || __get_scope_binding_0_get_95scope_95binding(26);

    if (call && (__captured__scope_R_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7g__95assertThisInitialized(self);
  };

  var _7g__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7W__95getPrototypeOf = function (o) {
    var __captured__scope_R_ = __scope_0_main[26] || __get_scope_binding_0_get_95scope_95binding(26);

    __captured__scope_R_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_R_[3](o);
  };

  var _6q__95typeof = function (obj) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_9_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_9_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_9_[1](obj);
  };

  var _4U__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5r__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (call && (__captured__scope_9_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6r__95assertThisInitialized(self);
  };

  var _6r__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5s__95getPrototypeOf = function (o) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    __captured__scope_9_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9_[3](o);
  };

  var _22_Der = function (name) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    _4U__95classCallCheck(this, _22_Der);

    return _5r__95possibleConstructorReturn(this, __captured__scope_9_[3](_22_Der).call(this, null, "D", name));
  };

  var _37_ = function () {
    var der = new _22_Der(this.name);
    return der;
  };

  var _5y_Promo = function () {
    var __captured__scope_R_ = __scope_0_main[26] || __get_scope_binding_0_get_95scope_95binding(26);

    _6w__95classCallCheck(this, _5y_Promo);

    return _7V__95possibleConstructorReturn(this, __captured__scope_R_[3](_5y_Promo).call(this, null, "!"));
  };

  var _6S_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.rewriteFlag = _1B_RewriteFlag.F_PROMO;
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _6T_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_PROMO) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

      if (prev instanceof _22_Der) {
        var oldGroup = this.group;
        oldGroup.moveOut(); // this.group is a box-wrapper

        oldGroup.deleteAndPreserveLink();
        var newNextLink = prev.findLinksInto(null)[0];
        prev.deleteAndPreserveInLink(); // preserve inLink

        token.rewrite = true;
        return newNextLink;
      } else if (prev instanceof _2X_Contract && token.boxStack.length >= 1) {
        if (nextLink.from == this.key) {
          var link = token.boxStack.pop();
          var inLinks = prev.findLinksInto(null);

          if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
          } else {
            var newBoxWrapper = this.group.copy().addToGroup(this.group.group);

            _1q_Term.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

            var prevLink = prev.findLinksOutOf(null)[0];
            prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
            link.changeTo(this.key, "s");
          }

          token.rewriteFlag = _1B_RewriteFlag.F_PROMO;
          token.rewrite = true;
          return nextLink;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _6U_ = function () {
    return new _5y_Promo();
  };

  var _1t_BoxWrapper = function (prin, box, auxs) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    var _this;

    _4P__95classCallCheck(this, _1t_BoxWrapper);

    _this = _5g__95possibleConstructorReturn(this, __captured__scope_5_[3](_1t_BoxWrapper).call(this, prin, auxs));
    _this.box = box;
    return _this;
  };

  var _3F_ = function (prin, box, auxs) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    __captured__scope_5_[5](__captured__scope_5_[3](_1t_BoxWrapper.prototype), "set", this).call(this, prin, auxs);

    this.box = box;
  };

  var _3G_ = function (aux) {
    this.auxs.splice(this.auxs.indexOf(aux), 1);
    aux.deleteAndPreserveOutLink();
  };

  var _3H_ = function () {
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

  var _3I_ = function (map) {
    var newBoxWrapper = new _1t_BoxWrapper();
    var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
    newBoxWrapper.prin = newPrin;
    map.set(this.prin.key, newPrin.key);
    var newBox = new _5j_Box().addToGroup(newBoxWrapper);
    newBoxWrapper.box = newBox;
    newBoxWrapper.auxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var newNode;

        if (node instanceof _1t_BoxWrapper) {
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
        var newLink = new _1j_Link(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
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
        var newLink = new _1j_Link(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
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

  var _3J_ = function () {
    var map = new Map();
    return this.copyBox(map);
  };

  var _3K_ = function () {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    this.box.delete();

    var _arr6 = Array.from(this.auxs);

    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var aux = _arr6[_i6];
      aux.delete();
    }

    this.prin.delete();

    __captured__scope_5_[5](__captured__scope_5_[3](_1t_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _3L_ = function () {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    this.box.delete();

    var _arr7 = Array.from(this.auxs);

    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var aux = _arr7[_i7];
      this.removeAux(aux); // preserve outLink
    }

    this.prin.deleteAndPreserveInLink(); //preserve inLink

    __captured__scope_5_[5](__captured__scope_5_[3](_1t_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _3M_ = function () {
    var wrapper = new _1t_BoxWrapper();
    var box = new _5j_Box().addToGroup(wrapper);
    var promo = new _5y_Promo().addToGroup(wrapper);
    wrapper.set(promo, box, []);
    return wrapper;
  };

  var _6k__95typeof = function (obj) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_6_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_6_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_6_[1](obj);
  };

  var _4Q__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5l__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (call && (__captured__scope_6_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6l__95assertThisInitialized(self);
  };

  var _6l__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5m__95getPrototypeOf = function (o) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    __captured__scope_6_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6_[3](o);
  };

  var _6o__95typeof = function (obj) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_8_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_8_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_8_[1](obj);
  };

  var _4T__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5p__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (call && (__captured__scope_8_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6p__95assertThisInitialized(self);
  };

  var _6p__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5q__95getPrototypeOf = function (o) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    __captured__scope_8_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8_[3](o);
  };

  var _20_App = function () {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    _4T__95classCallCheck(this, _20_App);

    return _5p__95possibleConstructorReturn(this, __captured__scope_8_[3](_20_App).call(this, null, "@", "yellow"));
  };

  var _3R_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.pop();
      token.dataStack.push(_1V_CompData.R);
      token.forward = true;
      return nextLink;
    }
  };

  var _3S_ = function () {
    return new _20_App();
  };

  var _1v_Abs = function () {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    _4Q__95classCallCheck(this, _1v_Abs);

    return _5l__95possibleConstructorReturn(this, __captured__scope_6_[3](_1v_Abs).call(this, null, "λ", "yellow"));
  };

  var _3N_ = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var data = token.dataStack[token.dataStack.length - 1];

      if (data == _1V_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push([_1V_CompData.LAMBDA, _1V_CompData.EMPTY]);
        token.forward = false;
        return link;
      } else if (data == _1V_CompData.R) {
        var nextLink = this.findLinksOutOf(null)[0];
        token.dataStack.pop();
        token.rewriteFlag = _1B_RewriteFlag.F_LAMBDA;
        return nextLink;
      }
    }
  };

  var _3O_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_LAMBDA && nextLink.from == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _20_App) {
        // M rule
        var appLink = prev.findLinksInto(null)[0];
        var appOtherLink = prev.findLinksOutOf("e")[0];
        var otherNextLink = this.findLinksInto("w")[0];
        nextLink.changeFrom(appLink.from, appLink.fromPort);
        nextLink.changeToGroup(appLink.group);
        otherNextLink.changeTo(appOtherLink.to, appOtherLink.toPort);
        otherNextLink.reverse = false;
        var otherNode = this.graph.findNodeByKey(otherNextLink.from);
        if (otherNode instanceof _38_Expo) otherNextLink.fromPort = "n";
        otherNextLink.changeToGroup(appOtherLink.group);
        this.delete();
        prev.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3P_ = function () {
    return new _1v_Abs();
  };

  var _6x__95typeof = function (obj) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_C_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_C_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_C_[1](obj);
  };

  var _4Y__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _60__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (call && (__captured__scope_C_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6y__95assertThisInitialized(self);
  };

  var _6y__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _61__95getPrototypeOf = function (o) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    __captured__scope_C_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C_[3](o);
  };

  var _6s__95typeof = function (obj) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_A_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_A_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_A_[1](obj);
  };

  var _4W__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5t__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (call && (__captured__scope_A_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6t__95assertThisInitialized(self);
  };

  var _6t__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5u__95getPrototypeOf = function (o) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    __captured__scope_A_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A_[3](o);
  };

  var _24_Const = function (name) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    _4W__95classCallCheck(this, _24_Const);

    return _5t__95possibleConstructorReturn(this, __captured__scope_A_[3](_24_Const).call(this, null, name, "mediumpurple1", name));
  };

  var _3T_ = function (token, link) {
    if (token.dataStack[token.dataStack.length - 1] == _1V_CompData.PROMPT) {
      token.dataStack.pop();
      token.dataStack.push([this.name, _1V_CompData.EMPTY]);
      token.forward = false;
      return link;
    }
  };

  var _3U_ = function () {
    return new _24_Const(this.name);
  };

  var _2A_BinOp = function (text) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    var _this;

    _4Y__95classCallCheck(this, _2A_BinOp);

    _this = _60__95possibleConstructorReturn(this, __captured__scope_C_[3](_2A_BinOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3W_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      token.forward = true;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _1V_CompData.PROMPT) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        var result = this.binOpApply(this.subType, l[0], r[0]);
        token.dataStack.push([result, _1V_CompData.EMPTY]);
        token.rewriteFlag = _1B_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
        ;
      }
    }
  };

  var _3X_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
      var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

      if (left instanceof _5y_Promo && right instanceof _5y_Promo) {
        var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _24_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _1j_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        left.group.delete();
        right.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3Y_ = function (type, v1, v2) {
    switch (type) {
      case _4A_BinOpType.And:
        return v1 && v2;

      case _4A_BinOpType.Or:
        return v1 || v2;

      case _4A_BinOpType.Plus:
        return parseFloat(v1) + parseFloat(v2);

      case _4A_BinOpType.Sub:
        return parseFloat(v1) - parseFloat(v2);

      case _4A_BinOpType.Mult:
        return parseFloat(v1) * parseFloat(v2);

      case _4A_BinOpType.Div:
        return parseFloat(v1) / parseFloat(v2);

      case _4A_BinOpType.Lte:
        return parseFloat(v1) <= parseFloat(v2);
    }
  };

  var _3Z_ = function () {
    var newNode = new _2A_BinOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _3a_ = function () {
    var node = new _2A_BinOp("+");
    node.subType = _4A_BinOpType.Plus;
    return node;
  };

  var _3b_ = function () {
    var node = new _2A_BinOp("*");
    node.subType = _4A_BinOpType.Mult;
    return node;
  };

  var _6c__95typeof = function (obj) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_3_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_3_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_3_[1](obj);
  };

  var _4M__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5a__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (call && (__captured__scope_3_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6d__95assertThisInitialized(self);
  };

  var _6d__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5b__95getPrototypeOf = function (o) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    __captured__scope_3_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3_[3](o);
  };

  var _1m_Var = function (name) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    var _this;

    _4M__95classCallCheck(this, _1m_Var);

    _this = _5a__95possibleConstructorReturn(this, __captured__scope_3_[3](_1m_Var).call(this, name));
    _this.text = "V";
    return _this;
  };

  var _36_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];
    var inNode = this.graph.findNodeByKey(inLink.from);

    if (inLink != null && outLink != null) {
      if (this.graph.findNodeByKey(outLink.to) instanceof _1v_Abs && inNode instanceof _38_Expo) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    this.delete();
  };

  var _73__95typeof = function (obj) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_F_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_F_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_F_[1](obj);
  };

  var _4e__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _66__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (call && (__captured__scope_F_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _74__95assertThisInitialized(self);
  };

  var _74__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _67__95getPrototypeOf = function (o) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    __captured__scope_F_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F_[3](o);
  };

  var _6m__95typeof = function (obj) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_7_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_7_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_7_[1](obj);
  };

  var _4R__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5n__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (call && (__captured__scope_7_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6n__95assertThisInitialized(self);
  };

  var _6n__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5o__95getPrototypeOf = function (o) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    __captured__scope_7_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7_[3](o);
  };

  var _1x_Weak = function () {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    _4R__95classCallCheck(this, _1x_Weak);

    return _5n__95possibleConstructorReturn(this, __captured__scope_7_[3](_1x_Weak).call(this, null, 'C0'));
  };

  var _3Q_ = function () {
    return new _1x_Weak();
  };

  var _2G_If = function () {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    _4e__95classCallCheck(this, _2G_If);

    return _66__95possibleConstructorReturn(this, __captured__scope_F_[3](_2G_If).call(this, null, "if", "mediumpurple1"));
  };

  var _3g_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _5y_Promo) {
        if (token.dataStack[token.dataStack.length - 1][0] == true) {
          var nextLink = this.findLinksOutOf("n")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1B_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        } else if (token.dataStack[token.dataStack.length - 1][0] == false) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.pop();
          token.rewriteFlag = _1B_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        }
      } else {
        var nextLink = this.findLinksOutOf("n")[0];
        var data = token.dataStack.pop();
        token.dataStack.push(data[0]);
        token.dataStack.push(_1V_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      }
    } else if (link.from == this.key) {
      if (link.fromPort == "n") {
        var nextLink = this.findLinksOutOf("e")[0];
        token.dataStack.push(_1V_CompData.PROMPT);
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

  var _3h_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_IF && nextLink.from == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _5y_Promo) {
        var downLink = this.findLinksInto(null)[0];
        var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
        nextLink.changeFrom(downLink.from, downLink.fromPort);
        var weak = new _1x_Weak(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
        otherLink.changeFrom(weak.key, "n");
        this.delete();
        left.group.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3i_ = function () {
    return new _2G_If();
  };

  var _75__95typeof = function (obj) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_G_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_G_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_G_[1](obj);
  };

  var _4g__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _68__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (call && (__captured__scope_G_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _76__95assertThisInitialized(self);
  };

  var _76__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _69__95getPrototypeOf = function (o) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    __captured__scope_G_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G_[3](o);
  };

  var _2J_Recur = function () {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    _4g__95classCallCheck(this, _2J_Recur);

    return _68__95possibleConstructorReturn(this, __captured__scope_G_[3](_2J_Recur).call(this, null, "μ", "mediumpurple1"));
  };

  var _3j_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.rewriteFlag = _1B_RewriteFlag.F_RECUR;
      return nextLink;
    }
  };

  var _3k_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_RECUR && nextLink.from == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var wrapper = this.group.copy().addToGroup(this.group);

      _1q_Term.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);

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
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3l_ = function () {
    return new _2J_Recur();
  };

  var _6Y__95typeof = function (obj) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_2_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_2_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_2_[1](obj);
  };

  var _4J__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _5U__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (call && (__captured__scope_2_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _6Z__95assertThisInitialized(self);
  };

  var _6Z__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _5V__95getPrototypeOf = function (o) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2_[3](o);
  };

  var _1h_Start = function () {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    _4J__95classCallCheck(this, _1h_Start);

    return _5U__95possibleConstructorReturn(this, __captured__scope_2_[3](_1h_Start).call(this, "point", "", "black"));
  };

  var _2u_ = function (token) {
    if (token.link == null && token.dataStack[token.dataStack.length - 1] == _1V_CompData.PROMPT) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.forward = true;
      return nextLink;
    } else return null;
  };

  var _2v_ = function () {
    return new _1h_Start();
  };

  var _71__95typeof = function (obj) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_E_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_E_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_E_[1](obj);
  };

  var _4c__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _64__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (call && (__captured__scope_E_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _72__95assertThisInitialized(self);
  };

  var _72__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _65__95getPrototypeOf = function (o) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    __captured__scope_E_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E_[3](o);
  };

  var _2D_UnOp = function (text) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    var _this;

    _4c__95classCallCheck(this, _2D_UnOp);

    _this = _64__95possibleConstructorReturn(this, __captured__scope_E_[3](_2D_UnOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _3c_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1V_CompData.PROMPT) {
        var v1 = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([this.unOpApply(this.subType, v1[0]), _1V_CompData.EMPTY]);
        token.rewriteFlag = _1B_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _3d_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

      if (prev instanceof _5y_Promo) {
        var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _24_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _1j_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        prev.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3e_ = function (type, v1) {
    switch (type) {
      case _4a_UnOpType.Not:
        return !v1;
    }
  };

  var _3f_ = function () {
    var newNode = new _2D_UnOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _7G__95typeof = function (obj) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_K_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_K_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_K_[1](obj);
  };

  var _4o__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6H__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (call && (__captured__scope_K_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7H__95assertThisInitialized(self);
  };

  var _7H__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6I__95getPrototypeOf = function (o) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    __captured__scope_K_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_K_[3](o);
  };

  var _2V_Delta = function () {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    _4o__95classCallCheck(this, _2V_Delta);

    return _6H__95possibleConstructorReturn(this, __captured__scope_K_[3](_2V_Delta).call(this, null, "Δ", "indianred1"));
  };

  var _3v_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.pop();
        token.dataStack.push(_1V_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 2] == _1V_CompData.PROMPT) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1V_CompData.UNIT, _1V_CompData.EMPTY]);
          token.rewriteFlag = _1B_RewriteFlag.F_DELTA + data[1];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _3w_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1B_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _1x_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1x_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");

      var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

      var con = new _24_Const(data[0]).addToGroup(wrapper.box);
      new _1j_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3x_ = function () {
    return new _2V_Delta();
  };

  var _7K__95typeof = function (obj) {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_M_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_M_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_M_[1](obj);
  };

  var _4r__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6L__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    if (call && (__captured__scope_M_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7L__95assertThisInitialized(self);
  };

  var _7L__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6M__95getPrototypeOf = function (o) {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    __captured__scope_M_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_M_[3](o);
  };

  var _2a_Set = function () {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    _4r__95classCallCheck(this, _2a_Set);

    return _6L__95possibleConstructorReturn(this, __captured__scope_M_[3](_2a_Set).call(this, null, "<<~", "indianred1"));
  };

  var _41_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

        token.dataStack.push(_1V_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 3] == _1V_CompData.PROMPT) {
          var data = token.dataStack.pop();
          var new_v = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_1V_CompData.UNIT, _1V_CompData.EMPTY]);
          token.rewriteFlag = _1B_RewriteFlag.F_DELTA + data[1] + ';' + new_v[0];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _42_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _1B_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      var s = string.split(";");
      var key = s[0];
      var data = s[1];
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _1x_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _1x_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
      this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];

      var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

      var con = new _24_Const(data[0]).addToGroup(wrapper.box);
      new _1j_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _43_ = function () {
    return new _2a_Set();
  };

  var _7C__95typeof = function (obj) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_I_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_I_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_I_[1](obj);
  };

  var _4k__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6D__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (call && (__captured__scope_I_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7D__95assertThisInitialized(self);
  };

  var _7D__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6E__95getPrototypeOf = function (o) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    __captured__scope_I_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_I_[3](o);
  };

  var _2P_Dep = function () {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    _4k__95classCallCheck(this, _2P_Dep);

    return _6D__95possibleConstructorReturn(this, __captured__scope_I_[3](_2P_Dep).call(this, null, 'p', "mediumpurple1"));
  };

  var _3q_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _1V_CompData.PROMPT) {
        var data = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([data[0], _1V_CompData.EMPTY]);
        token.rewriteFlag = _1B_RewriteFlag.F_DEP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _3r_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1B_RewriteFlag.F_DEP) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];

      if (_1A_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var outLink = this.findLinksOutOf(null)[0];
        var weak = new _1x_Weak(outLink.text).addToGroup(this.group);
        outLink.changeFrom(weak.key, "n");

        var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _24_Const(data[0]).addToGroup(wrapper.box);
        new _1j_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        this.delete();
        token.rewrite = true;
      }

      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3s_ = function () {
    return new _2P_Dep();
  };

  var _7E__95typeof = function (obj) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_J_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_J_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_J_[1](obj);
  };

  var _4m__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6F__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (call && (__captured__scope_J_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7F__95assertThisInitialized(self);
  };

  var _7F__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6G__95getPrototypeOf = function (o) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    __captured__scope_J_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_J_[3](o);
  };

  var _2S_Deref = function () {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    _4m__95classCallCheck(this, _2S_Deref);

    return _6F__95possibleConstructorReturn(this, __captured__scope_J_[3](_2S_Deref).call(this, null, "d", "mediumpurple1"));
  };

  var _3t_ = function (token, link) {
    if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
  };

  var _3u_ = function () {
    return new _2S_Deref();
  };

  var _7i__95typeof = function (obj) {
    var __captured__scope_S_ = __scope_0_main[27] || __get_scope_binding_0_get_95scope_95binding(27);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_S_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_S_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_S_[1](obj);
  };

  var _7X__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _7Z__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_S_ = __scope_0_main[27] || __get_scope_binding_0_get_95scope_95binding(27);

    if (call && (__captured__scope_S_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7j__95assertThisInitialized(self);
  };

  var _7j__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _7a__95getPrototypeOf = function (o) {
    var __captured__scope_S_ = __scope_0_main[27] || __get_scope_binding_0_get_95scope_95binding(27);

    __captured__scope_S_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_S_[3](o);
  };

  var _6V_Mod = function () {
    var __captured__scope_S_ = __scope_0_main[27] || __get_scope_binding_0_get_95scope_95binding(27);

    var _this;

    _7X__95classCallCheck(this, _6V_Mod);

    _this = _7Z__95possibleConstructorReturn(this, __captured__scope_S_[3](_6V_Mod).call(this, null, "M", "indianred1"));

    _this.graph.machine.cells.push(_this.key);

    return _this;
  };

  var _77_ = function (token, link) {
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

  var _78_ = function (data) {
    var leftLink = this.findLinksOutOf("w")[0];

    if (_1A_.isNumber(data) || typeof data === "boolean") {
      var value = this.graph.findNodeByKey(leftLink.to);
      var oldData = value.name;
      value.text = data;
      value.name = data;
      return oldData;
    }
  };

  var _79_ = function () {
    var mod = new _6V_Mod();
    return mod;
  };

  var _7M__95typeof = function (obj) {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_N_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_N_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_N_[1](obj);
  };

  var _4t__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6N__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    if (call && (__captured__scope_N_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7N__95assertThisInitialized(self);
  };

  var _7N__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6O__95getPrototypeOf = function (o) {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    __captured__scope_N_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_N_[3](o);
  };

  var _2d_Prop = function () {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    _4t__95classCallCheck(this, _2d_Prop);

    return _6N__95possibleConstructorReturn(this, __captured__scope_N_[3](_2d_Prop).call(this, null, "s", "indianred1"));
  };

  var _44_ = function (token, link) {
    if (link.to == this.key) {
      if (token.dataStack[token.dataStack.length - 1] == _1V_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push(false);
        token.rewriteFlag = _1B_RewriteFlag.F_PROP;
        token.forward = false;
        token.machine.startPropagation();
        return link;
      }
    }
  };

  var _45_ = function (token, nextLink) {
    if (token.rewriteFlag == _1B_RewriteFlag.F_PROP && nextLink.to == this.key) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var data = token.machine.hasUpdate;
      token.dataStack.pop();
      token.dataStack.push([data, _1V_CompData.EMPTY]);

      var wrapper = _1t_BoxWrapper.create().addToGroup(this.group);

      var con = new _24_Const(data).addToGroup(wrapper.box);
      new _1j_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      nextLink.changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _46_ = function () {
    return new _2d_Prop();
  };

  var _7A__95typeof = function (obj) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      __captured__scope_H_[1] = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      __captured__scope_H_[1] = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return __captured__scope_H_[1](obj);
  };

  var _4i__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _6A__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (call && (__captured__scope_H_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _7B__95assertThisInitialized(self);
  };

  var _7B__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _6C__95get = function (target, property, receiver) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_H_[5] = Reflect.get;
    } else {
      __captured__scope_H_[5] = function _get(target, property, receiver) {
        var base = _7Y__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_H_[5](target, property, receiver || target);
  };

  var _7Y__95superPropBase = function (object, property) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_H_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _6B__95getPrototypeOf = function (o) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    __captured__scope_H_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_H_[3](o);
  };

  var _2M_Prov = function () {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    var _this;

    _4i__95classCallCheck(this, _2M_Prov);

    _this = _6A__95possibleConstructorReturn(this, __captured__scope_H_[3](_2M_Prov).call(this, 'diamond', '', "indianred1"));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _3m_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_1V_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      var data = token.dataStack.pop();
      token.dataStack.pop();
      token.dataStack.push(data);
      token.rewriteFlag = _1B_RewriteFlag.F_MOD;
      return this.findLinksInto(null)[0];
    }
  };

  var _3n_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _1B_RewriteFlag.F_MOD) {
      token.rewriteFlag = _1B_RewriteFlag.EMPTY;
      var data = token.dataStack.pop();

      if (_1A_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var mod = new _6V_Mod().addToGroup(this.group);
        var con = new _24_Const(data[0]).addToGroup(this.group);
        new _1j_Link(mod.key, con.key, "w", "s").addToGroup(this.group);
        var outLink = this.findLinksOutOf(null)[0];
        outLink.changeFrom(mod.key, "e");
        var inLink = this.findLinksInto(null)[0];
        inLink.changeTo(mod.key, "s");
        this.delete();
        token.rewrite = true;
        token.dataStack.push([data[0], mod.key]);
      }

      return nextLink;
    } else if (token.rewriteFlag == _1B_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _3o_ = function () {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_H_[5](__captured__scope_H_[3](_2M_Prov.prototype), "delete", this).call(this);
  };

  var _3p_ = function () {
    return new _2M_Prov();
  };

  var _19_GoIMachine = function () {
    _2f__95classCallCheck(this, _19_GoIMachine);

    this.graph = new _p_Graph(this);
    _1A_.mainGraph = this.graph; // cheating!

    this.token = new _t_MachineToken(this);
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

  var _Q_ = _19_GoIMachine.prototype;

  var _u_ = function () {
    return this.playing;
  };

  var _v_ = function (playValue) {
    this.play = playValue;
  };

  var _w_ = function () {
    return this.playing;
  };

  var _x_ = function (playingValue) {
    this.playing = playingValue;
  };

  var _y_ = function () {
    return this.finished;
  };

  var _z_ = function (finishedValue) {
    this.finished = finishedValue;
  };

  var _10_ = function (source) {
    var lexer = new _1d_Lexer(source + '\0');
    var parser = new _1f_Parser(lexer);
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

    var start = new _1h_Start().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    new _1j_Link(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
    this.deleteVarNode(this.graph.child);
  };

  var _11_ = function (ast, group) {
    var graph = this.graph;

    if (ast instanceof _1l_Identifier) {
      var v = new _1m_Var(ast.name).addToGroup(group);
      return new _1q_Term(v, [v]);
    } else if (ast instanceof _1s_Abstraction) {
      var param = ast.param;

      var wrapper = _1t_BoxWrapper.create().addToGroup(group);

      var abs = new _1v_Abs().addToGroup(wrapper.box);
      var term = this.toGraph(ast.body, wrapper.box);
      new _1j_Link(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
      new _1j_Link(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
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
        auxNode = new _1x_Weak(param).addToGroup(abs.group);
      }

      new _1j_Link(auxNode.key, abs.key, "nw", "w", true).addToGroup(abs.group);
      wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
      return new _1q_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _1z_Application) {
      var app = new _20_App().addToGroup(group); //lhs

      var left = this.toGraph(ast.lhs, group);
      var der = new _22_Der(left.prin.name).addToGroup(group);
      new _1j_Link(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

      var right = this.toGraph(ast.rhs, group);
      new _1j_Link(app.key, der.key, "w", "s").addToGroup(group);
      new _1j_Link(app.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1q_Term(app, _1q_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _23_Constant) {
      var wrapper = _1t_BoxWrapper.create().addToGroup(group);

      var constant = new _24_Const(ast.value).addToGroup(wrapper.box);
      new _1j_Link(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
      return new _1q_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _26_BinaryOp) {
      var binop = new _2A_BinOp(ast.name).addToGroup(group);
      binop.subType = ast.type;
      var left = this.toGraph(ast.v1, group);
      var right = this.toGraph(ast.v2, group);
      new _1j_Link(binop.key, left.prin.key, "w", "s").addToGroup(group);
      new _1j_Link(binop.key, right.prin.key, "e", "s").addToGroup(group);
      return new _1q_Term(binop, _1q_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _2C_UnaryOp) {
      var unop = new _2D_UnOp(ast.name).addToGroup(group);
      unop.subType = ast.type;
      var box = this.toGraph(ast.v1, group);
      new _1j_Link(unop.key, box.prin.key, "n", "s").addToGroup(group);
      return new _1q_Term(unop, box.auxs);
    } else if (ast instanceof _2F_IfThenElse) {
      var ifnode = new _2G_If().addToGroup(group);
      var cond = this.toGraph(ast.cond, group);
      var t1 = this.toGraph(ast.t1, group);
      var t2 = this.toGraph(ast.t2, group);
      new _1j_Link(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
      new _1j_Link(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
      new _1j_Link(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
      return new _1q_Term(ifnode, _1q_Term.joinAuxs(_1q_Term.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
    } else if (ast instanceof _2I_Recursion) {
      var p1 = ast.param; // recur term

      var wrapper = _1t_BoxWrapper.create().addToGroup(group);

      wrapper.prin.delete();
      var recur = new _2J_Recur().addToGroup(wrapper);
      wrapper.prin = recur;
      var box = this.toGraph(ast.body, wrapper.box);
      wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
      new _1j_Link(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
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
        auxNode1 = new _1x_Weak(p1).addToGroup(wrapper.box);
      }

      new _1j_Link(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
      return new _1q_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _2L_ProvisionalConstant) {
      var term = this.toGraph(ast.term, group);
      var prov = new _2M_Prov().addToGroup(group);
      new _1j_Link(prov.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1q_Term(prov, term.auxs);
    } else if (ast instanceof _2O_Deprecation) {
      var term = this.toGraph(ast.term, group);
      var dep = new _2P_Dep().addToGroup(group);
      new _1j_Link(dep.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1q_Term(dep, term.auxs);
    } else if (ast instanceof _2R_Dereference) {
      var term = this.toGraph(ast.term, group);
      var deref = new _2S_Deref().addToGroup(group);
      new _1j_Link(deref.key, term.prin.key, "n", "s").addToGroup(group);
      return new _1q_Term(deref, term.auxs);
    } else if (ast instanceof _2U_Change) {
      var param = ast.param;
      var delta = new _2V_Delta().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1m_Var(param).addToGroup(group);
      new _1j_Link(delta.key, v.key, "w", "s").addToGroup(group);
      new _1j_Link(delta.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _2X_Contract(aux.name).addToGroup(group);
          new _1j_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _1j_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1q_Term(delta, auxs);
    } else if (ast instanceof _2Z_Assign) {
      var param = ast.param;
      var setn = new _2a_Set().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _1m_Var(param).addToGroup(group);
      new _1j_Link(setn.key, v.key, "w", "s").addToGroup(group);
      new _1j_Link(setn.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _2X_Contract(aux.name).addToGroup(group);
          new _1j_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _1j_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _1q_Term(setn, auxs);
    } else if (ast instanceof _2c_Propagation) {
      var prop = new _2d_Prop().addToGroup(group);
      return new _1q_Term(prop, []);
    }
  };

  var _12_ = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node instanceof _S_Group) this.deleteVarNode(node);else if (node instanceof _1m_Var) node.deleteAndPreserveOutLink();
    }
  };

  var _13_ = function () {
    this.evaluating = true;
    this.hasUpdate = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var cell = this.graph.findNodeByKey(key);
        var evalToken = new _t_MachineToken(this);
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

  var _14_ = function (a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  var _15_ = function (tokens) {
    var arr_2 = Array.from(tokens); // all progress 1 step

    for (var i = 0; i < arr_2.length; i++) {
      var token = arr_2[i];
      this.tokenPass(token);
    }
  };

  var _16_ = function () {
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

  var _17_ = function (token) {
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

  var _18_ = function (token) {
    return token.dataStack.length == 0 ? '□' : Array.from(token.dataStack).reverse().toString() + ',□';
  };

  var __constructor = function () {};

  var _1Q_ = _$2_Object_46getPrototypeOf;

  var _1_ = (__constructor.prototype = _D_, new __constructor());

  _1_.key = 0;
  _1_.linkKey = 0;

  var _4_ = new _$3_Map();

  _1_.allNodes = _4_;
  var _5_ = [];
  _1_.allLinks = _5_;
  var _1A_ = {
    isNumber: _1T_isNumber,
    graph: null,
    mainGraph: _1_
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Y_, _$4_Object_46defineProperty(_C_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Z_, _$4_Object_46defineProperty(_C_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _a_, _$4_Object_46defineProperty(_C_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _b_, _$4_Object_46defineProperty(_C_, "findLinksConnected", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _c_, _$4_Object_46defineProperty(_C_, "findLinksInto", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _d_, _$4_Object_46defineProperty(_C_, "findLinksOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _e_, _$4_Object_46defineProperty(_C_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _f_, _$4_Object_46defineProperty(_C_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _g_, _$4_Object_46defineProperty(_C_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _h_, _$4_Object_46defineProperty(_C_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _B_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _S_Group, _$4_Object_46defineProperty(_B_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _T_, _$4_Object_46defineProperty(_B_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U_, _$4_Object_46defineProperty(_B_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V_, _$4_Object_46defineProperty(_B_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W_, _$4_Object_46defineProperty(_B_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _X_, _$4_Object_46defineProperty(_B_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6_ = (__constructor.prototype = _B_, new __constructor());

  _6_.key = null;
  _6_.shape = null;
  _6_.text = null;
  _6_.colour = null;
  _6_.name = void 0;
  _6_.graph = void 0;
  _6_.group = null;
  _6_.width = null;
  _6_.height = null;
  var _9_ = [];
  _6_.links = _9_;
  var _A_ = [];
  _6_.nodes = _A_;
  _1_.child = _6_;
  _S_Group.prototype = _B_;

  _$5_Object_46setPrototypeOf(_S_Group, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _j_, _$4_Object_46defineProperty(_D_, "clear", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _k_, _$4_Object_46defineProperty(_D_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _l_, _$4_Object_46defineProperty(_D_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _m_, _$4_Object_46defineProperty(_D_, "findNodeByKey", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _n_, _$4_Object_46defineProperty(_D_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _o_, _$4_Object_46defineProperty(_D_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _1V_CompData = {
    EMPTY: "-",
    PROMPT: "*",
    LAMBDA: "\u03BB",
    R: "@",
    UNIT: "\u2022",
    IF0: "if0",
    IF1: "if1"
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1M_, _$4_Object_46defineProperty(_t_MachineToken, "CompData", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _1B_RewriteFlag = {
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
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1N_, _$4_Object_46defineProperty(_t_MachineToken, "RewriteFlag", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _q_, _$4_Object_46defineProperty(_L_, "setLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _r_, _$4_Object_46defineProperty(_L_, "reset", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _s_, _$4_Object_46defineProperty(_L_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _u_, _$4_Object_46defineProperty(_Q_, "isPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _v_, _$4_Object_46defineProperty(_Q_, "setPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _w_, _$4_Object_46defineProperty(_Q_, "isPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _x_, _$4_Object_46defineProperty(_Q_, "setPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _y_, _$4_Object_46defineProperty(_Q_, "isFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _z_, _$4_Object_46defineProperty(_Q_, "setFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2g_, _$4_Object_46defineProperty(_1e_, "_nextChar", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _4v_Token.EOF = "EOF";
  _4v_Token.LAMBDA = "LAMBDA";
  _4v_Token.LPAREN = "LPAREN";
  _4v_Token.RPAREN = "RPAREN";
  _4v_Token.CLPAREN = "CLPAREN";
  _4v_Token.CRPAREN = "CRPAREN";
  _4v_Token.LCID = "LCID";
  _4v_Token.DOT = "DOT";
  _4v_Token.COMMA = "COMMA";
  _4v_Token.APP = "APP";
  _4v_Token.LET = "LET";
  _4v_Token.DEFINE = "DEFINE";
  _4v_Token.IN = "IN";
  _4v_Token.REC = "REC";
  _4v_Token.INT = "INT";
  _4v_Token.TRUE = "TRUE";
  _4v_Token.FALSE = "FALSE";
  _4v_Token.NOT = "NOT";
  _4v_Token.AND = "AND";
  _4v_Token.OR = "OR";
  _4v_Token.PLUS = "PLUS";
  _4v_Token.SUB = "SUB";
  _4v_Token.MULT = "MULT";
  _4v_Token.DIV = "DIV";
  _4v_Token.LTE = "LTE";
  _4v_Token.IF = "IF";
  _4v_Token.THEN = "THEN";
  _4v_Token.ELSE = "ELSE";
  _4v_Token.SET = "SET";
  _4v_Token.CHANGE = "CHANGE";
  _4v_Token.TO = "TO";
  _4v_Token.PROP = "PROP";
  _4v_Token.DEP = "DEP";
  _4v_Token.DEREF = "DEREF";
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2h_, _$4_Object_46defineProperty(_1e_, "_nextToken", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2i_, _$4_Object_46defineProperty(_1e_, "token", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2j_, _$4_Object_46defineProperty(_1e_, "lookahead", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2k_, _$4_Object_46defineProperty(_1e_, "fail", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2l_, _$4_Object_46defineProperty(_1e_, "next", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2m_, _$4_Object_46defineProperty(_1e_, "match", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2n_, _$4_Object_46defineProperty(_1e_, "skip", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2o_, _$4_Object_46defineProperty(_1g_, "parse", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2p_, _$4_Object_46defineProperty(_1g_, "term", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2q_, _$4_Object_46defineProperty(_1g_, "isBinaryOp", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _28_ = (__constructor.prototype = _29_, new __constructor());

  _2C_UnaryOp.prototype = _28_;

  _$5_Object_46setPrototypeOf(_2C_UnaryOp, _3V_Operation);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2C_UnaryOp, _$4_Object_46defineProperty(_28_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _27_ = (__constructor.prototype = _28_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _26_BinaryOp, _$4_Object_46defineProperty(_27_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _26_BinaryOp.prototype = _27_;

  _$5_Object_46setPrototypeOf(_26_BinaryOp, _2C_UnaryOp);

  var _4A_BinOpType = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2r_, _$4_Object_46defineProperty(_1g_, "parseBinop", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2s_, _$4_Object_46defineProperty(_1g_, "application", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _4a_UnOpType = {
    Not: 0
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2t_, _$4_Object_46defineProperty(_1g_, "atom", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1i_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1h_Start, _$4_Object_46defineProperty(_1i_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2u_, _$4_Object_46defineProperty(_1i_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2v_, _$4_Object_46defineProperty(_1i_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1h_Start.prototype = _1i_;

  _$5_Object_46setPrototypeOf(_1h_Start, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2w_, _$4_Object_46defineProperty(_1k_, "addToNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2x_, _$4_Object_46defineProperty(_1k_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2y_, _$4_Object_46defineProperty(_1k_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2z_, _$4_Object_46defineProperty(_1k_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _30_, _$4_Object_46defineProperty(_1k_, "changeFrom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _31_, _$4_Object_46defineProperty(_1k_, "changeTo", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _32_, _$4_Object_46defineProperty(_1k_, "focus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _33_, _$4_Object_46defineProperty(_1k_, "clearFocus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _34_, _$4_Object_46defineProperty(_1k_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _35_, _$4_Object_46defineProperty(_1k_, "toString", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _10_, _$4_Object_46defineProperty(_Q_, "compile", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1p_ = (__constructor.prototype = _C_, new __constructor());

  _38_Expo.prototype = _1p_;

  _$5_Object_46setPrototypeOf(_38_Expo, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _38_Expo, _$4_Object_46defineProperty(_1p_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _39_, _$4_Object_46defineProperty(_1p_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3A_, _$4_Object_46defineProperty(_1p_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3B_, _$4_Object_46defineProperty(_1p_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1o_ = (__constructor.prototype = _1p_, new __constructor());

  _22_Der.prototype = _1o_;

  _$5_Object_46setPrototypeOf(_22_Der, _38_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _22_Der, _$4_Object_46defineProperty(_1o_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _37_, _$4_Object_46defineProperty(_1o_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1n_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1m_Var, _$4_Object_46defineProperty(_1n_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1w_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1v_Abs, _$4_Object_46defineProperty(_1w_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3N_, _$4_Object_46defineProperty(_1w_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _21_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _20_App, _$4_Object_46defineProperty(_21_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3R_, _$4_Object_46defineProperty(_21_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3S_, _$4_Object_46defineProperty(_21_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _20_App.prototype = _21_;

  _$5_Object_46setPrototypeOf(_20_App, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3O_, _$4_Object_46defineProperty(_1w_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3P_, _$4_Object_46defineProperty(_1w_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1v_Abs.prototype = _1w_;

  _$5_Object_46setPrototypeOf(_1v_Abs, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _36_, _$4_Object_46defineProperty(_1n_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1m_Var.prototype = _1n_;

  _$5_Object_46setPrototypeOf(_1m_Var, _22_Der);

  var _1r_ = (__constructor.prototype = _B_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1q_Term, _$4_Object_46defineProperty(_1r_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3C_, _$4_Object_46defineProperty(_1r_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5d_ = (__constructor.prototype = _1p_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _5c_Pax, _$4_Object_46defineProperty(_5d_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6P_, _$4_Object_46defineProperty(_5d_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6Q_, _$4_Object_46defineProperty(_5d_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _5c_Pax.prototype = _5d_;

  _$5_Object_46setPrototypeOf(_5c_Pax, _38_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3D_, _$4_Object_46defineProperty(_1r_, "createPaxsOnTopOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1q_Term.prototype = _1r_;

  var _2Y_ = (__constructor.prototype = _1p_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2X_Contract, _$4_Object_46defineProperty(_2Y_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3y_, _$4_Object_46defineProperty(_2Y_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3z_, _$4_Object_46defineProperty(_2Y_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _40_, _$4_Object_46defineProperty(_2Y_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2X_Contract.prototype = _2Y_;

  _$5_Object_46setPrototypeOf(_2X_Contract, _38_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3E_, _$4_Object_46defineProperty(_1q_Term, "joinAuxs", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_1q_Term, _S_Group);

  var _1u_ = (__constructor.prototype = _1r_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1t_BoxWrapper, _$4_Object_46defineProperty(_1u_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3F_, _$4_Object_46defineProperty(_1u_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3G_, _$4_Object_46defineProperty(_1u_, "removeAux", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3H_, _$4_Object_46defineProperty(_1u_, "moveOut", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5k_ = (__constructor.prototype = _B_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _5j_Box, _$4_Object_46defineProperty(_5k_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6R_, _$4_Object_46defineProperty(_5k_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _5j_Box.prototype = _5k_;

  _$5_Object_46setPrototypeOf(_5j_Box, _S_Group);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3I_, _$4_Object_46defineProperty(_1u_, "copyBox", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3J_, _$4_Object_46defineProperty(_1u_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3K_, _$4_Object_46defineProperty(_1u_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3L_, _$4_Object_46defineProperty(_1u_, "deleteAndPreserveLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1t_BoxWrapper.prototype = _1u_;

  var _5z_ = (__constructor.prototype = _1p_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _5y_Promo, _$4_Object_46defineProperty(_5z_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6S_, _$4_Object_46defineProperty(_5z_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6T_, _$4_Object_46defineProperty(_5z_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6U_, _$4_Object_46defineProperty(_5z_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _5y_Promo.prototype = _5z_;

  _$5_Object_46setPrototypeOf(_5y_Promo, _38_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3M_, _$4_Object_46defineProperty(_1t_BoxWrapper, "create", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_1t_BoxWrapper, _1q_Term);

  var _1y_ = (__constructor.prototype = _1p_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1x_Weak, _$4_Object_46defineProperty(_1y_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3Q_, _$4_Object_46defineProperty(_1y_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1x_Weak.prototype = _1y_;

  _$5_Object_46setPrototypeOf(_1x_Weak, _38_Expo);

  var _25_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _24_Const, _$4_Object_46defineProperty(_25_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3T_, _$4_Object_46defineProperty(_25_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3U_, _$4_Object_46defineProperty(_25_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _24_Const.prototype = _25_;

  _$5_Object_46setPrototypeOf(_24_Const, _i_Node);

  var _2B_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2A_BinOp, _$4_Object_46defineProperty(_2B_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3W_, _$4_Object_46defineProperty(_2B_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3X_, _$4_Object_46defineProperty(_2B_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3Y_, _$4_Object_46defineProperty(_2B_, "binOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3Z_, _$4_Object_46defineProperty(_2B_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2A_BinOp.prototype = _2B_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3a_, _$4_Object_46defineProperty(_2A_BinOp, "createPlus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3b_, _$4_Object_46defineProperty(_2A_BinOp, "createMult", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_2A_BinOp, _i_Node);

  var _2E_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2D_UnOp, _$4_Object_46defineProperty(_2E_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3c_, _$4_Object_46defineProperty(_2E_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3d_, _$4_Object_46defineProperty(_2E_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3e_, _$4_Object_46defineProperty(_2E_, "unOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3f_, _$4_Object_46defineProperty(_2E_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2D_UnOp.prototype = _2E_;

  _$5_Object_46setPrototypeOf(_2D_UnOp, _i_Node);

  var _2H_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2G_If, _$4_Object_46defineProperty(_2H_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3g_, _$4_Object_46defineProperty(_2H_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3h_, _$4_Object_46defineProperty(_2H_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3i_, _$4_Object_46defineProperty(_2H_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2G_If.prototype = _2H_;

  _$5_Object_46setPrototypeOf(_2G_If, _i_Node);

  var _2K_ = (__constructor.prototype = _1p_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2J_Recur, _$4_Object_46defineProperty(_2K_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3j_, _$4_Object_46defineProperty(_2K_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3k_, _$4_Object_46defineProperty(_2K_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3l_, _$4_Object_46defineProperty(_2K_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2J_Recur.prototype = _2K_;

  _$5_Object_46setPrototypeOf(_2J_Recur, _38_Expo);

  var _2N_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2M_Prov, _$4_Object_46defineProperty(_2N_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3m_, _$4_Object_46defineProperty(_2N_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6W_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6V_Mod, _$4_Object_46defineProperty(_6W_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _77_, _$4_Object_46defineProperty(_6W_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _78_, _$4_Object_46defineProperty(_6W_, "update", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _79_, _$4_Object_46defineProperty(_6W_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _6V_Mod.prototype = _6W_;

  _$5_Object_46setPrototypeOf(_6V_Mod, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3n_, _$4_Object_46defineProperty(_2N_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3o_, _$4_Object_46defineProperty(_2N_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3p_, _$4_Object_46defineProperty(_2N_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2M_Prov.prototype = _2N_;

  _$5_Object_46setPrototypeOf(_2M_Prov, _i_Node);

  var _2Q_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2P_Dep, _$4_Object_46defineProperty(_2Q_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3q_, _$4_Object_46defineProperty(_2Q_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3r_, _$4_Object_46defineProperty(_2Q_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3s_, _$4_Object_46defineProperty(_2Q_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2P_Dep.prototype = _2Q_;

  _$5_Object_46setPrototypeOf(_2P_Dep, _i_Node);

  var _2T_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2S_Deref, _$4_Object_46defineProperty(_2T_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3t_, _$4_Object_46defineProperty(_2T_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3u_, _$4_Object_46defineProperty(_2T_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2S_Deref.prototype = _2T_;

  _$5_Object_46setPrototypeOf(_2S_Deref, _i_Node);

  var _2W_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2V_Delta, _$4_Object_46defineProperty(_2W_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3v_, _$4_Object_46defineProperty(_2W_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3w_, _$4_Object_46defineProperty(_2W_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3x_, _$4_Object_46defineProperty(_2W_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2V_Delta.prototype = _2W_;

  _$5_Object_46setPrototypeOf(_2V_Delta, _i_Node);

  var _2b_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2a_Set, _$4_Object_46defineProperty(_2b_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _41_, _$4_Object_46defineProperty(_2b_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _42_, _$4_Object_46defineProperty(_2b_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _43_, _$4_Object_46defineProperty(_2b_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2a_Set.prototype = _2b_;

  _$5_Object_46setPrototypeOf(_2a_Set, _i_Node);

  var _2e_ = (__constructor.prototype = _C_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _2d_Prop, _$4_Object_46defineProperty(_2e_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _44_, _$4_Object_46defineProperty(_2e_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _45_, _$4_Object_46defineProperty(_2e_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _46_, _$4_Object_46defineProperty(_2e_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2d_Prop.prototype = _2e_;

  _$5_Object_46setPrototypeOf(_2d_Prop, _i_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _11_, _$4_Object_46defineProperty(_Q_, "toGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _12_, _$4_Object_46defineProperty(_Q_, "deleteVarNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _13_, _$4_Object_46defineProperty(_Q_, "startPropagation", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _14_, _$4_Object_46defineProperty(_Q_, "shuffle", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _15_, _$4_Object_46defineProperty(_Q_, "batchPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _16_, _$4_Object_46defineProperty(_Q_, "pass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _17_, _$4_Object_46defineProperty(_Q_, "tokenPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _18_, _$4_Object_46defineProperty(_Q_, "getData", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _0_ = (__constructor.prototype = _Q_, new __constructor());

  _0_.graph = _1_;

  var _E_ = (__constructor.prototype = _L_, new __constructor());

  _E_.machine = _0_;
  _E_.forward = true;
  _E_.rewrite = false;
  _E_.transited = false;
  _E_.link = null;
  _E_.rewriteFlag = "\u25A1";
  var _I_ = ["*"];
  _E_.dataStack = _I_;
  var _K_ = [];
  _E_.boxStack = _K_;
  _E_.isMain = true;
  _0_.token = _E_;
  _0_.count = 0;
  var _N_ = [];
  _0_.evalTokens = _N_;
  var _O_ = [];
  _0_.cells = _O_;
  _0_.evaluating = false;

  var _P_ = new _$3_Map();

  _0_.newValues = _P_;
  _0_.hasUpdate = false;
  _0_.play = false;
  _0_.playing = false;
  _0_.finished = false;
  _1_.machine = _0_;
  _$0_global.machine = _0_;
}).call(this);
}.call(window));

/***/ })

/******/ });