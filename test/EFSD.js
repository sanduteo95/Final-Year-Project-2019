const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const boilerplate = require('../lib/boilerplate.js');

const input = path.join(__dirname, '../input');
const output = path.join(__dirname, '../output');

describe('test EFSD', function () {
    const results = {
        'alt.efsd': 2,
        'avg3.efsd': 1,
        'basic.efsd': 5,
        'cellular_automata.efsd': false,
        'confidence_interval.efsd': false,
        'dfg.efsd': 4,
        'fir.efsd': 1,
        'iir.efsd': 0,
        'incremental.efsd': 1,
        'light_control.efsd': false,
        'link.efsd': undefined,
        'max.efsd': 3,
        'rsum.efsd': 21,
        'tensor_creation.efsd': '((28,[10,18]),(36,[22,14]))',
        'weighted_regression.efsd': 7,
        'planets.efsd': '(((1,1),((-99,-98),-97)),(-44,(-45,-46)))'
    };

    describe('test interpret', function () {
        // increase timeout (huge because of fir)
        this.timeout(300000);

        // read all files in the EFSD folder and test them against expected results
        fs.readdirSync(path.join(input, '/EFSD')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                    const code = fs.readFileSync(path.join(input, '/EFSD/' + file), 'utf8');
                    boilerplate.interpreterBoilerplateTest(code, function (err, result) {
                        expect(err).equal(null);
                        expect(result).equal(results[file]);
                        done();
                    })(`${input}/EFSD/${file}`);
                });
            }
        });
    });
    
    describe('test first futamura projection', function () {
        // increase timeout (huge because of fir)
        this.timeout(300000);

        // read all files in the EFSD folder and test them against expected resultss
        fs.readdirSync(path.join(input, '/EFSD')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                    const code = fs.readFileSync(path.join(input, '/EFSD/' + file), 'utf8');

                    boilerplate.futamura1Boilerplate(code, 125, false)(`${input}/EFSD/${file}`)
                        .then(futamuraResult => {
                            if (file === 'alt.efsd' || file === 'fir.efsd' || file === 'max.efsd' || file === 'rsum.efsd' || file === 'dfg.efsd' || file === 'link.efsd') {
                                // cannot test properly without executing the script
                                // because it may have timeouts (contains residual code)
                                exec(`node ${output.replace(/\ /g, '\\ ')}/EFSD/${file.substring(0, file.indexOf('.') + 1)}js`, function (err, stdout) {
                                    expect(err).equal(null);
                                    expect(stdout).equal(results[file] + '\n');
                                    done();
                                });
                            } else {
                                const result = require(futamuraResult);
                                expect(result).equal(results[file]);
                                done();
                            }
                        }).catch(err => {
                            done(err);
                        });
                });
            }
        });
    });
})