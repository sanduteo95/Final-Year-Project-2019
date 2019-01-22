#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const boilerplate = require('./lib/boilerplate.js');
const report = require('./lib/report.js');
let maxTermCalls = 125;
let isGoIMachine = false;

program
    .version('1.0.0')
    .usage('[options]')
    .description('Run the toy language or EFSD language with the provided options.')
    .option('-g, --goiMachine', 'Run the program on the GoIMachine for EFSD - otherwise it runs on the oy langauge')
    .option('-p, --runParser <file>', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter <file>', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura <file>', 'Apply the first Futamura projection on program in the provided file')
    .option('-d, --debug', 'Allow some debug logs')
    .option('-s, --stack [number]', 'Specifiy the number of allowed nested calls (before timeouts are added)')
    .option('-r, --createReport', 'Create report by running tests a number of times')
    .parse(process.argv);

if (program.goiMachine) {
    // return an error if tried to run on the GoI Machine with incompatible options
    if (program.runParser || program.debug) {
        console.error('Incorrect usage. Cannot run the GoI Machine with -p or -d options.');
        console.error('Correct usage is:');
        console.log('  $ [command] -i <pathToFile> -g [-s value]');
        console.log('  $ [command] -f <pathToFile> -g [-s value]');
        return;
    }
    // signify running on the GoI Machine
    isGoIMachine = true;
} else {
    // signify NOT running on the GoI Machine
    isGoIMachine = false;
}

if (program.createReport && (program.runParser || program.runInterpreter || program.runFutamura || program.debug || program.stack )) {
    console.error('Incorrect usage. Cannot run benchmarks with -p, -i, -f, -d or -s options.');
    console.error('Correct usage is:');
    console.log('  $ [command] -r <number> [-g]');
    return;
}

// setup the global variables based on the options
if (program.debug) {
    process.env.DEBUG = true;
} else {
    process.env.DEBUG = false;
}

// setup the stack options
if (program.stack) {
    if (!isNaN(program.stack) && (program.createReport === '1' || program.stack != true)) {
        maxTermCalls = parseInt(program.stack);
    } else {
        console.error('Stack option must be provided and be a number.');
        return;
    }
}

// check main options
if (program.runParser) {
    const code = fs.readFileSync(path.join(__dirname, program.runParser), 'utf8');
    const result = boilerplate.parserBoilerplate(code);
    console.log(JSON.stringify(result));
} else if (program.runInterpreter) {
    const fileName = program.runInterpreter;
    const code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    if (isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'efsd') {
        console.error('The EFSD paradigm only accepts files with extension .efsd.');
        return;
    } else if (!isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'lambda') {
        console.error('The toy lambda calculus only accepts fiels with extension .lambda.');
        return;
    }
    boilerplate.interpreterBoilerplate(code, maxTermCalls)(fileName);
} else if (program.runFutamura) {
    const fileName = program.runFutamura;
    const code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    if (isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'efsd') {
        console.error('The EFSD paradigm only accepts files with extension .efsd.');
        return;
    } else if (!isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'lambda') {
        console.error('The toy lambda calculus only accepts fiels with extension .lambda.');
        return;
    }
    const result = boilerplate.futamuraBoilerplate(code, maxTermCalls)(fileName);
    console.log(JSON.stringify(result));
} else if (program.createReport) {    
    return report.runBenchmarks(isGoIMachine)
        .catch(err => {
           throw err;
        });
} else if (program.debug || program.stack || program.time) {
    console.error('Incorrect usage. Cannot run the program with options -d or -s on their own.');
    console.error('Correct usage is:');
    console.log('  $ [command] -i <pathToFile> [-g] [-d] [-s value]');
    console.log('  $ [command] -f <pathToFile> [-g] [-d] [-s value]');
    console.log('  $ [command] -r [-g]');
    return;
}

