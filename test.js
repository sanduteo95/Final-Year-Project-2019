const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const input = './input/';
const futamura = require('./lib/futamura.js');
const parser = require('./lib/toyLambda/parser.js');
const interpreter = require('./lib/toyLambda/interpreter.js');

describe('test', function () {
    describe('toyLambda', function () {
        const results = {
            'simple.lambda': 3,
            'nested.lambda': 7,
            'definition.lambda': 4,
            'function.lambda': 5,
            'abstr.lambda': {type: 'Abstr'},
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
                        const programParseTree = parser.parse(code);
                        interpreter(programParseTree, function (err, result) {
                            if (err) {
                                if (typeof results[file] === 'string') {
                                    expect(err.message).deep.equal(results[file]);
                                } else {
                                    expect(err).equal(null);
                                }
                            }
                            if (typeof results[file] === 'string') {
                                expect(result).equal(undefined);
                            } else if (typeof results[file] === 'object') {
                                expect(result.type).equal(results[file].type);
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
                    const programParseTree = parser.parse(code);
                    if (results[file] !== 'I/O') {
                        if (typeof results[file] === 'string') {
                            futamura.apply(programParseTree, 'input/toyLambda/' + file, true);
                            expect(true).equal(true);
                            // TODO: test error?
                        } else if (typeof results[file] === 'object') {
                            let result = require(futamura.apply(programParseTree, 'input/toyLambda/' + file, true));
                            expect(result.type).equal(results[file].type);
                        } else {
                            let result = require(futamura.apply(programParseTree, 'input/toyLambda/' + file, true));
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
})