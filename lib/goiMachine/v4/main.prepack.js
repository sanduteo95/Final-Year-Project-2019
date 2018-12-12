(function () {
  var __get_scope_binding_0 = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [_3e, _3e, _36, _36];
        break;

      case 1:
        __captured = [_3i, _3i, _3C, _3C];
        break;

      case 2:
        __captured = [_3k, _3k, _3E, _3E];
        break;

      case 3:
        __captured = [_3m, _3m, _3G, _3G];
        break;

      case 4:
        __captured = [_3o, _3o, _3I, _3I];
        break;

      case 5:
        __captured = [_3q, _3q, _3K, _3K];
        break;

      case 6:
        __captured = [_3s, _3s, _3M, _3M];
        break;

      case 7:
        __captured = [_3u, _3u, _3O, _3O];
        break;

      case 8:
        __captured = [_3w, _3w, _3Q, _3Q];
        break;

      case 9:
        __captured = [_3y, _3y, _3S, _3S];
        break;

      case 10:
        __captured = [_40, _40, _3U, _3U];
        break;

      case 11:
        __captured = [_42, _42, _3W, _3W];
        break;

      case 12:
        __captured = [_44, _44, _3Y, _3Y];
        break;

      case 13:
        __captured = [_46, _46, _3a, _3a];
        break;

      case 14:
        __captured = [_48, _48, _3c, _3c];
        break;

      case 15:
        __captured = [_3g, _3g, _39, _39, _3A, _3A];
        break;
    }

    __scope_0[__selector] = __captured;
    return __captured;
  };

  var __scope_0 = new Array(16);

  var $$0 = {
    enumerable: false,
    configurable: true,
    writable: true
  };
  var $$1 = {
    enumerable: false,
    configurable: true,
    writable: false
  };

  var _$0 = this;

  var _$1 = _$0.Object;
  var _$2 = _$1.defineProperty;
  var _$3 = _$1.setPrototypeOf;

  var _J = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2Q = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _M = function () {
    _2Q(this, _M);

    this.link = null;
    this.rewriteFlag = null;
    this.reset();
  };

  var _N = _M.prototype;

  var _1B = function () {
    return _F;
  };

  var _1C = function (link) {
    if (this.link != null) this.link.clearFocus();
    this.link = link;

    if (this.link != null) {
      this.link.focus("red");
    }
  };

  var _1D = function (link) {
    this.setLink(link);
    this.rewriteFlag = _F.SEARCH;
  };

  var _3k = function (obj) {
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

  var _3D = function (self, call) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    if (call && (__captured__scope_3[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3l(self);
  };

  var _3l = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3E = function (o) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    __captured__scope_3[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_3[3](o);
  };

  var _2X = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _22 = function (ctx) {
    _2X(this, _22);

    this.ctx = ctx;
  };

  var _d = _22.prototype;

  var _b = function (ctx, id, param, body) {
    var __captured__scope_3 = __scope_0[2] || __get_scope_binding_0(2);

    var _this5;

    _2X(this, _b);

    _this5 = _3D(this, __captured__scope_3[3](_b).call(this, ctx));
    _this5.id = id;
    _this5.param = param;
    _this5.body = body;
    return _this5;
  };

  var _2R = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _2k = function (type, value, pred) {
    _3d(this, _2k);

    this.type = type;
    this.value = value;
    this.pred = pred;
  };

  var _O = function (input) {
    _2R(this, _O);

    this._input = input;
    this._index = 0;
    this._token = undefined;

    this._nextToken();
  };

  var _Q = _O.prototype;

  var _1E = function () {
    if (this._index >= this._input.length) {
      return '\0';
    }

    return this._input[this._index++];
  };

  var _1F = function () {
    var c;

    do {
      c = this._nextChar();
    } while (/\s/.test(c));

    switch (c) {
      case ',':
        this._token = new _2k(_2k.COMMA);
        break;

      case ';':
        this._token = new _2k(_2k.SEMIC);
        break;

      case '(':
        this._token = new _2k(_2k.LPAREN);
        break;

      case ')':
        this._token = new _2k(_2k.RPAREN);
        break;

      case '\0':
        this._token = new _2k(_2k.EOF);
        break;

      case '=':
        this._token = new _2k(_2k.DEF);
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
          if (str == "bind") this._token = new _2k(_2k.BIND);else if (str == "in") this._token = new _2k(_2k.IN);else if (str == "new") this._token = new _2k(_2k.NEW);else if (str == "PLUS") this._token = new _2k(_2k.PLUS);else if (str == "TIMES") this._token = new _2k(_2k.TIMES);else if (str == "AND") this._token = new _2k(_2k.AND);else if (str == "OR") this._token = new _2k(_2k.OR);else if (str == "NOT") this._token = new _2k(_2k.NOT);else if (str == "EQUALS") this._token = new _2k(_2k.EQUALS);else if (str == "IF") this._token = new _2k(_2k.IF);else if (str == "TRUE") this._token = new _2k(_2k.TRUE, true);else if (str == "FALSE") this._token = new _2k(_2k.FALSE, false);else this._token = new _2k(_2k.LCID, str);
        } // text for numbers
        else if (/[0-9]/.test(c)) {
            var _str = '';

            do {
              _str += c;
              c = this._nextChar();
            } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


            this._index--;
            this._token = new _2k(_2k.INT, parseInt(_str));
          } else {
            this.fail();
          }

    }
  };

  var _1G = function (type) {
    if (!type) {
      return this._token.value;
    }

    var token = this._token;
    this.match(type);
    return token.value;
  };

  var _1H = function () {
    return this._token.value;
  };

  var _1I = function () {
    return this._token;
  };

  var _1J = function () {
    return this._token.type;
  };

  var _1K = function () {
    throw new Error("Unexpected token at offset ".concat(this._index));
  };

  var _1L = function (type) {
    return this._token.type == type;
  };

  var _1M = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return;
    }

    console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
    throw new Error('Parse Error');
  };

  var _1N = function (type) {
    if (this.next(type)) {
      this._nextToken();

      return true;
    }

    return false;
  };

  var _2S = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _R = function (lexer) {
    _2S(this, _R);

    this.lexer = lexer;
  };

  var _S = _R.prototype;

  var _1O = function () {
    var result = this.term([]); // make sure we consumed all the program, otherwise there was a syntax error

    this.lexer.match(_2k.EOF);
    return result;
  };

  var _1P = function (ctx, thunk) {
    if (thunk) {
      var inner = this.term(ctx);
      return new _b(ctx, inner);
    } else {
      if (this.lexer.skip(_2k.BIND)) {
        var id = this.term(ctx);
        id.ctx = [id].concat(id.ctx);
        this.lexer.match(_2k.DEF);
        var P = this.term(ctx);
        this.lexer.match(_2k.IN);
        var B = this.term([id].concat(ctx));
        return new _b(ctx, id, P, B);
      } else if (this.lexer.skip(_2k.NEW)) {
        var _id = this.term(ctx);

        _id.ctx = [_id].concat(_id.ctx);
        this.lexer.match(_2k.DEF);

        var _P = this.term(ctx);

        this.lexer.match(_2k.IN);

        var _B = this.term([_id].concat(ctx));

        return new _b(ctx, _id, _P, _B);
      } else {
        return this.atom(ctx);
      }
    }
  };

  var _1Q = function (ctx) {
    if (this.lexer.skip(_2k.LPAREN)) {
      var term = this.term(ctx);
      this.lexer.match(_2k.RPAREN);
      return term;
    } else if (this.lexer.next(_2k.LCID)) {
      var id = this.lexer.token(_2k.LCID);
      return new _b(ctx, id);
    } else {
      return this.operation(ctx);
    }
  };

  var _1R = function (ctx) {
    var name;
    var sig;
    var active;
    var eas = [];
    var das = [];
    var token = this.lexer.lookaheadType();

    switch (token) {
      case _2k.PLUS:
        name = "+";
        sig = [2, 0];
        active = true;
        break;

      case _2k.TIMES:
        name = "*";
        sig = [2, 0];
        active = true;
        break;

      case _2k.AND:
        name = "∧";
        sig = [2, 0];
        active = true;
        break;

      case _2k.OR:
        name = "∨";
        sig = [2, 0];
        active = true;
        break;

      case _2k.NOT:
        name = "¬";
        sig = [1, 0];
        active = true;
        break;

      case _2k.EQUALS:
        name = "==";
        sig = [2, 0];
        active = true;
        break;

      case _2k.IF:
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
      this.lexer.match(_2k.LPAREN);
      eas = this.gatherArgs(ctx, sig[0], false);
      if (sig[1] == 0) this.lexer.match(_2k.RPAREN);
    }

    if (sig[1] > 0) {
      if (sig[0] == 0) this.lexer.match(_2k.LPAREN);
      this.lexer.match(_2k.SEMIC);
      das = this.gatherArgs(ctx, sig[1], true);
      this.lexer.match(_2k.RPAREN);
    }

    return new _b(ctx, sig, name, active, eas, das);
  };

  var _1S = function (ctx, type, thunk) {
    var args = [];

    for (var i = 0; i < type; i++) {
      var term = this.term(ctx, thunk);
      args.push(term);

      if (this.lexer.next(_2k.COMMA)) {
        this.lexer.match(_2k.COMMA);
      }
    }

    return args;
  };

  var _2V = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _W = function (from, to, fromPort, toPort, colour) {
    _2V(this, _W);

    this.from = from;
    this.to = to;
    this.fromPort = fromPort;
    this.toPort = toPort;
    this.visited = false; // HACKING

    this.reverse = false;
    this.colour = colour;
    this.penWidth = null;
    this.addToGraph(_1r.mainGraph); // cheating

    if (colour != "lightgrey") {
      // cheating
      this.addToNode(); // cheating
    }
  };

  var _X = _W.prototype;

  var _1h = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1i = function (graph) {
    if (graph != null) graph.addLink(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1j = function (group) {
    group.addLink(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1k = function (group) {
    this.group.removeLink(this);
    this.addToGroup(group);
    return this;
  };

  var _1l = function (key, port) {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    this.from = key;
    this.fromPort = port;
    fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.push(this);
  };

  var _1m = function (key, port) {
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.to = key;
    this.toPort = port;
    toNode = this.graph.findNodeByKey(this.to);
    toNode.links.push(this);
  };

  var _1n = function (colour) {
    this.colour = colour;
    this.penWidth = "20";
  };

  var _1o = function () {
    this.colour = null;
    this.penWidth = null;
    this.visited = true; // HACKING
  };

  var _1p = function () {
    var fromNode = this.graph.findNodeByKey(this.from);
    fromNode.links.splice(fromNode.links.indexOf(this), 1);
    var toNode = this.graph.findNodeByKey(this.to);
    toNode.links.splice(toNode.links.indexOf(this), 1);
    this.group.removeLink(this);
    this.graph.removeLink(this);
  };

  var _1q = function () {
    return this.from + "->" + this.to;
  };

  var _2P = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3g = function (obj) {
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

  var _37 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _38 = function (self, call) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (call && (__captured__scope_G[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3h(self);
  };

  var _3h = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3A = function (target, property, receiver) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    if (typeof Reflect !== "undefined" && Reflect.get) {
      __captured__scope_G[5] = Reflect.get;
    } else {
      __captured__scope_G[5] = function _get(target, property, receiver) {
        var base = _4A(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return __captured__scope_G[5](target, property, receiver || target);
  };

  var _4A = function (object, property) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = __captured__scope_G[3](object);
      if (object === null) break;
    }

    return object;
  };

  var _39 = function (o) {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    __captured__scope_G[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_G[3](o);
  };

  var _34 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _1g = function (shape, text, name) {
    _34(this, _1g);

    this.key = null;
    this.shape = shape;
    this.text = text;
    this.name = name; // identifier name or constant name if any

    this.graph = null;
    this.group = null;
    this.width = 0.3;
    this.height = 0.3;
    this.links = [];
    this.addToGraph(_2T.mainGraph); // cheating!
  };

  var _V = _1g.prototype;

  var _1V = function (graph) {
    if (graph != null) graph.addNode(this);
    this.graph = graph;
    return this; // to provide chain operation
  };

  var _1W = function (group) {
    group.addNode(this);
    this.group = group;
    return this; // to provide chain operation
  };

  var _1X = function (group) {
    this.group.removeNode(this);
    this.addToGroup(group);
    return this;
  };

  var _1Y = function () {
    return this.links;
  };

  var _1Z = function () {
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

  var _1a = function () {
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

  var _1b = function () {
    var _this = this;

    var links = this.findLinksOutOf();
    var nodeKeys = links.map(function (l) {
      return l.to;
    });
    return nodeKeys.map(function (k) {
      return _this.graph.findNodeByKey(k);
    });
  };

  var _1c = function (graph) {
    var newNode = new _1g(this.shape, this.text, this.name).addToGraph(graph);
    newNode.width = this.width;
    newNode.height = this.height;
    return newNode;
  };

  var _1d = function () {
    this.group.removeNode(this);
    this.graph.removeNode(this);
  };

  var _1e = function (token, link) {
    return link;
  };

  var _1f = function (token, nextLink) {
    token.rewrite = false;
    return nextLink;
  };

  var _1v = function () {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    var _this;

    _37(this, _1v);

    _this = _38(this, __captured__scope_G[3](_1v).call(this, null, null, null)); // shape, text, name

    _this.nodes = [];
    _this.links = []; // for copying

    return _this;
  };

  var _1w = function (node) {
    this.nodes.push(node);
  };

  var _1x = function (node) {
    return this.nodes.splice(this.nodes.indexOf(node), 1);
  };

  var _1y = function (link) {
    this.links.push(link);
  };

  var _1z = function (link) {
    var i = this.links.indexOf(link);
    if (i != -1) this.links.splice(i, 1);
  };

  var _20 = function () {
    var __captured__scope_G = __scope_0[15] || __get_scope_binding_0(15);

    var _arr = Array.from(this.nodes);

    for (var _i = 0; _i < _arr.length; _i++) {
      var node = _arr[_i];
      node.delete();
    }

    __captured__scope_G[5](__captured__scope_G[3](_1v.prototype), "delete", this).call(this);
  };

  var _21 = function () {};

  var _K = function () {
    _2P(this, _K);

    this.clear();
  };

  var _L = _K.prototype;

  var _14 = function () {
    this.key = 0;
    this.linkKey = 0;
    this.allNodes = new Map(); // for efficiency searching

    this.allLinks = []; // for printing ONLY

    this.child = new _1v();
  };

  var _15 = function (node) {
    node.key = 'nd' + this.key;
    this.allNodes.set(node.key, node);
    this.key++;
  };

  var _16 = function (node) {
    var _arr = Array.from(node.findLinksConnected());

    for (var _i = 0; _i < _arr.length; _i++) {
      var link = _arr[_i];
      link.delete();
    }

    return this.allNodes.delete(node.key);
  };

  var _17 = function (key) {
    return this.allNodes.get(key);
  };

  var _18 = function (link) {
    this.allLinks.push(link);
  };

  var _19 = function (link) {
    this.allLinks.splice(this.allLinks.indexOf(link), 1);
  };

  var _1A = function (from, to) {
    var fromNode = this.findNodeByKey(from);
    return fromNode.findLinksOutOf().filter(function (x) {
      return x.to == to;
    })[0];
  };

  var _3i = function (obj) {
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

  var _2W = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3B = function (self, call) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    if (call && (__captured__scope_2[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3j(self);
  };

  var _3j = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3C = function (o) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    __captured__scope_2[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_2[3](o);
  };

  var _Y = function (prin, auxs) {
    var __captured__scope_2 = __scope_0[1] || __get_scope_binding_0(1);

    var _this;

    _2W(this, _Y);

    _this = _3B(this, __captured__scope_2[3](_Y).call(this));
    _this.prin = null;

    _this.set(prin, auxs);

    _this.boxed = false;
    return _this;
  };

  var _1s = function (prin, auxs) {
    this.prin = prin;
    this.auxs = auxs;
    return this;
  };

  var _1t = function () {
    this.boxed = true;
    return this.prin;
  };

  var _1u = function () {
    this.boxed = false;
    return this.prin;
  };

  var _3o = function (obj) {
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

  var _2Z = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3H = function (self, call) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    if (call && (__captured__scope_5[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3p(self);
  };

  var _3p = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3I = function (o) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    __captured__scope_5[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_5[3](o);
  };

  var _h = function (name) {
    var __captured__scope_5 = __scope_0[4] || __get_scope_binding_0(4);

    var _this;

    _2Z(this, _h);

    _this = _3H(this, __captured__scope_5[3](_h).call(this, "circle", "", name));
    _this.height = 0.1;
    _this.width = 0.1;
    return _this;
  };

  var _3m = function (obj) {
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

  var _2Y = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3F = function (self, call) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    if (call && (__captured__scope_4[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3n(self);
  };

  var _3n = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3G = function (o) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    __captured__scope_4[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_4[3](o);
  };

  var _48 = function (obj) {
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

  var _2j = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3b = function (self, call) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    if (call && (__captured__scope_F[1](call) === "object" || typeof call === "function")) {
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

  var _3c = function (o) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    __captured__scope_F[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_F[3](o);
  };

  var _13 = function (name, active) {
    var __captured__scope_F = __scope_0[14] || __get_scope_binding_0(14);

    var _this;

    _2j(this, _13);

    _this = _3b(this, __captured__scope_F[3](_13).call(this, null, name, name));
    _this.active = active;
    return _this;
  };

  var _27 = function (token) {};

  var _28 = function () {
    return new _13(this.name, this.active);
  };

  var _f = function (name) {
    var __captured__scope_4 = __scope_0[3] || __get_scope_binding_0(3);

    _2Y(this, _f);

    return _3F(this, __captured__scope_4[3](_f).call(this, "point", "", name));
  };

  var _23 = function (token, link) {
    if (link.to == this.key) {
      return this.findLinksOutOf(null)[0];
    }
  };

  var _24 = function (token) {
    var link = token.link;
    var inLinks = this.findLinksInto();
    var outLinks = this.findLinksOutOf();
    var nextLink = outLinks[0];
    var nextNode = this.graph.findNodeByKey(nextLink.to);

    if (nextNode instanceof _f || nextNode instanceof _h) {
      inLinks.map(function (l) {
        return l.changeTo(nextNode.key, "_");
      });
      nextLink.delete();
      this.delete();
    } else if (nextNode instanceof _13) {
      var term = new _Y().addToGroup(this.group);
      var copy = nextNode.copy().addToGroup(term); // clean up here

      var opLinks = nextNode.findLinksOutOf();

      var auxs = _f.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);

      link.changeTo(copy.key, "_");

      for (var i = 0; i < opLinks.length; i++) {
        opLinks[i].changeFrom(auxs[i].key, "_");
      }

      term.set(copy, auxs);
    }

    token.rewriteFlag = _F.SEARCH;
    return link;
  };

  var _25 = function () {
    return new _f(this.name);
  };

  var _26 = function (cs, inputs, originalGroup, op) {
    var c;
    var from;
    var to;
    var cList = [];
    var group = new _1v();

    for (var n = 0; n < cs; n++) {
      c = new _f().addToGroup(group);
      cList.push(c);
      if (inputs.length == 0) // maybe this needs to be "more elegant"
        new _W(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
    }

    if (cList.length > 0) {
      for (var i = 0; i < inputs.length; i++) {
        from = inputs[i];
        to = cList[i % cs];
        new _W(from.key, to.key, "_", "_").addToGroup(group);
      }
    }

    group.addToGroup(originalGroup);
    return cList;
  };

  var _3e = function (obj) {
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

  var _2U = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _35 = function (self, call) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    if (call && (__captured__scope_1[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3f(self);
  };

  var _3f = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _36 = function (o) {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    __captured__scope_1[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_1[3](o);
  };

  var _T = function () {
    var __captured__scope_1 = __scope_0[0] || __get_scope_binding_0(0);

    _2U(this, _T);

    return _35(this, __captured__scope_1[3](_T).call(this, "point", ""));
  };

  var _1T = function (token) {
    return this.findLinksOutOf(null)[0];
  };

  var _1U = function () {
    return new _T();
  };

  var _3q = function (obj) {
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

  var _2a = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3J = function (self, call) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    if (call && (__captured__scope_6[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3r(self);
  };

  var _3r = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3K = function (o) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    __captured__scope_6[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_6[3](o);
  };

  var _k = function (n) {
    var __captured__scope_6 = __scope_0[5] || __get_scope_binding_0(5);

    _2a(this, _k);

    return _3J(this, __captured__scope_6[3](_k).call(this, n, false));
  };

  var _3s = function (obj) {
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

  var _2b = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3L = function (self, call) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    if (call && (__captured__scope_7[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3t(self);
  };

  var _3t = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3M = function (o) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    __captured__scope_7[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_7[3](o);
  };

  var _n = function (b) {
    var __captured__scope_7 = __scope_0[6] || __get_scope_binding_0(6);

    _2b(this, _n);

    b = _n.parseBoolean(b);
    return _3L(this, __captured__scope_7[3](_n).call(this, b, false));
  };

  var _29 = function () {
    return new _n();
  };

  var _2A = function (b) {
    if (b == "false" || b == 0) {
      return false;
    } else {
      return true;
    }
  };

  var _3u = function (obj) {
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

  var _2c = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3N = function (self, call) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    if (call && (__captured__scope_8[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3v(self);
  };

  var _3v = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3O = function (o) {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    __captured__scope_8[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_8[3](o);
  };

  var _p = function () {
    var __captured__scope_8 = __scope_0[7] || __get_scope_binding_0(7);

    _2c(this, _p);

    return _3N(this, __captured__scope_8[3](_p).call(this, "+", true));
  };

  var _2B = function () {
    return new _p();
  };

  var _2C = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum + _this.graph.findNodeByKey(x.to).name;
    }, 0);
    var newNode = new _k(n, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _3w = function (obj) {
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

  var _2d = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3P = function (self, call) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    if (call && (__captured__scope_9[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3x(self);
  };

  var _3x = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3Q = function (o) {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    __captured__scope_9[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_9[3](o);
  };

  var _r = function () {
    var __captured__scope_9 = __scope_0[8] || __get_scope_binding_0(8);

    _2d(this, _r);

    return _3P(this, __captured__scope_9[3](_r).call(this, "*", true));
  };

  var _2D = function () {
    return new _r();
  };

  var _2E = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var n = outLinks.reduce(function (sum, x) {
      return sum * _this.graph.findNodeByKey(x.to).name;
    }, 1);
    var newNode = new _k(n, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _3y = function (obj) {
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

  var _2e = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3R = function (self, call) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    if (call && (__captured__scope_A[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _3z(self);
  };

  var _3z = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3S = function (o) {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    __captured__scope_A[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_A[3](o);
  };

  var _t = function () {
    var __captured__scope_A = __scope_0[9] || __get_scope_binding_0(9);

    _2e(this, _t);

    return _3R(this, __captured__scope_A[3](_t).call(this, "∧", true));
  };

  var _2F = function () {
    return new _t();
  };

  var _2G = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum && _n.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, true);
    var newNode = new _n(b, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _40 = function (obj) {
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

  var _2f = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3T = function (self, call) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    if (call && (__captured__scope_B[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _41(self);
  };

  var _41 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3U = function (o) {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    __captured__scope_B[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_B[3](o);
  };

  var _v = function () {
    var __captured__scope_B = __scope_0[10] || __get_scope_binding_0(10);

    _2f(this, _v);

    return _3T(this, __captured__scope_B[3](_v).call(this, "∨", true));
  };

  var _2H = function () {
    return new _v();
  };

  var _2I = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = outLinks.reduce(function (sum, x) {
      return sum || _n.parseBoolean(_this.graph.findNodeByKey(x.to).name);
    }, false);
    var newNode = new _n(b, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _42 = function (obj) {
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

  var _2g = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3V = function (self, call) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    if (call && (__captured__scope_C[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _43(self);
  };

  var _43 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3W = function (o) {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    __captured__scope_C[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_C[3](o);
  };

  var _x = function () {
    var __captured__scope_C = __scope_0[11] || __get_scope_binding_0(11);

    _2g(this, _x);

    return _3V(this, __captured__scope_C[3](_x).call(this, "¬", true));
  };

  var _2J = function () {
    return new _x();
  };

  var _2K = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var b = !_n.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
    var newNode = new _n(b, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _44 = function (obj) {
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

  var _2h = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3X = function (self, call) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    if (call && (__captured__scope_D[1](call) === "object" || typeof call === "function")) {
      return call;
    }

    return _45(self);
  };

  var _45 = function (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  };

  var _3Y = function (o) {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    __captured__scope_D[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_D[3](o);
  };

  var _z = function () {
    var __captured__scope_D = __scope_0[12] || __get_scope_binding_0(12);

    _2h(this, _z);

    return _3X(this, __captured__scope_D[3](_z).call(this, "==", true));
  };

  var _2L = function () {
    return new _z();
  };

  var _2M = function (token) {
    var _this = this;

    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var left = this.graph.findNodeByKey(outLinks[0].to).name;
    var right = this.graph.findNodeByKey(outLinks[1].to).name;
    var b = left == right;
    var newNode = new _n(b, false).addToGroup(this.group);
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks.map(function (x) {
      return x.delete();
    });
    outLinks.map(function (x) {
      return _this.graph.findNodeByKey(x.to).delete();
    });
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _46 = function (obj) {
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

  var _2i = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var _3Z = function (self, call) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    if (call && (__captured__scope_E[1](call) === "object" || typeof call === "function")) {
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

  var _3a = function (o) {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    __captured__scope_E[3] = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return __captured__scope_E[3](o);
  };

  var _11 = function () {
    var __captured__scope_E = __scope_0[13] || __get_scope_binding_0(13);

    _2i(this, _11);

    return _3Z(this, __captured__scope_E[3](_11).call(this, "if", true));
  };

  var _2N = function () {
    return new _11();
  };

  var _2O = function (token) {
    var inLink = this.findLinksInto()[0];
    var outLinks = this.findLinksOutOf();
    var name = this.graph.findNodeByKey(outLinks[0].to).name;
    var keep;
    var del;

    if (_n.parseBoolean(name)) {
      keep = 1;
      del = 2;
    } else {
      keep = 2;
      del = 1;
    }

    outLinks[del].delete();
    var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
    var newLink = new _W(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
    outLinks[0].delete();
    this.graph.findNodeByKey(outLinks[0].to).delete();
    this.delete();
    token.rewriteFlag = _F.SEARCH;
    return newLink;
  };

  var _1 = function () {
    _J(this, _1);

    this.setMachine(new _K(), new _M(), 0);
  };

  var _2 = _1.prototype;

  var _3 = function (graphSet, tokenSet, countSet) {
    this.graph = graphSet;
    _E.mainGraph = this.graph; // cheating!

    this.token = tokenSet;
    this.count = countSet;
  };

  var _4 = function (source) {
    var lexer = new _O(source + '\0');
    var parser = new _R(lexer);
    var ast = parser.parse();
    this.count = 0;
    this.graph.clear();
    var start = new _T().addToGroup(this.graph.child);
    var term = this.toGraph(ast, this.graph.child, false);
    var link = new _W(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
    this.token.reset(link);
  };

  var _5 = function (ast, group) {
    var graph = this.graph;
    var term = new _Y().addToGroup(group);

    if (ast instanceof _b) {
      term.box();
      ast = ast.inner;
    } // VARIABLES & ATOMS


    if (ast instanceof _b) {
      var auxs = [];

      for (var i = 0; i < ast.ctx.length; i++) {
        var c = new _f().addToGroup(term);
        auxs.push(c);
        if (ast.ctx[i].name == ast.name) var prin = c;
      }

      term.set(prin, auxs); // BINDINGS & REFERENCES
    } else if (ast instanceof _b || ast instanceof _b) {
      var body = this.toGraph(ast.body, term, false).addToGroup(term);
      var param = this.toGraph(ast.param, term, false).addToGroup(term);
      var auxs = body.auxs;
      var auxNode = auxs[0];
      auxs.splice(0, 1);
      auxs = auxs.concat(param.auxs);

      if (ast instanceof _b) {
        var atomNode = new _h("a").addToGroup(param);
        new _W(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
        param.prin = atomNode;
      }

      new _W(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
      auxs = _f.createDNet(ast.ctx.length, auxs, term);
      term.set(body.prin, auxs); // OPERATIONS
    } else if (ast instanceof _b) {
      var op = this.toOp(ast.name, ast.active).addToGroup(term);
      var auxs = [];
      var next;

      for (var i = 0; i < ast.sig[0]; i++) {
        next = this.toGraph(ast.eas[i], term).addToGroup(term);
        new _W(op.key, next.prin.key, "_", "_").addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      for (var i = 0; i < ast.sig[1]; i++) {
        next = this.toGraph(ast.das[i], term).addToGroup(term);
        var link = new _W(op.key, next.prin.key, "_", "_");
        link.visited = true; // hacking

        link.addToGroup(term);
        auxs = auxs.concat(next.auxs);
      }

      auxs = _f.createDNet(ast.ctx.length, auxs, term, op);
      term.set(op, auxs);
    }

    return term;
  };

  var _6 = function (name, active) {
    if (Number.isInteger(parseInt(name))) {
      return new _k(name);
    } else if (name == "true" || name == "false") {
      return new _n(name);
    } else if (name == "+") {
      return new _p();
    } else if (name == "*") {
      return new _r();
    } else if (name == "∧") {
      return new _t();
    } else if (name == "∨") {
      return new _v();
    } else if (name == "¬") {
      return new _x();
    } else if (name == "==") {
      return new _z();
    } else if (name == "if") {
      return new _11();
    } else {
      return new _13(name, active);
    }
  };

  var _7 = function () {
    // TODO
    // Loop through all links in the graph
    // Perform quotiening rules
    return null;
  };

  var _8 = function (graphTxt, linkTxt, flagTxt) {
    if (!finished) {
      this.count++;
      var node = this.graph.findNodeByKey(this.token.link.to);
      var nextLink;

      if (this.token.rewriteFlag == _F.REWRITE) {
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

  var _9 = function (graphTxt, linkTxt, flagTxt) {
    linkTxt.val(this.token.link + '\n' + linkTxt.val());
    flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
  };

  var _A = function (token) {
    // this needs cleaning up!
    var link = token.link;

    if (token.rewriteFlag == _F.SEARCH) {
      var to = this.graph.findNodeByKey(link.to);
      var outlinks = to.findLinksOutOf();

      if (to instanceof _h) {
        token.rewriteFlag = _F.RETURN;
        return link;
      } else if (to instanceof _13) {
        if (outlinks.length == 0) {
          if (to.active) {
            token.rewriteFlag = _F.REWRITE;
          } else {
            token.rewriteFlag = _F.RETURN;
          }

          return link;
        } else {
          return outlinks[0];
        }
      } else if (to instanceof _f) {
        token.rewriteFlag = _F.REWRITE;
        return link;
      }
    } else if (token.rewriteFlag == _F.RETURN) {
      var from = this.graph.findNodeByKey(link.from);
      var outlinks = from.findLinksOutOf();

      if (this.doneVisiting(link, outlinks)) {
        // HACKING
        if (from.active) {
          token.rewriteFlag = _F.REWRITE;
          return from.findLinksInto()[0];
        } else {
          token.rewriteFlag = _F.RETURN;
          return from.findLinksInto()[0];
        }
      } else {
        token.rewriteFlag = _F.SEARCH;
        var j = this.findJ(link, outlinks);
        return outlinks[j];
      }
    }

    return link;
  };

  var _C = function (link, links) {
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

  var _D = function (link, list) {
    for (var j = 0; j < list.length; j++) {
      if (!list[j].visited && list[j] != link) return j;
    }

    return null;
  };

  var __constructor = function () {};

  var _2T = {};
  $$0.value = _1V, _$2(_V, "addToGraph", $$0);
  $$0.value = _1W, _$2(_V, "addToGroup", $$0);
  $$0.value = _1X, _$2(_V, "changeToGroup", $$0);
  $$0.value = _1Y, _$2(_V, "findLinksConnected", $$0);
  $$0.value = _1Z, _$2(_V, "findLinksInto", $$0);
  $$0.value = _1a, _$2(_V, "findLinksOutOf", $$0);
  $$0.value = _1b, _$2(_V, "findNodesOutOf", $$0);
  $$0.value = _1c, _$2(_V, "copy", $$0);
  $$0.value = _1d, _$2(_V, "delete", $$0);
  $$0.value = _1e, _$2(_V, "transition", $$0);
  $$0.value = _1f, _$2(_V, "rewrite", $$0);

  var _a = (__constructor.prototype = _V, new __constructor());

  $$0.value = _1v, _$2(_a, "constructor", $$0);
  $$0.value = _1w, _$2(_a, "addNode", $$0);
  $$0.value = _1x, _$2(_a, "removeNode", $$0);
  $$0.value = _1y, _$2(_a, "addLink", $$0);
  $$0.value = _1z, _$2(_a, "removeLink", $$0);
  $$0.value = _20, _$2(_a, "delete", $$0);
  $$0.value = _21, _$2(_a, "copy", $$0);
  _1v.prototype = _a;

  _$3(_1v, _1g);

  $$0.value = _14, _$2(_L, "clear", $$0);
  $$0.value = _15, _$2(_L, "addNode", $$0);
  $$0.value = _16, _$2(_L, "removeNode", $$0);
  $$0.value = _17, _$2(_L, "findNodeByKey", $$0);
  $$0.value = _18, _$2(_L, "addLink", $$0);
  $$0.value = _19, _$2(_L, "removeLink", $$0);
  $$0.value = _1A, _$2(_L, "findLinkByKeys", $$0);
  var _F = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };
  $$0.value = _1B, _$2(_M, "RewriteFlag", $$0);
  $$0.value = _1C, _$2(_N, "setLink", $$0);
  $$0.value = _1D, _$2(_N, "reset", $$0);
  var _E = {};
  $$0.value = _3, _$2(_2, "setMachine", $$0);
  $$0.value = _1E, _$2(_Q, "_nextChar", $$0);
  _2k.EOF = "EOF";
  _2k.LCID = "LCID";
  _2k.LPAREN = "LPAREN";
  _2k.RPAREN = "RPAREN";
  _2k.SEMIC = "SEMIC";
  _2k.BIND = "BIND";
  _2k.NEW = "NEW";
  _2k.DEF = "DEF";
  _2k.IN = "IN";
  _2k.PLUS = "PLUS";
  _2k.TIMES = "TIMES";
  _2k.INT = "INT";
  _2k.AND = "AND";
  _2k.OR = "OR";
  _2k.NOT = "NOT";
  _2k.TRUE = "TRUE";
  _2k.FALSE = "FALSE";
  _2k.EQUALS = "EQUALS";
  _2k.IF = "IF";
  $$0.value = _1F, _$2(_Q, "_nextToken", $$0);
  $$0.value = _1G, _$2(_Q, "token", $$0);
  $$0.value = _1H, _$2(_Q, "value", $$0);
  $$0.value = _1I, _$2(_Q, "lookahead", $$0);
  $$0.value = _1J, _$2(_Q, "lookaheadType", $$0);
  $$0.value = _1K, _$2(_Q, "fail", $$0);
  $$0.value = _1L, _$2(_Q, "next", $$0);
  $$0.value = _1M, _$2(_Q, "match", $$0);
  $$0.value = _1N, _$2(_Q, "skip", $$0);
  $$0.value = _1O, _$2(_S, "parse", $$0);

  var _c = (__constructor.prototype = _d, new __constructor());

  $$0.value = _b, _$2(_c, "constructor", $$0);
  _b.prototype = _c;
  $$1.value = "Reference", _$2(_b, "name", $$1);

  _$3(_b, _22);

  $$0.value = _1P, _$2(_S, "term", $$0);
  $$0.value = _1Q, _$2(_S, "atom", $$0);
  $$0.value = _1R, _$2(_S, "operation", $$0);
  $$0.value = _1S, _$2(_S, "gatherArgs", $$0);

  var _U = (__constructor.prototype = _V, new __constructor());

  $$0.value = _T, _$2(_U, "constructor", $$0);
  $$0.value = _1T, _$2(_U, "transition", $$0);
  $$0.value = _1U, _$2(_U, "copy", $$0);
  _T.prototype = _U;

  _$3(_T, _1g);

  var _1r = {};
  $$0.value = _1h, _$2(_X, "addToNode", $$0);
  $$0.value = _1i, _$2(_X, "addToGraph", $$0);
  $$0.value = _1j, _$2(_X, "addToGroup", $$0);
  $$0.value = _1k, _$2(_X, "changeToGroup", $$0);
  $$0.value = _1l, _$2(_X, "changeFrom", $$0);
  $$0.value = _1m, _$2(_X, "changeTo", $$0);
  $$0.value = _1n, _$2(_X, "focus", $$0);
  $$0.value = _1o, _$2(_X, "clearFocus", $$0);
  $$0.value = _1p, _$2(_X, "delete", $$0);
  $$0.value = _1q, _$2(_X, "toString", $$0);
  $$0.value = _4, _$2(_2, "compile", $$0);

  var _Z = (__constructor.prototype = _a, new __constructor());

  $$0.value = _Y, _$2(_Z, "constructor", $$0);
  $$0.value = _1s, _$2(_Z, "set", $$0);
  $$0.value = _1t, _$2(_Z, "box", $$0);
  $$0.value = _1u, _$2(_Z, "unbox", $$0);
  _Y.prototype = _Z;

  _$3(_Y, _1v);

  var _g = (__constructor.prototype = _V, new __constructor());

  $$0.value = _f, _$2(_g, "constructor", $$0);
  $$0.value = _23, _$2(_g, "transition", $$0);

  var _j = (__constructor.prototype = _V, new __constructor());

  $$0.value = _h, _$2(_j, "constructor", $$0);
  _h.prototype = _j;

  _$3(_h, _1g);

  var _m = (__constructor.prototype = _V, new __constructor());

  $$0.value = _13, _$2(_m, "constructor", $$0);
  $$0.value = _27, _$2(_m, "rewrite", $$0);
  $$0.value = _28, _$2(_m, "copy", $$0);
  _13.prototype = _m;

  _$3(_13, _1g);

  $$0.value = _24, _$2(_g, "rewrite", $$0);
  $$0.value = _25, _$2(_g, "copy", $$0);
  _f.prototype = _g;
  $$0.value = _26, _$2(_f, "createDNet", $$0);

  _$3(_f, _1g);

  $$0.value = _5, _$2(_2, "toGraph", $$0);

  var _l = (__constructor.prototype = _m, new __constructor());

  $$0.value = _k, _$2(_l, "constructor", $$0);
  _k.prototype = _l;

  _$3(_k, _13);

  var _o = (__constructor.prototype = _m, new __constructor());

  $$0.value = _n, _$2(_o, "constructor", $$0);
  $$0.value = _29, _$2(_o, "copy", $$0);
  _n.prototype = _o;
  $$0.value = _2A, _$2(_n, "parseBoolean", $$0);

  _$3(_n, _13);

  var _q = (__constructor.prototype = _m, new __constructor());

  $$0.value = _p, _$2(_q, "constructor", $$0);
  $$0.value = _2B, _$2(_q, "copy", $$0);
  $$0.value = _2C, _$2(_q, "rewrite", $$0);
  _p.prototype = _q;

  _$3(_p, _13);

  var _s = (__constructor.prototype = _m, new __constructor());

  $$0.value = _r, _$2(_s, "constructor", $$0);
  $$0.value = _2D, _$2(_s, "copy", $$0);
  $$0.value = _2E, _$2(_s, "rewrite", $$0);
  _r.prototype = _s;

  _$3(_r, _13);

  var _u = (__constructor.prototype = _m, new __constructor());

  $$0.value = _t, _$2(_u, "constructor", $$0);
  $$0.value = _2F, _$2(_u, "copy", $$0);
  $$0.value = _2G, _$2(_u, "rewrite", $$0);
  _t.prototype = _u;

  _$3(_t, _13);

  var _w = (__constructor.prototype = _m, new __constructor());

  $$0.value = _v, _$2(_w, "constructor", $$0);
  $$0.value = _2H, _$2(_w, "copy", $$0);
  $$0.value = _2I, _$2(_w, "rewrite", $$0);
  _v.prototype = _w;

  _$3(_v, _13);

  var _y = (__constructor.prototype = _m, new __constructor());

  $$0.value = _x, _$2(_y, "constructor", $$0);
  $$0.value = _2J, _$2(_y, "copy", $$0);
  $$0.value = _2K, _$2(_y, "rewrite", $$0);
  _x.prototype = _y;

  _$3(_x, _13);

  var _10 = (__constructor.prototype = _m, new __constructor());

  $$0.value = _z, _$2(_10, "constructor", $$0);
  $$0.value = _2L, _$2(_10, "copy", $$0);
  $$0.value = _2M, _$2(_10, "rewrite", $$0);
  _z.prototype = _10;

  _$3(_z, _13);

  var _12 = (__constructor.prototype = _m, new __constructor());

  $$0.value = _11, _$2(_12, "constructor", $$0);
  $$0.value = _2N, _$2(_12, "copy", $$0);
  $$0.value = _2O, _$2(_12, "rewrite", $$0);
  _11.prototype = _12;

  _$3(_11, _13);

  $$0.value = _6, _$2(_2, "toOp", $$0);
  $$0.value = _7, _$2(_2, "quotieningRules", $$0);
  $$0.value = _8, _$2(_2, "transition", $$0);
  $$0.value = _9, _$2(_2, "printHistory", $$0);
  $$0.value = _A, _$2(_2, "pass", $$0);
  $$0.value = _C, _$2(_2, "doneVisiting", $$0);
  $$0.value = _D, _$2(_2, "findJ", $$0);
  _$0.Machine = _1;
}).call(this);