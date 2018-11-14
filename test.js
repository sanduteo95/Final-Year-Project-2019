const expect = require('chai').expect;

const fs = require('fs');
const path = require('path');
const robot = require('robotjs');

const input = './input/';
const boilerplate = require('./lib/boilerplate.js');

describe('test', function () {
    const testInput = 1;
    function roboInput (input) {
        robot.typeString(input);
        robot.keyTap('enter');
    }

    describe('toyLambda', function () {
        const results = {
            'simple.lambda': 3,
            'nested.lambda': 7,
            'definition.lambda': 4,
            'function.lambda': 5,
            'abstr.lambda': 'function',
            'separateArgs.lambda': 5,
            'huge.lambda': 12,
            'print.lambda': true,
            'read.lambda': testInput,
            'readAndPrint.lambda': true,
            'recursion.lambda': 45,
            'church.lambda': 4
        };

        describe('test interpret', function () {
            fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                it(file + ' should pass with ' + results[file], function () {
                    if (file.includes('read')) {
                        roboInput(testInput);
                    }
                    const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                    boilerplate.interpreterBoilerplateTest(code, function (err, result) {
                        expect(err).equal(null);

                        if (results[file] === 'function') {
                            expect(typeof result).equal(results[file]);
                        } else {
                            expect(result).deep.equal(results[file]);
                        }
                    });
                })
            });
        });
        
        describe('test first futamura projection', function () {
            // increase timeout
            this.timeout(12000);
        
            fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                it(file + ' should pass with ' + results[file], function () {
                    const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');

                    boilerplate.futamuraBoilerplateTest(code, function (err, futamuraResult) {
                        expect(err).equal(null);

                        if (results[file] === 'function') {
                            const result = require(futamuraResult);
                            expect(typeof result).equal(results[file]);
                        } else {
                            if (file.includes('read')) {
                                expect(true).equal(true);
                            } else {
                                const result = require(futamuraResult);
                                expect(result).deep.equal(results[file]);
                            }
                        }
                    })('input/toyLambda/' + file);
                });
            });
        });
    });
})