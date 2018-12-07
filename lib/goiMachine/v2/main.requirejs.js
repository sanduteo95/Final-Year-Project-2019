define("goi-machine", [], function() { return /******/ (function(modules) { // webpackBootstrap
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Machine;
(function () {
  var __get_scope_binding_0_get_95scope_95binding = function __get_scope_binding_0_get_95scope_95binding(__selector) {
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

  var _I_Graph =
  /*#__PURE__*/
  function () {
    function _I_Graph() {
      _classCallCheck(this, _I_Graph);

      this.clear();
    }

    _createClass(_I_Graph, [{
      key: "clear",
      value: function clear() {
        this.key = 0;
        this.linkKey = 0;
        this.allNodes = new Map(); // for efficiency searching

        this.allLinks = []; // for printing ONLY

        this.child = new _1g_Group();
      }
    }, {
      key: "addNode",
      value: function addNode(node) {
        node.key = 'nd' + this.key;
        this.allNodes.set(node.key, node);
        this.key++;
      }
    }, {
      key: "removeNode",
      value: function removeNode(node) {
        var _arr = Array.from(node.findLinksConnected());

        for (var _i = 0; _i < _arr.length; _i++) {
          var link = _arr[_i];
          link.delete();
        }

        return this.allNodes.delete(node.key);
      }
    }, {
      key: "findNodeByKey",
      value: function findNodeByKey(key) {
        return this.allNodes.get(key);
      }
    }, {
      key: "addLink",
      value: function addLink(link) {
        this.allLinks.push(link);
      }
    }, {
      key: "removeLink",
      value: function removeLink(link) {
        this.allLinks.splice(this.allLinks.indexOf(link), 1);
      }
    }, {
      key: "findLinkByKeys",
      value: function findLinkByKeys(from, to) {
        var fromNode = this.findNodeByKey(from);
        return fromNode.findLinksOutOf().filter(function (x) {
          return x.to == to;
        })[0];
      }
    }, {
      key: "draw",
      value: function draw(width, height) {
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
      }
    }]);

    return _I_Graph;
  }();

  var _1_Machine =
  /*#__PURE__*/
  function () {
    function _1_Machine() {
      _classCallCheck(this, _1_Machine);

      this.setMachine(new _I_Graph(), new _K_MachineToken(), 0);
    }

    _createClass(_1_Machine, [{
      key: "setMachine",
      value: function setMachine(graphSet, tokenSet, countSet) {
        this.graph = graphSet;
        __captured__scope_1_[0] = this.graph; // cheating!

        this.token = tokenSet;
        this.count = countSet;
      }
    }, {
      key: "compile",
      value: function compile(source) {
        var lexer = new _M_Lexer(source + '\0');
        var parser = new _O_Parser(lexer);
        var ast = parser.parse();
        this.count = 0;
        this.graph.clear();
        var start = new _Q_Start().addToGroup(this.graph.child);
        var term = this.toGraph(ast, this.graph.child, false);
        var link = new _S_Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
        this.token.reset(link);
      }
    }, {
      key: "toGraph",
      value: function toGraph(ast, group) {
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
    }, {
      key: "toOp",
      value: function toOp(name, active) {
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
    }, {
      key: "quotieningRules",
      value: function quotieningRules() {
        // TODO
        // Loop through all links in the graph
        // Perform quotiening rules
        return null;
      }
    }, {
      key: "transition",
      value: function transition(graphTxt, linkTxt, flagTxt) {
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
    }, {
      key: "printHistory",
      value: function printHistory(graphTxt, linkTxt, flagTxt) {
        graphTxt.val(this.graph.draw().replace(/\n/g, "") + '\n' + graphTxt.val());
        linkTxt.val(this.token.link + '\n' + linkTxt.val());
        flagTxt.val(this.token.rewriteFlag + '\n' + flagTxt.val());
      }
    }, {
      key: "pass",
      value: function pass(token) {
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
    }, {
      key: "doneVisiting",
      value: function doneVisiting(link, links) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var l = _step2.value;
            if (!l.visited && l != link) return false;
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

        return true;
      }
    }, {
      key: "findJ",
      value: function findJ(link, list) {
        for (var j = 0; j < list.length; j++) {
          if (!list[j].visited && list[j] != link) return j;
        }

        return null;
      }
    }]);

    return _1_Machine;
  }();

  var _1P_Node =
  /*#__PURE__*/
  function () {
    function _1P_Node(shape, text, name) {
      _classCallCheck(this, _1P_Node);

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

    _createClass(_1P_Node, [{
      key: "addToGraph",
      value: function addToGraph(graph) {
        if (graph != null) graph.addNode(this);
        this.graph = graph;
        return this; // to provide chain operation
      }
    }, {
      key: "addToGroup",
      value: function addToGroup(group) {
        group.addNode(this);
        this.group = group;
        return this; // to provide chain operation
      }
    }, {
      key: "changeToGroup",
      value: function changeToGroup(group) {
        this.group.removeNode(this);
        this.addToGroup(group);
        return this;
      }
    }, {
      key: "findLinksConnected",
      value: function findLinksConnected() {
        return this.links;
      }
    }, {
      key: "findLinksInto",
      value: function findLinksInto() {
        var links = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var link = _step3.value;
            if (link.to == this.key) links.push(link);
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

        return links;
      }
    }, {
      key: "findLinksOutOf",
      value: function findLinksOutOf() {
        var links = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var link = _step4.value;
            if (link.from == this.key) links.push(link);
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

        return links;
      }
    }, {
      key: "findNodesOutOf",
      value: function findNodesOutOf() {
        var _this = this;

        var links = this.findLinksOutOf();
        var nodeKeys = links.map(function (l) {
          return l.to;
        });
        return nodeKeys.map(function (k) {
          return _this.graph.findNodeByKey(k);
        });
      }
    }, {
      key: "copy",
      value: function copy(graph) {
        var newNode = new _1P_Node(this.shape, this.text, this.name).addToGraph(graph);
        newNode.width = this.width;
        newNode.height = this.height;
        return newNode;
      }
    }, {
      key: "delete",
      value: function _delete() {
        this.group.removeNode(this);
        this.graph.removeNode(this);
      }
    }, {
      key: "draw",
      value: function draw(level) {
        var str = level + this.key + '[label="' + this.text;
        ;
        str += '"';
        if (this.shape != null) str += ',shape=' + this.shape;
        if (this.width != null) str += ',width=' + this.width;
        if (this.height != null) str += ',height=' + this.height;
        return str += '];';
      }
    }, {
      key: "transition",
      value: function transition(token, link) {
        return link;
      }
    }, {
      key: "rewrite",
      value: function rewrite(token, nextLink) {
        token.rewrite = false;
        return nextLink;
      }
    }]);

    return _1P_Node;
  }();

  var _K_MachineToken =
  /*#__PURE__*/
  function () {
    function _K_MachineToken() {
      _classCallCheck(this, _K_MachineToken);

      this.link = null;
      this.rewriteFlag = null;
      this.reset();
    }

    _createClass(_K_MachineToken, [{
      key: "setLink",
      value: function setLink(link) {
        if (this.link != null) this.link.clearFocus();
        this.link = link;

        if (this.link != null) {
          this.link.focus("red");
        }
      }
    }, {
      key: "reset",
      value: function reset(link) {
        this.setLink(link);
        this.rewriteFlag = _E_Flag.SEARCH;
      }
    }], [{
      key: "RewriteFlag",
      value: function RewriteFlag() {
        return _E_Flag;
      }
    }]);

    return _K_MachineToken;
  }();

  var _M_Lexer =
  /*#__PURE__*/
  function () {
    function _M_Lexer(input) {
      _classCallCheck(this, _M_Lexer);

      this._input = input;
      this._index = 0;
      this._token = undefined;

      this._nextToken();
    }

    _createClass(_M_Lexer, [{
      key: "_nextChar",
      value: function _nextChar() {
        if (this._index >= this._input.length) {
          return '\0';
        }

        return this._input[this._index++];
      }
    }, {
      key: "_nextToken",
      value: function _nextToken() {
        var c;

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
              var str = '';

              do {
                str += c;
                c = this._nextChar();
              } while (/[a-zA-Z]|'|_/.test(c)); // put back the last char which is not part of the identifier


              this._index--;
              if (str == "bind") this._token = new _2Q_Token(_2Q_Token.BIND);else if (str == "in") this._token = new _2Q_Token(_2Q_Token.IN);else if (str == "new") this._token = new _2Q_Token(_2Q_Token.NEW);else if (str == "PLUS") this._token = new _2Q_Token(_2Q_Token.PLUS);else if (str == "TIMES") this._token = new _2Q_Token(_2Q_Token.TIMES);else if (str == "AND") this._token = new _2Q_Token(_2Q_Token.AND);else if (str == "OR") this._token = new _2Q_Token(_2Q_Token.OR);else if (str == "NOT") this._token = new _2Q_Token(_2Q_Token.NOT);else if (str == "EQUALS") this._token = new _2Q_Token(_2Q_Token.EQUALS);else if (str == "IF") this._token = new _2Q_Token(_2Q_Token.IF);else if (str == "TRUE") this._token = new _2Q_Token(_2Q_Token.TRUE, true);else if (str == "FALSE") this._token = new _2Q_Token(_2Q_Token.FALSE, false);else this._token = new _2Q_Token(_2Q_Token.LCID, str);
            } // text for numbers
            else if (/[0-9]/.test(c)) {
                var _str = '';

                do {
                  _str += c;
                  c = this._nextChar();
                } while (/[0-9]/.test(c)); // put back the last char which is not part of the identifier


                this._index--;
                this._token = new _2Q_Token(_2Q_Token.INT, parseInt(_str));
              } else {
                this.fail();
              }

        }
      }
    }, {
      key: "token",
      value: function token(type) {
        if (!type) {
          return this._token.value;
        }

        var token = this._token;
        this.match(type);
        return token.value;
      }
    }, {
      key: "value",
      value: function value() {
        return this._token.value;
      }
    }, {
      key: "lookahead",
      value: function lookahead() {
        return this._token;
      }
    }, {
      key: "lookaheadType",
      value: function lookaheadType() {
        return this._token.type;
      }
    }, {
      key: "fail",
      value: function fail() {
        throw new Error("Unexpected token at offset ".concat(this._index));
      }
    }, {
      key: "next",
      value: function next(type) {
        return this._token.type == type;
      }
    }, {
      key: "match",
      value: function match(type) {
        if (this.next(type)) {
          this._nextToken();

          return;
        }

        console.error("".concat(this._index, ": Invalid token: Expected '").concat(type, "' found '").concat(this._token.type, "'"));
        throw new Error('Parse Error');
      }
    }, {
      key: "skip",
      value: function skip(type) {
        if (this.next(type)) {
          this._nextToken();

          return true;
        }

        return false;
      }
    }]);

    return _M_Lexer;
  }();

  var _1g_Group =
  /*#__PURE__*/
  function (_P_Node) {
    _inherits(_1g_Group, _P_Node);

    function _1g_Group() {
      var _this2;

      _classCallCheck(this, _1g_Group);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(_1g_Group).call(this, null, null, null)); // shape, text, name

      _this2.nodes = [];
      _this2.links = []; // for copying

      return _this2;
    }

    _createClass(_1g_Group, [{
      key: "addNode",
      value: function addNode(node) {
        this.nodes.push(node);
      }
    }, {
      key: "removeNode",
      value: function removeNode(node) {
        return this.nodes.splice(this.nodes.indexOf(node), 1);
      }
    }, {
      key: "addLink",
      value: function addLink(link) {
        this.links.push(link);
      }
    }, {
      key: "removeLink",
      value: function removeLink(link) {
        var i = this.links.indexOf(link);
        if (i != -1) this.links.splice(i, 1);
      }
    }, {
      key: "delete",
      value: function _delete() {
        var _arr2 = Array.from(this.nodes);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var node = _arr2[_i2];
          node.delete();
        }

        _get(_getPrototypeOf(_1g_Group.prototype), "delete", this).call(this);
      }
    }, {
      key: "draw",
      value: function draw(level) {
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
      }
    }, {
      key: "copy",
      value: function copy() {}
    }]);

    return _1g_Group;
  }(_1P_Node);

  var _E_Flag = {
    SEARCH: "?",
    REWRITE: "\u21AF",
    RETURN: "\u2713"
  };

  var _2Q_Token = function _2Q_Token(type, value, pred) {
    _classCallCheck(this, _2Q_Token);

    this.type = type;
    this.value = value;
    this.pred = pred;
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

  var _O_Parser =
  /*#__PURE__*/
  function () {
    function _O_Parser(lexer) {
      _classCallCheck(this, _O_Parser);

      this.lexer = lexer;
    }

    _createClass(_O_Parser, [{
      key: "parse",
      value: function parse() {
        var result = this.term2([]); // make sure we consumed all the program, otherwise there was a syntax error

        this.lexer.match(_2Q_Token.EOF);
        return result;
      }
    }, {
      key: "term2",
      value: function term2(ctx, thunk) {
        if (thunk) {
          var inner = this.term2(ctx);
          return new _W_Thunk(ctx, inner);
        } else {
          if (this.lexer.skip(_2Q_Token.BIND)) {
            var id = this.term2(ctx);
            id.ctx = [id].concat(id.ctx);
            this.lexer.match(_2Q_Token.DEF);
            var P = this.term2(ctx);
            this.lexer.match(_2Q_Token.IN);
            var B = this.term2([id].concat(ctx));
            return new _W_Thunk(ctx, id, P, B);
          } else if (this.lexer.skip(_2Q_Token.NEW)) {
            var _id = this.term2(ctx);

            _id.ctx = [_id].concat(_id.ctx);
            this.lexer.match(_2Q_Token.DEF);

            var _P = this.term2(ctx);

            this.lexer.match(_2Q_Token.IN);

            var _B = this.term2([_id].concat(ctx));

            return new _W_Thunk(ctx, _id, _P, _B);
          } else {
            return this.atom(ctx);
          }
        }
      }
    }, {
      key: "atom",
      value: function atom(ctx) {
        if (this.lexer.skip(_2Q_Token.LPAREN)) {
          var term = this.term2(ctx);
          this.lexer.match(_2Q_Token.RPAREN);
          return term;
        } else if (this.lexer.next(_2Q_Token.LCID)) {
          var id = this.lexer.token(_2Q_Token.LCID);
          return new _W_Thunk(ctx, id);
        } else {
          return this.operation(ctx);
        }
      }
    }, {
      key: "operation",
      value: function operation(ctx) {
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
    }, {
      key: "gatherArgs",
      value: function gatherArgs(ctx, type, thunk) {
        var args = [];

        for (var i = 0; i < type; i++) {
          var term = this.term2(ctx, thunk);
          args.push(term);

          if (this.lexer.next(_2Q_Token.COMMA)) {
            this.lexer.match(_2Q_Token.COMMA);
          }
        }

        return args;
      }
    }]);

    return _O_Parser;
  }();

  var _Q_Start =
  /*#__PURE__*/
  function (_P_Node2) {
    _inherits(_Q_Start, _P_Node2);

    function _Q_Start() {
      _classCallCheck(this, _Q_Start);

      return _possibleConstructorReturn(this, _getPrototypeOf(_Q_Start).call(this, "point", ""));
    }

    _createClass(_Q_Start, [{
      key: "transition",
      value: function transition(token) {
        return this.findLinksOutOf(null)[0];
      }
    }, {
      key: "copy",
      value: function copy() {
        return new _Q_Start();
      }
    }, {
      key: "draw",
      value: function draw(level) {
        return level + this.key + '[shape=' + this.shape + '];';
      }
    }]);

    return _Q_Start;
  }(_1P_Node);

  var _S_Link =
  /*#__PURE__*/
  function () {
    function _S_Link(from, to, fromPort, toPort, colour) {
      _classCallCheck(this, _S_Link);

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

    _createClass(_S_Link, [{
      key: "addToNode",
      value: function addToNode() {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.push(this);
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.push(this);
      }
    }, {
      key: "addToGraph",
      value: function addToGraph(graph) {
        if (graph != null) graph.addLink(this);
        this.graph = graph;
        return this; // to provide chain operation
      }
    }, {
      key: "addToGroup",
      value: function addToGroup(group) {
        group.addLink(this);
        this.group = group;
        return this; // to provide chain operation
      }
    }, {
      key: "changeToGroup",
      value: function changeToGroup(group) {
        this.group.removeLink(this);
        this.addToGroup(group);
        return this;
      }
    }, {
      key: "changeFrom",
      value: function changeFrom(key, port) {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.splice(fromNode.links.indexOf(this), 1);
        this.from = key;
        this.fromPort = port;
        fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.push(this);
      }
    }, {
      key: "changeTo",
      value: function changeTo(key, port) {
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.splice(toNode.links.indexOf(this), 1);
        this.to = key;
        this.toPort = port;
        toNode = this.graph.findNodeByKey(this.to);
        toNode.links.push(this);
      }
    }, {
      key: "focus",
      value: function focus(colour) {
        this.colour = colour;
        this.penWidth = "20";
      }
    }, {
      key: "clearFocus",
      value: function clearFocus() {
        this.colour = null;
        this.penWidth = null;
        this.visited = true; // HACKING
      }
    }, {
      key: "delete",
      value: function _delete() {
        var fromNode = this.graph.findNodeByKey(this.from);
        fromNode.links.splice(fromNode.links.indexOf(this), 1);
        var toNode = this.graph.findNodeByKey(this.to);
        toNode.links.splice(toNode.links.indexOf(this), 1);
        this.group.removeLink(this);
        this.graph.removeLink(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.from + "->" + this.to;
      }
    }, {
      key: "draw",
      value: function draw(level) {
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
    }]);

    return _S_Link;
  }();

  var _U_Term =
  /*#__PURE__*/
  function (_g_Group) {
    _inherits(_U_Term, _g_Group);

    function _U_Term(prin, auxs) {
      var _this3;

      _classCallCheck(this, _U_Term);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_U_Term).call(this));
      _this3.prin = null;

      _this3.set(prin, auxs);

      _this3.boxed = false;
      return _this3;
    }

    _createClass(_U_Term, [{
      key: "set",
      value: function set(prin, auxs) {
        this.prin = prin;
        this.auxs = auxs;
        return this;
      }
    }, {
      key: "box",
      value: function box() {
        this.boxed = true;
        return this.prin;
      }
    }, {
      key: "unbox",
      value: function unbox() {
        this.boxed = false;
        return this.prin;
      }
    }, {
      key: "draw",
      value: function draw(level) {
        if (this.boxed) {
          var str = "";
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.nodes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var node = _step6.value;
              str += node.draw(level + '  ');
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          return level + 'subgraph cluster_' + this.key + ' {' + level + '  graph[style=dotted];' + str + level + '};';
        }

        return _get(_getPrototypeOf(_U_Term.prototype), "draw", this).call(this, level);
      }
    }]);

    return _U_Term;
  }(_1g_Group);

  var _W_Thunk =
  /*#__PURE__*/
  function (_i_Term) {
    _inherits(_W_Thunk, _i_Term);

    function _W_Thunk(ctx, id, param, body) {
      var _this4;

      _classCallCheck(this, _W_Thunk);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(_W_Thunk).call(this, ctx));
      _this4.id = id;
      _this4.param = param;
      _this4.body = body;
      return _this4;
    }

    return _W_Thunk;
  }(_1i_Term);

  var _Y_Contract =
  /*#__PURE__*/
  function (_P_Node3) {
    _inherits(_Y_Contract, _P_Node3);

    function _Y_Contract(name) {
      _classCallCheck(this, _Y_Contract);

      return _possibleConstructorReturn(this, _getPrototypeOf(_Y_Contract).call(this, "point", "", name));
    }

    _createClass(_Y_Contract, [{
      key: "transition",
      value: function transition(token, link) {
        if (link.to == this.key) {
          return this.findLinksOutOf(null)[0];
        }
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var link = token.link;
        var inLinks = this.findLinksInto();
        var outLinks = this.findLinksOutOf();
        var nextLink = outLinks[0];
        var nextNode = this.graph.findNodeByKey(nextLink.to);

        if (nextNode instanceof _Y_Contract || nextNode instanceof _a_Atom) {
          inLinks.map(function (l) {
            return l.changeTo(nextNode.key, "_");
          });
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
    }, {
      key: "copy",
      value: function copy() {
        return new _Y_Contract(this.name);
      }
    }, {
      key: "draw",
      value: function draw(level) {
        return level + this.key + '[shape=' + this.shape + '];';
      }
    }], [{
      key: "createDNet",
      value: function createDNet(cs, inputs, originalGroup, op) {
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
    }]);

    return _Y_Contract;
  }(_1P_Node);

  var _a_Atom =
  /*#__PURE__*/
  function (_P_Node4) {
    _inherits(_a_Atom, _P_Node4);

    function _a_Atom(name) {
      var _this5;

      _classCallCheck(this, _a_Atom);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(_a_Atom).call(this, "circle", "", name));
      _this5.height = 0.1;
      _this5.width = 0.1;
      return _this5;
    }

    return _a_Atom;
  }(_1P_Node);

  var _c_IntOp =
  /*#__PURE__*/
  function (_u_Op2) {
    _inherits(_c_IntOp, _u_Op2);

    function _c_IntOp(n) {
      _classCallCheck(this, _c_IntOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_c_IntOp).call(this, n, false));
    }

    return _c_IntOp;
  }(_u_Op);

  var _e_BoolOp =
  /*#__PURE__*/
  function (_u_Op3) {
    _inherits(_e_BoolOp, _u_Op3);

    function _e_BoolOp(b) {
      _classCallCheck(this, _e_BoolOp);

      b = _e_BoolOp.parseBoolean(b);
      return _possibleConstructorReturn(this, _getPrototypeOf(_e_BoolOp).call(this, b, false));
    }

    _createClass(_e_BoolOp, [{
      key: "copy",
      value: function copy() {
        return new _e_BoolOp();
      }
    }], [{
      key: "parseBoolean",
      value: function parseBoolean(b) {
        if (b == "false" || b == 0) {
          return false;
        } else {
          return true;
        }
      }
    }]);

    return _e_BoolOp;
  }(_u_Op);

  var _g_PlusOp =
  /*#__PURE__*/
  function (_u_Op4) {
    _inherits(_g_PlusOp, _u_Op4);

    function _g_PlusOp() {
      _classCallCheck(this, _g_PlusOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_g_PlusOp).call(this, "+", true));
    }

    _createClass(_g_PlusOp, [{
      key: "copy",
      value: function copy() {
        return new _g_PlusOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this6 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var n = outLinks.reduce(function (sum, x) {
          return sum + _this6.graph.findNodeByKey(x.to).name;
        }, 0);
        var newNode = new _c_IntOp(n, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this6.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _g_PlusOp;
  }(_u_Op);

  var _i_TimesOp =
  /*#__PURE__*/
  function (_u_Op5) {
    _inherits(_i_TimesOp, _u_Op5);

    function _i_TimesOp() {
      _classCallCheck(this, _i_TimesOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_i_TimesOp).call(this, "*", true));
    }

    _createClass(_i_TimesOp, [{
      key: "copy",
      value: function copy() {
        return new _i_TimesOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this7 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var n = outLinks.reduce(function (sum, x) {
          return sum * _this7.graph.findNodeByKey(x.to).name;
        }, 1);
        var newNode = new _c_IntOp(n, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this7.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _i_TimesOp;
  }(_u_Op);

  var _k_AndOp =
  /*#__PURE__*/
  function (_u_Op6) {
    _inherits(_k_AndOp, _u_Op6);

    function _k_AndOp() {
      _classCallCheck(this, _k_AndOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_k_AndOp).call(this, "∧", true));
    }

    _createClass(_k_AndOp, [{
      key: "copy",
      value: function copy() {
        return new _k_AndOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this8 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = outLinks.reduce(function (sum, x) {
          return sum && _e_BoolOp.parseBoolean(_this8.graph.findNodeByKey(x.to).name);
        }, true);
        var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this8.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _k_AndOp;
  }(_u_Op);

  var _m_OrOp =
  /*#__PURE__*/
  function (_u_Op7) {
    _inherits(_m_OrOp, _u_Op7);

    function _m_OrOp() {
      _classCallCheck(this, _m_OrOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_m_OrOp).call(this, "∨", true));
    }

    _createClass(_m_OrOp, [{
      key: "copy",
      value: function copy() {
        return new _m_OrOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this9 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = outLinks.reduce(function (sum, x) {
          return sum || _e_BoolOp.parseBoolean(_this9.graph.findNodeByKey(x.to).name);
        }, false);
        var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this9.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _m_OrOp;
  }(_u_Op);

  var _o_NotOp =
  /*#__PURE__*/
  function (_u_Op8) {
    _inherits(_o_NotOp, _u_Op8);

    function _o_NotOp() {
      _classCallCheck(this, _o_NotOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_o_NotOp).call(this, "¬", true));
    }

    _createClass(_o_NotOp, [{
      key: "copy",
      value: function copy() {
        return new _o_NotOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this10 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var b = !_e_BoolOp.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);
        var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this10.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _o_NotOp;
  }(_u_Op);

  var _q_EqualsOp =
  /*#__PURE__*/
  function (_u_Op9) {
    _inherits(_q_EqualsOp, _u_Op9);

    function _q_EqualsOp() {
      _classCallCheck(this, _q_EqualsOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_q_EqualsOp).call(this, "==", true));
    }

    _createClass(_q_EqualsOp, [{
      key: "copy",
      value: function copy() {
        return new _q_EqualsOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
        var _this11 = this;

        var inLink = this.findLinksInto()[0];
        var outLinks = this.findLinksOutOf();
        var left = this.graph.findNodeByKey(outLinks[0].to).name;
        var right = this.graph.findNodeByKey(outLinks[1].to).name;
        var b = left == right;
        var newNode = new _e_BoolOp(b, false).addToGroup(this.group);
        var newLink = new _S_Link(inLink.from, newNode.key, "_", "_").addToGroup(this.group);
        outLinks.map(function (x) {
          return x.delete();
        });
        outLinks.map(function (x) {
          return _this11.graph.findNodeByKey(x.to).delete();
        });
        this.delete();
        token.rewriteFlag = _E_Flag.SEARCH;
        return newLink;
      }
    }]);

    return _q_EqualsOp;
  }(_u_Op);

  var _s_IfOp =
  /*#__PURE__*/
  function (_u_Op10) {
    _inherits(_s_IfOp, _u_Op10);

    function _s_IfOp() {
      _classCallCheck(this, _s_IfOp);

      return _possibleConstructorReturn(this, _getPrototypeOf(_s_IfOp).call(this, "if", true));
    }

    _createClass(_s_IfOp, [{
      key: "copy",
      value: function copy() {
        return new _s_IfOp();
      }
    }, {
      key: "rewrite",
      value: function rewrite(token) {
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
    }]);

    return _s_IfOp;
  }(_u_Op);

  var _u_Op =
  /*#__PURE__*/
  function (_P_Node5) {
    _inherits(_u_Op, _P_Node5);

    function _u_Op(name, active) {
      var _this12;

      _classCallCheck(this, _u_Op);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(_u_Op).call(this, null, name, name));
      _this12.active = active;
      return _this12;
    }

    _createClass(_u_Op, [{
      key: "rewrite",
      value: function rewrite(token) {}
    }, {
      key: "copy",
      value: function copy() {
        return new _u_Op(this.name, this.active);
      }
    }]);

    return _u_Op;
  }(_1P_Node);

  _2Q_Token.FALSE = "FALSE";
  _2Q_Token.EQUALS = "EQUALS";

  var _1i_Term = function _1i_Term(ctx) {
    _classCallCheck(this, _1i_Term);

    this.ctx = ctx;
  };

  _2Q_Token.IF = "IF";
  _$0_global.Machine = _1_Machine;
}).call(this);

/***/ })

/******/ })});;
//# sourceMappingURL=main.requirejs.js.map