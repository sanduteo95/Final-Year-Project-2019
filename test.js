const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const input = './input/';
const futamura = require('./lib/futamura.js');


describe('test', function () {
    if (process.env.NODE_ENV === 'js') {
        const parserJS = require('./lib/toyJS/parser.js');
        const interpreterJS = require('./lib/toyJS/interpreter.js');

        describe('toyJS', function () {
            const results = {
                '1.js': undefined,
                '2.js': undefined,
                '3.js': undefined,
                '4.js': 5,
                '5.js': 10,
                '6.js': false,
                '7.js': true,
                '8.js': -155,
                '9.js': -1,
                '10.js': 'hey there',
                '11.js': 1,
                '12.js': 0,
                '13.js': 'error',
                '14.js': true,
                '15.js': 2,
                '16.js': 8,
                '17.js': 1,
                '18.js': ['hey', 'there'],
                '19.js': 6,
                '20.js': 5
            };
            describe('test interpret', function () {
                fs.readdirSync(input + '/toyJS').forEach(function (file) {
                    it(file + ' should pass with ' + results[file], function () {
                        const code = fs.readFileSync(path.join(__dirname, 'input/toyJS/' + file), 'utf8');
                        const programParseTree = parserJS.parse(code);
                        if (results[file] === 'error') {
                            try {
                                interpreterJS(programParseTree);
                                expect(true).equal(false);
                            } catch (err) {
                                expect(err.message).deep.equal(results[file]);
                            }
                        } else {
                            let result = interpreterJS(programParseTree);
                            expect(result).deep.equal(results[file]);
                        }
                    })
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout
                this.timeout(6000);
            
                fs.readdirSync(input + '/toyJS').forEach(function (file) {
                    it(file + ' should pass with ' + results[file], function () {
                        const code = fs.readFileSync(path.join(__dirname, 'input/toyJS/' + file), 'utf8');
                        const programParseTree = parserJS.parse(code);
            
                        if (results[file] === 'error') {
                            futamura.apply(programParseTree, 'input/toyJS/' + file, false);
                            expect(true).equal(true);
                            // TODO: test error?
                        } else {
                            let result = require(futamura.apply(programParseTree, 'input/toyJS/' + file, false));
                            expect(result).deep.equal(results[file]);
                        }
                    })
                });
            });
        });
    }
    
    if (process.env.NODE_ENV === 'lambda') {
        const parserLambda = require('./lib/toyLambda/parser.js');
        const interpreterLambda = require('./lib/toyLambda/interpreter.js');

        describe('toyLambda', function () {
            const results = {
                'simple.lambda': 3,
                'nested.lambda': 7,
                'definition.lambda': 4,
                'function.lambda': 5,
                'abstr.lambda': ["Abstr", ["x", ["Op", ["Plus", ["Deref", ["Identifier", "x"]], ["Const", 1]]]]],
                'separateArgs.lambda': 5,
                'huge.lambda': 12,
                'print.lambda': 'I/O',
                'read.lambda': 'I/O',
                'readAndPrint.lambda': 'I/O',
                'recursion.lambda': 'I/O',
                'church.lambda': 2
            };
    
            describe('test interpret', function () {
                fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                    it(file + ' should pass with ' + results[file], function () {
                        if (results[file] !== 'I/O') {
                            const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                            const programParseTree = parserLambda.parse(code);
                            interpreterLambda(programParseTree, function (err, result) {
                                if (err) {
                                    if (typeof results[file] === 'string') {
                                        expect(err.message).deep.equal(results[file]);
                                    } else {
                                        expect(err).equal(null);
                                    }
                                }
                                if (typeof results[file] === 'string') {
                                    expect(result).equal(undefined);
                                } else {
                                    expect(result).deep.equal(results[file]);
                                }
                            });
                        }
                    })
                });
            });
            
            describe('test first futamura projection', function () {
                // increase timeout
                this.timeout(12000);
            
                fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                    it(file + ' should pass with ' + results[file], function () {
                        const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                        const programParseTree = parserLambda.parse(code);
                        if (results[file] !== 'I/O') {
                            if (typeof results[file] === 'string') {
                                futamura.apply(programParseTree, 'input/toyLambda/' + file, true);
                                expect(true).equal(true);
                                // TODO: test error?
                            } else {
                                let result = require(futamura.apply(programParseTree, 'input/toyLambda/' + file, true));
                                console.log(result)
                                expect(result).deep.equal(results[file]);
                            }
                        } else {
                            // do not test
                            futamura.apply(programParseTree, 'input/toyLambda/' + file, true);
                        }
                    })
                });
            });
        });
    }
})