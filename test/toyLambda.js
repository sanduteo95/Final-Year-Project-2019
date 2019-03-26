const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const boilerplate = require('../lib/boilerplate.js');

const input = path.join(__dirname, '../input');
const output = path.join(__dirname, '../output');

describe('test toyLambda', function () {
    // used to test code that expects user input
    const testInput = 1;

    // the correct results to compare against
    const results = {
        'simple.lambda': 3,
        'nested.lambda': 7,
        'definition.lambda': 4,
        'function.lambda': 5,
        'addAbstr.lambda': 'function',
        'abstr.lambda': 'function',
        'separateArgs.lambda': 5,
        'huge.lambda': 12,
        'print.lambda': true,
        'read.lambda': testInput,
        'readAndPrint.lambda': true,
        'recursion.lambda': 45,
        'longRecursion.lambda': 49995000,
        'church.lambda': 4
    };

    describe('test interpret', function () {
        // increase timeout
        this.timeout(300000);

        // read all files in the toyLambda folder and test them against expected results
        fs.readdirSync(path.join(input, '/toyLambda')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + results[file], function (done) {
                    // code that expects user input needs to be tested via terminal => use Node.js exec 
                    if (file === 'read.lambda') {
                        exec(`node index.js -i input/toyLambda/${file} <<< ${testInput}`, function (err, stdout) {
                            expect(err).equal(null);
                            expect(stdout).equal('User input:\n' + testInput + '\n');
                            done();
                        });
                    } else if (file === 'readAndPrint.lambda') {
                        exec(`node index.js -i input/toyLambda/${file} <<< ${testInput}`, function (err, stdout) {
                            expect(err).equal(null);
                            expect(stdout).equal('User input:\n' + testInput + '\n' + results[file] + '\n');
                            done();
                        });
                    } else {
                        const code = fs.readFileSync(path.join(input, '/toyLambda/' + file), 'utf8');
                        boilerplate.interpreterBoilerplateTest(`${input}/toyLambda/${file}`, code, function (err, result) {
                            expect(err).equal(null);
    
                            if (results[file] === 'function') {
                                expect(typeof result).equal(results[file]);
                            } else {
                                expect(result).deep.equal(results[file]);
                            }
                            done();
                        }, false);
                    }
                });
            }
        });
    });
    
    describe('test first futamura projection', function () {
        // increase timeout
        this.timeout(300000);
    
        // read all files in the toyLambda folder and test them against expected results
        fs.readdirSync(path.join(input, '/toyLambda')).forEach(function (file) {
            if (results[file]) {
                it(file + ' should pass with ' + results[file], function (done) {
                    const code = fs.readFileSync(path.join(input, '/toyLambda/' + file), 'utf8');
                    boilerplate.futamura1Boilerplate(`${input}/toyLambda/${file}`, code, 125, 0, false)
                        .then(futamuraResult => {  
                            if (results[file] === 'function') {
                                const result = require(futamuraResult);
                                expect(typeof result).equal(results[file]);
                                done();
                            }
                            else if (file === 'read.lambda') {
                                // cannot test this properly without executing the script 
                                // because it needs to wait for user input
                                exec(`node output/toyLambda/${file.substring(0, file.indexOf('.') + 1)}js <<< ${testInput}`, function (err, stdout) {
                                    expect(err).equal(null);
                                    expect(stdout).equal('User input:\n' + testInput + '\n');
                                    done();
                                });
                            } else if (file === 'readAndPrint.lambda') {
                                // cannot test this properly without executing the script 
                                // because it needs to wait for user input
                                exec(`node output/toyLambda/${file.substring(0, file.indexOf('.') + 1)}js <<< ${testInput}`, function (err, stdout) {
                                    expect(err).equal(null);
                                    expect(stdout).equal('User input:\n' + testInput + '\n' + testInput + '\n');
                                    done();
                                });
                            } else {
                                const result = require(futamuraResult);
                                expect(result).deep.equal(results[file]);
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