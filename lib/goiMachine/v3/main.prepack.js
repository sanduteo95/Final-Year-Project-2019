(function () {
  var _$1_global = this;

  var _3_ = function (Variable, Operation, Binding, Reference, Thunk, Lexer, Parser, MachineToken, Link, Graph, Group, Term, Atom, Contract, Start, Op, IntOp, BoolOp, PlusOp, TimesOp, AndOp, OrOp, NotOp, EqualsOp, IfOp) {
    var _$0_derived = MachineToken.RewriteFlag();

    var _5_ = class {
      constructor() {
        this.setMachine(new Graph(), new MachineToken(), 0);
      }

      setMachine(graphSet, tokenSet, countSet) {
        this.graph = graphSet;
        window.mainGraph = this.graph; // cheating!

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

      toGraph(ast, group) {
        var graph = this.graph;
        var term = new Term().addToGroup(group);

        if (ast instanceof Thunk) {
          term.box();
          ast = ast.inner;
        } // VARIABLES & ATOMS


        if (ast instanceof Variable) {
          var auxs = [];

          for (var i = 0; i < ast.ctx.length; i++) {
            var c = new Contract().addToGroup(term);
            auxs.push(c);
            if (ast.ctx[i].name == ast.name) var prin = c;
          }

          term.set(prin, auxs); // BINDINGS & REFERENCES
        } else if (ast instanceof Binding || ast instanceof Reference) {
          var body = this.toGraph(ast.body, term, false).addToGroup(term);
          var param = this.toGraph(ast.param, term, false).addToGroup(term);
          var auxs = body.auxs;
          var auxNode = auxs[0];
          auxs.splice(0, 1);
          auxs = auxs.concat(param.auxs);

          if (ast instanceof Reference) {
            var atomNode = new Atom("a").addToGroup(param);
            new Link(atomNode.key, param.prin.key, "_", "_").addToGroup(param);
            param.prin = atomNode;
          }

          new Link(auxNode.key, param.prin.key, "_", "_").addToGroup(term);
          auxs = Contract.createDNet(ast.ctx.length, auxs, term);
          term.set(body.prin, auxs); // OPERATIONS
        } else if (ast instanceof Operation) {
          var op = this.toOp(ast.name, ast.active).addToGroup(term);
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

      toOp(name, active) {
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
          return new Op(name, active);
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

          if (this.token.rewriteFlag == _$0_derived.REWRITE) {
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

        if (token.rewriteFlag == _$0_derived.SEARCH) {
          var to = this.graph.findNodeByKey(link.to);
          var outlinks = to.findLinksOutOf();

          if (to instanceof Atom) {
            token.rewriteFlag = _$0_derived.RETURN;
            return link;
          } else if (to instanceof Op) {
            if (outlinks.length == 0) {
              if (to.active) {
                token.rewriteFlag = _$0_derived.REWRITE;
              } else {
                token.rewriteFlag = _$0_derived.RETURN;
              }

              return link;
            } else {
              return outlinks[0];
            }
          } else if (to instanceof Contract) {
            token.rewriteFlag = _$0_derived.REWRITE;
            return link;
          }
        } else if (token.rewriteFlag == _$0_derived.RETURN) {
          var from = this.graph.findNodeByKey(link.from);
          var outlinks = from.findLinksOutOf();

          if (this.doneVisiting(link, outlinks)) {
            // HACKING
            if (from.active) {
              token.rewriteFlag = _$0_derived.REWRITE;
              return from.findLinksInto()[0];
            } else {
              token.rewriteFlag = _$0_derived.RETURN;
              return from.findLinksInto()[0];
            }
          } else {
            token.rewriteFlag = _$0_derived.SEARCH;
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

    return _5_;
  };

  _$1_global.mainGraph = null;
  _$1_global["goi-machine"] = _3_;
}).call(this);