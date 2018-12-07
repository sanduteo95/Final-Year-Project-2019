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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/goiMachine/v3/main.prepack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/goiMachine/v3/main.prepack.js":
/*!*******************************************!*\
  !*** ./lib/goiMachine/v3/main.prepack.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var graph;
(function () {
  var _$R_global = this;

  var _3_ = function _3_(require) {
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

    var _$0_derived = require("token");

    var _$1_derived = _$0_derived.RewriteFlag();

    var _$2_derived = require("ast/var");

    var _$3_derived = require("ast/operation");

    var _$4_derived = require("ast/binding");

    var _$5_derived = require("ast/reference");

    var _$6_derived = require("ast/thunk");

    var _$7_derived = require("parser/lexer");

    var _$8_derived = require("parser/parser");

    var _$9_derived = require("token");

    var _$A_derived = require("link");

    var _$B_derived = require("graph");

    var _$C_derived = require("group");

    var _$D_derived = require("term");

    var _$E_derived = require("nodes/atom");

    var _$F_derived = require("nodes/contract");

    var _$G_derived = require("nodes/start");

    var _$H_derived = require("nodes/op");

    var _$I_derived = require("nodes/ops/int");

    var _$J_derived = require("nodes/ops/bool");

    var _$K_derived = require("nodes/ops/plus");

    var _$L_derived = require("nodes/ops/times");

    var _$M_derived = require("nodes/ops/and");

    var _$N_derived = require("nodes/ops/or");

    var _$O_derived = require("nodes/ops/not");

    var _$P_derived = require("nodes/ops/equals");

    var _$Q_derived = require("nodes/ops/if");

    var _W_ =
    /*#__PURE__*/
    function () {
      function _W_() {
        _classCallCheck(this, _W_);

        this.setMachine(new _$B_derived(), new _$9_derived(), 0);
      }

      _createClass(_W_, [{
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
          var lexer = new _$7_derived(source + '\0');
          var parser = new _$8_derived(lexer);
          var ast = parser.parse();
          this.count = 0;
          this.graph.clear();
          var start = new _$G_derived().addToGroup(this.graph.child);
          var term = this.toGraph(ast, this.graph.child, false);
          var link = new _$A_derived(start.key, term.prin.key, "_", "_").addToGroup(this.graph.child);
          this.token.reset(link);
        }
      }, {
        key: "toGraph",
        value: function toGraph(ast, group) {
          var graph = this.graph;
          var term = new _$D_derived().addToGroup(group);

          if (ast instanceof _$6_derived) {
            term.box();
            ast = ast.inner;
          } // VARIABLES & ATOMS


          if (ast instanceof _$2_derived) {
            var auxs = [];

            for (var i = 0; i < ast.ctx.length; i++) {
              var c = new _$F_derived().addToGroup(term);
              auxs.push(c);
              if (ast.ctx[i].name == ast.name) var prin = c;
            }

            term.set(prin, auxs); // BINDINGS & REFERENCES
          } else if (ast instanceof _$4_derived || ast instanceof _$5_derived) {
            var body = this.toGraph(ast.body, term, false).addToGroup(term);
            var param = this.toGraph(ast.param, term, false).addToGroup(term);
            var auxs = body.auxs;
            var auxNode = auxs[0];
            auxs.splice(0, 1);
            auxs = auxs.concat(param.auxs);

            if (ast instanceof _$5_derived) {
              var atomNode = new _$E_derived("a").addToGroup(param);
              new _$A_derived(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
              param.prin = atomNode;
            }

            new _$A_derived(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
            auxs = _$F_derived.createDNet(ast.ctx.length, auxs, term);
            term.set(body.prin, auxs); // OPERATIONS
          } else if (ast instanceof _$3_derived) {
            var op = this.toOp(ast.name, ast.active).addToGroup(term);
            var auxs = [];
            var next;

            for (var i = 0; i < ast.sig[0]; i++) {
              next = this.toGraph(ast.eas[i], term).addToGroup(term);
              new _$A_derived(op.key, next.prin.key, "_", "_").addToGroup(term);
              auxs = auxs.concat(next.auxs);
            }

            for (var i = 0; i < ast.sig[1]; i++) {
              next = this.toGraph(ast.das[i], term).addToGroup(term);
              var link = new _$A_derived(op.key, next.prin.key, "_", "_");
              link.visited = true; // hacking

              link.addToGroup(term);
              auxs = auxs.concat(next.auxs);
            }

            auxs = _$F_derived.createDNet(ast.ctx.length, auxs, term, op);
            term.set(op, auxs);
          }

          return term;
        }
      }, {
        key: "toOp",
        value: function toOp(name, active) {
          if (Number.isInteger(parseInt(name))) {
            return new _$I_derived(name);
          } else if (name == "true" || name == "false") {
            return new _$J_derived(name);
          } else if (name == "+") {
            return new _$K_derived();
          } else if (name == "*") {
            return new _$L_derived();
          } else if (name == "∧") {
            return new _$M_derived();
          } else if (name == "∨") {
            return new _$N_derived();
          } else if (name == "¬") {
            return new _$O_derived();
          } else if (name == "==") {
            return new _$P_derived();
          } else if (name == "if") {
            return new _$Q_derived();
          } else {
            return new _$H_derived(name, active);
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

            if (this.token.rewriteFlag == _$1_derived.REWRITE) {
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

          if (token.rewriteFlag == _$1_derived.SEARCH) {
            var to = this.graph.findNodeByKey(link.to);
            var outlinks = to.findLinksOutOf();

            if (to instanceof _$E_derived) {
              token.rewriteFlag = _$1_derived.RETURN;
              return link;
            } else if (to instanceof _$H_derived) {
              if (outlinks.length == 0) {
                if (to.active) {
                  token.rewriteFlag = _$1_derived.REWRITE;
                } else {
                  token.rewriteFlag = _$1_derived.RETURN;
                }

                return link;
              } else {
                return outlinks[0];
              }
            } else if (to instanceof _$F_derived) {
              token.rewriteFlag = _$1_derived.REWRITE;
              return link;
            }
          } else if (token.rewriteFlag == _$1_derived.RETURN) {
            var from = this.graph.findNodeByKey(link.from);
            var outlinks = from.findLinksOutOf();

            if (this.doneVisiting(link, outlinks)) {
              // HACKING
              if (from.active) {
                token.rewriteFlag = _$1_derived.REWRITE;
                return from.findLinksInto()[0];
              } else {
                token.rewriteFlag = _$1_derived.RETURN;
                return from.findLinksInto()[0];
              }
            } else {
              token.rewriteFlag = _$1_derived.SEARCH;
              var j = this.findJ(link, outlinks);
              return outlinks[j];
            }
          }

          return link;
        }
      }, {
        key: "doneVisiting",
        value: function doneVisiting(link, links) {
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

      return _W_;
    }();

    return _W_;
  };

  _$R_global.graph = null;
  _$R_global.machine = _3_;
}).call(window);

/***/ })

/******/ });
//# sourceMappingURL=main.requirejs.js.map