#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const parser = require('./lib/toyLambda/parser.js');
const interpreter = require('./lib/toyLambda/interpreter.js');
const futamura = require('./lib/futamura.js');

let fileName = '';
let code = '';
program
    .version('1.0.0')
    .usage('[options] <file>')
    .description('Run the toy language with the provided options.')
    .option('-p, --runParser', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura', 'Apply the first Futamura projection on program in the provided file')
    .option('-d, --debug', 'Allow some debug logs')
    .option('-s, --stack [value]', 'The max stack value')
    .action(function (file) {
        fileName = file;
        code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    })
    .parse(process.argv);

    if (program.debug) {
        process.env.DEBUG = true;
    } else {
        process.env.DEBUG = false;
    }
    if (program.stack) {
        process.env.NUM_CALLS = parseInt(program.maxStack);
    } else {
        process.env.NUM_CALLS = 125;
    }

if (program.runParser) {
    console.log('The result of parsing the given file is: ');
    let result = parser.parse(code);
    console.log(JSON.stringify(result));
}

if (program.runInterpreter) {
    console.log('The result of interpreting the given file is:');
    interpreter(parser.parse(code), function (err, result) {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(result));
        return;
    });
}

if (program.runFutamura) {
    console.log('The result of running the first Futamura projection on the given file is stored in: ');
    let result  = futamura.apply(parser.parse(code), fileName, true);
    console.log(JSON.stringify(result));
}