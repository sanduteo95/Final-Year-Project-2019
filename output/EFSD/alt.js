(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [0];
        break;

      case 1:
        __captured = [_X4__95get, _X4__95get];
        break;

      case 2:
        __captured = [_Yv__95typeof, _Yv__95typeof, _XH__95get, _XH__95get];
        break;

      case 3:
        __captured = [_Yq__95typeof, _Yq__95typeof];
        break;

      case 4:
        __captured = [_Yr__95typeof, _Yr__95typeof];
        break;

      case 5:
        __captured = [_aw__95typeof, _aw__95typeof, _aN__95getPrototypeOf, _aN__95getPrototypeOf];
        break;

      case 6:
        __captured = [_b0__95typeof, _b0__95typeof, _aS__95getPrototypeOf, _aS__95getPrototypeOf];
        break;

      case 7:
        __captured = [_b2__95typeof, _b2__95typeof, _aU__95getPrototypeOf, _aU__95getPrototypeOf];
        break;

      case 8:
        __captured = [_b4__95typeof, _b4__95typeof, _aW__95getPrototypeOf, _aW__95getPrototypeOf];
        break;

      case 9:
        __captured = [_b6__95typeof, _b6__95typeof, _aY__95getPrototypeOf, _aY__95getPrototypeOf];
        break;

      case 10:
        __captured = [_b8__95typeof, _b8__95typeof, _aa__95getPrototypeOf, _aa__95getPrototypeOf];
        break;

      case 11:
        __captured = [_bA__95typeof, _bA__95typeof, _ac__95getPrototypeOf, _ac__95getPrototypeOf];
        break;

      case 12:
        __captured = [_ZO__95typeof, _ZO__95typeof];
        break;

      case 13:
        __captured = [_ZP__95typeof, _ZP__95typeof];
        break;

      case 14:
        __captured = [_ZQ__95typeof, _ZQ__95typeof];
        break;

      case 15:
        __captured = [_ZR__95typeof, _ZR__95typeof];
        break;

      case 16:
        __captured = [_Zb__95typeof, _Zb__95typeof];
        break;

      case 17:
        __captured = [_Zc__95typeof, _Zc__95typeof];
        break;

      case 18:
        __captured = [_Zd__95typeof, _Zd__95typeof];
        break;

      case 19:
        __captured = [_Ze__95typeof, _Ze__95typeof];
        break;

      case 20:
        __captured = [_Zg__95typeof, _Zg__95typeof];
        break;

      case 21:
        __captured = [_Zi__95typeof, _Zi__95typeof];
        break;

      case 22:
        __captured = [_az__95typeof, _az__95typeof];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(23);

  var $$0_enumerable_58false_44configurable_58true_44writable_58true = {
    enumerable: false,
    configurable: true,
    writable: true
  };
  var $$1_enumerable_58false_44configurable_58true_44writable_58false = {
    enumerable: false,
    configurable: true,
    writable: false
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46getPrototypeOf = _$1_Object.getPrototypeOf;
  var _$3_Map = _$0_global.Map;
  var _$4_Object_46defineProperty = _$1_Object.defineProperty;
  var _$5_Object_46setPrototypeOf = _$1_Object.setPrototypeOf;
  var _$6_Reflect = _$0_global.Reflect;
  var _$7_Reflect_46get = _$6_Reflect.get;

  var _Xy__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _av__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aK_PatternType = function (type, id1, id2) {
    _av__95classCallCheck(this, _aK_PatternType);

    this.type = type;
    this.id1 = id1;
    this.id2 = id2;
  };

  var _Z0__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XS_Abstraction = function (pattern, body) {
    _Z0__95classCallCheck(this, _XS_Abstraction);

    this.pattern = pattern;
    this.body = body;
  };

  var _Z2__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XV_Application = function (lhs, rhs) {
    _Z2__95classCallCheck(this, _XV_Application);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _Yz__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XR_Identifier = function (value, name) {
    _Yz__95classCallCheck(this, _XR_Identifier);

    this.value = value;
    this.name = name;
  };

  var _Z3__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XW_Constant = function (value) {
    _Z3__95classCallCheck(this, _XW_Constant);

    this.value = value;
  };

  var _aO__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YW_Operation = function (type, name) {
    _aO__95classCallCheck(this, _YW_Operation);

    this.type = type;
    this.name = name;
  };

  var _Xa_ = _YW_Operation.prototype;

  var _az__95typeof = function (obj) {
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

  var _Z5__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aQ__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    if (call && (__captured__scope_N_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _bD__95assertThisInitialized(self);
  };

  var _bD__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Xb_UnaryOp = function (type, name, v1) {
    var _this;

    _Z5__95classCallCheck(this, _Xb_UnaryOp);

    _this = _aQ__95possibleConstructorReturn(this, _Ww_(_Xb_UnaryOp).call(this, type, name));
    _this.v1 = v1;
    return _this;
  };

  var _Z4__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aP__95possibleConstructorReturn = function (self, call) {
    if (call && (_ay_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _bC__95assertThisInitialized(self);
  };

  var _bC__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _XX_BinaryOp = function (type, name, v1, v2) {
    var _this;

    _Z4__95classCallCheck(this, _XX_BinaryOp);

    _this = _aP__95possibleConstructorReturn(this, _Ww_(_XX_BinaryOp).call(this, type, name, v1));
    _this.v2 = v2;
    return _this;
  };

  var _Z9__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xe_IfThenElse = function (cond, t1, t2) {
    _Z9__95classCallCheck(this, _Xe_IfThenElse);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  var _ZB__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xh_Recursion = function (param, body) {
    _ZB__95classCallCheck(this, _Xh_Recursion);

    this.param = param;
    this.body = body;
  };

  var _ZD__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xk_Tuple = function (lhs, rhs) {
    _ZD__95classCallCheck(this, _Xk_Tuple);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _ZF__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xn_ProvisionalConstant = function (term) {
    _ZF__95classCallCheck(this, _Xn_ProvisionalConstant);

    this.term = term;
  };

  var _ZI__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xq_Change = function (param, body) {
    _ZI__95classCallCheck(this, _Xq_Change);

    this.param = param;
    this.body = body;
  };

  var _ZJ__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xr_Assign = function (param, body) {
    _ZJ__95classCallCheck(this, _Xr_Assign);

    this.param = param;
    this.body = body;
  };

  var _ZL__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xu_Propagation = function () {
    _ZL__95classCallCheck(this, _Xu_Propagation);
  };

  var _ZG__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xo_Deprecation = function (term) {
    _ZG__95classCallCheck(this, _Xo_Deprecation);

    this.term = term;
  };

  var _ZH__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xp_Dereference = function (term) {
    _ZH__95classCallCheck(this, _Xp_Dereference);

    this.term = term;
  };

  var _ZM__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xv_GraphAbstraction = function (term) {
    _ZM__95classCallCheck(this, _Xv_GraphAbstraction);

    this.term = term;
  };

  var _Yx__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _au__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Zk_Token = function (type, value, pred) {
    _au__95classCallCheck(this, _Zk_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _XN_Lexer = function (input) {
    _Yx__95classCallCheck(this, _XN_Lexer);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _XO_ = _XN_Lexer.prototype;

  var _YG_ = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _YH_ = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case 'λ':
      case '\\':
        this._token = new _Zk_Token(_Zk_Token.LAMBDA);
        break;

      case '.':
        this._token = new _Zk_Token(_Zk_Token.DOT);
        break;

      case ',':
        this._token = new _Zk_Token(_Zk_Token.COMMA, null, 1);
        break;

      case ';':
        this._token = new _Zk_Token(_Zk_Token.SEQ);
        break;

      case '(':
        this._token = new _Zk_Token(_Zk_Token.LPAREN);
        break;

      case ')':
        this._token = new _Zk_Token(_Zk_Token.RPAREN);
        break;

      case '{':
        this._token = new _Zk_Token(_Zk_Token.CLPAREN);
        break;

      case '}':
        this._token = new _Zk_Token(_Zk_Token.CRPAREN);
        break;

      case '\0':
        this._token = new _Zk_Token(_Zk_Token.EOF);
        break;

      case '~':
        this._token = new _Zk_Token(_Zk_Token.NOT);
        break;

      case '&':
        if (this._nextChar() == '&') this._token = new _Zk_Token(_Zk_Token.AND, null, 5);else {
          this._index--;
          this.fail();
        }
        break;

      case '|':
        var c2 = this._nextChar();

        if (c2 == '|') this._token = new _Zk_Token(_Zk_Token.OR, null, 4);else {
          this._index--;
          this.fail();
        }
        break;

      case '+':
        this._token = new _Zk_Token(_Zk_Token.PLUS, null, 12);
        break;

      case '-':
        this._token = new _Zk_Token(_Zk_Token.SUB, null, 12);
        break;

      case '*':
        this._token = new _Zk_Token(_Zk_Token.MULT, null, 13);
        break;

      case '/':
        this._token = new _Zk_Token(_Zk_Token.DIV, null, 13);
        break;

      case '<':
        if (this._nextChar() == '=') this._token = new _Zk_Token(_Zk_Token.LTE, null, 10);else {
          this._index--;
          this.fail();
        }
        break;

      case '=':
        this._token = new _Zk_Token(_Zk_Token.DEFINE);
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
          if (str == "let") this._token = new _Zk_Token(_Zk_Token.LET);else if (str == "in") this._token = new _Zk_Token(_Zk_Token.IN);else if (str == "rec") this._token = new _Zk_Token(_Zk_Token.REC);else if (str == "true") this._token = new _Zk_Token(_Zk_Token.TRUE);else if (str == "false") this._token = new _Zk_Token(_Zk_Token.FALSE);else if (str == "if") this._token = new _Zk_Token(_Zk_Token.IF);else if (str == "then") this._token = new _Zk_Token(_Zk_Token.THEN);else if (str == "else") this._token = new _Zk_Token(_Zk_Token.ELSE);else if (str == "link") this._token = new _Zk_Token(_Zk_Token.CHANGE);else if (str == "set") this._token = new _Zk_Token(_Zk_Token.SET);else if (str == "to") this._token = new _Zk_Token(_Zk_Token.TO);else if (str == "step") this._token = new _Zk_Token(_Zk_Token.PROP);else if (str == "peek") this._token = new _Zk_Token(_Zk_Token.DEP);else if (str == "deref") this._token = new _Zk_Token(_Zk_Token.DEREF);else if (str == "abs") this._token = new _Zk_Token(_Zk_Token.ABS);else this._token = new _Zk_Token(_Zk_Token.LCID, str);
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
            this._token = new _Zk_Token(_Zk_Token.INT, parseFloat(_str));
          } else {
            this.fail();
          }

    }
  };

  var _YI_ = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _YJ_ = function () {
    return this._token;
  };

  var _YK_ = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _YL_ = function (type) {
    return this._token.type == type;
  };

  var _YM_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _YN_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _Yy__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XP_Parser = function (lexer) {
    _Yy__95classCallCheck(this, _XP_Parser);

    this.lexer = lexer;
  };

  var _XQ_ = _XP_Parser.prototype;

  var _YO_ = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_Zk_Token.EOF);
    return result;
  };

  var _YP_ = function (ctx) {
    if (this.lexer.skip(_Zk_Token.LAMBDA)) {
      var _id = this.lexer.token(_Zk_Token.LCID);

      this.lexer.match(_Zk_Token.DOT);
      var term = this.term([_id].concat(ctx));
      return new _XS_Abstraction(new _aK_PatternType(_Wj_PatternType.Id, _id), term);
    } else if (this.lexer.skip(_Zk_Token.LET)) {
      if (this.lexer.skip(_Zk_Token.LPAREN)) {
        var id1 = this.lexer.token(_Zk_Token.LCID);
        this.lexer.match(_Zk_Token.COMMA);
        var id2 = this.lexer.token(_Zk_Token.LCID);
        this.lexer.match(_Zk_Token.RPAREN);
        var pattern = new _aK_PatternType(_Wj_PatternType.Tuple, id1, id2);
        this.lexer.match(_Zk_Token.DEFINE);
        var N = this.term(ctx);
        this.lexer.match(_Zk_Token.IN);
        var M = this.term([id1, id2].concat(ctx));
        return new _XV_Application(new _XS_Abstraction(pattern, M), N);
      } else {
        var id = this.lexer.token(_Zk_Token.LCID);
        var pattern = new _aK_PatternType(_Wj_PatternType.Id, id);
        this.lexer.match(_Zk_Token.DEFINE);
        var N = this.term(ctx);
        this.lexer.match(_Zk_Token.IN);

        var _M = this.term([id].concat(ctx));

        return new _XV_Application(new _XS_Abstraction(pattern, _M), N);
      }
    } else if (this.lexer.skip(_Zk_Token.REC)) {
      var _id2 = this.lexer.token(_Zk_Token.LCID);

      this.lexer.match(_Zk_Token.DOT);

      var _term = this.term([_id2].concat(ctx));

      return new _Xh_Recursion(_id2, _term);
    } else if (this.lexer.skip(_Zk_Token.IF)) {
      var cond = this.term(ctx);
      this.lexer.match(_Zk_Token.THEN);
      var t1 = this.term(ctx);
      this.lexer.match(_Zk_Token.ELSE);
      var t2 = this.term(ctx);
      return new _Xe_IfThenElse(cond, t1, t2);
    } else {
      return this.application(ctx);
    }
  };

  var _YQ_ = function (token) {
    return token.type == _Zk_Token.AND || token.type == _Zk_Token.OR || token.type == _Zk_Token.PLUS || token.type == _Zk_Token.SUB || token.type == _Zk_Token.MULT || token.type == _Zk_Token.DIV || token.type == _Zk_Token.LTE || token.type == _Zk_Token.COMMA;
  };

  var _YR_ = function (ctx, lhs, pred) {
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

      if (op.type == _Zk_Token.AND) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.And, "&&", lhs, rhs);
      } else if (op.type == _Zk_Token.OR) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Or, "||", lhs, rhs);
      } else if (op.type == _Zk_Token.PLUS) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Plus, "+", lhs, rhs);
      } else if (op.type == _Zk_Token.SUB) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Sub, "-", lhs, rhs);
      } else if (op.type == _Zk_Token.MULT) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Mult, "*", lhs, rhs);
      } else if (op.type == _Zk_Token.DIV) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Div, "/", lhs, rhs);
      } else if (op.type == _Zk_Token.LTE) {
        lhs = new _XX_BinaryOp(_Wb_BinOpType.Lte, "<=", lhs, rhs);
      } else if (op.type == _Zk_Token.COMMA) {
        lhs = new _Xk_Tuple(lhs, rhs);
      }
    }

    return lhs;
  };

  var _YS_ = function (ctx) {
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
          lhs = new _XV_Application(lhs, rhs);
        }
      }
    }
  };

  var _YT_ = function (ctx) {
    if (this.lexer.skip(_Zk_Token.LPAREN)) {
      var _term2 = this.term(ctx);

      this.lexer.match(_Zk_Token.RPAREN);
      return _term2;
    } else if (this.lexer.next(_Zk_Token.LCID)) {
      var id = this.lexer.token(_Zk_Token.LCID);
      return new _XR_Identifier(ctx.indexOf(id), id);
    } else if (this.lexer.next(_Zk_Token.INT)) {
      var n = this.lexer.token(_Zk_Token.INT);
      return new _XW_Constant(n);
    } else if (this.lexer.skip(_Zk_Token.TRUE)) {
      return new _XW_Constant(true);
    } else if (this.lexer.skip(_Zk_Token.FALSE)) {
      return new _XW_Constant(false);
    } else if (this.lexer.skip(_Zk_Token.NOT)) {
      var _term3 = this.term(ctx);

      return new _Xb_UnaryOp(_Z6_UnOpType.Not, "~", _term3);
    } else if (this.lexer.skip(_Zk_Token.PROP)) {
      return new _Xu_Propagation();
    } else if (this.lexer.skip(_Zk_Token.DEP)) {
      var term = this.term(ctx);
      return new _Xo_Deprecation(term);
    } else if (this.lexer.skip(_Zk_Token.DEREF)) {
      var term = this.term(ctx);
      return new _Xp_Dereference(term);
    } else if (this.lexer.skip(_Zk_Token.CLPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_Zk_Token.CRPAREN);
      return new _Xn_ProvisionalConstant(term);
    } else if (this.lexer.skip(_Zk_Token.CHANGE)) {
      var _id3 = this.lexer.token(_Zk_Token.LCID);

      this.lexer.match(_Zk_Token.TO);

      var _term4 = this.term(ctx);

      return new _Xq_Change(_id3, _term4);
    } else if (this.lexer.skip(_Zk_Token.SET)) {
      var _id4 = this.lexer.token(_Zk_Token.LCID);

      this.lexer.match(_Zk_Token.TO);

      var _term5 = this.term(ctx);

      return new _Xr_Assign(_id4, _term5);
    } else if (this.lexer.skip(_Zk_Token.ABS)) {
      var _term6 = this.term(ctx);

      return new _Xv_GraphAbstraction(_term6);
    } else {
      return undefined;
    }
  };

  var _XL__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Vo_MachineToken = function (machine) {
    _XL__95classCallCheck(this, _Vo_MachineToken);

    this.machine = machine;
    this.reset();
  };

  var _Tp_ = _Vo_MachineToken.prototype;

  var _Wh_ = function () {
    return _WC_CompData;
  };

  var _Wi_ = function () {
    return _WL_RewriteFlag;
  };

  var _Vl_ = function (link) {
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

  var _Vm_ = function () {
    this.forward = true;
    this.rewrite = false;
    this.transited = false;
    this.link = null;
    this.rewriteFlag = _WL_RewriteFlag.EMPTY;
    this.dataStack = [_WC_CompData.PROMPT];
    this.boxStack = [];
  };

  var _Vn_ = function () {
    this.setLink(null);
    this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
  };

  var _Wm__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Wn_isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var _U8_Link = function (from, to, fromPort, toPort, reverse) {
    _Wm__95classCallCheck(this, _U8_Link);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.reverse = reverse;
    this.colour = null;
    this.penWidth = null;
    this.addToGraph(_WB_.graph); // cheating

    this.addToNode(); // cheating
  };

  var _K_ = _U8_Link.prototype;

  var _Ty_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _Tz_ = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _U0_ = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _U1_ = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _U2_ = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _U3_ = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _U4_ = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _U5_ = function () {
    this.colour = null;
    this.penWidth = null;
  };

  var _U6_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _U7_ = function () {
    return this.from + "->" + this.to;
  };

  var _XK__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Yr__95typeof = function (obj) {
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

  var _Wz__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _X0__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (call && (__captured__scope_5_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ZV__95assertThisInitialized(self);
  };

  var _ZV__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Wp__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _UM_Node = function (shape, text, colour, name) {
    _Wp__95classCallCheck(this, _UM_Node);

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
    this.addToGraph(_WB_.graph); // cheating!
  };

  var _1Y_ = _UM_Node.prototype;

  var _UC_ = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _UD_ = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _UE_ = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _UF_ = function () {
    return this.links;
  };

  var _UG_ = function (toPort) {
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

  var _UH_ = function (fromPort) {
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

  var _UI_ = function (graph) {
    var newNode = new _UM_Node(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
  };

  var _UJ_ = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _UK_ = function (token, link) {
    return link;
  };

  var _UL_ = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _Ug_Group = function () {
    var _this;

    _Wz__95classCallCheck(this, _Ug_Group);

    _this = _X0__95possibleConstructorReturn(this, _Ww_(_Ug_Group).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _Uh_ = function (node) {
    this.nodes.push(node);
  };

  var _Ui_ = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _Uj_ = function (link) {
    this.links.push(link);
  };

  var _Uk_ = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _Ul_ = function () {
    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    _Wx_(_Ww_(_Ug_Group.prototype), "delete", this).call(this);
  };

  var _Vk_Graph = function (machine) {
    _XK__95classCallCheck(this, _Vk_Graph);

    this.machine = machine;
    this.clear();
  };

  var _Th_ = _Vk_Graph.prototype;

  var _Ve_ = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _Ug_Group();
  };

  var _Vf_ = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _Vg_ = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _Vh_ = function (key) {
    return this.allNodes.get(key);
  };

  var _Vi_ = function (link) {
    this.allLinks.push(link);
  };

  var _Vj_ = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _X7__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y6__95possibleConstructorReturn = function (self, call) {
    if (call && (_ZZ_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ak__95assertThisInitialized(self);
  };

  var _ak__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _X2__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _X3__95possibleConstructorReturn = function (self, call) {
    if (call && (_Ys_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Yt__95assertThisInitialized(self);
  };

  var _Yt__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _X4__95get = function (target, property, receiver) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_2_[1] = Reflect.get;
    } else {
      __captured__scope_2_[1] = function _get(target, property, receiver) {
        var base = _ZX__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_2_[1](target, property, receiver || target);
  };

  var _ZX__95superPropBase = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _Ww_(object);
      if (object === null) break;
    }

    return object;
  };

  var _Yq__95typeof = function (obj) {
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

  var _Wu__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Wv__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (call && (__captured__scope_4_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ZT__95assertThisInitialized(self);
  };

  var _ZT__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Ua_Expo = function (shape, text, name) {
    var _this;

    _Wu__95classCallCheck(this, _Ua_Expo);

    _this = _Wv__95possibleConstructorReturn(this, _Ww_(_Ua_Expo).call(this, shape, text, "cyan", name));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _Ub_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _Uc_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    _Wx_(_Ww_(_Ua_Expo.prototype), "delete", this).call(this);
  };

  var _Ud_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (inLink != null && outLink != null) {
      outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    _Wx_(_Ww_(_Ua_Expo.prototype), "delete", this).call(this);
  };

  var _Uq_Pax = function (name) {
    _X2__95classCallCheck(this, _Uq_Pax);

    return _X3__95possibleConstructorReturn(this, _Ww_(_Uq_Pax).call(this, null, "?", name));
  };

  var _Ur_ = function () {
    return new _Uq_Pax(this.name);
  };

  var _Us_ = function () {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

    __captured__scope_2_[1](_Ww_(_Uq_Pax.prototype), "delete", this).call(this);
  };

  var _XD__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YC__95possibleConstructorReturn = function (self, call) {
    if (call && (_Zf_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _aq__95assertThisInitialized(self);
  };

  var _aq__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _VL_Contract = function (name) {
    _XD__95classCallCheck(this, _VL_Contract);

    return _YC__95possibleConstructorReturn(this, _Ww_(_VL_Contract).call(this, null, "C", name));
  };

  var _VM_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.boxStack.push(link);
      token.rewriteFlag = _WL_RewriteFlag.F_C;
      return nextLink;
    } else if (link.from == this.key && token.boxStack.length > 0) {
      var nextLink = token.boxStack.pop();
      return nextLink;
    }
  };

  var _VN_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_C && nextLink.from == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;

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

        if (prev instanceof _VL_Contract) {
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
          token.rewriteFlag = _WL_RewriteFlag.F_C;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _VO_ = function () {
    var con = new _VL_Contract(this.name);
    con.text = this.text;
    return con;
  };

  var _V1_Term = function (prin, auxs) {
    var _this;

    _X7__95classCallCheck(this, _V1_Term);

    _this = _Y6__95possibleConstructorReturn(this, _Ww_(_V1_Term).call(this));

    _this.set(prin, auxs);

    return _this;
  };

  var _V2_ = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _V3_ = function (auxs) {
    var newPaxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pax = _step.value;
        var newPax = new _Uq_Pax(pax.name).addToGroup(this);
        if (pax.findLinksOutOf(null).length == 0) new _U8_Link(pax.key, newPax.key, "n", "s").addToGroup(this);else {
          var outLink = pax.findLinksOutOf(null)[0];
          new _U8_Link(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
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

  var _WY_ = function (leftAuxs, rightAuxs, group) {
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
              var con = new _VL_Contract(leftAux.name).addToGroup(group);
              var outLink = leftAux.findLinksOutOf(null)[0];

              if (typeof outLink != 'undefined') {
                outLink.changeFrom(con.key, outLink.fromPort);
              }

              new _U8_Link(rightAux.key, con.key, "n", "s").addToGroup(group);
              new _U8_Link(leftAux.key, con.key, "n", "s").addToGroup(group);
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

  var _X5__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _X6__95possibleConstructorReturn = function (self, call) {
    if (call && (_Yu_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ZY__95assertThisInitialized(self);
  };

  var _ZY__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Wy__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y4__95possibleConstructorReturn = function (self, call) {
    if (call && (_ZU_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ai__95assertThisInitialized(self);
  };

  var _ai__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Ue_Box = function () {
    var _this;

    _Wy__95classCallCheck(this, _Ue_Box);

    _this = _Y4__95possibleConstructorReturn(this, _Ww_(_Ue_Box).call(this));
    _this.nodes = [];
    _this.links = [];
    return _this;
  };

  var _Uf_ = function (graph) {// this shouldnt be call, since every box should be inside a wrapper
  };

  var _X1__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y5__95possibleConstructorReturn = function (self, call) {
    if (call && (_ZW_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _aj__95assertThisInitialized(self);
  };

  var _aj__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _X8__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y7__95possibleConstructorReturn = function (self, call) {
    if (call && (_Za_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _al__95assertThisInitialized(self);
  };

  var _al__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _V4_Der = function (name) {
    _X8__95classCallCheck(this, _V4_Der);

    return _Y7__95possibleConstructorReturn(this, _Ww_(_V4_Der).call(this, null, "D", name));
  };

  var _V5_ = function () {
    var der = new _V4_Der(this.name);
    return der;
  };

  var _Um_Promo = function () {
    _X1__95classCallCheck(this, _Um_Promo);

    return _Y5__95possibleConstructorReturn(this, _Ww_(_Um_Promo).call(this, null, "!"));
  };

  var _Un_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.rewriteFlag = _WL_RewriteFlag.F_PROMO;
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _Uo_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_PROMO) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

      if (prev instanceof _V4_Der) {
        var oldGroup = this.group;
        oldGroup.moveOut(); // this.group is a box-wrapper

        oldGroup.deleteAndPreserveLink();
        var newNextLink = prev.findLinksInto(null)[0];
        prev.deleteAndPreserveInLink(); // preserve inLink

        token.rewrite = true;
        return newNextLink;
      } else if (prev instanceof _VL_Contract && token.boxStack.length >= 1) {
        if (nextLink.from == this.key) {
          var link = token.boxStack.pop();
          var inLinks = prev.findLinksInto(null);

          if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
          } else {
            var newBoxWrapper = this.group.copy().addToGroup(this.group.group);

            _V1_Term.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

            var prevLink = prev.findLinksOutOf(null)[0];
            prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
            link.changeTo(this.key, "s");
          }

          token.rewriteFlag = _WL_RewriteFlag.F_PROMO;
          token.rewrite = true;
          return nextLink;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Up_ = function () {
    return new _Um_Promo();
  };

  var _Ut_BoxWrapper = function (prin, box, auxs) {
    var _this;

    _X5__95classCallCheck(this, _Ut_BoxWrapper);

    _this = _X6__95possibleConstructorReturn(this, _Ww_(_Ut_BoxWrapper).call(this, prin, auxs));
    _this.box = box;
    return _this;
  };

  var _Uu_ = function (prin, box, auxs) {
    _Wx_(_Ww_(_Ut_BoxWrapper.prototype), "set", this).call(this, prin, auxs);

    this.box = box;
  };

  var _Uv_ = function (aux) {
    this.auxs.splice(this.auxs.indexOf(aux), 1);
    aux.deleteAndPreserveOutLink();
  };

  var _Uw_ = function () {
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

  var _Ux_ = function (map) {
    var newBoxWrapper = new _Ut_BoxWrapper();
    var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
    newBoxWrapper.prin = newPrin;
    map.set(this.prin.key, newPrin.key);
    var newBox = new _Ue_Box().addToGroup(newBoxWrapper);
    newBoxWrapper.box = newBox;
    newBoxWrapper.auxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var newNode;

        if (node instanceof _Ut_BoxWrapper) {
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
        var newLink = new _U8_Link(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
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
        var newLink = new _U8_Link(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
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

  var _Uy_ = function () {
    var map = new Map();
    return this.copyBox(map);
  };

  var _Uz_ = function () {
    this.box.delete();

    var _arr6 = Array.from(this.auxs);

    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var aux = _arr6[_i6];
      aux.delete();
    }

    this.prin.delete();

    _Wx_(_Ww_(_Ut_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _V0_ = function () {
    this.box.delete();

    var _arr7 = Array.from(this.auxs);

    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var aux = _arr7[_i7];
      this.removeAux(aux); // preserve outLink
    }

    this.prin.deleteAndPreserveInLink(); //preserve inLink

    _Wx_(_Ww_(_Ut_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _WX_ = function () {
    var wrapper = new _Ut_BoxWrapper();
    var box = new _Ue_Box().addToGroup(wrapper);
    var promo = new _Um_Promo().addToGroup(wrapper);
    wrapper.set(promo, box, []);
    return wrapper;
  };

  var _ZQ__95typeof = function (obj) {
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

  var _Wr__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y1__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (call && (__captured__scope_F_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _af__95assertThisInitialized(self);
  };

  var _af__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _ZP__95typeof = function (obj) {
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

  var _Wq__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y0__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (call && (__captured__scope_E_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ae__95assertThisInitialized(self);
  };

  var _ae__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _UN_App = function () {
    _Wq__95classCallCheck(this, _UN_App);

    return _Y0__95possibleConstructorReturn(this, _Ww_(_UN_App).call(this, null, "@", "yellow"));
  };

  var _UO_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.pop();
      token.dataStack.push(_WC_CompData.R);
      token.forward = true;
      return nextLink;
    }
  };

  var _UP_ = function () {
    return new _UN_App();
  };

  var _aw__95typeof = function (obj) {
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

  var _Z1__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aM__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (call && (__captured__scope_6_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ax__95assertThisInitialized(self);
  };

  var _ax__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aN__95getPrototypeOf = function (o) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    __captured__scope_6_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6_[3](o);
  };

  var _XT_PatTuple = function () {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    _Z1__95classCallCheck(this, _XT_PatTuple);

    return _aM__95possibleConstructorReturn(this, __captured__scope_6_[3](_XT_PatTuple).call(this, null, "'", "mediumpurple1"));
  };

  var _YU_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("n")[0];
      if (link.toPort == "e") token.dataStack.push(_WC_CompData.PR);else if (link.toPort == "w") token.dataStack.push(_WC_CompData.PL);
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink;
      var direction = token.dataStack.pop();
      if (direction == _WC_CompData.PR) nextLink = this.findLinksInto("e")[0];else if (direction == _WC_CompData.PL) nextLink = this.findLinksInto("w")[0];
      return nextLink;
    }
  };

  var _YV_ = function () {
    return new _XT_PatTuple();
  };

  var _UQ_Abs = function () {
    _Wr__95classCallCheck(this, _UQ_Abs);

    return _Y1__95possibleConstructorReturn(this, _Ww_(_UQ_Abs).call(this, null, "λ", "yellow"));
  };

  var _UR_ = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var data = token.dataStack[token.dataStack.length - 1];

      if (data == _WC_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push([_WC_CompData.LAMBDA, _WC_CompData.EMPTY]);
        token.forward = false;
        return link;
      } else if (data == _WC_CompData.R) {
        var nextLink = this.findLinksOutOf(null)[0];
        token.dataStack.pop();
        token.rewriteFlag = _WL_RewriteFlag.F_LAMBDA;
        return nextLink;
      }
    }
  };

  var _US_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_LAMBDA && nextLink.from == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _UN_App) {
        // M rule
        var appLink = prev.findLinksInto(null)[0];
        var appOtherLink = prev.findLinksOutOf("e")[0];
        var otherNextLink = this.findLinksInto("w")[0];
        nextLink.changeFrom(appLink.from, appLink.fromPort);
        nextLink.changeToGroup(appLink.group);
        otherNextLink.changeTo(appOtherLink.to, appOtherLink.toPort);
        otherNextLink.reverse = false;
        var otherNode = this.graph.findNodeByKey(otherNextLink.from);
        if (otherNode instanceof _Ua_Expo || otherNode instanceof _XT_PatTuple) otherNextLink.fromPort = "n";
        otherNextLink.changeToGroup(appOtherLink.group);
        this.delete();
        prev.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _UT_ = function () {
    return new _UQ_Abs();
  };

  var _Ze__95typeof = function (obj) {
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

  var _XC__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YB__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (call && (__captured__scope_K_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ap__95assertThisInitialized(self);
  };

  var _ap__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Zd__95typeof = function (obj) {
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

  var _XB__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YA__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (call && (__captured__scope_J_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ao__95assertThisInitialized(self);
  };

  var _ao__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _VD_Const = function (name) {
    _XB__95classCallCheck(this, _VD_Const);

    return _YA__95possibleConstructorReturn(this, _Ww_(_VD_Const).call(this, null, name, "mediumpurple1", name));
  };

  var _VE_ = function (token, link) {
    if (token.dataStack[token.dataStack.length - 1] == _WC_CompData.PROMPT) {
      token.dataStack.pop();
      token.dataStack.push([this.name, _WC_CompData.EMPTY]);
      token.forward = false;
      return link;
    }
  };

  var _VF_ = function () {
    return new _VD_Const(this.name);
  };

  var _VG_BinOp = function (text) {
    var _this;

    _XC__95classCallCheck(this, _VG_BinOp);

    _this = _YB__95possibleConstructorReturn(this, _Ww_(_VG_BinOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _VH_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      token.forward = true;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _WC_CompData.PROMPT) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        var result = this.binOpApply(this.subType, l[0], r[0]);
        token.dataStack.push([result, _WC_CompData.EMPTY]);
        token.rewriteFlag = _WL_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
        ;
      }
    }
  };

  var _VI_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
      var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

      if (left instanceof _Um_Promo && right instanceof _Um_Promo) {
        var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _VD_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _U8_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        left.group.delete();
        right.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _VJ_ = function (type, v1, v2) {
    switch (type) {
      case _Wb_BinOpType.And:
        return v1 && v2;

      case _Wb_BinOpType.Or:
        return v1 || v2;

      case _Wb_BinOpType.Plus:
        return parseFloat(v1) + parseFloat(v2);

      case _Wb_BinOpType.Sub:
        return parseFloat(v1) - parseFloat(v2);

      case _Wb_BinOpType.Mult:
        return parseFloat(v1) * parseFloat(v2);

      case _Wb_BinOpType.Div:
        return parseFloat(v1) / parseFloat(v2);

      case _Wb_BinOpType.Lte:
        return parseFloat(v1) <= parseFloat(v2);
    }
  };

  var _VK_ = function () {
    var newNode = new _VG_BinOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _WZ_ = function () {
    var node = new _VG_BinOp("+");
    node.subType = _Wb_BinOpType.Plus;
    return node;
  };

  var _Wa_ = function () {
    var node = new _VG_BinOp("*");
    node.subType = _Wb_BinOpType.Mult;
    return node;
  };

  var _XJ__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YF__95possibleConstructorReturn = function (self, call) {
    if (call && (_Zj_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _at__95assertThisInitialized(self);
  };

  var _at__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Vc_Var = function (name) {
    var _this;

    _XJ__95classCallCheck(this, _Vc_Var);

    _this = _YF__95possibleConstructorReturn(this, _Ww_(_Vc_Var).call(this, name));
    _this.text = "V";
    return _this;
  };

  var _Vd_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];
    var inNode = this.graph.findNodeByKey(inLink.from);

    if (inLink != null && outLink != null) {
      if (this.graph.findNodeByKey(outLink.to) instanceof _UQ_Abs && inNode instanceof _Ua_Expo) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    this.delete();
  };

  var _b2__95typeof = function (obj) {
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

  var _ZA__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aT__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (call && (__captured__scope_8_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _b3__95assertThisInitialized(self);
  };

  var _b3__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aU__95getPrototypeOf = function (o) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    __captured__scope_8_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8_[3](o);
  };

  var _Wt__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y3__95possibleConstructorReturn = function (self, call) {
    if (call && (_ZS_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ah__95assertThisInitialized(self);
  };

  var _ah__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _UY_Weak = function () {
    _Wt__95classCallCheck(this, _UY_Weak);

    return _Y3__95possibleConstructorReturn(this, _Ww_(_UY_Weak).call(this, null, 'C0'));
  };

  var _UZ_ = function () {
    return new _UY_Weak();
  };

  var _Xf_If = function () {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    _ZA__95classCallCheck(this, _Xf_If);

    return _aT__95possibleConstructorReturn(this, __captured__scope_8_[3](_Xf_If).call(this, null, "if", "mediumpurple1"));
  };

  var _Yb_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _Um_Promo) {
        if (token.dataStack[token.dataStack.length - 1][0] == true) {
          var nextLink = this.findLinksOutOf("n")[0];
          token.dataStack.pop();
          token.rewriteFlag = _WL_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        } else if (token.dataStack[token.dataStack.length - 1][0] == false) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.pop();
          token.rewriteFlag = _WL_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        }
      } else {
        var nextLink = this.findLinksOutOf("n")[0];
        var data = token.dataStack.pop();
        token.dataStack.push(data[0]);
        token.dataStack.push(_WC_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      }
    } else if (link.from == this.key) {
      if (link.fromPort == "n") {
        var nextLink = this.findLinksOutOf("e")[0];
        token.dataStack.push(_WC_CompData.PROMPT);
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

  var _Yc_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_IF && nextLink.from == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _Um_Promo) {
        var downLink = this.findLinksInto(null)[0];
        var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
        nextLink.changeFrom(downLink.from, downLink.fromPort);
        var weak = new _UY_Weak(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
        otherLink.changeFrom(weak.key, "n");
        this.delete();
        left.group.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Yd_ = function () {
    return new _Xf_If();
  };

  var _b4__95typeof = function (obj) {
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

  var _ZC__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aV__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (call && (__captured__scope_9_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _b5__95assertThisInitialized(self);
  };

  var _b5__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aW__95getPrototypeOf = function (o) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    __captured__scope_9_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9_[3](o);
  };

  var _Xi_Recur = function () {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    _ZC__95classCallCheck(this, _Xi_Recur);

    return _aV__95possibleConstructorReturn(this, __captured__scope_9_[3](_Xi_Recur).call(this, null, "μ", "mediumpurple1"));
  };

  var _Ye_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.rewriteFlag = _WL_RewriteFlag.F_RECUR;
      return nextLink;
    }
  };

  var _Yf_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_RECUR && nextLink.from == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var wrapper = this.group.copy().addToGroup(this.group);

      _V1_Term.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);

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
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Yg_ = function () {
    return new _Xi_Recur();
  };

  var _ZO__95typeof = function (obj) {
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

  var _Wo__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Xz__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (call && (__captured__scope_D_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ad__95assertThisInitialized(self);
  };

  var _ad__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _U9_Start = function () {
    _Wo__95classCallCheck(this, _U9_Start);

    return _Xz__95possibleConstructorReturn(this, _Ww_(_U9_Start).call(this, "point", "", "black"));
  };

  var _UA_ = function (token) {
    if (token.link == null && token.dataStack[token.dataStack.length - 1] == _WC_CompData.PROMPT) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.forward = true;
      return nextLink;
    } else return null;
  };

  var _UB_ = function () {
    return new _U9_Start();
  };

  var _b0__95typeof = function (obj) {
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

  var _Z8__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aR__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (call && (__captured__scope_7_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _b1__95assertThisInitialized(self);
  };

  var _b1__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aS__95getPrototypeOf = function (o) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    __captured__scope_7_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7_[3](o);
  };

  var _Xc_UnOp = function (text) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    var _this;

    _Z8__95classCallCheck(this, _Xc_UnOp);

    _this = _aR__95possibleConstructorReturn(this, __captured__scope_7_[3](_Xc_UnOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _YX_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _WC_CompData.PROMPT) {
        var v1 = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([this.unOpApply(this.subType, v1[0]), _WC_CompData.EMPTY]);
        token.rewriteFlag = _WL_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _YY_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

      if (prev instanceof _Um_Promo) {
        var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _VD_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _U8_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        prev.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _YZ_ = function (type, v1) {
    switch (type) {
      case _Z6_UnOpType.Not:
        return !v1;
    }
  };

  var _Ya_ = function () {
    var newNode = new _Xc_UnOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _Zg__95typeof = function (obj) {
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

  var _XE__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YD__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    if (call && (__captured__scope_L_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ar__95assertThisInitialized(self);
  };

  var _ar__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _VP_Delta = function () {
    _XE__95classCallCheck(this, _VP_Delta);

    return _YD__95possibleConstructorReturn(this, _Ww_(_VP_Delta).call(this, null, "Δ", "indianred1"));
  };

  var _VQ_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.pop();
        token.dataStack.push(_WC_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 2] == _WC_CompData.PROMPT) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_WC_CompData.UNIT, _WC_CompData.EMPTY]);
          token.rewriteFlag = _WL_RewriteFlag.F_DELTA + data[1];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _VR_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _WL_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _UY_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _UY_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");

      var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

      var con = new _VD_Const(data[0]).addToGroup(wrapper.box);
      new _U8_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _VS_ = function () {
    return new _VP_Delta();
  };

  var _b8__95typeof = function (obj) {
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

  var _ZK__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aZ__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (call && (__captured__scope_B_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _b9__95assertThisInitialized(self);
  };

  var _b9__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aa__95getPrototypeOf = function (o) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    __captured__scope_B_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B_[3](o);
  };

  var _Xs_Set = function () {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    _ZK__95classCallCheck(this, _Xs_Set);

    return _aZ__95possibleConstructorReturn(this, __captured__scope_B_[3](_Xs_Set).call(this, null, "<<~", "indianred1"));
  };

  var _Yk_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

        token.dataStack.push(_WC_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 3] == _WC_CompData.PROMPT) {
          var data = token.dataStack.pop();
          var new_v = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_WC_CompData.UNIT, _WC_CompData.EMPTY]);
          token.rewriteFlag = _WL_RewriteFlag.F_DELTA + data[1] + ';' + new_v[0];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _Yl_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _WL_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      var s = string.split(";");
      var key = s[0];
      var data = s[1];
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _UY_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _UY_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
      this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];

      var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

      var con = new _VD_Const(data[0]).addToGroup(wrapper.box);
      new _U8_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Ym_ = function () {
    return new _Xs_Set();
  };

  var _ZR__95typeof = function (obj) {
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

  var _Ws__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y2__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (call && (__captured__scope_G_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _ag__95assertThisInitialized(self);
  };

  var _ag__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _UU_Dep = function () {
    _Ws__95classCallCheck(this, _UU_Dep);

    return _Y2__95possibleConstructorReturn(this, _Ww_(_UU_Dep).call(this, null, 'p', "mediumpurple1"));
  };

  var _UV_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _WC_CompData.PROMPT) {
        var data = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([data[0], _WC_CompData.EMPTY]);
        token.rewriteFlag = _WL_RewriteFlag.F_DEP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _UW_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _WL_RewriteFlag.F_DEP) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];

      if (_WB_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var outLink = this.findLinksOutOf(null)[0];
        var weak = new _UY_Weak(outLink.text).addToGroup(this.group);
        outLink.changeFrom(weak.key, "n");

        var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _VD_Const(data[0]).addToGroup(wrapper.box);
        new _U8_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        this.delete();
        token.rewrite = true;
      }

      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _UX_ = function () {
    return new _UU_Dep();
  };

  var _Zc__95typeof = function (obj) {
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

  var _XA__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y9__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (call && (__captured__scope_I_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _an__95assertThisInitialized(self);
  };

  var _an__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _VA_Deref = function () {
    _XA__95classCallCheck(this, _VA_Deref);

    return _Y9__95possibleConstructorReturn(this, _Ww_(_VA_Deref).call(this, null, "d", "mediumpurple1"));
  };

  var _VB_ = function (token, link) {
    if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
  };

  var _VC_ = function () {
    return new _VA_Deref();
  };

  var _Zi__95typeof = function (obj) {
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

  var _XI__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _YE__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    if (call && (__captured__scope_M_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _as__95assertThisInitialized(self);
  };

  var _as__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _VY_Mod = function () {
    var _this;

    _XI__95classCallCheck(this, _VY_Mod);

    _this = _YE__95possibleConstructorReturn(this, _Ww_(_VY_Mod).call(this, null, "M", "indianred1"));

    _this.graph.machine.cells.push(_this.key);

    return _this;
  };

  var _VZ_ = function (token, link) {
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

  var _Va_ = function (data) {
    var leftLink = this.findLinksOutOf("w")[0];

    if (_WB_.isNumber(data) || typeof data === "boolean") {
      var value = this.graph.findNodeByKey(leftLink.to);
      var oldData = value.name;
      value.text = data;
      value.name = data;
      return oldData;
    }
  };

  var _Vb_ = function () {
    var mod = new _VY_Mod();
    return mod;
  };

  var _Zb__95typeof = function (obj) {
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

  var _X9__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Y8__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (call && (__captured__scope_H_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _am__95assertThisInitialized(self);
  };

  var _am__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _V6_Prop = function () {
    _X9__95classCallCheck(this, _V6_Prop);

    return _Y8__95possibleConstructorReturn(this, _Ww_(_V6_Prop).call(this, null, "s", "indianred1"));
  };

  var _V7_ = function (token, link) {
    if (link.to == this.key) {
      if (token.dataStack[token.dataStack.length - 1] == _WC_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push(false);
        token.rewriteFlag = _WL_RewriteFlag.F_PROP;
        token.forward = false;
        token.machine.startPropagation();
        return link;
      }
    }
  };

  var _V8_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_PROP && nextLink.to == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var data = token.machine.hasUpdate;
      token.dataStack.pop();
      token.dataStack.push([data, _WC_CompData.EMPTY]);

      var wrapper = _Ut_BoxWrapper.create().addToGroup(this.group);

      var con = new _VD_Const(data).addToGroup(wrapper.box);
      new _U8_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      nextLink.changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _V9_ = function () {
    return new _V6_Prop();
  };

  var _Yv__95typeof = function (obj) {
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

  var _XF__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _XG__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (call && (__captured__scope_3_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Yw__95assertThisInitialized(self);
  };

  var _Yw__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _XH__95get = function (target, property, receiver) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_3_[3] = Reflect.get;
    } else {
      __captured__scope_3_[3] = function _get(target, property, receiver) {
        var base = _Zh__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_3_[3](target, property, receiver || target);
  };

  var _Zh__95superPropBase = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _Ww_(object);
      if (object === null) break;
    }

    return object;
  };

  var _VT_Prov = function () {
    var _this;

    _XF__95classCallCheck(this, _VT_Prov);

    _this = _XG__95possibleConstructorReturn(this, _Ww_(_VT_Prov).call(this, 'diamond', '', "indianred1"));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _VU_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_WC_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      var data = token.dataStack.pop();
      token.dataStack.pop();
      token.dataStack.push(data);
      token.rewriteFlag = _WL_RewriteFlag.F_MOD;
      return this.findLinksInto(null)[0];
    }
  };

  var _VV_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _WL_RewriteFlag.F_MOD) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var data = token.dataStack.pop();

      if (_WB_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var mod = new _VY_Mod().addToGroup(this.group);
        var con = new _VD_Const(data[0]).addToGroup(this.group);
        new _U8_Link(mod.key, con.key, "w", "s").addToGroup(this.group);
        var outLink = this.findLinksOutOf(null)[0];
        outLink.changeFrom(mod.key, "e");
        var inLink = this.findLinksInto(null)[0];
        inLink.changeTo(mod.key, "s");
        this.delete();
        token.rewrite = true;
        token.dataStack.push([data[0], mod.key]);
      }

      return nextLink;
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _VW_ = function () {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_3_[3](_Ww_(_VT_Prov.prototype), "delete", this).call(this);
  };

  var _VX_ = function () {
    return new _VT_Prov();
  };

  var _b6__95typeof = function (obj) {
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

  var _ZE__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _aX__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (call && (__captured__scope_A_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _b7__95assertThisInitialized(self);
  };

  var _b7__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _aY__95getPrototypeOf = function (o) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    __captured__scope_A_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A_[3](o);
  };

  var _Xl_Pair = function () {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    _ZE__95classCallCheck(this, _Xl_Pair);

    return _aX__95possibleConstructorReturn(this, __captured__scope_A_[3](_Xl_Pair).call(this, null, ",", "mediumpurple1"));
  };

  var _Yh_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink;

      if (token.dataStack[token.dataStack.length - 1] == _WC_CompData.PR) {
        token.dataStack.pop();
        nextLink = this.findLinksOutOf("e")[0];
      } else if (token.dataStack[token.dataStack.length - 1] == _WC_CompData.PL) {
        token.dataStack.pop();
        nextLink = this.findLinksOutOf('w')[0];
      } else {
        token.dataStack.push(_WC_CompData.PE);
        token.dataStack.push(_WC_CompData.PROMPT);
        nextLink = this.findLinksOutOf("e")[0];
        ;
      }

      token.rewriteFlag = _WL_RewriteFlag.F_PAIR;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink;

      if (token.dataStack[token.dataStack.length - 2] == _WC_CompData.PE) {
        nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.push(_WC_CompData.PROMPT);
        token.forward = true;
      } else {
        nextLink = this.findLinksInto("s")[0];
        token.dataStack.push(_WC_CompData.PR);
        token.forward = false;
      }

      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _WC_CompData.PE) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.pop();
        var result = "(" + l[0] + "," + r[0] + ")";
        token.dataStack.push([result, _WC_CompData.EMPTY]);
      } else {
        token.dataStack.push(_WC_CompData.PL);
      }

      return this.findLinksInto(null)[0];
      ;
    }
  };

  var _Yi_ = function (token, nextLink) {
    if (token.rewriteFlag == _WL_RewriteFlag.F_PAIR && nextLink.from == this.key) {
      token.rewriteFlag = _WL_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _VL_Contract) {
        var prev2 = this.graph.findNodeByKey(token.boxStack[token.boxStack.length - 1].from);

        if (prev2 instanceof _XT_PatTuple) {
          if (token.link.fromPort == "e") {
            var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

            if (right instanceof _Um_Promo) {
              var link = token.boxStack.pop();
              var inLinks = prev.findLinksInto(null);

              if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
              } else {
                var newBoxWrapper = right.group.copy().addToGroup(right.group.group);

                _V1_Term.joinAuxs(right.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

                var prevLink = prev2.findLinksInto("e")[0];
                prevLink.changeTo(newBoxWrapper.prin.key, "s");
                var weak = new _UY_Weak(null).addToGroup(this.group);
                new _U8_Link(weak.key, prev2.key, "n", "e").addToGroup(this.group);
              }

              token.rewrite = true;
              return prevLink;
            }
          } else if (token.link.fromPort == "w") {
            var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

            if (left instanceof _Um_Promo) {
              var link = token.boxStack.pop();
              var inLinks = prev.findLinksInto(null);

              if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
              } else {
                var newBoxWrapper = left.group.copy().addToGroup(left.group.group);

                _V1_Term.joinAuxs(left.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

                var prevLink = prev2.findLinksInto("w")[0];
                prevLink.changeTo(newBoxWrapper.prin.key, "s");
                var weak = new _UY_Weak(null).addToGroup(this.group);
                new _U8_Link(weak.key, prev2.key, "n", "w").addToGroup(this.group);
              }

              token.rewrite = true;
              return prevLink;
            }
          }
        }
      } else if (prev instanceof _XT_PatTuple) {
        this.findLinksOutOf("e")[0].changeFrom(prev.findLinksInto("e")[0].from, prev.findLinksInto("e")[0].fromPort);
        this.findLinksOutOf("w")[0].changeFrom(prev.findLinksInto("w")[0].from, prev.findLinksInto("w")[0].fromPort);
        this.delete();
        prev.delete();
        token.rewrite = true;
        return nextLink;
      }
    } else if (token.rewriteFlag == _WL_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Yj_ = function () {
    return new _Xl_Pair();
  };

  var _bA__95typeof = function (obj) {
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

  var _ZN__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _ab__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (call && (__captured__scope_C_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _bB__95assertThisInitialized(self);
  };

  var _bB__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _ac__95getPrototypeOf = function (o) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    __captured__scope_C_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C_[3](o);
  };

  var _Xw_GAbs = function () {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    _ZN__95classCallCheck(this, _Xw_GAbs);

    return _ab__95possibleConstructorReturn(this, __captured__scope_C_[3](_Xw_GAbs).call(this, null, "abs", "indianred1"));
  };

  var _Yn_ = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var nextLink = this.findLinksOutOf("n")[0];
      token.rewriteFlag = RewriteFlag.F_GABS;
      return nextLink;
    }
  };

  var _Yo_ = function (token, nextLink) {
    if (token.rewriteFlag == RewriteFlag.F_GABS && nextLink.from == this.key) {
      token.rewriteFlag = RewriteFlag.EMPTY; // TODO

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Yp_ = function () {
    return new _Xw_GAbs();
  };

  var _XM__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Vs_GC = function (graph) {
    _XM__95classCallCheck(this, _Vs_GC);

    this.graph = graph;
    this.noMore = false;
  };

  var _Tr_ = _Vs_GC.prototype;

  var _Vp_ = function () {
    /*
            do {
            	this.noMore = true;
            	this.collectInGroup(this.graph.child);
            } while (!this.noMore)
            */
  };

  var _Vq_ = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];

      if (node instanceof _UY_Weak || node instanceof _VL_Contract && node.findLinksInto(null).length == 0) {
        var link = node.findLinksOutOf(null)[0];
        var nextNode = this.graph.findNodeByKey(link.to);

        if (!(nextNode instanceof _UQ_Abs && link.toPort == "w")) {
          this.noMore = false;
          this.collectFromBottom(node);
        }
      } else if (node instanceof _Ug_Group) {
        this.collectInGroup(node);
      }
    }
  };

  var _Vr_ = function (node) {
    if (node instanceof _VL_Contract && node.findLinksInto(null).length != 0) {} else if (node instanceof _Um_Promo || node instanceof _Xi_Recur) {
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

  var _W8_GoIMachine = function () {
    _Xy__95classCallCheck(this, _W8_GoIMachine);

    this.graph = new _Vk_Graph(this);
    _WB_.graph = this.graph; // cheating!

    this.token = new _Vo_MachineToken(this);
    this.gc = new _Vs_GC(this.graph);
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

  var _Tx_ = _W8_GoIMachine.prototype;

  var _Vt_ = function () {
    return this.playing;
  };

  var _Vu_ = function (playValue) {
    this.play = playValue;
  };

  var _Vv_ = function () {
    return this.playing;
  };

  var _Vw_ = function (playingValue) {
    this.playing = playingValue;
  };

  var _Vx_ = function () {
    return this.finished;
  };

  var _Vy_ = function (finishedValue) {
    this.finished = finishedValue;
  };

  var _Vz_ = function (source) {
    var lexer = new _XN_Lexer(source + '\0');
    var parser = new _XP_Parser(lexer);
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

    var start = new _U9_Start().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    new _U8_Link(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
    this.deleteVarNode(this.graph.child);
  };

  var _W0_ = function (ast, group) {
    var graph = this.graph;

    if (ast instanceof _XR_Identifier) {
      var v = new _Vc_Var(ast.name).addToGroup(group);
      return new _V1_Term(v, [v]);
    } else if (ast instanceof _XS_Abstraction) {
      var params;
      var paramUsed;
      var auxNodes;

      if (ast.pattern.type == _Wj_PatternType.Id) {
        params = [ast.pattern.id1];
        paramUsed = [false];
        auxNodes = [null];
      } else if (ast.pattern.type == _Wj_PatternType.Tuple) {
        params = [ast.pattern.id1, ast.pattern.id2];
        paramUsed = [false, false];
        auxNodes = [null, null];
      }

      var wrapper = _Ut_BoxWrapper.create().addToGroup(group);

      var abs = new _UQ_Abs().addToGroup(wrapper.box);
      var term = this.toGraph(ast.body, wrapper.box);
      new _U8_Link(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
      new _U8_Link(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
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
          auxNodes[i] = new _UY_Weak(params[i]).addToGroup(abs.group);
        }
      }

      if (ast.pattern.type == _Wj_PatternType.Id) new _U8_Link(auxNodes[0].key, abs.key, "nw", "w", true).addToGroup(abs.group);else if (ast.pattern.type == _Wj_PatternType.Tuple) {
        var pattern = new _XT_PatTuple().addToGroup(abs.group);
        new _U8_Link(auxNodes[0].key, pattern.key, "n", "w").addToGroup(abs.group);
        new _U8_Link(auxNodes[1].key, pattern.key, "n", "e").addToGroup(abs.group);
        new _U8_Link(pattern.key, abs.key, "nw", "w", true).addToGroup(abs.group);
      }
      wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
      return new _V1_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _XV_Application) {
      var app = new _UN_App().addToGroup(group); //lhs

      var left = this.toGraph(ast.lhs, group);
      var der = new _V4_Der(left.prin.name).addToGroup(group);
      new _U8_Link(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

      var right = this.toGraph(ast.rhs, group);
      new _U8_Link(app.key, der.key, "w", "s").addToGroup(group);
      new _U8_Link(app.key, right.prin.key, "e", "s").addToGroup(group);
      return new _V1_Term(app, _V1_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _XW_Constant) {
      var wrapper = _Ut_BoxWrapper.create().addToGroup(group);

      var constant = new _VD_Const(ast.value).addToGroup(wrapper.box);
      new _U8_Link(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
      return new _V1_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _XX_BinaryOp) {
      var binop = new _VG_BinOp(ast.name).addToGroup(group);
      binop.subType = ast.type;
      var left = this.toGraph(ast.v1, group);
      var right = this.toGraph(ast.v2, group);
      new _U8_Link(binop.key, left.prin.key, "w", "s").addToGroup(group);
      new _U8_Link(binop.key, right.prin.key, "e", "s").addToGroup(group);
      return new _V1_Term(binop, _V1_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _Xb_UnaryOp) {
      var unop = new _Xc_UnOp(ast.name).addToGroup(group);
      unop.subType = ast.type;
      var box = this.toGraph(ast.v1, group);
      new _U8_Link(unop.key, box.prin.key, "n", "s").addToGroup(group);
      return new _V1_Term(unop, box.auxs);
    } else if (ast instanceof _Xe_IfThenElse) {
      var ifnode = new _Xf_If().addToGroup(group);
      var cond = this.toGraph(ast.cond, group);
      var t1 = this.toGraph(ast.t1, group);
      var t2 = this.toGraph(ast.t2, group);
      new _U8_Link(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
      new _U8_Link(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
      new _U8_Link(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
      return new _V1_Term(ifnode, _V1_Term.joinAuxs(_V1_Term.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
    } else if (ast instanceof _Xh_Recursion) {
      var p1 = ast.param; // recur term

      var wrapper = _Ut_BoxWrapper.create().addToGroup(group);

      wrapper.prin.delete();
      var recur = new _Xi_Recur().addToGroup(wrapper);
      wrapper.prin = recur;
      var box = this.toGraph(ast.body, wrapper.box);
      wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
      new _U8_Link(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
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
        auxNode1 = new _UY_Weak(p1).addToGroup(wrapper.box);
      }

      new _U8_Link(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
      return new _V1_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _Xk_Tuple) {
      var pair = new _Xl_Pair().addToGroup(group);
      var left = this.toGraph(ast.lhs, group);
      var right = this.toGraph(ast.rhs, group);
      new _U8_Link(pair.key, left.prin.key, "w", "s").addToGroup(group);
      new _U8_Link(pair.key, right.prin.key, "e", "s").addToGroup(group);
      return new _V1_Term(pair, _V1_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _Xn_ProvisionalConstant) {
      var term = this.toGraph(ast.term, group);
      var prov = new _VT_Prov().addToGroup(group);
      new _U8_Link(prov.key, term.prin.key, "n", "s").addToGroup(group);
      return new _V1_Term(prov, term.auxs);
    } else if (ast instanceof _Xo_Deprecation) {
      var term = this.toGraph(ast.term, group);
      var dep = new _UU_Dep().addToGroup(group);
      new _U8_Link(dep.key, term.prin.key, "n", "s").addToGroup(group);
      return new _V1_Term(dep, term.auxs);
    } else if (ast instanceof _Xp_Dereference) {
      var term = this.toGraph(ast.term, group);
      var deref = new _VA_Deref().addToGroup(group);
      new _U8_Link(deref.key, term.prin.key, "n", "s").addToGroup(group);
      return new _V1_Term(deref, term.auxs);
    } else if (ast instanceof _Xq_Change) {
      var param = ast.param;
      var delta = new _VP_Delta().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _Vc_Var(param).addToGroup(group);
      new _U8_Link(delta.key, v.key, "w", "s").addToGroup(group);
      new _U8_Link(delta.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _VL_Contract(aux.name).addToGroup(group);
          new _U8_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _U8_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _V1_Term(delta, auxs);
    } else if (ast instanceof _Xr_Assign) {
      var param = ast.param;
      var setn = new _Xs_Set().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _Vc_Var(param).addToGroup(group);
      new _U8_Link(setn.key, v.key, "w", "s").addToGroup(group);
      new _U8_Link(setn.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _VL_Contract(aux.name).addToGroup(group);
          new _U8_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _U8_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _V1_Term(setn, auxs);
    } else if (ast instanceof _Xu_Propagation) {
      var prop = new _V6_Prop().addToGroup(group);
      return new _V1_Term(prop, []);
    } else if (ast instanceof _Xv_GraphAbstraction) {
      var abs = new _Xw_GAbs().addToGroup(group);
      var box = this.toGraph(ast.term, group);
      new _U8_Link(abs.key, box.prin.key, "n", "s").addToGroup(group);
      return new _V1_Term(abs, box.auxs);
    }
  };

  var _W1_ = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node instanceof _Ug_Group) this.deleteVarNode(node);else if (node instanceof _Vc_Var) node.deleteAndPreserveOutLink();
    }
  };

  var _W2_ = function () {
    this.evaluating = true;
    this.hasUpdate = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var cell = this.graph.findNodeByKey(key);
        var evalToken = new _Vo_MachineToken(this);
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

  var _W3_ = function (a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  var _W4_ = function (tokens) {
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

  var _W5_ = function () {
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
  };

  var _W6_ = function (token) {
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
  };

  var _W7_ = function (token) {
    var dataStack = Array.from(token.dataStack).reverse();
    dataStack.push('□'); // the latest value is stored in the first element in the dataStack

    var data = dataStack[0]; // data consists of the last node and it's link

    if (data[0] === 'λ') {
      // abstraction
      var machine = this; // this means it doesn't return a simple value

      return function (source) {
        // create AST of the future abstract arguments
        var lexer = new _XN_Lexer(source + '\0');
        var parser = new _XP_Parser(lexer);
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

        var der = new _V4_Der(left.name).addToGroup(machine.graph.child);
        new _U8_Link(der.key, left.key, "n", "s").addToGroup(machine.graph.child); // create the rhs from the source AST

        var right = machine.toGraph(ast, machine.graph.child);
        var app = new _UN_App().addToGroup(machine.graph.child);
        new _U8_Link(app.key, der.key, "w", "s").addToGroup(machine.graph.child);
        new _U8_Link(app.key, right.prin.key, "e", "s").addToGroup(machine.graph.child);
        var term = new _V1_Term(app, _V1_Term.joinAuxs(leftAuxs, right.auxs, machine.graph.child));
        new _U8_Link(start.key, term.prin.key, "n", "s").addToGroup(machine.graph.child);
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
  };

  var _1_trampoline = function (res) {
    while (res && res.fn) {
      res = res.fn.apply(null, res.args);
    }
  };

  var _2_autoPlay = function (callback) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    __captured__scope_1_[0]++;

    _5_machine.setPlaying(true);

    var result;

    if (!_5_machine.isFinished()) {
      result = _5_machine.pass();
    }

    if (_5_machine.isFinished()) {
      if (typeof result === 'function') {
        return {
          fn: callback,
          args: [null, function () {
            _5_machine.setPlay(false);

            _5_machine.setPlaying(false); // can only receive one argument at a time so this work


            if (arguments.length !== 0) {
              result(arguments[0]);
            }

            _5_machine.setPlay(true);

            _5_machine.setFinished(false);

            if (!_5_machine.isPlaying()) {
              return _1_trampoline({
                fn: _2_autoPlay,
                args: callback
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
      if (_5_machine.isPlay()) {
        if (_W9_.__residual && __captured__scope_1_[0] > 125) {
          // set to 0 because up till now Prepack evaluated everything
          __captured__scope_1_[0] = 0;

          _W9_.__residual("void", _0_.bind(null), _1_trampoline, _2_autoPlay, callback);
        } else {
          return {
            fn: _2_autoPlay,
            args: [callback]
          };
        }
      } else {
        _5_machine.setPlaying(false);
      }
    }
  };

  var _ay_ = function (obj) {
    return typeof obj;
  };

  var _ZZ_ = function (obj) {
    return typeof obj;
  };

  var _Yu_ = function (obj) {
    return typeof obj;
  };

  var _ZU_ = function (obj) {
    return typeof obj;
  };

  var _ZW_ = function (obj) {
    return typeof obj;
  };

  var _Za_ = function (obj) {
    return typeof obj;
  };

  var _Zj_ = function (obj) {
    return typeof obj;
  };

  var _ZS_ = function (obj) {
    return typeof obj;
  };

  var _Ys_ = function (obj) {
    return typeof obj;
  };

  var _Zf_ = function (obj) {
    return typeof obj;
  };

  var _0_ = function (trampoline, autoPlay, callback) {
    return trampoline({
      fn: autoPlay,
      args: [callback]
    });
  };

  var __constructor = function () {};

  var _Ww_ = _$2_Object_46getPrototypeOf;

  var _6_graph = (__constructor.prototype = _Th_, new __constructor());

  _6_graph.key = 281;
  _6_graph.linkKey = 0;

  var _9_ = new _$3_Map();

  _6_graph.allNodes = _9_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ty_, _$4_Object_46defineProperty(_K_, "addToNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Tz_, _$4_Object_46defineProperty(_K_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U0_, _$4_Object_46defineProperty(_K_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U1_, _$4_Object_46defineProperty(_K_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U2_, _$4_Object_46defineProperty(_K_, "changeFrom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U3_, _$4_Object_46defineProperty(_K_, "changeTo", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U4_, _$4_Object_46defineProperty(_K_, "focus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U5_, _$4_Object_46defineProperty(_K_, "clearFocus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U6_, _$4_Object_46defineProperty(_K_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U7_, _$4_Object_46defineProperty(_K_, "toString", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5L_ = (__constructor.prototype = _K_, new __constructor());

  _5L_.from = "nd35";
  _5L_.to = "nd36";
  _5L_.fromPort = "n";
  _5L_.toPort = "s";
  _5L_.reverse = void 0;
  _5L_.colour = null;
  _5L_.penWidth = null;
  _5L_.graph = _6_graph;

  var _5X_ = (__constructor.prototype = _K_, new __constructor());

  _5X_.from = "nd36";
  _5X_.to = "nd39";
  _5X_.fromPort = "e";
  _5X_.toPort = "s";
  _5X_.reverse = void 0;
  _5X_.colour = null;
  _5X_.penWidth = null;
  _5X_.graph = _6_graph;

  var _5a_ = (__constructor.prototype = _K_, new __constructor());

  _5a_.from = "nd41";
  _5a_.to = "nd36";
  _5a_.fromPort = "nw";
  _5a_.toPort = "w";
  _5a_.reverse = true;
  _5a_.colour = null;
  _5a_.penWidth = null;
  _5a_.graph = _6_graph;

  var _5P_outLink = (__constructor.prototype = _K_, new __constructor());

  _5P_outLink.from = "nd39";
  _5P_outLink.to = "nd42";
  _5P_outLink.fromPort = "n";
  _5P_outLink.toPort = "s";
  _5P_outLink.reverse = void 0;
  _5P_outLink.colour = null;
  _5P_outLink.penWidth = null;
  _5P_outLink.graph = _6_graph;

  var _4p_ = (__constructor.prototype = _K_, new __constructor());

  _4p_.from = "nd44";
  _4p_.to = "nd35";
  _4p_.fromPort = "n";
  _4p_.toPort = "s";
  _4p_.reverse = void 0;
  _4p_.colour = null;
  _4p_.penWidth = null;
  _4p_.graph = _6_graph;

  var _4u_ = (__constructor.prototype = _K_, new __constructor());

  _4u_.from = "nd32";
  _4u_.to = "nd44";
  _4u_.fromPort = "w";
  _4u_.toPort = "s";
  _4u_.reverse = void 0;
  _4u_.colour = null;
  _4u_.penWidth = null;
  _4u_.graph = _6_graph;

  var _4y_ = (__constructor.prototype = _K_, new __constructor());

  _4y_.from = "nd32";
  _4y_.to = "nd45";
  _4y_.fromPort = "e";
  _4y_.toPort = "s";
  _4y_.reverse = void 0;
  _4y_.colour = null;
  _4y_.penWidth = null;
  _4y_.graph = _6_graph;

  var _4d_ = (__constructor.prototype = _K_, new __constructor());

  _4d_.from = "nd30";
  _4d_.to = "nd31";
  _4d_.fromPort = "n";
  _4d_.toPort = "s";
  _4d_.reverse = void 0;
  _4d_.colour = null;
  _4d_.penWidth = null;
  _4d_.graph = _6_graph;

  var _52_ = (__constructor.prototype = _K_, new __constructor());

  _52_.from = "nd31";
  _52_.to = "nd32";
  _52_.fromPort = "e";
  _52_.toPort = "s";
  _52_.reverse = void 0;
  _52_.colour = null;
  _52_.penWidth = null;
  _52_.graph = _6_graph;

  var _55_ = (__constructor.prototype = _K_, new __constructor());

  _55_.from = "nd48";
  _55_.to = "nd31";
  _55_.fromPort = "nw";
  _55_.toPort = "w";
  _55_.reverse = true;
  _55_.colour = null;
  _55_.penWidth = null;
  _55_.graph = _6_graph;

  var _4h_link = (__constructor.prototype = _K_, new __constructor());

  _4h_link.from = "nd42";
  _4h_link.to = "nd49";
  _4h_link.fromPort = "n";
  _4h_link.toPort = "s";
  _4h_link.reverse = void 0;
  _4h_link.colour = null;
  _4h_link.penWidth = null;
  _4h_link.graph = _6_graph;

  var _47_ = (__constructor.prototype = _K_, new __constructor());

  _47_.from = "nd51";
  _47_.to = "nd30";
  _47_.fromPort = "n";
  _47_.toPort = "s";
  _47_.reverse = void 0;
  _47_.colour = null;
  _47_.penWidth = null;
  _47_.graph = _6_graph;

  var _4C_ = (__constructor.prototype = _K_, new __constructor());

  _4C_.from = "nd27";
  _4C_.to = "nd51";
  _4C_.fromPort = "w";
  _4C_.toPort = "s";
  _4C_.reverse = void 0;
  _4C_.colour = null;
  _4C_.penWidth = null;
  _4C_.graph = _6_graph;

  var _4G_ = (__constructor.prototype = _K_, new __constructor());

  _4G_.from = "nd27";
  _4G_.to = "nd52";
  _4G_.fromPort = "e";
  _4G_.toPort = "s";
  _4G_.reverse = void 0;
  _4G_.colour = null;
  _4G_.penWidth = null;
  _4G_.graph = _6_graph;

  var _3v_ = (__constructor.prototype = _K_, new __constructor());

  _3v_.from = "nd25";
  _3v_.to = "nd26";
  _3v_.fromPort = "n";
  _3v_.toPort = "s";
  _3v_.reverse = void 0;
  _3v_.colour = null;
  _3v_.penWidth = null;
  _3v_.graph = _6_graph;

  var _4K_ = (__constructor.prototype = _K_, new __constructor());

  _4K_.from = "nd26";
  _4K_.to = "nd27";
  _4K_.fromPort = "e";
  _4K_.toPort = "s";
  _4K_.reverse = void 0;
  _4K_.colour = null;
  _4K_.penWidth = null;
  _4K_.graph = _6_graph;

  var _4N_ = (__constructor.prototype = _K_, new __constructor());

  _4N_.from = "nd55";
  _4N_.to = "nd26";
  _4N_.fromPort = "nw";
  _4N_.toPort = "w";
  _4N_.reverse = true;
  _4N_.colour = null;
  _4N_.penWidth = null;
  _4N_.graph = _6_graph;

  var _3z_ = (__constructor.prototype = _K_, new __constructor());

  _3z_.from = "nd49";
  _3z_.to = "nd56";
  _3z_.fromPort = "n";
  _3z_.toPort = "s";
  _3z_.reverse = void 0;
  _3z_.colour = null;
  _3z_.penWidth = null;
  _3z_.graph = _6_graph;

  var _3P_ = (__constructor.prototype = _K_, new __constructor());

  _3P_.from = "nd58";
  _3P_.to = "nd25";
  _3P_.fromPort = "n";
  _3P_.toPort = "s";
  _3P_.reverse = void 0;
  _3P_.colour = null;
  _3P_.penWidth = null;
  _3P_.graph = _6_graph;

  var _3U_ = (__constructor.prototype = _K_, new __constructor());

  _3U_.from = "nd22";
  _3U_.to = "nd58";
  _3U_.fromPort = "w";
  _3U_.toPort = "s";
  _3U_.reverse = void 0;
  _3U_.colour = null;
  _3U_.penWidth = null;
  _3U_.graph = _6_graph;

  var _3Y_ = (__constructor.prototype = _K_, new __constructor());

  _3Y_.from = "nd22";
  _3Y_.to = "nd59";
  _3Y_.fromPort = "e";
  _3Y_.toPort = "s";
  _3Y_.reverse = void 0;
  _3Y_.colour = null;
  _3Y_.penWidth = null;
  _3Y_.graph = _6_graph;

  var _3H_ = (__constructor.prototype = _K_, new __constructor());

  _3H_.from = "nd20";
  _3H_.to = "nd21";
  _3H_.fromPort = "n";
  _3H_.toPort = "s";
  _3H_.reverse = void 0;
  _3H_.colour = null;
  _3H_.penWidth = null;
  _3H_.graph = _6_graph;

  var _3c_ = (__constructor.prototype = _K_, new __constructor());

  _3c_.from = "nd21";
  _3c_.to = "nd22";
  _3c_.fromPort = "e";
  _3c_.toPort = "s";
  _3c_.reverse = void 0;
  _3c_.colour = null;
  _3c_.penWidth = null;
  _3c_.graph = _6_graph;

  var _3f_ = (__constructor.prototype = _K_, new __constructor());

  _3f_.from = "nd56";
  _3f_.to = "nd21";
  _3f_.fromPort = "nw";
  _3f_.toPort = "w";
  _3f_.reverse = true;
  _3f_.colour = null;
  _3f_.penWidth = null;
  _3f_.graph = _6_graph;

  var _2e_ = (__constructor.prototype = _K_, new __constructor());

  _2e_.from = "nd63";
  _2e_.to = "nd20";
  _2e_.fromPort = "n";
  _2e_.toPort = "s";
  _2e_.reverse = void 0;
  _2e_.colour = null;
  _2e_.penWidth = null;
  _2e_.graph = _6_graph;

  var _2j_ = (__constructor.prototype = _K_, new __constructor());

  _2j_.from = "nd64";
  _2j_.to = "nd67";
  _2j_.fromPort = "w";
  _2j_.toPort = "s";
  _2j_.reverse = void 0;
  _2j_.colour = null;
  _2j_.penWidth = null;
  _2j_.graph = _6_graph;

  var _2o_ = (__constructor.prototype = _K_, new __constructor());

  _2o_.from = "nd64";
  _2o_.to = "nd70";
  _2o_.fromPort = "e";
  _2o_.toPort = "s";
  _2o_.reverse = void 0;
  _2o_.colour = null;
  _2o_.penWidth = null;
  _2o_.graph = _6_graph;

  var _2r_ = (__constructor.prototype = _K_, new __constructor());

  _2r_.from = "nd17";
  _2r_.to = "nd63";
  _2r_.fromPort = "w";
  _2r_.toPort = "s";
  _2r_.reverse = void 0;
  _2r_.colour = null;
  _2r_.penWidth = null;
  _2r_.graph = _6_graph;

  var _2v_ = (__constructor.prototype = _K_, new __constructor());

  _2v_.from = "nd17";
  _2v_.to = "nd64";
  _2v_.fromPort = "e";
  _2v_.toPort = "s";
  _2v_.reverse = void 0;
  _2v_.colour = null;
  _2v_.penWidth = null;
  _2v_.graph = _6_graph;

  var _2S_ = (__constructor.prototype = _K_, new __constructor());

  _2S_.from = "nd15";
  _2S_.to = "nd16";
  _2S_.fromPort = "n";
  _2S_.toPort = "s";
  _2S_.reverse = void 0;
  _2S_.colour = null;
  _2S_.penWidth = null;
  _2S_.graph = _6_graph;

  var _2y_ = (__constructor.prototype = _K_, new __constructor());

  _2y_.from = "nd16";
  _2y_.to = "nd17";
  _2y_.fromPort = "e";
  _2y_.toPort = "s";
  _2y_.reverse = void 0;
  _2y_.colour = null;
  _2y_.penWidth = null;
  _2y_.graph = _6_graph;

  var _31_outLink = (__constructor.prototype = _K_, new __constructor());

  _31_outLink.from = "nd67";
  _31_outLink.to = "nd16";
  _31_outLink.fromPort = "nw";
  _31_outLink.toPort = "w";
  _31_outLink.reverse = true;
  _31_outLink.colour = null;
  _31_outLink.penWidth = null;
  _31_outLink.graph = _6_graph;

  var _2W_outLink = (__constructor.prototype = _K_, new __constructor());

  _2W_outLink.from = "nd70";
  _2W_outLink.to = "nd74";
  _2W_outLink.fromPort = "n";
  _2W_outLink.toPort = "s";
  _2W_outLink.reverse = void 0;
  _2W_outLink.colour = null;
  _2W_outLink.penWidth = null;
  _2W_outLink.graph = _6_graph;

  var _1u_ = (__constructor.prototype = _K_, new __constructor());

  _1u_.from = "nd76";
  _1u_.to = "nd15";
  _1u_.fromPort = "n";
  _1u_.toPort = "s";
  _1u_.reverse = void 0;
  _1u_.colour = null;
  _1u_.penWidth = null;
  _1u_.graph = _6_graph;

  var _9Y_ = (__constructor.prototype = _K_, new __constructor());

  _9Y_.from = "nd89";
  _9Y_.to = "nd90";
  _9Y_.fromPort = "n";
  _9Y_.toPort = "s";
  _9Y_.reverse = void 0;
  _9Y_.colour = null;
  _9Y_.penWidth = null;
  _9Y_.graph = _6_graph;

  var _8W_ = (__constructor.prototype = _K_, new __constructor());

  _8W_.from = "nd83";
  _8W_.to = "nd86";
  _8W_.fromPort = "w";
  _8W_.toPort = "s";
  _8W_.reverse = void 0;
  _8W_.colour = null;
  _8W_.penWidth = null;
  _8W_.graph = _6_graph;

  var _8a_ = (__constructor.prototype = _K_, new __constructor());

  _8a_.from = "nd83";
  _8a_.to = "nd89";
  _8a_.fromPort = "e";
  _8a_.toPort = "s";
  _8a_.reverse = void 0;
  _8a_.colour = null;
  _8a_.penWidth = null;
  _8a_.graph = _6_graph;

  var _8e_ = (__constructor.prototype = _K_, new __constructor());

  _8e_.from = "nd93";
  _8e_.to = "nd83";
  _8e_.fromPort = "n";
  _8e_.toPort = "s";
  _8e_.reverse = void 0;
  _8e_.colour = null;
  _8e_.penWidth = null;
  _8e_.graph = _6_graph;

  var _Ac_ = (__constructor.prototype = _K_, new __constructor());

  _Ac_.from = "nd102";
  _Ac_.to = "nd107";
  _Ac_.fromPort = "e";
  _Ac_.toPort = "s";
  _Ac_.reverse = void 0;
  _Ac_.colour = null;
  _Ac_.penWidth = null;
  _Ac_.graph = _6_graph;

  var _AQ_ = (__constructor.prototype = _K_, new __constructor());

  _AQ_.from = "nd100";
  _AQ_.to = "nd101";
  _AQ_.fromPort = "n";
  _AQ_.toPort = "s";
  _AQ_.reverse = void 0;
  _AQ_.colour = null;
  _AQ_.penWidth = null;
  _AQ_.graph = _6_graph;

  var _Ag_ = (__constructor.prototype = _K_, new __constructor());

  _Ag_.from = "nd101";
  _Ag_.to = "nd102";
  _Ag_.fromPort = "e";
  _Ag_.toPort = "s";
  _Ag_.reverse = void 0;
  _Ag_.colour = null;
  _Ag_.penWidth = null;
  _Ag_.graph = _6_graph;

  var _Aj_outLink = (__constructor.prototype = _K_, new __constructor());

  _Aj_outLink.from = "nd102";
  _Aj_outLink.to = "nd101";
  _Aj_outLink.fromPort = "w";
  _Aj_outLink.toPort = "w";
  _Aj_outLink.reverse = true;
  _Aj_outLink.colour = null;
  _Aj_outLink.penWidth = null;
  _Aj_outLink.graph = _6_graph;

  var _AU_outLink = (__constructor.prototype = _K_, new __constructor());

  _AU_outLink.from = "nd107";
  _AU_outLink.to = "nd110";
  _AU_outLink.fromPort = "n";
  _AU_outLink.toPort = "s";
  _AU_outLink.reverse = void 0;
  _AU_outLink.colour = null;
  _AU_outLink.penWidth = null;
  _AU_outLink.graph = _6_graph;

  var _A2_ = (__constructor.prototype = _K_, new __constructor());

  _A2_.from = "nd96";
  _A2_.to = "nd97";
  _A2_.fromPort = "n";
  _A2_.toPort = "s";
  _A2_.reverse = void 0;
  _A2_.colour = null;
  _A2_.penWidth = null;
  _A2_.graph = _6_graph;

  var _AA_ = (__constructor.prototype = _K_, new __constructor());

  _AA_.from = "nd97";
  _AA_.to = "nd100";
  _AA_.fromPort = "e";
  _AA_.toPort = "s";
  _AA_.reverse = void 0;
  _AA_.colour = null;
  _AA_.penWidth = null;
  _AA_.graph = _6_graph;

  var _AE_ = (__constructor.prototype = _K_, new __constructor());

  _AE_.from = "nd110";
  _AE_.to = "nd97";
  _AE_.fromPort = "nw";
  _AE_.toPort = "w";
  _AE_.reverse = true;
  _AE_.colour = null;
  _AE_.penWidth = null;
  _AE_.graph = _6_graph;

  var _8i_ = (__constructor.prototype = _K_, new __constructor());

  _8i_.from = "nd82";
  _8i_.to = "nd93";
  _8i_.fromPort = "w";
  _8i_.toPort = "s";
  _8i_.reverse = void 0;
  _8i_.colour = null;
  _8i_.penWidth = null;
  _8i_.graph = _6_graph;

  var _8m_ = (__constructor.prototype = _K_, new __constructor());

  _8m_.from = "nd82";
  _8m_.to = "nd96";
  _8m_.fromPort = "e";
  _8m_.toPort = "s";
  _8m_.reverse = void 0;
  _8m_.colour = null;
  _8m_.penWidth = null;
  _8m_.graph = _6_graph;

  var _8q_ = (__constructor.prototype = _K_, new __constructor());

  _8q_.from = "nd114";
  _8q_.to = "nd82";
  _8q_.fromPort = "n";
  _8q_.toPort = "s";
  _8q_.reverse = void 0;
  _8q_.colour = null;
  _8q_.penWidth = null;
  _8q_.graph = _6_graph;

  var _8u_ = (__constructor.prototype = _K_, new __constructor());

  _8u_.from = "nd81";
  _8u_.to = "nd114";
  _8u_.fromPort = "w";
  _8u_.toPort = "s";
  _8u_.reverse = void 0;
  _8u_.colour = null;
  _8u_.penWidth = null;
  _8u_.graph = _6_graph;

  var _8K_ = (__constructor.prototype = _K_, new __constructor());

  _8K_.from = "nd79";
  _8K_.to = "nd80";
  _8K_.fromPort = "n";
  _8K_.toPort = "s";
  _8K_.reverse = void 0;
  _8K_.colour = null;
  _8K_.penWidth = null;
  _8K_.graph = _6_graph;

  var _8y_ = (__constructor.prototype = _K_, new __constructor());

  _8y_.from = "nd80";
  _8y_.to = "nd81";
  _8y_.fromPort = "e";
  _8y_.toPort = "s";
  _8y_.reverse = void 0;
  _8y_.colour = null;
  _8y_.penWidth = null;
  _8y_.graph = _6_graph;

  var _91_outLink = (__constructor.prototype = _K_, new __constructor());

  _91_outLink.from = "nd81";
  _91_outLink.to = "nd80";
  _91_outLink.fromPort = "e";
  _91_outLink.toPort = "w";
  _91_outLink.reverse = true;
  _91_outLink.colour = null;
  _91_outLink.penWidth = null;
  _91_outLink.graph = _6_graph;

  var _8O_outLink = (__constructor.prototype = _K_, new __constructor());

  _8O_outLink.from = "nd86";
  _8O_outLink.to = "nd118";
  _8O_outLink.fromPort = "n";
  _8O_outLink.toPort = "s";
  _8O_outLink.reverse = void 0;
  _8O_outLink.colour = null;
  _8O_outLink.penWidth = null;
  _8O_outLink.graph = _6_graph;

  var _1z_ = (__constructor.prototype = _K_, new __constructor());

  _1z_.from = "nd12";
  _1z_.to = "nd76";
  _1z_.fromPort = "w";
  _1z_.toPort = "s";
  _1z_.reverse = void 0;
  _1z_.colour = null;
  _1z_.penWidth = null;
  _1z_.graph = _6_graph;

  var _23_ = (__constructor.prototype = _K_, new __constructor());

  _23_.from = "nd12";
  _23_.to = "nd79";
  _23_.fromPort = "e";
  _23_.toPort = "s";
  _23_.reverse = void 0;
  _23_.colour = null;
  _23_.penWidth = null;
  _23_.graph = _6_graph;

  var _1i_ = (__constructor.prototype = _K_, new __constructor());

  _1i_.from = "nd10";
  _1i_.to = "nd11";
  _1i_.fromPort = "n";
  _1i_.toPort = "s";
  _1i_.reverse = void 0;
  _1i_.colour = null;
  _1i_.penWidth = null;
  _1i_.graph = _6_graph;

  var _27_ = (__constructor.prototype = _K_, new __constructor());

  _27_.from = "nd11";
  _27_.to = "nd12";
  _27_.fromPort = "e";
  _27_.toPort = "s";
  _27_.reverse = void 0;
  _27_.colour = null;
  _27_.penWidth = null;
  _27_.graph = _6_graph;

  var _2A_ = (__constructor.prototype = _K_, new __constructor());

  _2A_.from = "nd74";
  _2A_.to = "nd11";
  _2A_.fromPort = "nw";
  _2A_.toPort = "w";
  _2A_.reverse = true;
  _2A_.colour = null;
  _2A_.penWidth = null;
  _2A_.graph = _6_graph;

  var _1m_link = (__constructor.prototype = _K_, new __constructor());

  _1m_link.from = "nd118";
  _1m_link.to = "nd121";
  _1m_link.fromPort = "n";
  _1m_link.toPort = "s";
  _1m_link.reverse = void 0;
  _1m_link.colour = null;
  _1m_link.penWidth = null;
  _1m_link.graph = _6_graph;

  var _F_link = (__constructor.prototype = _K_, new __constructor());

  _F_link.from = "nd123";
  _F_link.to = "nd10";
  _F_link.fromPort = "n";
  _F_link.toPort = "s";
  _F_link.reverse = void 0;
  _F_link.colour = null;
  _F_link.penWidth = null;
  _F_link.graph = _6_graph;

  var _C6_link = (__constructor.prototype = _K_, new __constructor());

  _C6_link.from = "nd132";
  _C6_link.to = "nd133";
  _C6_link.fromPort = "n";
  _C6_link.toPort = "s";
  _C6_link.reverse = void 0;
  _C6_link.colour = null;
  _C6_link.penWidth = null;
  _C6_link.graph = _6_graph;

  var _Ig_link = (__constructor.prototype = _K_, new __constructor());

  _Ig_link.from = "nd148";
  _Ig_link.to = "nd149";
  _Ig_link.fromPort = "n";
  _Ig_link.toPort = "s";
  _Ig_link.reverse = void 0;
  _Ig_link.colour = null;
  _Ig_link.penWidth = null;
  _Ig_link.graph = _6_graph;

  var _11_link = (__constructor.prototype = _K_, new __constructor());

  _11_link.from = "nd145";
  _11_link.to = "nd148";
  _11_link.fromPort = "w";
  _11_link.toPort = "s";
  _11_link.reverse = void 0;
  _11_link.colour = null;
  _11_link.penWidth = null;
  _11_link.graph = _6_graph;

  var _16_link = (__constructor.prototype = _K_, new __constructor());

  _16_link.from = "nd145";
  _16_link.to = "nd153";
  _16_link.fromPort = "e";
  _16_link.toPort = "s";
  _16_link.reverse = void 0;
  _16_link.colour = null;
  _16_link.penWidth = null;
  _16_link.graph = _6_graph;

  var _19_link = (__constructor.prototype = _K_, new __constructor());

  _19_link.from = "nd273";
  _19_link.to = "nd145";
  _19_link.fromPort = "e";
  _19_link.toPort = "s";
  _19_link.reverse = void 0;
  _19_link.colour = null;
  _19_link.penWidth = null;
  _19_link.graph = _6_graph;

  var _1C_otherNextLink = (__constructor.prototype = _K_, new __constructor());

  _1C_otherNextLink.from = "nd156";
  _1C_otherNextLink.to = "nd164";
  _1C_otherNextLink.fromPort = "n";
  _1C_otherNextLink.toPort = "s";
  _1C_otherNextLink.reverse = false;
  _1C_otherNextLink.colour = null;
  _1C_otherNextLink.penWidth = null;
  _1C_otherNextLink.graph = _6_graph;

  var _x_link = (__constructor.prototype = _K_, new __constructor());

  _x_link.from = "nd153";
  _x_link.to = "nd216";
  _x_link.fromPort = "n";
  _x_link.toPort = "s";
  _x_link.reverse = false;
  _x_link.colour = null;
  _x_link.penWidth = null;
  _x_link.graph = _6_graph;

  var _CU_link = (__constructor.prototype = _K_, new __constructor());

  _CU_link.from = "nd164";
  _CU_link.to = "nd165";
  _CU_link.fromPort = "n";
  _CU_link.toPort = "s";
  _CU_link.reverse = void 0;
  _CU_link.colour = null;
  _CU_link.penWidth = null;
  _CU_link.graph = _6_graph;

  var _L_link = (__constructor.prototype = _K_, new __constructor());

  _L_link.from = "nd7";
  _L_link.to = "nd123";
  _L_link.fromPort = "w";
  _L_link.toPort = "s";
  _L_link.reverse = void 0;
  _L_link.colour = null;
  _L_link.penWidth = null;
  _L_link.graph = _6_graph;

  var _P_link = (__constructor.prototype = _K_, new __constructor());

  _P_link.from = "nd121";
  _P_link.to = "nd168";
  _P_link.fromPort = "n";
  _P_link.toPort = "s";
  _P_link.reverse = void 0;
  _P_link.colour = null;
  _P_link.penWidth = null;
  _P_link.graph = _6_graph;

  var _U_link = (__constructor.prototype = _K_, new __constructor());

  _U_link.from = "nd1";
  _U_link.to = "nd7";
  _U_link.fromPort = "n";
  _U_link.toPort = "s";
  _U_link.reverse = void 0;
  _U_link.colour = null;
  _U_link.penWidth = null;
  _U_link.graph = _6_graph;

  var _Y_link = (__constructor.prototype = _K_, new __constructor());

  _Y_link.from = "nd168";
  _Y_link.to = "nd235";
  _Y_link.fromPort = "n";
  _Y_link.toPort = "s";
  _Y_link.reverse = false;
  _Y_link.colour = null;
  _Y_link.penWidth = null;
  _Y_link.graph = _6_graph;

  var _1K_otherNextLink = (__constructor.prototype = _K_, new __constructor());

  _1K_otherNextLink.from = "nd196";
  _1K_otherNextLink.to = "nd279";
  _1K_otherNextLink.fromPort = "n";
  _1K_otherNextLink.toPort = "s";
  _1K_otherNextLink.reverse = false;
  _1K_otherNextLink.colour = null;
  _1K_otherNextLink.penWidth = null;
  _1K_otherNextLink.graph = _6_graph;

  var _p_link = (__constructor.prototype = _K_, new __constructor());

  _p_link.from = "nd275";
  _p_link.to = "nd216";
  _p_link.fromPort = "n";
  _p_link.toPort = "s";
  _p_link.reverse = void 0;
  _p_link.colour = null;
  _p_link.penWidth = null;
  _p_link.graph = _6_graph;

  var _1H_i = (__constructor.prototype = _K_, new __constructor());

  _1H_i.from = "nd7";
  _1H_i.to = "nd216";
  _1H_i.fromPort = "e";
  _1H_i.toPort = "s";
  _1H_i.reverse = void 0;
  _1H_i.colour = null;
  _1H_i.penWidth = null;
  _1H_i.graph = _6_graph;

  var _u_link = (__constructor.prototype = _K_, new __constructor());

  _u_link.from = "nd216";
  _u_link.to = "nd273";
  _u_link.fromPort = "n";
  _u_link.toPort = "s";
  _u_link.reverse = false;
  _u_link.colour = null;
  _u_link.penWidth = null;
  _u_link.graph = _6_graph;

  var _d_link = (__constructor.prototype = _K_, new __constructor());

  _d_link.from = "nd276";
  _d_link.to = "nd132";
  _d_link.fromPort = "n";
  _d_link.toPort = "s";
  _d_link.reverse = false;
  _d_link.colour = null;
  _d_link.penWidth = null;
  _d_link.graph = _6_graph;

  var _GO_newLink = (__constructor.prototype = _K_, new __constructor());

  _GO_newLink.from = "nd256";
  _GO_newLink.to = "nd255";
  _GO_newLink.fromPort = "nw";
  _GO_newLink.toPort = "w";
  _GO_newLink.reverse = true;
  _GO_newLink.colour = null;
  _GO_newLink.penWidth = null;
  _GO_newLink.graph = _6_graph;

  var _G8_newLink = (__constructor.prototype = _K_, new __constructor());

  _G8_newLink.from = "nd253";
  _G8_newLink.to = "nd255";
  _G8_newLink.fromPort = "n";
  _G8_newLink.toPort = "s";
  _G8_newLink.reverse = void 0;
  _G8_newLink.colour = null;
  _G8_newLink.penWidth = null;
  _G8_newLink.graph = _6_graph;

  var _GC_newLink = (__constructor.prototype = _K_, new __constructor());

  _GC_newLink.from = "nd255";
  _GC_newLink.to = "nd257";
  _GC_newLink.fromPort = "e";
  _GC_newLink.toPort = "s";
  _GC_newLink.reverse = void 0;
  _GC_newLink.colour = null;
  _GC_newLink.penWidth = null;
  _GC_newLink.graph = _6_graph;

  var _FE_newLink = (__constructor.prototype = _K_, new __constructor());

  _FE_newLink.from = "nd258";
  _FE_newLink.to = "nd253";
  _FE_newLink.fromPort = "n";
  _FE_newLink.toPort = "s";
  _FE_newLink.reverse = void 0;
  _FE_newLink.colour = null;
  _FE_newLink.penWidth = null;
  _FE_newLink.graph = _6_graph;

  var _FJ_newLink = (__constructor.prototype = _K_, new __constructor());

  _FJ_newLink.from = "nd261";
  _FJ_newLink.to = "nd262";
  _FJ_newLink.fromPort = "w";
  _FJ_newLink.toPort = "s";
  _FJ_newLink.reverse = void 0;
  _FJ_newLink.colour = null;
  _FJ_newLink.penWidth = null;
  _FJ_newLink.graph = _6_graph;

  var _FN_newLink = (__constructor.prototype = _K_, new __constructor());

  _FN_newLink.from = "nd263";
  _FN_newLink.to = "nd261";
  _FN_newLink.fromPort = "n";
  _FN_newLink.toPort = "s";
  _FN_newLink.reverse = void 0;
  _FN_newLink.colour = null;
  _FN_newLink.penWidth = null;
  _FN_newLink.graph = _6_graph;

  var _FR_newLink = (__constructor.prototype = _K_, new __constructor());

  _FR_newLink.from = "nd260";
  _FR_newLink.to = "nd263";
  _FR_newLink.fromPort = "w";
  _FR_newLink.toPort = "s";
  _FR_newLink.reverse = void 0;
  _FR_newLink.colour = null;
  _FR_newLink.penWidth = null;
  _FR_newLink.graph = _6_graph;

  var _FU_newLink = (__constructor.prototype = _K_, new __constructor());

  _FU_newLink.from = "nd259";
  _FU_newLink.to = "nd260";
  _FU_newLink.fromPort = "e";
  _FU_newLink.toPort = "s";
  _FU_newLink.reverse = void 0;
  _FU_newLink.colour = null;
  _FU_newLink.penWidth = null;
  _FU_newLink.graph = _6_graph;

  var _FY_newLink = (__constructor.prototype = _K_, new __constructor());

  _FY_newLink.from = "nd261";
  _FY_newLink.to = "nd264";
  _FY_newLink.fromPort = "e";
  _FY_newLink.toPort = "s";
  _FY_newLink.reverse = void 0;
  _FY_newLink.colour = null;
  _FY_newLink.penWidth = null;
  _FY_newLink.graph = _6_graph;

  var _Fb_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fb_newLink.from = "nd259";
  _Fb_newLink.to = "nd264";
  _Fb_newLink.fromPort = "w";
  _Fb_newLink.toPort = "s";
  _Fb_newLink.reverse = void 0;
  _Fb_newLink.colour = null;
  _Fb_newLink.penWidth = null;
  _Fb_newLink.graph = _6_graph;

  var _Fd_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fd_newLink.from = "nd251";
  _Fd_newLink.to = "nd258";
  _Fd_newLink.fromPort = "w";
  _Fd_newLink.toPort = "s";
  _Fd_newLink.reverse = void 0;
  _Fd_newLink.colour = null;
  _Fd_newLink.penWidth = null;
  _Fd_newLink.graph = _6_graph;

  var _Fh_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fh_newLink.from = "nd251";
  _Fh_newLink.to = "nd259";
  _Fh_newLink.fromPort = "e";
  _Fh_newLink.toPort = "s";
  _Fh_newLink.reverse = void 0;
  _Fh_newLink.colour = null;
  _Fh_newLink.penWidth = null;
  _Fh_newLink.graph = _6_graph;

  var _Fj_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fj_newLink.from = "nd264";
  _Fj_newLink.to = "nd265";
  _Fj_newLink.fromPort = "n";
  _Fj_newLink.toPort = "s";
  _Fj_newLink.reverse = void 0;
  _Fj_newLink.colour = null;
  _Fj_newLink.penWidth = null;
  _Fj_newLink.graph = _6_graph;

  var _Fn_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fn_newLink.from = "nd257";
  _Fn_newLink.to = "nd265";
  _Fn_newLink.fromPort = "n";
  _Fn_newLink.toPort = "s";
  _Fn_newLink.reverse = void 0;
  _Fn_newLink.colour = null;
  _Fn_newLink.penWidth = null;
  _Fn_newLink.graph = _6_graph;

  var _Fq_newLink = (__constructor.prototype = _K_, new __constructor());

  _Fq_newLink.from = "nd250";
  _Fq_newLink.to = "nd251";
  _Fq_newLink.fromPort = "e";
  _Fq_newLink.toPort = "s";
  _Fq_newLink.reverse = void 0;
  _Fq_newLink.colour = null;
  _Fq_newLink.penWidth = null;
  _Fq_newLink.graph = _6_graph;

  var _Ft_newLink = (__constructor.prototype = _K_, new __constructor());

  _Ft_newLink.from = "nd265";
  _Ft_newLink.to = "nd250";
  _Ft_newLink.fromPort = "nw";
  _Ft_newLink.toPort = "w";
  _Ft_newLink.reverse = true;
  _Ft_newLink.colour = null;
  _Ft_newLink.penWidth = null;
  _Ft_newLink.graph = _6_graph;

  var _Es_newLink = (__constructor.prototype = _K_, new __constructor());

  _Es_newLink.from = "nd248";
  _Es_newLink.to = "nd250";
  _Es_newLink.fromPort = "n";
  _Es_newLink.toPort = "s";
  _Es_newLink.reverse = void 0;
  _Es_newLink.colour = null;
  _Es_newLink.penWidth = null;
  _Es_newLink.graph = _6_graph;

  var _Ew_newLink = (__constructor.prototype = _K_, new __constructor());

  _Ew_newLink.from = "nd262";
  _Ew_newLink.to = "nd266";
  _Ew_newLink.fromPort = "n";
  _Ew_newLink.toPort = "s";
  _Ew_newLink.reverse = void 0;
  _Ew_newLink.colour = null;
  _Ew_newLink.penWidth = null;
  _Ew_newLink.graph = _6_graph;

  var _F0_newLink = (__constructor.prototype = _K_, new __constructor());

  _F0_newLink.from = "nd260";
  _F0_newLink.to = "nd267";
  _F0_newLink.fromPort = "e";
  _F0_newLink.toPort = "s";
  _F0_newLink.reverse = void 0;
  _F0_newLink.colour = null;
  _F0_newLink.penWidth = null;
  _F0_newLink.graph = _6_graph;

  var _EO_newLink = (__constructor.prototype = _K_, new __constructor());

  _EO_newLink.from = "nd268";
  _EO_newLink.to = "nd248";
  _EO_newLink.fromPort = "n";
  _EO_newLink.toPort = "s";
  _EO_newLink.reverse = void 0;
  _EO_newLink.colour = null;
  _EO_newLink.penWidth = null;
  _EO_newLink.graph = _6_graph;

  var _ET_newLink = (__constructor.prototype = _K_, new __constructor());

  _ET_newLink.from = "nd246";
  _ET_newLink.to = "nd268";
  _ET_newLink.fromPort = "w";
  _ET_newLink.toPort = "s";
  _ET_newLink.reverse = void 0;
  _ET_newLink.colour = null;
  _ET_newLink.penWidth = null;
  _ET_newLink.graph = _6_graph;

  var _EX_newLink = (__constructor.prototype = _K_, new __constructor());

  _EX_newLink.from = "nd246";
  _EX_newLink.to = "nd269";
  _EX_newLink.fromPort = "e";
  _EX_newLink.toPort = "s";
  _EX_newLink.reverse = void 0;
  _EX_newLink.colour = null;
  _EX_newLink.penWidth = null;
  _EX_newLink.graph = _6_graph;

  var _EZ_newLink = (__constructor.prototype = _K_, new __constructor());

  _EZ_newLink.from = "nd245";
  _EZ_newLink.to = "nd246";
  _EZ_newLink.fromPort = "e";
  _EZ_newLink.toPort = "s";
  _EZ_newLink.reverse = void 0;
  _EZ_newLink.colour = null;
  _EZ_newLink.penWidth = null;
  _EZ_newLink.graph = _6_graph;

  var _Ec_newLink = (__constructor.prototype = _K_, new __constructor());

  _Ec_newLink.from = "nd267";
  _Ec_newLink.to = "nd245";
  _Ec_newLink.fromPort = "nw";
  _Ec_newLink.toPort = "w";
  _Ec_newLink.reverse = true;
  _Ec_newLink.colour = null;
  _Ec_newLink.penWidth = null;
  _Ec_newLink.graph = _6_graph;

  var _E2_newLink = (__constructor.prototype = _K_, new __constructor());

  _E2_newLink.from = "nd243";
  _E2_newLink.to = "nd245";
  _E2_newLink.fromPort = "n";
  _E2_newLink.toPort = "s";
  _E2_newLink.reverse = void 0;
  _E2_newLink.colour = null;
  _E2_newLink.penWidth = null;
  _E2_newLink.graph = _6_graph;

  var _E6_newLink = (__constructor.prototype = _K_, new __constructor());

  _E6_newLink.from = "nd266";
  _E6_newLink.to = "nd270";
  _E6_newLink.fromPort = "n";
  _E6_newLink.toPort = "s";
  _E6_newLink.reverse = void 0;
  _E6_newLink.colour = null;
  _E6_newLink.penWidth = null;
  _E6_newLink.graph = _6_graph;

  var _EA_newLink = (__constructor.prototype = _K_, new __constructor());

  _EA_newLink.from = "nd269";
  _EA_newLink.to = "nd271";
  _EA_newLink.fromPort = "n";
  _EA_newLink.toPort = "s";
  _EA_newLink.reverse = void 0;
  _EA_newLink.colour = null;
  _EA_newLink.penWidth = null;
  _EA_newLink.graph = _6_graph;

  var _Dm_newLink = (__constructor.prototype = _K_, new __constructor());

  _Dm_newLink.from = "nd241";
  _Dm_newLink.to = "nd243";
  _Dm_newLink.fromPort = "e";
  _Dm_newLink.toPort = "s";
  _Dm_newLink.reverse = void 0;
  _Dm_newLink.colour = null;
  _Dm_newLink.penWidth = null;
  _Dm_newLink.graph = _6_graph;

  var _Dq_newLink = (__constructor.prototype = _K_, new __constructor());

  _Dq_newLink.from = "nd270";
  _Dq_newLink.to = "nd241";
  _Dq_newLink.fromPort = "nw";
  _Dq_newLink.toPort = "w";
  _Dq_newLink.reverse = true;
  _Dq_newLink.colour = null;
  _Dq_newLink.penWidth = null;
  _Dq_newLink.graph = _6_graph;

  var _DU_newLink = (__constructor.prototype = _K_, new __constructor());

  _DU_newLink.from = "nd239";
  _DU_newLink.to = "nd241";
  _DU_newLink.fromPort = "n";
  _DU_newLink.toPort = "s";
  _DU_newLink.reverse = void 0;
  _DU_newLink.colour = null;
  _DU_newLink.penWidth = null;
  _DU_newLink.graph = _6_graph;

  var _DY_newLink = (__constructor.prototype = _K_, new __constructor());

  _DY_newLink.from = "nd271";
  _DY_newLink.to = "nd272";
  _DY_newLink.fromPort = "n";
  _DY_newLink.toPort = "s";
  _DY_newLink.reverse = void 0;
  _DY_newLink.colour = null;
  _DY_newLink.penWidth = null;
  _DY_newLink.graph = _6_graph;

  var _DE_newLink = (__constructor.prototype = _K_, new __constructor());

  _DE_newLink.from = "nd237";
  _DE_newLink.to = "nd239";
  _DE_newLink.fromPort = "e";
  _DE_newLink.toPort = "s";
  _DE_newLink.reverse = void 0;
  _DE_newLink.colour = null;
  _DE_newLink.penWidth = null;
  _DE_newLink.graph = _6_graph;

  var _DI_newLink = (__constructor.prototype = _K_, new __constructor());

  _DI_newLink.from = "nd272";
  _DI_newLink.to = "nd237";
  _DI_newLink.fromPort = "nw";
  _DI_newLink.toPort = "w";
  _DI_newLink.reverse = true;
  _DI_newLink.colour = null;
  _DI_newLink.penWidth = null;
  _DI_newLink.graph = _6_graph;

  var _D0_newLink = (__constructor.prototype = _K_, new __constructor());

  _D0_newLink.from = "nd235";
  _D0_newLink.to = "nd237";
  _D0_newLink.fromPort = "n";
  _D0_newLink.toPort = "s";
  _D0_newLink.reverse = void 0;
  _D0_newLink.colour = null;
  _D0_newLink.penWidth = null;
  _D0_newLink.graph = _6_graph;

  var _i_link = (__constructor.prototype = _K_, new __constructor());

  _i_link.from = "nd273";
  _i_link.to = "nd274";
  _i_link.fromPort = "w";
  _i_link.toPort = "s";
  _i_link.reverse = void 0;
  _i_link.colour = "red";
  _i_link.penWidth = "20";
  _i_link.graph = _6_graph;

  var _JQ_ = (__constructor.prototype = _K_, new __constructor());

  _JQ_.from = "nd279";
  _JQ_.to = "nd280";
  _JQ_.fromPort = "n";
  _JQ_.toPort = "s";
  _JQ_.reverse = void 0;
  _JQ_.colour = null;
  _JQ_.penWidth = null;
  _JQ_.graph = _6_graph;
  var _Tf_ = [_5L_, _5X_, _5a_, _5P_outLink, _4p_, _4u_, _4y_, _4d_, _52_, _55_, _4h_link, _47_, _4C_, _4G_, _3v_, _4K_, _4N_, _3z_, _3P_, _3U_, _3Y_, _3H_, _3c_, _3f_, _2e_, _2j_, _2o_, _2r_, _2v_, _2S_, _2y_, _31_outLink, _2W_outLink, _1u_, _9Y_, _8W_, _8a_, _8e_, _Ac_, _AQ_, _Ag_, _Aj_outLink, _AU_outLink, _A2_, _AA_, _AE_, _8i_, _8m_, _8q_, _8u_, _8K_, _8y_, _91_outLink, _8O_outLink, _1z_, _23_, _1i_, _27_, _2A_, _1m_link, _F_link, _C6_link, _Ig_link, _11_link, _16_link, _19_link, _1C_otherNextLink, _x_link, _CU_link, _L_link, _P_link, _U_link, _Y_link, _1K_otherNextLink, _p_link, _1H_i, _u_link, _d_link, _GO_newLink, _G8_newLink, _GC_newLink, _FE_newLink, _FJ_newLink, _FN_newLink, _FR_newLink, _FU_newLink, _FY_newLink, _Fb_newLink, _Fd_newLink, _Fh_newLink, _Fj_newLink, _Fn_newLink, _Fq_newLink, _Ft_newLink, _Es_newLink, _Ew_newLink, _F0_newLink, _EO_newLink, _ET_newLink, _EX_newLink, _EZ_newLink, _Ec_newLink, _E2_newLink, _E6_newLink, _EA_newLink, _Dm_newLink, _Dq_newLink, _DU_newLink, _DY_newLink, _DE_newLink, _DI_newLink, _D0_newLink, _i_link, _JQ_,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
  _Tf_.length = 114;
  _6_graph.allLinks = _Tf_;
  var _WB_ = {
    isNumber: _Wn_isNumber,
    graph: _6_graph
  };

  var _1X_ = (__constructor.prototype = _1Y_, new __constructor());

  _U9_Start.prototype = _1X_;

  _$5_Object_46setPrototypeOf(_U9_Start, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _U9_Start, _$4_Object_46defineProperty(_1X_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _WC_CompData = {
    EMPTY: "-",
    PROMPT: "*",
    LAMBDA: "\u03BB",
    R: "@",
    UNIT: "\u2022",
    IF0: "if0",
    IF1: "if1",
    PL: "L",
    PR: "R",
    PE: "P"
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UA_, _$4_Object_46defineProperty(_1X_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UB_, _$4_Object_46defineProperty(_1X_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1R_fromNode = (__constructor.prototype = _1X_, new __constructor());

  _1R_fromNode.key = "nd1";
  _1R_fromNode.shape = "point";
  _1R_fromNode.text = "";
  _1R_fromNode.colour = "black";
  _1R_fromNode.name = void 0;
  _1R_fromNode.graph = _6_graph;
  _1R_fromNode.width = null;
  _1R_fromNode.height = null;
  var _1V_ = [_U_link,,];
  _1V_.length = 1;
  _1R_fromNode.links = _1V_;

  _9_.set("nd1", _1R_fromNode);

  var _1e_ = (__constructor.prototype = _1Y_, new __constructor());

  _UN_App.prototype = _1e_;

  _$5_Object_46setPrototypeOf(_UN_App, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UN_App, _$4_Object_46defineProperty(_1e_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UO_, _$4_Object_46defineProperty(_1e_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UP_, _$4_Object_46defineProperty(_1e_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1Z_prev = (__constructor.prototype = _1e_, new __constructor());

  _1Z_prev.key = "nd7";
  _1Z_prev.shape = null;
  _1Z_prev.text = "@";
  _1Z_prev.colour = "yellow";
  _1Z_prev.name = void 0;
  _1Z_prev.graph = _6_graph;
  _1Z_prev.width = null;
  _1Z_prev.height = null;
  var _1c_ = [_L_link, _U_link, _1H_i,,];
  _1c_.length = 3;
  _1Z_prev.links = _1c_;

  _9_.set("nd7", _1Z_prev);

  var _5x_ = (__constructor.prototype = _1Y_, new __constructor());

  _Ua_Expo.prototype = _5x_;

  _$5_Object_46setPrototypeOf(_Ua_Expo, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ua_Expo, _$4_Object_46defineProperty(_5x_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ub_, _$4_Object_46defineProperty(_5x_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _Wx_ = _$7_Reflect_46get;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uc_, _$4_Object_46defineProperty(_5x_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ud_, _$4_Object_46defineProperty(_5x_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _67_ = (__constructor.prototype = _5x_, new __constructor());

  _Um_Promo.prototype = _67_;

  _$5_Object_46setPrototypeOf(_Um_Promo, _Ua_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Um_Promo, _$4_Object_46defineProperty(_67_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _WL_RewriteFlag = {
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
    F_PROP: "<s>",
    F_PAIR: "<,>"
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Un_, _$4_Object_46defineProperty(_67_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6P_ = (__constructor.prototype = _5x_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V4_Der, _$4_Object_46defineProperty(_6P_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V5_, _$4_Object_46defineProperty(_6P_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _V4_Der.prototype = _6P_;

  _$5_Object_46setPrototypeOf(_V4_Der, _Ua_Expo);

  var _Cw_ = (__constructor.prototype = _5x_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VL_Contract, _$4_Object_46defineProperty(_Cw_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VM_, _$4_Object_46defineProperty(_Cw_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VN_, _$4_Object_46defineProperty(_Cw_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VO_, _$4_Object_46defineProperty(_Cw_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _VL_Contract.prototype = _Cw_;

  _$5_Object_46setPrototypeOf(_VL_Contract, _Ua_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _WY_, _$4_Object_46defineProperty(_V1_Term, "joinAuxs", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_V1_Term, _Ug_Group);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uo_, _$4_Object_46defineProperty(_67_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Up_, _$4_Object_46defineProperty(_67_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Bk_node = (__constructor.prototype = _67_, new __constructor());

  _Bk_node.key = "nd10";
  _Bk_node.shape = null;
  _Bk_node.text = "!";
  _Bk_node.colour = "cyan";
  _Bk_node.name = void 0;
  _Bk_node.graph = _6_graph;
  _Bk_node.width = ".3";
  _Bk_node.height = ".3";
  var _Bp_ = [_1i_, _F_link];
  _Bk_node.links = _Bp_;

  _9_.set("nd10", _Bk_node);

  var _2K_ = (__constructor.prototype = _1Y_, new __constructor());

  _UQ_Abs.prototype = _2K_;

  _$5_Object_46setPrototypeOf(_UQ_Abs, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UQ_Abs, _$4_Object_46defineProperty(_2K_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UR_, _$4_Object_46defineProperty(_2K_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _XU_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _XT_PatTuple, _$4_Object_46defineProperty(_XU_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YU_, _$4_Object_46defineProperty(_XU_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YV_, _$4_Object_46defineProperty(_XU_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _XT_PatTuple.prototype = _XU_;

  _$5_Object_46setPrototypeOf(_XT_PatTuple, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _US_, _$4_Object_46defineProperty(_2K_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UT_, _$4_Object_46defineProperty(_2K_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _2G_node = (__constructor.prototype = _2K_, new __constructor());

  _2G_node.key = "nd11";
  _2G_node.shape = null;
  _2G_node.text = "\u03BB";
  _2G_node.colour = "yellow";
  _2G_node.name = void 0;
  _2G_node.graph = _6_graph;
  _2G_node.width = null;
  _2G_node.height = null;
  var _2J_ = [_1i_, _27_, _2A_];
  _2G_node.links = _2J_;

  _9_.set("nd11", _2G_node);

  var _2L_node = (__constructor.prototype = _1e_, new __constructor());

  _2L_node.key = "nd12";
  _2L_node.shape = null;
  _2L_node.text = "@";
  _2L_node.colour = "yellow";
  _2L_node.name = void 0;
  _2L_node.graph = _6_graph;
  _2L_node.width = null;
  _2L_node.height = null;
  var _2O_ = [_1z_, _23_, _27_];
  _2L_node.links = _2O_;

  _9_.set("nd12", _2L_node);

  var _7x_node = (__constructor.prototype = _67_, new __constructor());

  _7x_node.key = "nd15";
  _7x_node.shape = null;
  _7x_node.text = "!";
  _7x_node.colour = "cyan";
  _7x_node.name = void 0;
  _7x_node.graph = _6_graph;
  _7x_node.width = ".3";
  _7x_node.height = ".3";
  var _82_ = [_2S_, _1u_];
  _7x_node.links = _82_;

  _9_.set("nd15", _7x_node);

  var _36_node = (__constructor.prototype = _2K_, new __constructor());

  _36_node.key = "nd16";
  _36_node.shape = null;
  _36_node.text = "\u03BB";
  _36_node.colour = "yellow";
  _36_node.name = void 0;
  _36_node.graph = _6_graph;
  _36_node.width = null;
  _36_node.height = null;
  var _39_ = [_2S_, _2y_, _31_outLink];
  _36_node.links = _39_;

  _9_.set("nd16", _36_node);

  var _3A_node = (__constructor.prototype = _1e_, new __constructor());

  _3A_node.key = "nd17";
  _3A_node.shape = null;
  _3A_node.text = "@";
  _3A_node.colour = "yellow";
  _3A_node.name = void 0;
  _3A_node.graph = _6_graph;
  _3A_node.width = null;
  _3A_node.height = null;
  var _3D_ = [_2r_, _2v_, _2y_];
  _3A_node.links = _3D_;

  _9_.set("nd17", _3A_node);

  var _7R_node = (__constructor.prototype = _67_, new __constructor());

  _7R_node.key = "nd20";
  _7R_node.shape = null;
  _7R_node.text = "!";
  _7R_node.colour = "cyan";
  _7R_node.name = void 0;
  _7R_node.graph = _6_graph;
  _7R_node.width = ".3";
  _7R_node.height = ".3";
  var _7W_ = [_3H_, _2e_];
  _7R_node.links = _7W_;

  _9_.set("nd20", _7R_node);

  var _3k_node = (__constructor.prototype = _2K_, new __constructor());

  _3k_node.key = "nd21";
  _3k_node.shape = null;
  _3k_node.text = "\u03BB";
  _3k_node.colour = "yellow";
  _3k_node.name = void 0;
  _3k_node.graph = _6_graph;
  _3k_node.width = null;
  _3k_node.height = null;
  var _3n_ = [_3H_, _3c_, _3f_];
  _3k_node.links = _3n_;

  _9_.set("nd21", _3k_node);

  var _3o_node = (__constructor.prototype = _1e_, new __constructor());

  _3o_node.key = "nd22";
  _3o_node.shape = null;
  _3o_node.text = "@";
  _3o_node.colour = "yellow";
  _3o_node.name = void 0;
  _3o_node.graph = _6_graph;
  _3o_node.width = null;
  _3o_node.height = null;
  var _3r_ = [_3U_, _3Y_, _3c_];
  _3o_node.links = _3r_;

  _9_.set("nd22", _3o_node);

  var _74_node = (__constructor.prototype = _67_, new __constructor());

  _74_node.key = "nd25";
  _74_node.shape = null;
  _74_node.text = "!";
  _74_node.colour = "cyan";
  _74_node.name = void 0;
  _74_node.graph = _6_graph;
  _74_node.width = ".3";
  _74_node.height = ".3";
  var _79_ = [_3v_, _3P_];
  _74_node.links = _79_;

  _9_.set("nd25", _74_node);

  var _4S_node = (__constructor.prototype = _2K_, new __constructor());

  _4S_node.key = "nd26";
  _4S_node.shape = null;
  _4S_node.text = "\u03BB";
  _4S_node.colour = "yellow";
  _4S_node.name = void 0;
  _4S_node.graph = _6_graph;
  _4S_node.width = null;
  _4S_node.height = null;
  var _4V_ = [_3v_, _4K_, _4N_];
  _4S_node.links = _4V_;

  _9_.set("nd26", _4S_node);

  var _4W_node = (__constructor.prototype = _1e_, new __constructor());

  _4W_node.key = "nd27";
  _4W_node.shape = null;
  _4W_node.text = "@";
  _4W_node.colour = "yellow";
  _4W_node.name = void 0;
  _4W_node.graph = _6_graph;
  _4W_node.width = null;
  _4W_node.height = null;
  var _4Z_ = [_4C_, _4G_, _4K_];
  _4W_node.links = _4Z_;

  _9_.set("nd27", _4W_node);

  var _6b_node = (__constructor.prototype = _67_, new __constructor());

  _6b_node.key = "nd30";
  _6b_node.shape = null;
  _6b_node.text = "!";
  _6b_node.colour = "cyan";
  _6b_node.name = void 0;
  _6b_node.graph = _6_graph;
  _6b_node.width = ".3";
  _6b_node.height = ".3";
  var _6g_ = [_4d_, _47_];
  _6b_node.links = _6g_;

  _9_.set("nd30", _6b_node);

  var _5A_node = (__constructor.prototype = _2K_, new __constructor());

  _5A_node.key = "nd31";
  _5A_node.shape = null;
  _5A_node.text = "\u03BB";
  _5A_node.colour = "yellow";
  _5A_node.name = void 0;
  _5A_node.graph = _6_graph;
  _5A_node.width = null;
  _5A_node.height = null;
  var _5D_ = [_4d_, _52_, _55_];
  _5A_node.links = _5D_;

  _9_.set("nd31", _5A_node);

  var _5E_node = (__constructor.prototype = _1e_, new __constructor());

  _5E_node.key = "nd32";
  _5E_node.shape = null;
  _5E_node.text = "@";
  _5E_node.colour = "yellow";
  _5E_node.name = void 0;
  _5E_node.graph = _6_graph;
  _5E_node.width = null;
  _5E_node.height = null;
  var _5H_ = [_4u_, _4y_, _52_];
  _5E_node.links = _5H_;

  _9_.set("nd32", _5E_node);

  var _61_node = (__constructor.prototype = _67_, new __constructor());

  _61_node.key = "nd35";
  _61_node.shape = null;
  _61_node.text = "!";
  _61_node.colour = "cyan";
  _61_node.name = void 0;
  _61_node.graph = _6_graph;
  _61_node.width = ".3";
  _61_node.height = ".3";
  var _66_ = [_5L_, _4p_];
  _61_node.links = _66_;

  _9_.set("nd35", _61_node);

  var _5g_node = (__constructor.prototype = _2K_, new __constructor());

  _5g_node.key = "nd36";
  _5g_node.shape = null;
  _5g_node.text = "\u03BB";
  _5g_node.colour = "yellow";
  _5g_node.name = void 0;
  _5g_node.graph = _6_graph;
  _5g_node.width = null;
  _5g_node.height = null;
  var _5j_ = [_5L_, _5X_, _5a_];
  _5g_node.links = _5j_;

  _9_.set("nd36", _5g_node);

  var _5p_ = (__constructor.prototype = _1Y_, new __constructor());

  _UU_Dep.prototype = _5p_;

  _$5_Object_46setPrototypeOf(_UU_Dep, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UU_Dep, _$4_Object_46defineProperty(_5p_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UV_, _$4_Object_46defineProperty(_5p_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5w_ = (__constructor.prototype = _5x_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UY_Weak, _$4_Object_46defineProperty(_5w_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UZ_, _$4_Object_46defineProperty(_5w_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _UY_Weak.prototype = _5w_;

  _$5_Object_46setPrototypeOf(_UY_Weak, _Ua_Expo);

  _$5_Object_46setPrototypeOf(_Ue_Box, _Ug_Group);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _WX_, _$4_Object_46defineProperty(_Ut_BoxWrapper, "create", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_Ut_BoxWrapper, _V1_Term);

  var _9l_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VD_Const, _$4_Object_46defineProperty(_9l_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VE_, _$4_Object_46defineProperty(_9l_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VF_, _$4_Object_46defineProperty(_9l_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _VD_Const.prototype = _9l_;

  _$5_Object_46setPrototypeOf(_VD_Const, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UW_, _$4_Object_46defineProperty(_5p_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UX_, _$4_Object_46defineProperty(_5p_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5k_node = (__constructor.prototype = _5p_, new __constructor());

  _5k_node.key = "nd39";
  _5k_node.shape = null;
  _5k_node.text = "p";
  _5k_node.colour = "mediumpurple1";
  _5k_node.name = void 0;
  _5k_node.graph = _6_graph;
  _5k_node.width = null;
  _5k_node.height = null;
  var _5n_ = [_5X_, _5P_outLink,,];
  _5n_.length = 2;
  _5k_node.links = _5n_;

  _9_.set("nd39", _5k_node);

  var _5q_node = (__constructor.prototype = _5w_, new __constructor());

  _5q_node.key = "nd41";
  _5q_node.shape = null;
  _5q_node.text = "C0";
  _5q_node.colour = "cyan";
  _5q_node.name = void 0;
  _5q_node.graph = _6_graph;
  _5q_node.width = ".3";
  _5q_node.height = ".3";
  var _5v_ = [_5a_];
  _5q_node.links = _5v_;

  _9_.set("nd41", _5q_node);

  var _6F_ = (__constructor.prototype = _5x_, new __constructor());

  _Uq_Pax.prototype = _6F_;

  _$5_Object_46setPrototypeOf(_Uq_Pax, _Ua_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uq_Pax, _$4_Object_46defineProperty(_6F_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ur_, _$4_Object_46defineProperty(_6F_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Us_, _$4_Object_46defineProperty(_6F_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _68_node = (__constructor.prototype = _6F_, new __constructor());

  _68_node.key = "nd42";
  _68_node.shape = null;
  _68_node.text = "?";
  _68_node.colour = "cyan";
  _68_node.name = "alt_sum";
  _68_node.graph = _6_graph;
  _68_node.width = ".3";
  _68_node.height = ".3";
  var _6E_ = [_5P_outLink, _4h_link];
  _68_node.links = _6E_;

  _9_.set("nd42", _68_node);

  var _6J_node = (__constructor.prototype = _6P_, new __constructor());

  _6J_node.key = "nd44";
  _6J_node.shape = null;
  _6J_node.text = "D";
  _6J_node.colour = "cyan";
  _6J_node.name = void 0;
  _6J_node.graph = _6_graph;
  _6J_node.width = ".3";
  _6J_node.height = ".3";
  var _6O_ = [_4p_, _4u_];
  _6J_node.links = _6O_;

  _9_.set("nd44", _6J_node);

  var _6U_ = (__constructor.prototype = _1Y_, new __constructor());

  _V6_Prop.prototype = _6U_;

  _$5_Object_46setPrototypeOf(_V6_Prop, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V6_Prop, _$4_Object_46defineProperty(_6U_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V7_, _$4_Object_46defineProperty(_6U_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V8_, _$4_Object_46defineProperty(_6U_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V9_, _$4_Object_46defineProperty(_6U_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6Q_node = (__constructor.prototype = _6U_, new __constructor());

  _6Q_node.key = "nd45";
  _6Q_node.shape = null;
  _6Q_node.text = "s";
  _6Q_node.colour = "indianred1";
  _6Q_node.name = void 0;
  _6Q_node.graph = _6_graph;
  _6Q_node.width = null;
  _6Q_node.height = null;
  var _6T_ = [_4y_];
  _6Q_node.links = _6T_;

  _9_.set("nd45", _6Q_node);

  var _6V_node = (__constructor.prototype = _5w_, new __constructor());

  _6V_node.key = "nd48";
  _6V_node.shape = null;
  _6V_node.text = "C0";
  _6V_node.colour = "cyan";
  _6V_node.name = void 0;
  _6V_node.graph = _6_graph;
  _6V_node.width = ".3";
  _6V_node.height = ".3";
  var _6a_ = [_55_];
  _6V_node.links = _6a_;

  _9_.set("nd48", _6V_node);

  var _6h_node = (__constructor.prototype = _6F_, new __constructor());

  _6h_node.key = "nd49";
  _6h_node.shape = null;
  _6h_node.text = "?";
  _6h_node.colour = "cyan";
  _6h_node.name = "alt_sum";
  _6h_node.graph = _6_graph;
  _6h_node.width = ".3";
  _6h_node.height = ".3";
  var _6m_ = [_4h_link, _3z_];
  _6h_node.links = _6m_;

  _9_.set("nd49", _6h_node);

  var _6o_node = (__constructor.prototype = _6P_, new __constructor());

  _6o_node.key = "nd51";
  _6o_node.shape = null;
  _6o_node.text = "D";
  _6o_node.colour = "cyan";
  _6o_node.name = void 0;
  _6o_node.graph = _6_graph;
  _6o_node.width = ".3";
  _6o_node.height = ".3";
  var _6t_ = [_47_, _4C_];
  _6o_node.links = _6t_;

  _9_.set("nd51", _6o_node);

  var _6u_node = (__constructor.prototype = _6U_, new __constructor());

  _6u_node.key = "nd52";
  _6u_node.shape = null;
  _6u_node.text = "s";
  _6u_node.colour = "indianred1";
  _6u_node.name = void 0;
  _6u_node.graph = _6_graph;
  _6u_node.width = null;
  _6u_node.height = null;
  var _6x_ = [_4G_];
  _6u_node.links = _6x_;

  _9_.set("nd52", _6u_node);

  var _6y_node = (__constructor.prototype = _5w_, new __constructor());

  _6y_node.key = "nd55";
  _6y_node.shape = null;
  _6y_node.text = "C0";
  _6y_node.colour = "cyan";
  _6y_node.name = void 0;
  _6y_node.graph = _6_graph;
  _6y_node.width = ".3";
  _6y_node.height = ".3";
  var _73_ = [_4N_];
  _6y_node.links = _73_;

  _9_.set("nd55", _6y_node);

  var _7A_node = (__constructor.prototype = _6F_, new __constructor());

  _7A_node.key = "nd56";
  _7A_node.shape = null;
  _7A_node.text = "?";
  _7A_node.colour = "cyan";
  _7A_node.name = "alt_sum";
  _7A_node.graph = _6_graph;
  _7A_node.width = ".3";
  _7A_node.height = ".3";
  var _7F_ = [_3z_, _3f_];
  _7A_node.links = _7F_;

  _9_.set("nd56", _7A_node);

  var _7H_node = (__constructor.prototype = _6P_, new __constructor());

  _7H_node.key = "nd58";
  _7H_node.shape = null;
  _7H_node.text = "D";
  _7H_node.colour = "cyan";
  _7H_node.name = void 0;
  _7H_node.graph = _6_graph;
  _7H_node.width = ".3";
  _7H_node.height = ".3";
  var _7M_ = [_3P_, _3U_];
  _7H_node.links = _7M_;

  _9_.set("nd58", _7H_node);

  var _7N_node = (__constructor.prototype = _6U_, new __constructor());

  _7N_node.key = "nd59";
  _7N_node.shape = null;
  _7N_node.text = "s";
  _7N_node.colour = "indianred1";
  _7N_node.name = void 0;
  _7N_node.graph = _6_graph;
  _7N_node.width = null;
  _7N_node.height = null;
  var _7Q_ = [_3Y_];
  _7N_node.links = _7Q_;

  _9_.set("nd59", _7N_node);

  var _7Y_node = (__constructor.prototype = _6P_, new __constructor());

  _7Y_node.key = "nd63";
  _7Y_node.shape = null;
  _7Y_node.text = "D";
  _7Y_node.colour = "cyan";
  _7Y_node.name = void 0;
  _7Y_node.graph = _6_graph;
  _7Y_node.width = ".3";
  _7Y_node.height = ".3";
  var _7d_ = [_2e_, _2r_];
  _7Y_node.links = _7d_;

  _9_.set("nd63", _7Y_node);

  var _7e_node = (__constructor.prototype = _1e_, new __constructor());

  _7e_node.key = "nd64";
  _7e_node.shape = null;
  _7e_node.text = "@";
  _7e_node.colour = "yellow";
  _7e_node.name = void 0;
  _7e_node.graph = _6_graph;
  _7e_node.width = null;
  _7e_node.height = null;
  var _7h_ = [_2j_, _2o_, _2v_];
  _7e_node.links = _7h_;

  _9_.set("nd64", _7e_node);

  var _7i_node = (__constructor.prototype = _6P_, new __constructor());

  _7i_node.key = "nd67";
  _7i_node.shape = null;
  _7i_node.text = "D";
  _7i_node.colour = "cyan";
  _7i_node.name = "sum";
  _7i_node.graph = _6_graph;
  _7i_node.width = ".3";
  _7i_node.height = ".3";
  var _7o_ = [_2j_, _31_outLink,,];
  _7o_.length = 2;
  _7i_node.links = _7o_;

  _9_.set("nd67", _7i_node);

  var _7v_ = (__constructor.prototype = _1Y_, new __constructor());

  _VA_Deref.prototype = _7v_;

  _$5_Object_46setPrototypeOf(_VA_Deref, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VA_Deref, _$4_Object_46defineProperty(_7v_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VB_, _$4_Object_46defineProperty(_7v_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VC_, _$4_Object_46defineProperty(_7v_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _7q_node = (__constructor.prototype = _7v_, new __constructor());

  _7q_node.key = "nd70";
  _7q_node.shape = null;
  _7q_node.text = "d";
  _7q_node.colour = "mediumpurple1";
  _7q_node.name = void 0;
  _7q_node.graph = _6_graph;
  _7q_node.width = null;
  _7q_node.height = null;
  var _7t_ = [_2o_, _2W_outLink,,];
  _7t_.length = 2;
  _7q_node.links = _7t_;

  _9_.set("nd70", _7q_node);

  var _83_node = (__constructor.prototype = _6F_, new __constructor());

  _83_node.key = "nd74";
  _83_node.shape = null;
  _83_node.text = "?";
  _83_node.colour = "cyan";
  _83_node.name = "alt";
  _83_node.graph = _6_graph;
  _83_node.width = ".3";
  _83_node.height = ".3";
  var _89_ = [_2W_outLink, _2A_];
  _83_node.links = _89_;

  _9_.set("nd74", _83_node);

  var _8B_node = (__constructor.prototype = _6P_, new __constructor());

  _8B_node.key = "nd76";
  _8B_node.shape = null;
  _8B_node.text = "D";
  _8B_node.colour = "cyan";
  _8B_node.name = void 0;
  _8B_node.graph = _6_graph;
  _8B_node.width = ".3";
  _8B_node.height = ".3";
  var _8G_ = [_1u_, _1z_];
  _8B_node.links = _8G_;

  _9_.set("nd76", _8B_node);

  var _BX_node = (__constructor.prototype = _67_, new __constructor());

  _BX_node.key = "nd79";
  _BX_node.shape = null;
  _BX_node.text = "!";
  _BX_node.colour = "cyan";
  _BX_node.name = void 0;
  _BX_node.graph = _6_graph;
  _BX_node.width = ".3";
  _BX_node.height = ".3";
  var _Bc_ = [_8K_, _23_];
  _BX_node.links = _Bc_;

  _9_.set("nd79", _BX_node);

  var _96_node = (__constructor.prototype = _2K_, new __constructor());

  _96_node.key = "nd80";
  _96_node.shape = null;
  _96_node.text = "\u03BB";
  _96_node.colour = "yellow";
  _96_node.name = void 0;
  _96_node.graph = _6_graph;
  _96_node.width = null;
  _96_node.height = null;
  var _99_ = [_8K_, _8y_, _91_outLink];
  _96_node.links = _99_;

  _9_.set("nd80", _96_node);

  var _9A_fromNode = (__constructor.prototype = _1e_, new __constructor());

  _9A_fromNode.key = "nd81";
  _9A_fromNode.shape = null;
  _9A_fromNode.text = "@";
  _9A_fromNode.colour = "yellow";
  _9A_fromNode.name = void 0;
  _9A_fromNode.graph = _6_graph;
  _9A_fromNode.width = null;
  _9A_fromNode.height = null;
  var _9D_ = [_8u_, _8y_, _91_outLink,,];
  _9D_.length = 3;
  _9A_fromNode.links = _9D_;

  _9_.set("nd81", _9A_fromNode);

  var _9F_node = (__constructor.prototype = _1e_, new __constructor());

  _9F_node.key = "nd82";
  _9F_node.shape = null;
  _9F_node.text = "@";
  _9F_node.colour = "yellow";
  _9F_node.name = void 0;
  _9F_node.graph = _6_graph;
  _9F_node.width = null;
  _9F_node.height = null;
  var _9I_ = [_8i_, _8m_, _8q_];
  _9F_node.links = _9I_;

  _9_.set("nd82", _9F_node);

  var _9J_node = (__constructor.prototype = _1e_, new __constructor());

  _9J_node.key = "nd83";
  _9J_node.shape = null;
  _9J_node.text = "@";
  _9J_node.colour = "yellow";
  _9J_node.name = void 0;
  _9J_node.graph = _6_graph;
  _9J_node.width = null;
  _9J_node.height = null;
  var _9M_ = [_8W_, _8a_, _8e_];
  _9J_node.links = _9M_;

  _9_.set("nd83", _9J_node);

  var _9N_node = (__constructor.prototype = _6P_, new __constructor());

  _9N_node.key = "nd86";
  _9N_node.shape = null;
  _9N_node.text = "D";
  _9N_node.colour = "cyan";
  _9N_node.name = "state_machine";
  _9N_node.graph = _6_graph;
  _9N_node.width = ".3";
  _9N_node.height = ".3";
  var _9T_ = [_8W_, _8O_outLink,,];
  _9T_.length = 2;
  _9N_node.links = _9T_;

  _9_.set("nd86", _9N_node);

  var _9m_node = (__constructor.prototype = _67_, new __constructor());

  _9m_node.key = "nd89";
  _9m_node.shape = null;
  _9m_node.text = "!";
  _9m_node.colour = "cyan";
  _9m_node.name = void 0;
  _9m_node.graph = _6_graph;
  _9m_node.width = ".3";
  _9m_node.height = ".3";
  var _9r_ = [_9Y_, _8a_];
  _9m_node.links = _9r_;

  _9_.set("nd89", _9m_node);

  var _9h_node = (__constructor.prototype = _9l_, new __constructor());

  _9h_node.key = "nd90";
  _9h_node.shape = null;
  _9h_node.text = 0;
  _9h_node.colour = "mediumpurple1";
  _9h_node.name = 0;
  _9h_node.graph = _6_graph;
  _9h_node.width = null;
  _9h_node.height = null;
  var _9k_ = [_9Y_];
  _9h_node.links = _9k_;

  _9_.set("nd90", _9h_node);

  var _9t_node = (__constructor.prototype = _6P_, new __constructor());

  _9t_node.key = "nd93";
  _9t_node.shape = null;
  _9t_node.text = "D";
  _9t_node.colour = "cyan";
  _9t_node.name = void 0;
  _9t_node.graph = _6_graph;
  _9t_node.width = ".3";
  _9t_node.height = ".3";
  var _9y_ = [_8e_, _8i_];
  _9t_node.links = _9y_;

  _9_.set("nd93", _9t_node);

  var _BJ_node = (__constructor.prototype = _67_, new __constructor());

  _BJ_node.key = "nd96";
  _BJ_node.shape = null;
  _BJ_node.text = "!";
  _BJ_node.colour = "cyan";
  _BJ_node.name = void 0;
  _BJ_node.graph = _6_graph;
  _BJ_node.width = ".3";
  _BJ_node.height = ".3";
  var _BO_ = [_A2_, _8m_];
  _BJ_node.links = _BO_;

  _9_.set("nd96", _BJ_node);

  var _AJ_node = (__constructor.prototype = _2K_, new __constructor());

  _AJ_node.key = "nd97";
  _AJ_node.shape = null;
  _AJ_node.text = "\u03BB";
  _AJ_node.colour = "yellow";
  _AJ_node.name = void 0;
  _AJ_node.graph = _6_graph;
  _AJ_node.width = null;
  _AJ_node.height = null;
  var _AM_ = [_A2_, _AA_, _AE_];
  _AJ_node.links = _AM_;

  _9_.set("nd97", _AJ_node);

  var _B5_node = (__constructor.prototype = _67_, new __constructor());

  _B5_node.key = "nd100";
  _B5_node.shape = null;
  _B5_node.text = "!";
  _B5_node.colour = "cyan";
  _B5_node.name = void 0;
  _B5_node.graph = _6_graph;
  _B5_node.width = ".3";
  _B5_node.height = ".3";
  var _BA_ = [_AQ_, _AA_];
  _B5_node.links = _BA_;

  _9_.set("nd100", _B5_node);

  var _Ao_node = (__constructor.prototype = _2K_, new __constructor());

  _Ao_node.key = "nd101";
  _Ao_node.shape = null;
  _Ao_node.text = "\u03BB";
  _Ao_node.colour = "yellow";
  _Ao_node.name = void 0;
  _Ao_node.graph = _6_graph;
  _Ao_node.width = null;
  _Ao_node.height = null;
  var _Ar_ = [_AQ_, _Ag_, _Aj_outLink];
  _Ao_node.links = _Ar_;

  _9_.set("nd101", _Ao_node);

  var _Ay_ = (__constructor.prototype = _1Y_, new __constructor());

  _VG_BinOp.prototype = _Ay_;
  var _Wb_BinOpType = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _WZ_, _$4_Object_46defineProperty(_VG_BinOp, "createPlus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Wa_, _$4_Object_46defineProperty(_VG_BinOp, "createMult", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_VG_BinOp, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VG_BinOp, _$4_Object_46defineProperty(_Ay_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VH_, _$4_Object_46defineProperty(_Ay_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VI_, _$4_Object_46defineProperty(_Ay_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VJ_, _$4_Object_46defineProperty(_Ay_, "binOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VK_, _$4_Object_46defineProperty(_Ay_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _As_fromNode = (__constructor.prototype = _Ay_, new __constructor());

  _As_fromNode.key = "nd102";
  _As_fromNode.shape = null;
  _As_fromNode.text = "+";
  _As_fromNode.colour = "mediumpurple1";
  _As_fromNode.name = void 0;
  _As_fromNode.graph = _6_graph;
  _As_fromNode.width = null;
  _As_fromNode.height = null;
  var _Av_ = [_Ac_, _Ag_, _Aj_outLink,,];
  _Av_.length = 3;
  _As_fromNode.links = _Av_;
  _As_fromNode.subType = 2;

  _9_.set("nd102", _As_fromNode);

  var _Az_node = (__constructor.prototype = _7v_, new __constructor());

  _Az_node.key = "nd107";
  _Az_node.shape = null;
  _Az_node.text = "d";
  _Az_node.colour = "mediumpurple1";
  _Az_node.name = void 0;
  _Az_node.graph = _6_graph;
  _Az_node.width = null;
  _Az_node.height = null;
  var _B2_ = [_Ac_, _AU_outLink,,];
  _B2_.length = 2;
  _Az_node.links = _B2_;

  _9_.set("nd107", _Az_node);

  var _BB_node = (__constructor.prototype = _6F_, new __constructor());

  _BB_node.key = "nd110";
  _BB_node.shape = null;
  _BB_node.text = "?";
  _BB_node.colour = "cyan";
  _BB_node.name = "s";
  _BB_node.graph = _6_graph;
  _BB_node.width = ".3";
  _BB_node.height = ".3";
  var _BH_ = [_AU_outLink, _AE_];
  _BB_node.links = _BH_;

  _9_.set("nd110", _BB_node);

  var _BQ_node = (__constructor.prototype = _6P_, new __constructor());

  _BQ_node.key = "nd114";
  _BQ_node.shape = null;
  _BQ_node.text = "D";
  _BQ_node.colour = "cyan";
  _BQ_node.name = void 0;
  _BQ_node.graph = _6_graph;
  _BQ_node.width = ".3";
  _BQ_node.height = ".3";
  var _BV_ = [_8q_, _8u_];
  _BQ_node.links = _BV_;

  _9_.set("nd114", _BQ_node);

  var _Bd_node = (__constructor.prototype = _6F_, new __constructor());

  _Bd_node.key = "nd118";
  _Bd_node.shape = null;
  _Bd_node.text = "?";
  _Bd_node.colour = "cyan";
  _Bd_node.name = "state_machine";
  _Bd_node.graph = _6_graph;
  _Bd_node.width = ".3";
  _Bd_node.height = ".3";
  var _Bi_ = [_8O_outLink, _1m_link];
  _Bd_node.links = _Bi_;

  _9_.set("nd118", _Bd_node);

  var _Bq_node = (__constructor.prototype = _6F_, new __constructor());

  _Bq_node.key = "nd121";
  _Bq_node.shape = null;
  _Bq_node.text = "?";
  _Bq_node.colour = "cyan";
  _Bq_node.name = "state_machine";
  _Bq_node.graph = _6_graph;
  _Bq_node.width = ".3";
  _Bq_node.height = ".3";
  var _Bv_ = [_1m_link, _P_link];
  _Bq_node.links = _Bv_;

  _9_.set("nd121", _Bq_node);

  var _Bx_node = (__constructor.prototype = _6P_, new __constructor());

  _Bx_node.key = "nd123";
  _Bx_node.shape = null;
  _Bx_node.text = "D";
  _Bx_node.colour = "cyan";
  _Bx_node.name = void 0;
  _Bx_node.graph = _6_graph;
  _Bx_node.width = ".3";
  _Bx_node.height = ".3";
  var _C2_ = [_F_link, _L_link];
  _Bx_node.links = _C2_;

  _9_.set("nd123", _Bx_node);

  var _CJ_toNode = (__constructor.prototype = _67_, new __constructor());

  _CJ_toNode.key = "nd132";
  _CJ_toNode.shape = null;
  _CJ_toNode.text = "!";
  _CJ_toNode.colour = "cyan";
  _CJ_toNode.name = void 0;
  _CJ_toNode.graph = _6_graph;
  _CJ_toNode.width = ".3";
  _CJ_toNode.height = ".3";
  var _CO_ = [_C6_link, _d_link,,];
  _CO_.length = 2;
  _CJ_toNode.links = _CO_;

  _9_.set("nd132", _CJ_toNode);

  var _CF_node = (__constructor.prototype = _9l_, new __constructor());

  _CF_node.key = "nd133";
  _CF_node.shape = null;
  _CF_node.text = 1;
  _CF_node.colour = "mediumpurple1";
  _CF_node.name = 1;
  _CF_node.graph = _6_graph;
  _CF_node.width = null;
  _CF_node.height = null;
  var _CI_ = [_C6_link];
  _CF_node.links = _CI_;

  _9_.set("nd133", _CF_node);

  var _IY_prev = (__constructor.prototype = _Ay_, new __constructor());

  _IY_prev.key = "nd145";
  _IY_prev.shape = null;
  _IY_prev.text = "-";
  _IY_prev.colour = "mediumpurple1";
  _IY_prev.name = void 0;
  _IY_prev.graph = _6_graph;
  _IY_prev.width = null;
  _IY_prev.height = null;
  var _Ib_ = [_11_link, _16_link, _19_link];
  _IY_prev.links = _Ib_;
  _IY_prev.subType = 3;

  _9_.set("nd145", _IY_prev);

  var _It_left = (__constructor.prototype = _67_, new __constructor());

  _It_left.key = "nd148";
  _It_left.shape = null;
  _It_left.text = "!";
  _It_left.colour = "cyan";
  _It_left.name = void 0;
  _It_left.graph = _6_graph;
  _It_left.width = ".3";
  _It_left.height = ".3";
  var _Iy_ = [_Ig_link, _11_link];
  _It_left.links = _Iy_;

  _9_.set("nd148", _It_left);

  var _Ip_node = (__constructor.prototype = _9l_, new __constructor());

  _Ip_node.key = "nd149";
  _Ip_node.shape = null;
  _Ip_node.text = 1;
  _Ip_node.colour = "mediumpurple1";
  _Ip_node.name = 1;
  _Ip_node.graph = _6_graph;
  _Ip_node.width = null;
  _Ip_node.height = null;
  var _Is_ = [_Ig_link];
  _Ip_node.links = _Is_;

  _9_.set("nd149", _Ip_node);

  var _J0_right = (__constructor.prototype = _7v_, new __constructor());

  _J0_right.key = "nd153";
  _J0_right.shape = null;
  _J0_right.text = "d";
  _J0_right.colour = "mediumpurple1";
  _J0_right.name = void 0;
  _J0_right.graph = _6_graph;
  _J0_right.width = null;
  _J0_right.height = null;
  var _J3_ = [_16_link, _x_link,,];
  _J3_.length = 2;
  _J0_right.links = _J3_;

  _9_.set("nd153", _J0_right);

  var _J5_otherNode = (__constructor.prototype = _5w_, new __constructor());

  _J5_otherNode.key = "nd156";
  _J5_otherNode.shape = null;
  _J5_otherNode.text = "C0";
  _J5_otherNode.colour = "cyan";
  _J5_otherNode.name = void 0;
  _J5_otherNode.graph = _6_graph;
  _J5_otherNode.width = ".3";
  _J5_otherNode.height = ".3";
  var _JA_ = [_1C_otherNextLink];
  _J5_otherNode.links = _JA_;

  _9_.set("nd156", _J5_otherNode);

  var _Ch_toNode = (__constructor.prototype = _67_, new __constructor());

  _Ch_toNode.key = "nd164";
  _Ch_toNode.shape = null;
  _Ch_toNode.text = "!";
  _Ch_toNode.colour = "cyan";
  _Ch_toNode.name = void 0;
  _Ch_toNode.graph = _6_graph;
  _Ch_toNode.width = ".3";
  _Ch_toNode.height = ".3";
  var _Cm_ = [_CU_link, _1C_otherNextLink,,];
  _Cm_.length = 2;
  _Ch_toNode.links = _Cm_;

  _9_.set("nd164", _Ch_toNode);

  var _Cd_node = (__constructor.prototype = _9l_, new __constructor());

  _Cd_node.key = "nd165";
  _Cd_node.shape = null;
  _Cd_node.text = 0;
  _Cd_node.colour = "mediumpurple1";
  _Cd_node.name = 0;
  _Cd_node.graph = _6_graph;
  _Cd_node.width = null;
  _Cd_node.height = null;
  var _Cg_ = [_CU_link];
  _Cd_node.links = _Cg_;

  _9_.set("nd165", _Cd_node);

  var _Cp_toNode = (__constructor.prototype = _Cw_, new __constructor());

  _Cp_toNode.key = "nd168";
  _Cp_toNode.shape = null;
  _Cp_toNode.text = "C";
  _Cp_toNode.colour = "cyan";
  _Cp_toNode.name = "state_machine";
  _Cp_toNode.graph = _6_graph;
  _Cp_toNode.width = ".3";
  _Cp_toNode.height = ".3";
  var _Cu_ = [_P_link, _Y_link,,];
  _Cu_.length = 2;
  _Cp_toNode.links = _Cu_;

  _9_.set("nd168", _Cp_toNode);

  var _Jl_otherNode = (__constructor.prototype = _5w_, new __constructor());

  _Jl_otherNode.key = "nd196";
  _Jl_otherNode.shape = null;
  _Jl_otherNode.text = "C0";
  _Jl_otherNode.colour = "cyan";
  _Jl_otherNode.name = void 0;
  _Jl_otherNode.graph = _6_graph;
  _Jl_otherNode.width = ".3";
  _Jl_otherNode.height = ".3";
  var _Jq_ = [_1K_otherNextLink];
  _Jl_otherNode.links = _Jq_;

  _9_.set("nd196", _Jl_otherNode);

  var _IR_toNode = (__constructor.prototype = _Cw_, new __constructor());

  _IR_toNode.key = "nd216";
  _IR_toNode.shape = null;
  _IR_toNode.text = "C";
  _IR_toNode.colour = "cyan";
  _IR_toNode.name = "state";
  _IR_toNode.graph = _6_graph;
  _IR_toNode.width = ".3";
  _IR_toNode.height = ".3";
  var _IW_ = [_1H_i, _u_link, _p_link, _x_link,,];
  _IW_.length = 4;
  _IR_toNode.links = _IW_;

  _9_.set("nd216", _IR_toNode);

  var _D5_fromNode = (__constructor.prototype = _67_, new __constructor());

  _D5_fromNode.key = "nd235";
  _D5_fromNode.shape = null;
  _D5_fromNode.text = "!";
  _D5_fromNode.colour = "cyan";
  _D5_fromNode.name = void 0;
  _D5_fromNode.graph = _6_graph;
  _D5_fromNode.width = ".3";
  _D5_fromNode.height = ".3";
  var _DA_ = [_D0_newLink, _Y_link];
  _D5_fromNode.links = _DA_;

  _9_.set("nd235", _D5_fromNode);

  var _DN_toNode = (__constructor.prototype = _2K_, new __constructor());

  _DN_toNode.key = "nd237";
  _DN_toNode.shape = null;
  _DN_toNode.text = "\u03BB";
  _DN_toNode.colour = "yellow";
  _DN_toNode.name = void 0;
  _DN_toNode.graph = _6_graph;
  _DN_toNode.width = null;
  _DN_toNode.height = null;
  var _DQ_ = [_DE_newLink, _DI_newLink, _D0_newLink];
  _DN_toNode.links = _DQ_;

  _9_.set("nd237", _DN_toNode);

  var _Dd_toNode = (__constructor.prototype = _67_, new __constructor());

  _Dd_toNode.key = "nd239";
  _Dd_toNode.shape = null;
  _Dd_toNode.text = "!";
  _Dd_toNode.colour = "cyan";
  _Dd_toNode.name = void 0;
  _Dd_toNode.graph = _6_graph;
  _Dd_toNode.width = ".3";
  _Dd_toNode.height = ".3";
  var _Di_ = [_DU_newLink, _DE_newLink];
  _Dd_toNode.links = _Di_;

  _9_.set("nd239", _Dd_toNode);

  var _Dv_toNode = (__constructor.prototype = _2K_, new __constructor());

  _Dv_toNode.key = "nd241";
  _Dv_toNode.shape = null;
  _Dv_toNode.text = "\u03BB";
  _Dv_toNode.colour = "yellow";
  _Dv_toNode.name = void 0;
  _Dv_toNode.graph = _6_graph;
  _Dv_toNode.width = null;
  _Dv_toNode.height = null;
  var _Dy_ = [_Dm_newLink, _Dq_newLink, _DU_newLink];
  _Dv_toNode.links = _Dy_;

  _9_.set("nd241", _Dv_toNode);

  var _EF_toNode = (__constructor.prototype = _67_, new __constructor());

  _EF_toNode.key = "nd243";
  _EF_toNode.shape = null;
  _EF_toNode.text = "!";
  _EF_toNode.colour = "cyan";
  _EF_toNode.name = void 0;
  _EF_toNode.graph = _6_graph;
  _EF_toNode.width = ".3";
  _EF_toNode.height = ".3";
  var _EK_ = [_E2_newLink, _Dm_newLink];
  _EF_toNode.links = _EK_;

  _9_.set("nd243", _EF_toNode);

  var _Eh_toNode = (__constructor.prototype = _2K_, new __constructor());

  _Eh_toNode.key = "nd245";
  _Eh_toNode.shape = null;
  _Eh_toNode.text = "\u03BB";
  _Eh_toNode.colour = "yellow";
  _Eh_toNode.name = void 0;
  _Eh_toNode.graph = _6_graph;
  _Eh_toNode.width = null;
  _Eh_toNode.height = null;
  var _Ek_ = [_EZ_newLink, _Ec_newLink, _E2_newLink];
  _Eh_toNode.links = _Ek_;

  _9_.set("nd245", _Eh_toNode);

  var _El_toNode = (__constructor.prototype = _1e_, new __constructor());

  _El_toNode.key = "nd246";
  _El_toNode.shape = null;
  _El_toNode.text = "@";
  _El_toNode.colour = "yellow";
  _El_toNode.name = void 0;
  _El_toNode.graph = _6_graph;
  _El_toNode.width = null;
  _El_toNode.height = null;
  var _Eo_ = [_ET_newLink, _EX_newLink, _EZ_newLink];
  _El_toNode.links = _Eo_;

  _9_.set("nd246", _El_toNode);

  var _F5_toNode = (__constructor.prototype = _67_, new __constructor());

  _F5_toNode.key = "nd248";
  _F5_toNode.shape = null;
  _F5_toNode.text = "!";
  _F5_toNode.colour = "cyan";
  _F5_toNode.name = void 0;
  _F5_toNode.graph = _6_graph;
  _F5_toNode.width = ".3";
  _F5_toNode.height = ".3";
  var _FA_ = [_Es_newLink, _EO_newLink];
  _F5_toNode.links = _FA_;

  _9_.set("nd248", _F5_toNode);

  var _Fx_toNode = (__constructor.prototype = _2K_, new __constructor());

  _Fx_toNode.key = "nd250";
  _Fx_toNode.shape = null;
  _Fx_toNode.text = "\u03BB";
  _Fx_toNode.colour = "yellow";
  _Fx_toNode.name = void 0;
  _Fx_toNode.graph = _6_graph;
  _Fx_toNode.width = null;
  _Fx_toNode.height = null;
  var _G0_ = [_Fq_newLink, _Ft_newLink, _Es_newLink];
  _Fx_toNode.links = _G0_;

  _9_.set("nd250", _Fx_toNode);

  var _G1_toNode = (__constructor.prototype = _1e_, new __constructor());

  _G1_toNode.key = "nd251";
  _G1_toNode.shape = null;
  _G1_toNode.text = "@";
  _G1_toNode.colour = "yellow";
  _G1_toNode.name = void 0;
  _G1_toNode.graph = _6_graph;
  _G1_toNode.width = null;
  _G1_toNode.height = null;
  var _G4_ = [_Fd_newLink, _Fh_newLink, _Fq_newLink];
  _G1_toNode.links = _G4_;

  _9_.set("nd251", _G1_toNode);

  var _GF_toNode = (__constructor.prototype = _67_, new __constructor());

  _GF_toNode.key = "nd253";
  _GF_toNode.shape = null;
  _GF_toNode.text = "!";
  _GF_toNode.colour = "cyan";
  _GF_toNode.name = void 0;
  _GF_toNode.graph = _6_graph;
  _GF_toNode.width = ".3";
  _GF_toNode.height = ".3";
  var _GK_ = [_G8_newLink, _FE_newLink];
  _GF_toNode.links = _GK_;

  _9_.set("nd253", _GF_toNode);

  var _GT_fromNode = (__constructor.prototype = _2K_, new __constructor());

  _GT_fromNode.key = "nd255";
  _GT_fromNode.shape = null;
  _GT_fromNode.text = "\u03BB";
  _GT_fromNode.colour = "yellow";
  _GT_fromNode.name = void 0;
  _GT_fromNode.graph = _6_graph;
  _GT_fromNode.width = null;
  _GT_fromNode.height = null;
  var _GW_ = [_GO_newLink, _G8_newLink, _GC_newLink];
  _GT_fromNode.links = _GW_;

  _9_.set("nd255", _GT_fromNode);

  var _GX_fromNode = (__constructor.prototype = _5w_, new __constructor());

  _GX_fromNode.key = "nd256";
  _GX_fromNode.shape = null;
  _GX_fromNode.text = "C0";
  _GX_fromNode.colour = "cyan";
  _GX_fromNode.name = void 0;
  _GX_fromNode.graph = _6_graph;
  _GX_fromNode.width = ".3";
  _GX_fromNode.height = ".3";
  var _Gc_ = [_GO_newLink];
  _GX_fromNode.links = _Gc_;

  _9_.set("nd256", _GX_fromNode);

  var _Gd_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _Gd_fromNode.key = "nd257";
  _Gd_fromNode.shape = null;
  _Gd_fromNode.text = "?";
  _Gd_fromNode.colour = "cyan";
  _Gd_fromNode.name = "state";
  _Gd_fromNode.graph = _6_graph;
  _Gd_fromNode.width = ".3";
  _Gd_fromNode.height = ".3";
  var _Gj_ = [_GC_newLink, _Fn_newLink];
  _Gd_fromNode.links = _Gj_;

  _9_.set("nd257", _Gd_fromNode);

  var _Gl_toNode = (__constructor.prototype = _6P_, new __constructor());

  _Gl_toNode.key = "nd258";
  _Gl_toNode.shape = null;
  _Gl_toNode.text = "D";
  _Gl_toNode.colour = "cyan";
  _Gl_toNode.name = void 0;
  _Gl_toNode.graph = _6_graph;
  _Gl_toNode.width = ".3";
  _Gl_toNode.height = ".3";
  var _Gq_ = [_FE_newLink, _Fd_newLink];
  _Gl_toNode.links = _Gq_;

  _9_.set("nd258", _Gl_toNode);

  var _Gv_ = (__constructor.prototype = _1Y_, new __constructor());

  _VP_Delta.prototype = _Gv_;

  _$5_Object_46setPrototypeOf(_VP_Delta, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VP_Delta, _$4_Object_46defineProperty(_Gv_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VQ_, _$4_Object_46defineProperty(_Gv_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VR_, _$4_Object_46defineProperty(_Gv_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VS_, _$4_Object_46defineProperty(_Gv_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Gr_toNode = (__constructor.prototype = _Gv_, new __constructor());

  _Gr_toNode.key = "nd259";
  _Gr_toNode.shape = null;
  _Gr_toNode.text = "\u0394";
  _Gr_toNode.colour = "indianred1";
  _Gr_toNode.name = void 0;
  _Gr_toNode.graph = _6_graph;
  _Gr_toNode.width = null;
  _Gr_toNode.height = null;
  var _Gu_ = [_FU_newLink, _Fb_newLink, _Fh_newLink];
  _Gr_toNode.links = _Gu_;

  _9_.set("nd259", _Gr_toNode);

  var _Gw_fromNode = (__constructor.prototype = _1e_, new __constructor());

  _Gw_fromNode.key = "nd260";
  _Gw_fromNode.shape = null;
  _Gw_fromNode.text = "@";
  _Gw_fromNode.colour = "yellow";
  _Gw_fromNode.name = void 0;
  _Gw_fromNode.graph = _6_graph;
  _Gw_fromNode.width = null;
  _Gw_fromNode.height = null;
  var _Gz_ = [_FR_newLink, _FU_newLink, _F0_newLink];
  _Gw_fromNode.links = _Gz_;

  _9_.set("nd260", _Gw_fromNode);

  var _H0_fromNode = (__constructor.prototype = _1e_, new __constructor());

  _H0_fromNode.key = "nd261";
  _H0_fromNode.shape = null;
  _H0_fromNode.text = "@";
  _H0_fromNode.colour = "yellow";
  _H0_fromNode.name = void 0;
  _H0_fromNode.graph = _6_graph;
  _H0_fromNode.width = null;
  _H0_fromNode.height = null;
  var _H3_ = [_FJ_newLink, _FN_newLink, _FY_newLink];
  _H0_fromNode.links = _H3_;

  _9_.set("nd261", _H0_fromNode);

  var _H4_fromNode = (__constructor.prototype = _6P_, new __constructor());

  _H4_fromNode.key = "nd262";
  _H4_fromNode.shape = null;
  _H4_fromNode.text = "D";
  _H4_fromNode.colour = "cyan";
  _H4_fromNode.name = "trans";
  _H4_fromNode.graph = _6_graph;
  _H4_fromNode.width = ".3";
  _H4_fromNode.height = ".3";
  var _HA_ = [_FJ_newLink, _Ew_newLink];
  _H4_fromNode.links = _HA_;

  _9_.set("nd262", _H4_fromNode);

  var _HB_toNode = (__constructor.prototype = _6P_, new __constructor());

  _HB_toNode.key = "nd263";
  _HB_toNode.shape = null;
  _HB_toNode.text = "D";
  _HB_toNode.colour = "cyan";
  _HB_toNode.name = void 0;
  _HB_toNode.graph = _6_graph;
  _HB_toNode.width = ".3";
  _HB_toNode.height = ".3";
  var _HG_ = [_FN_newLink, _FR_newLink];
  _HB_toNode.links = _HG_;

  _9_.set("nd263", _HB_toNode);

  var _HH_fromNode = (__constructor.prototype = _Cw_, new __constructor());

  _HH_fromNode.key = "nd264";
  _HH_fromNode.shape = null;
  _HH_fromNode.text = "C";
  _HH_fromNode.colour = "cyan";
  _HH_fromNode.name = "state";
  _HH_fromNode.graph = _6_graph;
  _HH_fromNode.width = ".3";
  _HH_fromNode.height = ".3";
  var _HN_ = [_FY_newLink, _Fb_newLink, _Fj_newLink];
  _HH_fromNode.links = _HN_;

  _9_.set("nd264", _HH_fromNode);

  var _HO_fromNode = (__constructor.prototype = _Cw_, new __constructor());

  _HO_fromNode.key = "nd265";
  _HO_fromNode.shape = null;
  _HO_fromNode.text = "C";
  _HO_fromNode.colour = "cyan";
  _HO_fromNode.name = "state";
  _HO_fromNode.graph = _6_graph;
  _HO_fromNode.width = ".3";
  _HO_fromNode.height = ".3";
  var _HT_ = [_Fj_newLink, _Fn_newLink, _Ft_newLink];
  _HO_fromNode.links = _HT_;

  _9_.set("nd265", _HO_fromNode);

  var _HU_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _HU_fromNode.key = "nd266";
  _HU_fromNode.shape = null;
  _HU_fromNode.text = "?";
  _HU_fromNode.colour = "cyan";
  _HU_fromNode.name = "trans";
  _HU_fromNode.graph = _6_graph;
  _HU_fromNode.width = ".3";
  _HU_fromNode.height = ".3";
  var _HZ_ = [_Ew_newLink, _E6_newLink];
  _HU_fromNode.links = _HZ_;

  _9_.set("nd266", _HU_fromNode);

  var _Ha_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _Ha_fromNode.key = "nd267";
  _Ha_fromNode.shape = null;
  _Ha_fromNode.text = "?";
  _Ha_fromNode.colour = "cyan";
  _Ha_fromNode.name = "inp";
  _Ha_fromNode.graph = _6_graph;
  _Ha_fromNode.width = ".3";
  _Ha_fromNode.height = ".3";
  var _Hg_ = [_F0_newLink, _Ec_newLink];
  _Ha_fromNode.links = _Hg_;

  _9_.set("nd267", _Ha_fromNode);

  var _Hi_toNode = (__constructor.prototype = _6P_, new __constructor());

  _Hi_toNode.key = "nd268";
  _Hi_toNode.shape = null;
  _Hi_toNode.text = "D";
  _Hi_toNode.colour = "cyan";
  _Hi_toNode.name = void 0;
  _Hi_toNode.graph = _6_graph;
  _Hi_toNode.width = ".3";
  _Hi_toNode.height = ".3";
  var _Hn_ = [_EO_newLink, _ET_newLink];
  _Hi_toNode.links = _Hn_;

  _9_.set("nd268", _Hi_toNode);

  var _Hv_ = (__constructor.prototype = _1Y_, new __constructor());

  _VT_Prov.prototype = _Hv_;

  _$5_Object_46setPrototypeOf(_VT_Prov, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VT_Prov, _$4_Object_46defineProperty(_Hv_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VU_, _$4_Object_46defineProperty(_Hv_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IN_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VY_Mod, _$4_Object_46defineProperty(_IN_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VZ_, _$4_Object_46defineProperty(_IN_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Va_, _$4_Object_46defineProperty(_IN_, "update", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vb_, _$4_Object_46defineProperty(_IN_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _VY_Mod.prototype = _IN_;

  _$5_Object_46setPrototypeOf(_VY_Mod, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VV_, _$4_Object_46defineProperty(_Hv_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VW_, _$4_Object_46defineProperty(_Hv_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _VX_, _$4_Object_46defineProperty(_Hv_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Ho_fromNode = (__constructor.prototype = _Hv_, new __constructor());

  _Ho_fromNode.key = "nd269";
  _Ho_fromNode.shape = "diamond";
  _Ho_fromNode.text = "";
  _Ho_fromNode.colour = "indianred1";
  _Ho_fromNode.name = void 0;
  _Ho_fromNode.graph = _6_graph;
  _Ho_fromNode.width = ".3";
  _Ho_fromNode.height = ".3";
  var _Hu_ = [_EX_newLink, _EA_newLink];
  _Ho_fromNode.links = _Hu_;

  _9_.set("nd269", _Ho_fromNode);

  var _Hw_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _Hw_fromNode.key = "nd270";
  _Hw_fromNode.shape = null;
  _Hw_fromNode.text = "?";
  _Hw_fromNode.colour = "cyan";
  _Hw_fromNode.name = "trans";
  _Hw_fromNode.graph = _6_graph;
  _Hw_fromNode.width = ".3";
  _Hw_fromNode.height = ".3";
  var _I1_ = [_E6_newLink, _Dq_newLink];
  _Hw_fromNode.links = _I1_;

  _9_.set("nd270", _Hw_fromNode);

  var _I2_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _I2_fromNode.key = "nd271";
  _I2_fromNode.shape = null;
  _I2_fromNode.text = "?";
  _I2_fromNode.colour = "cyan";
  _I2_fromNode.name = "init";
  _I2_fromNode.graph = _6_graph;
  _I2_fromNode.width = ".3";
  _I2_fromNode.height = ".3";
  var _I8_ = [_EA_newLink, _DY_newLink];
  _I2_fromNode.links = _I8_;

  _9_.set("nd271", _I2_fromNode);

  var _IA_fromNode = (__constructor.prototype = _6F_, new __constructor());

  _IA_fromNode.key = "nd272";
  _IA_fromNode.shape = null;
  _IA_fromNode.text = "?";
  _IA_fromNode.colour = "cyan";
  _IA_fromNode.name = "init";
  _IA_fromNode.graph = _6_graph;
  _IA_fromNode.width = ".3";
  _IA_fromNode.height = ".3";
  var _IF_ = [_DY_newLink, _DI_newLink];
  _IA_fromNode.links = _IF_;

  _9_.set("nd272", _IA_fromNode);

  var _II_fromNode = (__constructor.prototype = _IN_, new __constructor());

  _II_fromNode.key = "nd273";
  _II_fromNode.shape = null;
  _II_fromNode.text = "M";
  _II_fromNode.colour = "indianred1";
  _II_fromNode.name = void 0;
  _II_fromNode.graph = _6_graph;
  _II_fromNode.width = null;
  _II_fromNode.height = null;
  var _IL_ = [_i_link, _u_link, _19_link,,];
  _IL_.length = 3;
  _II_fromNode.links = _IL_;

  _9_.set("nd273", _II_fromNode);

  var _IO_toNode = (__constructor.prototype = _9l_, new __constructor());

  _IO_toNode.key = "nd274";
  _IO_toNode.shape = null;
  _IO_toNode.text = 1;
  _IO_toNode.colour = "mediumpurple1";
  _IO_toNode.name = 1;
  _IO_toNode.graph = _6_graph;
  _IO_toNode.width = null;
  _IO_toNode.height = null;
  var _IQ_ = [_i_link];
  _IO_toNode.links = _IQ_;

  _9_.set("nd274", _IO_toNode);

  var _JB_weak1 = (__constructor.prototype = _5w_, new __constructor());

  _JB_weak1.key = "nd275";
  _JB_weak1.shape = null;
  _JB_weak1.text = "C0";
  _JB_weak1.colour = "cyan";
  _JB_weak1.name = void 0;
  _JB_weak1.graph = _6_graph;
  _JB_weak1.width = ".3";
  _JB_weak1.height = ".3";
  var _JG_ = [_p_link];
  _JB_weak1.links = _JG_;

  _9_.set("nd275", _JB_weak1);

  var _JH_weak2 = (__constructor.prototype = _5w_, new __constructor());

  _JH_weak2.key = "nd276";
  _JH_weak2.shape = null;
  _JH_weak2.text = "C0";
  _JH_weak2.colour = "cyan";
  _JH_weak2.name = void 0;
  _JH_weak2.graph = _6_graph;
  _JH_weak2.width = ".3";
  _JH_weak2.height = ".3";
  var _JM_ = [_d_link];
  _JH_weak2.links = _JM_;

  _9_.set("nd276", _JH_weak2);

  var _Jd_toNode = (__constructor.prototype = _67_, new __constructor());

  _Jd_toNode.key = "nd279";
  _Jd_toNode.shape = null;
  _Jd_toNode.text = "!";
  _Jd_toNode.colour = "cyan";
  _Jd_toNode.name = void 0;
  _Jd_toNode.graph = _6_graph;
  _Jd_toNode.width = ".3";
  _Jd_toNode.height = ".3";
  var _Ji_ = [_JQ_, _1K_otherNextLink,,];
  _Ji_.length = 2;
  _Jd_toNode.links = _Ji_;

  _9_.set("nd279", _Jd_toNode);

  var _JZ_toNode = (__constructor.prototype = _9l_, new __constructor());

  _JZ_toNode.key = "nd280";
  _JZ_toNode.shape = null;
  _JZ_toNode.text = "\u2022";
  _JZ_toNode.colour = "mediumpurple1";
  _JZ_toNode.name = "\u2022";
  _JZ_toNode.graph = _6_graph;
  _JZ_toNode.width = null;
  _JZ_toNode.height = null;
  var _Jc_ = [_JQ_];
  _JZ_toNode.links = _Jc_;

  _9_.set("nd280", _JZ_toNode);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UC_, _$4_Object_46defineProperty(_1Y_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UD_, _$4_Object_46defineProperty(_1Y_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UE_, _$4_Object_46defineProperty(_1Y_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UF_, _$4_Object_46defineProperty(_1Y_, "findLinksConnected", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UG_, _$4_Object_46defineProperty(_1Y_, "findLinksInto", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UH_, _$4_Object_46defineProperty(_1Y_, "findLinksOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UI_, _$4_Object_46defineProperty(_1Y_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UJ_, _$4_Object_46defineProperty(_1Y_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UK_, _$4_Object_46defineProperty(_1Y_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _UL_, _$4_Object_46defineProperty(_1Y_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _60_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ug_Group, _$4_Object_46defineProperty(_60_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uh_, _$4_Object_46defineProperty(_60_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ui_, _$4_Object_46defineProperty(_60_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uj_, _$4_Object_46defineProperty(_60_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uk_, _$4_Object_46defineProperty(_60_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ul_, _$4_Object_46defineProperty(_60_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _B_ = (__constructor.prototype = _60_, new __constructor());

  _B_.key = "nd0";
  _B_.shape = null;
  _B_.text = null;
  _B_.colour = null;
  _B_.name = void 0;
  _B_.graph = _6_graph;
  _B_.group = null;
  _B_.width = null;
  _B_.height = null;
  var _E_ = [_F_link, _L_link, _P_link, _U_link, _Y_link, _d_link, _i_link, _p_link, _u_link, _x_link, _11_link, _16_link, _19_link, _1C_otherNextLink, _1H_i, _1K_otherNextLink,,,,,,,,,,,,,,];
  _E_.length = 16;
  _B_.links = _E_;

  var _6I_ = (__constructor.prototype = _60_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V1_Term, _$4_Object_46defineProperty(_6I_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V2_, _$4_Object_46defineProperty(_6I_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V3_, _$4_Object_46defineProperty(_6I_, "createPaxsOnTopOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6H_ = (__constructor.prototype = _6I_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ut_BoxWrapper, _$4_Object_46defineProperty(_6H_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uu_, _$4_Object_46defineProperty(_6H_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uv_, _$4_Object_46defineProperty(_6H_, "removeAux", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uw_, _$4_Object_46defineProperty(_6H_, "moveOut", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ux_, _$4_Object_46defineProperty(_6H_, "copyBox", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uy_, _$4_Object_46defineProperty(_6H_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uz_, _$4_Object_46defineProperty(_6H_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _V0_, _$4_Object_46defineProperty(_6H_, "deleteAndPreserveLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1f_node = (__constructor.prototype = _6H_, new __constructor());

  _1f_node.key = "nd8";
  _1f_node.shape = null;
  _1f_node.text = null;
  _1f_node.colour = null;
  _1f_node.name = void 0;
  _1f_node.graph = _6_graph;
  _1f_node.group = _B_;
  _1f_node.width = null;
  _1f_node.height = null;
  var _1h_ = [_1i_, _1m_link];
  _1f_node.links = _1h_;

  var _5z_ = (__constructor.prototype = _60_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ue_Box, _$4_Object_46defineProperty(_5z_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Uf_, _$4_Object_46defineProperty(_5z_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1r_node = (__constructor.prototype = _5z_, new __constructor());

  _1r_node.key = "nd9";
  _1r_node.shape = null;
  _1r_node.text = null;
  _1r_node.colour = null;
  _1r_node.name = void 0;
  _1r_node.graph = _6_graph;
  _1r_node.group = _1f_node;
  _1r_node.width = null;
  _1r_node.height = null;
  var _1t_ = [_1u_, _1z_, _23_, _27_, _2A_];
  _1r_node.links = _1t_;

  var _2P_node = (__constructor.prototype = _6H_, new __constructor());

  _2P_node.key = "nd13";
  _2P_node.shape = null;
  _2P_node.text = null;
  _2P_node.colour = null;
  _2P_node.name = void 0;
  _2P_node.graph = _6_graph;
  _2P_node.group = _1r_node;
  _2P_node.width = null;
  _2P_node.height = null;
  var _2R_ = [_2S_, _2W_outLink];
  _2P_node.links = _2R_;

  var _2b_node = (__constructor.prototype = _5z_, new __constructor());

  _2b_node.key = "nd14";
  _2b_node.shape = null;
  _2b_node.text = null;
  _2b_node.colour = null;
  _2b_node.name = void 0;
  _2b_node.graph = _6_graph;
  _2b_node.group = _2P_node;
  _2b_node.width = null;
  _2b_node.height = null;
  var _2d_ = [_2e_, _2j_, _2o_, _2r_, _2v_, _2y_, _31_outLink,,,];
  _2d_.length = 7;
  _2b_node.links = _2d_;

  var _3E_node = (__constructor.prototype = _6H_, new __constructor());

  _3E_node.key = "nd18";
  _3E_node.shape = null;
  _3E_node.text = null;
  _3E_node.colour = null;
  _3E_node.name = void 0;
  _3E_node.graph = _6_graph;
  _3E_node.group = _2b_node;
  _3E_node.width = null;
  _3E_node.height = null;
  var _3G_ = [_3H_];
  _3E_node.links = _3G_;

  var _3M_node = (__constructor.prototype = _5z_, new __constructor());

  _3M_node.key = "nd19";
  _3M_node.shape = null;
  _3M_node.text = null;
  _3M_node.colour = null;
  _3M_node.name = void 0;
  _3M_node.graph = _6_graph;
  _3M_node.group = _3E_node;
  _3M_node.width = null;
  _3M_node.height = null;
  var _3O_ = [_3P_, _3U_, _3Y_, _3c_, _3f_];
  _3M_node.links = _3O_;

  var _3s_node = (__constructor.prototype = _6H_, new __constructor());

  _3s_node.key = "nd23";
  _3s_node.shape = null;
  _3s_node.text = null;
  _3s_node.colour = null;
  _3s_node.name = void 0;
  _3s_node.graph = _6_graph;
  _3s_node.group = _3M_node;
  _3s_node.width = null;
  _3s_node.height = null;
  var _3u_ = [_3v_, _3z_];
  _3s_node.links = _3u_;

  var _44_node = (__constructor.prototype = _5z_, new __constructor());

  _44_node.key = "nd24";
  _44_node.shape = null;
  _44_node.text = null;
  _44_node.colour = null;
  _44_node.name = void 0;
  _44_node.graph = _6_graph;
  _44_node.group = _3s_node;
  _44_node.width = null;
  _44_node.height = null;
  var _46_ = [_47_, _4C_, _4G_, _4K_, _4N_];
  _44_node.links = _46_;

  var _4a_node = (__constructor.prototype = _6H_, new __constructor());

  _4a_node.key = "nd28";
  _4a_node.shape = null;
  _4a_node.text = null;
  _4a_node.colour = null;
  _4a_node.name = void 0;
  _4a_node.graph = _6_graph;
  _4a_node.group = _44_node;
  _4a_node.width = null;
  _4a_node.height = null;
  var _4c_ = [_4d_, _4h_link];
  _4a_node.links = _4c_;

  var _4m_node = (__constructor.prototype = _5z_, new __constructor());

  _4m_node.key = "nd29";
  _4m_node.shape = null;
  _4m_node.text = null;
  _4m_node.colour = null;
  _4m_node.name = void 0;
  _4m_node.graph = _6_graph;
  _4m_node.group = _4a_node;
  _4m_node.width = null;
  _4m_node.height = null;
  var _4o_ = [_4p_, _4u_, _4y_, _52_, _55_];
  _4m_node.links = _4o_;

  var _5I_node = (__constructor.prototype = _6H_, new __constructor());

  _5I_node.key = "nd33";
  _5I_node.shape = null;
  _5I_node.text = null;
  _5I_node.colour = null;
  _5I_node.name = void 0;
  _5I_node.graph = _6_graph;
  _5I_node.group = _4m_node;
  _5I_node.width = null;
  _5I_node.height = null;
  var _5K_ = [_5L_, _5P_outLink];
  _5I_node.links = _5K_;

  var _5U_node = (__constructor.prototype = _5z_, new __constructor());

  _5U_node.key = "nd34";
  _5U_node.shape = null;
  _5U_node.text = null;
  _5U_node.colour = null;
  _5U_node.name = void 0;
  _5U_node.graph = _6_graph;
  _5U_node.group = _5I_node;
  _5U_node.width = null;
  _5U_node.height = null;
  var _5W_ = [_5X_, _5a_,,];
  _5W_.length = 2;
  _5U_node.links = _5W_;
  var _5f_ = [_5g_node, _5k_node, _5q_node,,];
  _5f_.length = 3;
  _5U_node.nodes = _5f_;
  var _5T_ = [_5U_node, _61_node, _68_node];
  _5I_node.nodes = _5T_;
  _5I_node.prin = _61_node;
  var _6G_newPaxs = [_68_node];
  _5I_node.auxs = _6G_newPaxs;
  _5I_node.box = _5U_node;
  var _59_ = [_5A_node, _5E_node, _5I_node, _6J_node, _6Q_node, _6V_node];
  _4m_node.nodes = _59_;
  var _4l_ = [_4m_node, _6b_node, _6h_node];
  _4a_node.nodes = _4l_;
  _4a_node.prin = _6b_node;
  var _6n_newPaxs = [_6h_node];
  _4a_node.auxs = _6n_newPaxs;
  _4a_node.box = _4m_node;
  var _4R_ = [_4S_node, _4W_node, _4a_node, _6o_node, _6u_node, _6y_node];
  _44_node.nodes = _4R_;
  var _43_ = [_44_node, _74_node, _7A_node];
  _3s_node.nodes = _43_;
  _3s_node.prin = _74_node;
  var _7G_newPaxs = [_7A_node];
  _3s_node.auxs = _7G_newPaxs;
  _3s_node.box = _44_node;
  var _3j_ = [_3k_node, _3o_node, _3s_node, _7H_node, _7N_node];
  _3M_node.nodes = _3j_;
  var _3L_ = [_3M_node, _7R_node];
  _3E_node.nodes = _3L_;
  _3E_node.prin = _7R_node;
  var _7X_newPaxs = [];
  _3E_node.auxs = _7X_newPaxs;
  _3E_node.box = _3M_node;
  var _35_ = [_36_node, _3A_node, _3E_node, _7Y_node, _7e_node, _7i_node, _7q_node,,,];
  _35_.length = 7;
  _2b_node.nodes = _35_;
  var _2a_ = [_2b_node, _7x_node, _83_node];
  _2P_node.nodes = _2a_;
  _2P_node.prin = _7x_node;
  var _8A_newPaxs = [_83_node];
  _2P_node.auxs = _8A_newPaxs;
  _2P_node.box = _2b_node;

  var _8H_node = (__constructor.prototype = _6H_, new __constructor());

  _8H_node.key = "nd77";
  _8H_node.shape = null;
  _8H_node.text = null;
  _8H_node.colour = null;
  _8H_node.name = void 0;
  _8H_node.graph = _6_graph;
  _8H_node.group = _1r_node;
  _8H_node.width = null;
  _8H_node.height = null;
  var _8J_ = [_8K_, _8O_outLink];
  _8H_node.links = _8J_;

  var _8T_node = (__constructor.prototype = _5z_, new __constructor());

  _8T_node.key = "nd78";
  _8T_node.shape = null;
  _8T_node.text = null;
  _8T_node.colour = null;
  _8T_node.name = void 0;
  _8T_node.graph = _6_graph;
  _8T_node.group = _8H_node;
  _8T_node.width = null;
  _8T_node.height = null;
  var _8V_ = [_8W_, _8a_, _8e_, _8i_, _8m_, _8q_, _8u_, _8y_, _91_outLink,,,];
  _8V_.length = 9;
  _8T_node.links = _8V_;

  var _9V_node = (__constructor.prototype = _6H_, new __constructor());

  _9V_node.key = "nd87";
  _9V_node.shape = null;
  _9V_node.text = null;
  _9V_node.colour = null;
  _9V_node.name = void 0;
  _9V_node.graph = _6_graph;
  _9V_node.group = _8T_node;
  _9V_node.width = null;
  _9V_node.height = null;
  var _9X_ = [_9Y_];
  _9V_node.links = _9X_;

  var _9d_node = (__constructor.prototype = _5z_, new __constructor());

  _9d_node.key = "nd88";
  _9d_node.shape = null;
  _9d_node.text = null;
  _9d_node.colour = null;
  _9d_node.name = void 0;
  _9d_node.graph = _6_graph;
  _9d_node.group = _9V_node;
  _9d_node.width = null;
  _9d_node.height = null;
  var _9f_ = [];
  _9d_node.links = _9f_;
  var _9g_ = [_9h_node];
  _9d_node.nodes = _9g_;
  var _9c_ = [_9d_node, _9m_node];
  _9V_node.nodes = _9c_;
  _9V_node.prin = _9m_node;
  var _9s_ = [];
  _9V_node.auxs = _9s_;
  _9V_node.box = _9d_node;

  var _9z_node = (__constructor.prototype = _6H_, new __constructor());

  _9z_node.key = "nd94";
  _9z_node.shape = null;
  _9z_node.text = null;
  _9z_node.colour = null;
  _9z_node.name = void 0;
  _9z_node.graph = _6_graph;
  _9z_node.group = _8T_node;
  _9z_node.width = null;
  _9z_node.height = null;
  var _A1_ = [_A2_];
  _9z_node.links = _A1_;

  var _A7_node = (__constructor.prototype = _5z_, new __constructor());

  _A7_node.key = "nd95";
  _A7_node.shape = null;
  _A7_node.text = null;
  _A7_node.colour = null;
  _A7_node.name = void 0;
  _A7_node.graph = _6_graph;
  _A7_node.group = _9z_node;
  _A7_node.width = null;
  _A7_node.height = null;
  var _A9_ = [_AA_, _AE_];
  _A7_node.links = _A9_;

  var _AN_node = (__constructor.prototype = _6H_, new __constructor());

  _AN_node.key = "nd98";
  _AN_node.shape = null;
  _AN_node.text = null;
  _AN_node.colour = null;
  _AN_node.name = void 0;
  _AN_node.graph = _6_graph;
  _AN_node.group = _A7_node;
  _AN_node.width = null;
  _AN_node.height = null;
  var _AP_ = [_AQ_, _AU_outLink];
  _AN_node.links = _AP_;

  var _AZ_node = (__constructor.prototype = _5z_, new __constructor());

  _AZ_node.key = "nd99";
  _AZ_node.shape = null;
  _AZ_node.text = null;
  _AZ_node.colour = null;
  _AZ_node.name = void 0;
  _AZ_node.graph = _6_graph;
  _AZ_node.group = _AN_node;
  _AZ_node.width = null;
  _AZ_node.height = null;
  var _Ab_ = [_Ac_, _Ag_, _Aj_outLink,,,];
  _Ab_.length = 3;
  _AZ_node.links = _Ab_;
  var _An_ = [_Ao_node, _As_fromNode, _Az_node,,,];
  _An_.length = 3;
  _AZ_node.nodes = _An_;
  var _AY_ = [_AZ_node, _B5_node, _BB_node];
  _AN_node.nodes = _AY_;
  _AN_node.prin = _B5_node;
  var _BI_newPaxs = [_BB_node];
  _AN_node.auxs = _BI_newPaxs;
  _AN_node.box = _AZ_node;
  var _AI_ = [_AJ_node, _AN_node];
  _A7_node.nodes = _AI_;
  var _A6_ = [_A7_node, _BJ_node];
  _9z_node.nodes = _A6_;
  _9z_node.prin = _BJ_node;
  var _BP_newPaxs = [];
  _9z_node.auxs = _BP_newPaxs;
  _9z_node.box = _A7_node;
  var _95_ = [_96_node, _9A_fromNode, _9F_node, _9J_node, _9N_node, _9V_node, _9t_node, _9z_node, _BQ_node,,,];
  _95_.length = 9;
  _8T_node.nodes = _95_;
  var _8S_ = [_8T_node, _BX_node, _Bd_node];
  _8H_node.nodes = _8S_;
  _8H_node.prin = _BX_node;
  var _Bj_newPaxs = [_Bd_node];
  _8H_node.auxs = _Bj_newPaxs;
  _8H_node.box = _8T_node;
  var _2F_ = [_2G_node, _2L_node, _2P_node, _8B_node, _8H_node];
  _1r_node.nodes = _2F_;
  var _1q_ = [_1r_node, _Bk_node, _Bq_node];
  _1f_node.nodes = _1q_;
  _1f_node.prin = _Bk_node;
  var _Bw_newPaxs = [_Bq_node];
  _1f_node.auxs = _Bw_newPaxs;
  _1f_node.box = _1r_node;

  var _C3_node = (__constructor.prototype = _6H_, new __constructor());

  _C3_node.key = "nd130";
  _C3_node.shape = null;
  _C3_node.text = null;
  _C3_node.colour = null;
  _C3_node.name = void 0;
  _C3_node.graph = _6_graph;
  _C3_node.group = _B_;
  _C3_node.width = null;
  _C3_node.height = null;
  var _C5_ = [_C6_link];
  _C3_node.links = _C5_;

  var _CB_node = (__constructor.prototype = _5z_, new __constructor());

  _CB_node.key = "nd131";
  _CB_node.shape = null;
  _CB_node.text = null;
  _CB_node.colour = null;
  _CB_node.name = void 0;
  _CB_node.graph = _6_graph;
  _CB_node.group = _C3_node;
  _CB_node.width = null;
  _CB_node.height = null;
  var _CD_ = [];
  _CB_node.links = _CD_;
  var _CE_ = [_CF_node];
  _CB_node.nodes = _CE_;
  var _CA_ = [_CB_node, _CJ_toNode];
  _C3_node.nodes = _CA_;
  _C3_node.prin = _CJ_toNode;
  var _CQ_ = [];
  _C3_node.auxs = _CQ_;
  _C3_node.box = _CB_node;

  var _CR_node = (__constructor.prototype = _6H_, new __constructor());

  _CR_node.key = "nd162";
  _CR_node.shape = null;
  _CR_node.text = null;
  _CR_node.colour = null;
  _CR_node.name = void 0;
  _CR_node.graph = _6_graph;
  _CR_node.group = _B_;
  _CR_node.width = null;
  _CR_node.height = null;
  var _CT_ = [_CU_link];
  _CR_node.links = _CT_;

  var _CZ_node = (__constructor.prototype = _5z_, new __constructor());

  _CZ_node.key = "nd163";
  _CZ_node.shape = null;
  _CZ_node.text = null;
  _CZ_node.colour = null;
  _CZ_node.name = void 0;
  _CZ_node.graph = _6_graph;
  _CZ_node.group = _CR_node;
  _CZ_node.width = null;
  _CZ_node.height = null;
  var _Cb_ = [];
  _CZ_node.links = _Cb_;
  var _Cc_ = [_Cd_node];
  _CZ_node.nodes = _Cc_;
  var _CY_ = [_CZ_node, _Ch_toNode];
  _CR_node.nodes = _CY_;
  _CR_node.prin = _Ch_toNode;
  var _Co_ = [];
  _CR_node.auxs = _Co_;
  _CR_node.box = _CZ_node;

  var _Cx_newBoxWrapper = (__constructor.prototype = _6H_, new __constructor());

  _Cx_newBoxWrapper.key = "nd234";
  _Cx_newBoxWrapper.shape = null;
  _Cx_newBoxWrapper.text = null;
  _Cx_newBoxWrapper.colour = null;
  _Cx_newBoxWrapper.name = void 0;
  _Cx_newBoxWrapper.graph = _6_graph;
  _Cx_newBoxWrapper.group = _B_;
  _Cx_newBoxWrapper.width = null;
  _Cx_newBoxWrapper.height = null;
  var _Cz_ = [_D0_newLink];
  _Cx_newBoxWrapper.links = _Cz_;

  var _DB_newBox = (__constructor.prototype = _5z_, new __constructor());

  _DB_newBox.key = "nd236";
  _DB_newBox.shape = null;
  _DB_newBox.text = null;
  _DB_newBox.colour = null;
  _DB_newBox.name = void 0;
  _DB_newBox.graph = _6_graph;
  _DB_newBox.group = _Cx_newBoxWrapper;
  _DB_newBox.width = null;
  _DB_newBox.height = null;
  var _DD_ = [_DE_newLink, _DI_newLink];
  _DB_newBox.links = _DD_;

  var _DR_newBoxWrapper = (__constructor.prototype = _6H_, new __constructor());

  _DR_newBoxWrapper.key = "nd238";
  _DR_newBoxWrapper.shape = null;
  _DR_newBoxWrapper.text = null;
  _DR_newBoxWrapper.colour = null;
  _DR_newBoxWrapper.name = void 0;
  _DR_newBoxWrapper.graph = _6_graph;
  _DR_newBoxWrapper.group = _DB_newBox;
  _DR_newBoxWrapper.width = null;
  _DR_newBoxWrapper.height = null;
  var _DT_ = [_DU_newLink, _DY_newLink];
  _DR_newBoxWrapper.links = _DT_;

  var _Dj_newBox = (__constructor.prototype = _5z_, new __constructor());

  _Dj_newBox.key = "nd240";
  _Dj_newBox.shape = null;
  _Dj_newBox.text = null;
  _Dj_newBox.colour = null;
  _Dj_newBox.name = void 0;
  _Dj_newBox.graph = _6_graph;
  _Dj_newBox.group = _DR_newBoxWrapper;
  _Dj_newBox.width = null;
  _Dj_newBox.height = null;
  var _Dl_ = [_Dm_newLink, _Dq_newLink];
  _Dj_newBox.links = _Dl_;

  var _Dz_newBoxWrapper = (__constructor.prototype = _6H_, new __constructor());

  _Dz_newBoxWrapper.key = "nd242";
  _Dz_newBoxWrapper.shape = null;
  _Dz_newBoxWrapper.text = null;
  _Dz_newBoxWrapper.colour = null;
  _Dz_newBoxWrapper.name = void 0;
  _Dz_newBoxWrapper.graph = _6_graph;
  _Dz_newBoxWrapper.group = _Dj_newBox;
  _Dz_newBoxWrapper.width = null;
  _Dz_newBoxWrapper.height = null;
  var _E1_ = [_E2_newLink, _E6_newLink, _EA_newLink];
  _Dz_newBoxWrapper.links = _E1_;

  var _EL_newBox = (__constructor.prototype = _5z_, new __constructor());

  _EL_newBox.key = "nd244";
  _EL_newBox.shape = null;
  _EL_newBox.text = null;
  _EL_newBox.colour = null;
  _EL_newBox.name = void 0;
  _EL_newBox.graph = _6_graph;
  _EL_newBox.group = _Dz_newBoxWrapper;
  _EL_newBox.width = null;
  _EL_newBox.height = null;
  var _EN_ = [_EO_newLink, _ET_newLink, _EX_newLink, _EZ_newLink, _Ec_newLink];
  _EL_newBox.links = _EN_;

  var _Ep_newBoxWrapper = (__constructor.prototype = _6H_, new __constructor());

  _Ep_newBoxWrapper.key = "nd247";
  _Ep_newBoxWrapper.shape = null;
  _Ep_newBoxWrapper.text = null;
  _Ep_newBoxWrapper.colour = null;
  _Ep_newBoxWrapper.name = void 0;
  _Ep_newBoxWrapper.graph = _6_graph;
  _Ep_newBoxWrapper.group = _EL_newBox;
  _Ep_newBoxWrapper.width = null;
  _Ep_newBoxWrapper.height = null;
  var _Er_ = [_Es_newLink, _Ew_newLink, _F0_newLink];
  _Ep_newBoxWrapper.links = _Er_;

  var _FB_newBox = (__constructor.prototype = _5z_, new __constructor());

  _FB_newBox.key = "nd249";
  _FB_newBox.shape = null;
  _FB_newBox.text = null;
  _FB_newBox.colour = null;
  _FB_newBox.name = void 0;
  _FB_newBox.graph = _6_graph;
  _FB_newBox.group = _Ep_newBoxWrapper;
  _FB_newBox.width = null;
  _FB_newBox.height = null;
  var _FD_ = [_FE_newLink, _FJ_newLink, _FN_newLink, _FR_newLink, _FU_newLink, _FY_newLink, _Fb_newLink, _Fd_newLink, _Fh_newLink, _Fj_newLink, _Fn_newLink, _Fq_newLink, _Ft_newLink];
  _FB_newBox.links = _FD_;

  var _G5_newBoxWrapper = (__constructor.prototype = _6H_, new __constructor());

  _G5_newBoxWrapper.key = "nd252";
  _G5_newBoxWrapper.shape = null;
  _G5_newBoxWrapper.text = null;
  _G5_newBoxWrapper.colour = null;
  _G5_newBoxWrapper.name = void 0;
  _G5_newBoxWrapper.graph = _6_graph;
  _G5_newBoxWrapper.group = _FB_newBox;
  _G5_newBoxWrapper.width = null;
  _G5_newBoxWrapper.height = null;
  var _G7_ = [_G8_newLink, _GC_newLink];
  _G5_newBoxWrapper.links = _G7_;

  var _GL_newBox = (__constructor.prototype = _5z_, new __constructor());

  _GL_newBox.key = "nd254";
  _GL_newBox.shape = null;
  _GL_newBox.text = null;
  _GL_newBox.colour = null;
  _GL_newBox.name = void 0;
  _GL_newBox.graph = _6_graph;
  _GL_newBox.group = _G5_newBoxWrapper;
  _GL_newBox.width = null;
  _GL_newBox.height = null;
  var _GN_ = [_GO_newLink];
  _GL_newBox.links = _GN_;
  var _GS_ = [_GT_fromNode, _GX_fromNode];
  _GL_newBox.nodes = _GS_;
  var _GE_ = [_GF_toNode, _GL_newBox, _Gd_fromNode];
  _G5_newBoxWrapper.nodes = _GE_;
  _G5_newBoxWrapper.prin = _GF_toNode;
  var _Gk_ = [_Gd_fromNode];
  _G5_newBoxWrapper.auxs = _Gk_;
  _G5_newBoxWrapper.box = _GL_newBox;
  var _Fw_ = [_Fx_toNode, _G1_toNode, _G5_newBoxWrapper, _Gl_toNode, _Gr_toNode, _Gw_fromNode, _H0_fromNode, _H4_fromNode, _HB_toNode, _HH_fromNode, _HO_fromNode];
  _FB_newBox.nodes = _Fw_;
  var _F4_ = [_F5_toNode, _FB_newBox, _HU_fromNode, _Ha_fromNode];
  _Ep_newBoxWrapper.nodes = _F4_;
  _Ep_newBoxWrapper.prin = _F5_toNode;
  var _Hh_ = [_HU_fromNode, _Ha_fromNode];
  _Ep_newBoxWrapper.auxs = _Hh_;
  _Ep_newBoxWrapper.box = _FB_newBox;
  var _Eg_ = [_Eh_toNode, _El_toNode, _Ep_newBoxWrapper, _Hi_toNode, _Ho_fromNode];
  _EL_newBox.nodes = _Eg_;
  var _EE_ = [_EF_toNode, _EL_newBox, _Hw_fromNode, _I2_fromNode];
  _Dz_newBoxWrapper.nodes = _EE_;
  _Dz_newBoxWrapper.prin = _EF_toNode;
  var _I9_ = [_Hw_fromNode, _I2_fromNode];
  _Dz_newBoxWrapper.auxs = _I9_;
  _Dz_newBoxWrapper.box = _EL_newBox;
  var _Du_ = [_Dv_toNode, _Dz_newBoxWrapper];
  _Dj_newBox.nodes = _Du_;
  var _Dc_ = [_Dd_toNode, _Dj_newBox, _IA_fromNode];
  _DR_newBoxWrapper.nodes = _Dc_;
  _DR_newBoxWrapper.prin = _Dd_toNode;
  var _IG_ = [_IA_fromNode];
  _DR_newBoxWrapper.auxs = _IG_;
  _DR_newBoxWrapper.box = _Dj_newBox;
  var _DM_ = [_DN_toNode, _DR_newBoxWrapper];
  _DB_newBox.nodes = _DM_;
  var _D4_ = [_D5_fromNode, _DB_newBox];
  _Cx_newBoxWrapper.nodes = _D4_;
  _Cx_newBoxWrapper.prin = _D5_fromNode;
  var _IH_ = [];
  _Cx_newBoxWrapper.auxs = _IH_;
  _Cx_newBoxWrapper.box = _DB_newBox;

  var _Id_node = (__constructor.prototype = _6H_, new __constructor());

  _Id_node.key = "nd146";
  _Id_node.shape = null;
  _Id_node.text = null;
  _Id_node.colour = null;
  _Id_node.name = void 0;
  _Id_node.graph = _6_graph;
  _Id_node.group = _B_;
  _Id_node.width = null;
  _Id_node.height = null;
  var _If_ = [_Ig_link];
  _Id_node.links = _If_;

  var _Il_node = (__constructor.prototype = _5z_, new __constructor());

  _Il_node.key = "nd147";
  _Il_node.shape = null;
  _Il_node.text = null;
  _Il_node.colour = null;
  _Il_node.name = void 0;
  _Il_node.graph = _6_graph;
  _Il_node.group = _Id_node;
  _Il_node.width = null;
  _Il_node.height = null;
  var _In_ = [];
  _Il_node.links = _In_;
  var _Io_ = [_Ip_node];
  _Il_node.nodes = _Io_;
  var _Ik_ = [_Il_node, _It_left];
  _Id_node.nodes = _Ik_;
  _Id_node.prin = _It_left;
  var _Iz_ = [];
  _Id_node.auxs = _Iz_;
  _Id_node.box = _Il_node;

  var _JN_wrapper = (__constructor.prototype = _6H_, new __constructor());

  _JN_wrapper.key = "nd277";
  _JN_wrapper.shape = null;
  _JN_wrapper.text = null;
  _JN_wrapper.colour = null;
  _JN_wrapper.name = void 0;
  _JN_wrapper.graph = _6_graph;
  _JN_wrapper.group = _B_;
  _JN_wrapper.width = null;
  _JN_wrapper.height = null;
  var _JP_ = [_JQ_];
  _JN_wrapper.links = _JP_;

  var _JV_box = (__constructor.prototype = _5z_, new __constructor());

  _JV_box.key = "nd278";
  _JV_box.shape = null;
  _JV_box.text = null;
  _JV_box.colour = null;
  _JV_box.name = void 0;
  _JV_box.graph = _6_graph;
  _JV_box.group = _JN_wrapper;
  _JV_box.width = null;
  _JV_box.height = null;
  var _JX_ = [];
  _JV_box.links = _JX_;
  var _JY_ = [_JZ_toNode];
  _JV_box.nodes = _JY_;
  var _JU_ = [_JV_box, _Jd_toNode];
  _JN_wrapper.nodes = _JU_;
  _JN_wrapper.prin = _Jd_toNode;
  var _Jk_ = [];
  _JN_wrapper.auxs = _Jk_;
  _JN_wrapper.box = _JV_box;
  var _1Q_ = [_1R_fromNode, _1Z_prev, _1f_node, _Bx_node, _C3_node, _CR_node, _Cp_toNode, _Cx_newBoxWrapper, _II_fromNode, _IO_toNode, _IR_toNode, _IY_prev, _Id_node, _J0_right, _J5_otherNode, _JB_weak1, _JH_weak2, _JN_wrapper, _Jl_otherNode,,,,,,,,,,,];
  _1Q_.length = 19;
  _B_.nodes = _1Q_;
  _6_graph.child = _B_;

  _9_.set("nd0", _B_);

  _9_.set("nd8", _1f_node);

  _9_.set("nd9", _1r_node);

  _9_.set("nd13", _2P_node);

  _9_.set("nd14", _2b_node);

  _9_.set("nd18", _3E_node);

  _9_.set("nd19", _3M_node);

  _9_.set("nd23", _3s_node);

  _9_.set("nd24", _44_node);

  _9_.set("nd28", _4a_node);

  _9_.set("nd29", _4m_node);

  _9_.set("nd33", _5I_node);

  _9_.set("nd34", _5U_node);

  var _Jt_term = (__constructor.prototype = _6I_, new __constructor());

  _Jt_term.key = "nd38";
  _Jt_term.shape = null;
  _Jt_term.text = null;
  _Jt_term.colour = null;
  _Jt_term.name = void 0;
  _Jt_term.graph = _6_graph;
  _Jt_term.group = null;
  _Jt_term.width = null;
  _Jt_term.height = null;
  var _Ju_ = [];
  _Jt_term.links = _Ju_;
  var _Jv_ = [];
  _Jt_term.nodes = _Jv_;

  var _K4_ = (__constructor.prototype = _6P_, new __constructor());

  _Vc_Var.prototype = _K4_;

  _$5_Object_46setPrototypeOf(_Vc_Var, _V4_Der);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vc_Var, _$4_Object_46defineProperty(_K4_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vd_, _$4_Object_46defineProperty(_K4_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Jw_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Jw_toNode.key = "nd37";
  _Jw_toNode.shape = null;
  _Jw_toNode.text = "V";
  _Jw_toNode.colour = "cyan";
  _Jw_toNode.name = "alt_sum";
  _Jw_toNode.graph = _6_graph;
  _Jw_toNode.group = _5U_node;
  _Jw_toNode.width = ".3";
  _Jw_toNode.height = ".3";
  var _K2_ = [,,];
  _K2_.length = 0;
  _Jw_toNode.links = _K2_;
  _Jt_term.prin = _Jw_toNode;
  var _K5_ = [_Jw_toNode];
  _Jt_term.auxs = _K5_;

  _9_.set("nd38", _Jt_term);

  var _K7_term = (__constructor.prototype = _6I_, new __constructor());

  _K7_term.key = "nd40";
  _K7_term.shape = null;
  _K7_term.text = null;
  _K7_term.colour = null;
  _K7_term.name = void 0;
  _K7_term.graph = _6_graph;
  _K7_term.group = null;
  _K7_term.width = null;
  _K7_term.height = null;
  var _K8_ = [];
  _K7_term.links = _K8_;
  var _K9_ = [];
  _K7_term.nodes = _K9_;
  _K7_term.prin = _5k_node;
  _K7_term.auxs = _K5_;

  _9_.set("nd40", _K7_term);

  var _KB_left = (__constructor.prototype = _6I_, new __constructor());

  _KB_left.key = "nd43";
  _KB_left.shape = null;
  _KB_left.text = null;
  _KB_left.colour = null;
  _KB_left.name = void 0;
  _KB_left.graph = _6_graph;
  _KB_left.group = null;
  _KB_left.width = null;
  _KB_left.height = null;
  var _KC_ = [];
  _KB_left.links = _KC_;
  var _KD_ = [];
  _KB_left.nodes = _KD_;
  _KB_left.prin = _61_node;
  _KB_left.auxs = _6G_newPaxs;

  _9_.set("nd43", _KB_left);

  var _KF_right = (__constructor.prototype = _6I_, new __constructor());

  _KF_right.key = "nd46";
  _KF_right.shape = null;
  _KF_right.text = null;
  _KF_right.colour = null;
  _KF_right.name = void 0;
  _KF_right.graph = _6_graph;
  _KF_right.group = null;
  _KF_right.width = null;
  _KF_right.height = null;
  var _KG_ = [];
  _KF_right.links = _KG_;
  var _KH_ = [];
  _KF_right.nodes = _KH_;
  _KF_right.prin = _6Q_node;
  var _KI_ = [];
  _KF_right.auxs = _KI_;

  _9_.set("nd46", _KF_right);

  var _KK_term = (__constructor.prototype = _6I_, new __constructor());

  _KK_term.key = "nd47";
  _KK_term.shape = null;
  _KK_term.text = null;
  _KK_term.colour = null;
  _KK_term.name = void 0;
  _KK_term.graph = _6_graph;
  _KK_term.group = null;
  _KK_term.width = null;
  _KK_term.height = null;
  var _KL_ = [];
  _KK_term.links = _KL_;
  var _KM_ = [];
  _KK_term.nodes = _KM_;
  _KK_term.prin = _5E_node;
  var _KN_newAuxs = [_68_node];
  _KK_term.auxs = _KN_newAuxs;

  _9_.set("nd47", _KK_term);

  var _KP_left = (__constructor.prototype = _6I_, new __constructor());

  _KP_left.key = "nd50";
  _KP_left.shape = null;
  _KP_left.text = null;
  _KP_left.colour = null;
  _KP_left.name = void 0;
  _KP_left.graph = _6_graph;
  _KP_left.group = null;
  _KP_left.width = null;
  _KP_left.height = null;
  var _KQ_ = [];
  _KP_left.links = _KQ_;
  var _KR_ = [];
  _KP_left.nodes = _KR_;
  _KP_left.prin = _6b_node;
  _KP_left.auxs = _6n_newPaxs;

  _9_.set("nd50", _KP_left);

  var _KT_right = (__constructor.prototype = _6I_, new __constructor());

  _KT_right.key = "nd53";
  _KT_right.shape = null;
  _KT_right.text = null;
  _KT_right.colour = null;
  _KT_right.name = void 0;
  _KT_right.graph = _6_graph;
  _KT_right.group = null;
  _KT_right.width = null;
  _KT_right.height = null;
  var _KU_ = [];
  _KT_right.links = _KU_;
  var _KV_ = [];
  _KT_right.nodes = _KV_;
  _KT_right.prin = _6u_node;
  var _KW_ = [];
  _KT_right.auxs = _KW_;

  _9_.set("nd53", _KT_right);

  var _KY_term = (__constructor.prototype = _6I_, new __constructor());

  _KY_term.key = "nd54";
  _KY_term.shape = null;
  _KY_term.text = null;
  _KY_term.colour = null;
  _KY_term.name = void 0;
  _KY_term.graph = _6_graph;
  _KY_term.group = null;
  _KY_term.width = null;
  _KY_term.height = null;
  var _KZ_ = [];
  _KY_term.links = _KZ_;
  var _Ka_ = [];
  _KY_term.nodes = _Ka_;
  _KY_term.prin = _4W_node;
  var _Kb_newAuxs = [_6h_node];
  _KY_term.auxs = _Kb_newAuxs;

  _9_.set("nd54", _KY_term);

  var _Kd_left = (__constructor.prototype = _6I_, new __constructor());

  _Kd_left.key = "nd57";
  _Kd_left.shape = null;
  _Kd_left.text = null;
  _Kd_left.colour = null;
  _Kd_left.name = void 0;
  _Kd_left.graph = _6_graph;
  _Kd_left.group = null;
  _Kd_left.width = null;
  _Kd_left.height = null;
  var _Ke_ = [];
  _Kd_left.links = _Ke_;
  var _Kf_ = [];
  _Kd_left.nodes = _Kf_;
  _Kd_left.prin = _74_node;
  _Kd_left.auxs = _7G_newPaxs;

  _9_.set("nd57", _Kd_left);

  var _Kh_right = (__constructor.prototype = _6I_, new __constructor());

  _Kh_right.key = "nd60";
  _Kh_right.shape = null;
  _Kh_right.text = null;
  _Kh_right.colour = null;
  _Kh_right.name = void 0;
  _Kh_right.graph = _6_graph;
  _Kh_right.group = null;
  _Kh_right.width = null;
  _Kh_right.height = null;
  var _Ki_ = [];
  _Kh_right.links = _Ki_;
  var _Kj_ = [];
  _Kh_right.nodes = _Kj_;
  _Kh_right.prin = _7N_node;
  var _Kk_ = [];
  _Kh_right.auxs = _Kk_;

  _9_.set("nd60", _Kh_right);

  var _Km_term = (__constructor.prototype = _6I_, new __constructor());

  _Km_term.key = "nd61";
  _Km_term.shape = null;
  _Km_term.text = null;
  _Km_term.colour = null;
  _Km_term.name = void 0;
  _Km_term.graph = _6_graph;
  _Km_term.group = null;
  _Km_term.width = null;
  _Km_term.height = null;
  var _Kn_ = [];
  _Km_term.links = _Kn_;
  var _Ko_ = [];
  _Km_term.nodes = _Ko_;
  _Km_term.prin = _3o_node;
  var _Kp_newAuxs = [_7A_node];
  _Km_term.auxs = _Kp_newAuxs;

  _9_.set("nd61", _Km_term);

  var _Kr_left = (__constructor.prototype = _6I_, new __constructor());

  _Kr_left.key = "nd62";
  _Kr_left.shape = null;
  _Kr_left.text = null;
  _Kr_left.colour = null;
  _Kr_left.name = void 0;
  _Kr_left.graph = _6_graph;
  _Kr_left.group = null;
  _Kr_left.width = null;
  _Kr_left.height = null;
  var _Ks_ = [];
  _Kr_left.links = _Ks_;
  var _Kt_ = [];
  _Kr_left.nodes = _Kt_;
  _Kr_left.prin = _7R_node;
  _Kr_left.auxs = _7X_newPaxs;

  _9_.set("nd62", _Kr_left);

  var _Kv_left = (__constructor.prototype = _6I_, new __constructor());

  _Kv_left.key = "nd66";
  _Kv_left.shape = null;
  _Kv_left.text = null;
  _Kv_left.colour = null;
  _Kv_left.name = void 0;
  _Kv_left.graph = _6_graph;
  _Kv_left.group = null;
  _Kv_left.width = null;
  _Kv_left.height = null;
  var _Kw_ = [];
  _Kv_left.links = _Kw_;
  var _Kx_ = [];
  _Kv_left.nodes = _Kx_;

  var _Ky_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Ky_toNode.key = "nd65";
  _Ky_toNode.shape = null;
  _Ky_toNode.text = "V";
  _Ky_toNode.colour = "cyan";
  _Ky_toNode.name = "sum";
  _Ky_toNode.graph = _6_graph;
  _Ky_toNode.group = _2b_node;
  _Ky_toNode.width = ".3";
  _Ky_toNode.height = ".3";
  var _L4_ = [,,];
  _L4_.length = 0;
  _Ky_toNode.links = _L4_;
  _Kv_left.prin = _Ky_toNode;
  var _L6_ = [_Ky_toNode];
  _Kv_left.auxs = _L6_;

  _9_.set("nd66", _Kv_left);

  var _L8_term = (__constructor.prototype = _6I_, new __constructor());

  _L8_term.key = "nd69";
  _L8_term.shape = null;
  _L8_term.text = null;
  _L8_term.colour = null;
  _L8_term.name = void 0;
  _L8_term.graph = _6_graph;
  _L8_term.group = null;
  _L8_term.width = null;
  _L8_term.height = null;
  var _L9_ = [];
  _L8_term.links = _L9_;
  var _LA_ = [];
  _L8_term.nodes = _LA_;

  var _LB_toNode = (__constructor.prototype = _K4_, new __constructor());

  _LB_toNode.key = "nd68";
  _LB_toNode.shape = null;
  _LB_toNode.text = "V";
  _LB_toNode.colour = "cyan";
  _LB_toNode.name = "alt";
  _LB_toNode.graph = _6_graph;
  _LB_toNode.group = _2b_node;
  _LB_toNode.width = ".3";
  _LB_toNode.height = ".3";
  var _LH_ = [,,];
  _LH_.length = 0;
  _LB_toNode.links = _LH_;
  _L8_term.prin = _LB_toNode;
  var _LJ_ = [_LB_toNode];
  _L8_term.auxs = _LJ_;

  _9_.set("nd69", _L8_term);

  var _LL_right = (__constructor.prototype = _6I_, new __constructor());

  _LL_right.key = "nd71";
  _LL_right.shape = null;
  _LL_right.text = null;
  _LL_right.colour = null;
  _LL_right.name = void 0;
  _LL_right.graph = _6_graph;
  _LL_right.group = null;
  _LL_right.width = null;
  _LL_right.height = null;
  var _LM_ = [];
  _LL_right.links = _LM_;
  var _LN_ = [];
  _LL_right.nodes = _LN_;
  _LL_right.prin = _7q_node;
  _LL_right.auxs = _LJ_;

  _9_.set("nd71", _LL_right);

  var _LP_right = (__constructor.prototype = _6I_, new __constructor());

  _LP_right.key = "nd72";
  _LP_right.shape = null;
  _LP_right.text = null;
  _LP_right.colour = null;
  _LP_right.name = void 0;
  _LP_right.graph = _6_graph;
  _LP_right.group = null;
  _LP_right.width = null;
  _LP_right.height = null;
  var _LQ_ = [];
  _LP_right.links = _LQ_;
  var _LR_ = [];
  _LP_right.nodes = _LR_;
  _LP_right.prin = _7e_node;
  var _LS_newAuxs = [_Ky_toNode, _LB_toNode];
  _LP_right.auxs = _LS_newAuxs;

  _9_.set("nd72", _LP_right);

  var _LU_term = (__constructor.prototype = _6I_, new __constructor());

  _LU_term.key = "nd73";
  _LU_term.shape = null;
  _LU_term.text = null;
  _LU_term.colour = null;
  _LU_term.name = void 0;
  _LU_term.graph = _6_graph;
  _LU_term.group = null;
  _LU_term.width = null;
  _LU_term.height = null;
  var _LV_ = [];
  _LU_term.links = _LV_;
  var _LW_ = [];
  _LU_term.nodes = _LW_;
  _LU_term.prin = _3A_node;
  var _LX_newAuxs = [_Ky_toNode, _LB_toNode];
  _LU_term.auxs = _LX_newAuxs;

  _9_.set("nd73", _LU_term);

  var _LZ_left = (__constructor.prototype = _6I_, new __constructor());

  _LZ_left.key = "nd75";
  _LZ_left.shape = null;
  _LZ_left.text = null;
  _LZ_left.colour = null;
  _LZ_left.name = void 0;
  _LZ_left.graph = _6_graph;
  _LZ_left.group = null;
  _LZ_left.width = null;
  _LZ_left.height = null;
  var _La_ = [];
  _LZ_left.links = _La_;
  var _Lb_ = [];
  _LZ_left.nodes = _Lb_;
  _LZ_left.prin = _7x_node;
  _LZ_left.auxs = _8A_newPaxs;

  _9_.set("nd75", _LZ_left);

  _9_.set("nd77", _8H_node);

  _9_.set("nd78", _8T_node);

  var _Ld_left = (__constructor.prototype = _6I_, new __constructor());

  _Ld_left.key = "nd85";
  _Ld_left.shape = null;
  _Ld_left.text = null;
  _Ld_left.colour = null;
  _Ld_left.name = void 0;
  _Ld_left.graph = _6_graph;
  _Ld_left.group = null;
  _Ld_left.width = null;
  _Ld_left.height = null;
  var _Le_ = [];
  _Ld_left.links = _Le_;
  var _Lf_ = [];
  _Ld_left.nodes = _Lf_;

  var _Lg_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Lg_toNode.key = "nd84";
  _Lg_toNode.shape = null;
  _Lg_toNode.text = "V";
  _Lg_toNode.colour = "cyan";
  _Lg_toNode.name = "state_machine";
  _Lg_toNode.graph = _6_graph;
  _Lg_toNode.group = _8T_node;
  _Lg_toNode.width = ".3";
  _Lg_toNode.height = ".3";
  var _Lm_ = [,,];
  _Lm_.length = 0;
  _Lg_toNode.links = _Lm_;
  _Ld_left.prin = _Lg_toNode;
  var _Lo_ = [_Lg_toNode];
  _Ld_left.auxs = _Lo_;

  _9_.set("nd85", _Ld_left);

  _9_.set("nd87", _9V_node);

  _9_.set("nd88", _9d_node);

  var _Lq_right = (__constructor.prototype = _6I_, new __constructor());

  _Lq_right.key = "nd91";
  _Lq_right.shape = null;
  _Lq_right.text = null;
  _Lq_right.colour = null;
  _Lq_right.name = void 0;
  _Lq_right.graph = _6_graph;
  _Lq_right.group = null;
  _Lq_right.width = null;
  _Lq_right.height = null;
  var _Lr_ = [];
  _Lq_right.links = _Lr_;
  var _Ls_ = [];
  _Lq_right.nodes = _Ls_;
  _Lq_right.prin = _9m_node;
  _Lq_right.auxs = _9s_;

  _9_.set("nd91", _Lq_right);

  var _Lu_left = (__constructor.prototype = _6I_, new __constructor());

  _Lu_left.key = "nd92";
  _Lu_left.shape = null;
  _Lu_left.text = null;
  _Lu_left.colour = null;
  _Lu_left.name = void 0;
  _Lu_left.graph = _6_graph;
  _Lu_left.group = null;
  _Lu_left.width = null;
  _Lu_left.height = null;
  var _Lv_ = [];
  _Lu_left.links = _Lv_;
  var _Lw_ = [];
  _Lu_left.nodes = _Lw_;
  _Lu_left.prin = _9J_node;
  var _Lx_newAuxs = [_Lg_toNode];
  _Lu_left.auxs = _Lx_newAuxs;

  _9_.set("nd92", _Lu_left);

  _9_.set("nd94", _9z_node);

  _9_.set("nd95", _A7_node);

  _9_.set("nd98", _AN_node);

  _9_.set("nd99", _AZ_node);

  var _Lz_left = (__constructor.prototype = _6I_, new __constructor());

  _Lz_left.key = "nd104";
  _Lz_left.shape = null;
  _Lz_left.text = null;
  _Lz_left.colour = null;
  _Lz_left.name = void 0;
  _Lz_left.graph = _6_graph;
  _Lz_left.group = null;
  _Lz_left.width = null;
  _Lz_left.height = null;
  var _M0_ = [];
  _Lz_left.links = _M0_;
  var _M1_ = [];
  _Lz_left.nodes = _M1_;

  var _M2_toNode = (__constructor.prototype = _K4_, new __constructor());

  _M2_toNode.key = "nd103";
  _M2_toNode.shape = null;
  _M2_toNode.text = "V";
  _M2_toNode.colour = "cyan";
  _M2_toNode.name = "i";
  _M2_toNode.graph = _6_graph;
  _M2_toNode.group = _AZ_node;
  _M2_toNode.width = ".3";
  _M2_toNode.height = ".3";
  var _M9_ = [,,];
  _M9_.length = 0;
  _M2_toNode.links = _M9_;
  _Lz_left.prin = _M2_toNode;
  var _MB_ = [_M2_toNode];
  _Lz_left.auxs = _MB_;

  _9_.set("nd104", _Lz_left);

  var _MD_term = (__constructor.prototype = _6I_, new __constructor());

  _MD_term.key = "nd106";
  _MD_term.shape = null;
  _MD_term.text = null;
  _MD_term.colour = null;
  _MD_term.name = void 0;
  _MD_term.graph = _6_graph;
  _MD_term.group = null;
  _MD_term.width = null;
  _MD_term.height = null;
  var _ME_ = [];
  _MD_term.links = _ME_;
  var _MF_ = [];
  _MD_term.nodes = _MF_;

  var _MG_toNode = (__constructor.prototype = _K4_, new __constructor());

  _MG_toNode.key = "nd105";
  _MG_toNode.shape = null;
  _MG_toNode.text = "V";
  _MG_toNode.colour = "cyan";
  _MG_toNode.name = "s";
  _MG_toNode.graph = _6_graph;
  _MG_toNode.group = _AZ_node;
  _MG_toNode.width = ".3";
  _MG_toNode.height = ".3";
  var _MM_ = [,,];
  _MM_.length = 0;
  _MG_toNode.links = _MM_;
  _MD_term.prin = _MG_toNode;
  var _MO_ = [_MG_toNode];
  _MD_term.auxs = _MO_;

  _9_.set("nd106", _MD_term);

  var _MQ_right = (__constructor.prototype = _6I_, new __constructor());

  _MQ_right.key = "nd108";
  _MQ_right.shape = null;
  _MQ_right.text = null;
  _MQ_right.colour = null;
  _MQ_right.name = void 0;
  _MQ_right.graph = _6_graph;
  _MQ_right.group = null;
  _MQ_right.width = null;
  _MQ_right.height = null;
  var _MR_ = [];
  _MQ_right.links = _MR_;
  var _MS_ = [];
  _MQ_right.nodes = _MS_;
  _MQ_right.prin = _Az_node;
  _MQ_right.auxs = _MO_;

  _9_.set("nd108", _MQ_right);

  var _MU_term = (__constructor.prototype = _6I_, new __constructor());

  _MU_term.key = "nd109";
  _MU_term.shape = null;
  _MU_term.text = null;
  _MU_term.colour = null;
  _MU_term.name = void 0;
  _MU_term.graph = _6_graph;
  _MU_term.group = null;
  _MU_term.width = null;
  _MU_term.height = null;
  var _MV_ = [];
  _MU_term.links = _MV_;
  var _MW_ = [];
  _MU_term.nodes = _MW_;
  _MU_term.prin = _As_fromNode;
  var _MX_newAuxs = [_M2_toNode, _MG_toNode];
  _MU_term.auxs = _MX_newAuxs;

  _9_.set("nd109", _MU_term);

  var _MZ_term = (__constructor.prototype = _6I_, new __constructor());

  _MZ_term.key = "nd111";
  _MZ_term.shape = null;
  _MZ_term.text = null;
  _MZ_term.colour = null;
  _MZ_term.name = void 0;
  _MZ_term.graph = _6_graph;
  _MZ_term.group = null;
  _MZ_term.width = null;
  _MZ_term.height = null;
  var _Ma_ = [];
  _MZ_term.links = _Ma_;
  var _Mb_ = [];
  _MZ_term.nodes = _Mb_;
  _MZ_term.prin = _B5_node;
  _MZ_term.auxs = _BI_newPaxs;

  _9_.set("nd111", _MZ_term);

  var _Md_right = (__constructor.prototype = _6I_, new __constructor());

  _Md_right.key = "nd112";
  _Md_right.shape = null;
  _Md_right.text = null;
  _Md_right.colour = null;
  _Md_right.name = void 0;
  _Md_right.graph = _6_graph;
  _Md_right.group = null;
  _Md_right.width = null;
  _Md_right.height = null;
  var _Me_ = [];
  _Md_right.links = _Me_;
  var _Mf_ = [];
  _Md_right.nodes = _Mf_;
  _Md_right.prin = _BJ_node;
  _Md_right.auxs = _BP_newPaxs;

  _9_.set("nd112", _Md_right);

  var _Mh_left = (__constructor.prototype = _6I_, new __constructor());

  _Mh_left.key = "nd113";
  _Mh_left.shape = null;
  _Mh_left.text = null;
  _Mh_left.colour = null;
  _Mh_left.name = void 0;
  _Mh_left.graph = _6_graph;
  _Mh_left.group = null;
  _Mh_left.width = null;
  _Mh_left.height = null;
  var _Mi_ = [];
  _Mh_left.links = _Mi_;
  var _Mj_ = [];
  _Mh_left.nodes = _Mj_;
  _Mh_left.prin = _9F_node;
  var _Mk_newAuxs = [_Lg_toNode];
  _Mh_left.auxs = _Mk_newAuxs;

  _9_.set("nd113", _Mh_left);

  var _Mm_right = (__constructor.prototype = _6I_, new __constructor());

  _Mm_right.key = "nd116";
  _Mm_right.shape = null;
  _Mm_right.text = null;
  _Mm_right.colour = null;
  _Mm_right.name = void 0;
  _Mm_right.graph = _6_graph;
  _Mm_right.group = null;
  _Mm_right.width = null;
  _Mm_right.height = null;
  var _Mn_ = [];
  _Mm_right.links = _Mn_;
  var _Mo_ = [];
  _Mm_right.nodes = _Mo_;

  var _Mp_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Mp_toNode.key = "nd115";
  _Mp_toNode.shape = null;
  _Mp_toNode.text = "V";
  _Mp_toNode.colour = "cyan";
  _Mp_toNode.name = "inp";
  _Mp_toNode.graph = _6_graph;
  _Mp_toNode.group = _8T_node;
  _Mp_toNode.width = ".3";
  _Mp_toNode.height = ".3";
  var _Mw_ = [,,];
  _Mw_.length = 0;
  _Mp_toNode.links = _Mw_;
  _Mm_right.prin = _Mp_toNode;
  var _My_ = [_Mp_toNode];
  _Mm_right.auxs = _My_;

  _9_.set("nd116", _Mm_right);

  var _N0_term = (__constructor.prototype = _6I_, new __constructor());

  _N0_term.key = "nd117";
  _N0_term.shape = null;
  _N0_term.text = null;
  _N0_term.colour = null;
  _N0_term.name = void 0;
  _N0_term.graph = _6_graph;
  _N0_term.group = null;
  _N0_term.width = null;
  _N0_term.height = null;
  var _N1_ = [];
  _N0_term.links = _N1_;
  var _N2_ = [];
  _N0_term.nodes = _N2_;
  _N0_term.prin = _9A_fromNode;
  var _N3_newAuxs = [_Lg_toNode, _Mp_toNode];
  _N0_term.auxs = _N3_newAuxs;

  _9_.set("nd117", _N0_term);

  var _N5_right = (__constructor.prototype = _6I_, new __constructor());

  _N5_right.key = "nd119";
  _N5_right.shape = null;
  _N5_right.text = null;
  _N5_right.colour = null;
  _N5_right.name = void 0;
  _N5_right.graph = _6_graph;
  _N5_right.group = null;
  _N5_right.width = null;
  _N5_right.height = null;
  var _N6_ = [];
  _N5_right.links = _N6_;
  var _N7_ = [];
  _N5_right.nodes = _N7_;
  _N5_right.prin = _BX_node;
  _N5_right.auxs = _Bj_newPaxs;

  _9_.set("nd119", _N5_right);

  var _N9_term = (__constructor.prototype = _6I_, new __constructor());

  _N9_term.key = "nd120";
  _N9_term.shape = null;
  _N9_term.text = null;
  _N9_term.colour = null;
  _N9_term.name = void 0;
  _N9_term.graph = _6_graph;
  _N9_term.group = null;
  _N9_term.width = null;
  _N9_term.height = null;
  var _NA_ = [];
  _N9_term.links = _NA_;
  var _NB_ = [];
  _N9_term.nodes = _NB_;
  _N9_term.prin = _2L_node;
  var _NC_newAuxs = [_83_node, _Bd_node];
  _N9_term.auxs = _NC_newAuxs;

  _9_.set("nd120", _N9_term);

  var _NE_left = (__constructor.prototype = _6I_, new __constructor());

  _NE_left.key = "nd122";
  _NE_left.shape = null;
  _NE_left.text = null;
  _NE_left.colour = null;
  _NE_left.name = void 0;
  _NE_left.graph = _6_graph;
  _NE_left.group = null;
  _NE_left.width = null;
  _NE_left.height = null;
  var _NF_ = [];
  _NE_left.links = _NF_;
  var _NG_ = [];
  _NE_left.nodes = _NG_;
  _NE_left.prin = _Bk_node;
  _NE_left.auxs = _Bw_newPaxs;

  _9_.set("nd122", _NE_left);

  var _NI_left = (__constructor.prototype = _6I_, new __constructor());

  _NI_left.key = "nd128";
  _NI_left.shape = null;
  _NI_left.text = null;
  _NI_left.colour = null;
  _NI_left.name = void 0;
  _NI_left.graph = _6_graph;
  _NI_left.group = null;
  _NI_left.width = null;
  _NI_left.height = null;
  var _NJ_ = [];
  _NI_left.links = _NJ_;
  var _NK_ = [];
  _NI_left.nodes = _NK_;

  var _NL_toNode = (__constructor.prototype = _K4_, new __constructor());

  _NL_toNode.key = "nd127";
  _NL_toNode.shape = null;
  _NL_toNode.text = "V";
  _NL_toNode.colour = "cyan";
  _NL_toNode.name = "state_machine";
  _NL_toNode.graph = _6_graph;

  var _NQ__95node = (__constructor.prototype = _5z_, new __constructor());

  _NQ__95node.key = "nd4";
  _NQ__95node.shape = null;
  _NQ__95node.text = null;
  _NQ__95node.colour = null;
  _NQ__95node.name = void 0;
  _NQ__95node.graph = _6_graph;
  _NQ__95node.group = _B_;
  _NQ__95node.width = null;
  _NQ__95node.height = null;
  var _NS_ = [,,,,,,,,,,,,,,,,];
  _NS_.length = 0;
  _NQ__95node.links = _NS_;
  var _NU_ = [,,,,,,,,,,,,,,,];
  _NU_.length = 0;
  _NQ__95node.nodes = _NU_;
  _NL_toNode.group = _NQ__95node;
  _NL_toNode.width = ".3";
  _NL_toNode.height = ".3";
  var _NY_ = [,,];
  _NY_.length = 0;
  _NL_toNode.links = _NY_;
  _NI_left.prin = _NL_toNode;
  var _Na_ = [_NL_toNode];
  _NI_left.auxs = _Na_;

  _9_.set("nd128", _NI_left);

  _9_.set("nd130", _C3_node);

  _9_.set("nd131", _CB_node);

  var _Nc_right = (__constructor.prototype = _6I_, new __constructor());

  _Nc_right.key = "nd134";
  _Nc_right.shape = null;
  _Nc_right.text = null;
  _Nc_right.colour = null;
  _Nc_right.name = void 0;
  _Nc_right.graph = _6_graph;
  _Nc_right.group = null;
  _Nc_right.width = null;
  _Nc_right.height = null;
  var _Nd_ = [];
  _Nc_right.links = _Nd_;
  var _Ne_ = [];
  _Nc_right.nodes = _Ne_;
  _Nc_right.prin = _CJ_toNode;
  _Nc_right.auxs = _CQ_;

  _9_.set("nd134", _Nc_right);

  var _Ng_left = (__constructor.prototype = _6I_, new __constructor());

  _Ng_left.key = "nd135";
  _Ng_left.shape = null;
  _Ng_left.text = null;
  _Ng_left.colour = null;
  _Ng_left.name = void 0;
  _Ng_left.graph = _6_graph;
  _Ng_left.group = null;
  _Ng_left.width = null;
  _Ng_left.height = null;
  var _Nh_ = [];
  _Ng_left.links = _Nh_;
  var _Ni_ = [];
  _Ng_left.nodes = _Ni_;

  var _Nj_toNode = (__constructor.prototype = _1e_, new __constructor());

  _Nj_toNode.key = "nd126";
  _Nj_toNode.shape = null;
  _Nj_toNode.text = "@";
  _Nj_toNode.colour = "yellow";
  _Nj_toNode.name = void 0;
  _Nj_toNode.graph = _6_graph;
  _Nj_toNode.group = _B_;
  _Nj_toNode.width = null;
  _Nj_toNode.height = null;
  var _Nn_ = [,,,];
  _Nn_.length = 0;
  _Nj_toNode.links = _Nn_;
  _Ng_left.prin = _Nj_toNode;
  var _Np_newAuxs = [_NL_toNode];
  _Ng_left.auxs = _Np_newAuxs;

  _9_.set("nd135", _Ng_left);

  _9_.set("nd146", _Id_node);

  _9_.set("nd147", _Il_node);

  var _Nr_left = (__constructor.prototype = _6I_, new __constructor());

  _Nr_left.key = "nd150";
  _Nr_left.shape = null;
  _Nr_left.text = null;
  _Nr_left.colour = null;
  _Nr_left.name = void 0;
  _Nr_left.graph = _6_graph;
  _Nr_left.group = null;
  _Nr_left.width = null;
  _Nr_left.height = null;
  var _Ns_ = [];
  _Nr_left.links = _Ns_;
  var _Nt_ = [];
  _Nr_left.nodes = _Nt_;
  _Nr_left.prin = _It_left;
  _Nr_left.auxs = _Iz_;

  _9_.set("nd150", _Nr_left);

  var _Nv_term = (__constructor.prototype = _6I_, new __constructor());

  _Nv_term.key = "nd152";
  _Nv_term.shape = null;
  _Nv_term.text = null;
  _Nv_term.colour = null;
  _Nv_term.name = void 0;
  _Nv_term.graph = _6_graph;
  _Nv_term.group = null;
  _Nv_term.width = null;
  _Nv_term.height = null;
  var _Nw_ = [];
  _Nv_term.links = _Nw_;
  var _Nx_ = [];
  _Nv_term.nodes = _Nx_;

  var _Ny_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Ny_toNode.key = "nd151";
  _Ny_toNode.shape = null;
  _Ny_toNode.text = "V";
  _Ny_toNode.colour = "cyan";
  _Ny_toNode.name = "s";
  _Ny_toNode.graph = _6_graph;

  var _O3__95node = (__constructor.prototype = _5z_, new __constructor());

  _O3__95node.key = "nd142";
  _O3__95node.shape = null;
  _O3__95node.text = null;
  _O3__95node.colour = null;
  _O3__95node.name = void 0;
  _O3__95node.graph = _6_graph;
  _O3__95node.group = _B_;
  _O3__95node.width = null;
  _O3__95node.height = null;
  var _O5_ = [,,,,,];
  _O5_.length = 0;
  _O3__95node.links = _O5_;
  var _O7_ = [,,,,,,];
  _O7_.length = 0;
  _O3__95node.nodes = _O7_;
  _Ny_toNode.group = _O3__95node;
  _Ny_toNode.width = ".3";
  _Ny_toNode.height = ".3";
  var _OB_ = [,,];
  _OB_.length = 0;
  _Ny_toNode.links = _OB_;
  _Nv_term.prin = _Ny_toNode;
  var _OD_ = [_Ny_toNode];
  _Nv_term.auxs = _OD_;

  _9_.set("nd152", _Nv_term);

  var _OF_right = (__constructor.prototype = _6I_, new __constructor());

  _OF_right.key = "nd154";
  _OF_right.shape = null;
  _OF_right.text = null;
  _OF_right.colour = null;
  _OF_right.name = void 0;
  _OF_right.graph = _6_graph;
  _OF_right.group = null;
  _OF_right.width = null;
  _OF_right.height = null;
  var _OG_ = [];
  _OF_right.links = _OG_;
  var _OH_ = [];
  _OF_right.nodes = _OH_;
  _OF_right.prin = _J0_right;
  _OF_right.auxs = _OD_;

  _9_.set("nd154", _OF_right);

  var _OJ_term = (__constructor.prototype = _6I_, new __constructor());

  _OJ_term.key = "nd155";
  _OJ_term.shape = null;
  _OJ_term.text = null;
  _OJ_term.colour = null;
  _OJ_term.name = void 0;
  _OJ_term.graph = _6_graph;
  _OJ_term.group = null;
  _OJ_term.width = null;
  _OJ_term.height = null;
  var _OK_ = [];
  _OJ_term.links = _OK_;
  var _OL_ = [];
  _OJ_term.nodes = _OL_;
  _OJ_term.prin = _IY_prev;
  var _OM_newAuxs = [_Ny_toNode];
  _OJ_term.auxs = _OM_newAuxs;

  _9_.set("nd155", _OJ_term);

  var _OO_term = (__constructor.prototype = _6I_, new __constructor());

  _OO_term.key = "nd158";
  _OO_term.shape = null;
  _OO_term.text = null;
  _OO_term.colour = null;
  _OO_term.name = void 0;
  _OO_term.graph = _6_graph;
  _OO_term.group = null;
  _OO_term.width = null;
  _OO_term.height = null;
  var _OP_ = [];
  _OO_term.links = _OP_;
  var _OQ_ = [];
  _OO_term.nodes = _OQ_;

  var _OR_fromNode = (__constructor.prototype = _67_, new __constructor());

  _OR_fromNode.key = "nd143";
  _OR_fromNode.shape = null;
  _OR_fromNode.text = "!";
  _OR_fromNode.colour = "cyan";
  _OR_fromNode.name = void 0;
  _OR_fromNode.graph = _6_graph;
  _OR_fromNode.group = _B_;
  _OR_fromNode.width = ".3";
  _OR_fromNode.height = ".3";
  var _OX_ = [,,];
  _OX_.length = 0;
  _OR_fromNode.links = _OX_;
  _OO_term.prin = _OR_fromNode;
  var _OZ_newPaxs = [,];
  _OZ_newPaxs.length = 0;
  _OO_term.auxs = _OZ_newPaxs;

  _9_.set("nd158", _OO_term);

  var _Oc_right = (__constructor.prototype = _6I_, new __constructor());

  _Oc_right.key = "nd159";
  _Oc_right.shape = null;
  _Oc_right.text = null;
  _Oc_right.colour = null;
  _Oc_right.name = void 0;
  _Oc_right.graph = _6_graph;
  _Oc_right.group = null;
  _Oc_right.width = null;
  _Oc_right.height = null;
  var _Od_ = [];
  _Oc_right.links = _Od_;
  var _Oe_ = [];
  _Oc_right.nodes = _Oe_;

  var _Of_fromNode = (__constructor.prototype = _67_, new __constructor());

  _Of_fromNode.key = "nd139";
  _Of_fromNode.shape = null;
  _Of_fromNode.text = "!";
  _Of_fromNode.colour = "cyan";
  _Of_fromNode.name = void 0;
  _Of_fromNode.graph = _6_graph;
  _Of_fromNode.group = _B_;
  _Of_fromNode.width = ".3";
  _Of_fromNode.height = ".3";
  var _Ol_ = [,,,];
  _Ol_.length = 0;
  _Of_fromNode.links = _Ol_;
  _Oc_right.prin = _Of_fromNode;
  var _On_newPaxs = [];
  _Oc_right.auxs = _On_newPaxs;

  _9_.set("nd159", _Oc_right);

  var _Op_left = (__constructor.prototype = _6I_, new __constructor());

  _Op_left.key = "nd160";
  _Op_left.shape = null;
  _Op_left.text = null;
  _Op_left.colour = null;
  _Op_left.name = void 0;
  _Op_left.graph = _6_graph;
  _Op_left.group = null;
  _Op_left.width = null;
  _Op_left.height = null;
  var _Oq_ = [];
  _Op_left.links = _Oq_;
  var _Or_ = [];
  _Op_left.nodes = _Or_;

  var _Os_toNode = (__constructor.prototype = _1e_, new __constructor());

  _Os_toNode.key = "nd125";
  _Os_toNode.shape = null;
  _Os_toNode.text = "@";
  _Os_toNode.colour = "yellow";
  _Os_toNode.name = void 0;
  _Os_toNode.graph = _6_graph;
  _Os_toNode.group = _B_;
  _Os_toNode.width = null;
  _Os_toNode.height = null;
  var _Ow_ = [,,,];
  _Ow_.length = 0;
  _Os_toNode.links = _Ow_;
  _Op_left.prin = _Os_toNode;
  var _Oy_newAuxs = [_NL_toNode];
  _Op_left.auxs = _Oy_newAuxs;

  _9_.set("nd160", _Op_left);

  _9_.set("nd162", _CR_node);

  _9_.set("nd163", _CZ_node);

  var _P0_right = (__constructor.prototype = _6I_, new __constructor());

  _P0_right.key = "nd166";
  _P0_right.shape = null;
  _P0_right.text = null;
  _P0_right.colour = null;
  _P0_right.name = void 0;
  _P0_right.graph = _6_graph;
  _P0_right.group = null;
  _P0_right.width = null;
  _P0_right.height = null;
  var _P1_ = [];
  _P0_right.links = _P1_;
  var _P2_ = [];
  _P0_right.nodes = _P2_;
  _P0_right.prin = _Ch_toNode;
  _P0_right.auxs = _Co_;

  _9_.set("nd166", _P0_right);

  var _P4_right = (__constructor.prototype = _6I_, new __constructor());

  _P4_right.key = "nd167";
  _P4_right.shape = null;
  _P4_right.text = null;
  _P4_right.colour = null;
  _P4_right.name = void 0;
  _P4_right.graph = _6_graph;
  _P4_right.group = null;
  _P4_right.width = null;
  _P4_right.height = null;
  var _P5_ = [];
  _P4_right.links = _P5_;
  var _P6_ = [];
  _P4_right.nodes = _P6_;

  var _P7_toNode = (__constructor.prototype = _1e_, new __constructor());

  _P7_toNode.key = "nd124";
  _P7_toNode.shape = null;
  _P7_toNode.text = "@";
  _P7_toNode.colour = "yellow";
  _P7_toNode.name = void 0;
  _P7_toNode.graph = _6_graph;
  _P7_toNode.group = _B_;
  _P7_toNode.width = null;
  _P7_toNode.height = null;
  var _PB_ = [,,,];
  _PB_.length = 0;
  _P7_toNode.links = _PB_;
  _P4_right.prin = _P7_toNode;
  var _PD_newAuxs = [_NL_toNode];
  _P4_right.auxs = _PD_newAuxs;

  _9_.set("nd167", _P4_right);

  var _PF_term = (__constructor.prototype = _6I_, new __constructor());

  _PF_term.key = "nd169";
  _PF_term.shape = null;
  _PF_term.text = null;
  _PF_term.colour = null;
  _PF_term.name = void 0;
  _PF_term.graph = _6_graph;
  _PF_term.group = null;
  _PF_term.width = null;
  _PF_term.height = null;
  var _PG_ = [];
  _PF_term.links = _PG_;
  var _PH_ = [];
  _PF_term.nodes = _PH_;
  _PF_term.prin = _1Z_prev;
  var _PI_newAuxs = [_Cp_toNode,,];
  _PI_newAuxs.length = 1;
  _PF_term.auxs = _PI_newAuxs;

  _9_.set("nd169", _PF_term);

  var _PL_left = (__constructor.prototype = _6I_, new __constructor());

  _PL_left.key = "nd170";
  _PL_left.shape = null;
  _PL_left.text = null;
  _PL_left.colour = null;
  _PL_left.name = void 0;
  _PL_left.graph = _6_graph;
  _PL_left.group = null;
  _PL_left.width = null;
  _PL_left.height = null;
  var _PM_ = [];
  _PL_left.links = _PM_;
  var _PN_ = [];
  _PL_left.nodes = _PN_;

  var _PO_fromNode = (__constructor.prototype = _67_, new __constructor());

  _PO_fromNode.key = "nd5";
  _PO_fromNode.shape = null;
  _PO_fromNode.text = "!";
  _PO_fromNode.colour = "cyan";
  _PO_fromNode.name = void 0;
  _PO_fromNode.graph = _6_graph;
  _PO_fromNode.group = _B_;
  _PO_fromNode.width = ".3";
  _PO_fromNode.height = ".3";
  var _PU_ = [,,];
  _PU_.length = 0;
  _PO_fromNode.links = _PU_;
  _PL_left.prin = _PO_fromNode;
  var _PW_newPaxs = [];
  _PL_left.auxs = _PW_newPaxs;

  _9_.set("nd170", _PL_left);

  var _PY_term = (__constructor.prototype = _6I_, new __constructor());

  _PY_term.key = "nd195";
  _PY_term.shape = null;
  _PY_term.text = null;
  _PY_term.colour = null;
  _PY_term.name = void 0;
  _PY_term.graph = _6_graph;
  _PY_term.group = null;
  _PY_term.width = null;
  _PY_term.height = null;
  var _PZ_ = [];
  _PY_term.links = _PZ_;
  var _Pa_ = [];
  _PY_term.nodes = _Pa_;

  var _Pb_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Pb_toNode.key = "nd194";
  _Pb_toNode.shape = null;
  _Pb_toNode.text = "V";
  _Pb_toNode.colour = "cyan";
  _Pb_toNode.name = "state";
  _Pb_toNode.graph = _6_graph;

  var _Pf__95node = (__constructor.prototype = _5z_, new __constructor());

  _Pf__95node.key = "nd191";
  _Pf__95node.shape = null;
  _Pf__95node.text = null;
  _Pf__95node.colour = null;
  _Pf__95node.name = void 0;
  _Pf__95node.graph = _6_graph;
  _Pf__95node.group = _B_;
  _Pf__95node.width = null;
  _Pf__95node.height = null;
  var _Ph_ = [,,];
  _Ph_.length = 0;
  _Pf__95node.links = _Ph_;
  var _Pj_ = [,,,];
  _Pj_.length = 0;
  _Pf__95node.nodes = _Pj_;
  _Pb_toNode.group = _Pf__95node;
  _Pb_toNode.width = ".3";
  _Pb_toNode.height = ".3";
  var _Pn_ = [,,];
  _Pn_.length = 0;
  _Pb_toNode.links = _Pn_;
  _PY_term.prin = _Pb_toNode;
  var _Pp_ = [_Pb_toNode];
  _PY_term.auxs = _Pp_;

  _9_.set("nd195", _PY_term);

  var _Pr_left = (__constructor.prototype = _6I_, new __constructor());

  _Pr_left.key = "nd198";
  _Pr_left.shape = null;
  _Pr_left.text = null;
  _Pr_left.colour = null;
  _Pr_left.name = void 0;
  _Pr_left.graph = _6_graph;
  _Pr_left.group = null;
  _Pr_left.width = null;
  _Pr_left.height = null;
  var _Ps_ = [];
  _Pr_left.links = _Ps_;
  var _Pt_ = [];
  _Pr_left.nodes = _Pt_;

  var _Pu_fromNode = (__constructor.prototype = _67_, new __constructor());

  _Pu_fromNode.key = "nd192";
  _Pu_fromNode.shape = null;
  _Pu_fromNode.text = "!";
  _Pu_fromNode.colour = "cyan";
  _Pu_fromNode.name = void 0;
  _Pu_fromNode.graph = _6_graph;
  _Pu_fromNode.group = _B_;
  _Pu_fromNode.width = ".3";
  _Pu_fromNode.height = ".3";
  var _Q0_ = [,,];
  _Q0_.length = 0;
  _Pu_fromNode.links = _Q0_;
  _Pr_left.prin = _Pu_fromNode;
  var _Q2_newPaxs = [,];
  _Q2_newPaxs.length = 0;
  _Pr_left.auxs = _Q2_newPaxs;

  _9_.set("nd198", _Pr_left);

  var _Q5_left = (__constructor.prototype = _6I_, new __constructor());

  _Q5_left.key = "nd204";
  _Q5_left.shape = null;
  _Q5_left.text = null;
  _Q5_left.colour = null;
  _Q5_left.name = void 0;
  _Q5_left.graph = _6_graph;
  _Q5_left.group = null;
  _Q5_left.width = null;
  _Q5_left.height = null;
  var _Q6_ = [];
  _Q5_left.links = _Q6_;
  var _Q7_ = [];
  _Q5_left.nodes = _Q7_;

  var _Q8_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Q8_toNode.key = "nd203";
  _Q8_toNode.shape = null;
  _Q8_toNode.text = "V";
  _Q8_toNode.colour = "cyan";
  _Q8_toNode.name = "trans";
  _Q8_toNode.graph = _6_graph;

  var _QC__95node = (__constructor.prototype = _5z_, new __constructor());

  _QC__95node.key = "nd186";
  _QC__95node.shape = null;
  _QC__95node.text = null;
  _QC__95node.colour = null;
  _QC__95node.name = void 0;
  _QC__95node.graph = _6_graph;
  _QC__95node.group = _B_;
  _QC__95node.width = null;
  _QC__95node.height = null;
  var _QE_ = [,,,,,,,,,,,,,,,,,];
  _QE_.length = 0;
  _QC__95node.links = _QE_;
  var _QG_ = [,,,,,,,,,,,,,,,];
  _QG_.length = 0;
  _QC__95node.nodes = _QG_;
  _Q8_toNode.group = _QC__95node;
  _Q8_toNode.width = ".3";
  _Q8_toNode.height = ".3";
  var _QK_ = [,,];
  _QK_.length = 0;
  _Q8_toNode.links = _QK_;
  _Q5_left.prin = _Q8_toNode;
  var _QM_ = [_Q8_toNode];
  _Q5_left.auxs = _QM_;

  _9_.set("nd204", _Q5_left);

  var _QO_right = (__constructor.prototype = _6I_, new __constructor());

  _QO_right.key = "nd207";
  _QO_right.shape = null;
  _QO_right.text = null;
  _QO_right.colour = null;
  _QO_right.name = void 0;
  _QO_right.graph = _6_graph;
  _QO_right.group = null;
  _QO_right.width = null;
  _QO_right.height = null;
  var _QP_ = [];
  _QO_right.links = _QP_;
  var _QQ_ = [];
  _QO_right.nodes = _QQ_;

  var _QR_toNode = (__constructor.prototype = _K4_, new __constructor());

  _QR_toNode.key = "nd206";
  _QR_toNode.shape = null;
  _QR_toNode.text = "V";
  _QR_toNode.colour = "cyan";
  _QR_toNode.name = "state";
  _QR_toNode.graph = _6_graph;
  _QR_toNode.group = _QC__95node;
  _QR_toNode.width = ".3";
  _QR_toNode.height = ".3";
  var _QX_ = [,,];
  _QX_.length = 0;
  _QR_toNode.links = _QX_;
  _QO_right.prin = _QR_toNode;
  var _QZ_ = [_QR_toNode];
  _QO_right.auxs = _QZ_;

  _9_.set("nd207", _QO_right);

  var _Qb_left = (__constructor.prototype = _6I_, new __constructor());

  _Qb_left.key = "nd208";
  _Qb_left.shape = null;
  _Qb_left.text = null;
  _Qb_left.colour = null;
  _Qb_left.name = void 0;
  _Qb_left.graph = _6_graph;
  _Qb_left.group = null;
  _Qb_left.width = null;
  _Qb_left.height = null;
  var _Qc_ = [];
  _Qb_left.links = _Qc_;
  var _Qd_ = [];
  _Qb_left.nodes = _Qd_;

  var _Qe_fromNode = (__constructor.prototype = _1e_, new __constructor());

  _Qe_fromNode.key = "nd202";
  _Qe_fromNode.shape = null;
  _Qe_fromNode.text = "@";
  _Qe_fromNode.colour = "yellow";
  _Qe_fromNode.name = void 0;
  _Qe_fromNode.graph = _6_graph;
  _Qe_fromNode.group = _B_;
  _Qe_fromNode.width = null;
  _Qe_fromNode.height = null;
  var _Qi_ = [,,,,];
  _Qi_.length = 0;
  _Qe_fromNode.links = _Qi_;
  _Qb_left.prin = _Qe_fromNode;
  var _Qk_newAuxs = [_Q8_toNode, _QR_toNode];
  _Qb_left.auxs = _Qk_newAuxs;

  _9_.set("nd208", _Qb_left);

  var _Qm_right = (__constructor.prototype = _6I_, new __constructor());

  _Qm_right.key = "nd211";
  _Qm_right.shape = null;
  _Qm_right.text = null;
  _Qm_right.colour = null;
  _Qm_right.name = void 0;
  _Qm_right.graph = _6_graph;
  _Qm_right.group = null;
  _Qm_right.width = null;
  _Qm_right.height = null;
  var _Qn_ = [];
  _Qm_right.links = _Qn_;
  var _Qo_ = [];
  _Qm_right.nodes = _Qo_;

  var _Qp_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Qp_toNode.key = "nd210";
  _Qp_toNode.shape = null;
  _Qp_toNode.text = "V";
  _Qp_toNode.colour = "cyan";
  _Qp_toNode.name = "inp";
  _Qp_toNode.graph = _6_graph;
  _Qp_toNode.group = _QC__95node;
  _Qp_toNode.width = ".3";
  _Qp_toNode.height = ".3";
  var _Qv_ = [,,];
  _Qv_.length = 0;
  _Qp_toNode.links = _Qv_;
  _Qm_right.prin = _Qp_toNode;
  var _Qx_ = [_Qp_toNode];
  _Qm_right.auxs = _Qx_;

  _9_.set("nd211", _Qm_right);

  var _Qz_term = (__constructor.prototype = _6I_, new __constructor());

  _Qz_term.key = "nd212";
  _Qz_term.shape = null;
  _Qz_term.text = null;
  _Qz_term.colour = null;
  _Qz_term.name = void 0;
  _Qz_term.graph = _6_graph;
  _Qz_term.group = null;
  _Qz_term.width = null;
  _Qz_term.height = null;
  var _R0_ = [];
  _Qz_term.links = _R0_;
  var _R1_ = [];
  _Qz_term.nodes = _R1_;

  var _R2_fromNode = (__constructor.prototype = _1e_, new __constructor());

  _R2_fromNode.key = "nd201";
  _R2_fromNode.shape = null;
  _R2_fromNode.text = "@";
  _R2_fromNode.colour = "yellow";
  _R2_fromNode.name = void 0;
  _R2_fromNode.graph = _6_graph;
  _R2_fromNode.group = _B_;
  _R2_fromNode.width = null;
  _R2_fromNode.height = null;
  var _R6_ = [,,,,];
  _R6_.length = 0;
  _R2_fromNode.links = _R6_;
  _Qz_term.prin = _R2_fromNode;
  var _R8_newAuxs = [_Q8_toNode, _QR_toNode, _Qp_toNode];
  _Qz_term.auxs = _R8_newAuxs;

  _9_.set("nd212", _Qz_term);

  var _RA_right = (__constructor.prototype = _6I_, new __constructor());

  _RA_right.key = "nd215";
  _RA_right.shape = null;
  _RA_right.text = null;
  _RA_right.colour = null;
  _RA_right.name = void 0;
  _RA_right.graph = _6_graph;
  _RA_right.group = null;
  _RA_right.width = null;
  _RA_right.height = null;
  var _RB_ = [];
  _RA_right.links = _RB_;
  var _RC_ = [];
  _RA_right.nodes = _RC_;

  var _RD_toNode = (__constructor.prototype = _Gv_, new __constructor());

  _RD_toNode.key = "nd200";
  _RD_toNode.shape = null;
  _RD_toNode.text = "\u0394";
  _RD_toNode.colour = "indianred1";
  _RD_toNode.name = void 0;
  _RD_toNode.graph = _6_graph;
  _RD_toNode.group = _B_;
  _RD_toNode.width = null;
  _RD_toNode.height = null;
  var _RH_ = [,,,,];
  _RH_.length = 0;
  _RD_toNode.links = _RH_;
  _RA_right.prin = _RD_toNode;

  var _RK_fromNode = (__constructor.prototype = _Cw_, new __constructor());

  _RK_fromNode.key = "nd214";
  _RK_fromNode.shape = null;
  _RK_fromNode.text = "C";
  _RK_fromNode.colour = "cyan";
  _RK_fromNode.name = "state";
  _RK_fromNode.graph = _6_graph;
  _RK_fromNode.group = _B_;
  _RK_fromNode.width = ".3";
  _RK_fromNode.height = ".3";
  var _RQ_ = [,,,];
  _RQ_.length = 0;
  _RK_fromNode.links = _RQ_;
  var _RJ_auxs = [_Q8_toNode, _Qp_toNode, _RK_fromNode];
  _RA_right.auxs = _RJ_auxs;

  _9_.set("nd215", _RA_right);

  var _RT_term = (__constructor.prototype = _6I_, new __constructor());

  _RT_term.key = "nd217";
  _RT_term.shape = null;
  _RT_term.text = null;
  _RT_term.colour = null;
  _RT_term.name = void 0;
  _RT_term.graph = _6_graph;
  _RT_term.group = null;
  _RT_term.width = null;
  _RT_term.height = null;
  var _RU_ = [];
  _RT_term.links = _RU_;
  var _RV_ = [];
  _RT_term.nodes = _RV_;

  var _RW_toNode = (__constructor.prototype = _1e_, new __constructor());

  _RW_toNode.key = "nd189";
  _RW_toNode.shape = null;
  _RW_toNode.text = "@";
  _RW_toNode.colour = "yellow";
  _RW_toNode.name = void 0;
  _RW_toNode.graph = _6_graph;
  _RW_toNode.group = _B_;
  _RW_toNode.width = null;
  _RW_toNode.height = null;
  var _Ra_ = [,,,];
  _Ra_.length = 0;
  _RW_toNode.links = _Ra_;
  _RT_term.prin = _RW_toNode;
  var _Rc_newAuxs = [_Q8_toNode, _Qp_toNode, _IR_toNode,,];
  _Rc_newAuxs.length = 3;
  _RT_term.auxs = _Rc_newAuxs;

  _9_.set("nd217", _RT_term);

  var _Rf_left = (__constructor.prototype = _6I_, new __constructor());

  _Rf_left.key = "nd220";
  _Rf_left.shape = null;
  _Rf_left.text = null;
  _Rf_left.colour = null;
  _Rf_left.name = void 0;
  _Rf_left.graph = _6_graph;
  _Rf_left.group = null;
  _Rf_left.width = null;
  _Rf_left.height = null;
  var _Rg_ = [];
  _Rf_left.links = _Rg_;
  var _Rh_ = [];
  _Rf_left.nodes = _Rh_;

  var _Ri_fromNode = (__constructor.prototype = _67_, new __constructor());

  _Ri_fromNode.key = "nd187";
  _Ri_fromNode.shape = null;
  _Ri_fromNode.text = "!";
  _Ri_fromNode.colour = "cyan";
  _Ri_fromNode.name = void 0;
  _Ri_fromNode.graph = _6_graph;
  _Ri_fromNode.group = _B_;
  _Ri_fromNode.width = ".3";
  _Ri_fromNode.height = ".3";
  var _Ro_ = [,,];
  _Ro_.length = 0;
  _Ri_fromNode.links = _Ro_;
  _Rf_left.prin = _Ri_fromNode;
  var _Rq_newPaxs = [,,];
  _Rq_newPaxs.length = 0;
  _Rf_left.auxs = _Rq_newPaxs;

  _9_.set("nd220", _Rf_left);

  var _Rt_term = (__constructor.prototype = _6I_, new __constructor());

  _Rt_term.key = "nd223";
  _Rt_term.shape = null;
  _Rt_term.text = null;
  _Rt_term.colour = null;
  _Rt_term.name = void 0;
  _Rt_term.graph = _6_graph;
  _Rt_term.group = null;
  _Rt_term.width = null;
  _Rt_term.height = null;
  var _Ru_ = [];
  _Rt_term.links = _Ru_;
  var _Rv_ = [];
  _Rt_term.nodes = _Rv_;

  var _Rw_toNode = (__constructor.prototype = _K4_, new __constructor());

  _Rw_toNode.key = "nd222";
  _Rw_toNode.shape = null;
  _Rw_toNode.text = "V";
  _Rw_toNode.colour = "cyan";
  _Rw_toNode.name = "init";
  _Rw_toNode.graph = _6_graph;

  var _S0__95node = (__constructor.prototype = _5z_, new __constructor());

  _S0__95node.key = "nd181";
  _S0__95node.shape = null;
  _S0__95node.text = null;
  _S0__95node.colour = null;
  _S0__95node.name = void 0;
  _S0__95node.graph = _6_graph;
  _S0__95node.group = _B_;
  _S0__95node.width = null;
  _S0__95node.height = null;
  var _S2_ = [,,,,,,];
  _S2_.length = 0;
  _S0__95node.links = _S2_;
  var _S4_ = [,,,,,,];
  _S4_.length = 0;
  _S0__95node.nodes = _S4_;
  _Rw_toNode.group = _S0__95node;
  _Rw_toNode.width = ".3";
  _Rw_toNode.height = ".3";
  var _S8_ = [,,];
  _S8_.length = 0;
  _Rw_toNode.links = _S8_;
  _Rt_term.prin = _Rw_toNode;
  var _SA_ = [_Rw_toNode];
  _Rt_term.auxs = _SA_;

  _9_.set("nd223", _Rt_term);

  var _SC_right = (__constructor.prototype = _6I_, new __constructor());

  _SC_right.key = "nd225";
  _SC_right.shape = null;
  _SC_right.text = null;
  _SC_right.colour = null;
  _SC_right.name = void 0;
  _SC_right.graph = _6_graph;
  _SC_right.group = null;
  _SC_right.width = null;
  _SC_right.height = null;
  var _SD_ = [];
  _SC_right.links = _SD_;
  var _SE_ = [];
  _SC_right.nodes = _SE_;

  var _SF_toNode = (__constructor.prototype = _Hv_, new __constructor());

  _SF_toNode.key = "nd224";
  _SF_toNode.shape = "diamond";
  _SF_toNode.text = "";
  _SF_toNode.colour = "indianred1";
  _SF_toNode.name = void 0;
  _SF_toNode.graph = _6_graph;
  _SF_toNode.group = _B_;
  _SF_toNode.width = ".3";
  _SF_toNode.height = ".3";
  var _SM_ = [,,,];
  _SM_.length = 0;
  _SF_toNode.links = _SM_;
  _SC_right.prin = _SF_toNode;
  _SC_right.auxs = _SA_;

  _9_.set("nd225", _SC_right);

  var _SP_term = (__constructor.prototype = _6I_, new __constructor());

  _SP_term.key = "nd226";
  _SP_term.shape = null;
  _SP_term.text = null;
  _SP_term.colour = null;
  _SP_term.name = void 0;
  _SP_term.graph = _6_graph;
  _SP_term.group = null;
  _SP_term.width = null;
  _SP_term.height = null;
  var _SQ_ = [];
  _SP_term.links = _SQ_;
  var _SR_ = [];
  _SP_term.nodes = _SR_;

  var _SS_toNode = (__constructor.prototype = _1e_, new __constructor());

  _SS_toNode.key = "nd184";
  _SS_toNode.shape = null;
  _SS_toNode.text = "@";
  _SS_toNode.colour = "yellow";
  _SS_toNode.name = void 0;
  _SS_toNode.graph = _6_graph;
  _SS_toNode.group = _B_;
  _SS_toNode.width = null;
  _SS_toNode.height = null;
  var _SW_ = [,,,];
  _SW_.length = 0;
  _SS_toNode.links = _SW_;
  _SP_term.prin = _SS_toNode;

  var _SZ_toNode = (__constructor.prototype = _6F_, new __constructor());

  _SZ_toNode.key = "nd218";
  _SZ_toNode.shape = null;
  _SZ_toNode.text = "?";
  _SZ_toNode.colour = "cyan";
  _SZ_toNode.name = "trans";
  _SZ_toNode.graph = _6_graph;
  _SZ_toNode.group = _B_;
  _SZ_toNode.width = ".3";
  _SZ_toNode.height = ".3";
  var _Sf_ = [,,,];
  _Sf_.length = 0;
  _SZ_toNode.links = _Sf_;

  var _Sh_toNode = (__constructor.prototype = _6F_, new __constructor());

  _Sh_toNode.key = "nd219";
  _Sh_toNode.shape = null;
  _Sh_toNode.text = "?";
  _Sh_toNode.colour = "cyan";
  _Sh_toNode.name = "inp";
  _Sh_toNode.graph = _6_graph;
  _Sh_toNode.group = _B_;
  _Sh_toNode.width = ".3";
  _Sh_toNode.height = ".3";
  var _Sn_ = [,,];
  _Sn_.length = 0;
  _Sh_toNode.links = _Sn_;
  var _SY_newAuxs = [_SZ_toNode, _Sh_toNode, _Rw_toNode];
  _SP_term.auxs = _SY_newAuxs;

  _9_.set("nd226", _SP_term);

  var _Sq_term = (__constructor.prototype = _6I_, new __constructor());

  _Sq_term.key = "nd229";
  _Sq_term.shape = null;
  _Sq_term.text = null;
  _Sq_term.colour = null;
  _Sq_term.name = void 0;
  _Sq_term.graph = _6_graph;
  _Sq_term.group = null;
  _Sq_term.width = null;
  _Sq_term.height = null;
  var _Sr_ = [];
  _Sq_term.links = _Sr_;
  var _Ss_ = [];
  _Sq_term.nodes = _Ss_;

  var _St_fromNode = (__constructor.prototype = _67_, new __constructor());

  _St_fromNode.key = "nd182";
  _St_fromNode.shape = null;
  _St_fromNode.text = "!";
  _St_fromNode.colour = "cyan";
  _St_fromNode.name = void 0;
  _St_fromNode.graph = _6_graph;
  _St_fromNode.group = _B_;
  _St_fromNode.width = ".3";
  _St_fromNode.height = ".3";
  var _Sz_ = [,,];
  _Sz_.length = 0;
  _St_fromNode.links = _Sz_;
  _Sq_term.prin = _St_fromNode;
  var _T1_newPaxs = [,,];
  _T1_newPaxs.length = 0;
  _Sq_term.auxs = _T1_newPaxs;

  _9_.set("nd229", _Sq_term);

  var _T4_term = (__constructor.prototype = _6I_, new __constructor());

  _T4_term.key = "nd231";
  _T4_term.shape = null;
  _T4_term.text = null;
  _T4_term.colour = null;
  _T4_term.name = void 0;
  _T4_term.graph = _6_graph;
  _T4_term.group = null;
  _T4_term.width = null;
  _T4_term.height = null;
  var _T5_ = [];
  _T4_term.links = _T5_;
  var _T6_ = [];
  _T4_term.nodes = _T6_;

  var _T7_fromNode = (__constructor.prototype = _67_, new __constructor());

  _T7_fromNode.key = "nd178";
  _T7_fromNode.shape = null;
  _T7_fromNode.text = "!";
  _T7_fromNode.colour = "cyan";
  _T7_fromNode.name = void 0;
  _T7_fromNode.graph = _6_graph;
  _T7_fromNode.group = _B_;
  _T7_fromNode.width = ".3";
  _T7_fromNode.height = ".3";
  var _TD_ = [,,];
  _TD_.length = 0;
  _T7_fromNode.links = _TD_;
  _T4_term.prin = _T7_fromNode;
  var _TF_newPaxs = [,];
  _TF_newPaxs.length = 0;
  _T4_term.auxs = _TF_newPaxs;

  _9_.set("nd231", _T4_term);

  var _TI_right = (__constructor.prototype = _6I_, new __constructor());

  _TI_right.key = "nd232";
  _TI_right.shape = null;
  _TI_right.text = null;
  _TI_right.colour = null;
  _TI_right.name = void 0;
  _TI_right.graph = _6_graph;
  _TI_right.group = null;
  _TI_right.width = null;
  _TI_right.height = null;
  var _TJ_ = [];
  _TI_right.links = _TJ_;
  var _TK_ = [];
  _TI_right.nodes = _TK_;

  var _TL_fromNode = (__constructor.prototype = _67_, new __constructor());

  _TL_fromNode.key = "nd174";
  _TL_fromNode.shape = null;
  _TL_fromNode.text = "!";
  _TL_fromNode.colour = "cyan";
  _TL_fromNode.name = void 0;
  _TL_fromNode.graph = _6_graph;
  _TL_fromNode.group = _B_;
  _TL_fromNode.width = ".3";
  _TL_fromNode.height = ".3";
  var _TR_ = [,,,];
  _TR_.length = 0;
  _TL_fromNode.links = _TR_;
  _TI_right.prin = _TL_fromNode;
  var _TT_newPaxs = [];
  _TI_right.auxs = _TT_newPaxs;

  _9_.set("nd232", _TI_right);

  var _TV_term = (__constructor.prototype = _6I_, new __constructor());

  _TV_term.key = "nd233";
  _TV_term.shape = null;
  _TV_term.text = null;
  _TV_term.colour = null;
  _TV_term.name = void 0;
  _TV_term.graph = _6_graph;
  _TV_term.group = null;
  _TV_term.width = null;
  _TV_term.height = null;
  var _TW_ = [];
  _TV_term.links = _TW_;
  var _TX_ = [];
  _TV_term.nodes = _TX_;

  var _TY_toNode = (__constructor.prototype = _1e_, new __constructor());

  _TY_toNode.key = "nd2";
  _TY_toNode.shape = null;
  _TY_toNode.text = "@";
  _TY_toNode.colour = "yellow";
  _TY_toNode.name = void 0;
  _TY_toNode.graph = _6_graph;
  _TY_toNode.group = _B_;
  _TY_toNode.width = null;
  _TY_toNode.height = null;
  var _Tc_ = [,,,];
  _Tc_.length = 0;
  _TY_toNode.links = _Tc_;
  _TV_term.prin = _TY_toNode;
  var _Te_newAuxs = [];
  _TV_term.auxs = _Te_newAuxs;

  _9_.set("nd233", _TV_term);

  _9_.set("nd234", _Cx_newBoxWrapper);

  _9_.set("nd236", _DB_newBox);

  _9_.set("nd238", _DR_newBoxWrapper);

  _9_.set("nd240", _Dj_newBox);

  _9_.set("nd242", _Dz_newBoxWrapper);

  _9_.set("nd244", _EL_newBox);

  _9_.set("nd247", _Ep_newBoxWrapper);

  _9_.set("nd249", _FB_newBox);

  _9_.set("nd252", _G5_newBoxWrapper);

  _9_.set("nd254", _GL_newBox);

  _9_.set("nd277", _JN_wrapper);

  _9_.set("nd278", _JV_box);

  _5L_.group = _5I_node;
  _5X_.group = _5U_node;
  _5a_.group = _5U_node;
  _5P_outLink.group = _5I_node;
  _4p_.group = _4m_node;
  _4u_.group = _4m_node;
  _4y_.group = _4m_node;
  _4d_.group = _4a_node;
  _52_.group = _4m_node;
  _55_.group = _4m_node;
  _4h_link.group = _4a_node;
  _47_.group = _44_node;
  _4C_.group = _44_node;
  _4G_.group = _44_node;
  _3v_.group = _3s_node;
  _4K_.group = _44_node;
  _4N_.group = _44_node;
  _3z_.group = _3s_node;
  _3P_.group = _3M_node;
  _3U_.group = _3M_node;
  _3Y_.group = _3M_node;
  _3H_.group = _3E_node;
  _3c_.group = _3M_node;
  _3f_.group = _3M_node;
  _2e_.group = _2b_node;
  _2j_.group = _2b_node;
  _2o_.group = _2b_node;
  _2r_.group = _2b_node;
  _2v_.group = _2b_node;
  _2S_.group = _2P_node;
  _2y_.group = _2b_node;
  _31_outLink.group = _2b_node;
  _2W_outLink.group = _2P_node;
  _1u_.group = _1r_node;
  _9Y_.group = _9V_node;
  _8W_.group = _8T_node;
  _8a_.group = _8T_node;
  _8e_.group = _8T_node;
  _Ac_.group = _AZ_node;
  _AQ_.group = _AN_node;
  _Ag_.group = _AZ_node;
  _Aj_outLink.group = _AZ_node;
  _AU_outLink.group = _AN_node;
  _A2_.group = _9z_node;
  _AA_.group = _A7_node;
  _AE_.group = _A7_node;
  _8i_.group = _8T_node;
  _8m_.group = _8T_node;
  _8q_.group = _8T_node;
  _8u_.group = _8T_node;
  _8K_.group = _8H_node;
  _8y_.group = _8T_node;
  _91_outLink.group = _8T_node;
  _8O_outLink.group = _8H_node;
  _1z_.group = _1r_node;
  _23_.group = _1r_node;
  _1i_.group = _1f_node;
  _27_.group = _1r_node;
  _2A_.group = _1r_node;
  _1m_link.group = _1f_node;
  _F_link.group = _B_;
  _C6_link.group = _C3_node;
  _Ig_link.group = _Id_node;
  _11_link.group = _B_;
  _16_link.group = _B_;
  _19_link.group = _B_;
  _1C_otherNextLink.group = _B_;
  _x_link.group = _B_;
  _CU_link.group = _CR_node;
  _L_link.group = _B_;
  _P_link.group = _B_;
  _U_link.group = _B_;
  _Y_link.group = _B_;
  _1K_otherNextLink.group = _B_;
  _p_link.group = _B_;
  _1H_i.group = _B_;
  _u_link.group = _B_;
  _d_link.group = _B_;
  _GO_newLink.group = _GL_newBox;
  _G8_newLink.group = _G5_newBoxWrapper;
  _GC_newLink.group = _G5_newBoxWrapper;
  _FE_newLink.group = _FB_newBox;
  _FJ_newLink.group = _FB_newBox;
  _FN_newLink.group = _FB_newBox;
  _FR_newLink.group = _FB_newBox;
  _FU_newLink.group = _FB_newBox;
  _FY_newLink.group = _FB_newBox;
  _Fb_newLink.group = _FB_newBox;
  _Fd_newLink.group = _FB_newBox;
  _Fh_newLink.group = _FB_newBox;
  _Fj_newLink.group = _FB_newBox;
  _Fn_newLink.group = _FB_newBox;
  _Fq_newLink.group = _FB_newBox;
  _Ft_newLink.group = _FB_newBox;
  _Es_newLink.group = _Ep_newBoxWrapper;
  _Ew_newLink.group = _Ep_newBoxWrapper;
  _F0_newLink.group = _Ep_newBoxWrapper;
  _EO_newLink.group = _EL_newBox;
  _ET_newLink.group = _EL_newBox;
  _EX_newLink.group = _EL_newBox;
  _EZ_newLink.group = _EL_newBox;
  _Ec_newLink.group = _EL_newBox;
  _E2_newLink.group = _Dz_newBoxWrapper;
  _E6_newLink.group = _Dz_newBoxWrapper;
  _EA_newLink.group = _Dz_newBoxWrapper;
  _Dm_newLink.group = _Dj_newBox;
  _Dq_newLink.group = _Dj_newBox;
  _DU_newLink.group = _DR_newBoxWrapper;
  _DY_newLink.group = _DR_newBoxWrapper;
  _DE_newLink.group = _DB_newBox;
  _DI_newLink.group = _DB_newBox;
  _D0_newLink.group = _Cx_newBoxWrapper;
  _i_link.group = _B_;
  _JQ_.group = _JN_wrapper;
  _1R_fromNode.group = _B_;
  _1Z_prev.group = _B_;
  _Bk_node.group = _1f_node;
  _V1_Term.prototype = _6I_;
  _2G_node.group = _1r_node;
  _2L_node.group = _1r_node;
  _7x_node.group = _2P_node;
  _36_node.group = _2b_node;
  _3A_node.group = _2b_node;
  _7R_node.group = _3E_node;
  _3k_node.group = _3M_node;
  _3o_node.group = _3M_node;
  _74_node.group = _3s_node;
  _4S_node.group = _44_node;
  _4W_node.group = _44_node;
  _6b_node.group = _4a_node;
  _5A_node.group = _4m_node;
  _5E_node.group = _4m_node;
  _61_node.group = _5I_node;
  _5g_node.group = _5U_node;
  _5k_node.group = _5U_node;
  _Ut_BoxWrapper.prototype = _6H_;
  _Ue_Box.prototype = _5z_;
  _5q_node.group = _5U_node;
  _68_node.group = _5I_node;
  _6J_node.group = _4m_node;
  _6Q_node.group = _4m_node;
  _6V_node.group = _4m_node;
  _6h_node.group = _4a_node;
  _6o_node.group = _44_node;
  _6u_node.group = _44_node;
  _6y_node.group = _44_node;
  _7A_node.group = _3s_node;
  _7H_node.group = _3M_node;
  _7N_node.group = _3M_node;
  _7Y_node.group = _2b_node;
  _7e_node.group = _2b_node;
  _7i_node.group = _2b_node;
  _7q_node.group = _2b_node;
  _83_node.group = _2P_node;
  _8B_node.group = _1r_node;
  _BX_node.group = _8H_node;
  _96_node.group = _8T_node;
  _9A_fromNode.group = _8T_node;
  _9F_node.group = _8T_node;
  _9J_node.group = _8T_node;
  _9N_node.group = _8T_node;
  _9m_node.group = _9V_node;
  _9h_node.group = _9d_node;
  _9t_node.group = _8T_node;
  _BJ_node.group = _9z_node;
  _AJ_node.group = _A7_node;
  _B5_node.group = _AN_node;
  _Ao_node.group = _AZ_node;
  _As_fromNode.group = _AZ_node;
  _Az_node.group = _AZ_node;
  _BB_node.group = _AN_node;
  _BQ_node.group = _8T_node;
  _Bd_node.group = _8H_node;
  _Bq_node.group = _1f_node;
  _Bx_node.group = _B_;
  _CJ_toNode.group = _C3_node;
  _CF_node.group = _CB_node;
  _IY_prev.group = _B_;
  _It_left.group = _Id_node;
  _Ip_node.group = _Il_node;
  _J0_right.group = _B_;
  _J5_otherNode.group = _B_;
  _Ch_toNode.group = _CR_node;
  _Cd_node.group = _CZ_node;
  _Cp_toNode.group = _B_;
  _Jl_otherNode.group = _B_;
  _IR_toNode.group = _B_;
  _D5_fromNode.group = _Cx_newBoxWrapper;
  _DN_toNode.group = _DB_newBox;
  _Dd_toNode.group = _DR_newBoxWrapper;
  _Dv_toNode.group = _Dj_newBox;
  _EF_toNode.group = _Dz_newBoxWrapper;
  _Eh_toNode.group = _EL_newBox;
  _El_toNode.group = _EL_newBox;
  _F5_toNode.group = _Ep_newBoxWrapper;
  _Fx_toNode.group = _FB_newBox;
  _G1_toNode.group = _FB_newBox;
  _GF_toNode.group = _G5_newBoxWrapper;
  _GT_fromNode.group = _GL_newBox;
  _GX_fromNode.group = _GL_newBox;
  _Gd_fromNode.group = _G5_newBoxWrapper;
  _Gl_toNode.group = _FB_newBox;
  _Gr_toNode.group = _FB_newBox;
  _Gw_fromNode.group = _FB_newBox;
  _H0_fromNode.group = _FB_newBox;
  _H4_fromNode.group = _FB_newBox;
  _HB_toNode.group = _FB_newBox;
  _HH_fromNode.group = _FB_newBox;
  _HO_fromNode.group = _FB_newBox;
  _HU_fromNode.group = _Ep_newBoxWrapper;
  _Ha_fromNode.group = _Ep_newBoxWrapper;
  _Hi_toNode.group = _EL_newBox;
  _Ho_fromNode.group = _EL_newBox;
  _Hw_fromNode.group = _Dz_newBoxWrapper;
  _I2_fromNode.group = _Dz_newBoxWrapper;
  _IA_fromNode.group = _DR_newBoxWrapper;
  _II_fromNode.group = _B_;
  _IO_toNode.group = _B_;
  _JB_weak1.group = _B_;
  _JH_weak2.group = _B_;
  _Jd_toNode.group = _JN_wrapper;
  _JZ_toNode.group = _JV_box;
  _Ug_Group.prototype = _60_;

  _$5_Object_46setPrototypeOf(_Ug_Group, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ve_, _$4_Object_46defineProperty(_Th_, "clear", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vf_, _$4_Object_46defineProperty(_Th_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vg_, _$4_Object_46defineProperty(_Th_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vh_, _$4_Object_46defineProperty(_Th_, "findNodeByKey", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vi_, _$4_Object_46defineProperty(_Th_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vj_, _$4_Object_46defineProperty(_Th_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Wh_, _$4_Object_46defineProperty(_Vo_MachineToken, "CompData", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Wi_, _$4_Object_46defineProperty(_Vo_MachineToken, "RewriteFlag", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vl_, _$4_Object_46defineProperty(_Tp_, "setLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vm_, _$4_Object_46defineProperty(_Tp_, "reset", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vn_, _$4_Object_46defineProperty(_Tp_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vp_, _$4_Object_46defineProperty(_Tr_, "collect", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vq_, _$4_Object_46defineProperty(_Tr_, "collectInGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Xj_ = (__constructor.prototype = _5x_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xi_Recur, _$4_Object_46defineProperty(_Xj_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ye_, _$4_Object_46defineProperty(_Xj_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yf_, _$4_Object_46defineProperty(_Xj_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yg_, _$4_Object_46defineProperty(_Xj_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xi_Recur.prototype = _Xj_;

  _$5_Object_46setPrototypeOf(_Xi_Recur, _Ua_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vr_, _$4_Object_46defineProperty(_Tr_, "collectFromBottom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vt_, _$4_Object_46defineProperty(_Tx_, "isPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vu_, _$4_Object_46defineProperty(_Tx_, "setPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vv_, _$4_Object_46defineProperty(_Tx_, "isPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vw_, _$4_Object_46defineProperty(_Tx_, "setPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vx_, _$4_Object_46defineProperty(_Tx_, "isFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vy_, _$4_Object_46defineProperty(_Tx_, "setFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YG_, _$4_Object_46defineProperty(_XO_, "_nextChar", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Zk_Token.EOF = "EOF";
  _Zk_Token.LAMBDA = "LAMBDA";
  _Zk_Token.LPAREN = "LPAREN";
  _Zk_Token.RPAREN = "RPAREN";
  _Zk_Token.CLPAREN = "CLPAREN";
  _Zk_Token.CRPAREN = "CRPAREN";
  _Zk_Token.LCID = "LCID";
  _Zk_Token.DOT = "DOT";
  _Zk_Token.COMMA = "COMMA";
  _Zk_Token.APP = "APP";
  _Zk_Token.LET = "LET";
  _Zk_Token.DEFINE = "DEFINE";
  _Zk_Token.IN = "IN";
  _Zk_Token.REC = "REC";
  _Zk_Token.INT = "INT";
  _Zk_Token.TRUE = "TRUE";
  _Zk_Token.FALSE = "FALSE";
  _Zk_Token.NOT = "NOT";
  _Zk_Token.AND = "AND";
  _Zk_Token.OR = "OR";
  _Zk_Token.PLUS = "PLUS";
  _Zk_Token.SUB = "SUB";
  _Zk_Token.MULT = "MULT";
  _Zk_Token.DIV = "DIV";
  _Zk_Token.LTE = "LTE";
  _Zk_Token.IF = "IF";
  _Zk_Token.THEN = "THEN";
  _Zk_Token.ELSE = "ELSE";
  _Zk_Token.SET = "SET";
  _Zk_Token.CHANGE = "CHANGE";
  _Zk_Token.TO = "TO";
  _Zk_Token.PROP = "PROP";
  _Zk_Token.DEP = "DEP";
  _Zk_Token.DEREF = "DEREF";
  _Zk_Token.ABS = "ABS";
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YH_, _$4_Object_46defineProperty(_XO_, "_nextToken", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YI_, _$4_Object_46defineProperty(_XO_, "token", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YJ_, _$4_Object_46defineProperty(_XO_, "lookahead", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YK_, _$4_Object_46defineProperty(_XO_, "fail", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YL_, _$4_Object_46defineProperty(_XO_, "next", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YM_, _$4_Object_46defineProperty(_XO_, "match", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YN_, _$4_Object_46defineProperty(_XO_, "skip", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YO_, _$4_Object_46defineProperty(_XQ_, "parse", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$1_enumerable_58false_44configurable_58true_44writable_58false.value = "Pattern", _$4_Object_46defineProperty(_aK_PatternType, "name", $$1_enumerable_58false_44configurable_58true_44writable_58false);
  var _Wj_PatternType = {
    Id: 0,
    Tuple: 1
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YP_, _$4_Object_46defineProperty(_XQ_, "term", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YQ_, _$4_Object_46defineProperty(_XQ_, "isBinaryOp", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _XZ_ = (__constructor.prototype = _Xa_, new __constructor());

  _Xb_UnaryOp.prototype = _XZ_;

  _$5_Object_46setPrototypeOf(_Xb_UnaryOp, _YW_Operation);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xb_UnaryOp, _$4_Object_46defineProperty(_XZ_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _XY_ = (__constructor.prototype = _XZ_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _XX_BinaryOp, _$4_Object_46defineProperty(_XY_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _XX_BinaryOp.prototype = _XY_;

  _$5_Object_46setPrototypeOf(_XX_BinaryOp, _Xb_UnaryOp);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YR_, _$4_Object_46defineProperty(_XQ_, "parseBinop", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YS_, _$4_Object_46defineProperty(_XQ_, "application", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _Z6_UnOpType = {
    Not: 0
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YT_, _$4_Object_46defineProperty(_XQ_, "atom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Vz_, _$4_Object_46defineProperty(_Tx_, "compile", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Xd_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xc_UnOp, _$4_Object_46defineProperty(_Xd_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YX_, _$4_Object_46defineProperty(_Xd_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YY_, _$4_Object_46defineProperty(_Xd_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _YZ_, _$4_Object_46defineProperty(_Xd_, "unOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ya_, _$4_Object_46defineProperty(_Xd_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xc_UnOp.prototype = _Xd_;

  _$5_Object_46setPrototypeOf(_Xc_UnOp, _UM_Node);

  var _Xg_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xf_If, _$4_Object_46defineProperty(_Xg_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yb_, _$4_Object_46defineProperty(_Xg_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yc_, _$4_Object_46defineProperty(_Xg_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yd_, _$4_Object_46defineProperty(_Xg_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xf_If.prototype = _Xg_;

  _$5_Object_46setPrototypeOf(_Xf_If, _UM_Node);

  var _Xm_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xl_Pair, _$4_Object_46defineProperty(_Xm_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yh_, _$4_Object_46defineProperty(_Xm_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yi_, _$4_Object_46defineProperty(_Xm_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yj_, _$4_Object_46defineProperty(_Xm_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xl_Pair.prototype = _Xm_;

  _$5_Object_46setPrototypeOf(_Xl_Pair, _UM_Node);

  var _Xt_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xs_Set, _$4_Object_46defineProperty(_Xt_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yk_, _$4_Object_46defineProperty(_Xt_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yl_, _$4_Object_46defineProperty(_Xt_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ym_, _$4_Object_46defineProperty(_Xt_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xs_Set.prototype = _Xt_;

  _$5_Object_46setPrototypeOf(_Xs_Set, _UM_Node);

  var _Xx_ = (__constructor.prototype = _1Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Xw_GAbs, _$4_Object_46defineProperty(_Xx_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yn_, _$4_Object_46defineProperty(_Xx_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yo_, _$4_Object_46defineProperty(_Xx_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Yp_, _$4_Object_46defineProperty(_Xx_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Xw_GAbs.prototype = _Xx_;

  _$5_Object_46setPrototypeOf(_Xw_GAbs, _UM_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W0_, _$4_Object_46defineProperty(_Tx_, "toGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W1_, _$4_Object_46defineProperty(_Tx_, "deleteVarNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W2_, _$4_Object_46defineProperty(_Tx_, "startPropagation", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W3_, _$4_Object_46defineProperty(_Tx_, "shuffle", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W4_, _$4_Object_46defineProperty(_Tx_, "batchPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W5_, _$4_Object_46defineProperty(_Tx_, "pass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W6_, _$4_Object_46defineProperty(_Tx_, "tokenPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W7_, _$4_Object_46defineProperty(_Tx_, "getData", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5_machine = (__constructor.prototype = _Tx_, new __constructor());

  _5_machine.graph = _6_graph;

  var _Ti_ = (__constructor.prototype = _Tp_, new __constructor());

  _Ti_.machine = _5_machine;
  _Ti_.forward = true;
  _Ti_.rewrite = false;
  _Ti_.transited = true;
  _Ti_.link = _i_link;
  _Ti_.rewriteFlag = "\u25A1";
  var _Tk_ = ["*", "*",,,,,];
  _Tk_.length = 2;
  _Ti_.dataStack = _Tk_;
  var _Tn_ = [_1H_i,,];
  _Tn_.length = 1;
  _Ti_.boxStack = _Tn_;
  _Ti_.isMain = true;
  _5_machine.token = _Ti_;

  var _Tq_ = (__constructor.prototype = _Tr_, new __constructor());

  _Tq_.graph = _6_graph;
  _Tq_.noMore = false;
  _5_machine.gc = _Tq_;
  _5_machine.count = 0;
  var _Tt_ = [];
  _5_machine.evalTokens = _Tt_;
  var _Tu_ = ["nd273"];
  _5_machine.cells = _Tu_;
  _5_machine.evaluating = false;

  var _Tv_ = new _$3_Map();

  _5_machine.newValues = _Tv_;
  _5_machine.hasUpdate = false;
  _5_machine.play = true;
  _5_machine.playing = true;
  _5_machine.finished = false;
  _5_machine.readyEvalTokens = 0;
  _6_graph.machine = _5_machine;
  var _W9_ = _$0_global;

  var _3_ = (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result.toString());
    module.exports = result;
  };

  _0_(_1_trampoline, _2_autoPlay, _3_);
}).call(global);