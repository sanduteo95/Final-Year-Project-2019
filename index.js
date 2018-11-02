#! /usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

const interpreterJS = require('./lib/toyJS/interpreter.js');
const parserLambda = require('./lib/toyLambda/parser.js');
const interpreterLambda = require('./lib/toyLambda/interpreter.js');
const futamura = require('./lib/futamura.js');

let language = '';
let fileName = '';
let code = '';
program
    .version('1.0.0')
    .usage('[options]')
    .description('Run the toy language with the provided options.')
    .option('-p, --runParser [language] [file]', 'Run parser on program in the provided file')
    .option('-i, --runInterpreter [language] [file]', 'Run interpreter on program in the provided file')
    .option('-f, --runFutamura1 [language] [file]', 'Apply the first Futamura projection on program in the provided file')
    .action(function (language, file, options) {
        language = language;
        fileName = file;
        code = fs.readFileSync(path.join(__dirname, file), 'utf8');
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

if (program.runFutamura1) {
    console.log('The result of running the first Futamura projection on the given file is: ');
    const programParseTree = parser.parse(code);
    let result;
    if (language === 'toyJS') {
        result = futamura.futamura1(parserJS.parse(code), fileName, false);
    } else {
        result = futamura.futamura1(parserLambda.parse(code), fileName, true);
    }
    console.log(JSON.stringify(result));
}