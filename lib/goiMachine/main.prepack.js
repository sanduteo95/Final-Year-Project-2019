(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [null];
        break;

      case 1:
        __captured = [_2r__95typeof, _2r__95typeof, _2V__95getPrototypeOf, _2V__95getPrototypeOf];
        break;

      case 2:
        __captured = [_2v__95typeof, _2v__95typeof, _2b__95getPrototypeOf, _2b__95getPrototypeOf];
        break;

      case 3:
        __captured = [_2x__95typeof, _2x__95typeof, _2d__95getPrototypeOf, _2d__95getPrototypeOf];
        break;

      case 4:
        __captured = [_2z__95typeof, _2z__95typeof, _2f__95getPrototypeOf, _2f__95getPrototypeOf];
        break;

      case 5:
        __captured = [_31__95typeof, _31__95typeof, _2h__95getPrototypeOf, _2h__95getPrototypeOf];
        break;

      case 6:
        __captured = [_33__95typeof, _33__95typeof, _2j__95getPrototypeOf, _2j__95getPrototypeOf];
        break;

      case 7:
        __captured = [_35__95typeof, _35__95typeof, _2l__95getPrototypeOf, _2l__95getPrototypeOf];
        break;

      case 8:
        __captured = [_37__95typeof, _37__95typeof, _2n__95getPrototypeOf, _2n__95getPrototypeOf];
        break;

      case 9:
        __captured = [_39__95typeof, _39__95typeof, _2p__95getPrototypeOf, _2p__95getPrototypeOf];
        break;

      case 10:
        __captured = [_2t__95typeof, _2t__95typeof, _2Y__95getPrototypeOf, _2Y__95getPrototypeOf, _2Z__95get, _2Z__95get];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(11);

  var $$0_enumerable_58false_44configurable_58true_44writable_58true = {
    enumerable: false,
    configurable: true,
    writable: true
  };

  var _$0_global = this;

  var _$1_Object = _$0_global.Object;
  var _$2_Object_46defineProperty = _$1_Object.defineProperty;
  var _$3_Object_46setPrototypeOf = _$1_Object.setPrototypeOf;

  var _I__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _22__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _L_MachineToken = function () {
    _22__95classCallCheck(this, _L_MachineToken);

    this.link = null;
    this.rewriteFlag = null;
    this.reset();
  };

  var _M_ = _L_MachineToken.prototype;

  var _w_ = function () {
    return _E_Flag;
  };

  var _x_ = function (link) {
    if (this.link != null) this.link.clearFocus();
    this.link = link;

    if (this.link != null) {
      this.link.focus("red");
    }
  };

  var _y_ = function (link) {
    this.setLink(link);
    this.rewriteFlag = _E_Flag.SEARCH;
  };

  var _2x__95typeof = function (obj) {
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

  var _2c__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    if (call && (__captured__scope_4_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _2y__95assertThisInitialized(self);
  };

  var _2y__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2d__95getPrototypeOf = function (o) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    __captured__scope_4_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4_[3](o);
  };

  var _29__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1m_Term = function (type, ctx) {
    _29__95classCallCheck(this, _1m_Term);

    this.type = type;
    this.ctx = ctx;
  };

  var _b_ = _1m_Term.prototype;

  var _Z_Reference = function (ctx, id, param, body) {
    var __captured__scope_4_ = __scope_0_main[3] || __get_scope_binding_0_get_95scope_95binding(3);

    var _this5;

    _29__95classCallCheck(this, _Z_Reference);

    _this5 = _2c__95possibleConstructorReturn(this, __captured__scope_4_[3](_Z_Reference).call(this, 0, ctx));
    _this5.id = id;
    _this5.param = param;
    _this5.body = body;
    return _this5;
  };

  var _23__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2q__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2G_Token = function (type, value, pred) {
    _2q__95classCallCheck(this, _2G_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _N_Lexer = function (input) {
    _23__95classCallCheck(this, _N_Lexer);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _O_ = _N_Lexer.prototype;

  var _z_ = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _10_ = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case ',':
        this._token = new _2G_Token(_2G_Token.COMMA);
        break;

      case ';':
        this._token = new _2G_Token(_2G_Token.SEMIC);
        break;

      case '(':
        this._token = new _2G_Token(_2G_Token.LPAREN);
        break;

      case ')':
        this._token = new _2G_Token(_2G_Token.RPAREN);
        break;

      case '\0':
        this._token = new _2G_Token(_2G_Token.EOF);
        break;

      case '=':
        this._token = new _2G_Token(_2G_Token.DEF);
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
          if (str == "bind") this._token = new _2G_Token(_2G_Token.BIND);else if (str == "in") this._token = new _2G_Token(_2G_Token.IN);else if (str == "new") this._token = new _2G_Token(_2G_Token.NEW);else if (str == "PLUS") this._token = new _2G_Token(_2G_Token.PLUS);else if (str == "TIMES") this._token = new _2G_Token(_2G_Token.TIMES);else this._token = new _2G_Token(_2G_Token.LCID, str);
        } // text for numbers
        else if (/[0-9]/.test(c)) {
            var _str = '';

            do {
              _str += c;
              c = this._nextChar();
            } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


            this._index--;
            this._token = new _2G_Token(_2G_Token.INT, parseInt(_str));
          } else {
            this.fail();
          }

    }
  };

  var _11_ = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _12_ = function () {
    return this._token;
  };

  var _13_ = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _14_ = function (type) {
    return this._token.type == type;
  };

  var _15_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _16_ = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _24__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _P_Parser = function (lexer) {
    _24__95classCallCheck(this, _P_Parser);

    this.lexer = lexer;
  };

  var _Q_ = _P_Parser.prototype;

  var _17_ = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_2G_Token.EOF);
    return result;
  };

  var _18_ = function (ctx) {
    if (this.lexer.skip(_2G_Token.BIND)) {
      var id = this.term(ctx);
      id.ctx = [id].concat(id.ctx); // necessary?

      if (this.lexer.skip(_2G_Token.DEF)) {
        var P = this.term(ctx);
        this.lexer.match(_2G_Token.IN);
        var B = this.term([id].concat(ctx));
        return new _Z_Reference(ctx, id, P, B);
      }
    } else if (this.lexer.skip(_2G_Token.NEW)) {
      var _id = this.term(ctx);

      _id.ctx = [_id].concat(_id.ctx); // necessary?

      if (this.lexer.skip(_2G_Token.DEF)) {
        var _P = this.term(ctx);

        this.lexer.match(_2G_Token.IN);

        var _B = this.term([_id].concat(ctx));

        return new _Z_Reference(ctx, _id, _P, _B);
      }
    } else {
      return this.atom(ctx);
    }
  };

  var _19_ = function (ctx) {
    if (this.lexer.skip(_2G_Token.LPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_2G_Token.RPAREN);
      return term;
    } else if (this.lexer.next(_2G_Token.LCID)) {
      var id = this.lexer.token(_2G_Token.LCID);
      return new _Z_Reference(ctx, id);
    } else {
      return this.operation(ctx);
    }
  };

  var _1A_ = function (ctx) {
    if (this.lexer.skip(_2G_Token.PLUS)) {
      var eas = this.gatherEAs(ctx, 2);
      return new _Z_Reference(ctx, 2, "+", true, eas, []);
    } else if (this.lexer.skip(_2G_Token.TIMES)) {
      var eas = this.gatherEAs(ctx, 2);
      return new _Z_Reference(ctx, 2, "*", true, eas, []);
    } else if (this.lexer.next(_2G_Token.INT)) {
      var n = this.lexer.token(_2G_Token.INT);
      return new _Z_Reference(ctx, 0, n, false, [], []);
    } else {
      console.log("no");
      return undefined;
    }
  };

  var _1B_ = function (ctx, type) {
    this.lexer.match(_2G_Token.LPAREN);
    var eas = [];

    for (var i = 0; i < type; i++) {
      var term = this.term(ctx);
      eas.push(term);

      if (this.lexer.next(_2G_Token.COMMA)) {
        this.lexer.match(_2G_Token.COMMA);
      }
    }

    this.lexer.match(_2G_Token.RPAREN);
    return eas;
  };

  var _27__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _U_Link = function (from, to, fromPort, toPort, colour) {
    _27__95classCallCheck(this, _U_Link);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.visited = false; // HACKING

    this.reverse = false;
    this.colour = colour;
    this.penWidth = null;
    this.addToGraph(graph); // cheating

    if (colour != "lightgrey") {
      // cheating
      this.addToNode(); // cheating
    }
  };

  var _V_ = _U_Link.prototype;

  var _1S_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1T_ = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1U_ = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1V_ = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _1W_ = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _1X_ = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1Y_ = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _1Z_ = function () {
    this.colour = null;
    this.penWidth = null;
    this.visited = true; // HACKING
  };

  var _1a_ = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _1b_ = function () {
    return this.from + "->" + this.to;
  };

  var _1c_ = function (level) {
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

  var _21__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2t__95typeof = function (obj) {
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

  var _2W__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2X__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (call && (__captured__scope_B_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _2u__95assertThisInitialized(self);
  };

  var _2u__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2Z__95get = function (target, property, receiver) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_B_[5] = Reflect.get;
    } else {
      __captured__scope_B_[5] = function _get(target, property, receiver) {
        var base = _3B__95superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_B_[5](target, property, receiver || target);
  };

  var _3B__95superPropBase = function (object, property) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_B_[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _2Y__95getPrototypeOf = function (o) {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    __captured__scope_B_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B_[3](o);
  };

  var _2T__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1R_Node = function (shape, text, name) {
    _2T__95classCallCheck(this, _1R_Node);

    this.key = null;
    this.shape = shape;
    this.text = text;
    this.name = name; // identifier name or constant name if any

    this.graph = null;
    this.group = null;
    this.width = 0.3;
    this.height = 0.3;
    this.links = [];
    this.addToGraph(graph); // cheating!
  };

  var _T_ = _1R_Node.prototype;

  var _1F_ = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1G_ = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1H_ = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _1I_ = function () {
    return this.links;
  };

  var _1J_ = function () {
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

  var _1K_ = function () {
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

  var _1L_ = function () {
    var _this = this;

    var links = this.findLinksOutOf();
    var nodeKeys = links.map(function (l) {
      return l.to;
    });
    return nodeKeys.map(function (k) {
      return _this.graph.findNodeByKey(k);
    });
  };

  var _1M_ = function (graph) {
    var newNode = new _1R_Node(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
    return newNode;
  };

  var _1N_ = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _1O_ = function (level) {
    var str = level + this.key + '[label="' + this.text;
    ;
    str += '"';
    if (this.shape != null) str += ',shape=' + this.shape;
    if (this.width != null) str += ',width=' + this.width;
    if (this.height != null) str += ',height=' + this.height;
    return str += '];';
  };

  var _1P_ = function (token, link) {
    return link;
  };

  var _1Q_ = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _1e_Group = function () {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    var _this;

    _2W__95classCallCheck(this, _1e_Group);

    _this = _2X__95possibleConstructorReturn(this, __captured__scope_B_[3](_1e_Group).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _1f_ = function (node) {
    this.nodes.push(node);
  };

  var _1g_ = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _1h_ = function (link) {
    this.links.push(link);
  };

  var _1i_ = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _1j_ = function () {
    var __captured__scope_B_ = __scope_0_main[10] || __get_scope_binding_0_get_95scope_95binding(10);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_B_[5](__captured__scope_B_[3](_1e_Group.prototype), "delete", this).call(this);
  };

  var _1k_ = function (level) {
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

  var _1l_ = function () {};

  var _J_Graph = function () {
    _21__95classCallCheck(this, _J_Graph);

    this.clear();
  };

  var _K_ = _J_Graph.prototype;

  var _o_ = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _1e_Group();
  };

  var _p_ = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _q_ = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _r_ = function (key) {
    return this.allNodes.get(key);
  };

  var _s_ = function (link) {
    this.allLinks.push(link);
  };

  var _t_ = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _u_ = function (from, to) {
    var fromNode = this.findNodeByKey(from);
    return fromNode.findLinksOutOf().filter(function (x) {
      return x.to == to;
    })[0];
  };

  var _v_ = function (width, height) {
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

  var _2v__95typeof = function (obj) {
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

  var _28__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2a__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    if (call && (__captured__scope_3_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _2w__95assertThisInitialized(self);
  };

  var _2w__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2b__95getPrototypeOf = function (o) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    __captured__scope_3_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3_[3](o);
  };

  var _W_Term = function (prin, auxs) {
    var __captured__scope_3_ = __scope_0_main[2] || __get_scope_binding_0_get_95scope_95binding(2);

    var _this;

    _28__95classCallCheck(this, _W_Term);

    _this = _2a__95possibleConstructorReturn(this, __captured__scope_3_[3](_W_Term).call(this));
    _this.prin = null;

    _this.set(prin, auxs);

    return _this;
  };

  var _1d_ = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _31__95typeof = function (obj) {
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

  var _2B__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2g__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    if (call && (__captured__scope_6_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _32__95assertThisInitialized(self);
  };

  var _32__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2h__95getPrototypeOf = function (o) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    __captured__scope_6_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6_[3](o);
  };

  var _e_Atom = function (name) {
    var __captured__scope_6_ = __scope_0_main[5] || __get_scope_binding_0_get_95scope_95binding(5);

    var _this;

    _2B__95classCallCheck(this, _e_Atom);

    _this = _2g__95possibleConstructorReturn(this, __captured__scope_6_[3](_e_Atom).call(this, "circle", "", name));
    _this.height = 0.1;
    _this.width = 0.1;
    return _this;
  };

  var _1t_ = function (token, nextLink) {
    return null;
  };

  var _1u_ = function () {
    return null;
  };

  var _1s_ = function (token, link) {
    if (link.to == this.key) {
      if (token.rewriteFlag == _E_Flag.SEARCH) {
        token.rewriteFlag = _E_Flag.RETURN;
        return link;
      }
    }
  };

  var _2z__95typeof = function (obj) {
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

  var _2A__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2e__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    if (call && (__captured__scope_5_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _30__95assertThisInitialized(self);
  };

  var _30__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2f__95getPrototypeOf = function (o) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    __captured__scope_5_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5_[3](o);
  };

  var _39__95typeof = function (obj) {
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

  var _2F__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2o__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    if (call && (__captured__scope_A_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3A__95assertThisInitialized(self);
  };

  var _3A__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2p__95getPrototypeOf = function (o) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    __captured__scope_A_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A_[3](o);
  };

  var _n_Op = function (name, active) {
    var __captured__scope_A_ = __scope_0_main[9] || __get_scope_binding_0_get_95scope_95binding(9);

    var _this;

    _2F__95classCallCheck(this, _n_Op);

    _this = _2o__95possibleConstructorReturn(this, __captured__scope_A_[3](_n_Op).call(this, null, name, name));
    _this.active = active;
    return _this;
  };

  var _1v_ = function (token) {};

  var _1w_ = function () {
    return new _n_Op(this.name, this.active);
  };

  var _c_Contract = function (name) {
    var __captured__scope_5_ = __scope_0_main[4] || __get_scope_binding_0_get_95scope_95binding(4);

    _2A__95classCallCheck(this, _c_Contract);

    return _2e__95possibleConstructorReturn(this, __captured__scope_5_[3](_c_Contract).call(this, "point", "", name));
  };

  var _1n_ = function (token, link) {
    if (link.to == this.key) {
      return this.findLinksOutOf(null)[0];
    }
  };

  var _1o_ = function (token) {
    var link = token.link;
    var inLinks = this.findLinksInto();
    var outLinks = this.findLinksOutOf();
    var nextLink = outLinks[0];
    var nextNode = this.graph.findNodeByKey(nextLink.to); // First/second contraction

    if (nextNode instanceof _c_Contract || nextNode instanceof _e_Atom) {
      inLinks.map(function (l) {
        return l.changeTo(nextNode.key, "_");
      });
      nextLink.delete();
      this.delete();
    } else if (nextNode instanceof _n_Op) {
      var term = new _W_Term().addToGroup(this.group);
      var copy = nextNode.copy().addToGroup(term);
      var outputs = nextNode.findNodesOutOf(); // clean up here

      var opLinks = nextNode.findLinksOutOf();

      var auxs = _c_Contract.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);

      link.changeTo(copy.key, "_");

      if (opLinks.length > 0) {
        opLinks[0].changeFrom(auxs[0].key, "_");
        opLinks[1].changeFrom(auxs[1].key, "_");
      }

      term.set(copy, auxs);
    }

    token.rewriteFlag = _E_Flag.SEARCH;
    return link;
  };

  var _1p_ = function () {
    return new _c_Contract(this.name);
  };

  var _1q_ = function (level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _1r_ = function (cs, inputs, originalGroup, op) {
    var c;
    var from;
    var to;
    var cList = [];
    var group = new _1e_Group();

    for (var n = 0; n < cs; n++) {
      c = new _c_Contract().addToGroup(group);
      cList.push(c);
      if (inputs.length == 0) // maybe this needs to be "more elegant"
        new _U_Link(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
    }

    if (cList.length > 0) {
      for (var i = 0; i < inputs.length; i++) {
        from = inputs[i];
        to = cList[i % cs];
        new _U_Link(from.key, to.key, "_", "_").addToGroup(group);
      }
    }

    group.addToGroup(originalGroup);
    return cList;
  };

  var _2r__95typeof = function (obj) {
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

  var _26__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2U__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    if (call && (__captured__scope_2_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _2s__95assertThisInitialized(self);
  };

  var _2s__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2V__95getPrototypeOf = function (o) {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    __captured__scope_2_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2_[3](o);
  };

  var _R_Start = function () {
    var __captured__scope_2_ = __scope_0_main[1] || __get_scope_binding_0_get_95scope_95binding(1);

    _26__95classCallCheck(this, _R_Start);

    return _2U__95possibleConstructorReturn(this, __captured__scope_2_[3](_R_Start).call(this, "point", ""));
  };

  var _1C_ = function (token) {
    //if (token.link == null && token.dataStack.last() == CompData.PROMPT) {
    token.forward = true;
    return this.findLinksOutOf(null)[0]; //}
    //else
    //return null;
  };

  var _1D_ = function () {
    return new _R_Start();
  };

  var _1E_ = function (level) {
    return level + this.key + '[shape=' + this.shape + '];';
  };

  var _33__95typeof = function (obj) {
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

  var _2C__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2i__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    if (call && (__captured__scope_7_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _34__95assertThisInitialized(self);
  };

  var _34__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2j__95getPrototypeOf = function (o) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    __captured__scope_7_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7_[3](o);
  };

  var _g_IntOp = function (n) {
    var __captured__scope_7_ = __scope_0_main[6] || __get_scope_binding_0_get_95scope_95binding(6);

    _2C__95classCallCheck(this, _g_IntOp);

    return _2i__95possibleConstructorReturn(this, __captured__scope_7_[3](_g_IntOp).call(this, n, false));
  };

  var _35__95typeof = function (obj) {
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

  var _2D__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2k__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    if (call && (__captured__scope_8_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _36__95assertThisInitialized(self);
  };

  var _36__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2l__95getPrototypeOf = function (o) {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    __captured__scope_8_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8_[3](o);
  };

  var _j_PlusOp = function () {
    var __captured__scope_8_ = __scope_0_main[7] || __get_scope_binding_0_get_95scope_95binding(7);

    _2D__95classCallCheck(this, _j_PlusOp);

    return _2k__95possibleConstructorReturn(this, __captured__scope_8_[3](_j_PlusOp).call(this, "+", true));
  };

  var _1x_ = function () {
    return new _j_PlusOp();
  };

  var _1y_ = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum + _this.graph.findNodeByKey(x.to).name;
    }, 0);
    var newNode = new _g_IntOp(n, false).addToGroup(this.group);
    var newLink = new _U_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _E_Flag.SEARCH;
    return newLink;
  };

  var _37__95typeof = function (obj) {
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

  var _2E__95classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2m__95possibleConstructorReturn = function (self, call) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    if (call && (__captured__scope_9_[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _38__95assertThisInitialized(self);
  };

  var _38__95assertThisInitialized = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _2n__95getPrototypeOf = function (o) {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    __captured__scope_9_[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9_[3](o);
  };

  var _l_TimesOp = function () {
    var __captured__scope_9_ = __scope_0_main[8] || __get_scope_binding_0_get_95scope_95binding(8);

    _2E__95classCallCheck(this, _l_TimesOp);

    return _2m__95possibleConstructorReturn(this, __captured__scope_9_[3](_l_TimesOp).call(this, "*", true));
  };

  var _1z_ = function () {
    return new _l_TimesOp();
  };

  var _20_ = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum * _this.graph.findNodeByKey(x.to).name;
    }, 1);
    var newNode = new _g_IntOp(n, false).addToGroup(this.group);
    var newLink = new _U_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _E_Flag.SEARCH;
    return newLink;
  };

  var _1_GoIMachine = function () {
    _I__95classCallCheck(this, _1_GoIMachine);

    this.setMachine(new _J_Graph(), new _L_MachineToken(), 0);
  };

  var _2_ = _1_GoIMachine.prototype;

  var _3_ = function (graphSet, tokenSet, countSet) {
    var __captured__scope_1_ = __scope_0_main[0] || __get_scope_binding_0_get_95scope_95binding(0);

    this.graph = graphSet;
    __captured__scope_1_[0] = this.graph;
    this.token = tokenSet;
    this.count = countSet;
  };

  var _4_ = function (source) {
    var lexer = new _N_Lexer(source + '\0');
    var parser = new _P_Parser(lexer);
    var ast = parser.parse();
    this.count = 0;
    this.graph.clear();
    var start = new _R_Start().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child);
    var link = new _U_Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
    this.token.reset(link);
  };

  var _5_ = function (ast, group) {
    var graph = this.graph;
    var term = new _W_Term().addToGroup(group); // VARIABLES & ATOMS

    if (ast instanceof _Z_Reference) {
      var auxs = [];

      for (var i = 0; i < ast.ctx.length; i++) {
        var c = new _c_Contract().addToGroup(term);
        auxs.push(c);
        if (ast.ctx[i].name == ast.name) var prin = c;
      }

      term.set(prin, auxs); // BINDINGS & REFERENCES
    } else if (ast instanceof _Z_Reference || ast instanceof _Z_Reference) {
      var body = this.toGraph(ast.body, term).addToGroup(term);
      var param = this.toGraph(ast.param, term).addToGroup(term);
      var auxs = body.auxs;
      var auxNode = auxs[0];
      auxs.splice(0, 1);
      auxs = auxs.concat(param.auxs);

      if (ast instanceof _Z_Reference) {
        var atomNode = new _e_Atom("a").addToGroup(param);
        new _U_Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
        param.prin = atomNode;
      }

      new _U_Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
      auxs = _c_Contract.createDNet(ast.ctx.length, auxs, term);
      term.set(body.prin, auxs); // OPERATIONS
    } else if (ast instanceof _Z_Reference) {
      var op = this.toOp(ast.name, ast.active).addToGroup(term);
      var auxs = [];
      var next;

      for (var i = 0; i < ast.type; i++) {
        next = this.toGraph(ast.eas[i], term).addToGroup(term);
        new _U_Link(op.key, next.prin.key, "_", "_").addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      auxs = _c_Contract.createDNet(ast.ctx.length, auxs, term, op);
      term.set(op, auxs);
    }

    return term;
  };

  var _6_ = function (name, active) {
    if (Number.isInteger(parseInt(name))) {
      return new _g_IntOp(name);
    } else if (name == "+") {
      return new _j_PlusOp();
    } else if (name == "*") {
      return new _l_TimesOp();
    } else {
      return new _n_Op(name, active);
    }
  };

  var _7_ = function () {
    // TODO
    // Loop through all links in the graph
    // Perform quotiening rules
    return null;
  };

  var _8_ = function (graphTxt, linkTxt, flagTxt) {
    if (!finished) {
      this.count++;
      var node = this.graph.findNodeByKey(this.token.link.to);
      var nextLink;

      if (this.token.rewriteFlag == _E_Flag.REWRITE) {
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

  var _9_ = function (graphTxt, linkTxt, flagTxt) {
    graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
    linkTxt.val(this.token.link + '\n' + linkTxt.val());
    flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
  };

  var _A_ = function (token) {
    // this needs cleaning up!
    var link = token.link;

    if (token.rewriteFlag == _E_Flag.SEARCH) {
      var to = this.graph.findNodeByKey(link.to);
      var outlinks = to.findLinksOutOf();

      if (to instanceof _e_Atom) {
        token.rewriteFlag = _E_Flag.RETURN;
        return link;
      } else if (to instanceof _n_Op) {
        if (outlinks.length == 0) {
          if (to.active) {
            token.rewriteFlag = _E_Flag.REWRITE;
          } else {
            token.rewriteFlag = _E_Flag.RETURN;
          }

          return link;
        } else {
          return outlinks[0];
        }
      } else if (to instanceof _c_Contract) {
        token.rewriteFlag = _E_Flag.REWRITE;
        return link;
      }
    } else if (token.rewriteFlag == _E_Flag.RETURN) {
      var from = this.graph.findNodeByKey(link.from);
      var outlinks = from.findLinksOutOf();

      if (this.doneVisiting(link, outlinks)) {
        // HACKING
        if (from.active) {
          token.rewriteFlag = _E_Flag.REWRITE;
          return from.findLinksInto()[0];
        } else {
          token.rewriteFlag = _E_Flag.RETURN;
          return from.findLinksInto()[0];
        }
      } else {
        token.rewriteFlag = _E_Flag.SEARCH;
        var j = this.findJ(link, outlinks);
        return outlinks[j];
      }
    }

    return link;
  };

  var _B_ = function (link, links) {
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

  var _C_ = function (link, list) {
    for (var j = 0; j < list.length; j++) {
      if (!list[j].visited && list[j] != link) return j;
    }

    return null;
  };

  var __constructor = function () {};

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1F_, _$2_Object_46defineProperty(_T_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1G_, _$2_Object_46defineProperty(_T_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1H_, _$2_Object_46defineProperty(_T_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1I_, _$2_Object_46defineProperty(_T_, "findLinksConnected", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1J_, _$2_Object_46defineProperty(_T_, "findLinksInto", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1K_, _$2_Object_46defineProperty(_T_, "findLinksOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1L_, _$2_Object_46defineProperty(_T_, "findNodesOutOf", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1M_, _$2_Object_46defineProperty(_T_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1N_, _$2_Object_46defineProperty(_T_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1O_, _$2_Object_46defineProperty(_T_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1P_, _$2_Object_46defineProperty(_T_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Q_, _$2_Object_46defineProperty(_T_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _Y_ = (__constructor.prototype = _T_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1e_Group, _$2_Object_46defineProperty(_Y_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1f_, _$2_Object_46defineProperty(_Y_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1g_, _$2_Object_46defineProperty(_Y_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1h_, _$2_Object_46defineProperty(_Y_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1i_, _$2_Object_46defineProperty(_Y_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1j_, _$2_Object_46defineProperty(_Y_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1k_, _$2_Object_46defineProperty(_Y_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1l_, _$2_Object_46defineProperty(_Y_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _1e_Group.prototype = _Y_;

  _$3_Object_46setPrototypeOf(_1e_Group, _1R_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _o_, _$2_Object_46defineProperty(_K_, "clear", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _p_, _$2_Object_46defineProperty(_K_, "addNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _q_, _$2_Object_46defineProperty(_K_, "removeNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _r_, _$2_Object_46defineProperty(_K_, "findNodeByKey", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _s_, _$2_Object_46defineProperty(_K_, "addLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _t_, _$2_Object_46defineProperty(_K_, "removeLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _u_, _$2_Object_46defineProperty(_K_, "findLinkByKeys", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _v_, _$2_Object_46defineProperty(_K_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  var _E_Flag = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _w_, _$2_Object_46defineProperty(_L_MachineToken, "RewriteFlag", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _x_, _$2_Object_46defineProperty(_M_, "setLink", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _y_, _$2_Object_46defineProperty(_M_, "reset", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _3_, _$2_Object_46defineProperty(_2_, "setMachine", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _z_, _$2_Object_46defineProperty(_O_, "_nextChar", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _2G_Token.EOF = "EOF";
  _2G_Token.LCID = "LCID";
  _2G_Token.LPAREN = "LPAREN";
  _2G_Token.RPAREN = "RPAREN";
  _2G_Token.SEMIC = "SEMIC";
  _2G_Token.BIND = "BIND";
  _2G_Token.NEW = "NEW";
  _2G_Token.DEF = "DEF";
  _2G_Token.IN = "IN";
  _2G_Token.PLUS = "PLUS";
  _2G_Token.TIMES = "TIMES";
  _2G_Token.INT = "INT";
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _10_, _$2_Object_46defineProperty(_O_, "_nextToken", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _11_, _$2_Object_46defineProperty(_O_, "token", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _12_, _$2_Object_46defineProperty(_O_, "lookahead", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _13_, _$2_Object_46defineProperty(_O_, "fail", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _14_, _$2_Object_46defineProperty(_O_, "next", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _15_, _$2_Object_46defineProperty(_O_, "match", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _16_, _$2_Object_46defineProperty(_O_, "skip", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _17_, _$2_Object_46defineProperty(_Q_, "parse", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _a_ = (__constructor.prototype = _b_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _Z_Reference, _$2_Object_46defineProperty(_a_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _Z_Reference.prototype = _a_;

  _$3_Object_46setPrototypeOf(_Z_Reference, _1m_Term);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _18_, _$2_Object_46defineProperty(_Q_, "term", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _19_, _$2_Object_46defineProperty(_Q_, "atom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1A_, _$2_Object_46defineProperty(_Q_, "operation", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1B_, _$2_Object_46defineProperty(_Q_, "gatherEAs", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _S_ = (__constructor.prototype = _T_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _R_Start, _$2_Object_46defineProperty(_S_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1C_, _$2_Object_46defineProperty(_S_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1D_, _$2_Object_46defineProperty(_S_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1E_, _$2_Object_46defineProperty(_S_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _R_Start.prototype = _S_;

  _$3_Object_46setPrototypeOf(_R_Start, _1R_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1S_, _$2_Object_46defineProperty(_V_, "addToNode", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1T_, _$2_Object_46defineProperty(_V_, "addToGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1U_, _$2_Object_46defineProperty(_V_, "addToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1V_, _$2_Object_46defineProperty(_V_, "changeToGroup", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1W_, _$2_Object_46defineProperty(_V_, "changeFrom", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1X_, _$2_Object_46defineProperty(_V_, "changeTo", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Y_, _$2_Object_46defineProperty(_V_, "focus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1Z_, _$2_Object_46defineProperty(_V_, "clearFocus", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1a_, _$2_Object_46defineProperty(_V_, "delete", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1b_, _$2_Object_46defineProperty(_V_, "toString", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1c_, _$2_Object_46defineProperty(_V_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _4_, _$2_Object_46defineProperty(_2_, "compile", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _X_ = (__constructor.prototype = _Y_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _W_Term, _$2_Object_46defineProperty(_X_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1d_, _$2_Object_46defineProperty(_X_, "set", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _W_Term.prototype = _X_;

  _$3_Object_46setPrototypeOf(_W_Term, _1e_Group);

  var _d_ = (__constructor.prototype = _T_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _c_Contract, _$2_Object_46defineProperty(_d_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1n_, _$2_Object_46defineProperty(_d_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _f_ = (__constructor.prototype = _T_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _e_Atom, _$2_Object_46defineProperty(_f_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1s_, _$2_Object_46defineProperty(_f_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1t_, _$2_Object_46defineProperty(_f_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1u_, _$2_Object_46defineProperty(_f_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _e_Atom.prototype = _f_;

  _$3_Object_46setPrototypeOf(_e_Atom, _1R_Node);

  var _i_ = (__constructor.prototype = _T_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _n_Op, _$2_Object_46defineProperty(_i_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1v_, _$2_Object_46defineProperty(_i_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1w_, _$2_Object_46defineProperty(_i_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _n_Op.prototype = _i_;

  _$3_Object_46setPrototypeOf(_n_Op, _1R_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1o_, _$2_Object_46defineProperty(_d_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1p_, _$2_Object_46defineProperty(_d_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1q_, _$2_Object_46defineProperty(_d_, "draw", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _c_Contract.prototype = _d_;
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1r_, _$2_Object_46defineProperty(_c_Contract, "createDNet", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  _$3_Object_46setPrototypeOf(_c_Contract, _1R_Node);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _5_, _$2_Object_46defineProperty(_2_, "toGraph", $$0_enumerable_58false_44configurable_58true_44writable_58true);

  var _h_ = (__constructor.prototype = _i_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _g_IntOp, _$2_Object_46defineProperty(_h_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _g_IntOp.prototype = _h_;

  _$3_Object_46setPrototypeOf(_g_IntOp, _n_Op);

  var _k_ = (__constructor.prototype = _i_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _j_PlusOp, _$2_Object_46defineProperty(_k_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1x_, _$2_Object_46defineProperty(_k_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1y_, _$2_Object_46defineProperty(_k_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _j_PlusOp.prototype = _k_;

  _$3_Object_46setPrototypeOf(_j_PlusOp, _n_Op);

  var _m_ = (__constructor.prototype = _i_, new __constructor());

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _l_TimesOp, _$2_Object_46defineProperty(_m_, "constructor", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _1z_, _$2_Object_46defineProperty(_m_, "copy", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _20_, _$2_Object_46defineProperty(_m_, "rewrite", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _l_TimesOp.prototype = _m_;

  _$3_Object_46setPrototypeOf(_l_TimesOp, _n_Op);

  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _6_, _$2_Object_46defineProperty(_2_, "toOp", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _7_, _$2_Object_46defineProperty(_2_, "quotieningRules", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _8_, _$2_Object_46defineProperty(_2_, "transition", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _9_, _$2_Object_46defineProperty(_2_, "printHistory", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _A_, _$2_Object_46defineProperty(_2_, "pass", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _B_, _$2_Object_46defineProperty(_2_, "doneVisiting", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  $$0_enumerable_58false_44configurable_58true_44writable_58true.value = _C_, _$2_Object_46defineProperty(_2_, "findJ", $$0_enumerable_58false_44configurable_58true_44writable_58true);
  _$0_global.main = _1_GoIMachine;
}).call(this);