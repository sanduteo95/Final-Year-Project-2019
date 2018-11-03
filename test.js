const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const input = './input/';
const futamura = require('./lib/futamura.js');


describe('toyJS', function () {
    const parserJS = require('./lib/toyJS/parser.js');
    const interpreterJS = require('./lib/toyJS/interpreter.js');

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
        it('should pass', function () {
            fs.readdirSync(input + '/toyJS').forEach(function (file) {
                console.log('Testing ' + file);
                console.log('It should return ' + results[file]);
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
            });
        })
    });
    
    describe('test first futamura projection', function () {
        // increase timeout
        this.timeout(6000);
    
        it('should pass', function () {
            fs.readdirSync(input + '/toyJS').forEach(function (file) {
                console.log('Testing ' + file);
                console.log('It should return ' + results[file]);
    
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
            });
        })
    });
});

describe('toyLambda', function () {

    const parserLambda = require('./lib/toyLambda/parser.js');
    const interpreterLambda = require('./lib/toyLambda/interpreter.js');


    const results = {
        'simple.lambda': 3,
        'nested.lambda': 7,
        'definition.lambda': 4,
        'function.lambda': 5,
        'abstr.lambda': 'Variable or named lambda x has not been defined',
        'separateArgs.lambda': 5,
        'huge.lambda': 12
    };

    describe('test interpret', function () {
        it('should pass', function () {
            fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                console.log('Testing ' + file);
                console.log('It should return ' + results[file]);
                const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                const programParseTree = parserLambda.parse(code);
                if (typeof results[file] === 'string') {
                    try {
                        interpreterLambda(programParseTree);
                        expect(true).equal(false);
                    } catch (err) {
                        expect(err.message).deep.equal(results[file]);
                    }
                } else {
                    let result = interpreterLambda(programParseTree);
                    expect(result).deep.equal(results[file]);
                }
            });
        })
    });
    
    describe('test first futamura projection', function () {
        // increase timeout
        this.timeout(6000);
    
        it('should pass', function () {
            fs.readdirSync(input + '/toyLambda').forEach(function (file) {
                console.log('Testing ' + file);
                console.log('It should return ' + results[file]);
    
                const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
                const programParseTree = parserLambda.parse(code);
    
                if (typeof results[file] === 'string') {
                    futamura.apply(programParseTree, 'input/toyLambda/' + file, true);
                    expect(true).equal(true);
                    // TODO: test error?
                } else {
                    let result = require(futamura.apply(programParseTree, 'input/toyLambda/' + file, true));
                    expect(result).deep.equal(results[file]);
                }
            });
        })
    });
});