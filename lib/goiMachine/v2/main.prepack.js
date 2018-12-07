var Machine;
(function () {
  var __get_scope_binding_0_get_95scope_95binding = function (__selector) {
    var __captured;

    switch (__selector) {
      case 0:
        __captured = [void 0];
        break;
    }

    __scope_0_main[__selector] = __captured;
    return __captured;
  };

  var __scope_0_main = new Array(1);

  var _$0_global = this;

  var _I_Graph = class {
    constructor() {
      this.clear();
    }

    clear() {
      this.key = 0;
      this.linkKey = 0;
      this.allNodes = new Map(); // for efficiency searching

      this.allLinks = []; // for printing ONLY

      this.child = new _1g_Group();
    }

    addNode(node) {
      node.key = 'nd' + this.key;
      this.allNodes.set(node.key, node);
      this.key++;
    }

    removeNode(node) {
      for (let link of Array.from(node.findLinksConnected())) {
        link.delete();
      }

      return this.allNodes.delete(node.key);
    }

    findNodeByKey(key) {
      return this.allNodes.get(key);
    }

    addLink(link) {
      this.allLinks.push(link);
    }

    removeLink(link) {
      this.allLinks.splice(this.allLinks.indexOf(link), 1);
    }

    findLinkByKeys(from, to) {
      var fromNode = this.findNodeByKey(from);
      return fromNode.findLinksOutOf().filter(x => x.to == to)[0];
    }

    draw(width, height) {
      var str = this.child.draw('\n  ');
      str += '\n';

      for (let link of this.allLinks) {
        str += link.draw('\n  ');
      }

      return 'digraph G {' + '\n  rankdir=BT;' + '\n  edge[arrowhead=none,arrowtail=none];' + '\n  node[fixedsize=true,shape=circle]' + '\n  size="' + width + ',' + height + '";' + '\n  labeldistance=0;' + '\n  nodesep=.175;' + '\n  ranksep=.175;' + '\n' + str + '\n}';
    }

  };

  var _1_Machine = class {
    constructor() {
      this.setMachine(new _I_Graph(), new _K_MachineToken(), 0);
    }

    setMachine(graphSet, tokenSet, countSet) {
      this.graph = graphSet;
      __captured__scope_1_[0] = this.graph; // cheating!

      this.token = tokenSet;
      this.count = countSet;
    }

    compile(source) {
      const lexer = new _M_Lexer(source + '\0');
      const parser = new _O_Parser(lexer);
      const ast = parser.parse();
      this.count = 0;
      this.graph.clear();
      var start = new _Q_Start().addToGroup(this.graph.child);
      var term = this.toGraph(ast, this.graph.child, false);
      var link = new _S_Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
      this.token.reset(link);
    }

    toGraph(ast, group) {
      var graph = this.graph;
      var term = new _U_Term().addToGroup(group);

      if (ast instanceof _W_Thunk) {
        term.box();
        ast = ast.inner;
      } // VARIABLES & ATOMS


      if (ast instanceof _W_Thunk) {
        var auxs = [];

        for (var i = 0; i < ast.ctx.length; i++) {
          var c = new _Y_Contract().addToGroup(term);
          auxs.push(c);
          if (ast.ctx[i].name == ast.name) var prin = c;
        }

        term.set(prin, auxs); // BINDINGS & REFERENCES
      } else if (ast instanceof _W_Thunk || ast instanceof _W_Thunk) {
        var body = this.toGraph(ast.body, term, false).addToGroup(term);
        var param = this.toGraph(ast.param, term, false).addToGroup(term);
        var auxs = body.auxs;
        var auxNode = auxs[0];
        auxs.splice(0, 1);
        auxs = auxs.concat(param.auxs);

        if (ast instanceof _W_Thunk) {
          var atomNode = new _a_Atom("a").addToGroup(param);
          new _S_Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
          param.prin = atomNode;
        }

        new _S_Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
        auxs = _Y_Contract.createDNet(ast.ctx.length, auxs, term);
        term.set(body.prin, auxs); // OPERATIONS
      } else if (ast instanceof _W_Thunk) {
        var op = this.toOp(ast.name, ast.active).addToGroup(term);
        var auxs = [];
        var next;

        for (var i = 0; i < ast.sig[0]; i++) {
          next = this.toGraph(ast.eas[i], term).addToGroup(term);
          new _S_Link(op.key, next.prin.key, "_", "_").addToGroup(term);
          auxs = auxs.concat(next.auxs);
        }

        for (var i = 0; i < ast.sig[1]; i++) {
          next = this.toGraph(ast.das[i], term).addToGroup(term);
          var link = new _S_Link(op.key, next.prin.key, "_", "_");
          link.visited = true; // hacking

          link.addToGroup(term);
          auxs = auxs.concat(next.auxs);
        }

        auxs = _Y_Contract.createDNet(ast.ctx.length, auxs, term, op);
        term.set(op, auxs);
      }

      return term;
    }

    toOp(name, active) {
      if (Number.isInteger(parseInt(name))) {
        return new _c_IntOp(name);
      } else if (name == "true" || name == "false") {
        return new _e_BoolOp(name);
      } else if (name == "+") {
        return new _g_PlusOp();
      } else if (name == "*") {
        return new _i_TimesOp();
      } else if (name == "∧") {
        return new _k_AndOp();
      } else if (name == "∨") {
        return new _m_OrOp();
      } else if (name == "¬") {
        return new _o_NotOp();
      } else if (name == "==") {
        return new _q_EqualsOp();
      } else if (name == "if") {
        return new _s_IfOp();
      } else {
        return new _u_Op(name, active);
      }
    }

    quotieningRules() {
      // TODO
      // Loop through all links in the graph
      // Perform quotiening rules
      return null;
    }

    transition(graphTxt, linkTxt, flagTxt) {
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
    }

    printHistory(graphTxt, linkTxt, flagTxt) {
      graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
      linkTxt.val(this.token.link + '\n' + linkTxt.val());
      flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
    }

    pass(token) {
      // this needs cleaning up!
      var link = token.link;

      if (token.rewriteFlag == _E_Flag.SEARCH) {
        var to = this.graph.findNodeByKey(link.to);
        var outlinks = to.findLinksOutOf();

        if (to instanceof _a_Atom) {
          token.rewriteFlag = _E_Flag.RETURN;
          return link;
        } else if (to instanceof _u_Op) {
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
        } else if (to instanceof _Y_Contract) {
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
    }

    doneVisiting(link, links) {
      for (let l of links) {
        if (!l.visited && l != link) return false;
      }

      return true;
    }

    findJ(link, list) {
      for (var j = 0; j < list.length; j++) {
        if (!list[j].visited && list[j] != link) return j;
      }

      return null;
    }

  };

  var _1P_Node = class {
    constructor(shape, text, name) {
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
    }

    addToGraph(graph) {
      if (graph != null) graph.addNode(this);
      this.graph = graph;
      return this; // to provide chain operation
    }

    addToGroup(group) {
      group.addNode(this);
      this.group = group;
      return this; // to provide chain operation
    }

    changeToGroup(group) {
      this.group.removeNode(this);
      this.addToGroup(group);
      return this;
    }

    findLinksConnected() {
      return this.links;
    }

    findLinksInto() {
      var links = [];

      for (let link of this.links) {
        if (link.to == this.key) links.push(link);
      }

      return links;
    }

    findLinksOutOf() {
      var links = [];

      for (let link of this.links) {
        if (link.from == this.key) links.push(link);
      }

      return links;
    }

    findNodesOutOf() {
      var links = this.findLinksOutOf();
      var nodeKeys = links.map(l => l.to);
      return nodeKeys.map(k => this.graph.findNodeByKey(k));
    }

    copy(graph) {
      var newNode = new _1P_Node(this.shape, this.text, this.name).addToGraph(graph);
      newNode.width = this.width;
      newNode.height = this.height;
      return newNode;
    }

    delete() {
      this.group.removeNode(this);
      this.graph.removeNode(this);
    }

    draw(level) {
      var str = level + this.key + '[label="' + this.text;
      ;
      str += '"';
      if (this.shape != null) str += ',shape=' + this.shape;
      if (this.width != null) str += ',width=' + this.width;
      if (this.height != null) str += ',height=' + this.height;
      return str += '];';
    }

    transition(token, link) {
      return link;
    }

    rewrite(token, nextLink) {
      token.rewrite = false;
      return nextLink;
    }

  };

  var _K_MachineToken = class {
    constructor() {
      this.link = null;
      this.rewriteFlag = null;
      this.reset();
    }

    static RewriteFlag() {
      return _E_Flag;
    }

    setLink(link) {
      if (this.link != null) this.link.clearFocus();
      this.link = link;

      if (this.link != null) {
        this.link.focus("red");
      }
    }

    reset(link) {
      this.setLink(link);
      this.rewriteFlag = _E_Flag.SEARCH;
    }

  };

  var _M_Lexer = class {
    constructor(input) {
      this._input = input;
      this._index = 0;
      this._token = undefined;

      this._nextToken();
    }

    _nextChar() {
      if (this._index >= this._input.length) {
        return '\0';
      }

      return this._input[this._index++];
    }

    _nextToken() {
      let c;

      do {
        c = this._nextChar();
      } while (/\s/.test(c));

      switch (c) {
        case ',':
          this._token = new _2Q_Token(_2Q_Token.COMMA);
          break;

        case ';':
          this._token = new _2Q_Token(_2Q_Token.SEMIC);
          break;

        case '(':
          this._token = new _2Q_Token(_2Q_Token.LPAREN);
          break;

        case ')':
          this._token = new _2Q_Token(_2Q_Token.RPAREN);
          break;

        case '\0':
          this._token = new _2Q_Token(_2Q_Token.EOF);
          break;

        case '=':
          this._token = new _2Q_Token(_2Q_Token.DEF);
          break;

        default:
          // text for string
          if (/[a-zA-Z]|'/.test(c)) {
            let str = '';

            do {
              str += c;
              c = this._nextChar();
            } while (/[a-zA-Z]|'|_/.test(c)); // put back the last char which is not part of the identifier


            this._index--;
            if (str == "bind") this._token = new _2Q_Token(_2Q_Token.BIND);else if (str == "in") this._token = new _2Q_Token(_2Q_Token.IN);else if (str == "new") this._token = new _2Q_Token(_2Q_Token.NEW);else if (str == "PLUS") this._token = new _2Q_Token(_2Q_Token.PLUS);else if (str == "TIMES") this._token = new _2Q_Token(_2Q_Token.TIMES);else if (str == "AND") this._token = new _2Q_Token(_2Q_Token.AND);else if (str == "OR") this._token = new _2Q_Token(_2Q_Token.OR);else if (str == "NOT") this._token = new _2Q_Token(_2Q_Token.NOT);else if (str == "EQUALS") this._token = new _2Q_Token(_2Q_Token.EQUALS);else if (str == "IF") this._token = new _2Q_Token(_2Q_Token.IF);else if (str == "TRUE") this._token = new _2Q_Token(_2Q_Token.TRUE, true);else if (str == "FALSE") this._token = new _2Q_Token(_2Q_Token.FALSE, false);else this._token = new _2Q_Token(_2Q_Token.LCID, str);
          } // text for numbers
          else if (/[0-9]/.test(c)) {
              let str = '';

              do {
                str += c;
                c = this._nextChar();
              } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


              this._index--;
              this._token = new _2Q_Token(_2Q_Token.INT, parseInt(str));
            } else {
              this.fail();
            }

      }
    }

    token(type) {
      if (!type) {
        return this._token.value;
      }

      const token = this._token;
      this.match(type);
      return token.value;
    }

    value() {
      return this._token.value;
    }

    lookahead() {
      return this._token;
    }

    lookaheadType() {
      return this._token.type;
    }

    fail() {
      throw new Error(`Unexpected token at offset ${this._index}`);
    }

    next(type) {
      return this._token.type == type;
    }

    match(type) {
      if (this.next(type)) {
        this._nextToken();

        return;
      }

      console.error(`${this._index}: Invalid token: Expected '${type}' found '${this._token.type}'`);
      throw new Error('Parse Error');
    }

    skip(type) {
      if (this.next(type)) {
        this._nextToken();

        return true;
      }

      return false;
    }

  };

  var _1g_Group = class extends _1P_Node {
    constructor() {
      super(null, null, null); // shape, text, name

      this.nodes = [];
      this.links = []; // for copying
    }

    addNode(node) {
      this.nodes.push(node);
    }

    removeNode(node) {
      return this.nodes.splice(this.nodes.indexOf(node), 1);
    }

    addLink(link) {
      this.links.push(link);
    }

    removeLink(link) {
      var i = this.links.indexOf(link);
      if (i != -1) this.links.splice(i, 1);
    }

    delete() {
      for (let node of Array.from(this.nodes)) {
        node.delete();
      }

      super.delete();
    }

    draw(level) {
      var str = "";

      for (let node of this.nodes) {
        str += node.draw(level);
      }

      return str;
    }

    copy() {}

  };

  var _E_Flag = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };

  var _2Q_Token = class {
    constructor(type, value, pred) {
      this.type = type;
      this.value = value;
      this.pred = pred;
    }

  };

  _2Q_Token.EOF = "EOF";
  _2Q_Token.LCID = "LCID";
  _2Q_Token.LPAREN = "LPAREN";
  _2Q_Token.RPAREN = "RPAREN";
  _2Q_Token.SEMIC = "SEMIC";
  _2Q_Token.BIND = "BIND";
  _2Q_Token.NEW = "NEW";
  _2Q_Token.DEF = "DEF";
  _2Q_Token.IN = "IN";
  _2Q_Token.PLUS = "PLUS";
  _2Q_Token.TIMES = "TIMES";
  _2Q_Token.INT = "INT";
  _2Q_Token.AND = "AND";
  _2Q_Token.OR = "OR";
  _2Q_Token.NOT = "NOT";
  _2Q_Token.TRUE = "TRUE";

  var _O_Parser = class {
    constructor(lexer) {
      this.lexer = lexer;
    }

    parse() {
      const result = this.term2([]); // make sure we consumed all the program, otherwise there was a syntax error

      this.lexer.match(_2Q_Token.EOF);
      return result;
    }

    term2(ctx, thunk) {
      if (thunk) {
        const inner = this.term2(ctx);
        return new _W_Thunk(ctx, inner);
      } else {
        if (this.lexer.skip(_2Q_Token.BIND)) {
          const id = this.term2(ctx);
          id.ctx = [id].concat(id.ctx);
          this.lexer.match(_2Q_Token.DEF);
          const P = this.term2(ctx);
          this.lexer.match(_2Q_Token.IN);
          const B = this.term2([id].concat(ctx));
          return new _W_Thunk(ctx, id, P, B);
        } else if (this.lexer.skip(_2Q_Token.NEW)) {
          const id = this.term2(ctx);
          id.ctx = [id].concat(id.ctx);
          this.lexer.match(_2Q_Token.DEF);
          const P = this.term2(ctx);
          this.lexer.match(_2Q_Token.IN);
          const B = this.term2([id].concat(ctx));
          return new _W_Thunk(ctx, id, P, B);
        } else {
          return this.atom(ctx);
        }
      }
    }

    atom(ctx) {
      if (this.lexer.skip(_2Q_Token.LPAREN)) {
        const term = this.term2(ctx);
        this.lexer.match(_2Q_Token.RPAREN);
        return term;
      } else if (this.lexer.next(_2Q_Token.LCID)) {
        const id = this.lexer.token(_2Q_Token.LCID);
        return new _W_Thunk(ctx, id);
      } else {
        return this.operation(ctx);
      }
    }

    operation(ctx) {
      var name;
      var sig;
      var active;
      var eas = [];
      var das = [];
      var token = this.lexer.lookaheadType();

      switch (token) {
        case _2Q_Token.PLUS:
          name = "+";
          sig = [2, 0];
          active = true;
          break;

        case _2Q_Token.TIMES:
          name = "*";
          sig = [2, 0];
          active = true;
          break;

        case _2Q_Token.AND:
          name = "∧";
          sig = [2, 0];
          active = true;
          break;

        case _2Q_Token.OR:
          name = "∨";
          sig = [2, 0];
          active = true;
          break;

        case _2Q_Token.NOT:
          name = "¬";
          sig = [1, 0];
          active = true;
          break;

        case _2Q_Token.EQUALS:
          name = "==";
          sig = [2, 0];
          active = true;
          break;

        case _2Q_Token.IF:
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
        this.lexer.match(_2Q_Token.LPAREN);
        eas = this.gatherArgs(ctx, sig[0], false);
        if (sig[1] == 0) this.lexer.match(_2Q_Token.RPAREN);
      }

      if (sig[1] > 0) {
        if (sig[0] == 0) this.lexer.match(_2Q_Token.LPAREN);
        this.lexer.match(_2Q_Token.SEMIC);
        das = this.gatherArgs(ctx, sig[1], true);
        this.lexer.match(_2Q_Token.RPAREN);
      }

      return new _W_Thunk(ctx, sig, name, active, eas, das);
    }

    gatherArgs(ctx, type, thunk) {
      var args = [];

      for (var i = 0; i < type; i++) {
        const term = this.term2(ctx, thunk);
        args.push(term);

        if (this.lexer.next(_2Q_Token.COMMA)) {
          this.lexer.match(_2Q_Token.COMMA);
        }
      }

      return args;
    }

  };

  var _Q_Start = class extends _1P_Node {
    constructor() {
      super("point", "");
    }

    transition(token) {
      return this.findLinksOutOf(null)[0];
    }

    copy() {
      return new _Q_Start();
    }

    draw(level) {
      return level + this.key + '[shape=' + this.shape + '];';
    }

  };

  var _S_Link = class {
    constructor(from, to, fromPort, toPort, colour) {
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
    }

    addToNode() {
      var fromNode = this.graph.findNodeByKey(this.from);
      fromNode.links.push(this);
      var toNode = this.graph.findNodeByKey(this.to);
      toNode.links.push(this);
    }

    addToGraph(graph) {
      if (graph != null) graph.addLink(this);
      this.graph = graph;
      return this; // to provide chain operation
    }

    addToGroup(group) {
      group.addLink(this);
      this.group = group;
      return this; // to provide chain operation
    }

    changeToGroup(group) {
      this.group.removeLink(this);
      this.addToGroup(group);
      return this;
    }

    changeFrom(key, port) {
      var fromNode = this.graph.findNodeByKey(this.from);
      fromNode.links.splice(fromNode.links.indexOf(this), 1);
      this.from = key;
      this.fromPort = port;
      fromNode = this.graph.findNodeByKey(this.from);
      fromNode.links.push(this);
    }

    changeTo(key, port) {
      var toNode = this.graph.findNodeByKey(this.to);
      toNode.links.splice(toNode.links.indexOf(this), 1);
      this.to = key;
      this.toPort = port;
      toNode = this.graph.findNodeByKey(this.to);
      toNode.links.push(this);
    }

    focus(colour) {
      this.colour = colour;
      this.penWidth = "20";
    }

    clearFocus() {
      this.colour = null;
      this.penWidth = null;
      this.visited = true; // HACKING
    }

    delete() {
      var fromNode = this.graph.findNodeByKey(this.from);
      fromNode.links.splice(fromNode.links.indexOf(this), 1);
      var toNode = this.graph.findNodeByKey(this.to);
      toNode.links.splice(toNode.links.indexOf(this), 1);
      this.group.removeLink(this);
      this.graph.removeLink(this);
    }

    toString() {
      return this.from + "->" + this.to;
    }

    draw(level) {
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

  };

  var _U_Term = class extends _1g_Group {
    constructor(prin, auxs) {
      super();
      this.prin = null;
      this.set(prin, auxs);
      this.boxed = false;
    }

    set(prin, auxs) {
      this.prin = prin;
      this.auxs = auxs;
      return this;
    }

    box() {
      this.boxed = true;
      return this.prin;
    }

    unbox() {
      this.boxed = false;
      return this.prin;
    }

    draw(level) {
      if (this.boxed) {
        var str = "";

        for (let node of this.nodes) {
          str += node.draw(level + '  ');
        }

        return level + 'subgraph cluster_' + this.key + ' {' + level + '  graph[style=dotted];' + str + level + '};';
      }

      return super.draw(level);
    }

  };

  var _W_Thunk = class extends _1i_Term {
    constructor(ctx, id, param, body) {
      super(ctx);
      this.id = id;
      this.param = param;
      this.body = body;
    }

  };

  var _Y_Contract = class extends _1P_Node {
    constructor(name) {
      super("point", "", name);
    }

    transition(token, link) {
      if (link.to == this.key) {
        return this.findLinksOutOf(null)[0];
      }
    }

    rewrite(token) {
      var link = token.link;
      var inLinks = this.findLinksInto();
      var outLinks = this.findLinksOutOf();
      var nextLink = outLinks[0];
      var nextNode = this.graph.findNodeByKey(nextLink.to);

      if (nextNode instanceof _Y_Contract || nextNode instanceof _a_Atom) {
        inLinks.map(l => l.changeTo(nextNode.key, "_"));
        nextLink.delete();
        this.delete();
      } else if (nextNode instanceof _u_Op) {
        var term = new _U_Term().addToGroup(this.group);
        var copy = nextNode.copy().addToGroup(term); // clean up here

        var opLinks = nextNode.findLinksOutOf();

        var auxs = _Y_Contract.createDNet(opLinks.length, [nextNode, nextNode, copy, copy], term);

        link.changeTo(copy.key, "_");

        for (var i = 0; i < opLinks.length; i++) {
          opLinks[i].changeFrom(auxs[i].key, "_");
        }

        term.set(copy, auxs);
      }

      token.rewriteFlag = _E_Flag.SEARCH;
      return link;
    }

    static createDNet(cs, inputs, originalGroup, op) {
      var c;
      var from;
      var to;
      var cList = [];
      var group = new _1g_Group();

      for (var n = 0; n < cs; n++) {
        c = new _Y_Contract().addToGroup(group);
        cList.push(c);
        if (inputs.length == 0) // maybe this needs to be "more elegant"
          new _S_Link(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
      }

      if (cList.length > 0) {
        for (var i = 0; i < inputs.length; i++) {
          from = inputs[i];
          to = cList[i % cs];
          new _S_Link(from.key, to.key, "_", "_").addToGroup(group);
        }
      }

      group.addToGroup(originalGroup);
      return cList;
    }

    copy() {
      return new _Y_Contract(this.name);
    }

    draw(level) {
      return level + this.key + '[shape=' + this.shape + '];';
    }

  };

  var _a_Atom = class extends _1P_Node {
    constructor(name) {
      super("circle", "", name);
      this.height = 0.1;
      this.width = 0.1;
    }

  };

  var _c_IntOp = class extends _u_Op {
    constructor(n) {
      super(n, false);
    }

  };

  var _e_BoolOp = class extends _u_Op {
    constructor(b) {
      b = _e_BoolOp.parseBoolean(b);
      super(b, false);
    }

    copy() {
      return new _e_BoolOp();
    }

    static parseBoolean(b) {
      if (b == "false" || b == 0) {
        return false;
      } else {
        return true;
      }
    }

  };

  var _g_PlusOp = class extends _u_Op {
    constructor() {
      super("+", true);
    }

    copy() {
      return new _g_PlusOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var n = outLinks.reduce((sum, x) => sum + this.graph.findNodeByKey(x.to).name, 0);
      var newNode = new _c_IntOp(n, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _i_TimesOp = class extends _u_Op {
    constructor() {
      super("*", true);
    }

    copy() {
      return new _i_TimesOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var n = outLinks.reduce((sum, x) => sum * this.graph.findNodeByKey(x.to).name, 1);
      var newNode = new _c_IntOp(n, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _k_AndOp = class extends _u_Op {
    constructor() {
      super("∧", true);
    }

    copy() {
      return new _k_AndOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var b = outLinks.reduce((sum, x) => sum && _e_BoolOp.parseBoolean(this.graph.findNodeByKey(x.to).name), true);
      var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _m_OrOp = class extends _u_Op {
    constructor() {
      super("∨", true);
    }

    copy() {
      return new _m_OrOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var b = outLinks.reduce((sum, x) => sum || _e_BoolOp.parseBoolean(this.graph.findNodeByKey(x.to).name), false);
      var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _o_NotOp = class extends _u_Op {
    constructor() {
      super("¬", true);
    }

    copy() {
      return new _o_NotOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var b = !_e_BoolOp.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
      var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _q_EqualsOp = class extends _u_Op {
    constructor() {
      super("==", true);
    }

    copy() {
      return new _q_EqualsOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var left = this.graph.findNodeByKey(outLinks[0].to).name;
      var right = this.graph.findNodeByKey(outLinks[1].to).name;
      var b = left == right;
      var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks.map(x => x.delete());
      outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _s_IfOp = class extends _u_Op {
    constructor() {
      super("if", true);
    }

    copy() {
      return new _s_IfOp();
    }

    rewrite(token) {
      var inLink = this.findLinksInto()[0];
      var outLinks = this.findLinksOutOf();
      var name = this.graph.findNodeByKey(outLinks[0].to).name;
      var keep;
      var del;

      if (_e_BoolOp.parseBoolean(name)) {
        keep = 1;
        del = 2;
      } else {
        keep = 2;
        del = 1;
      }

      outLinks[del].delete();
      var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
      var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
      outLinks[0].delete();
      this.graph.findNodeByKey(outLinks[0].to).delete();
      this.delete();
      token.rewriteFlag = _E_Flag.SEARCH;
      return newLink;
    }

  };

  var _u_Op = class extends _1P_Node {
    constructor(name, active) {
      super(null, name, name);
      this.active = active;
    }

    rewrite(token) {}

    copy() {
      return new _u_Op(this.name, this.active);
    }

  };

  _2Q_Token.FALSE = "FALSE";
  _2Q_Token.EQUALS = "EQUALS";

  var _1i_Term = class {
    constructor(ctx) {
      this.ctx = ctx;
    }

  };

  _2Q_Token.IF = "IF";
  _$0_global.Machine = _1_Machine;
}).call(this);