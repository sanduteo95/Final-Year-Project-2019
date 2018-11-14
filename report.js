const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const robot = require('robotjs');

const input = './input/';
const boilerplate = require('./lib/boilerplate.js');

const testInput = 1;

function roboInput (input) {
    robot.typeString(input);
    robot.keyTap('enter');
}

 
let testResults = {};

function createReport () {
    let body = '<table><tr><th>#</th><th>Test</th><th>Time </th><th>Time (Futamura)</th></tr>';

    Object.keys(testResults).forEach((name, i) => {
        const formattedName = name.substring(0, name.indexOf('.'));
        body += '<tr><td>' + i + '</td><td><a href="../output/toyLambda/' + formattedName + '.js">' + formattedName + '</a></td><td>' + testResults[name].timing + 'ms</td><td>' + testResults[name].futamuraTiming + 'ms</td></tr>';
    });
    body += '</table>'

    const reportDir = path.join(__dirname + '/report');
    
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }

    const html = createHTML({
        title: 'Report',
        css: 'index.css',
        body: body
    });

    fs.writeFile(path.join(reportDir + '/index.html'), html, function (err) {
        if (err) console.log(err)
    });
}

function runInterpreterBenchmark (files, callback) {
    files.forEach(file => {
        testResults[file] = {};
        console.log('Running benchmark on ' + file);
        const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
        testResults[file].timing = new Date();
        if (file.includes('read')) {
            roboInput(testInput);
            boilerplate.interpreterBoilerplateReport(code, function (err, result) {
                if (err) {
                    throw err;
                 }
            });
            testResults[file].timing = new Date() - testResults[file].timing;
        } else {
            boilerplate.interpreterBoilerplateReport(code, function (err, result) {
                if (err) {
                   throw err;
                }
                testResults[file].timing = new Date() - testResults[file].timing;
            });
        }
    });
    callback();
}

function runFutamuraBenchmark (files, callback) {
    files.forEach(file => {
        console.log('Running benchmark on ' + file);
        const code = fs.readFileSync(path.join(__dirname, 'input/toyLambda/' + file), 'utf8');
        boilerplate.futamuraBoilerplateReport(code, function (err, futamuraResult) {
            if (err) {
                throw err;
            }
            if (file.includes('read')) {
                roboInput(testInput);
                testResults[file].futamuraTiming = new Date();
                require(futamuraResult);
                testResults[file].futamuraTiming = (new Date() - testResults[file].futamuraTiming) - 1; // we have some extra tiing added because of the boilerplate
            } else {
                testResults[file].futamuraTiming = new Date();
                require(futamuraResult)(function () {
                    testResults[file].futamuraTiming = (new Date() - testResults[file].futamuraTiming) - 1; // we have some extra tiing added because of the boilerplate
                });
            }
        })('input/toyLambda/' + file);
    });
    callback();
}

function runBenchmark () {
    const files = fs.readdirSync(input + '/toyLambda');

    console.log('\n=== INTERPRETER ===');
    runInterpreterBenchmark(files, function () {
        console.log('\n=== FUTAMURA ===');
        runFutamuraBenchmark(files, function () {
            createReport();
        });
    });
}

runBenchmark();