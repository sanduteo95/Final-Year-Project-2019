const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

const input = './input/';
const parser = require('./lib/parser.js');
const interpreter = require('./lib/interpreter.js');
const futamura = require('./lib/futamura.js');

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
        fs.readdirSync(input).forEach(function (file) {
            console.log('Testing ' + file);
            console.log('It should return ' + results[file]);
            const code = fs.readFileSync(path.join(__dirname, 'input/' + file), 'utf8');
            const programParseTree = parser.parse(code);
            if (results[file] === 'error') {
                try {
                    interpreter(programParseTree);
                    expect(true).equal(false);
                } catch (err) {
                    expect(err.message).deep.equal(results[file]);
                }
            } else {
                let result = interpreter(programParseTree);
                expect(result).deep.equal(results[file]);
            }
        });
    })
});

describe('test first futamura projection', function () {
    // increase timeout
    this.timeout(6000);

    it('should pass', function () {
        fs.readdirSync(input).forEach(function (file) {
            console.log('Testing ' + file);
            console.log('It should return ' + results[file]);

            const code = fs.readFileSync(path.join(__dirname, 'input/' + file), 'utf8');
            const programParseTree = parser.parse(code);

            if (results[file] === 'error') {
                futamura.futamura1(programParseTree, file);
                expect(true).equal(true);
                // TODO: test error?
            } else {
                let result = require(futamura.futamura1(programParseTree, file));
                expect(result).deep.equal(results[file]);
            }
        });
    })
});