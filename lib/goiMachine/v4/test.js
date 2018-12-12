const Machine = require('./main.prepack.js').Machine

const goiMachine = new Machine()
// console.log(goiMachine)

console.log(goiMachine.compile("PLUS(1, 2)"))

// const goiMachine = (function () {
// ...
//  return _$0;
// }).call(global);
// module.exports = goiMachine