const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const boilerplate = require('../lib/boilerplate.js');

const input = path.join(__dirname, '../input');
const output = path.join(__dirname, '../output');

describe('test SSD', function () {
    const results = {
        'alt.ssd': 2,
        'avg3.ssd': 1,
        'basic.ssd': 5,
        'cellular_automata.ssd': false,
        'confidence_interval.ssd': false,
        'dfg.ssd': 4,
        'fir.ssd': 1,
        'iir.ssd': 0,
        'incremental.ssd': 1,
        'light_control.ssd': false,
        'link.ssd': undefined,
        'max.ssd': 3,
        'rsum.ssd': 21,
        'tensor_creation.ssd': '((28,[10,18]),(36,[22,14]))',
        'weighted_regression.ssd': 7,
        'planets.ssd': '(((1,1),((-99,-98),-97)),(-44,(-45,-46)))'
    };

    describe('test interpret', function () {
        // increase timeout (huge because of fir)
        this.timeout(300000);

        // read all files in the SSD folder and test them against expected results
        fs.readdirSync(path.join(input, '/SSD')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                    boilerplate.interpreterBoilerplateTest(`input/SSD/${file}`, function (err, result) {
                        expect(err).equal(null);
                        expect(result).equal(results[file]);
                        done();
                    }, true);
                });
            }
        });
    });
    
    describe('test first futamura projection', function () {
        // increase timeout (huge because of fir)
        this.timeout(300000);

        // read all files in the SSD folder and test them against expected resultss
        fs.readdirSync(path.join(input, '/SSD')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                    boilerplate.futamura1Boilerplate(`input/SSD/${file}`, 125, 0)
                        .then(futamuraResult => {
                            if (file === 'alt.ssd' || file === 'fir.ssd' || file === 'max.ssd' || file === 'rsum.ssd' || file === 'dfg.ssd' || file === 'link.ssd') {
                                // cannot test properly without executing the script
                                // because it may have timeouts (contains residual code)
                                exec(`node ${output.replace(/\ /g, '\\ ')}/SSD/${file.substring(0, file.indexOf('.') + 1)}js`, function (err, stdout) {
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