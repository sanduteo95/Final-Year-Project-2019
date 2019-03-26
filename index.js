#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const boilerplate = require('./lib/boilerplate.js');

const report = require('./lib/report/report.js');
const mlReport = require('./lib/report/mlReport.js');
const strategyReport = require('./lib/report/strategyReport.js');

let fileName = undefined;
let maxTermCalls = 125;
let isGoIMachine = false;
let addClosure = false;
let closureStrategy = '';

program
    .version('1.0.0')
    .description('Run the toy language or SSD language with the provided options.')
    .option('-g, --goiMachine', 'Run the program on the GoIMachine for SSD - otherwise it runs on the toy lambda langauge')
    .option('-p, --runParser <file>', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter <file>', 'Run interpreter on program in the provided file')
    .option('-c, --runCompiler <file>', 'Run compiler/translator on program in the provided file')
    .option('-1, --runFutamura1 <file>', 'Apply the First Futamura projections on program in the provided file')
    .option('-2, --runFutamura2', 'Apply the First Futamura projections on program in the provided file')
    .option('-o, --closureOption [number]', 'Apply the Google Closure Compiler in strtegy with given number')
    .option('-d, --debug', 'Allow some debug logs')
    .option('-s, --stack [number]', 'Specifiy the number of allowed nested calls (before timeouts are added)')
    .option('-r, --runBenchmarks', 'Create report by running tests a number of times');

// set up the help option
program.on('--help', () => {
    let command = program._name;
    if (program.rawArgs[0].includes('node')) {
        command = `node ${command}.js`;
    }
    console.log('\nUsage: ')
    console.log(`  $ ${command} -p <file>                        # Parses the program `);
    console.log(`  $ ${command} -i <file>      [-d]              # Interprets the program using the toyLambda intepreeter `);
    console.log(`  $ ${command} -i <file> [-g]                   # Interprets the program using the SSD interpreter `);
    console.log(`  $ ${command} -c <file> [-g]        [-s value] # Compiles the program `);
    console.log(`  $ ${command} -1 <file> [-g]        [-s value] # Runs the First Futamura Projections on the program `);
    console.log(`  $ ${command} -1 <file> [-g]  -o  1            # Uses Closure for the First Futamura Projection`);
    console.log(`  $ ${command} -1 <file> [-g]  -o  2            # Uses Closure for the First Futamura Projection, then Prepack`);
    console.log(`  $ ${command} -1 <file> [-g]  -o  3            # Uses Prepack for the First Futamura Projection, then Closure`);
    console.log(`  $ ${command} -1 <file> [-g]  -o  4            # Uses Closure for the First Futamura Projection, then Prepack, then Closure`);
    console.log(`  $ ${command} -1 <file> [-g]  -o  5            # Uses Prepack for the First Futamura Projection, then Closure, then Prepack`);
    console.log(`  $ ${command} -2        [-g] [-o]              # Runs the Second Futamura Projections on the interpreter with our without the Closure option `);
    console.log(`  $ ${command} -r         -g                    # Compiles a benchmark report for the toyLambda/SSD language `);
    console.log(`  $ ${command} -r              -o               # Compiles a strategy report comparing the Closure options to Prepack `);
    process.exit(1);
});

program.parse(process.argv);

// first check if SSD that we only try to run allowed commands
if (program.goiMachine) {
    // return an error if tried to run a parser on the GoI Machine
    if (program.runParser) {
        console.error('Incorrect usage. Option GoIMachine cannot be used in combination with current option. For correct usage run -h or --help.');
        process.exit(1);
    }
    // signify running on the GoI Machine
    isGoIMachine = true;
} else {
    // signify NOT running on the GoI Machine
    isGoIMachine = false;
}

// then check if the following options have the required file
if (program.runParser || program.runInterpreter || program.runCompiler || program.runFutamura1) {
    fileName = program.runParser || program.runInterpreter || program.runCompiler || program.runFutamura1;

    if (fs.existsSync(fileName)) {
        if (isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'ssd') {
            console.error('Incorrect usage. The SSD paradigm only accepts files with extension .ssd.');
            process.exit(1);
        } else if (!isGoIMachine && fileName.substring(fileName.lastIndexOf('.') + 1) !== 'lambda') {
            console.error('Incorrect usage. The toy lambda calculus only accepts files with extension .lambda.');
            process.exit(1);
        }
    } else {
        console.error('Incorrect usage. The provided file does not exist.');
        process.exit(1);
    }
} else if (program.isGoIMachine || program.runFutamura2 || program.runBenchmarks || program.debug) {
    // check that options with no extra value are "true"
    var value = program.isGoIMachine || program.runFutamura2 || program.runBenchmarks || program.debug;
    if (value != true) {
        console.error('Incorrect usage. Provided a file or value when it was not needed. For correct usage run -h or --help.');
        process.exit(1);
    }
}

// check that we don't combine main options
if ([program.runParser, program.runInterpreter, program.runCompiler, program.runFutamura1, program.runFutamura2, program.runBenchmarks].filter(option => option).length > 1) {
    console.error('Incorrect usage. Options cannot be combined. For correct usage run -h or --help.');
    process.exit(1);
}

// setup the global variables based on the options
if (program.debug) {
    // make sure we're not using the stack setting on disallowed operations
    if (program.runParser || (program.runInterpreter && isGoIMachine) || program.runFutamura1 || program.runFutamura2 || program.runBenchmarks) {
        console.error('Incorrect usage. Options debug cannot be used in combination with current options. For correct usage run -h or --help.');
        process.exit(1);
    }
    process.env.DEBUG = true;
} else {
    process.env.DEBUG = false;
}

// setup the stack options
if (program.stack) {
    // make sure we're not using the stack setting on disallowed operations
    if (program.runParser || program.runInterpreter || program.runFutamura2 || program.runBenchmarks) {
        console.error('Incorrect usage. Options stack cannot be used in combination with current options. For correct usage run -h or --help.');
        process.exit(1);
    } else {
        if (!isNaN(program.stack) && (program.stack === '1' || program.stack != true)) {
            maxTermCalls = parseInt(program.stack);
        } else {
            console.error('Incorrect usage. Option stack must be provided and be a number.');
            process.exit(1);
        }
    }
}

// setup the closure strategy
if (program.closureOption) {
    // make sure we're not using the closure strategy on disallowed operations
    if (!program.runFutamura1 && !program.runFutamura2 && !program.runBenchmarks) {
        console.error('Incorrect usage. Option closure strategy cannot be used in combination with current options. For correct usage run -h or --help.');
        process.exit(1);
    } else {
        addClosure = true;
        // the value of strategy can only be assigned on the First Futamura Projection
        if (!program.runFutamura2 && !program.runBenchmarks && !isNaN(program.closureOption) && (program.closureOption === '1' || program.closureOption != true)) {
            closureStrategy = parseInt(program.closureOption);
            if (closureStrategy < 1 || closureStrategy > 5) {
                console.error('Incorrect usage. Provided closure strategy does not exist. For correct usage run -h or --help.');
                process.exit(1);
            }
        } else {
            if (!program.runFutamura2 && !program.runBenchmarks) {
                console.error('Incorrect usage. Closure strategy option must be provided and be a number between 1-5.');
                process.exit(1);
            }
        }
    }
}

// check main options
if (program.runParser) {
    const code = fs.readFileSync(path.join(__dirname, program.runParser), 'utf8');
    const result = boilerplate.parserBoilerplate(code);
    console.log(JSON.stringify(result));
} 
else if (program.runInterpreter) {
    const code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    boilerplate.interpreterBoilerplate(fileName, code, isGoIMachine);
} 
else if (program.runCompiler) {
    boilerplate.compilerBoilerplate(fileName, maxTermCalls, isGoIMachine);
} 
else if (program.runFutamura1) {
    const code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    return boilerplate.futamura1Boilerplate(fileName, code, maxTermCalls, addClosure, closureStrategy, isGoIMachine)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.error('Failed with: ' + err.message);
            process.exit(1);
        });
} 
else if (program.runFutamura2) {
    return boilerplate.futamura2Boilerplate(isGoIMachine, addClosure)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.error('Failed with: ' + err.message);
        });
} 
else if (program.runBenchmarks) {
    if (addClosure) {
        return strategyReport.runStrategyBenchmarks()
            .catch(err => {
                console.error('Failed with: ' + err.message);
                process.exit(1);
            });
    } else {
        return report.runBenchmarks(isGoIMachine)
            .then(() => {
                if (isGoIMachine) { 
                    return mlReport.runBenchmarks(); 
                }
            }).catch(err => {
                console.error('Failed with: ' + err.message);
                process.exit(1);
            });
    }
} else {
    console.error('Incorrect usage. Option either does not exist or used incorrectly. For correct usage run -h or --help.');
    process.exit(1);
}