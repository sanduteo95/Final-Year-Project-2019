var Machine =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../viz/CBV-with-CBV-embedding/js/goi-machine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../viz/CBV-with-CBV-embedding/js/goi-machine.js":
/*!*******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/goi-machine.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var graph = null;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
		var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

		var Variable = __webpack_require__(/*! ast/var */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
		var Operation = __webpack_require__(/*! ast/operation */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
		var Binding = __webpack_require__(/*! ast/binding */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
		var Reference = __webpack_require__(/*! ast/reference */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
		var Thunk = __webpack_require__(/*! ast/thunk */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");

		var Lexer = __webpack_require__(/*! parser/lexer */ "../viz/CBV-with-CBV-embedding/js/parser/lexer.js");
		var Parser = __webpack_require__(/*! parser/parser */ "../viz/CBV-with-CBV-embedding/js/parser/parser.js");

		var MachineToken = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js");
		var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");

		var Graph = __webpack_require__(/*! graph */ "../viz/CBV-with-CBV-embedding/js/graph.js");
		var Group = __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js");
		var Term = __webpack_require__(/*! term */ "../viz/CBV-with-CBV-embedding/js/term.js");

		var Atom = __webpack_require__(/*! nodes/atom */ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js");
		var Contract = __webpack_require__(/*! nodes/contract */ "../viz/CBV-with-CBV-embedding/js/nodes/contract.js");
		var Start = __webpack_require__(/*! nodes/start */ "../viz/CBV-with-CBV-embedding/js/nodes/start.js");
		var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");

		var IntOp = __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js");
		var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
		var PlusOp = __webpack_require__(/*! nodes/ops/plus */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js");
		var TimesOp = __webpack_require__(/*! nodes/ops/times */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js");
		var AndOp = __webpack_require__(/*! nodes/ops/and */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js");
		var OrOp = __webpack_require__(/*! nodes/ops/or */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js");
		var NotOp = __webpack_require__(/*! nodes/ops/not */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js");
		var EqualsOp = __webpack_require__(/*! nodes/ops/equals */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js");
		var IfOp = __webpack_require__(/*! nodes/ops/if */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js");

		class GoIMachine {

			constructor() {
				this.setMachine(new Graph(),new MachineToken(),0);
			}

			setMachine(graphSet,tokenSet,countSet) {
				this.graph = graphSet;
				graph = this.graph; // cheating!
				this.token = tokenSet;
				this.count = countSet;
			}

			compile(source) {
				const lexer = new Lexer(source + '\0');
				const parser = new Parser(lexer);
				const ast = parser.parse();
				this.count = 0;

				this.graph.clear();
				var start = new Start().addToGroup(this.graph.child);
				var term = this.toGraph(ast, this.graph.child, false);
				var link = new Link(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
				this.token.reset(link);
			}

			// translation
			toGraph(ast, group) {
				var graph = this.graph;

				var term = new Term().addToGroup(group);
				if (ast instanceof Thunk) {
					term.box();
					ast = ast.inner;
				}

				// VARIABLES & ATOMS
				if (ast instanceof Variable) {
					var auxs = [];
					for (var i = 0; i < ast.ctx.length; i++) {
						var c = new Contract().addToGroup(term);
						auxs.push(c);
						if ((ast.ctx[i]).name == ast.name)
						 	var prin = c;
					}
					term.set(prin, auxs);

				// BINDINGS & REFERENCES
				} else if ((ast instanceof Binding) || (ast instanceof Reference))  {
					var body = this.toGraph(ast.body, term, false).addToGroup(term);
					var param = this.toGraph(ast.param, term, false).addToGroup(term);

					var auxs = body.auxs;
					var auxNode = auxs[0];
					auxs.splice(0,1)
					auxs = auxs.concat(param.auxs);

					if (ast instanceof Reference) {
						var atomNode = new Atom("a").addToGroup(param);
						new Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
						param.prin = atomNode;
					}
					new Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);

					auxs = Contract.createDNet(ast.ctx.length, auxs, term);
					term.set(body.prin, auxs);

				// OPERATIONS
				} else if (ast instanceof Operation) {
					var op = this.toOp(ast.name,ast.active).addToGroup(term);

					var auxs = [];

					var next;
					for (var i = 0; i < ast.sig[0]; i++) {
						next = this.toGraph(ast.eas[i], term).addToGroup(term);
						new Link(op.key, next.prin.key, "_", "_").addToGroup(term);
						auxs = auxs.concat(next.auxs);
					}
					for (var i = 0; i < ast.sig[1]; i++) {
						next = this.toGraph(ast.das[i], term).addToGroup(term);
						var link = new Link(op.key, next.prin.key, "_", "_");
						link.visited = true; // hacking
						link.addToGroup(term);
						auxs = auxs.concat(next.auxs);
					}

					auxs = Contract.createDNet(ast.ctx.length, auxs, term, op);
					term.set(op, auxs);
				}
				return term;
			}

			toOp(name,active) {
				if (Number.isInteger(parseInt(name))) {
					return new IntOp(name);
				} else if (name == "true" || name == "false") {
					return new BoolOp(name);
				} else if (name == "+") {
					return new PlusOp();
				} else if (name == "*") {
					return new TimesOp();
				} else if (name == "∧") {
					return new AndOp();
				} else if (name == "∨") {
					return new OrOp();
				} else if (name == "¬") {
					return new NotOp();
				} else if (name == "==") {
					return new EqualsOp();
				} else if (name == "if") {
					return new IfOp();
				} else {
					return new Op(name,active);
				}
			}

			quotieningRules() {
				// TODO
				// Loop through all links in the graph
				// Perform quotiening rules
				return null;
			}

			// machine step
			transition(graphTxt, linkTxt, flagTxt) {
				if (!finished) {
					this.count++;
					var node = this.graph.findNodeByKey(this.token.link.to);

					var nextLink;
					if (this.token.rewriteFlag == Flag.REWRITE) {
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

		pass(token) { // this needs cleaning up!
			var link = token.link;
			if (token.rewriteFlag == Flag.SEARCH) {
				var to = this.graph.findNodeByKey(link.to);
				var outlinks = to.findLinksOutOf();
				if (to instanceof Atom) {
					token.rewriteFlag = Flag.RETURN;
					return link;
				} else if (to instanceof Op) {
					if (outlinks.length == 0) {
						if (to.active) {
							token.rewriteFlag = Flag.REWRITE;
						} else {
							token.rewriteFlag = Flag.RETURN;
						}
						return link;
					} else {
						return outlinks[0];
					}
				} else if (to instanceof Contract) {
					token.rewriteFlag = Flag.REWRITE;
					return link;
				}
			} else if (token.rewriteFlag == Flag.RETURN) {
				var from = this.graph.findNodeByKey(link.from);
				var outlinks = from.findLinksOutOf();
				if (this.doneVisiting(link,outlinks)) { // HACKING
					if (from.active) {
						token.rewriteFlag = Flag.REWRITE;
						return from.findLinksInto()[0];
					} else {
						token.rewriteFlag = Flag.RETURN;
						return from.findLinksInto()[0];
					}
				} else {
					token.rewriteFlag = Flag.SEARCH;
					var j = this.findJ(link,outlinks);
					return outlinks[j];
				}
			}
			return link;
		}

		doneVisiting(link, links) {
			for (let l of links) {
				if ((!l.visited) && (l != link))
					return false;
				}
			return true;
			}

		findJ(link,list) {
			for (var j = 0; j < list.length; j++) {
				if ((!list[j].visited) && (list[j] != link))
					return j;
			}
			return null;
		}

	}

		return GoIMachine;
	}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/graph.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/graph.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// general graph
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Group = __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js");

	class Graph {

		constructor() {
			this.clear();
		}

		clear() {
			this.key = 0;
			this.linkKey = 0;
			this.allNodes = new Map(); // for efficiency searching
			this.allLinks = []; // for printing ONLY
			this.child = new Group();
		}

		// give a key to a node and add it to allNodes
		addNode(node) {
			node.key = 'nd' + this.key;
			this.allNodes.set(node.key, node);
			this.key++;
		}

		// also removes connected links
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

		findLinkByKeys(from,to) {
			var fromNode = this.findNodeByKey(from);
			return fromNode.findLinksOutOf().filter(x => x.to == to)[0];
		}

		draw(width, height) {
			var str = this.child.draw('\n  ');
			str += '\n';
			for (let link of this.allLinks) {
				str += link.draw('\n  ');
			}
			return 'digraph G {'
			   	+'\n  rankdir=BT;'
			   	+'\n  edge[arrowhead=none,arrowtail=none];'
			   	+'\n  node[fixedsize=true,shape=circle]'
			   	+'\n  size="' + width + ',' + height + '";'
			   	+'\n  labeldistance=0;'
			   	+'\n  nodesep=.175;'
	  			+'\n  ranksep=.175;'
				+'\n'
				+     str
			   	+'\n}';
		}
	}

	return Graph;

}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/group.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// general group in a graph (subgraph)
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Node = __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js");

	class Group extends Node {

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
			if (i != -1)
				this.links.splice(i, 1);
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

		copy() { } // should never be called as all groups are in terms

	}

	return Group;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/link.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

	class Link {
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
			if (colour != "lightgrey") { // cheating
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
			if (graph != null)
				graph.addLink(this);
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
				if (this.fromPort != null)
					str += 'tailport=' + this.fromPort;
				if (this.toPort != null)
					str += ',headport=' + this.toPort;
			}
			else {
				str += this.to + '->' + this.from + '[dir=back';
				if (this.fromPort != null)
					str += ',headport=' + this.fromPort;
				if (this.toPort != null)
					str += ',tailport=' + this.toPort;
			}

			if (this.colour != null)
				str += ',color=' + this.colour;
			if (this.penWidth != null)
				str += ',penwidth=' + this.penWidth;

			str += '];';
			return str;
		}
	}

	return Link;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/node.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/node.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var showKey = false;

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	class Node {
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
			if (graph != null)
				graph.addNode(this);
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
				if (link.to == this.key)
					links.push(link);
			}
			return links;
		}

		findLinksOutOf() {
			var links = [];
			for (let link of this.links) {
				if (link.from == this.key)
					links.push(link);
			}
			return links;
		}

		findNodesOutOf() {
			var links = this.findLinksOutOf()
			var nodeKeys = links.map(l => l.to)
			return nodeKeys.map(k => this.graph.findNodeByKey(k));
		}

		copy(graph) {
			var newNode = new Node(this.shape, this.text, this.name).addToGraph(graph);
			newNode.width = this.width;
			newNode.height = this.height;
			return newNode;
		}

		// also delete any connected links
		delete() {
			this.group.removeNode(this);
			this.graph.removeNode(this);
		}

		draw(level) {
			var str = level + this.key + '[label="' + this.text;
			if (showKey)
				str += ':' + this.key;
			str += '"';
			if (this.shape != null)
				str += ',shape=' + this.shape;
			if (this.width != null)
				str += ',width=' + this.width;
			if (this.height != null)
				str += ',height=' + this.height;
			return str += '];'
		}

		// machine instructions
		transition(token, link) {
			return link;
		}

		rewrite(token, nextLink) {
			token.rewrite = false;
			return nextLink;
		}
	}

	return Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js":
/*!******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/atom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();
	var Node = __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js");

	class Atom extends Node {

		constructor(name) {
			super("circle", "", name);
			this.height = 0.1;
			this.width = 0.1;
		}

	}

	return Atom;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/contract.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/contract.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();
	var Node = __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js");
	var Atom = __webpack_require__(/*! nodes/atom */ "../viz/CBV-with-CBV-embedding/js/nodes/atom.js");
	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var Term = __webpack_require__(/*! term */ "../viz/CBV-with-CBV-embedding/js/term.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Group = __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js");

	class Contract extends Node {

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

			if (nextNode instanceof Contract || nextNode instanceof Atom) {
				inLinks.map(l => l.changeTo(nextNode.key,"_"));
				nextLink.delete();
				this.delete();
			} else if (nextNode instanceof Op) {
				var term = new Term().addToGroup(this.group);
				var copy = nextNode.copy().addToGroup(term);

				// clean up here
				var opLinks = nextNode.findLinksOutOf();
				var auxs = Contract.createDNet(opLinks.length,[nextNode,nextNode,copy,copy],term);
				link.changeTo(copy.key,"_");
				for (var i = 0; i < opLinks.length; i++) {
					opLinks[i].changeFrom(auxs[i].key,"_");
				}

				term.set(copy,auxs);
		}

			token.rewriteFlag = Flag.SEARCH;
			return link;
		}

		static createDNet(cs, inputs, originalGroup, op) {
			var c;
			var from;
			var to;
			var cList = [];

			var group = new Group();

			for (var n = 0; n < cs; n++) {
				c = new Contract().addToGroup(group);
				cList.push(c);

			if (inputs.length == 0) // maybe this needs to be "more elegant"
				new Link(op.key, c.key, "_", "_", "lightgrey").addToGroup(group);
			}

			if (cList.length > 0) {
				for (var i = 0; i < inputs.length; i++) {
					from = inputs[i]; to = cList[(i%(cs))];
					new Link(from.key, to.key, "_", "_").addToGroup(group);
				}
			}

			group.addToGroup(originalGroup);

			return cList;
		}

		copy() {
			return new Contract(this.name);
		}

		draw(level) {
			return level + this.key + '[shape=' + this.shape + '];';
		}
	}

	return Contract;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/op.js":
/*!****************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/op.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();
	var Node = __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");

	class Op extends Node {

		constructor(name, active) {
			super(null, name, name);
			this.active = active;
		}

		rewrite(token) { } // default none for passive ops

		copy() { 
			return new Op(this.name,this.active);
		}

	}

	return Op;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/and.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class AndOp extends Op {

		constructor() {
			super("∧", true);
		}

		copy() {
			return new AndOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();
			
			var b = outLinks.reduce((sum,x) => sum && BoolOp.parseBoolean(this.graph.findNodeByKey(x.to).name), true);

			var newNode = new BoolOp(b,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return AndOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");

	class BoolOp extends Op {

		constructor(b) {
			b = BoolOp.parseBoolean(b);
			super(b, false);
		}

		copy() {
			return new BoolOp();
		}

		static parseBoolean(b) {
			if (b == "false" || b == 0) {
				return false;
			} else {
				return true;
			}
		}

	}

	return BoolOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js":
/*!************************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/equals.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class EqualsOp extends Op {

		constructor() {
			super("==", true);
		}

		copy() {
			return new EqualsOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();

			var left = this.graph.findNodeByKey(outLinks[0].to).name;
			var right = this.graph.findNodeByKey(outLinks[1].to).name;
			var b = (left == right);

			var newNode = new BoolOp(b,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return EqualsOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/if.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class IfOp extends Op {

		constructor() {
			super("if", true);
		}

		copy() {
			return new IfOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();

			var name = this.graph.findNodeByKey(outLinks[0].to).name;
			var keep; var del;
			if (BoolOp.parseBoolean(name)) {
				keep = 1; del = 2;
			} else {
				keep = 2; del = 1;
			}
			outLinks[del].delete();
			var newNode = this.graph.findNodeByKey(outLinks[keep].to).group.unbox();
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks[0].delete();
			this.graph.findNodeByKey(outLinks[0].to).delete();
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return IfOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");

	class IntOp extends Op {

		constructor(n) {
			super(n, false);
		}

	}

	return IntOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/not.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class NotOp extends Op {

		constructor() {
			super("¬", true);
		}

		copy() {
			return new NotOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();
			
			var b = !BoolOp.parseBoolean(this.graph.findNodeByKey(outLinks[0].to).name);

			var newNode = new BoolOp(b,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return NotOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/or.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var BoolOp = __webpack_require__(/*! nodes/ops/bool */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/bool.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class OrOp extends Op {

		constructor() {
			super("∨", true);
		}

		copy() {
			return new OrOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();

			var b = outLinks.reduce((sum,x) => sum || BoolOp.parseBoolean(this.graph.findNodeByKey(x.to).name), false);

			var newNode = new BoolOp(b,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return OrOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js":
/*!**********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/plus.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var IntOp = __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class PlusOp extends Op {

		constructor() {
			super("+", true);
		}

		copy() {
			return new PlusOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();
			
			var n = outLinks.reduce((sum,x) => sum + this.graph.findNodeByKey(x.to).name, 0);

			var newNode = new IntOp(n,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return PlusOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js":
/*!***********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/ops/times.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Op = __webpack_require__(/*! nodes/op */ "../viz/CBV-with-CBV-embedding/js/nodes/op.js");
	var IntOp = __webpack_require__(/*! nodes/ops/int */ "../viz/CBV-with-CBV-embedding/js/nodes/ops/int.js");
	var Link = __webpack_require__(/*! link */ "../viz/CBV-with-CBV-embedding/js/link.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").RewriteFlag();

	class TimesOp extends Op {

		constructor() {
			super("*", true);
		}

		copy() {
			return new TimesOp();
		}

		rewrite(token) {
			var inLink = this.findLinksInto()[0];
			var outLinks = this.findLinksOutOf();
			
			var n = outLinks.reduce((sum,x) => sum * this.graph.findNodeByKey(x.to).name, 1);

			var newNode = new IntOp(n,false).addToGroup(this.group);
			var newLink = new Link(inLink.from,newNode.key,"_","_").addToGroup(this.group);

			outLinks.map(x => x.delete());
			outLinks.map(x => this.graph.findNodeByKey(x.to).delete());
			this.delete();

			token.rewriteFlag = Flag.SEARCH;
			return newLink;
		}

	}

	return TimesOp;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/nodes/start.js":
/*!*******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/nodes/start.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Node = __webpack_require__(/*! node */ "../viz/CBV-with-CBV-embedding/js/node.js");
	var Flag = __webpack_require__(/*! token */ "../viz/CBV-with-CBV-embedding/js/token.js").Flag;

	class Start extends Node {

		constructor() {
			super("point", "");
		}

		transition(token) {
			return this.findLinksOutOf(null)[0];
		}

		copy() {
			return new Start();
		}

		draw(level) {
			return level + this.key + '[shape=' + this.shape + '];';
		}

	}

	return Start;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/ast.js":
/*!******************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/ast.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;// edited by todd

!(__WEBPACK_LOCAL_MODULE_0__module = { id: "ast/term", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = function() {
  class Term {
    constructor(ctx) {
      this.ctx = ctx;
    }
  }
  return Term;
}.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  var Term = __WEBPACK_LOCAL_MODULE_0__;
    /**
     * name is the string matched for this identifier.
     */
  class Var extends Term {
    constructor(ctx, name) {
      super(ctx);
      this.name = name;
    }
  }
  return Var;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  var Term = __WEBPACK_LOCAL_MODULE_0__;

  class Operation extends Term {
    constructor(ctx, sig, name, active, eas, das) {
      super(ctx);
      this.sig = sig;
      this.name = name;
      this.active = active;
      this.eas = eas;
      this.das = das;
    }
  }
  return Operation;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  var Term = __WEBPACK_LOCAL_MODULE_0__;

  class Thunk extends Term {
    constructor(ctx, inner) {
      super(ctx);
      this.inner = inner;
    }
  }
  return Thunk;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  var Term = __WEBPACK_LOCAL_MODULE_0__;
    /**
     * param here is the name of the variable of the abstraction. Body is the
     * subtree  representing the body of the abstraction.
     */

  class Binding extends Term {
    constructor(ctx, id, param, body) {
      super(ctx);
      this.id = id;
      this.param = param;
      this.body = body;
    }
  }
  return Binding;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  var Term = __WEBPACK_LOCAL_MODULE_0__;
    /**
     * param here is the name of the variable of the reference. Body is the
     * subtree  representing the body of the abstraction.
     */

  class Reference extends Term {
    constructor(ctx, id, param, body) {
      super(ctx);
      this.id = id;
      this.param = param;
      this.body = body;
    }
  }
  return Reference;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/lexer.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/lexer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Token = __webpack_require__(/*! parser/token */ "../viz/CBV-with-CBV-embedding/js/parser/token.js");

	class Lexer {
		constructor(input) {
			this._input = input;
			this._index = 0;
			this._token = undefined;
			this._nextToken();
		}

		/**
		 * Return the next char of the input or '\0' if we've reached the end
		 */
		_nextChar() {
			if (this._index >= this._input.length) {
				return '\0';
			}

			return this._input[this._index++];
		}

		/**
		 * Set this._token based on the remaining of the input
		 *
		 * This method is meant to be private, it doesn't return a token, just sets
		 * up the state for the helper functions.
		 */
		_nextToken() {
			let c;
			do {
				c = this._nextChar();
			} while (/\s/.test(c));

			switch (c) {
			case ',':
				this._token = new Token(Token.COMMA);
				break;

			case ';':
				this._token = new Token(Token.SEMIC);
				break;

			case '(':
				this._token = new Token(Token.LPAREN);
				break;

			case ')':
				this._token = new Token(Token.RPAREN);
				break;

			case '\0':
				this._token = new Token(Token.EOF);
				break;

			case '=':
				this._token = new Token(Token.DEF);
				break;

			default:
				// text for string
				if (/[a-zA-Z]|'/.test(c)) {
					let str = '';
					do {
						str += c;
						c = this._nextChar();

					} while (/[a-zA-Z]|'|_/.test(c));

					// put back the last char which is not part of the identifier
					this._index--;

					if (str == "bind")
						this._token = new Token(Token.BIND);
					else if (str == "in")
						this._token = new Token(Token.IN);
					else if (str == "new")
						this._token = new Token(Token.NEW);
					else if (str == "PLUS")
						this._token = new Token(Token.PLUS);
					else if (str == "TIMES")
						this._token = new Token(Token.TIMES);
					else if (str == "AND")
						this._token = new Token(Token.AND);
					else if (str == "OR")
						this._token = new Token(Token.OR);
					else if (str == "NOT")
						this._token = new Token(Token.NOT);
					else if (str == "EQUALS")
						this._token = new Token(Token.EQUALS);
					else if (str == "IF")
						this._token = new Token(Token.IF);
					else if (str == "TRUE")
						this._token = new Token(Token.TRUE, true);
					else if (str == "FALSE")
						this._token = new Token(Token.FALSE, false);
					else
						this._token = new Token(Token.LCID, str);
				}

				// text for numbers
				else if (/[0-9]/.test(c)) {
					let str = '';
					do {
						str += c;
						c = this._nextChar();
					} while (/[0-9]/.test(c));

					// put back the last char which is not part of the identifier
					this._index--;
					this._token = new Token(Token.INT, parseInt(str));
				}
				else {
					this.fail();
				}
			}
		}

		/**
		 * Assert that the next token has the given type, return it, and skip to the
		 * next token.
		 */
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

		/**
		 * Throw an unexpected token error - ideally this would print the source
		 * location
		 */
		fail() {
			throw new Error(`Unexpected token at offset ${this._index}`);
		}

		/**
		 * Returns a boolean indicating whether the next token has the given type.
		 */
		next(type) {
			return this._token.type == type;
		}

		/**
		 * Assert that the next token has the given type and skip it.
		 */
		match(type) {
			if (this.next(type)) {
				this._nextToken();
				return;
			}
			console.error(`${this._index}: Invalid token: Expected '${type}' found '${this._token.type}'`);
			throw new Error('Parse Error');
		}

		/**
		 * Same as `next`, but skips the token if it matches the expected type.
		 */
		skip(type) {
			if (this.next(type)) {
				this._nextToken();
				return true;
			}
			return false;
		}
	}

	return Lexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/parser.js":
/*!*********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/parser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Token = __webpack_require__(/*! parser/token */ "../viz/CBV-with-CBV-embedding/js/parser/token.js");
	var Var = __webpack_require__(/*! ast/var */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
	var Operation = __webpack_require__(/*! ast/operation */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
	var Binding = __webpack_require__(/*! ast/binding */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
	var Reference = __webpack_require__(/*! ast/reference */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");
	var Thunk = __webpack_require__(/*! ast/thunk */ "../viz/CBV-with-CBV-embedding/js/parser/ast.js");

	class Parser {
		constructor(lexer) {
			this.lexer = lexer;
		}

		parse() {
			const result = this.term2([]);
			// make sure we consumed all the program, otherwise there was a syntax error
			this.lexer.match(Token.EOF);
			return result;
		}

		//  T ::= BIND LCID DEF term IN term  (BIND x = PARAM in BODY)
		//      | NEW  LCID IN term           (NEW x = PARAM in BODY)
		//      | op? ( EAS ; DAS )

		term2(ctx,thunk) {
			if (thunk) {
				const inner = this.term2(ctx);
				return new Thunk(ctx,inner);
			} else {
				if (this.lexer.skip(Token.BIND)) {
					const id = this.term2(ctx);
					id.ctx = [id].concat(id.ctx);
					this.lexer.match(Token.DEF);
					const P = this.term2(ctx);
					this.lexer.match(Token.IN);
					const B = this.term2([id].concat(ctx));
					return new Binding(ctx,id,P,B);
				} else if (this.lexer.skip(Token.NEW)) {
					const id = this.term2(ctx);
					id.ctx = [id].concat(id.ctx);
					this.lexer.match(Token.DEF);
					const P = this.term2(ctx);
					this.lexer.match(Token.IN);
					const B = this.term2([id].concat(ctx));
					return new Reference(ctx,id,P,B);
				} else {
					return this.atom(ctx);
				}
			}
		}

		// atom ::= LPAREN term RPAREN
		//        | LCID
		atom(ctx) {
			if (this.lexer.skip(Token.LPAREN)) {
				const term = this.term2(ctx);
				this.lexer.match(Token.RPAREN);
				return term;
			} else if (this.lexer.next(Token.LCID)) {
				const id = this.lexer.token(Token.LCID);
				return new Var(ctx, id);
			} else {
				return this.operation(ctx);
			}
		}

		// BUILT-IN OPERATIONS
		operation(ctx) {
			var name; var sig; var active;
			var eas = [];
			var das = [];

			var token = this.lexer.lookaheadType();
			switch(token) {
				case Token.PLUS:
					name = "+"; sig = [2,0]; active = true;
					break;
				case Token.TIMES:
					name = "*"; sig = [2,0]; active = true;
					break;
				case Token.AND:
					name = "∧"; sig = [2,0]; active = true;
					break;
				case Token.OR:
					name = "∨"; sig = [2,0]; active = true;
					break;
				case Token.NOT:
					name = "¬"; sig = [1,0]; active = true;
					break;
				case Token.EQUALS:
					name = "=="; sig = [2,0]; active = true;
					break;
				case Token.IF:
					name = "if"; sig = [1,2]; active = true;
					break;
				default:
					name = this.lexer.value(); sig = [0,0]; active = false;
					break;
			}
			this.lexer.match(token);
			if (sig[0] > 0) {
				this.lexer.match(Token.LPAREN);
				eas = this.gatherArgs(ctx,sig[0],false);
				if (sig[1] == 0)
					this.lexer.match(Token.RPAREN);
			}
			if (sig[1] > 0) {
				if (sig[0] == 0)
					this.lexer.match(Token.LPAREN);
				this.lexer.match(Token.SEMIC);
				das = this.gatherArgs(ctx,sig[1],true);
				this.lexer.match(Token.RPAREN);
			}
			return new Operation(ctx,sig,name,active,eas,das);
		}

		gatherArgs(ctx,type,thunk) {
			var args = [];
			for (var i = 0; i < type; i++) {
				const term = this.term2(ctx,thunk);
				args.push(term);
				if (this.lexer.next(Token.COMMA)) {
					this.lexer.match(Token.COMMA);
				}
			}
			return args;
		}

	}

	return Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/parser/token.js":
/*!********************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/parser/token.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
  class Token {
    /**
     * type should be one of the valid token types list below, and value is an
     * optional value that can carry any extra information necessary for a given
     * token type. (e.g. the matched string for an identifier)
     */
    constructor(type, value, pred) {
      this.type = type;
      this.value = value;
      this.pred = pred;
    }
  }

  [
    'EOF', // we augment the tokens with EOF, to indicate the end of the input.
    'LCID',

    'LPAREN',
    'RPAREN',
    'SEMIC',

    'BIND',
    'NEW',
    'DEF',
    'IN',

    'PLUS',
    'TIMES',
    'INT',
    'AND',
    'OR',
    'NOT',
    'TRUE',
    'FALSE',
    'EQUALS',

    'IF'
  ].forEach(token => Token[token] = token);

  return Token;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/term.js":
/*!************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/term.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// specific group for a term in the calculus

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Group = __webpack_require__(/*! group */ "../viz/CBV-with-CBV-embedding/js/group.js");

	class Term extends Group {

		constructor(prin, auxs) {
			super();
			this.prin = null;
			this.set(prin, auxs)
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
				return level + 'subgraph cluster_' + this.key + ' {'
					 + level + '  graph[style=dotted];'
					 + str
					 + level + '};';
			 }
		return super.draw(level);
		}

}

	return Term;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../viz/CBV-with-CBV-embedding/js/token.js":
/*!*************************************************!*\
  !*** ../viz/CBV-with-CBV-embedding/js/token.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

	var Flag = {
		SEARCH:  '?',
		REWRITE: '↯',
		RETURN:	 '✓',
	}

	class MachineToken {

		static RewriteFlag() {
			return Flag;
		}

		constructor() {
			this.link = null;
			this.rewriteFlag = null;
			this.reset();
		}

		setLink(link) {
			if (this.link != null)
				this.link.clearFocus();
			this.link = link;
			if (this.link != null) {
				this.link.focus("red");
			}
		}

		reset(link) {
			this.setLink(link);
			this.rewriteFlag = Flag.SEARCH;
		}
	}

	return MachineToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=main.js.map