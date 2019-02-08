const parser = require('./lib/toyLambda/parser.js');
const futamura = require('./lib/futamura.js');

const lambdaLinkerTestFutamura = () => {
    const lhs = 'let func = λf. λx. f @ (f @ x) in func @ (λx. x + 1)';
    const rhs = '2';

    const lhsCallback = function (err, result) {
        if (err) {
            throw err;
        }
        if (typeof result === 'function') {
            module.exports = result;
        } else {
            console.log(result);
        }
    };
    const rhsCallback = function (err, result) {
        if (err) {
            throw err;
        }
        module.exports = result;
    };
    const outputFileLhs = futamura.apply(parser.parse(lhs), lhsCallback, 'input/toyLambda/linkerLhs.lambda', false);
    const outputFileRhs = futamura.apply(parser.parse(rhs), rhsCallback, 'input/toyLambda/linkerRhs.lambda', false);

    const jsLhs = require(outputFileLhs);
    const jsRhs = require(outputFileRhs);

    jsLhs(jsRhs);
}

lambdaLinkerTestFutamura();
