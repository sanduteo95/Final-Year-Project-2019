#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const parser = require('./lib/parser.js');
const interpreter = require('./lib/interpreter.js');
const futamura = require('./lib/futamura.js');

let code = '';

program
    .version('1.0.0')
    .usage('[options]')
    .description('Run the toy language with the provided options.')
    .option('-p, --runParser', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura1', 'Apply the first Futamura projection on program in the provided file')
    .action(function (file, options) {
        code = fs.readFileSync(path.join(__dirname, file), 'utf8');
    })
    .parse(process.argv);

if (program.runParser) {
    console.log('The result of parsing the given file is: ');
    let result = parser.parse(code);
    console.log(JSON.stringify(result));
}

if (program.runInterpreter) {
    console.log('The result of interpret the given file is:');
    const programParseTree = parser.parse(code);
    const functionApplicationParseTree = parser.parse('f()');
    let result = interpreter(programParseTree, functionApplicationParseTree);
    console.log(result);
}

if (program.runFutamura1) {
    console.log('The result of running the first Futamura prorjection on the given file is: ');
    const programParseTree = parser.parse(code);
    const functionApplicationParseTree = parser.parse('f()');
    let result = futamura.futamura1(programParseTree, functionApplicationParseTree, program.runFutamura1);
    console.log(JSON.stringify(result));
}