const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const exec = require('child_process').exec;

const input = './input/';

const maxTermCalls = [50, 100, 125, 150, 200, 300, 600];
const stackSize = 100000;

function createReport (testResults) {
    let body = '';

    console.log(JSON.stringify(testResults));
    testResults.forEach(bachmarkResult => {
        const maxTermCall = Object.keys(bachmarkResult)[0];
        body += `<h3>Number of recursive calls: ${maxTermCall}</h3>`;
        body += '<table><tr><th>#</th><th>Test</th><th>Time </th><th>Time (Futamura)</th></tr>';
        bachmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            const formattedName = name.substring(0, name.indexOf('.'));
            body += '<tr><td>' + i + '</td><td><a href="../output/toyLambda/' + formattedName + '.js">' + formattedName + '</a></td><td>' + fileResult[name].timing + '</td><td>' + fileResult[name].futamuraTiming + '</td></tr>';
        });
        body += '</table>'
    });

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

function getTime(stdout) {
    const logString = 'time';
    const indexOfTime = stdout.indexOf(logString);
    const indexOfNewline = indexOfTime + stdout.substring(indexOfTime).indexOf('\n');
    return stdout.substring(indexOfTime + logString.length + 2, indexOfNewline);
}

function promiseToRunInterpreter (file, maxTermCall) {
    console.log('interpreter')
    return new Promise((resolve, reject) => {
        let input = '';
        if(file.includes('read')) {
            input = ' <<< 1';
        }
        exec(`node --stack-size=${stackSize} index.js -i input/toyLambda/${file} -t ${input} -s ${maxTermCall}`, (err, stdout) => {
            if (err) {
                return reject(err);
            }
        
            return resolve(getTime(stdout));
        });
    });
}

function promiseToRunFutamura (file, maxTermCall) {
    console.log('futamura')
    return new Promise((resolve, reject) => {
        let input = '';
        if(file.includes('read')) {
            input = ' <<< 1';
        }

        exec(`node --stack-size=${stackSize} index.js -f input/toyLambda/${file} -t -s ${maxTermCall}; node output/toyLambda/${file.substring(0, file.indexOf('.') + 1)}js ${input}`, (err, stdout) => {
            if (err) {
                return reject(err);
            }
            return resolve(getTime(stdout));
        });
    });
}

function promiseToRun (file, maxTermCall) {
    console.log('File: ' + file);
    let timing, futamuraTiming;
    return promiseToRunInterpreter(file, maxTermCall)
        .then(response => {
            timing = response;
            return promiseToRunFutamura(file, maxTermCall);
        }).then(response => {
            futamuraTiming = response;
            let result = {};
            result[file] = {
                timing: timing,
                futamuraTiming: futamuraTiming
            };
            return result;
        });
}

function promiseToRunBenchmark (maxTermCall) {
    console.log('\n====Benchmark: ' + maxTermCall);
    const files = fs.readdirSync(input + '/toyLambda');
    return files
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRun (currentFile, maxTermCall).then(currentResult => (
                        [ ...chainResults, currentResult ]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            let result = {};
            result[maxTermCall] = arrayOfResults;
            return result;
        });
}

function runBenchmarks () {
    return maxTermCalls
        .map(maxTermCall => Promise.resolve(maxTermCall))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentMaxTermCall => {
                    return promiseToRunBenchmark (currentMaxTermCall).then(currentResult => (
                        [ ...chainResults, currentResult ]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            createReport(arrayOfResults);
            return;
        }).catch(err => {
            throw err;
        });
}
runBenchmarks();
// promiseToRunBenchmark(50)
//     .then(response => {
//         createReport([response]);
//         return;
//     });