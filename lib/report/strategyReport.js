const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const execSync = require('child_process').execSync;
const Benchmark = require('benchmark');
const boilerplate = require('../boilerplate');

const formatResults = testResults => {
    let minValues = {};
    testResults.forEach(benchmarkResult => {
        benchmarkResult = benchmarkResult[Object.keys(benchmarkResult)[0]];
        benchmarkResult.forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            minValues[name] = Math.min(fileResult[name]['PP'], fileResult[name]['CC'], fileResult[name]['PP-CC'], fileResult[name]['CC-PP'], fileResult[name]['PP-CC-PP'], fileResult[name]['CC-PP-CC']);
        });
    });

    return {minValues};
};

const createStrategyReport = testResults => {
    let body = '';
    console.log(JSON.stringify(testResults, null, 2));
    const {minValues} = formatResults(testResults);
    testResults.forEach(benchmarkResult => {
        const language = Object.keys(benchmarkResult)[0];
        benchmarkResult = benchmarkResult[language];
        body += `<h3>Language: ${language}</h3>`;
        body += '<table><tr><th>#</th><th>Test</th><th>PP</th><th>CC</th><th>CC-PP</th><th>PP-CC</th><th>CC-PP-CC</th>><th>PP-CC-PP</th></tr>';
        benchmarkResult.forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            let ppColumnClass = fileResult[name]['PP'] === minValues[name] ? 'minValue' : '';
            let ccColumnClass = fileResult[name]['CC'] === minValues[name] ? 'minValue' : '';;
            let ppccColumnClass = fileResult[name]['PP-CC'] === minValues[name] ? 'minValue' : '';;
            let ccppColumnClass = fileResult[name]['CC-PP'] === minValues[name] ? 'minValue' : '';;
            let ppccppColumnClass = fileResult[name]['PP-CC-PP'] === minValues[name] ? 'minValue' : '';;
            let ccppccColumnClass = fileResult[name]['CC-PP-CC'] === minValues[name] ? 'minValue' : '';;
            body += '<tr><td>' + (i + 1) + '</td><td>' + name + `</td><td class=${ppColumnClass}>` + fileResult[name]['PP'].toFixed(2) + `</td><td class=${ccColumnClass}>` + fileResult[name]['CC'].toFixed(2) + `</td><td class=${ccppColumnClass}>` + fileResult[name]['CC-PP'].toFixed(2) + `</td><td class=${ppccColumnClass}>` + fileResult[name]['PP-CC'].toFixed(2) + `</td><td class=${ccppccColumnClass}>` + fileResult[name]['CC-PP-CC'].toFixed(2) + `</td><td class=${ppccppColumnClass}>` + fileResult[name]['PP-CC-PP'].toFixed(2) + '</td></tr>';
        });
        body += '</table>'
    });

    const reportDir = path.join(__dirname + '/../../report');

    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }

    const strategyDir = path.join(__dirname + '/../../report/strategy');

    if (!fs.existsSync(strategyDir)) {
        fs.mkdirSync(strategyDir);
    }

    const html = createHTML({
        title: 'Report',
        css: '../index.css',
        body: body
    });

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(strategyDir + '/index.html'), html, function (err) {
            return err ? reject(err) : resolve();
        });
    });
};

const promiseToRunAllStrategies = (file, maxTermCall, language) => {
    return new Promise((resolve, reject) => {
        console.log('\nFile: ' + file);

        let suite = new Benchmark.Suite;

        // global node command
        const nodeCommand = 'node --max-old-space-size=120000 --stack-size=100000';

        // set up the futamura test and get the file name
        return boilerplate.futamura1Boilerplate('input/' + language + '/pp-' + file, maxTermCall, 0, language === 'SSD')
            .then(futamuraFile0 => {
                futamuraFile0 = futamuraFile0.substring(futamuraFile0.indexOf('output'));

                suite.add('PP', function () {
                    execSync(`${nodeCommand} ${futamuraFile0}`);
                });

                return boilerplate.futamura1Boilerplate('input/' + language + '/cc-' + file, maxTermCall, 1, language === 'SSD')
            }).then(futamuraFile1 => {
                futamuraFile1 = futamuraFile1.substring(futamuraFile1.indexOf('output'));

                suite.add('CC', function () {
                    execSync(`${nodeCommand} ${futamuraFile1}`);
                });

                return boilerplate.futamura1Boilerplate('input/' + language + '/cc-pp-' + file, maxTermCall, 2, language === 'SSD')
            }).then(futamuraFile2 => {
                futamuraFile2 = futamuraFile2.substring(futamuraFile2.indexOf('output'));

                suite.add('CC-PP', function () {
                    execSync(`${nodeCommand} ${futamuraFile2}`);
                });

                return boilerplate.futamura1Boilerplate('input/' + language + '/pp-cc-' + file, maxTermCall, 3, language === 'SSD')
            }).then(futamuraFile3 => {
                futamuraFile3 = futamuraFile3.substring(futamuraFile3.indexOf('output'));

                suite.add('PP-CC', function () {
                    execSync(`${nodeCommand} ${futamuraFile3}`);
                });

                return boilerplate.futamura1Boilerplate('input/' + language + '/cc-pp-cc-' + file, maxTermCall, 4, language === 'SSD')
            }).then(futamuraFile4 => {
                futamuraFile4 = futamuraFile4.substring(futamuraFile4.indexOf('output'));

                suite.add('CC-PP-CC', function () {
                    execSync(`${nodeCommand} ${futamuraFile4}`);
                });

                return boilerplate.futamura1Boilerplate('input/' + language + '/pp-cc-pp-' + file, maxTermCall, 5, language === 'SSD')
            }).then(futamuraFile5 => {
                futamuraFile5 = futamuraFile5.substring(futamuraFile5.indexOf('output'));

                suite.add('PP-CC-PP', function () {
                    execSync(`${nodeCommand} ${futamuraFile5}`);
                });
                // add listeners
                suite.on('cycle', function (event) {
                        console.log(String(event.target));
                    }).on('error', function (error) {
                        return reject(new Error('There was an error benchmarking! Failed with: ' + error.message));
                    }).on('complete', function () {
                        console.log('\nFastest test was: ' + this.filter('fastest').map('name'));
                        console.log('Slowest test was: ' + this.filter('slowest').map('name'));
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

const promiseToRunStrategyBenchmark = language => {
    const maxTermCall = 500;
    const files = fs.readdirSync(`./input/${language}`);
    return files
        .filter(file => file.includes(language === 'SSD' ? '.ssd' : '.lambda') 
                        && !file.includes('read')
                        && file !== 'random_light_control.ssd'
                        && file !== 'random_planets.ssd'
                        && file !== 'tensor_creation.ssd')
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRunAllStrategies(currentFile, maxTermCall, language).then(currentResult => (
                        [...chainResults, currentResult]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            console.log(arrayOfResults)
            let result = {};
            result[language] = arrayOfResults;
            return result;
        }).catch(err => {
            return Promise.reject(err);
        });
};

const runStrategyBenchmarks = () => {
    return promiseToRunStrategyBenchmark('toyLambda')
        .then(results => {
            lambdaResults = results;
            return promiseToRunStrategyBenchmark('SSD')
        }).then(ssdResults => {
            return createStrategyReport([lambdaResults, ssdResults]);
        });
};

module.exports = {
    runStrategyBenchmarks: runStrategyBenchmarks
}
