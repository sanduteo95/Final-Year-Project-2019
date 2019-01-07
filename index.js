#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const boilerplate = require('./lib/boilerplate.js');
const efsd = require('./lib/EFSD/term/index.js');

let addTiming = false;
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
    .option('-t, --time', 'Allow testing runtime')
    .parse(process.argv);

if (program.goiMachine) {
    // return an error if tried to run on the GoI Machine with incompatible options
    if (program.runParser || program.debug || program.stack) {
        console.error('Cannot run the GoI Machine with -p, -d, -s, or -t options.');
        return;
    }
    // signify running on the GoI Machine
    isGoIMachine = true;
} else {
    // setup the global variables based on the options
    if (program.debug) {
        process.env.DEBUG = true;
    } else {
        process.env.DEBUG = false;
    }

    if (program.stack) {
        if (!isNaN(program.stack) && program.stack != true) {
            maxTermCalls = parseInt(program.stack);
        } else {
            console.error('Stack option must be provided and be a number.');
            return;
        }
    }
    // signify NOT running on the GoI Machine
    isGoIMachine = false;
}

if (program.time) {
    addTiming = true;
}

// check main options
if (program.runParser) {
    const code = fs.readFileSync(path.join(__dirname, program.runParser), 'utf8');
    const result = boilerplate.parserBoilerplate(code);
    console.log(JSON.stringify(result));
} else if (program.runInterpreter) {
    const code = fs.readFileSync(path.join(__dirname, program.runInterpreter), 'utf8');
    if (program.goiMachine) {
        const result = efsd.interpreter(code, addTiming)
        console.log(JSON.stringify(result));
    } else {
        boilerplate.interpreterBoilerplate(code, addTiming, maxTermCalls);
    }
} else if (program.runFutamura) {
    const code = fs.readFileSync(path.join(__dirname, program.runFutamura), 'utf8');
    if (program.goiMachine) {
        const result = efsd.futamura(code, program.runFutamura, addTiming)
        console.log(JSON.stringify(result));
    } else {
        const result = boilerplate.futamuraBoilerplate(code, addTiming, maxTermCalls)(program.runFutamura);
        console.log(JSON.stringify(result));
    }
} else if (program.debug || program.stack || program.time) {
    console.error('Cannot run the program with options -d, -s, or -t on their own.');
}

