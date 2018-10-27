#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const parser = require('./lib/parser.js');
const interpreter = require('./lib/interpreter.js');
const futamura = require('./lib/futamura.js');

program
    .version('0.0,1')
    .option('-p, --runParser <file>', 'Run parser on given program [file]')
    .option('-i, --runInterpreter <file>', 'Run interpreter on given program [file]')
    .option('-f, --runFutamura1 <file>', 'Apply the first Futamura projection to program [file]')
    .parse(process.argv);

if (program.runParser) {
    console.log('The result of parsing the given file is: ');
    const programToParse = fs.readFileSync(path.join(__dirname, program.runParser), 'utf8');
    let result = parser.parse(programToParse);
    console.log(JSON.stringify(result));
}

if (program.runInterpreter) {
    console.log('The result of interpret the given file is:');
    const programToInterpret = fs.readFileSync(path.join(__dirname, program.runInterpreter), 'utf8');
    const programParseTree = parser.parse(programToInterpret);
    const functionApplicationParseTree = parser.parse('f()');
    let result = interpreter(programParseTree, functionApplicationParseTree);
    console.log(result);
}

if (program.runFutamura1) {
    console.log('The result of running the first Futamura prorjection on the given file is: ');
    const programToRunFutamura = fs.readFileSync(path.join(__dirname, program.runFutamura1), 'utf8');
    const programParseTree = parser.parse(programToRunFutamura);
    const functionApplicationParseTree = parser.parse('f()');
    let result = futamura.futamura1(programParseTree, functionApplicationParseTree, program.runFutamura1);
    console.log(JSON.stringify(result));
}
