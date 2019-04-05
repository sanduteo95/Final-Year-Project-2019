const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const execSync = require('child_process').execSync;
const Benchmark = require('benchmark');
const boilerplate = require('../boilerplate');

let maxTermCalls;

// global node command
const nodeCommand = 'node --max-old-space-size=120000 --stack-size=100000';

const createReport = jsResults => {
    let body = '';
    console.log(JSON.stringify(jsResults));

    jsResults.forEach(benchmarkResult => {
        const maxTermCall = Object.keys(benchmarkResult)[0];
        body += `<h3>Number of recursive calls: ${maxTermCall}</h3>`;
        body += '<table><tr><th>#</th><th>Test</th><th>Delta</th><th>Prepack</th><th>Closure</th></tr>';
        benchmarkResult[maxTermCall].forEach((fileResult, i) => {
            name = Object.keys(fileResult)[0];
            const formattedName = name.substring(0, name.indexOf('.'));
            let delta = fileResult[name].interpreter - fileResult[name].prepack;
            let closureStyle = '', prepackStyle = '';
            if (fileResult[name].interpreter - fileResult[name].closure > delta) {
                delta = fileResult[name].interpreter - fileResult[name].closure;
                closureStyle = 'background-color: #0080215e !important';
            } else {
                prepackStyle = 'background-color: #0080215e !important';
            }
            body += `<tr><td>` + (i + 1) + '</td><td>' + formattedName + '</td><td>' + delta.toFixed(2) + `</td><td style="${prepackStyle}">` + fileResult[name].prepack.toFixed(2) + `</td><td style="${closureStyle}">` + fileResult[name].closure.toFixed(2) + '</td></tr>';
        });
        body += '</table>'
    });

    const reportDir = path.join(__dirname + '/../../report');

    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }

    const langDir = path.join(__dirname + '/../../report/ML');

    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir);
    }

    const html = createHTML({
        title: 'Report',
        css: '../index.css',
        body: body,
        script: '../index.js'
    });

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(langDir + '/index.html'), html, function (err) {
            return err ? reject(err) : resolve();
        });
    });
};

const promiseToRunJS = (file, maxTermCall) => {
    return new Promise((resolve, reject) => {
        console.log('\nFile: ' + file);

        let prepackFile, closureFile;
        // set up the futamura test and get the file name
        return boilerplate.futamura1Boilerplate('input/SSD/ML/pp-' + file, maxTermCall, 0, true)
            .then(response => {
                prepackFile = response.substring(response.indexOf('output'));
                return boilerplate.futamura1Boilerplate('input/SSD/ML/cc-' + file, maxTermCall, 3, true)
            }).then(response => {
                closureFile = response.substring(response.indexOf('output'));
                let suite = new Benchmark.Suite;
                // add tests for both languages
                suite.add('interpreter', function () {
                    execSync(`${nodeCommand} index.js -i input/SSD/ML/${file} -g`);
                }).add('prepack', function () {
                    execSync(`${nodeCommand} ${prepackFile}`);
                }).add('closure', function () {
                    execSync(`${nodeCommand} ${closureFile}`);
                });

                // add listeners
                suite.on('cycle', function (event) {
                    console.log(String(event.target));
                }).on('error', function (error) {
                    return reject(new Error('There was an error benchmarking! Failed with: ' + error.message));
                }).on('complete', function () {
                    console.log('\nFastest test was: ' + this.filter('fastest').map('name'));
                    console.log('Slowest was test was: ' + this.filter('slowest').map('name'));
                    const tests = this.filter('successful');
                    let result = {};
                    result[file] = {};
                    tests.forEach(test => {
                        const meanTime = test.stats.mean;
                        const name = test.name;
                        result[file][name] = meanTime;
                    });
                    console.log(JSON.stringify(result, null, 2));
                    return resolve(result);
                })
                .run();
            });
    });
};

const promiseToRunJSBenchmarks = maxTermCall => {
    console.log('\n====Benchmark: ' + maxTermCall);
    const files = fs.readdirSync(path.join(__dirname, '../../input/SSD/ML'));
    return files
        .filter(file => file !== 'neural_network.ssd')
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRunJS(currentFile, maxTermCall).then(currentResult => (
                        [...chainResults, currentResult]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            let result = {};
            result[maxTermCall] = arrayOfResults;
            return result;
        }).catch(err => {
            return Promise.reject(err);
        });
};

const runBenchmarks = () => {
    maxTermCalls = [125, 500, 1000, 2000, 2500];
    return maxTermCalls
        .map(maxTermCall => Promise.resolve(maxTermCall))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentMaxTermCall => {
                    return promiseToRunJSBenchmarks(currentMaxTermCall).then(currentResult => (
                        [...chainResults, currentResult]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            return createReport(arrayOfResults);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err);
        });
};

module.exports = {
    runBenchmarks: runBenchmarks
}