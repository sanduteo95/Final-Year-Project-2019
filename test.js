const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const input = './input/';
const boilerplate = require('./lib/boilerplate.js');

const testEFSD = process.env.LANG === 'efsd';

describe('test', function () {
    if (!testEFSD) {
        describe('toyLambda', function () {
            const testInput = 1;
    
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
                fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                    if (results[file]) {
                        it(file + ' should pass with ' + results[file], function (done) {
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
                                const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                                boilerplate.interpreterBoilerplateTest(code, function (err, result) {
                                    expect(err).equal(null);
            
                                    if (results[file] === 'function') {
                                        expect(typeof result).equal(results[file]);
                                    } else {
                                        expect(result).deep.equal(results[file]);
                                    }
                                    done();
                                })('input/toyLambda/' + file);
                            }
                        });
                    }
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout
                this.timeout(300000);
            
                fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                    if (results[file]) {
                        it(file + ' should pass with ' + results[file], function (done) {
                            const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
        
                            boilerplate.futamuraBoilerplateTest(code, function (err, futamuraResult) {
                                expect(err).equal(null);
        
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
                            })('input/toyLambda/' + file);
                        });
                    }
                });
            });
        });
    } else {
        describe('EFSD', function () {
            const results = {
                'alt.efsd': 2,
                'basic.efsd': 5,
                'dfg.efsd': 4,
                'fir.efsd': 0,
                'link.efsd': undefined,
                'max.efsd': 3,
                'rsum.efsd': 21
            };
    
            describe('test interpret', function () {
                // increase timeout (huge because of fir)
                this.timeout(300000);

                fs.readdirSync(input + '/EFSD').forEach(function (file) {
                    if (results[file]) {
                        it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                            const code = fs.readFileSync(path.join(__dirname, 'input/EFSD/' + file), 'utf8');
                            boilerplate.interpreterBoilerplateTest(code, function (err, result) {
                                expect(err).equal(null);
                                expect(result).equal(results[file]);
                                done();
                            })('input/EFSD/' + file);
                        });
                    }
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout (huge because of fir)
                this.timeout(300000);
        
                fs.readdirSync(input + '/EFSD').forEach(function (file) {
                    if (results[file]) {
                        it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                            const code = fs.readFileSync(path.join(__dirname, 'input/EFSD/' + file), 'utf8');
        
                            boilerplate.futamuraBoilerplateTest(code, function (err, futamuraResult) {
                                expect(err).equal(null);
        
                                if (file === 'alt.efsd' || file === 'fir.efsd' || file === 'max.efsd' || file === 'rsum.efsd' || file === 'dfg.efsd' || file === 'link.efsd') {
                                    // cannot test properly without executing the script
                                    // because it may have timeouts (contains residual code)
                                    exec(`node output/EFSD/${file.substring(0, file.indexOf('.') + 1)}js`, function (err, stdout) {
                                        expect(err).equal(null);
                                        expect(stdout).equal(results[file] + '\n');
                                        done();
                                    });
                                } else {
                                    const result = require(futamuraResult);
                                    expect(result).equal(results[file]);
                                    done();
                                }
                            })('input/EFSD/' + file);
                        });
                    }
                });
            });
        });
    }
})