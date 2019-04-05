const futamura = require('../../lib/futamura.js');

const efsdLinkerTestFutamura = () => {
    const lhs = 'let func = λf. λx. f (f x) in func (λx. x + 1)';
    const rhs = '1 + 1';

    // either use the same callback for both
    const callback = function (err, result) {
        if (err) {
            throw err;
        }

        if (typeof result === 'function') {
            module.exports = result;
        } else {
            console.log(result);
            module.exports = result;
        }
    };
    // or separate them in order to only see the final result
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
    return futamura.apply1(lhs, lhsCallback, 125, 0, true, 'output/SSD/linkerLhs.js')
        .then(response => {
            outputFileLhs = response;
            return futamura.apply1(rhs, rhsCallback, 125, 0, true, 'output/SSD/linkerRhs.js');
        }).then(response => {
            outputFileRhs = response;
            const jsLhs = require(outputFileLhs);
            const jsRhs = require(outputFileRhs);

            jsLhs(jsRhs);
        });
}

efsdLinkerTestFutamura();