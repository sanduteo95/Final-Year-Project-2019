#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const parserJS = require('./lib/toyJS/parser.js');
const interpreterJS = require('./lib/toyJS/interpreter.js');
const parserLambda = require('./lib/toyLambda/parser.js');
const interpreterLambda = require('./lib/toyLambda/interpreter.js');
const futamura = require('./lib/futamura.js');

let language = '';
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
    .action(function (file, options) {
        fileName = file;
        language = (file.substring(file.lastIndexOf('.') + 1) === 'js' ? 'toyJS' : 'toyLambda');
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
        process.env.NUM_CALLS = 75;
    }

if (program.runParser) {
    console.log('The result of parsing the given file is: ');
    let result;
    if (language === 'toyJS') {
        result = parserJS.parse(code);
    } else {
        result = parserLambda.parse(code);
    }
    console.log(JSON.stringify(result));
}

if (program.runInterpreter) {
    console.log('The result of interpret the given file is:');
    if (language === 'toyJS') {
        console.log(interpreterJS(parserJS.parse(code)));
    } else {
        interpreterLambda(parserLambda.parse(code), function (err, result) {
            if (err) {
                throw err;
            }
            console.log(JSON.stringify(result));
            return;
        });
    }
}

if (program.runFutamura) {
    console.log('The result of running the first Futamura projection on the given file is: ');
    let result;
    if (language === 'toyJS') {
        result = futamura.apply(parserJS.parse(code), fileName, false);
    } else {
        result = futamura.apply(parserLambda.parse(code), fileName, true);
    }
    console.log(JSON.stringify(result));
}