(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [0];
        break;

      case 1:
        __captured = [_I2__95get, _I2__95get];
        break;

      case 2:
        __captured = [_Jl__95typeof, _Jl__95typeof, _I9__95get, _I9__95get];
        break;

      case 3:
        __captured = [_Jg__95typeof, _Jg__95typeof];
        break;

      case 4:
        __captured = [_Jh__95typeof, _Jh__95typeof];
        break;

      case 5:
        __captured = [_Lm__95typeof, _Lm__95typeof, _LD__95getPrototypeOf, _LD__95getPrototypeOf];
        break;

      case 6:
        __captured = [_Lq__95typeof, _Lq__95typeof, _LI__95getPrototypeOf, _LI__95getPrototypeOf];
        break;

      case 7:
        __captured = [_Ls__95typeof, _Ls__95typeof, _LK__95getPrototypeOf, _LK__95getPrototypeOf];
        break;

      case 8:
        __captured = [_Lu__95typeof, _Lu__95typeof, _LM__95getPrototypeOf, _LM__95getPrototypeOf];
        break;

      case 9:
        __captured = [_Lw__95typeof, _Lw__95typeof, _LO__95getPrototypeOf, _LO__95getPrototypeOf];
        break;

      case 10:
        __captured = [_Ly__95typeof, _Ly__95typeof, _LQ__95getPrototypeOf, _LQ__95getPrototypeOf];
        break;

      case 11:
        __captured = [_M0__95typeof, _M0__95typeof, _LS__95getPrototypeOf, _LS__95getPrototypeOf];
        break;

      case 12:
        __captured = [_KE__95typeof, _KE__95typeof];
        break;

      case 13:
        __captured = [_KF__95typeof, _KF__95typeof];
        break;

      case 14:
        __captured = [_KM__95typeof, _KM__95typeof];
        break;

      case 15:
        __captured = [_KN__95typeof, _KN__95typeof];
        break;

      case 16:
        __captured = [_KP__95typeof, _KP__95typeof];
        break;

      case 17:
        __captured = [_KQ__95typeof, _KQ__95typeof];
        break;

      case 18:
        __captured = [_KR__95typeof, _KR__95typeof];
        break;

      case 19:
        __captured = [_KS__95typeof, _KS__95typeof];
        break;

      case 20:
        __captured = [_KW__95typeof, _KW__95typeof];
        break;

      case 21:
        __captured = [_KX__95typeof, _KX__95typeof];
        break;

      case 22:
        __captured = [_Lp__95typeof, _Lp__95typeof];
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

  var _Io__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ll__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LA_PatternType = function (type, id1, id2) {
    _Ll__95classCallCheck(this, _LA_PatternType);

    this.type = type;
    this.id1 = id1;
    this.id2 = id2;
  };

  var _Jq__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _II_Abstraction = function (pattern, body) {
    _Jq__95classCallCheck(this, _II_Abstraction);

    this.pattern = pattern;
    this.body = body;
  };

  var _Js__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IL_Application = function (lhs, rhs) {
    _Js__95classCallCheck(this, _IL_Application);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _Jp__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IH_Identifier = function (value, name) {
    _Jp__95classCallCheck(this, _IH_Identifier);

    this.value = value;
    this.name = name;
  };

  var _Jt__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IM_Constant = function (value) {
    _Jt__95classCallCheck(this, _IM_Constant);

    this.value = value;
  };

  var _LE__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _JM_Operation = function (type, name) {
    _LE__95classCallCheck(this, _JM_Operation);

    this.type = type;
    this.name = name;
  };

  var _IQ_ = _JM_Operation.prototype;

  var _Lp__95typeof = function (obj) {
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

  var _Jv__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LG__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_N_ = __scope_0_main[22] || __get_scope_binding_0_get_95scope_95binding(22);

    if (call && (__captured__scope_N_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _M3__95assertThisInitialized(self);
  };

  var _M3__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _IR_UnaryOp = function (type, name, v1) {
    var _this;

    _Jv__95classCallCheck(this, _IR_UnaryOp);

    _this = _LG__95possibleConstructorReturn(this, _Hk_(_IR_UnaryOp).call(this, type, name));
    _this.v1 = v1;
    return _this;
  };

  var _Ju__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LF__95possibleConstructorReturn = function (self, call) {
    if (call && (_Lo_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _M2__95assertThisInitialized(self);
  };

  var _M2__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _IN_BinaryOp = function (type, name, v1, v2) {
    var _this;

    _Ju__95classCallCheck(this, _IN_BinaryOp);

    _this = _LF__95possibleConstructorReturn(this, _Hk_(_IN_BinaryOp).call(this, type, name, v1));
    _this.v2 = v2;
    return _this;
  };

  var _Jz__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IU_IfThenElse = function (cond, t1, t2) {
    _Jz__95classCallCheck(this, _IU_IfThenElse);

    this.cond = cond;
    this.t1 = t1;
    this.t2 = t2;
  };

  var _K0__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IV_Recursion = function (param, body) {
    _K0__95classCallCheck(this, _IV_Recursion);

    this.param = param;
    this.body = body;
  };

  var _K2__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IY_Tuple = function (lhs, rhs) {
    _K2__95classCallCheck(this, _IY_Tuple);

    this.lhs = lhs;
    this.rhs = rhs;
  };

  var _K4__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ib_ProvisionalConstant = function (term) {
    _K4__95classCallCheck(this, _Ib_ProvisionalConstant);

    this.term = term;
  };

  var _K8__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ig_Change = function (param, body) {
    _K8__95classCallCheck(this, _Ig_Change);

    this.param = param;
    this.body = body;
  };

  var _K9__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ih_Assign = function (param, body) {
    _K9__95classCallCheck(this, _Ih_Assign);

    this.param = param;
    this.body = body;
  };

  var _KB__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ik_Propagation = function () {
    _KB__95classCallCheck(this, _Ik_Propagation);
  };

  var _K5__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ic_Deprecation = function (term) {
    _K5__95classCallCheck(this, _Ic_Deprecation);

    this.term = term;
  };

  var _K7__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _If_Dereference = function (term) {
    _K7__95classCallCheck(this, _If_Dereference);

    this.term = term;
  };

  var _KC__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Il_GraphAbstraction = function (term) {
    _KC__95classCallCheck(this, _Il_GraphAbstraction);

    this.term = term;
  };

  var _Jn__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Lk__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ka_Token = function (type, value, pred) {
    _Lk__95classCallCheck(this, _Ka_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _ID_Lexer = function (input) {
    _Jn__95classCallCheck(this, _ID_Lexer);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _IE_ = _ID_Lexer.prototype;

  var _J6_ = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _J7_ = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case 'λ':
      case '\\':
        this._token = new _Ka_Token(_Ka_Token.LAMBDA);
        break;

      case '.':
        this._token = new _Ka_Token(_Ka_Token.DOT);
        break;

      case ',':
        this._token = new _Ka_Token(_Ka_Token.COMMA, null, 1);
        break;

      case ';':
        this._token = new _Ka_Token(_Ka_Token.SEQ);
        break;

      case '(':
        this._token = new _Ka_Token(_Ka_Token.LPAREN);
        break;

      case ')':
        this._token = new _Ka_Token(_Ka_Token.RPAREN);
        break;

      case '{':
        this._token = new _Ka_Token(_Ka_Token.CLPAREN);
        break;

      case '}':
        this._token = new _Ka_Token(_Ka_Token.CRPAREN);
        break;

      case '\0':
        this._token = new _Ka_Token(_Ka_Token.EOF);
        break;

      case '~':
        this._token = new _Ka_Token(_Ka_Token.NOT);
        break;

      case '&':
        if (this._nextChar() == '&') this._token = new _Ka_Token(_Ka_Token.AND, null, 5);else {
          this._index--;
          this.fail();
        }
        break;

      case '|':
        var c2 = this._nextChar();

        if (c2 == '|') this._token = new _Ka_Token(_Ka_Token.OR, null, 4);else {
          this._index--;
          this.fail();
        }
        break;

      case '+':
        this._token = new _Ka_Token(_Ka_Token.PLUS, null, 12);
        break;

      case '-':
        this._token = new _Ka_Token(_Ka_Token.SUB, null, 12);
        break;

      case '*':
        this._token = new _Ka_Token(_Ka_Token.MULT, null, 13);
        break;

      case '/':
        this._token = new _Ka_Token(_Ka_Token.DIV, null, 13);
        break;

      case '<':
        if (this._nextChar() == '=') this._token = new _Ka_Token(_Ka_Token.LTE, null, 10);else {
          this._index--;
          this.fail();
        }
        break;

      case '=':
        this._token = new _Ka_Token(_Ka_Token.DEFINE);
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
          if (str == "let") this._token = new _Ka_Token(_Ka_Token.LET);else if (str == "in") this._token = new _Ka_Token(_Ka_Token.IN);else if (str == "rec") this._token = new _Ka_Token(_Ka_Token.REC);else if (str == "true") this._token = new _Ka_Token(_Ka_Token.TRUE);else if (str == "false") this._token = new _Ka_Token(_Ka_Token.FALSE);else if (str == "if") this._token = new _Ka_Token(_Ka_Token.IF);else if (str == "then") this._token = new _Ka_Token(_Ka_Token.THEN);else if (str == "else") this._token = new _Ka_Token(_Ka_Token.ELSE);else if (str == "link") this._token = new _Ka_Token(_Ka_Token.CHANGE);else if (str == "set") this._token = new _Ka_Token(_Ka_Token.SET);else if (str == "to") this._token = new _Ka_Token(_Ka_Token.TO);else if (str == "step") this._token = new _Ka_Token(_Ka_Token.PROP);else if (str == "peek") this._token = new _Ka_Token(_Ka_Token.DEP);else if (str == "deref") this._token = new _Ka_Token(_Ka_Token.DEREF);else if (str == "abs") this._token = new _Ka_Token(_Ka_Token.ABS);else this._token = new _Ka_Token(_Ka_Token.LCID, str);
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
            this._token = new _Ka_Token(_Ka_Token.INT, parseFloat(_str));
          } else {
            this.fail();
          }

    }
  };

  var _J8_ = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _J9_ = function () {
    return this._token;
  };

  var _JA_ = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _JB_ = function (type) {
    return this._token.type == type;
  };

  var _JC_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _JD_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _Jo__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _IF_Parser = function (lexer) {
    _Jo__95classCallCheck(this, _IF_Parser);

    this.lexer = lexer;
  };

  var _IG_ = _IF_Parser.prototype;

  var _JE_ = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_Ka_Token.EOF);
    return result;
  };

  var _JF_ = function (ctx) {
    if (this.lexer.skip(_Ka_Token.LAMBDA)) {
      var _id = this.lexer.token(_Ka_Token.LCID);

      this.lexer.match(_Ka_Token.DOT);
      var term = this.term([_id].concat(ctx));
      return new _II_Abstraction(new _LA_PatternType(_HZ_PatternType.Id, _id), term);
    } else if (this.lexer.skip(_Ka_Token.LET)) {
      if (this.lexer.skip(_Ka_Token.LPAREN)) {
        var id1 = this.lexer.token(_Ka_Token.LCID);
        this.lexer.match(_Ka_Token.COMMA);
        var id2 = this.lexer.token(_Ka_Token.LCID);
        this.lexer.match(_Ka_Token.RPAREN);
        var pattern = new _LA_PatternType(_HZ_PatternType.Tuple, id1, id2);
        this.lexer.match(_Ka_Token.DEFINE);
        var N = this.term(ctx);
        this.lexer.match(_Ka_Token.IN);
        var M = this.term([id1, id2].concat(ctx));
        return new _IL_Application(new _II_Abstraction(pattern, M), N);
      } else {
        var id = this.lexer.token(_Ka_Token.LCID);
        var pattern = new _LA_PatternType(_HZ_PatternType.Id, id);
        this.lexer.match(_Ka_Token.DEFINE);
        var N = this.term(ctx);
        this.lexer.match(_Ka_Token.IN);

        var _M = this.term([id].concat(ctx));

        return new _IL_Application(new _II_Abstraction(pattern, _M), N);
      }
    } else if (this.lexer.skip(_Ka_Token.REC)) {
      var _id2 = this.lexer.token(_Ka_Token.LCID);

      this.lexer.match(_Ka_Token.DOT);

      var _term = this.term([_id2].concat(ctx));

      return new _IV_Recursion(_id2, _term);
    } else if (this.lexer.skip(_Ka_Token.IF)) {
      var cond = this.term(ctx);
      this.lexer.match(_Ka_Token.THEN);
      var t1 = this.term(ctx);
      this.lexer.match(_Ka_Token.ELSE);
      var t2 = this.term(ctx);
      return new _IU_IfThenElse(cond, t1, t2);
    } else {
      return this.application(ctx);
    }
  };

  var _JG_ = function (token) {
    return token.type == _Ka_Token.AND || token.type == _Ka_Token.OR || token.type == _Ka_Token.PLUS || token.type == _Ka_Token.SUB || token.type == _Ka_Token.MULT || token.type == _Ka_Token.DIV || token.type == _Ka_Token.LTE || token.type == _Ka_Token.COMMA;
  };

  var _JH_ = function (ctx, lhs, pred) {
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

      if (op.type == _Ka_Token.AND) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.And, "&&", lhs, rhs);
      } else if (op.type == _Ka_Token.OR) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Or, "||", lhs, rhs);
      } else if (op.type == _Ka_Token.PLUS) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Plus, "+", lhs, rhs);
      } else if (op.type == _Ka_Token.SUB) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Sub, "-", lhs, rhs);
      } else if (op.type == _Ka_Token.MULT) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Mult, "*", lhs, rhs);
      } else if (op.type == _Ka_Token.DIV) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Div, "/", lhs, rhs);
      } else if (op.type == _Ka_Token.LTE) {
        lhs = new _IN_BinaryOp(_HQ_BinOpType.Lte, "<=", lhs, rhs);
      } else if (op.type == _Ka_Token.COMMA) {
        lhs = new _IY_Tuple(lhs, rhs);
      }
    }

    return lhs;
  };

  var _JI_ = function (ctx) {
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
          lhs = new _IL_Application(lhs, rhs);
        }
      }
    }
  };

  var _JJ_ = function (ctx) {
    if (this.lexer.skip(_Ka_Token.LPAREN)) {
      var _term2 = this.term(ctx);

      this.lexer.match(_Ka_Token.RPAREN);
      return _term2;
    } else if (this.lexer.next(_Ka_Token.LCID)) {
      var id = this.lexer.token(_Ka_Token.LCID);
      return new _IH_Identifier(ctx.indexOf(id), id);
    } else if (this.lexer.next(_Ka_Token.INT)) {
      var n = this.lexer.token(_Ka_Token.INT);
      return new _IM_Constant(n);
    } else if (this.lexer.skip(_Ka_Token.TRUE)) {
      return new _IM_Constant(true);
    } else if (this.lexer.skip(_Ka_Token.FALSE)) {
      return new _IM_Constant(false);
    } else if (this.lexer.skip(_Ka_Token.NOT)) {
      var _term3 = this.term(ctx);

      return new _IR_UnaryOp(_Jw_UnOpType.Not, "~", _term3);
    } else if (this.lexer.skip(_Ka_Token.PROP)) {
      return new _Ik_Propagation();
    } else if (this.lexer.skip(_Ka_Token.DEP)) {
      var term = this.term(ctx);
      return new _Ic_Deprecation(term);
    } else if (this.lexer.skip(_Ka_Token.DEREF)) {
      var term = this.term(ctx);
      return new _If_Dereference(term);
    } else if (this.lexer.skip(_Ka_Token.CLPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_Ka_Token.CRPAREN);
      return new _Ib_ProvisionalConstant(term);
    } else if (this.lexer.skip(_Ka_Token.CHANGE)) {
      var _id3 = this.lexer.token(_Ka_Token.LCID);

      this.lexer.match(_Ka_Token.TO);

      var _term4 = this.term(ctx);

      return new _Ig_Change(_id3, _term4);
    } else if (this.lexer.skip(_Ka_Token.SET)) {
      var _id4 = this.lexer.token(_Ka_Token.LCID);

      this.lexer.match(_Ka_Token.TO);

      var _term5 = this.term(ctx);

      return new _Ih_Assign(_id4, _term5);
    } else if (this.lexer.skip(_Ka_Token.ABS)) {
      var _term6 = this.term(ctx);

      return new _Il_GraphAbstraction(_term6);
    } else {
      return undefined;
    }
  };

  var _IB__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ge_MachineToken = function (machine) {
    _IB__95classCallCheck(this, _Ge_MachineToken);

    this.machine = machine;
    this.reset();
  };

  var _EV_ = _Ge_MachineToken.prototype;

  var _HX_ = function () {
    return _H2_CompData;
  };

  var _HY_ = function () {
    return _HB_RewriteFlag;
  };

  var _Gb_ = function (link) {
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

  var _Gc_ = function () {
    this.forward = true;
    this.rewrite = false;
    this.transited = false;
    this.link = null;
    this.rewriteFlag = _HB_RewriteFlag.EMPTY;
    this.dataStack = [_H2_CompData.PROMPT];
    this.boxStack = [];
  };

  var _Gd_ = function () {
    this.setLink(null);
    this.machine.evalTokens.splice(this.machine.evalTokens.indexOf(this), 1);
  };

  var _Hc__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Hd_isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  var _Ey_Link = function (from, to, fromPort, toPort, reverse) {
    _Hc__95classCallCheck(this, _Ey_Link);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.reverse = reverse;
    this.colour = null;
    this.penWidth = null;
    this.addToGraph(_H1_.graph); // cheating

    this.addToNode(); // cheating
  };

  var _M_ = _Ey_Link.prototype;

  var _Eo_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _Ep_ = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _Eq_ = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _Er_ = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _Es_ = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _Et_ = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _Eu_ = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _Ev_ = function () {
    this.colour = null;
    this.penWidth = null;
  };

  var _Ew_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _Ex_ = function () {
    return this.from + "->" + this.to;
  };

  var _IA__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Jg__95typeof = function (obj) {
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

  var _Hi__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Hj__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (call && (__captured__scope_4_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _KH__95assertThisInitialized(self);
  };

  var _KH__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Hf__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _FC_Node = function (shape, text, colour, name) {
    _Hf__95classCallCheck(this, _FC_Node);

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
    this.addToGraph(_H1_.graph); // cheating!
  };

  var _1o_ = _FC_Node.prototype;

  var _F2_ = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _F3_ = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _F4_ = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _F5_ = function () {
    return this.links;
  };

  var _F6_ = function (toPort) {
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

  var _F7_ = function (fromPort) {
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

  var _F8_ = function (graph) {
    var newNode = new _FC_Node(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
  };

  var _F9_ = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _FA_ = function (token, link) {
    return link;
  };

  var _FB_ = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _FI_Group = function () {
    var _this;

    _Hi__95classCallCheck(this, _FI_Group);

    _this = _Hj__95possibleConstructorReturn(this, _Hk_(_FI_Group).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _FJ_ = function (node) {
    this.nodes.push(node);
  };

  var _FK_ = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _FL_ = function (link) {
    this.links.push(link);
  };

  var _FM_ = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _FN_ = function () {
    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    _Hl_(_Hk_(_FI_Group.prototype), "delete", this).call(this);
  };

  var _Ga_Graph = function (machine) {
    _IA__95classCallCheck(this, _Ga_Graph);

    this.machine = machine;
    this.clear();
  };

  var _EN_ = _Ga_Graph.prototype;

  var _GU_ = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _FI_Group();
  };

  var _GV_ = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _GW_ = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _GX_ = function (key) {
    return this.allNodes.get(key);
  };

  var _GY_ = function (link) {
    this.allLinks.push(link);
  };

  var _GZ_ = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _Hr__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _It__95possibleConstructorReturn = function (self, call) {
    if (call && (_KL_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LX__95assertThisInitialized(self);
  };

  var _LX__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _I0__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _I1__95possibleConstructorReturn = function (self, call) {
    if (call && (_Jj_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Jk__95assertThisInitialized(self);
  };

  var _Jk__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _I2__95get = function (target, property, receiver) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_2_[1] = Reflect.get;
    } else {
      __captured__scope_2_[1] = function _get(target, property, receiver) {
        var base = _KU__95superPropBase(target, property);

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

  var _KU__95superPropBase = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _Hk_(object);
      if (object === null) break;
    }

    return object;
  };

  var _Jh__95typeof = function (obj) {
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

  var _Hn__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ho__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (call && (__captured__scope_5_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _KJ__95assertThisInitialized(self);
  };

  var _KJ__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _FS_Expo = function (shape, text, name) {
    var _this;

    _Hn__95classCallCheck(this, _FS_Expo);

    _this = _Ho__95possibleConstructorReturn(this, _Hk_(_FS_Expo).call(this, shape, text, "cyan", name));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _FT_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _FU_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    _Hl_(_Hk_(_FS_Expo.prototype), "delete", this).call(this);
  };

  var _FV_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (inLink != null && outLink != null) {
      outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    _Hl_(_Hk_(_FS_Expo.prototype), "delete", this).call(this);
  };

  var _GA_Pax = function (name) {
    _I0__95classCallCheck(this, _GA_Pax);

    return _I1__95possibleConstructorReturn(this, _Hk_(_GA_Pax).call(this, null, "?", name));
  };

  var _GB_ = function () {
    return new _GA_Pax(this.name);
  };

  var _GC_ = function () {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    this.group.auxs.splice(this.group.auxs.indexOf(this), 1);

    __captured__scope_2_[1](_Hk_(_GA_Pax.prototype), "delete", this).call(this);
  };

  var _Hu__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iw__95possibleConstructorReturn = function (self, call) {
    if (call && (_KO_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _La__95assertThisInitialized(self);
  };

  var _La__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Fo_Contract = function (name) {
    _Hu__95classCallCheck(this, _Fo_Contract);

    return _Iw__95possibleConstructorReturn(this, _Hk_(_Fo_Contract).call(this, null, "C", name));
  };

  var _Fp_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.boxStack.push(link);
      token.rewriteFlag = _HB_RewriteFlag.F_C;
      return nextLink;
    } else if (link.from == this.key && token.boxStack.length > 0) {
      var nextLink = token.boxStack.pop();
      return nextLink;
    }
  };

  var _Fq_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_C && nextLink.from == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;

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

        if (prev instanceof _Fo_Contract) {
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
          token.rewriteFlag = _HB_RewriteFlag.F_C;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Fr_ = function () {
    var con = new _Fo_Contract(this.name);
    con.text = this.text;
    return con;
  };

  var _Fe_Term = function (prin, auxs) {
    var _this;

    _Hr__95classCallCheck(this, _Fe_Term);

    _this = _It__95possibleConstructorReturn(this, _Hk_(_Fe_Term).call(this));

    _this.set(prin, auxs);

    return _this;
  };

  var _Ff_ = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _Fg_ = function (auxs) {
    var newPaxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = auxs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var pax = _step.value;
        var newPax = new _GA_Pax(pax.name).addToGroup(this);
        if (pax.findLinksOutOf(null).length == 0) new _Ey_Link(pax.key, newPax.key, "n", "s").addToGroup(this);else {
          var outLink = pax.findLinksOutOf(null)[0];
          new _Ey_Link(newPax.key, outLink.to, "n", outLink.toPort).addToGroup(this.group);
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

  var _HN_ = function (leftAuxs, rightAuxs, group) {
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
              var con = new _Fo_Contract(leftAux.name).addToGroup(group);
              var outLink = leftAux.findLinksOutOf(null)[0];

              if (typeof outLink != 'undefined') {
                outLink.changeFrom(con.key, outLink.fromPort);
              }

              new _Ey_Link(rightAux.key, con.key, "n", "s").addToGroup(group);
              new _Ey_Link(leftAux.key, con.key, "n", "s").addToGroup(group);
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

  var _Hp__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Hq__95possibleConstructorReturn = function (self, call) {
    if (call && (_Ji_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _KK__95assertThisInitialized(self);
  };

  var _KK__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Hh__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ir__95possibleConstructorReturn = function (self, call) {
    if (call && (_KG_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LV__95assertThisInitialized(self);
  };

  var _LV__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _FG_Box = function () {
    var _this;

    _Hh__95classCallCheck(this, _FG_Box);

    _this = _Ir__95possibleConstructorReturn(this, _Hk_(_FG_Box).call(this));
    _this.nodes = [];
    _this.links = [];
    return _this;
  };

  var _FH_ = function (graph) {// this shouldnt be call, since every box should be inside a wrapper
  };

  var _Hm__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Is__95possibleConstructorReturn = function (self, call) {
    if (call && (_KI_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LW__95assertThisInitialized(self);
  };

  var _LW__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _I3__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J2__95possibleConstructorReturn = function (self, call) {
    if (call && (_KV_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lg__95assertThisInitialized(self);
  };

  var _Lg__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _GD_Der = function (name) {
    _I3__95classCallCheck(this, _GD_Der);

    return _J2__95possibleConstructorReturn(this, _Hk_(_GD_Der).call(this, null, "D", name));
  };

  var _GE_ = function () {
    var der = new _GD_Der(this.name);
    return der;
  };

  var _FO_Promo = function () {
    _Hm__95classCallCheck(this, _FO_Promo);

    return _Is__95possibleConstructorReturn(this, _Hk_(_FO_Promo).call(this, null, "!"));
  };

  var _FP_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.rewriteFlag = _HB_RewriteFlag.F_PROMO;
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink = this.findLinksInto(null)[0];
      return nextLink;
    }
  };

  var _FQ_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_PROMO) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto(null)[0].from);

      if (prev instanceof _GD_Der) {
        var oldGroup = this.group;
        oldGroup.moveOut(); // this.group is a box-wrapper

        oldGroup.deleteAndPreserveLink();
        var newNextLink = prev.findLinksInto(null)[0];
        prev.deleteAndPreserveInLink(); // preserve inLink

        token.rewrite = true;
        return newNextLink;
      } else if (prev instanceof _Fo_Contract && token.boxStack.length >= 1) {
        if (nextLink.from == this.key) {
          var link = token.boxStack.pop();
          var inLinks = prev.findLinksInto(null);

          if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
          } else {
            var newBoxWrapper = this.group.copy().addToGroup(this.group.group);

            _Fe_Term.joinAuxs(this.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

            var prevLink = prev.findLinksOutOf(null)[0];
            prevLink.changeTo(newBoxWrapper.prin.key, prev.findLinksOutOf(null)[0].toPort);
            link.changeTo(this.key, "s");
          }

          token.rewriteFlag = _HB_RewriteFlag.F_PROMO;
          token.rewrite = true;
          return nextLink;
        }
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _FR_ = function () {
    return new _FO_Promo();
  };

  var _FW_BoxWrapper = function (prin, box, auxs) {
    var _this;

    _Hp__95classCallCheck(this, _FW_BoxWrapper);

    _this = _Hq__95possibleConstructorReturn(this, _Hk_(_FW_BoxWrapper).call(this, prin, auxs));
    _this.box = box;
    return _this;
  };

  var _FX_ = function (prin, box, auxs) {
    _Hl_(_Hk_(_FW_BoxWrapper.prototype), "set", this).call(this, prin, auxs);

    this.box = box;
  };

  var _FY_ = function (aux) {
    this.auxs.splice(this.auxs.indexOf(aux), 1);
    aux.deleteAndPreserveOutLink();
  };

  var _FZ_ = function () {
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

  var _Fa_ = function (map) {
    var newBoxWrapper = new _FW_BoxWrapper();
    var newPrin = this.prin.copy().addToGroup(newBoxWrapper);
    newBoxWrapper.prin = newPrin;
    map.set(this.prin.key, newPrin.key);
    var newBox = new _FG_Box().addToGroup(newBoxWrapper);
    newBoxWrapper.box = newBox;
    newBoxWrapper.auxs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.box.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var newNode;

        if (node instanceof _FW_BoxWrapper) {
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
        var newLink = new _Ey_Link(map.get(link.from), map.get(link.to), link.fromPort, link.toPort).addToGroup(newBox);
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
        var newLink = new _Ey_Link(map.get(_link2.from), map.get(_link2.to), _link2.fromPort, _link2.toPort).addToGroup(newBoxWrapper);
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

  var _Fb_ = function () {
    var map = new Map();
    return this.copyBox(map);
  };

  var _Fc_ = function () {
    this.box.delete();

    var _arr6 = Array.from(this.auxs);

    for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
      var aux = _arr6[_i6];
      aux.delete();
    }

    this.prin.delete();

    _Hl_(_Hk_(_FW_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _Fd_ = function () {
    this.box.delete();

    var _arr7 = Array.from(this.auxs);

    for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
      var aux = _arr7[_i7];
      this.removeAux(aux); // preserve outLink
    }

    this.prin.deleteAndPreserveInLink(); //preserve inLink

    _Hl_(_Hk_(_FW_BoxWrapper.prototype), "delete", this).call(this);
  };

  var _HM_ = function () {
    var wrapper = new _FW_BoxWrapper();
    var box = new _FG_Box().addToGroup(wrapper);
    var promo = new _FO_Promo().addToGroup(wrapper);
    wrapper.set(promo, box, []);
    return wrapper;
  };

  var _KS__95typeof = function (obj) {
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

  var _Hy__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J0__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_K_ = __scope_0_main[19] || __get_scope_binding_0_get_95scope_95binding(19);

    if (call && (__captured__scope_K_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Le__95assertThisInitialized(self);
  };

  var _Le__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _KR__95typeof = function (obj) {
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

  var _Hx__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iz__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_J_ = __scope_0_main[18] || __get_scope_binding_0_get_95scope_95binding(18);

    if (call && (__captured__scope_J_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Ld__95assertThisInitialized(self);
  };

  var _Ld__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _G1_App = function () {
    _Hx__95classCallCheck(this, _G1_App);

    return _Iz__95possibleConstructorReturn(this, _Hk_(_G1_App).call(this, null, "@", "yellow"));
  };

  var _G2_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.pop();
      token.dataStack.push(_H2_CompData.R);
      token.forward = true;
      return nextLink;
    }
  };

  var _G3_ = function () {
    return new _G1_App();
  };

  var _Lm__95typeof = function (obj) {
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

  var _Jr__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LC__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (call && (__captured__scope_6_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Ln__95assertThisInitialized(self);
  };

  var _Ln__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LD__95getPrototypeOf = function (o) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    __captured__scope_6_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6_[3](o);
  };

  var _IJ_PatTuple = function () {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    _Jr__95classCallCheck(this, _IJ_PatTuple);

    return _LC__95possibleConstructorReturn(this, __captured__scope_6_[3](_IJ_PatTuple).call(this, null, "'", "mediumpurple1"));
  };

  var _JK_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("n")[0];
      if (link.toPort == "e") token.dataStack.push(_H2_CompData.PR);else if (link.toPort == "w") token.dataStack.push(_H2_CompData.PL);
      return nextLink;
    } else if (link.from == this.key) {
      var nextLink;
      var direction = token.dataStack.pop();
      if (direction == _H2_CompData.PR) nextLink = this.findLinksInto("e")[0];else if (direction == _H2_CompData.PL) nextLink = this.findLinksInto("w")[0];
      return nextLink;
    }
  };

  var _JL_ = function () {
    return new _IJ_PatTuple();
  };

  var _G4_Abs = function () {
    _Hy__95classCallCheck(this, _G4_Abs);

    return _J0__95possibleConstructorReturn(this, _Hk_(_G4_Abs).call(this, null, "λ", "yellow"));
  };

  var _G5_ = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var data = token.dataStack[token.dataStack.length - 1];

      if (data == _H2_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push([_H2_CompData.LAMBDA, _H2_CompData.EMPTY]);
        token.forward = false;
        return link;
      } else if (data == _H2_CompData.R) {
        var nextLink = this.findLinksOutOf(null)[0];
        token.dataStack.pop();
        token.rewriteFlag = _HB_RewriteFlag.F_LAMBDA;
        return nextLink;
      }
    }
  };

  var _G6_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_LAMBDA && nextLink.from == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _G1_App) {
        // M rule
        var appLink = prev.findLinksInto(null)[0];
        var appOtherLink = prev.findLinksOutOf("e")[0];
        var otherNextLink = this.findLinksInto("w")[0];
        nextLink.changeFrom(appLink.from, appLink.fromPort);
        nextLink.changeToGroup(appLink.group);
        otherNextLink.changeTo(appOtherLink.to, appOtherLink.toPort);
        otherNextLink.reverse = false;
        var otherNode = this.graph.findNodeByKey(otherNextLink.from);
        if (otherNode instanceof _FS_Expo || otherNode instanceof _IJ_PatTuple) otherNextLink.fromPort = "n";
        otherNextLink.changeToGroup(appOtherLink.group);
        this.delete();
        prev.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _G7_ = function () {
    return new _G4_Abs();
  };

  var _KQ__95typeof = function (obj) {
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

  var _Hw__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iy__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_I_ = __scope_0_main[17] || __get_scope_binding_0_get_95scope_95binding(17);

    if (call && (__captured__scope_I_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lc__95assertThisInitialized(self);
  };

  var _Lc__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _KF__95typeof = function (obj) {
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

  var _Hg__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iq__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_E_ = __scope_0_main[13] || __get_scope_binding_0_get_95scope_95binding(13);

    if (call && (__captured__scope_E_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LU__95assertThisInitialized(self);
  };

  var _LU__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _FD_Const = function (name) {
    _Hg__95classCallCheck(this, _FD_Const);

    return _Iq__95possibleConstructorReturn(this, _Hk_(_FD_Const).call(this, null, name, "mediumpurple1", name));
  };

  var _FE_ = function (token, link) {
    if (token.dataStack[token.dataStack.length - 1] == _H2_CompData.PROMPT) {
      token.dataStack.pop();
      token.dataStack.push([this.name, _H2_CompData.EMPTY]);
      token.forward = false;
      return link;
    }
  };

  var _FF_ = function () {
    return new _FD_Const(this.name);
  };

  var _Fw_BinOp = function (text) {
    var _this;

    _Hw__95classCallCheck(this, _Fw_BinOp);

    _this = _Iy__95possibleConstructorReturn(this, _Hk_(_Fw_BinOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _Fx_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      token.forward = true;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _H2_CompData.PROMPT) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        var result = this.binOpApply(this.subType, l[0], r[0]);
        token.dataStack.push([result, _H2_CompData.EMPTY]);
        token.rewriteFlag = _HB_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
        ;
      }
    }
  };

  var _Fy_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);
      var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

      if (left instanceof _FO_Promo && right instanceof _FO_Promo) {
        var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _FD_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _Ey_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        left.group.delete();
        right.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Fz_ = function (type, v1, v2) {
    switch (type) {
      case _HQ_BinOpType.And:
        return v1 && v2;

      case _HQ_BinOpType.Or:
        return v1 || v2;

      case _HQ_BinOpType.Plus:
        return parseFloat(v1) + parseFloat(v2);

      case _HQ_BinOpType.Sub:
        return parseFloat(v1) - parseFloat(v2);

      case _HQ_BinOpType.Mult:
        return parseFloat(v1) * parseFloat(v2);

      case _HQ_BinOpType.Div:
        return parseFloat(v1) / parseFloat(v2);

      case _HQ_BinOpType.Lte:
        return parseFloat(v1) <= parseFloat(v2);
    }
  };

  var _G0_ = function () {
    var newNode = new _Fw_BinOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _HO_ = function () {
    var node = new _Fw_BinOp("+");
    node.subType = _HQ_BinOpType.Plus;
    return node;
  };

  var _HP_ = function () {
    var node = new _Fw_BinOp("*");
    node.subType = _HQ_BinOpType.Mult;
    return node;
  };

  var _I6__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J5__95possibleConstructorReturn = function (self, call) {
    if (call && (_KY_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lj__95assertThisInitialized(self);
  };

  var _Lj__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _GN_Var = function (name) {
    var _this;

    _I6__95classCallCheck(this, _GN_Var);

    _this = _J5__95possibleConstructorReturn(this, _Hk_(_GN_Var).call(this, name));
    _this.text = "V";
    return _this;
  };

  var _GO_ = function () {
    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];
    var inNode = this.graph.findNodeByKey(inLink.from);

    if (inLink != null && outLink != null) {
      if (this.graph.findNodeByKey(outLink.to) instanceof _G4_Abs && inNode instanceof _FS_Expo) outLink.changeFrom(inLink.from, "nw");else outLink.changeFrom(inLink.from, inLink.fromPort);
    }

    this.delete();
  };

  var _KP__95typeof = function (obj) {
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

  var _Hv__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ix__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_H_ = __scope_0_main[16] || __get_scope_binding_0_get_95scope_95binding(16);

    if (call && (__captured__scope_H_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lb__95assertThisInitialized(self);
  };

  var _Lb__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Hz__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J1__95possibleConstructorReturn = function (self, call) {
    if (call && (_KT_(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lf__95assertThisInitialized(self);
  };

  var _Lf__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _G8_Weak = function () {
    _Hz__95classCallCheck(this, _G8_Weak);

    return _J1__95possibleConstructorReturn(this, _Hk_(_G8_Weak).call(this, null, 'C0'));
  };

  var _G9_ = function () {
    return new _G8_Weak();
  };

  var _Fs_If = function () {
    _Hv__95classCallCheck(this, _Fs_If);

    return _Ix__95possibleConstructorReturn(this, _Hk_(_Fs_If).call(this, null, "if", "mediumpurple1"));
  };

  var _Ft_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("w")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _FO_Promo) {
        if (token.dataStack[token.dataStack.length - 1][0] == true) {
          var nextLink = this.findLinksOutOf("n")[0];
          token.dataStack.pop();
          token.rewriteFlag = _HB_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        } else if (token.dataStack[token.dataStack.length - 1][0] == false) {
          var nextLink = this.findLinksOutOf("e")[0];
          token.dataStack.pop();
          token.rewriteFlag = _HB_RewriteFlag.F_IF;
          token.forward = true;
          return nextLink;
        }
      } else {
        var nextLink = this.findLinksOutOf("n")[0];
        var data = token.dataStack.pop();
        token.dataStack.push(data[0]);
        token.dataStack.push(_H2_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      }
    } else if (link.from == this.key) {
      if (link.fromPort == "n") {
        var nextLink = this.findLinksOutOf("e")[0];
        token.dataStack.push(_H2_CompData.PROMPT);
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

  var _Fu_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_IF && nextLink.from == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

      if (left instanceof _FO_Promo) {
        var downLink = this.findLinksInto(null)[0];
        var otherLink = this.findLinksOutOf(nextLink.fromPort == "n" ? "e" : "n")[0];
        nextLink.changeFrom(downLink.from, downLink.fromPort);
        var weak = new _G8_Weak(this.graph.findNodeByKey(otherLink.to).name).addToGroup(this.group);
        otherLink.changeFrom(weak.key, "n");
        this.delete();
        left.group.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Fv_ = function () {
    return new _Fs_If();
  };

  var _Ls__95typeof = function (obj) {
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

  var _K1__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LJ__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (call && (__captured__scope_8_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lt__95assertThisInitialized(self);
  };

  var _Lt__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LK__95getPrototypeOf = function (o) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    __captured__scope_8_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8_[3](o);
  };

  var _IW_Recur = function () {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    _K1__95classCallCheck(this, _IW_Recur);

    return _LJ__95possibleConstructorReturn(this, __captured__scope_8_[3](_IW_Recur).call(this, null, "μ", "mediumpurple1"));
  };

  var _JR_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.rewriteFlag = _HB_RewriteFlag.F_RECUR;
      return nextLink;
    }
  };

  var _JS_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_RECUR && nextLink.from == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var wrapper = this.group.copy().addToGroup(this.group);

      _Fe_Term.joinAuxs(this.group.auxs, wrapper.auxs, wrapper.group);

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
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _JT_ = function () {
    return new _IW_Recur();
  };

  var _KE__95typeof = function (obj) {
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

  var _He__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Ip__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_D_ = __scope_0_main[12] || __get_scope_binding_0_get_95scope_95binding(12);

    if (call && (__captured__scope_D_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LT__95assertThisInitialized(self);
  };

  var _LT__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Ez_Start = function () {
    _He__95classCallCheck(this, _Ez_Start);

    return _Ip__95possibleConstructorReturn(this, _Hk_(_Ez_Start).call(this, "point", "", "black"));
  };

  var _F0_ = function (token) {
    if (token.link == null && token.dataStack[token.dataStack.length - 1] == _H2_CompData.PROMPT) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.forward = true;
      return nextLink;
    } else return null;
  };

  var _F1_ = function () {
    return new _Ez_Start();
  };

  var _Lq__95typeof = function (obj) {
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

  var _Jy__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LH__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (call && (__captured__scope_7_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lr__95assertThisInitialized(self);
  };

  var _Lr__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LI__95getPrototypeOf = function (o) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    __captured__scope_7_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7_[3](o);
  };

  var _IS_UnOp = function (text) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    var _this;

    _Jy__95classCallCheck(this, _IS_UnOp);

    _this = _LH__95possibleConstructorReturn(this, __captured__scope_7_[3](_IS_UnOp).call(this, null, text, "mediumpurple1"));
    _this.subType = null;
    return _this;
  };

  var _JN_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _H2_CompData.PROMPT) {
        var v1 = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([this.unOpApply(this.subType, v1[0]), _H2_CompData.EMPTY]);
        token.rewriteFlag = _HB_RewriteFlag.F_OP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _JO_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_OP && nextLink.to == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksOutOf(null)[0].to);

      if (prev instanceof _FO_Promo) {
        var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _FD_Const(token.dataStack[token.dataStack.length - 1][0]).addToGroup(wrapper.box);
        new _Ey_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        prev.group.delete();
        this.delete();
      }

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _JP_ = function (type, v1) {
    switch (type) {
      case _Jw_UnOpType.Not:
        return !v1;
    }
  };

  var _JQ_ = function () {
    var newNode = new _IS_UnOp(this.text);
    newNode.subType = this.subType;
    return newNode;
  };

  var _KX__95typeof = function (obj) {
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

  var _I5__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J4__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_M_ = __scope_0_main[21] || __get_scope_binding_0_get_95scope_95binding(21);

    if (call && (__captured__scope_M_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Li__95assertThisInitialized(self);
  };

  var _Li__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _GJ_Delta = function () {
    _I5__95classCallCheck(this, _GJ_Delta);

    return _J4__95possibleConstructorReturn(this, _Hk_(_GJ_Delta).call(this, null, "Δ", "indianred1"));
  };

  var _GK_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.pop();
        token.dataStack.push(_H2_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 2] == _H2_CompData.PROMPT) {
          var data = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_H2_CompData.UNIT, _H2_CompData.EMPTY]);
          token.rewriteFlag = _HB_RewriteFlag.F_DELTA + data[1];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _GL_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _HB_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var key = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _G8_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _G8_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");

      var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

      var con = new _FD_Const(data[0]).addToGroup(wrapper.box);
      new _Ey_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _GM_ = function () {
    return new _GJ_Delta();
  };

  var _Ly__95typeof = function (obj) {
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

  var _KA__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LP__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (call && (__captured__scope_B_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lz__95assertThisInitialized(self);
  };

  var _Lz__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LQ__95getPrototypeOf = function (o) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    __captured__scope_B_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B_[3](o);
  };

  var _Ii_Set = function () {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    _KA__95classCallCheck(this, _Ii_Set);

    return _LP__95possibleConstructorReturn(this, __captured__scope_B_[3](_Ii_Set).call(this, null, "<<~", "indianred1"));
  };

  var _Ja_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf("e")[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (link.fromPort == "e") {
        var nextLink = this.findLinksOutOf("w")[0]; //token.dataStack.pop();

        token.dataStack.push(_H2_CompData.PROMPT);
        token.forward = true;
        return nextLink;
      } else if (link.fromPort == "w") {
        if (token.dataStack[token.dataStack.length - 3] == _H2_CompData.PROMPT) {
          var data = token.dataStack.pop();
          var new_v = token.dataStack.pop();
          token.dataStack.pop();
          token.dataStack.push([_H2_CompData.UNIT, _H2_CompData.EMPTY]);
          token.rewriteFlag = _HB_RewriteFlag.F_DELTA + data[1] + ';' + new_v[0];
          return this.findLinksInto(null)[0];
        }
      }
    }
  };

  var _Jb_ = function (token, nextLink) {
    if (token.rewriteFlag.substring(0, 3) == _HB_RewriteFlag.F_DELTA && nextLink.to == this.key) {
      var string = token.rewriteFlag.substring(3, token.rewriteFlag.length);
      var s = string.split(";");
      var key = s[0];
      var data = s[1];
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];
      var weak1 = new _G8_Weak().addToGroup(this.group);
      this.findLinksOutOf("w")[0].changeFrom(weak1.key, "n");
      var mod = this.graph.findNodeByKey(key);
      var weak2 = new _G8_Weak().addToGroup(this.group);
      mod.findLinksOutOf('e')[0].changeFrom(weak2.key, 'n');
      this.findLinksOutOf("e")[0].changeFrom(mod.key, "e");
      this.graph.findNodeByKey(mod.findLinksOutOf('e')[0].to).name = s[1];

      var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

      var con = new _FD_Const(data[0]).addToGroup(wrapper.box);
      new _Ey_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      this.findLinksInto(null)[0].changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Jc_ = function () {
    return new _Ii_Set();
  };

  var _Lw__95typeof = function (obj) {
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

  var _K6__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LN__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (call && (__captured__scope_A_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lx__95assertThisInitialized(self);
  };

  var _Lx__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LO__95getPrototypeOf = function (o) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    __captured__scope_A_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A_[3](o);
  };

  var _Id_Dep = function () {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    _K6__95classCallCheck(this, _Id_Dep);

    return _LN__95possibleConstructorReturn(this, __captured__scope_A_[3](_Id_Dep).call(this, null, 'p', "mediumpurple1"));
  };

  var _JX_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      if (token.dataStack[token.dataStack.length - 2] == _H2_CompData.PROMPT) {
        var data = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.push([data[0], _H2_CompData.EMPTY]);
        token.rewriteFlag = _HB_RewriteFlag.F_DEP;
        return this.findLinksInto(null)[0];
      }
    }
  };

  var _JY_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _HB_RewriteFlag.F_DEP) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var data = token.dataStack[token.dataStack.length - 1];

      if (_H1_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var outLink = this.findLinksOutOf(null)[0];
        var weak = new _G8_Weak(outLink.text).addToGroup(this.group);
        outLink.changeFrom(weak.key, "n");

        var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

        var newConst = new _FD_Const(data[0]).addToGroup(wrapper.box);
        new _Ey_Link(wrapper.prin.key, newConst.key, "n", "s").addToGroup(wrapper);
        nextLink.changeTo(wrapper.prin.key, "s");
        this.delete();
        token.rewrite = true;
      }

      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _JZ_ = function () {
    return new _Id_Dep();
  };

  var _KN__95typeof = function (obj) {
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

  var _Ht__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iv__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_G_ = __scope_0_main[15] || __get_scope_binding_0_get_95scope_95binding(15);

    if (call && (__captured__scope_G_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LZ__95assertThisInitialized(self);
  };

  var _LZ__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Fl_Deref = function () {
    _Ht__95classCallCheck(this, _Fl_Deref);

    return _Iv__95possibleConstructorReturn(this, _Hk_(_Fl_Deref).call(this, null, "d", "mediumpurple1"));
  };

  var _Fm_ = function (token, link) {
    if (link.to == this.key) return this.findLinksOutOf(null)[0];else if (link.from == this.key) return this.findLinksInto(null)[0];
  };

  var _Fn_ = function () {
    return new _Fl_Deref();
  };

  var _KM__95typeof = function (obj) {
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

  var _Hs__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Iu__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_F_ = __scope_0_main[14] || __get_scope_binding_0_get_95scope_95binding(14);

    if (call && (__captured__scope_F_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _LY__95assertThisInitialized(self);
  };

  var _LY__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _Fh_Mod = function () {
    var _this;

    _Hs__95classCallCheck(this, _Fh_Mod);

    _this = _Iu__95possibleConstructorReturn(this, _Hk_(_Fh_Mod).call(this, null, "M", "indianred1"));

    _this.graph.machine.cells.push(_this.key);

    return _this;
  };

  var _Fi_ = function (token, link) {
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

  var _Fj_ = function (data) {
    var leftLink = this.findLinksOutOf("w")[0];

    if (_H1_.isNumber(data) || typeof data === "boolean") {
      var value = this.graph.findNodeByKey(leftLink.to);
      var oldData = value.name;
      value.text = data;
      value.name = data;
      return oldData;
    }
  };

  var _Fk_ = function () {
    var mod = new _Fh_Mod();
    return mod;
  };

  var _KW__95typeof = function (obj) {
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

  var _I4__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _J3__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_L_ = __scope_0_main[20] || __get_scope_binding_0_get_95scope_95binding(20);

    if (call && (__captured__scope_L_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lh__95assertThisInitialized(self);
  };

  var _Lh__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _GF_Prop = function () {
    _I4__95classCallCheck(this, _GF_Prop);

    return _J3__95possibleConstructorReturn(this, _Hk_(_GF_Prop).call(this, null, "s", "indianred1"));
  };

  var _GG_ = function (token, link) {
    if (link.to == this.key) {
      if (token.dataStack[token.dataStack.length - 1] == _H2_CompData.PROMPT) {
        token.dataStack.pop();
        token.dataStack.push(false);
        token.rewriteFlag = _HB_RewriteFlag.F_PROP;
        token.forward = false;
        token.machine.startPropagation();
        return link;
      }
    }
  };

  var _GH_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_PROP && nextLink.to == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var data = token.machine.hasUpdate;
      token.dataStack.pop();
      token.dataStack.push([data, _H2_CompData.EMPTY]);

      var wrapper = _FW_BoxWrapper.create().addToGroup(this.group);

      var con = new _FD_Const(data).addToGroup(wrapper.box);
      new _Ey_Link(wrapper.prin.key, con.key, "n", "s").addToGroup(wrapper);
      nextLink.changeTo(wrapper.prin.key, "s");
      this.delete();
      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _GI_ = function () {
    return new _GF_Prop();
  };

  var _Jl__95typeof = function (obj) {
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

  var _I7__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _I8__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (call && (__captured__scope_3_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Jm__95assertThisInitialized(self);
  };

  var _Jm__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _I9__95get = function (target, property, receiver) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_3_[3] = Reflect.get;
    } else {
      __captured__scope_3_[3] = function _get(target, property, receiver) {
        var base = _KZ__95superPropBase(target, property);

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

  var _KZ__95superPropBase = function (object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _Hk_(object);
      if (object === null) break;
    }

    return object;
  };

  var _GP_Prov = function () {
    var _this;

    _I7__95classCallCheck(this, _GP_Prov);

    _this = _I8__95possibleConstructorReturn(this, _Hk_(_GP_Prov).call(this, 'diamond', '', "indianred1"));
    _this.width = ".3";
    _this.height = ".3";
    return _this;
  };

  var _GQ_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink = this.findLinksOutOf(null)[0];
      token.dataStack.push(_H2_CompData.PROMPT);
      return nextLink;
    } else if (link.from == this.key) {
      var data = token.dataStack.pop();
      token.dataStack.pop();
      token.dataStack.push(data);
      token.rewriteFlag = _HB_RewriteFlag.F_MOD;
      return this.findLinksInto(null)[0];
    }
  };

  var _GR_ = function (token, nextLink) {
    if (nextLink.to == this.key && token.rewriteFlag == _HB_RewriteFlag.F_MOD) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var data = token.dataStack.pop();

      if (_H1_.isNumber(data[0]) || typeof data[0] === "boolean") {
        var mod = new _Fh_Mod().addToGroup(this.group);
        var con = new _FD_Const(data[0]).addToGroup(this.group);
        new _Ey_Link(mod.key, con.key, "w", "s").addToGroup(this.group);
        var outLink = this.findLinksOutOf(null)[0];
        outLink.changeFrom(mod.key, "e");
        var inLink = this.findLinksInto(null)[0];
        inLink.changeTo(mod.key, "s");
        this.delete();
        token.rewrite = true;
        token.dataStack.push([data[0], mod.key]);
      }

      return nextLink;
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _GS_ = function () {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    var inLink = this.findLinksInto(null)[0];
    var outLink = this.findLinksOutOf(null)[0];

    if (outLink != null && inLink != null) {
      inLink.changeTo(outLink.to, outLink.toPort);
    }

    __captured__scope_3_[3](_Hk_(_GP_Prov.prototype), "delete", this).call(this);
  };

  var _GT_ = function () {
    return new _GP_Prov();
  };

  var _Lu__95typeof = function (obj) {
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

  var _K3__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LL__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (call && (__captured__scope_9_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _Lv__95assertThisInitialized(self);
  };

  var _Lv__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LM__95getPrototypeOf = function (o) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    __captured__scope_9_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9_[3](o);
  };

  var _IZ_Pair = function () {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    _K3__95classCallCheck(this, _IZ_Pair);

    return _LL__95possibleConstructorReturn(this, __captured__scope_9_[3](_IZ_Pair).call(this, null, ",", "mediumpurple1"));
  };

  var _JU_ = function (token, link) {
    if (link.to == this.key) {
      var nextLink;

      if (token.dataStack[token.dataStack.length - 1] == _H2_CompData.PR) {
        token.dataStack.pop();
        nextLink = this.findLinksOutOf("e")[0];
      } else if (token.dataStack[token.dataStack.length - 1] == _H2_CompData.PL) {
        token.dataStack.pop();
        nextLink = this.findLinksOutOf('w')[0];
      } else {
        token.dataStack.push(_H2_CompData.PE);
        token.dataStack.push(_H2_CompData.PROMPT);
        nextLink = this.findLinksOutOf("e")[0];
        ;
      }

      token.rewriteFlag = _HB_RewriteFlag.F_PAIR;
      return nextLink;
    } else if (link.from == this.key && link.fromPort == "e") {
      var nextLink;

      if (token.dataStack[token.dataStack.length - 2] == _H2_CompData.PE) {
        nextLink = this.findLinksOutOf("w")[0];
        token.dataStack.push(_H2_CompData.PROMPT);
        token.forward = true;
      } else {
        nextLink = this.findLinksInto("s")[0];
        token.dataStack.push(_H2_CompData.PR);
        token.forward = false;
      }

      return nextLink;
    } else if (link.from == this.key && link.fromPort == "w") {
      if (token.dataStack[token.dataStack.length - 3] == _H2_CompData.PE) {
        var l = token.dataStack.pop();
        var r = token.dataStack.pop();
        token.dataStack.pop();
        token.dataStack.pop();
        var result = "(" + l[0] + "," + r[0] + ")";
        token.dataStack.push([result, _H2_CompData.EMPTY]);
      } else {
        token.dataStack.push(_H2_CompData.PL);
      }

      return this.findLinksInto(null)[0];
      ;
    }
  };

  var _JV_ = function (token, nextLink) {
    if (token.rewriteFlag == _HB_RewriteFlag.F_PAIR && nextLink.from == this.key) {
      token.rewriteFlag = _HB_RewriteFlag.EMPTY;
      var prev = this.graph.findNodeByKey(this.findLinksInto("s")[0].from);

      if (prev instanceof _Fo_Contract) {
        var prev2 = this.graph.findNodeByKey(token.boxStack[token.boxStack.length - 1].from);

        if (prev2 instanceof _IJ_PatTuple) {
          if (token.link.fromPort == "e") {
            var right = this.graph.findNodeByKey(this.findLinksOutOf("e")[0].to);

            if (right instanceof _FO_Promo) {
              var link = token.boxStack.pop();
              var inLinks = prev.findLinksInto(null);

              if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
              } else {
                var newBoxWrapper = right.group.copy().addToGroup(right.group.group);

                _Fe_Term.joinAuxs(right.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

                var prevLink = prev2.findLinksInto("e")[0];
                prevLink.changeTo(newBoxWrapper.prin.key, "s");
                var weak = new _G8_Weak(null).addToGroup(this.group);
                new _Ey_Link(weak.key, prev2.key, "n", "e").addToGroup(this.group);
              }

              token.rewrite = true;
              return prevLink;
            }
          } else if (token.link.fromPort == "w") {
            var left = this.graph.findNodeByKey(this.findLinksOutOf("w")[0].to);

            if (left instanceof _FO_Promo) {
              var link = token.boxStack.pop();
              var inLinks = prev.findLinksInto(null);

              if (inLinks.length == 1) {// this will not happen as the C-node should have taken care of it
              } else {
                var newBoxWrapper = left.group.copy().addToGroup(left.group.group);

                _Fe_Term.joinAuxs(left.group.auxs, newBoxWrapper.auxs, newBoxWrapper.group);

                var prevLink = prev2.findLinksInto("w")[0];
                prevLink.changeTo(newBoxWrapper.prin.key, "s");
                var weak = new _G8_Weak(null).addToGroup(this.group);
                new _Ey_Link(weak.key, prev2.key, "n", "w").addToGroup(this.group);
              }

              token.rewrite = true;
              return prevLink;
            }
          }
        }
      } else if (prev instanceof _IJ_PatTuple) {
        this.findLinksOutOf("e")[0].changeFrom(prev.findLinksInto("e")[0].from, prev.findLinksInto("e")[0].fromPort);
        this.findLinksOutOf("w")[0].changeFrom(prev.findLinksInto("w")[0].from, prev.findLinksInto("w")[0].fromPort);
        this.delete();
        prev.delete();
        token.rewrite = true;
        return nextLink;
      }
    } else if (token.rewriteFlag == _HB_RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _JW_ = function () {
    return new _IZ_Pair();
  };

  var _M0__95typeof = function (obj) {
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

  var _KD__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _LR__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    if (call && (__captured__scope_C_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _M1__95assertThisInitialized(self);
  };

  var _M1__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _LS__95getPrototypeOf = function (o) {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    __captured__scope_C_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C_[3](o);
  };

  var _Im_GAbs = function () {
    var __captured__scope_C_ = __scope_0_main[11] || __get_scope_binding_0_get_95scope_95binding(11);

    _KD__95classCallCheck(this, _Im_GAbs);

    return _LR__95possibleConstructorReturn(this, __captured__scope_C_[3](_Im_GAbs).call(this, null, "abs", "indianred1"));
  };

  var _Jd_ = function (token, link) {
    if (link.to == this.key && link.toPort == "s") {
      var nextLink = this.findLinksOutOf("n")[0];
      token.rewriteFlag = RewriteFlag.F_GABS;
      return nextLink;
    }
  };

  var _Je_ = function (token, nextLink) {
    if (token.rewriteFlag == RewriteFlag.F_GABS && nextLink.from == this.key) {
      token.rewriteFlag = RewriteFlag.EMPTY; // TODO

      token.rewrite = true;
      return nextLink;
    } else if (token.rewriteFlag == RewriteFlag.EMPTY) {
      token.rewrite = false;
      return nextLink;
    }
  };

  var _Jf_ = function () {
    return new _Im_GAbs();
  };

  var _IC__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _Gi_GC = function (graph) {
    _IC__95classCallCheck(this, _Gi_GC);

    this.graph = graph;
    this.noMore = false;
  };

  var _EX_ = _Gi_GC.prototype;

  var _Gf_ = function () {
    /*
            do {
            	this.noMore = true;
            	this.collectInGroup(this.graph.child);
            } while (!this.noMore)
            */
  };

  var _Gg_ = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];

      if (node instanceof _G8_Weak || node instanceof _Fo_Contract && node.findLinksInto(null).length == 0) {
        var link = node.findLinksOutOf(null)[0];
        var nextNode = this.graph.findNodeByKey(link.to);

        if (!(nextNode instanceof _G4_Abs && link.toPort == "w")) {
          this.noMore = false;
          this.collectFromBottom(node);
        }
      } else if (node instanceof _FI_Group) {
        this.collectInGroup(node);
      }
    }
  };

  var _Gh_ = function (node) {
    if (node instanceof _Fo_Contract && node.findLinksInto(null).length != 0) {} else if (node instanceof _FO_Promo || node instanceof _IW_Recur) {
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

  var _Gy_GoIMachine = function () {
    _Io__95classCallCheck(this, _Gy_GoIMachine);

    this.graph = new _Ga_Graph(this);
    _H1_.graph = this.graph; // cheating!

    this.token = new _Ge_MachineToken(this);
    this.gc = new _Gi_GC(this.graph);
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

  var _En_ = _Gy_GoIMachine.prototype;

  var _Gj_ = function () {
    return this.playing;
  };

  var _Gk_ = function (playValue) {
    this.play = playValue;
  };

  var _Gl_ = function () {
    return this.playing;
  };

  var _Gm_ = function (playingValue) {
    this.playing = playingValue;
  };

  var _Gn_ = function () {
    return this.finished;
  };

  var _Go_ = function (finishedValue) {
    this.finished = finishedValue;
  };

  var _Gp_ = function (source) {
    var lexer = new _ID_Lexer(source + '\0');
    var parser = new _IF_Parser(lexer);
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

    var start = new _Ez_Start().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    new _Ey_Link(start.key, term.prin.key, "n", "s").addToGroup(this.graph.child);
    this.deleteVarNode(this.graph.child);
  };

  var _Gq_ = function (ast, group) {
    var graph = this.graph;

    if (ast instanceof _IH_Identifier) {
      var v = new _GN_Var(ast.name).addToGroup(group);
      return new _Fe_Term(v, [v]);
    } else if (ast instanceof _II_Abstraction) {
      var params;
      var paramUsed;
      var auxNodes;

      if (ast.pattern.type == _HZ_PatternType.Id) {
        params = [ast.pattern.id1];
        paramUsed = [false];
        auxNodes = [null];
      } else if (ast.pattern.type == _HZ_PatternType.Tuple) {
        params = [ast.pattern.id1, ast.pattern.id2];
        paramUsed = [false, false];
        auxNodes = [null, null];
      }

      var wrapper = _FW_BoxWrapper.create().addToGroup(group);

      var abs = new _G4_Abs().addToGroup(wrapper.box);
      var term = this.toGraph(ast.body, wrapper.box);
      new _Ey_Link(wrapper.prin.key, abs.key, "n", "s").addToGroup(wrapper);
      new _Ey_Link(abs.key, term.prin.key, "e", "s").addToGroup(abs.group);
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
          auxNodes[i] = new _G8_Weak(params[i]).addToGroup(abs.group);
        }
      }

      if (ast.pattern.type == _HZ_PatternType.Id) new _Ey_Link(auxNodes[0].key, abs.key, "nw", "w", true).addToGroup(abs.group);else if (ast.pattern.type == _HZ_PatternType.Tuple) {
        var pattern = new _IJ_PatTuple().addToGroup(abs.group);
        new _Ey_Link(auxNodes[0].key, pattern.key, "n", "w").addToGroup(abs.group);
        new _Ey_Link(auxNodes[1].key, pattern.key, "n", "e").addToGroup(abs.group);
        new _Ey_Link(pattern.key, abs.key, "nw", "w", true).addToGroup(abs.group);
      }
      wrapper.auxs = wrapper.createPaxsOnTopOf(auxs);
      return new _Fe_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _IL_Application) {
      var app = new _G1_App().addToGroup(group); //lhs

      var left = this.toGraph(ast.lhs, group);
      var der = new _GD_Der(left.prin.name).addToGroup(group);
      new _Ey_Link(der.key, left.prin.key, "n", "s").addToGroup(group); // rhs

      var right = this.toGraph(ast.rhs, group);
      new _Ey_Link(app.key, der.key, "w", "s").addToGroup(group);
      new _Ey_Link(app.key, right.prin.key, "e", "s").addToGroup(group);
      return new _Fe_Term(app, _Fe_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _IM_Constant) {
      var wrapper = _FW_BoxWrapper.create().addToGroup(group);

      var constant = new _FD_Const(ast.value).addToGroup(wrapper.box);
      new _Ey_Link(wrapper.prin.key, constant.key, "n", "s").addToGroup(wrapper);
      return new _Fe_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _IN_BinaryOp) {
      var binop = new _Fw_BinOp(ast.name).addToGroup(group);
      binop.subType = ast.type;
      var left = this.toGraph(ast.v1, group);
      var right = this.toGraph(ast.v2, group);
      new _Ey_Link(binop.key, left.prin.key, "w", "s").addToGroup(group);
      new _Ey_Link(binop.key, right.prin.key, "e", "s").addToGroup(group);
      return new _Fe_Term(binop, _Fe_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _IR_UnaryOp) {
      var unop = new _IS_UnOp(ast.name).addToGroup(group);
      unop.subType = ast.type;
      var box = this.toGraph(ast.v1, group);
      new _Ey_Link(unop.key, box.prin.key, "n", "s").addToGroup(group);
      return new _Fe_Term(unop, box.auxs);
    } else if (ast instanceof _IU_IfThenElse) {
      var ifnode = new _Fs_If().addToGroup(group);
      var cond = this.toGraph(ast.cond, group);
      var t1 = this.toGraph(ast.t1, group);
      var t2 = this.toGraph(ast.t2, group);
      new _Ey_Link(ifnode.key, cond.prin.key, "w", "s").addToGroup(group);
      new _Ey_Link(ifnode.key, t1.prin.key, "n", "s").addToGroup(group);
      new _Ey_Link(ifnode.key, t2.prin.key, "e", "s").addToGroup(group);
      return new _Fe_Term(ifnode, _Fe_Term.joinAuxs(_Fe_Term.joinAuxs(t1.auxs, t2.auxs, group), cond.auxs, group));
    } else if (ast instanceof _IV_Recursion) {
      var p1 = ast.param; // recur term

      var wrapper = _FW_BoxWrapper.create().addToGroup(group);

      wrapper.prin.delete();
      var recur = new _IW_Recur().addToGroup(wrapper);
      wrapper.prin = recur;
      var box = this.toGraph(ast.body, wrapper.box);
      wrapper.auxs = wrapper.createPaxsOnTopOf(box.auxs);
      new _Ey_Link(recur.key, box.prin.key, "e", "s").addToGroup(wrapper);
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
        auxNode1 = new _G8_Weak(p1).addToGroup(wrapper.box);
      }

      new _Ey_Link(auxNode1.key, recur.key, "nw", "w", true).addToGroup(wrapper);
      return new _Fe_Term(wrapper.prin, wrapper.auxs);
    } else if (ast instanceof _IY_Tuple) {
      var pair = new _IZ_Pair().addToGroup(group);
      var left = this.toGraph(ast.lhs, group);
      var right = this.toGraph(ast.rhs, group);
      new _Ey_Link(pair.key, left.prin.key, "w", "s").addToGroup(group);
      new _Ey_Link(pair.key, right.prin.key, "e", "s").addToGroup(group);
      return new _Fe_Term(pair, _Fe_Term.joinAuxs(left.auxs, right.auxs, group));
    } else if (ast instanceof _Ib_ProvisionalConstant) {
      var term = this.toGraph(ast.term, group);
      var prov = new _GP_Prov().addToGroup(group);
      new _Ey_Link(prov.key, term.prin.key, "n", "s").addToGroup(group);
      return new _Fe_Term(prov, term.auxs);
    } else if (ast instanceof _Ic_Deprecation) {
      var term = this.toGraph(ast.term, group);
      var dep = new _Id_Dep().addToGroup(group);
      new _Ey_Link(dep.key, term.prin.key, "n", "s").addToGroup(group);
      return new _Fe_Term(dep, term.auxs);
    } else if (ast instanceof _If_Dereference) {
      var term = this.toGraph(ast.term, group);
      var deref = new _Fl_Deref().addToGroup(group);
      new _Ey_Link(deref.key, term.prin.key, "n", "s").addToGroup(group);
      return new _Fe_Term(deref, term.auxs);
    } else if (ast instanceof _Ig_Change) {
      var param = ast.param;
      var delta = new _GJ_Delta().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _GN_Var(param).addToGroup(group);
      new _Ey_Link(delta.key, v.key, "w", "s").addToGroup(group);
      new _Ey_Link(delta.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _Fo_Contract(aux.name).addToGroup(group);
          new _Ey_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _Ey_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _Fe_Term(delta, auxs);
    } else if (ast instanceof _Ih_Assign) {
      var param = ast.param;
      var setn = new _Ii_Set().addToGroup(group);
      var term = this.toGraph(ast.body, group);
      var v = new _GN_Var(param).addToGroup(group);
      new _Ey_Link(setn.key, v.key, "w", "s").addToGroup(group);
      new _Ey_Link(setn.key, term.prin.key, "e", "s").addToGroup(group);
      var auxs = Array.from(term.auxs);
      var p1Used = false;
      var auxNode1;

      for (var i = 0; i < term.auxs.length; i++) {
        var aux = auxs[i];

        if (aux.name == param) {
          p1Used = true;
          auxs.splice(i, 1);
          var con = new _Fo_Contract(aux.name).addToGroup(group);
          new _Ey_Link(aux.key, con.key, "n", "s").addToGroup(group);
          new _Ey_Link(v.key, con.key, "n", "s").addToGroup(group);
          auxs.push(con);
          break;
        }
      }

      if (!p1Used) auxs.push(v);
      return new _Fe_Term(setn, auxs);
    } else if (ast instanceof _Ik_Propagation) {
      var prop = new _GF_Prop().addToGroup(group);
      return new _Fe_Term(prop, []);
    } else if (ast instanceof _Il_GraphAbstraction) {
      var abs = new _Im_GAbs().addToGroup(group);
      var box = this.toGraph(ast.term, group);
      new _Ey_Link(abs.key, box.prin.key, "n", "s").addToGroup(group);
      return new _Fe_Term(abs, box.auxs);
    }
  };

  var _Gr_ = function (group) {
    var _arr = Array.from(group.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      if (node instanceof _FI_Group) this.deleteVarNode(node);else if (node instanceof _GN_Var) node.deleteAndPreserveOutLink();
    }
  };

  var _Gs_ = function () {
    this.evaluating = true;
    this.hasUpdate = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.cells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var cell = this.graph.findNodeByKey(key);
        var evalToken = new _Ge_MachineToken(this);
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

  var _Gt_ = function (a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  var _Gu_ = function (tokens) {
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

  var _Gv_ = function () {
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

  var _Gw_ = function (token) {
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

  var _Gx_ = function (token) {
    var dataStack = Array.from(token.dataStack).reverse();
    dataStack.push('□'); // the latest value is stored in the first element in the dataStack

    var data = dataStack[0]; // data consists of the last node and it's link

    if (data[0] === 'λ') {
      // abstraction
      var machine = this; // this means it doesn't return a simple value

      return function (source) {
        // create AST of the future abstract arguments
        var lexer = new _ID_Lexer(source + '\0');
        var parser = new _IF_Parser(lexer);
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

        var der = new _GD_Der(left.name).addToGroup(machine.graph.child);
        new _Ey_Link(der.key, left.key, "n", "s").addToGroup(machine.graph.child); // create the rhs from the source AST

        var right = machine.toGraph(ast, machine.graph.child);
        var app = new _G1_App().addToGroup(machine.graph.child);
        new _Ey_Link(app.key, der.key, "w", "s").addToGroup(machine.graph.child);
        new _Ey_Link(app.key, right.prin.key, "e", "s").addToGroup(machine.graph.child);
        var term = new _Fe_Term(app, _Fe_Term.joinAuxs(leftAuxs, right.auxs, machine.graph.child));
        new _Ey_Link(start.key, term.prin.key, "n", "s").addToGroup(machine.graph.child);
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
        if (_Gz_.__residual && __captured__scope_1_[0] > 125) {
          // set to 0 because up till now Prepack evaluated everything
          __captured__scope_1_[0] = 0;

          _Gz_.__residual("void", _0_.bind(null), _1_trampoline, _2_autoPlay, callback);
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

  var _Lo_ = function (obj) {
    return typeof obj;
  };

  var _KL_ = function (obj) {
    return typeof obj;
  };

  var _Ji_ = function (obj) {
    return typeof obj;
  };

  var _KG_ = function (obj) {
    return typeof obj;
  };

  var _KI_ = function (obj) {
    return typeof obj;
  };

  var _KV_ = function (obj) {
    return typeof obj;
  };

  var _KY_ = function (obj) {
    return typeof obj;
  };

  var _KT_ = function (obj) {
    return typeof obj;
  };

  var _Jj_ = function (obj) {
    return typeof obj;
  };

  var _KO_ = function (obj) {
    return typeof obj;
  };

  var _0_ = function (trampoline, autoPlay, callback) {
    return trampoline({
      fn: autoPlay,
      args: [callback]
    });
  };

  var __constructor = function () {};

  var _Hk_ = _$2_Object_46getPrototypeOf;

  var _6_graph = (__constructor.prototype = _EN_, new __constructor());

  _6_graph.key = 143;
  _6_graph.linkKey = 0;

  var _9_ = new _$3_Map();

  _6_graph.allNodes = _9_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Eo_, _$4_Object_46defineProperty(_M_, "addToNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ep_, _$4_Object_46defineProperty(_M_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Eq_, _$4_Object_46defineProperty(_M_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Er_, _$4_Object_46defineProperty(_M_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Es_, _$4_Object_46defineProperty(_M_, "changeFrom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Et_, _$4_Object_46defineProperty(_M_, "changeTo", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Eu_, _$4_Object_46defineProperty(_M_, "focus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ev_, _$4_Object_46defineProperty(_M_, "clearFocus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ew_, _$4_Object_46defineProperty(_M_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ex_, _$4_Object_46defineProperty(_M_, "toString", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5R_ = (__constructor.prototype = _M_, new __constructor());

  _5R_.from = "nd35";
  _5R_.to = "nd36";
  _5R_.fromPort = "n";
  _5R_.toPort = "s";
  _5R_.reverse = void 0;
  _5R_.colour = null;
  _5R_.penWidth = null;
  _5R_.graph = _6_graph;

  var _5c_ = (__constructor.prototype = _M_, new __constructor());

  _5c_.from = "nd39";
  _5c_.to = "nd36";
  _5c_.fromPort = "nw";
  _5c_.toPort = "w";
  _5c_.reverse = true;
  _5c_.colour = null;
  _5c_.penWidth = null;
  _5c_.graph = _6_graph;

  var _5V_outLink = (__constructor.prototype = _M_, new __constructor());

  _5V_outLink.from = "nd36";
  _5V_outLink.to = "nd40";
  _5V_outLink.fromPort = "e";
  _5V_outLink.toPort = "s";
  _5V_outLink.reverse = void 0;
  _5V_outLink.colour = null;
  _5V_outLink.penWidth = null;
  _5V_outLink.graph = _6_graph;

  var _4v_ = (__constructor.prototype = _M_, new __constructor());

  _4v_.from = "nd42";
  _4v_.to = "nd35";
  _4v_.fromPort = "n";
  _4v_.toPort = "s";
  _4v_.reverse = void 0;
  _4v_.colour = null;
  _4v_.penWidth = null;
  _4v_.graph = _6_graph;

  var _50_ = (__constructor.prototype = _M_, new __constructor());

  _50_.from = "nd32";
  _50_.to = "nd42";
  _50_.fromPort = "w";
  _50_.toPort = "s";
  _50_.reverse = void 0;
  _50_.colour = null;
  _50_.penWidth = null;
  _50_.graph = _6_graph;

  var _54_ = (__constructor.prototype = _M_, new __constructor());

  _54_.from = "nd32";
  _54_.to = "nd43";
  _54_.fromPort = "e";
  _54_.toPort = "s";
  _54_.reverse = void 0;
  _54_.colour = null;
  _54_.penWidth = null;
  _54_.graph = _6_graph;

  var _4j_ = (__constructor.prototype = _M_, new __constructor());

  _4j_.from = "nd30";
  _4j_.to = "nd31";
  _4j_.fromPort = "n";
  _4j_.toPort = "s";
  _4j_.reverse = void 0;
  _4j_.colour = null;
  _4j_.penWidth = null;
  _4j_.graph = _6_graph;

  var _58_ = (__constructor.prototype = _M_, new __constructor());

  _58_.from = "nd31";
  _58_.to = "nd32";
  _58_.fromPort = "e";
  _58_.toPort = "s";
  _58_.reverse = void 0;
  _58_.colour = null;
  _58_.penWidth = null;
  _58_.graph = _6_graph;

  var _5B_ = (__constructor.prototype = _M_, new __constructor());

  _5B_.from = "nd46";
  _5B_.to = "nd31";
  _5B_.fromPort = "nw";
  _5B_.toPort = "w";
  _5B_.reverse = true;
  _5B_.colour = null;
  _5B_.penWidth = null;
  _5B_.graph = _6_graph;

  var _4n_link = (__constructor.prototype = _M_, new __constructor());

  _4n_link.from = "nd40";
  _4n_link.to = "nd47";
  _4n_link.fromPort = "n";
  _4n_link.toPort = "s";
  _4n_link.reverse = void 0;
  _4n_link.colour = null;
  _4n_link.penWidth = null;
  _4n_link.graph = _6_graph;

  var _47_ = (__constructor.prototype = _M_, new __constructor());

  _47_.from = "nd49";
  _47_.to = "nd30";
  _47_.fromPort = "n";
  _47_.toPort = "s";
  _47_.reverse = void 0;
  _47_.colour = null;
  _47_.penWidth = null;
  _47_.graph = _6_graph;

  var _6u_ = (__constructor.prototype = _M_, new __constructor());

  _6u_.from = "nd53";
  _6u_.to = "nd54";
  _6u_.fromPort = "n";
  _6u_.toPort = "s";
  _6u_.reverse = void 0;
  _6u_.colour = null;
  _6u_.penWidth = null;
  _6u_.graph = _6_graph;

  var _4C_ = (__constructor.prototype = _M_, new __constructor());

  _4C_.from = "nd50";
  _4C_.to = "nd53";
  _4C_.fromPort = "e";
  _4C_.toPort = "s";
  _4C_.reverse = void 0;
  _4C_.colour = null;
  _4C_.penWidth = null;
  _4C_.graph = _6_graph;

  var _4G_ = (__constructor.prototype = _M_, new __constructor());

  _4G_.from = "nd27";
  _4G_.to = "nd49";
  _4G_.fromPort = "w";
  _4G_.toPort = "s";
  _4G_.reverse = void 0;
  _4G_.colour = null;
  _4G_.penWidth = null;
  _4G_.graph = _6_graph;

  var _4K_ = (__constructor.prototype = _M_, new __constructor());

  _4K_.from = "nd27";
  _4K_.to = "nd50";
  _4K_.fromPort = "e";
  _4K_.toPort = "s";
  _4K_.reverse = void 0;
  _4K_.colour = null;
  _4K_.penWidth = null;
  _4K_.graph = _6_graph;

  var _3r_ = (__constructor.prototype = _M_, new __constructor());

  _3r_.from = "nd25";
  _3r_.to = "nd26";
  _3r_.fromPort = "n";
  _3r_.toPort = "s";
  _3r_.reverse = void 0;
  _3r_.colour = null;
  _3r_.penWidth = null;
  _3r_.graph = _6_graph;

  var _4N_ = (__constructor.prototype = _M_, new __constructor());

  _4N_.from = "nd26";
  _4N_.to = "nd27";
  _4N_.fromPort = "e";
  _4N_.toPort = "s";
  _4N_.reverse = void 0;
  _4N_.colour = null;
  _4N_.penWidth = null;
  _4N_.graph = _6_graph;

  var _4Q_ = (__constructor.prototype = _M_, new __constructor());

  _4Q_.from = "nd59";
  _4Q_.to = "nd26";
  _4Q_.fromPort = "nw";
  _4Q_.toPort = "w";
  _4Q_.reverse = true;
  _4Q_.colour = null;
  _4Q_.penWidth = null;
  _4Q_.graph = _6_graph;

  var _3v_ = (__constructor.prototype = _M_, new __constructor());

  _3v_.from = "nd47";
  _3v_.to = "nd60";
  _3v_.fromPort = "n";
  _3v_.toPort = "s";
  _3v_.reverse = void 0;
  _3v_.colour = null;
  _3v_.penWidth = null;
  _3v_.graph = _6_graph;

  var _3z_outLink = (__constructor.prototype = _M_, new __constructor());

  _3z_outLink.from = "nd50";
  _3z_outLink.to = "nd61";
  _3z_outLink.fromPort = "w";
  _3z_outLink.toPort = "s";
  _3z_outLink.reverse = void 0;
  _3z_outLink.colour = null;
  _3z_outLink.penWidth = null;
  _3z_outLink.graph = _6_graph;

  var _1I_link = (__constructor.prototype = _M_, new __constructor());

  _1I_link.from = "nd63";
  _1I_link.to = "nd25";
  _1I_link.fromPort = "n";
  _1I_link.toPort = "s";
  _1I_link.reverse = void 0;
  _1I_link.colour = null;
  _1I_link.penWidth = null;
  _1I_link.graph = _6_graph;

  var _1N_link = (__constructor.prototype = _M_, new __constructor());

  _1N_link.from = "nd22";
  _1N_link.to = "nd63";
  _1N_link.fromPort = "w";
  _1N_link.toPort = "s";
  _1N_link.reverse = void 0;
  _1N_link.colour = null;
  _1N_link.penWidth = null;
  _1N_link.graph = _6_graph;

  var _1R_nextLink = (__constructor.prototype = _M_, new __constructor());

  _1R_nextLink.from = "nd22";
  _1R_nextLink.to = "nd64";
  _1R_nextLink.fromPort = "e";
  _1R_nextLink.toPort = "s";
  _1R_nextLink.reverse = void 0;
  _1R_nextLink.colour = "red";
  _1R_nextLink.penWidth = "20";
  _1R_nextLink.graph = _6_graph;

  var _1X_link = (__constructor.prototype = _M_, new __constructor());

  _1X_link.from = "nd1";
  _1X_link.to = "nd22";
  _1X_link.fromPort = "n";
  _1X_link.toPort = "s";
  _1X_link.reverse = void 0;
  _1X_link.colour = null;
  _1X_link.penWidth = null;
  _1X_link.graph = _6_graph;

  var _1b_otherNextLink = (__constructor.prototype = _M_, new __constructor());

  _1b_otherNextLink.from = "nd60";
  _1b_otherNextLink.to = "nd121";
  _1b_otherNextLink.fromPort = "n";
  _1b_otherNextLink.toPort = "s";
  _1b_otherNextLink.reverse = false;
  _1b_otherNextLink.colour = null;
  _1b_otherNextLink.penWidth = null;
  _1b_otherNextLink.graph = _6_graph;

  var _h_link = (__constructor.prototype = _M_, new __constructor());

  _h_link.from = "nd77";
  _h_link.to = "nd86";
  _h_link.fromPort = "n";
  _h_link.toPort = "s";
  _h_link.reverse = void 0;
  _h_link.colour = null;
  _h_link.penWidth = null;
  _h_link.graph = _6_graph;

  var _l_outLink = (__constructor.prototype = _M_, new __constructor());

  _l_outLink.from = "nd61";
  _l_outLink.to = "nd86";
  _l_outLink.fromPort = "n";
  _l_outLink.toPort = "s";
  _l_outLink.reverse = void 0;
  _l_outLink.colour = null;
  _l_outLink.penWidth = null;
  _l_outLink.graph = _6_graph;

  var _p_link = (__constructor.prototype = _M_, new __constructor());

  _p_link.from = "nd83";
  _p_link.to = "nd141";
  _p_link.fromPort = "n";
  _p_link.toPort = "s";
  _p_link.reverse = false;
  _p_link.colour = null;
  _p_link.penWidth = null;
  _p_link.graph = _6_graph;

  var _2V_link = (__constructor.prototype = _M_, new __constructor());

  _2V_link.from = "nd94";
  _2V_link.to = "nd95";
  _2V_link.fromPort = "n";
  _2V_link.toPort = "s";
  _2V_link.reverse = void 0;
  _2V_link.colour = null;
  _2V_link.penWidth = null;
  _2V_link.graph = _6_graph;

  var _R_nextLink = (__constructor.prototype = _M_, new __constructor());

  _R_nextLink.from = "nd141";
  _R_nextLink.to = "nd94";
  _R_nextLink.fromPort = "e";
  _R_nextLink.toPort = "s";
  _R_nextLink.reverse = void 0;
  _R_nextLink.colour = "green";
  _R_nextLink.penWidth = "20";
  _R_nextLink.graph = _6_graph;

  var _Y_link = (__constructor.prototype = _M_, new __constructor());

  _Y_link.from = "nd86";
  _Y_link.to = "nd139";
  _Y_link.fromPort = "n";
  _Y_link.toPort = "s";
  _Y_link.reverse = false;
  _Y_link.colour = null;
  _Y_link.penWidth = null;
  _Y_link.graph = _6_graph;

  var _1s_link = (__constructor.prototype = _M_, new __constructor());

  _1s_link.from = "nd105";
  _1s_link.to = "nd106";
  _1s_link.fromPort = "n";
  _1s_link.toPort = "s";
  _1s_link.reverse = void 0;
  _1s_link.colour = null;
  _1s_link.penWidth = null;
  _1s_link.graph = _6_graph;

  var _F_nextLink = (__constructor.prototype = _M_, new __constructor());

  _F_nextLink.from = "nd139";
  _F_nextLink.to = "nd105";
  _F_nextLink.fromPort = "e";
  _F_nextLink.toPort = "s";
  _F_nextLink.reverse = void 0;
  _F_nextLink.colour = "green";
  _F_nextLink.penWidth = "20";
  _F_nextLink.graph = _6_graph;

  var _x_link = (__constructor.prototype = _M_, new __constructor());

  _x_link.from = "nd121";
  _x_link.to = "nd122";
  _x_link.fromPort = "w";
  _x_link.toPort = "s";
  _x_link.reverse = void 0;
  _x_link.colour = null;
  _x_link.penWidth = null;
  _x_link.graph = _6_graph;

  var _12_link = (__constructor.prototype = _M_, new __constructor());

  _12_link.from = "nd122";
  _12_link.to = "nd132";
  _12_link.fromPort = "e";
  _12_link.toPort = "s";
  _12_link.reverse = void 0;
  _12_link.colour = null;
  _12_link.penWidth = null;
  _12_link.graph = _6_graph;

  var _16_link = (__constructor.prototype = _M_, new __constructor());

  _16_link.from = "nd121";
  _16_link.to = "nd132";
  _16_link.fromPort = "n";
  _16_link.toPort = "s";
  _16_link.reverse = void 0;
  _16_link.colour = null;
  _16_link.penWidth = null;
  _16_link.graph = _6_graph;

  var _19_link = (__constructor.prototype = _M_, new __constructor());

  _19_link.from = "nd122";
  _19_link.to = "nd133";
  _19_link.fromPort = "w";
  _19_link.toPort = "s";
  _19_link.reverse = void 0;
  _19_link.colour = null;
  _19_link.penWidth = null;
  _19_link.graph = _6_graph;

  var _1C_link = (__constructor.prototype = _M_, new __constructor());

  _1C_link.from = "nd121";
  _1C_link.to = "nd133";
  _1C_link.fromPort = "e";
  _1C_link.toPort = "s";
  _1C_link.reverse = void 0;
  _1C_link.colour = null;
  _1C_link.penWidth = null;
  _1C_link.graph = _6_graph;

  var _1F_nextLink = (__constructor.prototype = _M_, new __constructor());

  _1F_nextLink.from = "nd132";
  _1F_nextLink.to = "nd83";
  _1F_nextLink.fromPort = "n";
  _1F_nextLink.toPort = "s";
  _1F_nextLink.reverse = false;
  _1F_nextLink.colour = null;
  _1F_nextLink.penWidth = null;
  _1F_nextLink.graph = _6_graph;

  var _t_nextLink = (__constructor.prototype = _M_, new __constructor());

  _t_nextLink.from = "nd133";
  _t_nextLink.to = "nd77";
  _t_nextLink.fromPort = "n";
  _t_nextLink.toPort = "s";
  _t_nextLink.reverse = false;
  _t_nextLink.colour = null;
  _t_nextLink.penWidth = null;
  _t_nextLink.graph = _6_graph;

  var _N_link = (__constructor.prototype = _M_, new __constructor());

  _N_link.from = "nd139";
  _N_link.to = "nd140";
  _N_link.fromPort = "w";
  _N_link.toPort = "s";
  _N_link.reverse = void 0;
  _N_link.colour = null;
  _N_link.penWidth = null;
  _N_link.graph = _6_graph;

  var _d_link = (__constructor.prototype = _M_, new __constructor());

  _d_link.from = "nd141";
  _d_link.to = "nd142";
  _d_link.fromPort = "w";
  _d_link.toPort = "s";
  _d_link.reverse = void 0;
  _d_link.colour = null;
  _d_link.penWidth = null;
  _d_link.graph = _6_graph;
  var _EL_ = [_5R_, _5c_, _5V_outLink, _4v_, _50_, _54_, _4j_, _58_, _5B_, _4n_link, _47_, _6u_, _4C_, _4G_, _4K_, _3r_, _4N_, _4Q_, _3v_, _3z_outLink, _1I_link, _1N_link, _1R_nextLink, _1X_link, _1b_otherNextLink, _h_link, _l_outLink, _p_link, _2V_link, _R_nextLink, _Y_link, _1s_link, _F_nextLink, _x_link, _12_link, _16_link, _19_link, _1C_link, _1F_nextLink, _t_nextLink, _N_link, _d_link,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
  _EL_.length = 42;
  _6_graph.allLinks = _EL_;
  var _H1_ = {
    isNumber: _Hd_isNumber,
    graph: _6_graph
  };

  var _1n_ = (__constructor.prototype = _1o_, new __constructor());

  _Ez_Start.prototype = _1n_;

  _$5_Object_46setPrototypeOf(_Ez_Start, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ez_Start, _$4_Object_46defineProperty(_1n_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _H2_CompData = {
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
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F0_, _$4_Object_46defineProperty(_1n_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F1_, _$4_Object_46defineProperty(_1n_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1h_fromNode = (__constructor.prototype = _1n_, new __constructor());

  _1h_fromNode.key = "nd1";
  _1h_fromNode.shape = "point";
  _1h_fromNode.text = "";
  _1h_fromNode.colour = "black";
  _1h_fromNode.name = void 0;
  _1h_fromNode.graph = _6_graph;
  _1h_fromNode.width = null;
  _1h_fromNode.height = null;
  var _1l_ = [_1X_link,,];
  _1l_.length = 1;
  _1h_fromNode.links = _1l_;

  _9_.set("nd1", _1h_fromNode);

  var _3n_ = (__constructor.prototype = _1o_, new __constructor());

  _G1_App.prototype = _3n_;

  _$5_Object_46setPrototypeOf(_G1_App, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G1_App, _$4_Object_46defineProperty(_3n_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G2_, _$4_Object_46defineProperty(_3n_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G3_, _$4_Object_46defineProperty(_3n_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _3j_node = (__constructor.prototype = _3n_, new __constructor());

  _3j_node.key = "nd22";
  _3j_node.shape = null;
  _3j_node.text = "@";
  _3j_node.colour = "yellow";
  _3j_node.name = void 0;
  _3j_node.graph = _6_graph;
  _3j_node.width = null;
  _3j_node.height = null;
  var _3m_ = [_1N_link, _1R_nextLink, _1X_link];
  _3j_node.links = _3m_;

  _9_.set("nd22", _3j_node);

  var _2F_ = (__constructor.prototype = _1o_, new __constructor());

  _FS_Expo.prototype = _2F_;

  _$5_Object_46setPrototypeOf(_FS_Expo, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FS_Expo, _$4_Object_46defineProperty(_2F_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FT_, _$4_Object_46defineProperty(_2F_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _Hl_ = _$7_Reflect_46get;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FU_, _$4_Object_46defineProperty(_2F_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FV_, _$4_Object_46defineProperty(_2F_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _2E_ = (__constructor.prototype = _2F_, new __constructor());

  _FO_Promo.prototype = _2E_;

  _$5_Object_46setPrototypeOf(_FO_Promo, _FS_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FO_Promo, _$4_Object_46defineProperty(_2E_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _HB_RewriteFlag = {
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
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FP_, _$4_Object_46defineProperty(_2E_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6G_ = (__constructor.prototype = _2F_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GD_Der, _$4_Object_46defineProperty(_6G_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GE_, _$4_Object_46defineProperty(_6G_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _GD_Der.prototype = _6G_;

  _$5_Object_46setPrototypeOf(_GD_Der, _FS_Expo);

  var _3G_ = (__constructor.prototype = _2F_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fo_Contract, _$4_Object_46defineProperty(_3G_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fp_, _$4_Object_46defineProperty(_3G_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fq_, _$4_Object_46defineProperty(_3G_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fr_, _$4_Object_46defineProperty(_3G_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Fo_Contract.prototype = _3G_;

  _$5_Object_46setPrototypeOf(_Fo_Contract, _FS_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HN_, _$4_Object_46defineProperty(_Fe_Term, "joinAuxs", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_Fe_Term, _FI_Group);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FQ_, _$4_Object_46defineProperty(_2E_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FR_, _$4_Object_46defineProperty(_2E_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _7L_node = (__constructor.prototype = _2E_, new __constructor());

  _7L_node.key = "nd25";
  _7L_node.shape = null;
  _7L_node.text = "!";
  _7L_node.colour = "cyan";
  _7L_node.name = void 0;
  _7L_node.graph = _6_graph;
  _7L_node.width = ".3";
  _7L_node.height = ".3";
  var _7Q_ = [_3r_, _1I_link];
  _7L_node.links = _7Q_;

  _9_.set("nd25", _7L_node);

  var _4b_ = (__constructor.prototype = _1o_, new __constructor());

  _G4_Abs.prototype = _4b_;

  _$5_Object_46setPrototypeOf(_G4_Abs, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G4_Abs, _$4_Object_46defineProperty(_4b_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G5_, _$4_Object_46defineProperty(_4b_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IK_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IJ_PatTuple, _$4_Object_46defineProperty(_IK_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JK_, _$4_Object_46defineProperty(_IK_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JL_, _$4_Object_46defineProperty(_IK_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _IJ_PatTuple.prototype = _IK_;

  _$5_Object_46setPrototypeOf(_IJ_PatTuple, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G6_, _$4_Object_46defineProperty(_4b_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G7_, _$4_Object_46defineProperty(_4b_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _4X_node = (__constructor.prototype = _4b_, new __constructor());

  _4X_node.key = "nd26";
  _4X_node.shape = null;
  _4X_node.text = "\u03BB";
  _4X_node.colour = "yellow";
  _4X_node.name = void 0;
  _4X_node.graph = _6_graph;
  _4X_node.width = null;
  _4X_node.height = null;
  var _4a_ = [_3r_, _4N_, _4Q_];
  _4X_node.links = _4a_;

  _9_.set("nd26", _4X_node);

  var _4c_node = (__constructor.prototype = _3n_, new __constructor());

  _4c_node.key = "nd27";
  _4c_node.shape = null;
  _4c_node.text = "@";
  _4c_node.colour = "yellow";
  _4c_node.name = void 0;
  _4c_node.graph = _6_graph;
  _4c_node.width = null;
  _4c_node.height = null;
  var _4f_ = [_4G_, _4K_, _4N_];
  _4c_node.links = _4f_;

  _9_.set("nd27", _4c_node);

  var _6S_node = (__constructor.prototype = _2E_, new __constructor());

  _6S_node.key = "nd30";
  _6S_node.shape = null;
  _6S_node.text = "!";
  _6S_node.colour = "cyan";
  _6S_node.name = void 0;
  _6S_node.graph = _6_graph;
  _6S_node.width = ".3";
  _6S_node.height = ".3";
  var _6X_ = [_4j_, _47_];
  _6S_node.links = _6X_;

  _9_.set("nd30", _6S_node);

  var _5G_node = (__constructor.prototype = _4b_, new __constructor());

  _5G_node.key = "nd31";
  _5G_node.shape = null;
  _5G_node.text = "\u03BB";
  _5G_node.colour = "yellow";
  _5G_node.name = void 0;
  _5G_node.graph = _6_graph;
  _5G_node.width = null;
  _5G_node.height = null;
  var _5J_ = [_4j_, _58_, _5B_];
  _5G_node.links = _5J_;

  _9_.set("nd31", _5G_node);

  var _5K_node = (__constructor.prototype = _3n_, new __constructor());

  _5K_node.key = "nd32";
  _5K_node.shape = null;
  _5K_node.text = "@";
  _5K_node.colour = "yellow";
  _5K_node.name = void 0;
  _5K_node.graph = _6_graph;
  _5K_node.width = null;
  _5K_node.height = null;
  var _5N_ = [_50_, _54_, _58_];
  _5K_node.links = _5N_;

  _9_.set("nd32", _5K_node);

  var _5v_node = (__constructor.prototype = _2E_, new __constructor());

  _5v_node.key = "nd35";
  _5v_node.shape = null;
  _5v_node.text = "!";
  _5v_node.colour = "cyan";
  _5v_node.name = void 0;
  _5v_node.graph = _6_graph;
  _5v_node.width = ".3";
  _5v_node.height = ".3";
  var _60_ = [_5R_, _4v_];
  _5v_node.links = _60_;

  _9_.set("nd35", _5v_node);

  var _5i_fromNode = (__constructor.prototype = _4b_, new __constructor());

  _5i_fromNode.key = "nd36";
  _5i_fromNode.shape = null;
  _5i_fromNode.text = "\u03BB";
  _5i_fromNode.colour = "yellow";
  _5i_fromNode.name = void 0;
  _5i_fromNode.graph = _6_graph;
  _5i_fromNode.width = null;
  _5i_fromNode.height = null;
  var _5l_ = [_5R_, _5c_, _5V_outLink,,];
  _5l_.length = 3;
  _5i_fromNode.links = _5l_;

  _9_.set("nd36", _5i_fromNode);

  var _5t_ = (__constructor.prototype = _2F_, new __constructor());

  _G8_Weak.prototype = _5t_;

  _$5_Object_46setPrototypeOf(_G8_Weak, _FS_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G8_Weak, _$4_Object_46defineProperty(_5t_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G9_, _$4_Object_46defineProperty(_5t_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5n_node = (__constructor.prototype = _5t_, new __constructor());

  _5n_node.key = "nd39";
  _5n_node.shape = null;
  _5n_node.text = "C0";
  _5n_node.colour = "cyan";
  _5n_node.name = void 0;
  _5n_node.graph = _6_graph;
  _5n_node.width = ".3";
  _5n_node.height = ".3";
  var _5s_ = [_5c_];
  _5n_node.links = _5s_;

  _9_.set("nd39", _5n_node);

  var _68_ = (__constructor.prototype = _2F_, new __constructor());

  _GA_Pax.prototype = _68_;

  _$5_Object_46setPrototypeOf(_GA_Pax, _FS_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GA_Pax, _$4_Object_46defineProperty(_68_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GB_, _$4_Object_46defineProperty(_68_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GC_, _$4_Object_46defineProperty(_68_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _61_node = (__constructor.prototype = _68_, new __constructor());

  _61_node.key = "nd40";
  _61_node.shape = null;
  _61_node.text = "?";
  _61_node.colour = "cyan";
  _61_node.name = "m";
  _61_node.graph = _6_graph;
  _61_node.width = ".3";
  _61_node.height = ".3";
  var _67_ = [_5V_outLink, _4n_link];
  _61_node.links = _67_;

  _9_.set("nd40", _61_node);

  var _6A_node = (__constructor.prototype = _6G_, new __constructor());

  _6A_node.key = "nd42";
  _6A_node.shape = null;
  _6A_node.text = "D";
  _6A_node.colour = "cyan";
  _6A_node.name = void 0;
  _6A_node.graph = _6_graph;
  _6A_node.width = ".3";
  _6A_node.height = ".3";
  var _6F_ = [_4v_, _50_];
  _6A_node.links = _6F_;

  _9_.set("nd42", _6A_node);

  var _6L_ = (__constructor.prototype = _1o_, new __constructor());

  _GF_Prop.prototype = _6L_;

  _$5_Object_46setPrototypeOf(_GF_Prop, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GF_Prop, _$4_Object_46defineProperty(_6L_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GG_, _$4_Object_46defineProperty(_6L_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_FG_Box, _FI_Group);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HM_, _$4_Object_46defineProperty(_FW_BoxWrapper, "create", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_FW_BoxWrapper, _Fe_Term);

  var _25_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FD_Const, _$4_Object_46defineProperty(_25_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FE_, _$4_Object_46defineProperty(_25_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FF_, _$4_Object_46defineProperty(_25_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _FD_Const.prototype = _25_;

  _$5_Object_46setPrototypeOf(_FD_Const, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GH_, _$4_Object_46defineProperty(_6L_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GI_, _$4_Object_46defineProperty(_6L_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6H_node = (__constructor.prototype = _6L_, new __constructor());

  _6H_node.key = "nd43";
  _6H_node.shape = null;
  _6H_node.text = "s";
  _6H_node.colour = "indianred1";
  _6H_node.name = void 0;
  _6H_node.graph = _6_graph;
  _6H_node.width = null;
  _6H_node.height = null;
  var _6K_ = [_54_];
  _6H_node.links = _6K_;

  _9_.set("nd43", _6H_node);

  var _6M_node = (__constructor.prototype = _5t_, new __constructor());

  _6M_node.key = "nd46";
  _6M_node.shape = null;
  _6M_node.text = "C0";
  _6M_node.colour = "cyan";
  _6M_node.name = void 0;
  _6M_node.graph = _6_graph;
  _6M_node.width = ".3";
  _6M_node.height = ".3";
  var _6R_ = [_5B_];
  _6M_node.links = _6R_;

  _9_.set("nd46", _6M_node);

  var _6Y_node = (__constructor.prototype = _68_, new __constructor());

  _6Y_node.key = "nd47";
  _6Y_node.shape = null;
  _6Y_node.text = "?";
  _6Y_node.colour = "cyan";
  _6Y_node.name = "m";
  _6Y_node.graph = _6_graph;
  _6Y_node.width = ".3";
  _6Y_node.height = ".3";
  var _6d_ = [_4n_link, _3v_];
  _6Y_node.links = _6d_;

  _9_.set("nd47", _6Y_node);

  var _6f_node = (__constructor.prototype = _6G_, new __constructor());

  _6f_node.key = "nd49";
  _6f_node.shape = null;
  _6f_node.text = "D";
  _6f_node.colour = "cyan";
  _6f_node.name = void 0;
  _6f_node.graph = _6_graph;
  _6f_node.width = ".3";
  _6f_node.height = ".3";
  var _6k_ = [_47_, _4G_];
  _6f_node.links = _6k_;

  _9_.set("nd49", _6f_node);

  var _6q_ = (__constructor.prototype = _1o_, new __constructor());

  _GJ_Delta.prototype = _6q_;

  _$5_Object_46setPrototypeOf(_GJ_Delta, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GJ_Delta, _$4_Object_46defineProperty(_6q_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GK_, _$4_Object_46defineProperty(_6q_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GL_, _$4_Object_46defineProperty(_6q_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GM_, _$4_Object_46defineProperty(_6q_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _6l_fromNode = (__constructor.prototype = _6q_, new __constructor());

  _6l_fromNode.key = "nd50";
  _6l_fromNode.shape = null;
  _6l_fromNode.text = "\u0394";
  _6l_fromNode.colour = "indianred1";
  _6l_fromNode.name = void 0;
  _6l_fromNode.graph = _6_graph;
  _6l_fromNode.width = null;
  _6l_fromNode.height = null;
  var _6o_ = [_4C_, _4K_, _3z_outLink,,];
  _6o_.length = 3;
  _6l_fromNode.links = _6o_;

  _9_.set("nd50", _6l_fromNode);

  var _77_node = (__constructor.prototype = _2E_, new __constructor());

  _77_node.key = "nd53";
  _77_node.shape = null;
  _77_node.text = "!";
  _77_node.colour = "cyan";
  _77_node.name = void 0;
  _77_node.graph = _6_graph;
  _77_node.width = ".3";
  _77_node.height = ".3";
  var _7C_ = [_6u_, _4C_];
  _77_node.links = _7C_;

  _9_.set("nd53", _77_node);

  var _73_node = (__constructor.prototype = _25_, new __constructor());

  _73_node.key = "nd54";
  _73_node.shape = null;
  _73_node.text = 3;
  _73_node.colour = "mediumpurple1";
  _73_node.name = 3;
  _73_node.graph = _6_graph;
  _73_node.width = null;
  _73_node.height = null;
  var _76_ = [_6u_];
  _73_node.links = _76_;

  _9_.set("nd54", _73_node);

  var _7E_node = (__constructor.prototype = _5t_, new __constructor());

  _7E_node.key = "nd59";
  _7E_node.shape = null;
  _7E_node.text = "C0";
  _7E_node.colour = "cyan";
  _7E_node.name = void 0;
  _7E_node.graph = _6_graph;
  _7E_node.width = ".3";
  _7E_node.height = ".3";
  var _7J_ = [_4Q_];
  _7E_node.links = _7J_;

  _9_.set("nd59", _7E_node);

  var _7R_otherNode = (__constructor.prototype = _68_, new __constructor());

  _7R_otherNode.key = "nd60";
  _7R_otherNode.shape = null;
  _7R_otherNode.text = "?";
  _7R_otherNode.colour = "cyan";
  _7R_otherNode.name = "m";
  _7R_otherNode.graph = _6_graph;
  _7R_otherNode.width = ".3";
  _7R_otherNode.height = ".3";
  var _7W_ = [_3v_, _1b_otherNextLink];
  _7R_otherNode.links = _7W_;

  _9_.set("nd60", _7R_otherNode);

  var _7X_fromNode = (__constructor.prototype = _68_, new __constructor());

  _7X_fromNode.key = "nd61";
  _7X_fromNode.shape = null;
  _7X_fromNode.text = "?";
  _7X_fromNode.colour = "cyan";
  _7X_fromNode.name = "x";
  _7X_fromNode.graph = _6_graph;
  _7X_fromNode.width = ".3";
  _7X_fromNode.height = ".3";
  var _7c_ = [_3z_outLink, _l_outLink,,];
  _7c_.length = 2;
  _7X_fromNode.links = _7c_;

  _9_.set("nd61", _7X_fromNode);

  var _7f_node = (__constructor.prototype = _6G_, new __constructor());

  _7f_node.key = "nd63";
  _7f_node.shape = null;
  _7f_node.text = "D";
  _7f_node.colour = "cyan";
  _7f_node.name = void 0;
  _7f_node.graph = _6_graph;
  _7f_node.width = ".3";
  _7f_node.height = ".3";
  var _7k_ = [_1I_link, _1N_link];
  _7f_node.links = _7k_;

  _9_.set("nd63", _7f_node);

  var _7l_node = (__constructor.prototype = _6L_, new __constructor());

  _7l_node.key = "nd64";
  _7l_node.shape = null;
  _7l_node.text = "s";
  _7l_node.colour = "indianred1";
  _7l_node.name = void 0;
  _7l_node.graph = _6_graph;
  _7l_node.width = null;
  _7l_node.height = null;
  var _7o_ = [_1R_nextLink];
  _7l_node.links = _7o_;

  _9_.set("nd64", _7l_node);

  var _32_ = (__constructor.prototype = _1o_, new __constructor());

  _Fl_Deref.prototype = _32_;

  _$5_Object_46setPrototypeOf(_Fl_Deref, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fl_Deref, _$4_Object_46defineProperty(_32_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fm_, _$4_Object_46defineProperty(_32_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fn_, _$4_Object_46defineProperty(_32_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _2x_prev = (__constructor.prototype = _32_, new __constructor());

  _2x_prev.key = "nd77";
  _2x_prev.shape = null;
  _2x_prev.text = "d";
  _2x_prev.colour = "mediumpurple1";
  _2x_prev.name = void 0;
  _2x_prev.graph = _6_graph;
  _2x_prev.width = null;
  _2x_prev.height = null;
  var _30_ = [_h_link, _t_nextLink,,];
  _30_.length = 2;
  _2x_prev.links = _30_;

  _9_.set("nd77", _2x_prev);

  var _33_toNode = (__constructor.prototype = _32_, new __constructor());

  _33_toNode.key = "nd83";
  _33_toNode.shape = null;
  _33_toNode.text = "d";
  _33_toNode.colour = "mediumpurple1";
  _33_toNode.name = void 0;
  _33_toNode.graph = _6_graph;
  _33_toNode.width = null;
  _33_toNode.height = null;
  var _36_ = [_p_link, _1F_nextLink,,];
  _36_.length = 2;
  _33_toNode.links = _36_;

  _9_.set("nd83", _33_toNode);

  var _38_fromNode = (__constructor.prototype = _3G_, new __constructor());

  _38_fromNode.key = "nd86";
  _38_fromNode.shape = null;
  _38_fromNode.text = "C";
  _38_fromNode.colour = "cyan";
  _38_fromNode.name = "x";
  _38_fromNode.graph = _6_graph;
  _38_fromNode.width = ".3";
  _38_fromNode.height = ".3";
  var _3E_ = [_h_link, _l_outLink, _Y_link,,];
  _3E_.length = 3;
  _38_fromNode.links = _3E_;

  _9_.set("nd86", _38_fromNode);

  var _2i_node = (__constructor.prototype = _2E_, new __constructor());

  _2i_node.key = "nd94";
  _2i_node.shape = null;
  _2i_node.text = "!";
  _2i_node.colour = "cyan";
  _2i_node.name = void 0;
  _2i_node.graph = _6_graph;
  _2i_node.width = ".3";
  _2i_node.height = ".3";
  var _2n_ = [_2V_link, _R_nextLink];
  _2i_node.links = _2n_;

  _9_.set("nd94", _2i_node);

  var _2e_node = (__constructor.prototype = _25_, new __constructor());

  _2e_node.key = "nd95";
  _2e_node.shape = null;
  _2e_node.text = 2;
  _2e_node.colour = "mediumpurple1";
  _2e_node.name = 2;
  _2e_node.graph = _6_graph;
  _2e_node.width = null;
  _2e_node.height = null;
  var _2h_ = [_2V_link];
  _2e_node.links = _2h_;

  _9_.set("nd95", _2e_node);

  var _28_node = (__constructor.prototype = _2E_, new __constructor());

  _28_node.key = "nd105";
  _28_node.shape = null;
  _28_node.text = "!";
  _28_node.colour = "cyan";
  _28_node.name = void 0;
  _28_node.graph = _6_graph;
  _28_node.width = ".3";
  _28_node.height = ".3";
  var _2D_ = [_1s_link, _F_nextLink];
  _28_node.links = _2D_;

  _9_.set("nd105", _28_node);

  var _21_node = (__constructor.prototype = _25_, new __constructor());

  _21_node.key = "nd106";
  _21_node.shape = null;
  _21_node.text = 1;
  _21_node.colour = "mediumpurple1";
  _21_node.name = 1;
  _21_node.graph = _6_graph;
  _21_node.width = null;
  _21_node.height = null;
  var _24_ = [_1s_link];
  _21_node.links = _24_;

  _9_.set("nd106", _21_node);

  var _3M_ = (__constructor.prototype = _1o_, new __constructor());

  _Fs_If.prototype = _3M_;

  _$5_Object_46setPrototypeOf(_Fs_If, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fs_If, _$4_Object_46defineProperty(_3M_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ft_, _$4_Object_46defineProperty(_3M_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fu_, _$4_Object_46defineProperty(_3M_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fv_, _$4_Object_46defineProperty(_3M_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _3H_toNode = (__constructor.prototype = _3M_, new __constructor());

  _3H_toNode.key = "nd121";
  _3H_toNode.shape = null;
  _3H_toNode.text = "if";
  _3H_toNode.colour = "mediumpurple1";
  _3H_toNode.name = void 0;
  _3H_toNode.graph = _6_graph;
  _3H_toNode.width = null;
  _3H_toNode.height = null;
  var _3K_ = [_x_link, _16_link, _1C_link, _1b_otherNextLink,,];
  _3K_.length = 4;
  _3H_toNode.links = _3K_;

  _9_.set("nd121", _3H_toNode);

  var _3T_ = (__constructor.prototype = _1o_, new __constructor());

  _Fw_BinOp.prototype = _3T_;
  var _HQ_BinOpType = {
    And: 0,
    Or: 1,
    Plus: 2,
    Sub: 3,
    Mult: 4,
    Div: 7,
    Lte: 5
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HO_, _$4_Object_46defineProperty(_Fw_BinOp, "createPlus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HP_, _$4_Object_46defineProperty(_Fw_BinOp, "createMult", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$5_Object_46setPrototypeOf(_Fw_BinOp, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fw_BinOp, _$4_Object_46defineProperty(_3T_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fx_, _$4_Object_46defineProperty(_3T_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fy_, _$4_Object_46defineProperty(_3T_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fz_, _$4_Object_46defineProperty(_3T_, "binOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _G0_, _$4_Object_46defineProperty(_3T_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _3N_left = (__constructor.prototype = _3T_, new __constructor());

  _3N_left.key = "nd122";
  _3N_left.shape = null;
  _3N_left.text = "<=";
  _3N_left.colour = "mediumpurple1";
  _3N_left.name = void 0;
  _3N_left.graph = _6_graph;
  _3N_left.width = null;
  _3N_left.height = null;
  var _3Q_ = [_x_link, _19_link, _12_link,,];
  _3Q_.length = 3;
  _3N_left.links = _3Q_;
  _3N_left.subType = 5;

  _9_.set("nd122", _3N_left);

  var _3U_right = (__constructor.prototype = _3G_, new __constructor());

  _3U_right.key = "nd132";
  _3U_right.shape = null;
  _3U_right.text = "C";
  _3U_right.colour = "cyan";
  _3U_right.name = "y";
  _3U_right.graph = _6_graph;
  _3U_right.width = ".3";
  _3U_right.height = ".3";
  var _3a_ = [_12_link, _16_link, _1F_nextLink];
  _3U_right.links = _3a_;

  _9_.set("nd132", _3U_right);

  var _3b_left = (__constructor.prototype = _3G_, new __constructor());

  _3b_left.key = "nd133";
  _3b_left.shape = null;
  _3b_left.text = "C";
  _3b_left.colour = "cyan";
  _3b_left.name = "x";
  _3b_left.graph = _6_graph;
  _3b_left.width = ".3";
  _3b_left.height = ".3";
  var _3h_ = [_19_link, _1C_link, _t_nextLink,,];
  _3h_.length = 3;
  _3b_left.links = _3h_;

  _9_.set("nd133", _3b_left);

  var _2O_ = (__constructor.prototype = _1o_, new __constructor());

  _Fh_Mod.prototype = _2O_;

  _$5_Object_46setPrototypeOf(_Fh_Mod, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fh_Mod, _$4_Object_46defineProperty(_2O_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fi_, _$4_Object_46defineProperty(_2O_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fj_, _$4_Object_46defineProperty(_2O_, "update", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fk_, _$4_Object_46defineProperty(_2O_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _2J_prev = (__constructor.prototype = _2O_, new __constructor());

  _2J_prev.key = "nd139";
  _2J_prev.shape = null;
  _2J_prev.text = "M";
  _2J_prev.colour = "indianred1";
  _2J_prev.name = void 0;
  _2J_prev.graph = _6_graph;
  _2J_prev.width = null;
  _2J_prev.height = null;
  var _2M_ = [_N_link, _F_nextLink, _Y_link,,];
  _2M_.length = 3;
  _2J_prev.links = _2M_;

  _9_.set("nd139", _2J_prev);

  var _2P_toNode = (__constructor.prototype = _25_, new __constructor());

  _2P_toNode.key = "nd140";
  _2P_toNode.shape = null;
  _2P_toNode.text = 1;
  _2P_toNode.colour = "mediumpurple1";
  _2P_toNode.name = 1;
  _2P_toNode.graph = _6_graph;
  _2P_toNode.width = null;
  _2P_toNode.height = null;
  var _2R_ = [_N_link];
  _2P_toNode.links = _2R_;

  _9_.set("nd140", _2P_toNode);

  var _2p_prev = (__constructor.prototype = _2O_, new __constructor());

  _2p_prev.key = "nd141";
  _2p_prev.shape = null;
  _2p_prev.text = "M";
  _2p_prev.colour = "indianred1";
  _2p_prev.name = void 0;
  _2p_prev.graph = _6_graph;
  _2p_prev.width = null;
  _2p_prev.height = null;
  var _2s_ = [_d_link, _R_nextLink, _p_link,,];
  _2s_.length = 3;
  _2p_prev.links = _2s_;

  _9_.set("nd141", _2p_prev);

  var _2u_toNode = (__constructor.prototype = _25_, new __constructor());

  _2u_toNode.key = "nd142";
  _2u_toNode.shape = null;
  _2u_toNode.text = 2;
  _2u_toNode.colour = "mediumpurple1";
  _2u_toNode.name = 2;
  _2u_toNode.graph = _6_graph;
  _2u_toNode.width = null;
  _2u_toNode.height = null;
  var _2w_ = [_d_link];
  _2u_toNode.links = _2w_;

  _9_.set("nd142", _2u_toNode);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F2_, _$4_Object_46defineProperty(_1o_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F3_, _$4_Object_46defineProperty(_1o_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F4_, _$4_Object_46defineProperty(_1o_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F5_, _$4_Object_46defineProperty(_1o_, "findLinksConnected", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F6_, _$4_Object_46defineProperty(_1o_, "findLinksInto", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F7_, _$4_Object_46defineProperty(_1o_, "findLinksOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F8_, _$4_Object_46defineProperty(_1o_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _F9_, _$4_Object_46defineProperty(_1o_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FA_, _$4_Object_46defineProperty(_1o_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FB_, _$4_Object_46defineProperty(_1o_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _27_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FI_Group, _$4_Object_46defineProperty(_27_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FJ_, _$4_Object_46defineProperty(_27_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FK_, _$4_Object_46defineProperty(_27_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FL_, _$4_Object_46defineProperty(_27_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FM_, _$4_Object_46defineProperty(_27_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FN_, _$4_Object_46defineProperty(_27_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _B_ = (__constructor.prototype = _27_, new __constructor());

  _B_.key = "nd0";
  _B_.shape = null;
  _B_.text = null;
  _B_.colour = null;
  _B_.name = void 0;
  _B_.graph = _6_graph;
  _B_.group = null;
  _B_.width = null;
  _B_.height = null;
  var _E_ = [_F_nextLink, _N_link, _R_nextLink, _Y_link, _d_link, _h_link, _l_outLink, _p_link, _t_nextLink, _x_link, _12_link, _16_link, _19_link, _1C_link, _1F_nextLink, _1I_link, _1N_link, _1R_nextLink, _1X_link, _1b_otherNextLink,,,,,,,];
  _E_.length = 20;
  _B_.links = _E_;

  var _2I_ = (__constructor.prototype = _27_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fe_Term, _$4_Object_46defineProperty(_2I_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ff_, _$4_Object_46defineProperty(_2I_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fg_, _$4_Object_46defineProperty(_2I_, "createPaxsOnTopOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _2H_ = (__constructor.prototype = _2I_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FW_BoxWrapper, _$4_Object_46defineProperty(_2H_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FX_, _$4_Object_46defineProperty(_2H_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FY_, _$4_Object_46defineProperty(_2H_, "removeAux", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FZ_, _$4_Object_46defineProperty(_2H_, "moveOut", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fa_, _$4_Object_46defineProperty(_2H_, "copyBox", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fb_, _$4_Object_46defineProperty(_2H_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fc_, _$4_Object_46defineProperty(_2H_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Fd_, _$4_Object_46defineProperty(_2H_, "deleteAndPreserveLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1p_node = (__constructor.prototype = _2H_, new __constructor());

  _1p_node.key = "nd103";
  _1p_node.shape = null;
  _1p_node.text = null;
  _1p_node.colour = null;
  _1p_node.name = void 0;
  _1p_node.graph = _6_graph;
  _1p_node.group = _B_;
  _1p_node.width = null;
  _1p_node.height = null;
  var _1r_ = [_1s_link];
  _1p_node.links = _1r_;

  var _26_ = (__constructor.prototype = _27_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FG_Box, _$4_Object_46defineProperty(_26_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _FH_, _$4_Object_46defineProperty(_26_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _1x_node = (__constructor.prototype = _26_, new __constructor());

  _1x_node.key = "nd104";
  _1x_node.shape = null;
  _1x_node.text = null;
  _1x_node.colour = null;
  _1x_node.name = void 0;
  _1x_node.graph = _6_graph;
  _1x_node.group = _1p_node;
  _1x_node.width = null;
  _1x_node.height = null;
  var _1z_ = [];
  _1x_node.links = _1z_;
  var _20_ = [_21_node];
  _1x_node.nodes = _20_;
  var _1w_ = [_1x_node, _28_node];
  _1p_node.nodes = _1w_;
  _1p_node.prin = _28_node;
  var _2G_ = [];
  _1p_node.auxs = _2G_;
  _1p_node.box = _1x_node;

  var _2S_node = (__constructor.prototype = _2H_, new __constructor());

  _2S_node.key = "nd92";
  _2S_node.shape = null;
  _2S_node.text = null;
  _2S_node.colour = null;
  _2S_node.name = void 0;
  _2S_node.graph = _6_graph;
  _2S_node.group = _B_;
  _2S_node.width = null;
  _2S_node.height = null;
  var _2U_ = [_2V_link];
  _2S_node.links = _2U_;

  var _2a_node = (__constructor.prototype = _26_, new __constructor());

  _2a_node.key = "nd93";
  _2a_node.shape = null;
  _2a_node.text = null;
  _2a_node.colour = null;
  _2a_node.name = void 0;
  _2a_node.graph = _6_graph;
  _2a_node.group = _2S_node;
  _2a_node.width = null;
  _2a_node.height = null;
  var _2c_ = [];
  _2a_node.links = _2c_;
  var _2d_ = [_2e_node];
  _2a_node.nodes = _2d_;
  var _2Z_ = [_2a_node, _2i_node];
  _2S_node.nodes = _2Z_;
  _2S_node.prin = _2i_node;
  var _2o_ = [];
  _2S_node.auxs = _2o_;
  _2S_node.box = _2a_node;

  var _3o_node = (__constructor.prototype = _2H_, new __constructor());

  _3o_node.key = "nd23";
  _3o_node.shape = null;
  _3o_node.text = null;
  _3o_node.colour = null;
  _3o_node.name = void 0;
  _3o_node.graph = _6_graph;
  _3o_node.group = _B_;
  _3o_node.width = null;
  _3o_node.height = null;
  var _3q_ = [_3r_, _3v_, _3z_outLink];
  _3o_node.links = _3q_;

  var _44_node = (__constructor.prototype = _26_, new __constructor());

  _44_node.key = "nd24";
  _44_node.shape = null;
  _44_node.text = null;
  _44_node.colour = null;
  _44_node.name = void 0;
  _44_node.graph = _6_graph;
  _44_node.group = _3o_node;
  _44_node.width = null;
  _44_node.height = null;
  var _46_ = [_47_, _4C_, _4G_, _4K_, _4N_, _4Q_,,];
  _46_.length = 6;
  _44_node.links = _46_;

  var _4g_node = (__constructor.prototype = _2H_, new __constructor());

  _4g_node.key = "nd28";
  _4g_node.shape = null;
  _4g_node.text = null;
  _4g_node.colour = null;
  _4g_node.name = void 0;
  _4g_node.graph = _6_graph;
  _4g_node.group = _44_node;
  _4g_node.width = null;
  _4g_node.height = null;
  var _4i_ = [_4j_, _4n_link];
  _4g_node.links = _4i_;

  var _4s_node = (__constructor.prototype = _26_, new __constructor());

  _4s_node.key = "nd29";
  _4s_node.shape = null;
  _4s_node.text = null;
  _4s_node.colour = null;
  _4s_node.name = void 0;
  _4s_node.graph = _6_graph;
  _4s_node.group = _4g_node;
  _4s_node.width = null;
  _4s_node.height = null;
  var _4u_ = [_4v_, _50_, _54_, _58_, _5B_];
  _4s_node.links = _4u_;

  var _5O_node = (__constructor.prototype = _2H_, new __constructor());

  _5O_node.key = "nd33";
  _5O_node.shape = null;
  _5O_node.text = null;
  _5O_node.colour = null;
  _5O_node.name = void 0;
  _5O_node.graph = _6_graph;
  _5O_node.group = _4s_node;
  _5O_node.width = null;
  _5O_node.height = null;
  var _5Q_ = [_5R_, _5V_outLink];
  _5O_node.links = _5Q_;

  var _5Z_node = (__constructor.prototype = _26_, new __constructor());

  _5Z_node.key = "nd34";
  _5Z_node.shape = null;
  _5Z_node.text = null;
  _5Z_node.colour = null;
  _5Z_node.name = void 0;
  _5Z_node.graph = _6_graph;
  _5Z_node.group = _5O_node;
  _5Z_node.width = null;
  _5Z_node.height = null;
  var _5b_ = [_5c_,,];
  _5b_.length = 1;
  _5Z_node.links = _5b_;
  var _5h_ = [_5i_fromNode, _5n_node,,];
  _5h_.length = 2;
  _5Z_node.nodes = _5h_;
  var _5Y_ = [_5Z_node, _5v_node, _61_node];
  _5O_node.nodes = _5Y_;
  _5O_node.prin = _5v_node;
  var _69_newPaxs = [_61_node];
  _5O_node.auxs = _69_newPaxs;
  _5O_node.box = _5Z_node;
  var _5F_ = [_5G_node, _5K_node, _5O_node, _6A_node, _6H_node, _6M_node];
  _4s_node.nodes = _5F_;
  var _4r_ = [_4s_node, _6S_node, _6Y_node];
  _4g_node.nodes = _4r_;
  _4g_node.prin = _6S_node;
  var _6e_newPaxs = [_6Y_node];
  _4g_node.auxs = _6e_newPaxs;
  _4g_node.box = _4s_node;

  var _6r_node = (__constructor.prototype = _2H_, new __constructor());

  _6r_node.key = "nd51";
  _6r_node.shape = null;
  _6r_node.text = null;
  _6r_node.colour = null;
  _6r_node.name = void 0;
  _6r_node.graph = _6_graph;
  _6r_node.group = _44_node;
  _6r_node.width = null;
  _6r_node.height = null;
  var _6t_ = [_6u_];
  _6r_node.links = _6t_;

  var _6z_node = (__constructor.prototype = _26_, new __constructor());

  _6z_node.key = "nd52";
  _6z_node.shape = null;
  _6z_node.text = null;
  _6z_node.colour = null;
  _6z_node.name = void 0;
  _6z_node.graph = _6_graph;
  _6z_node.group = _6r_node;
  _6z_node.width = null;
  _6z_node.height = null;
  var _71_ = [];
  _6z_node.links = _71_;
  var _72_ = [_73_node];
  _6z_node.nodes = _72_;
  var _6y_ = [_6z_node, _77_node];
  _6r_node.nodes = _6y_;
  _6r_node.prin = _77_node;
  var _7D_ = [];
  _6r_node.auxs = _7D_;
  _6r_node.box = _6z_node;
  var _4W_ = [_4X_node, _4c_node, _4g_node, _6f_node, _6l_fromNode, _6r_node, _7E_node,,];
  _4W_.length = 7;
  _44_node.nodes = _4W_;
  var _43_ = [_44_node, _7L_node, _7R_otherNode, _7X_fromNode];
  _3o_node.nodes = _43_;
  _3o_node.prin = _7L_node;
  var _7e_newPaxs = [_7R_otherNode, _7X_fromNode];
  _3o_node.auxs = _7e_newPaxs;
  _3o_node.box = _44_node;
  var _1g_ = [_1h_fromNode, _1p_node, _2J_prev, _2P_toNode, _2S_node, _2p_prev, _2u_toNode, _2x_prev, _33_toNode, _38_fromNode, _3H_toNode, _3N_left, _3U_right, _3b_left, _3j_node, _3o_node, _7f_node, _7l_node,,,,,,,,,];
  _1g_.length = 18;
  _B_.nodes = _1g_;
  _6_graph.child = _B_;

  _9_.set("nd0", _B_);

  _9_.set("nd23", _3o_node);

  _9_.set("nd24", _44_node);

  _9_.set("nd28", _4g_node);

  _9_.set("nd29", _4s_node);

  _9_.set("nd33", _5O_node);

  _9_.set("nd34", _5Z_node);

  var _7r_term = (__constructor.prototype = _2I_, new __constructor());

  _7r_term.key = "nd38";
  _7r_term.shape = null;
  _7r_term.text = null;
  _7r_term.colour = null;
  _7r_term.name = void 0;
  _7r_term.graph = _6_graph;
  _7r_term.group = null;
  _7r_term.width = null;
  _7r_term.height = null;
  var _7s_ = [];
  _7r_term.links = _7s_;
  var _7t_ = [];
  _7r_term.nodes = _7t_;

  var _82_ = (__constructor.prototype = _6G_, new __constructor());

  _GN_Var.prototype = _82_;

  _$5_Object_46setPrototypeOf(_GN_Var, _GD_Der);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GN_Var, _$4_Object_46defineProperty(_82_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GO_, _$4_Object_46defineProperty(_82_, "deleteAndPreserveOutLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _7u_toNode = (__constructor.prototype = _82_, new __constructor());

  _7u_toNode.key = "nd37";
  _7u_toNode.shape = null;
  _7u_toNode.text = "V";
  _7u_toNode.colour = "cyan";
  _7u_toNode.name = "m";
  _7u_toNode.graph = _6_graph;
  _7u_toNode.group = _5Z_node;
  _7u_toNode.width = ".3";
  _7u_toNode.height = ".3";
  var _80_ = [,,];
  _80_.length = 0;
  _7u_toNode.links = _80_;
  _7r_term.prin = _7u_toNode;
  var _83_ = [_7u_toNode];
  _7r_term.auxs = _83_;

  _9_.set("nd38", _7r_term);

  var _85_left = (__constructor.prototype = _2I_, new __constructor());

  _85_left.key = "nd41";
  _85_left.shape = null;
  _85_left.text = null;
  _85_left.colour = null;
  _85_left.name = void 0;
  _85_left.graph = _6_graph;
  _85_left.group = null;
  _85_left.width = null;
  _85_left.height = null;
  var _86_ = [];
  _85_left.links = _86_;
  var _87_ = [];
  _85_left.nodes = _87_;
  _85_left.prin = _5v_node;
  _85_left.auxs = _69_newPaxs;

  _9_.set("nd41", _85_left);

  var _89_right = (__constructor.prototype = _2I_, new __constructor());

  _89_right.key = "nd44";
  _89_right.shape = null;
  _89_right.text = null;
  _89_right.colour = null;
  _89_right.name = void 0;
  _89_right.graph = _6_graph;
  _89_right.group = null;
  _89_right.width = null;
  _89_right.height = null;
  var _8A_ = [];
  _89_right.links = _8A_;
  var _8B_ = [];
  _89_right.nodes = _8B_;
  _89_right.prin = _6H_node;
  var _8C_ = [];
  _89_right.auxs = _8C_;

  _9_.set("nd44", _89_right);

  var _8E_term = (__constructor.prototype = _2I_, new __constructor());

  _8E_term.key = "nd45";
  _8E_term.shape = null;
  _8E_term.text = null;
  _8E_term.colour = null;
  _8E_term.name = void 0;
  _8E_term.graph = _6_graph;
  _8E_term.group = null;
  _8E_term.width = null;
  _8E_term.height = null;
  var _8F_ = [];
  _8E_term.links = _8F_;
  var _8G_ = [];
  _8E_term.nodes = _8G_;
  _8E_term.prin = _5K_node;
  var _8H_newAuxs = [_61_node];
  _8E_term.auxs = _8H_newAuxs;

  _9_.set("nd45", _8E_term);

  var _8J_left = (__constructor.prototype = _2I_, new __constructor());

  _8J_left.key = "nd48";
  _8J_left.shape = null;
  _8J_left.text = null;
  _8J_left.colour = null;
  _8J_left.name = void 0;
  _8J_left.graph = _6_graph;
  _8J_left.group = null;
  _8J_left.width = null;
  _8J_left.height = null;
  var _8K_ = [];
  _8J_left.links = _8K_;
  var _8L_ = [];
  _8J_left.nodes = _8L_;
  _8J_left.prin = _6S_node;
  _8J_left.auxs = _6e_newPaxs;

  _9_.set("nd48", _8J_left);

  _9_.set("nd51", _6r_node);

  _9_.set("nd52", _6z_node);

  var _8N_term = (__constructor.prototype = _2I_, new __constructor());

  _8N_term.key = "nd55";
  _8N_term.shape = null;
  _8N_term.text = null;
  _8N_term.colour = null;
  _8N_term.name = void 0;
  _8N_term.graph = _6_graph;
  _8N_term.group = null;
  _8N_term.width = null;
  _8N_term.height = null;
  var _8O_ = [];
  _8N_term.links = _8O_;
  var _8P_ = [];
  _8N_term.nodes = _8P_;
  _8N_term.prin = _77_node;
  _8N_term.auxs = _7D_;

  _9_.set("nd55", _8N_term);

  var _8R_right = (__constructor.prototype = _2I_, new __constructor());

  _8R_right.key = "nd57";
  _8R_right.shape = null;
  _8R_right.text = null;
  _8R_right.colour = null;
  _8R_right.name = void 0;
  _8R_right.graph = _6_graph;
  _8R_right.group = null;
  _8R_right.width = null;
  _8R_right.height = null;
  var _8S_ = [];
  _8R_right.links = _8S_;
  var _8T_ = [];
  _8R_right.nodes = _8T_;
  _8R_right.prin = _6l_fromNode;

  var _8V_toNode = (__constructor.prototype = _82_, new __constructor());

  _8V_toNode.key = "nd56";
  _8V_toNode.shape = null;
  _8V_toNode.text = "V";
  _8V_toNode.colour = "cyan";
  _8V_toNode.name = "x";
  _8V_toNode.graph = _6_graph;
  _8V_toNode.group = _44_node;
  _8V_toNode.width = ".3";
  _8V_toNode.height = ".3";
  var _8b_ = [,,];
  _8b_.length = 0;
  _8V_toNode.links = _8b_;
  var _8U_auxs = [_8V_toNode];
  _8R_right.auxs = _8U_auxs;

  _9_.set("nd57", _8R_right);

  var _8e_term = (__constructor.prototype = _2I_, new __constructor());

  _8e_term.key = "nd58";
  _8e_term.shape = null;
  _8e_term.text = null;
  _8e_term.colour = null;
  _8e_term.name = void 0;
  _8e_term.graph = _6_graph;
  _8e_term.group = null;
  _8e_term.width = null;
  _8e_term.height = null;
  var _8f_ = [];
  _8e_term.links = _8f_;
  var _8g_ = [];
  _8e_term.nodes = _8g_;
  _8e_term.prin = _4c_node;
  var _8h_newAuxs = [_6Y_node, _8V_toNode];
  _8e_term.auxs = _8h_newAuxs;

  _9_.set("nd58", _8e_term);

  var _8j_left = (__constructor.prototype = _2I_, new __constructor());

  _8j_left.key = "nd62";
  _8j_left.shape = null;
  _8j_left.text = null;
  _8j_left.colour = null;
  _8j_left.name = void 0;
  _8j_left.graph = _6_graph;
  _8j_left.group = null;
  _8j_left.width = null;
  _8j_left.height = null;
  var _8k_ = [];
  _8j_left.links = _8k_;
  var _8l_ = [];
  _8j_left.nodes = _8l_;
  _8j_left.prin = _7L_node;
  _8j_left.auxs = _7e_newPaxs;

  _9_.set("nd62", _8j_left);

  var _8n_right = (__constructor.prototype = _2I_, new __constructor());

  _8n_right.key = "nd65";
  _8n_right.shape = null;
  _8n_right.text = null;
  _8n_right.colour = null;
  _8n_right.name = void 0;
  _8n_right.graph = _6_graph;
  _8n_right.group = null;
  _8n_right.width = null;
  _8n_right.height = null;
  var _8o_ = [];
  _8n_right.links = _8o_;
  var _8p_ = [];
  _8n_right.nodes = _8p_;
  _8n_right.prin = _7l_node;
  var _8q_ = [];
  _8n_right.auxs = _8q_;

  _9_.set("nd65", _8n_right);

  var _8s_term = (__constructor.prototype = _2I_, new __constructor());

  _8s_term.key = "nd66";
  _8s_term.shape = null;
  _8s_term.text = null;
  _8s_term.colour = null;
  _8s_term.name = void 0;
  _8s_term.graph = _6_graph;
  _8s_term.group = null;
  _8s_term.width = null;
  _8s_term.height = null;
  var _8t_ = [];
  _8s_term.links = _8t_;
  var _8u_ = [];
  _8s_term.nodes = _8u_;
  _8s_term.prin = _3j_node;
  var _8v_newAuxs = [_7R_otherNode, _7X_fromNode];
  _8s_term.auxs = _8v_newAuxs;

  _9_.set("nd66", _8s_term);

  var _8x_left = (__constructor.prototype = _2I_, new __constructor());

  _8x_left.key = "nd68";
  _8x_left.shape = null;
  _8x_left.text = null;
  _8x_left.colour = null;
  _8x_left.name = void 0;
  _8x_left.graph = _6_graph;
  _8x_left.group = null;
  _8x_left.width = null;
  _8x_left.height = null;
  var _8y_ = [];
  _8x_left.links = _8y_;
  var _8z_ = [];
  _8x_left.nodes = _8z_;

  var _90_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _90_fromNode.key = "nd20";
  _90_fromNode.shape = null;
  _90_fromNode.text = "!";
  _90_fromNode.colour = "cyan";
  _90_fromNode.name = void 0;
  _90_fromNode.graph = _6_graph;
  _90_fromNode.group = _B_;
  _90_fromNode.width = ".3";
  _90_fromNode.height = ".3";
  var _96_ = [,,];
  _96_.length = 0;
  _90_fromNode.links = _96_;
  _8x_left.prin = _90_fromNode;
  var _98_newPaxs = [,];
  _98_newPaxs.length = 0;
  _8x_left.auxs = _98_newPaxs;

  _9_.set("nd68", _8x_left);

  var _9B_left = (__constructor.prototype = _2I_, new __constructor());

  _9B_left.key = "nd73";
  _9B_left.shape = null;
  _9B_left.text = null;
  _9B_left.colour = null;
  _9B_left.name = void 0;
  _9B_left.graph = _6_graph;
  _9B_left.group = null;
  _9B_left.width = null;
  _9B_left.height = null;
  var _9C_ = [];
  _9B_left.links = _9C_;
  var _9D_ = [];
  _9B_left.nodes = _9D_;

  var _9E_toNode = (__constructor.prototype = _82_, new __constructor());

  _9E_toNode.key = "nd72";
  _9E_toNode.shape = null;
  _9E_toNode.text = "V";
  _9E_toNode.colour = "cyan";
  _9E_toNode.name = "max";
  _9E_toNode.graph = _6_graph;

  var _9J__95node = (__constructor.prototype = _26_, new __constructor());

  _9J__95node.key = "nd14";
  _9J__95node.shape = null;
  _9J__95node.text = null;
  _9J__95node.colour = null;
  _9J__95node.name = void 0;
  _9J__95node.graph = _6_graph;
  _9J__95node.group = _B_;
  _9J__95node.width = null;
  _9J__95node.height = null;
  var _9L_ = [,,,,,,,,,,,,,,,];
  _9L_.length = 0;
  _9J__95node.links = _9L_;
  var _9N_ = [,,,,,,,,,,,,,,];
  _9N_.length = 0;
  _9J__95node.nodes = _9N_;
  _9E_toNode.group = _9J__95node;
  _9E_toNode.width = ".3";
  _9E_toNode.height = ".3";
  var _9R_ = [,,];
  _9R_.length = 0;
  _9E_toNode.links = _9R_;
  _9B_left.prin = _9E_toNode;
  var _9T_ = [_9E_toNode];
  _9B_left.auxs = _9T_;

  _9_.set("nd73", _9B_left);

  var _9V_term = (__constructor.prototype = _2I_, new __constructor());

  _9V_term.key = "nd76";
  _9V_term.shape = null;
  _9V_term.text = null;
  _9V_term.colour = null;
  _9V_term.name = void 0;
  _9V_term.graph = _6_graph;
  _9V_term.group = null;
  _9V_term.width = null;
  _9V_term.height = null;
  var _9W_ = [];
  _9V_term.links = _9W_;
  var _9X_ = [];
  _9V_term.nodes = _9X_;

  var _9Y_toNode = (__constructor.prototype = _82_, new __constructor());

  _9Y_toNode.key = "nd75";
  _9Y_toNode.shape = null;
  _9Y_toNode.text = "V";
  _9Y_toNode.colour = "cyan";
  _9Y_toNode.name = "x";
  _9Y_toNode.graph = _6_graph;
  _9Y_toNode.group = _9J__95node;
  _9Y_toNode.width = ".3";
  _9Y_toNode.height = ".3";
  var _9f_ = [,,];
  _9f_.length = 0;
  _9Y_toNode.links = _9f_;
  _9V_term.prin = _9Y_toNode;
  var _9h_ = [_9Y_toNode];
  _9V_term.auxs = _9h_;

  _9_.set("nd76", _9V_term);

  var _9j_right = (__constructor.prototype = _2I_, new __constructor());

  _9j_right.key = "nd78";
  _9j_right.shape = null;
  _9j_right.text = null;
  _9j_right.colour = null;
  _9j_right.name = void 0;
  _9j_right.graph = _6_graph;
  _9j_right.group = null;
  _9j_right.width = null;
  _9j_right.height = null;
  var _9k_ = [];
  _9j_right.links = _9k_;
  var _9l_ = [];
  _9j_right.nodes = _9l_;
  _9j_right.prin = _2x_prev;
  _9j_right.auxs = _9h_;

  _9_.set("nd78", _9j_right);

  var _9n_left = (__constructor.prototype = _2I_, new __constructor());

  _9n_left.key = "nd79";
  _9n_left.shape = null;
  _9n_left.text = null;
  _9n_left.colour = null;
  _9n_left.name = void 0;
  _9n_left.graph = _6_graph;
  _9n_left.group = null;
  _9n_left.width = null;
  _9n_left.height = null;
  var _9o_ = [];
  _9n_left.links = _9o_;
  var _9p_ = [];
  _9n_left.nodes = _9p_;

  var _9q_toNode = (__constructor.prototype = _3n_, new __constructor());

  _9q_toNode.key = "nd71";
  _9q_toNode.shape = null;
  _9q_toNode.text = "@";
  _9q_toNode.colour = "yellow";
  _9q_toNode.name = void 0;
  _9q_toNode.graph = _6_graph;
  _9q_toNode.group = _B_;
  _9q_toNode.width = null;
  _9q_toNode.height = null;
  var _9u_ = [,,,];
  _9u_.length = 0;
  _9q_toNode.links = _9u_;
  _9n_left.prin = _9q_toNode;
  var _9w_newAuxs = [_9E_toNode, _9Y_toNode];
  _9n_left.auxs = _9w_newAuxs;

  _9_.set("nd79", _9n_left);

  var _9y_term = (__constructor.prototype = _2I_, new __constructor());

  _9y_term.key = "nd82";
  _9y_term.shape = null;
  _9y_term.text = null;
  _9y_term.colour = null;
  _9y_term.name = void 0;
  _9y_term.graph = _6_graph;
  _9y_term.group = null;
  _9y_term.width = null;
  _9y_term.height = null;
  var _9z_ = [];
  _9y_term.links = _9z_;
  var _A0_ = [];
  _9y_term.nodes = _A0_;

  var _A1_toNode = (__constructor.prototype = _82_, new __constructor());

  _A1_toNode.key = "nd81";
  _A1_toNode.shape = null;
  _A1_toNode.text = "V";
  _A1_toNode.colour = "cyan";
  _A1_toNode.name = "y";
  _A1_toNode.graph = _6_graph;
  _A1_toNode.group = _9J__95node;
  _A1_toNode.width = ".3";
  _A1_toNode.height = ".3";
  var _A8_ = [,,];
  _A8_.length = 0;
  _A1_toNode.links = _A8_;
  _9y_term.prin = _A1_toNode;
  var _AA_ = [_A1_toNode];
  _9y_term.auxs = _AA_;

  _9_.set("nd82", _9y_term);

  var _AC_right = (__constructor.prototype = _2I_, new __constructor());

  _AC_right.key = "nd84";
  _AC_right.shape = null;
  _AC_right.text = null;
  _AC_right.colour = null;
  _AC_right.name = void 0;
  _AC_right.graph = _6_graph;
  _AC_right.group = null;
  _AC_right.width = null;
  _AC_right.height = null;
  var _AD_ = [];
  _AC_right.links = _AD_;
  var _AE_ = [];
  _AC_right.nodes = _AE_;
  _AC_right.prin = _33_toNode;
  _AC_right.auxs = _AA_;

  _9_.set("nd84", _AC_right);

  var _AG_right = (__constructor.prototype = _2I_, new __constructor());

  _AG_right.key = "nd85";
  _AG_right.shape = null;
  _AG_right.text = null;
  _AG_right.colour = null;
  _AG_right.name = void 0;
  _AG_right.graph = _6_graph;
  _AG_right.group = null;
  _AG_right.width = null;
  _AG_right.height = null;
  var _AH_ = [];
  _AG_right.links = _AH_;
  var _AI_ = [];
  _AG_right.nodes = _AI_;

  var _AJ_toNode = (__constructor.prototype = _3n_, new __constructor());

  _AJ_toNode.key = "nd70";
  _AJ_toNode.shape = null;
  _AJ_toNode.text = "@";
  _AJ_toNode.colour = "yellow";
  _AJ_toNode.name = void 0;
  _AJ_toNode.graph = _6_graph;
  _AJ_toNode.group = _B_;
  _AJ_toNode.width = null;
  _AJ_toNode.height = null;
  var _AN_ = [,,,];
  _AN_.length = 0;
  _AJ_toNode.links = _AN_;
  _AG_right.prin = _AJ_toNode;
  var _AP_newAuxs = [_9E_toNode, _9Y_toNode, _A1_toNode];
  _AG_right.auxs = _AP_newAuxs;

  _9_.set("nd85", _AG_right);

  var _AR_term = (__constructor.prototype = _2I_, new __constructor());

  _AR_term.key = "nd87";
  _AR_term.shape = null;
  _AR_term.text = null;
  _AR_term.colour = null;
  _AR_term.name = void 0;
  _AR_term.graph = _6_graph;
  _AR_term.group = null;
  _AR_term.width = null;
  _AR_term.height = null;
  var _AS_ = [];
  _AR_term.links = _AS_;
  var _AT_ = [];
  _AR_term.nodes = _AT_;

  var _AU_fromNode = (__constructor.prototype = _3n_, new __constructor());

  _AU_fromNode.key = "nd17";
  _AU_fromNode.shape = null;
  _AU_fromNode.text = "@";
  _AU_fromNode.colour = "yellow";
  _AU_fromNode.name = void 0;
  _AU_fromNode.graph = _6_graph;
  _AU_fromNode.group = _B_;
  _AU_fromNode.width = null;
  _AU_fromNode.height = null;
  var _AY_ = [,,,,];
  _AY_.length = 0;
  _AU_fromNode.links = _AY_;
  _AR_term.prin = _AU_fromNode;
  var _Aa_newAuxs = [_9E_toNode, _A1_toNode, _38_fromNode,,];
  _Aa_newAuxs.length = 3;
  _AR_term.auxs = _Aa_newAuxs;

  _9_.set("nd87", _AR_term);

  var _Ad_left = (__constructor.prototype = _2I_, new __constructor());

  _Ad_left.key = "nd90";
  _Ad_left.shape = null;
  _Ad_left.text = null;
  _Ad_left.colour = null;
  _Ad_left.name = void 0;
  _Ad_left.graph = _6_graph;
  _Ad_left.group = null;
  _Ad_left.width = null;
  _Ad_left.height = null;
  var _Ae_ = [];
  _Ad_left.links = _Ae_;
  var _Af_ = [];
  _Ad_left.nodes = _Af_;

  var _Ag_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _Ag_fromNode.key = "nd15";
  _Ag_fromNode.shape = null;
  _Ag_fromNode.text = "!";
  _Ag_fromNode.colour = "cyan";
  _Ag_fromNode.name = void 0;
  _Ag_fromNode.graph = _6_graph;
  _Ag_fromNode.group = _B_;
  _Ag_fromNode.width = ".3";
  _Ag_fromNode.height = ".3";
  var _Am_ = [,,];
  _Am_.length = 0;
  _Ag_fromNode.links = _Am_;
  _Ad_left.prin = _Ag_fromNode;
  var _Ao_newPaxs = [,,];
  _Ao_newPaxs.length = 0;
  _Ad_left.auxs = _Ao_newPaxs;

  _9_.set("nd90", _Ad_left);

  _9_.set("nd92", _2S_node);

  _9_.set("nd93", _2a_node);

  var _Ar_term = (__constructor.prototype = _2I_, new __constructor());

  _Ar_term.key = "nd96";
  _Ar_term.shape = null;
  _Ar_term.text = null;
  _Ar_term.colour = null;
  _Ar_term.name = void 0;
  _Ar_term.graph = _6_graph;
  _Ar_term.group = null;
  _Ar_term.width = null;
  _Ar_term.height = null;
  var _As_ = [];
  _Ar_term.links = _As_;
  var _At_ = [];
  _Ar_term.nodes = _At_;
  _Ar_term.prin = _2i_node;
  _Ar_term.auxs = _2o_;

  _9_.set("nd96", _Ar_term);

  var _Av_right = (__constructor.prototype = _2I_, new __constructor());

  _Av_right.key = "nd98";
  _Av_right.shape = null;
  _Av_right.text = null;
  _Av_right.colour = null;
  _Av_right.name = void 0;
  _Av_right.graph = _6_graph;
  _Av_right.group = null;
  _Av_right.width = null;
  _Av_right.height = null;
  var _Aw_ = [];
  _Av_right.links = _Aw_;
  var _Ax_ = [];
  _Av_right.nodes = _Ax_;

  var _B7_ = (__constructor.prototype = _1o_, new __constructor());

  _GP_Prov.prototype = _B7_;

  _$5_Object_46setPrototypeOf(_GP_Prov, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GP_Prov, _$4_Object_46defineProperty(_B7_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GQ_, _$4_Object_46defineProperty(_B7_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GR_, _$4_Object_46defineProperty(_B7_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GS_, _$4_Object_46defineProperty(_B7_, "deleteAndPreserveInLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GT_, _$4_Object_46defineProperty(_B7_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Ay_toNode = (__constructor.prototype = _B7_, new __constructor());

  _Ay_toNode.key = "nd97";
  _Ay_toNode.shape = "diamond";
  _Ay_toNode.text = "";
  _Ay_toNode.colour = "indianred1";
  _Ay_toNode.name = void 0;
  _Ay_toNode.graph = _6_graph;
  _Ay_toNode.group = _B_;
  _Ay_toNode.width = ".3";
  _Ay_toNode.height = ".3";
  var _B5_ = [,,];
  _B5_.length = 0;
  _Ay_toNode.links = _B5_;
  _Av_right.prin = _Ay_toNode;
  _Av_right.auxs = _2o_;

  _9_.set("nd98", _Av_right);

  var _B9_term = (__constructor.prototype = _2I_, new __constructor());

  _B9_term.key = "nd99";
  _B9_term.shape = null;
  _B9_term.text = null;
  _B9_term.colour = null;
  _B9_term.name = void 0;
  _B9_term.graph = _6_graph;
  _B9_term.group = null;
  _B9_term.width = null;
  _B9_term.height = null;
  var _BA_ = [];
  _B9_term.links = _BA_;
  var _BB_ = [];
  _B9_term.nodes = _BB_;

  var _BC_toNode = (__constructor.prototype = _3n_, new __constructor());

  _BC_toNode.key = "nd12";
  _BC_toNode.shape = null;
  _BC_toNode.text = "@";
  _BC_toNode.colour = "yellow";
  _BC_toNode.name = void 0;
  _BC_toNode.graph = _6_graph;
  _BC_toNode.group = _B_;
  _BC_toNode.width = null;
  _BC_toNode.height = null;
  var _BG_ = [,,,];
  _BG_.length = 0;
  _BC_toNode.links = _BG_;
  _B9_term.prin = _BC_toNode;

  var _BJ_toNode = (__constructor.prototype = _68_, new __constructor());

  _BJ_toNode.key = "nd88";
  _BJ_toNode.shape = null;
  _BJ_toNode.text = "?";
  _BJ_toNode.colour = "cyan";
  _BJ_toNode.name = "max";
  _BJ_toNode.graph = _6_graph;
  _BJ_toNode.group = _B_;
  _BJ_toNode.width = ".3";
  _BJ_toNode.height = ".3";
  var _BP_ = [,,,];
  _BP_.length = 0;
  _BJ_toNode.links = _BP_;

  var _BR_toNode = (__constructor.prototype = _68_, new __constructor());

  _BR_toNode.key = "nd89";
  _BR_toNode.shape = null;
  _BR_toNode.text = "?";
  _BR_toNode.colour = "cyan";
  _BR_toNode.name = "x";
  _BR_toNode.graph = _6_graph;
  _BR_toNode.group = _B_;
  _BR_toNode.width = ".3";
  _BR_toNode.height = ".3";
  var _BX_ = [,,];
  _BX_.length = 0;
  _BR_toNode.links = _BX_;
  var _BI_newAuxs = [_BJ_toNode, _BR_toNode];
  _B9_term.auxs = _BI_newAuxs;

  _9_.set("nd99", _B9_term);

  var _Ba_left = (__constructor.prototype = _2I_, new __constructor());

  _Ba_left.key = "nd101";
  _Ba_left.shape = null;
  _Ba_left.text = null;
  _Ba_left.colour = null;
  _Ba_left.name = void 0;
  _Ba_left.graph = _6_graph;
  _Ba_left.group = null;
  _Ba_left.width = null;
  _Ba_left.height = null;
  var _Bb_ = [];
  _Ba_left.links = _Bb_;
  var _Bc_ = [];
  _Ba_left.nodes = _Bc_;

  var _Bd_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _Bd_fromNode.key = "nd10";
  _Bd_fromNode.shape = null;
  _Bd_fromNode.text = "!";
  _Bd_fromNode.colour = "cyan";
  _Bd_fromNode.name = void 0;
  _Bd_fromNode.graph = _6_graph;
  _Bd_fromNode.group = _B_;
  _Bd_fromNode.width = ".3";
  _Bd_fromNode.height = ".3";
  var _Bj_ = [,,];
  _Bj_.length = 0;
  _Bd_fromNode.links = _Bj_;
  _Ba_left.prin = _Bd_fromNode;
  var _Bl_newPaxs = [,];
  _Bl_newPaxs.length = 0;
  _Ba_left.auxs = _Bl_newPaxs;

  _9_.set("nd101", _Ba_left);

  _9_.set("nd103", _1p_node);

  _9_.set("nd104", _1x_node);

  var _Bo_term = (__constructor.prototype = _2I_, new __constructor());

  _Bo_term.key = "nd107";
  _Bo_term.shape = null;
  _Bo_term.text = null;
  _Bo_term.colour = null;
  _Bo_term.name = void 0;
  _Bo_term.graph = _6_graph;
  _Bo_term.group = null;
  _Bo_term.width = null;
  _Bo_term.height = null;
  var _Bp_ = [];
  _Bo_term.links = _Bp_;
  var _Bq_ = [];
  _Bo_term.nodes = _Bq_;
  _Bo_term.prin = _28_node;
  _Bo_term.auxs = _2G_;

  _9_.set("nd107", _Bo_term);

  var _Bs_right = (__constructor.prototype = _2I_, new __constructor());

  _Bs_right.key = "nd109";
  _Bs_right.shape = null;
  _Bs_right.text = null;
  _Bs_right.colour = null;
  _Bs_right.name = void 0;
  _Bs_right.graph = _6_graph;
  _Bs_right.group = null;
  _Bs_right.width = null;
  _Bs_right.height = null;
  var _Bt_ = [];
  _Bs_right.links = _Bt_;
  var _Bu_ = [];
  _Bs_right.nodes = _Bu_;

  var _Bv_toNode = (__constructor.prototype = _B7_, new __constructor());

  _Bv_toNode.key = "nd108";
  _Bv_toNode.shape = "diamond";
  _Bv_toNode.text = "";
  _Bv_toNode.colour = "indianred1";
  _Bv_toNode.name = void 0;
  _Bv_toNode.graph = _6_graph;
  _Bv_toNode.group = _B_;
  _Bv_toNode.width = ".3";
  _Bv_toNode.height = ".3";
  var _C2_ = [,,];
  _C2_.length = 0;
  _Bv_toNode.links = _C2_;
  _Bs_right.prin = _Bv_toNode;
  _Bs_right.auxs = _2G_;

  _9_.set("nd109", _Bs_right);

  var _C5_term = (__constructor.prototype = _2I_, new __constructor());

  _C5_term.key = "nd110";
  _C5_term.shape = null;
  _C5_term.text = null;
  _C5_term.colour = null;
  _C5_term.name = void 0;
  _C5_term.graph = _6_graph;
  _C5_term.group = null;
  _C5_term.width = null;
  _C5_term.height = null;
  var _C6_ = [];
  _C5_term.links = _C6_;
  var _C7_ = [];
  _C5_term.nodes = _C7_;

  var _C8_toNode = (__constructor.prototype = _3n_, new __constructor());

  _C8_toNode.key = "nd7";
  _C8_toNode.shape = null;
  _C8_toNode.text = "@";
  _C8_toNode.colour = "yellow";
  _C8_toNode.name = void 0;
  _C8_toNode.graph = _6_graph;
  _C8_toNode.group = _B_;
  _C8_toNode.width = null;
  _C8_toNode.height = null;
  var _CC_ = [,,,];
  _CC_.length = 0;
  _C8_toNode.links = _CC_;
  _C5_term.prin = _C8_toNode;

  var _CF_toNode = (__constructor.prototype = _68_, new __constructor());

  _CF_toNode.key = "nd100";
  _CF_toNode.shape = null;
  _CF_toNode.text = "?";
  _CF_toNode.colour = "cyan";
  _CF_toNode.name = "max";
  _CF_toNode.graph = _6_graph;
  _CF_toNode.group = _B_;
  _CF_toNode.width = ".3";
  _CF_toNode.height = ".3";
  var _CL_ = [,,];
  _CL_.length = 0;
  _CF_toNode.links = _CL_;
  var _CE_newAuxs = [_CF_toNode];
  _C5_term.auxs = _CE_newAuxs;

  _9_.set("nd110", _C5_term);

  var _CO_left = (__constructor.prototype = _2I_, new __constructor());

  _CO_left.key = "nd111";
  _CO_left.shape = null;
  _CO_left.text = null;
  _CO_left.colour = null;
  _CO_left.name = void 0;
  _CO_left.graph = _6_graph;
  _CO_left.group = null;
  _CO_left.width = null;
  _CO_left.height = null;
  var _CP_ = [];
  _CO_left.links = _CP_;
  var _CQ_ = [];
  _CO_left.nodes = _CQ_;

  var _CR_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _CR_fromNode.key = "nd5";
  _CR_fromNode.shape = null;
  _CR_fromNode.text = "!";
  _CR_fromNode.colour = "cyan";
  _CR_fromNode.name = void 0;
  _CR_fromNode.graph = _6_graph;
  _CR_fromNode.group = _B_;
  _CR_fromNode.width = ".3";
  _CR_fromNode.height = ".3";
  var _CX_ = [,,];
  _CX_.length = 0;
  _CR_fromNode.links = _CX_;
  _CO_left.prin = _CR_fromNode;
  var _CZ_newPaxs = [];
  _CO_left.auxs = _CZ_newPaxs;

  _9_.set("nd111", _CO_left);

  var _Cb_left = (__constructor.prototype = _2I_, new __constructor());

  _Cb_left.key = "nd124";
  _Cb_left.shape = null;
  _Cb_left.text = null;
  _Cb_left.colour = null;
  _Cb_left.name = void 0;
  _Cb_left.graph = _6_graph;
  _Cb_left.group = null;
  _Cb_left.width = null;
  _Cb_left.height = null;
  var _Cc_ = [];
  _Cb_left.links = _Cc_;
  var _Cd_ = [];
  _Cb_left.nodes = _Cd_;

  var _Ce_toNode = (__constructor.prototype = _82_, new __constructor());

  _Ce_toNode.key = "nd123";
  _Ce_toNode.shape = null;
  _Ce_toNode.text = "V";
  _Ce_toNode.colour = "cyan";
  _Ce_toNode.name = "x";
  _Ce_toNode.graph = _6_graph;

  var _Cj__95node = (__constructor.prototype = _26_, new __constructor());

  _Cj__95node.key = "nd118";
  _Cj__95node.shape = null;
  _Cj__95node.text = null;
  _Cj__95node.colour = null;
  _Cj__95node.name = void 0;
  _Cj__95node.graph = _6_graph;
  _Cj__95node.group = _B_;
  _Cj__95node.width = null;
  _Cj__95node.height = null;
  var _Cl_ = [,,,,,,,,,,,];
  _Cl_.length = 0;
  _Cj__95node.links = _Cl_;
  var _Cn_ = [,,,,,,,,,];
  _Cn_.length = 0;
  _Cj__95node.nodes = _Cn_;
  _Ce_toNode.group = _Cj__95node;
  _Ce_toNode.width = ".3";
  _Ce_toNode.height = ".3";
  var _Cr_ = [,,];
  _Cr_.length = 0;
  _Ce_toNode.links = _Cr_;
  _Cb_left.prin = _Ce_toNode;
  var _Ct_ = [_Ce_toNode];
  _Cb_left.auxs = _Ct_;

  _9_.set("nd124", _Cb_left);

  var _Cv_right = (__constructor.prototype = _2I_, new __constructor());

  _Cv_right.key = "nd126";
  _Cv_right.shape = null;
  _Cv_right.text = null;
  _Cv_right.colour = null;
  _Cv_right.name = void 0;
  _Cv_right.graph = _6_graph;
  _Cv_right.group = null;
  _Cv_right.width = null;
  _Cv_right.height = null;
  var _Cw_ = [];
  _Cv_right.links = _Cw_;
  var _Cx_ = [];
  _Cv_right.nodes = _Cx_;

  var _Cy_toNode = (__constructor.prototype = _82_, new __constructor());

  _Cy_toNode.key = "nd125";
  _Cy_toNode.shape = null;
  _Cy_toNode.text = "V";
  _Cy_toNode.colour = "cyan";
  _Cy_toNode.name = "y";
  _Cy_toNode.graph = _6_graph;
  _Cy_toNode.group = _Cj__95node;
  _Cy_toNode.width = ".3";
  _Cy_toNode.height = ".3";
  var _D5_ = [,,];
  _D5_.length = 0;
  _Cy_toNode.links = _D5_;
  _Cv_right.prin = _Cy_toNode;
  var _D7_ = [_Cy_toNode];
  _Cv_right.auxs = _D7_;

  _9_.set("nd126", _Cv_right);

  var _D9_cond = (__constructor.prototype = _2I_, new __constructor());

  _D9_cond.key = "nd127";
  _D9_cond.shape = null;
  _D9_cond.text = null;
  _D9_cond.colour = null;
  _D9_cond.name = void 0;
  _D9_cond.graph = _6_graph;
  _D9_cond.group = null;
  _D9_cond.width = null;
  _D9_cond.height = null;
  var _DA_ = [];
  _D9_cond.links = _DA_;
  var _DB_ = [];
  _D9_cond.nodes = _DB_;
  _D9_cond.prin = _3N_left;
  var _DC_newAuxs = [_Ce_toNode, _Cy_toNode];
  _D9_cond.auxs = _DC_newAuxs;

  _9_.set("nd127", _D9_cond);

  var _DE_t1 = (__constructor.prototype = _2I_, new __constructor());

  _DE_t1.key = "nd129";
  _DE_t1.shape = null;
  _DE_t1.text = null;
  _DE_t1.colour = null;
  _DE_t1.name = void 0;
  _DE_t1.graph = _6_graph;
  _DE_t1.group = null;
  _DE_t1.width = null;
  _DE_t1.height = null;
  var _DF_ = [];
  _DE_t1.links = _DF_;
  var _DG_ = [];
  _DE_t1.nodes = _DG_;

  var _DH_toNode = (__constructor.prototype = _82_, new __constructor());

  _DH_toNode.key = "nd128";
  _DH_toNode.shape = null;
  _DH_toNode.text = "V";
  _DH_toNode.colour = "cyan";
  _DH_toNode.name = "y";
  _DH_toNode.graph = _6_graph;
  _DH_toNode.group = _Cj__95node;
  _DH_toNode.width = ".3";
  _DH_toNode.height = ".3";
  var _DN_ = [,,];
  _DN_.length = 0;
  _DH_toNode.links = _DN_;
  _DE_t1.prin = _DH_toNode;
  var _DP_ = [_DH_toNode];
  _DE_t1.auxs = _DP_;

  _9_.set("nd129", _DE_t1);

  var _DR_t2 = (__constructor.prototype = _2I_, new __constructor());

  _DR_t2.key = "nd131";
  _DR_t2.shape = null;
  _DR_t2.text = null;
  _DR_t2.colour = null;
  _DR_t2.name = void 0;
  _DR_t2.graph = _6_graph;
  _DR_t2.group = null;
  _DR_t2.width = null;
  _DR_t2.height = null;
  var _DS_ = [];
  _DR_t2.links = _DS_;
  var _DT_ = [];
  _DR_t2.nodes = _DT_;

  var _DU_toNode = (__constructor.prototype = _82_, new __constructor());

  _DU_toNode.key = "nd130";
  _DU_toNode.shape = null;
  _DU_toNode.text = "V";
  _DU_toNode.colour = "cyan";
  _DU_toNode.name = "x";
  _DU_toNode.graph = _6_graph;
  _DU_toNode.group = _Cj__95node;
  _DU_toNode.width = ".3";
  _DU_toNode.height = ".3";
  var _Da_ = [,,];
  _Da_.length = 0;
  _DU_toNode.links = _Da_;
  _DR_t2.prin = _DU_toNode;
  var _Dc_ = [_DU_toNode];
  _DR_t2.auxs = _Dc_;

  _9_.set("nd131", _DR_t2);

  var _De_term = (__constructor.prototype = _2I_, new __constructor());

  _De_term.key = "nd134";
  _De_term.shape = null;
  _De_term.text = null;
  _De_term.colour = null;
  _De_term.name = void 0;
  _De_term.graph = _6_graph;
  _De_term.group = null;
  _De_term.width = null;
  _De_term.height = null;
  var _Df_ = [];
  _De_term.links = _Df_;
  var _Dg_ = [];
  _De_term.nodes = _Dg_;
  _De_term.prin = _3H_toNode;
  var _Dh_newAuxs = [_3U_right, _3b_left,,,];
  _Dh_newAuxs.length = 2;
  _De_term.auxs = _Dh_newAuxs;

  _9_.set("nd134", _De_term);

  var _Dk_term = (__constructor.prototype = _2I_, new __constructor());

  _Dk_term.key = "nd136";
  _Dk_term.shape = null;
  _Dk_term.text = null;
  _Dk_term.colour = null;
  _Dk_term.name = void 0;
  _Dk_term.graph = _6_graph;
  _Dk_term.group = null;
  _Dk_term.width = null;
  _Dk_term.height = null;
  var _Dl_ = [];
  _Dk_term.links = _Dl_;
  var _Dm_ = [];
  _Dk_term.nodes = _Dm_;

  var _Dn_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _Dn_fromNode.key = "nd119";
  _Dn_fromNode.shape = null;
  _Dn_fromNode.text = "!";
  _Dn_fromNode.colour = "cyan";
  _Dn_fromNode.name = void 0;
  _Dn_fromNode.graph = _6_graph;
  _Dn_fromNode.group = _B_;
  _Dn_fromNode.width = ".3";
  _Dn_fromNode.height = ".3";
  var _Dt_ = [,,];
  _Dt_.length = 0;
  _Dn_fromNode.links = _Dt_;
  _Dk_term.prin = _Dn_fromNode;
  var _Dv_newPaxs = [,];
  _Dv_newPaxs.length = 0;
  _Dk_term.auxs = _Dv_newPaxs;

  _9_.set("nd136", _Dk_term);

  var _Dy_right = (__constructor.prototype = _2I_, new __constructor());

  _Dy_right.key = "nd137";
  _Dy_right.shape = null;
  _Dy_right.text = null;
  _Dy_right.colour = null;
  _Dy_right.name = void 0;
  _Dy_right.graph = _6_graph;
  _Dy_right.group = null;
  _Dy_right.width = null;
  _Dy_right.height = null;
  var _Dz_ = [];
  _Dy_right.links = _Dz_;
  var _E0_ = [];
  _Dy_right.nodes = _E0_;

  var _E1_fromNode = (__constructor.prototype = _2E_, new __constructor());

  _E1_fromNode.key = "nd115";
  _E1_fromNode.shape = null;
  _E1_fromNode.text = "!";
  _E1_fromNode.colour = "cyan";
  _E1_fromNode.name = void 0;
  _E1_fromNode.graph = _6_graph;
  _E1_fromNode.group = _B_;
  _E1_fromNode.width = ".3";
  _E1_fromNode.height = ".3";
  var _E7_ = [,,,];
  _E7_.length = 0;
  _E1_fromNode.links = _E7_;
  _Dy_right.prin = _E1_fromNode;
  var _E9_newPaxs = [];
  _Dy_right.auxs = _E9_newPaxs;

  _9_.set("nd137", _Dy_right);

  var _EB_term = (__constructor.prototype = _2I_, new __constructor());

  _EB_term.key = "nd138";
  _EB_term.shape = null;
  _EB_term.text = null;
  _EB_term.colour = null;
  _EB_term.name = void 0;
  _EB_term.graph = _6_graph;
  _EB_term.group = null;
  _EB_term.width = null;
  _EB_term.height = null;
  var _EC_ = [];
  _EB_term.links = _EC_;
  var _ED_ = [];
  _EB_term.nodes = _ED_;

  var _EE_toNode = (__constructor.prototype = _3n_, new __constructor());

  _EE_toNode.key = "nd2";
  _EE_toNode.shape = null;
  _EE_toNode.text = "@";
  _EE_toNode.colour = "yellow";
  _EE_toNode.name = void 0;
  _EE_toNode.graph = _6_graph;
  _EE_toNode.group = _B_;
  _EE_toNode.width = null;
  _EE_toNode.height = null;
  var _EI_ = [,,,];
  _EI_.length = 0;
  _EE_toNode.links = _EI_;
  _EB_term.prin = _EE_toNode;
  var _EK_newAuxs = [];
  _EB_term.auxs = _EK_newAuxs;

  _9_.set("nd138", _EB_term);

  _5R_.group = _5O_node;
  _5c_.group = _5Z_node;
  _5V_outLink.group = _5O_node;
  _4v_.group = _4s_node;
  _50_.group = _4s_node;
  _54_.group = _4s_node;
  _4j_.group = _4g_node;
  _58_.group = _4s_node;
  _5B_.group = _4s_node;
  _4n_link.group = _4g_node;
  _47_.group = _44_node;
  _6u_.group = _6r_node;
  _4C_.group = _44_node;
  _4G_.group = _44_node;
  _4K_.group = _44_node;
  _3r_.group = _3o_node;
  _4N_.group = _44_node;
  _4Q_.group = _44_node;
  _3v_.group = _3o_node;
  _3z_outLink.group = _3o_node;
  _1I_link.group = _B_;
  _1N_link.group = _B_;
  _1R_nextLink.group = _B_;
  _1X_link.group = _B_;
  _1b_otherNextLink.group = _B_;
  _h_link.group = _B_;
  _l_outLink.group = _B_;
  _p_link.group = _B_;
  _2V_link.group = _2S_node;
  _R_nextLink.group = _B_;
  _Y_link.group = _B_;
  _1s_link.group = _1p_node;
  _F_nextLink.group = _B_;
  _x_link.group = _B_;
  _12_link.group = _B_;
  _16_link.group = _B_;
  _19_link.group = _B_;
  _1C_link.group = _B_;
  _1F_nextLink.group = _B_;
  _t_nextLink.group = _B_;
  _N_link.group = _B_;
  _d_link.group = _B_;
  _1h_fromNode.group = _B_;
  _3j_node.group = _B_;
  _7L_node.group = _3o_node;
  _Fe_Term.prototype = _2I_;
  _4X_node.group = _44_node;
  _4c_node.group = _44_node;
  _6S_node.group = _4g_node;
  _5G_node.group = _4s_node;
  _5K_node.group = _4s_node;
  _5v_node.group = _5O_node;
  _5i_fromNode.group = _5Z_node;
  _5n_node.group = _5Z_node;
  _61_node.group = _5O_node;
  _6A_node.group = _4s_node;
  _6H_node.group = _4s_node;
  _FW_BoxWrapper.prototype = _2H_;
  _FG_Box.prototype = _26_;
  _6M_node.group = _4s_node;
  _6Y_node.group = _4g_node;
  _6f_node.group = _44_node;
  _6l_fromNode.group = _44_node;
  _77_node.group = _6r_node;
  _73_node.group = _6z_node;
  _7E_node.group = _44_node;
  _7R_otherNode.group = _3o_node;
  _7X_fromNode.group = _3o_node;
  _7f_node.group = _B_;
  _7l_node.group = _B_;
  _2x_prev.group = _B_;
  _33_toNode.group = _B_;
  _38_fromNode.group = _B_;
  _2i_node.group = _2S_node;
  _2e_node.group = _2a_node;
  _28_node.group = _1p_node;
  _21_node.group = _1x_node;
  _3H_toNode.group = _B_;
  _3N_left.group = _B_;
  _3U_right.group = _B_;
  _3b_left.group = _B_;
  _2J_prev.group = _B_;
  _2P_toNode.group = _B_;
  _2p_prev.group = _B_;
  _2u_toNode.group = _B_;
  _FI_Group.prototype = _27_;

  _$5_Object_46setPrototypeOf(_FI_Group, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GU_, _$4_Object_46defineProperty(_EN_, "clear", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GV_, _$4_Object_46defineProperty(_EN_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GW_, _$4_Object_46defineProperty(_EN_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GX_, _$4_Object_46defineProperty(_EN_, "findNodeByKey", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GY_, _$4_Object_46defineProperty(_EN_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _GZ_, _$4_Object_46defineProperty(_EN_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HX_, _$4_Object_46defineProperty(_Ge_MachineToken, "CompData", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _HY_, _$4_Object_46defineProperty(_Ge_MachineToken, "RewriteFlag", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gb_, _$4_Object_46defineProperty(_EV_, "setLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gc_, _$4_Object_46defineProperty(_EV_, "reset", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gd_, _$4_Object_46defineProperty(_EV_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gf_, _$4_Object_46defineProperty(_EX_, "collect", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gg_, _$4_Object_46defineProperty(_EX_, "collectInGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IX_ = (__constructor.prototype = _2F_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IW_Recur, _$4_Object_46defineProperty(_IX_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JR_, _$4_Object_46defineProperty(_IX_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JS_, _$4_Object_46defineProperty(_IX_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JT_, _$4_Object_46defineProperty(_IX_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _IW_Recur.prototype = _IX_;

  _$5_Object_46setPrototypeOf(_IW_Recur, _FS_Expo);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gh_, _$4_Object_46defineProperty(_EX_, "collectFromBottom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gj_, _$4_Object_46defineProperty(_En_, "isPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gk_, _$4_Object_46defineProperty(_En_, "setPlay", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gl_, _$4_Object_46defineProperty(_En_, "isPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gm_, _$4_Object_46defineProperty(_En_, "setPlaying", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gn_, _$4_Object_46defineProperty(_En_, "isFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Go_, _$4_Object_46defineProperty(_En_, "setFinished", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _J6_, _$4_Object_46defineProperty(_IE_, "_nextChar", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Ka_Token.EOF = "EOF";
  _Ka_Token.LAMBDA = "LAMBDA";
  _Ka_Token.LPAREN = "LPAREN";
  _Ka_Token.RPAREN = "RPAREN";
  _Ka_Token.CLPAREN = "CLPAREN";
  _Ka_Token.CRPAREN = "CRPAREN";
  _Ka_Token.LCID = "LCID";
  _Ka_Token.DOT = "DOT";
  _Ka_Token.COMMA = "COMMA";
  _Ka_Token.APP = "APP";
  _Ka_Token.LET = "LET";
  _Ka_Token.DEFINE = "DEFINE";
  _Ka_Token.IN = "IN";
  _Ka_Token.REC = "REC";
  _Ka_Token.INT = "INT";
  _Ka_Token.TRUE = "TRUE";
  _Ka_Token.FALSE = "FALSE";
  _Ka_Token.NOT = "NOT";
  _Ka_Token.AND = "AND";
  _Ka_Token.OR = "OR";
  _Ka_Token.PLUS = "PLUS";
  _Ka_Token.SUB = "SUB";
  _Ka_Token.MULT = "MULT";
  _Ka_Token.DIV = "DIV";
  _Ka_Token.LTE = "LTE";
  _Ka_Token.IF = "IF";
  _Ka_Token.THEN = "THEN";
  _Ka_Token.ELSE = "ELSE";
  _Ka_Token.SET = "SET";
  _Ka_Token.CHANGE = "CHANGE";
  _Ka_Token.TO = "TO";
  _Ka_Token.PROP = "PROP";
  _Ka_Token.DEP = "DEP";
  _Ka_Token.DEREF = "DEREF";
  _Ka_Token.ABS = "ABS";
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _J7_, _$4_Object_46defineProperty(_IE_, "_nextToken", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _J8_, _$4_Object_46defineProperty(_IE_, "token", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _J9_, _$4_Object_46defineProperty(_IE_, "lookahead", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JA_, _$4_Object_46defineProperty(_IE_, "fail", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JB_, _$4_Object_46defineProperty(_IE_, "next", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JC_, _$4_Object_46defineProperty(_IE_, "match", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JD_, _$4_Object_46defineProperty(_IE_, "skip", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JE_, _$4_Object_46defineProperty(_IG_, "parse", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$1_enumerable_58false_44configurable_58true_44writable_58false.value = "Pattern", _$4_Object_46defineProperty(_LA_PatternType, "name", $$1_enumerable_58false_44configurable_58true_44writable_58false);
  var _HZ_PatternType = {
    Id: 0,
    Tuple: 1
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JF_, _$4_Object_46defineProperty(_IG_, "term", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JG_, _$4_Object_46defineProperty(_IG_, "isBinaryOp", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IP_ = (__constructor.prototype = _IQ_, new __constructor());

  _IR_UnaryOp.prototype = _IP_;

  _$5_Object_46setPrototypeOf(_IR_UnaryOp, _JM_Operation);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IR_UnaryOp, _$4_Object_46defineProperty(_IP_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IO_ = (__constructor.prototype = _IP_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IN_BinaryOp, _$4_Object_46defineProperty(_IO_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _IN_BinaryOp.prototype = _IO_;

  _$5_Object_46setPrototypeOf(_IN_BinaryOp, _IR_UnaryOp);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JH_, _$4_Object_46defineProperty(_IG_, "parseBinop", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JI_, _$4_Object_46defineProperty(_IG_, "application", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _Jw_UnOpType = {
    Not: 0
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JJ_, _$4_Object_46defineProperty(_IG_, "atom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gp_, _$4_Object_46defineProperty(_En_, "compile", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _IT_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IS_UnOp, _$4_Object_46defineProperty(_IT_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JN_, _$4_Object_46defineProperty(_IT_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JO_, _$4_Object_46defineProperty(_IT_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JP_, _$4_Object_46defineProperty(_IT_, "unOpApply", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JQ_, _$4_Object_46defineProperty(_IT_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _IS_UnOp.prototype = _IT_;

  _$5_Object_46setPrototypeOf(_IS_UnOp, _FC_Node);

  var _Ia_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _IZ_Pair, _$4_Object_46defineProperty(_Ia_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JU_, _$4_Object_46defineProperty(_Ia_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JV_, _$4_Object_46defineProperty(_Ia_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JW_, _$4_Object_46defineProperty(_Ia_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _IZ_Pair.prototype = _Ia_;

  _$5_Object_46setPrototypeOf(_IZ_Pair, _FC_Node);

  var _Ie_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Id_Dep, _$4_Object_46defineProperty(_Ie_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JX_, _$4_Object_46defineProperty(_Ie_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JY_, _$4_Object_46defineProperty(_Ie_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _JZ_, _$4_Object_46defineProperty(_Ie_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Id_Dep.prototype = _Ie_;

  _$5_Object_46setPrototypeOf(_Id_Dep, _FC_Node);

  var _Ij_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ii_Set, _$4_Object_46defineProperty(_Ij_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Ja_, _$4_Object_46defineProperty(_Ij_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Jb_, _$4_Object_46defineProperty(_Ij_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Jc_, _$4_Object_46defineProperty(_Ij_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Ii_Set.prototype = _Ij_;

  _$5_Object_46setPrototypeOf(_Ii_Set, _FC_Node);

  var _In_ = (__constructor.prototype = _1o_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Im_GAbs, _$4_Object_46defineProperty(_In_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Jd_, _$4_Object_46defineProperty(_In_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Je_, _$4_Object_46defineProperty(_In_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Jf_, _$4_Object_46defineProperty(_In_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Im_GAbs.prototype = _In_;

  _$5_Object_46setPrototypeOf(_Im_GAbs, _FC_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gq_, _$4_Object_46defineProperty(_En_, "toGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gr_, _$4_Object_46defineProperty(_En_, "deleteVarNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gs_, _$4_Object_46defineProperty(_En_, "startPropagation", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gt_, _$4_Object_46defineProperty(_En_, "shuffle", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gu_, _$4_Object_46defineProperty(_En_, "batchPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gv_, _$4_Object_46defineProperty(_En_, "pass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gw_, _$4_Object_46defineProperty(_En_, "tokenPass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Gx_, _$4_Object_46defineProperty(_En_, "getData", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _5_machine = (__constructor.prototype = _En_, new __constructor());

  _5_machine.graph = _6_graph;

  var _EO_ = (__constructor.prototype = _EV_, new __constructor());

  _EO_.machine = _5_machine;
  _EO_.forward = false;
  _EO_.rewrite = false;
  _EO_.transited = true;
  _EO_.link = _1R_nextLink;
  _EO_.rewriteFlag = "<s>";
  var _EQ_ = ["*", false,,,,];
  _EQ_.length = 2;
  _EO_.dataStack = _EQ_;
  var _ET_ = [,,];
  _ET_.length = 0;
  _EO_.boxStack = _ET_;
  _EO_.isMain = true;
  _5_machine.token = _EO_;

  var _EW_ = (__constructor.prototype = _EX_, new __constructor());

  _EW_.graph = _6_graph;
  _EW_.noMore = false;
  _5_machine.gc = _EW_;
  _5_machine.count = 0;

  var _Ea_token = (__constructor.prototype = _EV_, new __constructor());

  _Ea_token.machine = _5_machine;
  _Ea_token.forward = false;
  _Ea_token.rewrite = false;
  _Ea_token.transited = true;
  _Ea_token.link = _F_nextLink;
  _Ea_token.rewriteFlag = "\u25A1";
  var _Ed_ = [1, "-"];
  var _Ec_ = [_Ed_];
  _Ea_token.dataStack = _Ec_;
  var _Ef_ = [];
  _Ea_token.boxStack = _Ef_;
  _Ea_token.isMain = false;

  var _Eg_token = (__constructor.prototype = _EV_, new __constructor());

  _Eg_token.machine = _5_machine;
  _Eg_token.forward = false;
  _Eg_token.rewrite = false;
  _Eg_token.transited = true;
  _Eg_token.link = _R_nextLink;
  _Eg_token.rewriteFlag = "\u25A1";
  var _Ei_ = [2, "-"];
  var _Eh_ = [_Ei_];
  _Eg_token.dataStack = _Eh_;
  var _Ej_ = [];
  _Eg_token.boxStack = _Ej_;
  _Eg_token.isMain = false;
  var _EZ_ = [_Ea_token, _Eg_token];
  _5_machine.evalTokens = _EZ_;
  var _Ek_ = ["nd139", "nd141"];
  _5_machine.cells = _Ek_;
  _5_machine.evaluating = true;

  var _El_ = new _$3_Map();

  _5_machine.newValues = _El_;
  _5_machine.hasUpdate = false;
  _5_machine.play = true;
  _5_machine.playing = true;
  _5_machine.finished = false;
  _5_machine.readyEvalTokens = 0;
  _6_graph.machine = _5_machine;
  var _Gz_ = _$0_global;

  var _3_ = (err, result) => {
    if (err) {
      throw err;
    }

    console.log(result.toString());
    module.exports = result;
  };

  _0_(_1_trampoline, _2_autoPlay, _3_);
}).call(global);