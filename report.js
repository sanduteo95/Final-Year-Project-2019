const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const exec = require('child_process').exec;

const input = './input/';

// const testInput = 1;

let testResults = {};

function createReport () {
    let body = '<table><tr><th>#</th><th>Test</th><th>Time </th><th>Time (Futamura)</th></tr>';

    console.log(testResults)
    Object.keys(testResults).forEach((name, i) => {
        const formattedName = name.substring(0, name.indexOf('.'));
        body += '<tr><td>' + i + '</td><td><a href="../output/toyLambda/' + formattedName + '.js">' + formattedName + '</a></td><td>' + testResults[name].timing + '</td><td>' + testResults[name].futamuraTiming + '</td></tr>';
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

function runInterpretBenchmark (callback) {
    const files = fs.readdirSync(input + '/toyLambda');

    files.forEach((file, index) => {
        setTimeout(function () {
            testResults[file] = {};
            let input = '';
            if(file.includes('read')) {
                input = ' <<< 1';
            }
            exec('node index.js -i input/toyLambda/' + file + ' -t' + input, (err, stdout) => {
                if (err) {
                    callback(err);
                }
              
                const indexOfTime = stdout.indexOf('Time');
                const indexOfNewline = indexOfTime + stdout.substring(indexOfTime).indexOf('\n');
                console.log(`interpreter ${file}: ${stdout.substring(indexOfTime + 6, indexOfNewline + 1)}`);
                testResults[file].timing = stdout.substring(indexOfTime + 6, indexOfNewline + 1);
            });
        }, 1000 * index);  
    });
    setTimeout(function () {
        callback();
    }, files.length * 1000);
}

function runFutamuraBenchmark (callback) {
    const files = fs.readdirSync(input + '/toyLambda');

    files.forEach((file, index) => {
        setTimeout(function () {
            let input = '';
            if(file.includes('read')) {
                input = ' <<< 1';
            }
            exec('node --stack-size=100000 index.js -f input/toyLambda/' + file + ' -t -s 600', (err) => {    
                if (err) {
                    callback(err);
                }
              
                exec('node output/toyLambda/' + file.substring(0, file.indexOf('.') + 1) + 'js' + input, (err, stdout) => {
                    if (err) {
                        callback(err);
                    }
            
                    const indexOfTime = stdout.indexOf('Time');
                    const indexOfNewline = indexOfTime + stdout.substring(indexOfTime).indexOf('\n');
                    console.log(`futamura ${file}: ${stdout.substring(indexOfTime + 6, indexOfNewline + 1)}`);
                    testResults[file].futamuraTiming = stdout.substring(indexOfTime + 6, indexOfNewline + 1);
                });
            });
        }, 2000 * index);  
    });
    setTimeout(function () {
        callback();
    }, files.length * 2000);
}

runInterpretBenchmark(function (err) {
    if (err) {
        throw err;
    }
    runFutamuraBenchmark(function (err) {
        if (err) {
            throw err;
        }
        createReport();
    })
});