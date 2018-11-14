#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const boilerplate = require('./lib/boilerplate.js');

let fileName = '';
let code = '';
let addTiming = false;
let maxTermCalls = 125;
program
    .version('1.0.0')
    .usage('[options] <file>')
    .description('Run the toy language with the provided options.')
    .option('-p, --runParser', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura', 'Apply the first Futamura projection on program in the provided file')
    .option('-d, --debug', 'Allow some debug logs')
    .option('-s, --stack [number]', 'Specifiy the number of allowed nested calls (before timeouts are added)')
    .option('-t, --time', 'Allow testing runtime')
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
    try {
        maxTermCalls = parseInt(program.stack);
    } catch (err) {
        throw new Error('Stack option must be a number');
    }
    if (program.time) {
        addTiming = true;
    }

if (program.runParser) {
    console.log('The result of parsing the given file is: ');
    const result = boilerplate.parserBoilerplate(code);
    console.log(JSON.stringify(result));
}

if (program.runInterpreter) {
    console.log('The result of interpreting the given file is:');
    boilerplate.interpreterBoilerplate(code, addTiming, maxTermCalls);
}

if (program.runFutamura) {
    console.log('The result of running the first Futamura projection on the given file is stored in: ');
    const result  =  boilerplate.futamuraBoilerplate(code, addTiming, maxTermCalls)(fileName);
    console.log(JSON.stringify(result));
}