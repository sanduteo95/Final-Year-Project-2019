const futamura = require('../../lib/futamura.js');

const efsdLinkerTestFutamura = () => {
    const lhs = 'let func = λf. λx. f (f x) in func (λx. x + 1)';
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
    let outputFileLhs, outputFileRhs;
    return futamura.apply1(lhs, lhsCallback, 'input/EFSD/linkerLhs.efsd', false)
        .then(response => {
            outputFileLhs = response;
            return futamura.apply1(rhs, rhsCallback, 'input/EFSD/linkerRhs.efsd', false);
        }).then(response => {
            outputFileRhs = response;
            const jsLhs = require(outputFileLhs);
            const jsRhs = require(outputFileRhs);

            jsLhs(jsRhs);
        });
}

efsdLinkerTestFutamura();