#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const boilerplate = require('./lib/boilerplate.js');
const report = require('./lib/report.js');
const strategyReport = require('./lib/strategyReport.js');

let maxTermCalls = 125;
let isGoIMachine = false;
let addClosure = false;

program
    .version('1.0.0')
    .usage('[options]')
    .description('Run the toy language or EFSD language with the provided options.')
    .option('-g, --goiMachine', 'Run the program on the GoIMachine for EFSD - otherwise it runs on the oy langauge')
    .option('-p, --runParser <file>', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter <file>', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura <file>', 'Apply the first Futamura projection on program in the provided file')
    .option('-c, --addClosure [number]', 'Apply the Google Closure Compiler in strtegy with given number')
    .option('-d, --debug', 'Allow some debug logs')
    .option('-s, --stack [number]', 'Specifiy the number of allowed nested calls (before timeouts are added)')
    .option('-r, --createReport', 'Create report by running tests a number of times')
    .option('-cr, --createStrategyReport', 'Create strategy report by running tests a number of times')
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
    console.log('  $ [command] -r [-g]  # Compiler a benchmark report');
    console.log('  $ [command] -cr  # Compiles a strategy report for the Closure Compiler');
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
    if (!isNaN(program.stack) && (program.stack === '1' || program.stack != true)) {
        maxTermCalls = parseInt(program.stack);
    } else {
        console.error('Stack option must be provided and be a number.');
        return;
    }
}

if (program.addClosure) {
    if (!program.runFutamura && !program.createReport) {
        console.error('Incorrect usage. Cannot run the Google Closure Compiler outside of the Futamura Projection or the report.');
        console.error('Correct usage is:');
        console.log('  $ [command] -f <pathToFile> [-c strategy] [-g] [-d] [-s value]');
        console.log('  $ [command] -cr');
        return;
    } else {
        addClosure = true;
        if (program.createReport && !isNaN(program.addClosure) && (program.addClosure === '1' || program.addClosure != true)) {
            closureStrategy = parseInt(program.addClosure);
            if (closureStrategy < 1 || closureStrategy > 5) {
                console.error('Incorrect usage. Closure strategy option must be a number between 1-5.');
                console.error('Correct usage is:');
                console.log('  $ [command] -f <pathToFile> -c 1  # runs Closure');
                console.log('  $ [command] -f <pathToFile> -c 2  # runs Closure, then Prepack');
                console.log('  $ [command] -f <pathToFile> -c 3  # runs Prepack, then Closure');
                console.log('  $ [command] -f <pathToFile> -c 4  # runs Closure, then Prepack, then Closure');
                console.log('  $ [command] -f <pathToFile> -c 5  # runs Prepack, then Closure, then Prepack');
                return;
            }
        } else {
            if (!program.createReport) {
                console.error('Closure strategy option must be provided and be a number between 1-5.');
                return;
            }
        }
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
    return boilerplate.futamuraBoilerplate(code, maxTermCalls, addClosure, closureStrategy)(fileName)
        .then(result => {
            console.log(JSON.stringify(result));
        }).catch(err => {
            console.error('Failed with: ' + err.message);
        });
} else if (program.createReport) {    
    if (program.addClosure) {
        return strategyReport.runStrategyBenchmarks()
            .catch(err => {
                console.error('Failed with: ' + err.message);
            });
    } else {
        return report.runBenchmarks(isGoIMachine)
            .catch(err => {
                console.error('Failed with: ' + err.message);
            });
    }
} else if (program.debug || program.stack || program.time) {
    console.error('Incorrect usage. Cannot run the program with options -d or -s on their own.');
    console.error('Correct usage is:');
    console.log('  $ [command] -i <pathToFile> [-g] [-d] [-s value]');
    console.log('  $ [command] -f <pathToFile> [-g] [-d] [-s value]');
    console.log('  $ [command] -r [-g]');
    console.log('  $ [command] -cr');
    return;
}

