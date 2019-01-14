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
                    })
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout
                this.timeout(300000);
            
                fs.readdirSync(input + '/toyLambda').forEach(function (file) {
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
                'max.efsd': {
                    data: 3,
                    cellKey: 'nd139'
                },
                'rsum.efsd': {
                    data: 21,
                    cellKey: 'nd205'
                }
            };
    
            describe('test interpret', function () {
                // increase timeout (huge because of fir)
                this.timeout(300000);

                fs.readdirSync(input + '/EFSD').forEach(function (file) {
                    it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                        const code = fs.readFileSync(path.join(__dirname, 'input/EFSD/' + file), 'utf8');
                        boilerplate.interpreterBoilerplateTest(code, function (err, result) {
                            expect(err).equal(null);
                            if (file === 'rsum.efsd' || file === 'max.efsd') {
                                expect(result.data).equal(results[file].data);
                                expect(result.machine.cells.some(function (cellKey) {
                                    return cellKey.includes(results[file].cellKey);
                                })).equal(true);
                            } else {
                                expect(result).equal(results[file]);
                            }
                            done();
                        })('input/EFSD/' + file);
                    })
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout (huge because of fir)
                this.timeout(300000);
        
                fs.readdirSync(input + '/EFSD').forEach(function (file) {
                    it(file + ' should pass with ' + JSON.stringify(results[file]), function (done) {
                        const code = fs.readFileSync(path.join(__dirname, 'input/EFSD/' + file), 'utf8');
    
                        boilerplate.futamuraBoilerplateTest(code, function (err, futamuraResult) {
                            expect(err).equal(null);
    
                            if (file === 'alt.efsd' || file === 'fir.efsd' || file === 'max.efsd' || file === 'rsum.efsd' || file === 'dfg.efsd' || file === 'link.efsd') {
                                // cannot test properly without executing the script
                                // because it may have timeouts (contains residual code)
                                exec(`node output/EFSD/${file.substring(0, file.indexOf('.') + 1)}js`, function (err, stdout) {
                                    expect(err).equal(null);
                                    if (file === 'rsum.efsd' || file === 'max.efsd') {
                                        const getData = stdout => {
                                            const logString = 'data';
                                            const indexOfData = stdout.indexOf(logString);
                                            const indexOfComma = indexOfData + stdout.substring(indexOfData).indexOf(',');
                                            return parseInt(stdout.substring(indexOfData + logString.length + 2, indexOfComma));
                                        }
                                        const getCellKeys = stdout => {
                                            const logString = 'cells';
                                            const indexOfCells = stdout.indexOf(logString);
                                            const indexOfBracket = indexOfCells + stdout.substring(indexOfCells).indexOf(']');
                                            const cells = stdout.substring(indexOfCells + logString.length + 3, indexOfBracket).split(',');
                                            return cells;
                                        }
                                        expect(getData(stdout)).equal(results[file].data);
                                        expect(getCellKeys(stdout).some(function (cellKey) {
                                            return cellKey.includes(results[file].cellKey)
                                        })).equal(true);
                                    } else {
                                        expect(stdout).equal(results[file] + '\n');
                                    }
                                    done();
                                });
                            } else {
                                const result = require(futamuraResult);
                                expect(result).equal(results[file]);
                                done();
                            }
                        })('input/EFSD/' + file);
                    });
                });
            });
        });
    }
})