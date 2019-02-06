const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const execSync = require('child_process').execSync;
const Benchmark = require('benchmark');
const boilerplate = require('./boilerplate');

let language;
let maxTermCalls;

// global node command
const nodeCommand = 'node --max-old-space-size=120000 --stack-size=100000';

const getMin = (test, frpResult, jsResult, savedMin) => {
    frpResult[test] = (!frpResult[test] || isNaN(frpResult[test]) || frpResult[test] === null) ? 0 : frpResult[test];
    if (!savedMin ||
        (frpResult[test] < jsResult.futamura &&
            savedMin[test] > savedMin.futamura) ||
        Math.abs(frpResult[test] - jsResult.futamura) < Math.abs(savedMin[test] - savedMin.futamura)) {
        const newMin = {};
        newMin[test] = frpResult[test];
        newMin.futamura = jsResult.futamura;
        return newMin;
    } else {
        return savedMin;
    }
};

const formatResults = (jsResults, frpResults) => {
    let maxDeltas = {};
    let minFutamura = {};
    let minOcamlDifferences = {};
    let minHaskellDifferences = {};
    let minAgdaDifferences = {};
    jsResults.forEach(benchmarkResult => {
        const maxTermCall = Object.keys(benchmarkResult)[0];
        benchmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            if (language === 'EFSD') {
                minOcamlDifferences[name] = getMin('ocaml', frpResults[i][name], fileResult[name], minOcamlDifferences[name]);
                minHaskellDifferences[name] = getMin('haskell', frpResults[i][name], fileResult[name], minHaskellDifferences[name]);
                minAgdaDifferences[name] = getMin('agda', frpResults[i][name], fileResult[name], minAgdaDifferences[name]);
            } else {
                if (!minFutamura[name] || fileResult[name].futamura < minFutamura[name]) {
                    minFutamura[name] = fileResult[name].futamura;
                }
            }
            if (!maxDeltas[name] || fileResult[name].delta > maxDeltas[name]) {
                maxDeltas[name] = fileResult[name].delta;
            }
        });
    });
    return {
        maxDeltas,
        minFutamura,
        minOcamlDifferences,
        minHaskellDifferences,
        minAgdaDifferences
    };
};

const createRowClass = (test, frpResult, min, jsResult) => {
    if (min[test] === frpResult[test] && min.futamura === jsResult.futamura) {
        if (jsResult.delta < 0) {
            return `badMinDifference-${test} `;
        } else {
            return `goodMinDifference-${test} `;
        }
    } else {
        return "";
    }
};

const createReport = (jsResults, frpResults) => {
    let body = '';
    console.log(JSON.stringify(jsResults));
    console.log(JSON.stringify(frpResults));

    const {
        maxDeltas,
        minFutamura,
        minOcamlDifferences,
        minHaskellDifferences,
        minAgdaDifferences
    } = formatResults(jsResults, frpResults);

    jsResults.forEach(benchmarkResult => {
        const maxTermCall = Object.keys(benchmarkResult)[0];
        body += `<h3>Number of recursive calls: ${maxTermCall}</h3>`;
        if (language === 'EFSD') {
            body += '<table><tr><th>#</th><th>Test</th><th>Delta</th><th>Futamura</th><th>OCaml (JS)</th><th>Haskell (JS)</th><th>Agda (JS)</th></tr>';
        } else {
            body += '<table><tr><th>#</th><th>Test</th><th>Delta</th><th>Futamura</th></tr>';
        }
        benchmarkResult[maxTermCall].forEach((fileResult, i) => {
            name = Object.keys(fileResult)[0];
            const formattedName = name.substring(0, name.indexOf('.'));
            let deltaColumn;
            if (maxDeltas[name] === fileResult[name].delta) {
                if (maxDeltas[name] < 0) {
                    deltaColumn = '<td class="badMaxDelta">' + fileResult[name].delta.toFixed(2) + '</td>';
                } else {
                    deltaColumn = '<td class="goodMaxDelta">' + fileResult[name].delta.toFixed(2) + '</td>';
                }
            } else {
                deltaColumn = '<td>' + fileResult[name].delta.toFixed(2) + '</td>';
            }
            if (language === 'EFSD') {
                let rowClass = "";
                rowClass += createRowClass('ocaml', frpResults[i][name], minOcamlDifferences[name], fileResult[name])
                rowClass += createRowClass('haskell', frpResults[i][name], minHaskellDifferences[name], fileResult[name])
                rowClass += createRowClass('agda', frpResults[i][name], minAgdaDifferences[name], fileResult[name])
                body += `<tr class="${rowClass}"><td>` + (i + 1) + '</td><td>' + formattedName + '</td>' + deltaColumn + '<td>' + fileResult[name].futamura.toFixed(2) + '</td><td>' + (frpResults[i][name].ocaml === 0 ? '-' : frpResults[i][name].ocaml.toFixed(2)) + '</td><td>' + (frpResults[i][name].haskell === 0 ? '-' : frpResults[i][name].haskell.toFixed(2)) + '</td><td>' + (frpResults[i][name].agda === 0 ? '-' : frpResults[i][name].agda.toFixed(2)) + '</td></tr>';
            } else {
                let rowClass = '';
                if (minFutamura[name] === fileResult[name].futamura) {
                    if (fileResult[name].delta < 0) {
                        rowClass = 'badMinDifference-futamura';
                    } else {
                        rowClass = 'goodMinDifference-futamura';
                    }
                }
                body += `<tr class="${rowClass}"><td>` + (i + 1) + '</td><td>' + formattedName + '</td>' + deltaColumn + '<td>' + fileResult[name].futamura.toFixed(2) + '</td></tr>';
            }
        });
        body += '</table>'
    });

    const reportDir = path.join(__dirname + '/../report');

    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }

    const langDir = path.join(__dirname + '/../report/' + language);

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

        // set up the futamura test and get the file name
        const code = fs.readFileSync(path.join(__dirname, `../input/${language}/${file}`), 'utf8');
        return boilerplate.futamuraBoilerplate(code, maxTermCall, false)(file)
            .then(futamuraFile => {
                futamuraFile = futamuraFile.substring(futamuraFile.indexOf('output'));

                // set up the flag depending on language
                let flag = language === 'EFSD' ? '-g' : '';
                // set up the stack flag
                flag += ' -s ' + maxTermCall;

                // input if required
                const mockInput = file.includes('read') ? '<<< 1' : '';

                let suite = new Benchmark.Suite;
                // add tests for both languages
                suite.add('interpreter', function () {
                    execSync(`${nodeCommand} index.js -i input/${language}/${file} ${flag} ${mockInput}`);
                }).add('futamura', function () {
                    execSync(`${nodeCommand} ${futamuraFile} ${mockInput}`);
                });

                // add listeners
                suite.on('cycle', function (event) {
                        console.log(String(event.target));
                    }).on('error', function (error) {
                        return reject(new Error('There was an error benchmarking! Failed with: ' + error.message));
                    }).on('complete', function () {
                        console.log('\nFastest test was: ' + this.filter('fastest').map('name'));
                        console.log('Fastest test was: ' + this.filter('slowest').map('name'));
                        const tests = this.filter('successful');
                        let result = {};
                        result[file] = {
                            delta: 0
                        };
                        tests.forEach(test => {
                            const meanTime = test.stats.mean;
                            const name = test.name;
                            if (name === 'interpreter') {
                                result[file].delta += meanTime
                            } else {
                                result[file][name] = meanTime;
                                if (name === 'futamura') {
                                    result[file].delta -= meanTime;
                                }
                            }
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
    const files = fs.readdirSync(path.join(__dirname, '../input/' + language));
    return files
        .filter(file => file.includes(language === 'EFSD' ? '.efsd' : '.lambda'))
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

const promiseToRunFPRBenchmarks = () => {
    const files = fs.readdirSync(path.join(__dirname, '../input/' + language));
    return files
        .filter(file => file.includes(language === 'EFSD' ? '.efsd' : '.lambda'))
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return new Promise((resolve, reject) => {
                        console.log('\nFile: ' + currentFile);

                        let suite = new Benchmark.Suite;

                        // compile OCaml file into JavaScript
                        let fileName = currentFile.substring(currentFile.lastIndexOf('/') + 1, currentFile.lastIndexOf('.'));
                        execSync(`sh ../EFSD/build_example.sh ${fileName} -js > /dev/null`);

                        // TODO: compile Haskell 

                        // compile Agda file into JavaScript
                        execSync(`echo $PASSWORD | sudo -S sh ../itf-impl/Agda/build_example.sh ${fileName} > /dev/null`);

                        // set up inputs for following files
                        let mockInput;
                        switch (fileName) {
                            case 'incremental':
                                mockInput = '100';
                                break;
                            case 'light_control':
                                mockInput = '100';
                                break;
                            case 'cellular_automata':
                                mockInput = '10 100';
                                break;
                            case 'planets':
                                mockInput = '10 100';
                                break;
                            default:
                                mockInput = '';
                        }
                        // add OCaml test suite
                        suite.add('ocaml', function () {
                            execSync(`${nodeCommand} ../EFSD/example_build/js/${fileName}.js ${mockInput}`);
                        });

                        // TODO: add Haskell test suite

                        const format = word => {
                            word = word.charAt(0).toUpperCase() + word.slice(1);
                            const indexOfUnderscore = word.indexOf('_');
                            if (indexOfUnderscore > 0) {
                                word = word.replace('_', '')
                                return word.substring(0, indexOfUnderscore) + word.charAt(indexOfUnderscore).toUpperCase() + word.substring(indexOfUnderscore + 1);
                            } else {
                                return word;
                            }
                        };
                        // add Agda test suite
                        suite.add('agda', function () {
                            execSync(`${nodeCommand} ../itf-impl/Agda/Build/${format(fileName)}/jAgda.Examples.${format(fileName)}.js`);
                        });

                        // add listeners
                        suite.on('cycle', function (event) {
                                console.log(String(event.target));
                            }).on('error', function (error) {
                                return reject(new Error('There was an error benchmarking! Failed with: ' + error.message));
                            }).on('complete', function () {
                                console.log('\nFastest test was: ' + this.filter('fastest').map('name'));
                                console.log('Fastest test was: ' + this.filter('slowest').map('name'));
                                const tests = this.filter('successful');
                                let result = {};
                                result[currentFile] = {};
                                tests.forEach(test => {
                                    const meanTime = test.stats.mean;
                                    const name = test.name;
                                    result[currentFile][name] = meanTime;
                                });
                                console.log(JSON.stringify(result, null, 2));
                                return resolve(result);
                            })
                            .run();
                    }).then(currentResult => (
                        [...chainResults, currentResult]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            return arrayOfResults;
        }).catch(err => {
            return Promise.reject(err);
        });
};

const runBenchmarks = isGoIMachine => {
    if (isGoIMachine) {
        language = 'EFSD';
        maxTermCalls = [500, 1000, 1500, 2500, 3500, 4000];
    } else {
        language = 'toyLambda';
        maxTermCalls = [100, 200, 300, 500, 700, 900, 1200, 1500];
    }
    let jsResults;
    let frpResults;
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
            jsResults = arrayOfResults;
            if (language === 'EFSD') {
                return promiseToRunFPRBenchmarks(); 
            } else {
                return Promise.resolve([]);
            }
        }).then(arrayOfResults => {
            frpResults = arrayOfResults;
            return createReport(jsResults, frpResults);
        }).catch(err => {
            console.log(err)
            return Promise.reject(err);
        });
};

module.exports = {
    runBenchmarks: runBenchmarks
}