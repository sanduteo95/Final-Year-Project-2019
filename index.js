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
    .action(function (file, options) {
        fileName = file;
        language = (file.substring(file.lastIndexOf('.') + 1) === 'js' ? 'toyJS' : 'toyLambda');
        code = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    })
    .parse(process.argv);

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
    let result;
    if (language === 'toyJS') {
        result = interpreterJS(parserJS.parse(code));
    } else {
        result = interpreterLambda(parserLambda.parse(code));
    }
    console.log(result);
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