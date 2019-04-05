const parser = require('../../lib/toyLambda/parser.js');
const futamura = require('../../lib/futamura.js');

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
    let outputFileRhs, outputFileLhs;
    return futamura.apply1(parser.parse(lhs), lhsCallback, 'input/toyLambda/linkerLhs.lambda', 125, false, undefined, false)
        .then(response => {
            outputFileLhs = response;
            return futamura.apply1(parser.parse(rhs), rhsCallback, 'input/toyLambda/linkerRhs.lambda', 125, false, undefined, false);
        }).then(response => {
            outputFileRhs = response;
            const jsLhs = require(outputFileLhs);
            const jsRhs = require(outputFileRhs);
        
            jsLhs(jsRhs);
        });
}

lambdaLinkerTestFutamura();
