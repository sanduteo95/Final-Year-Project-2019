(function () {
  var _0_ = {
    type: "Abstr",
    binding: "x",
    value: {
      type: "Op",
      op: "plus",
      lhs: {
        type: "Deref",
        value: {
          type: "Identifier",
          value: "x"
        }
      },
      rhs: {
        type: "Const",
        value: 1
      }
    }
  };
  module.exports = _0_;
})();