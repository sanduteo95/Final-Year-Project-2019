const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const execSync = require('child_process').execSync;
const Benchmark = require('benchmark');
const boilerplate = require('./boilerplate');

const input = './input/';

let language;
let maxTermCalls;

getMin = (test, result, savedMin) => {
    // get ocaml stats
    result[test] = (!result[test] || isNaN(result[test]) || result[test] === null) ? 0 : result[test];
    if (!savedMin || 
        (result[test] < result.futamura && 
            savedMin[test] > savedMin.futamura) ||
        Math.abs(result[test] - result.futamura) < Math.abs(savedMin[test] - savedMin.futamura)) {
        const newMin = {};
        newMin[test] = result[test];
        newMin.futamura = result.futamura;
        return newMin;
    } else {
        return savedMin;
    }
};

formatResults = testResults => {
    let maxDeltas = {};
    let minOcamlDifferences = {};
    let minHaskellDifferences = {};
    let minAgdaDifferences = {};
    testResults.forEach(benchmarkResult => {
        const maxTermCall = Object.keys(benchmarkResult)[0];
        benchmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            if (language === 'EFSD') {
                minOcamlDifferences[name] = getMin('ocaml', fileResult[name], minOcamlDifferences[name]);
                minHaskellDifferences[name] = getMin('haskell', fileResult[name], minOcamlDifferences[name]);
                minAgdaDifferences[name] = getMin('agda', fileResult[name], minOcamlDifferences[name]);
            } 
            if (!maxDeltas.hasOwnProperty(name) || fileResult[name].delta > maxDeltas[name]) {
                maxDeltas[name] = fileResult[name].delta ;
            }
        });
    });
    return {maxDeltas, minOcamlDifferences, minHaskellDifferences, minAgdaDifferences};
};

createRowClass = (test, result, min) => {
    result[test] = (!result[test] || isNaN(result[test]) || result[test] === null) ? 0 : result[test];
    if (min[test] === result[test] && min.futamura === result.futamura) {
        if (result.delta < 0) {
            return `badMinDifference-${test} `;
        } else {
            return `goodMinDifference-${test} `;
        }
    } else {
        return "";
    }
};

createReport = testResults => {
    let body = '';

    const {maxDeltas, minOcamlDifferences, minHaskellDifferences, minAgdaDifferences} = formatResults(testResults);
    console.log(JSON.stringify(testResults));
    testResults.forEach(benchmarkResult => {
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
                    deltaColumn = '<td class="badMaxDelta">' + fileResult[name].delta + '</td>';
                } else {
                    deltaColumn = '<td class="goodMaxDelta">' + fileResult[name].delta + '</td>';
                }
            } else {
                deltaColumn = '<td>' + fileResult[name].delta + '</td>';
            }
            if (language === 'EFSD') {
                fileResult[name].ocaml = (!fileResult[name].ocaml || isNaN(fileResult[name].ocaml) || fileResult[name].ocaml === null) ? 0 : fileResult[name].ocaml;
                let rowClass = "";
                rowClass += createRowClass('ocaml', fileResult[name], minOcamlDifferences[name])
                rowClass += createRowClass('haskell', fileResult[name], minHaskellDifferences[name])
                rowClass += createRowClass('agda', fileResult[name], minAgdaDifferences[name])
                body += `<tr class="${rowClass}">` + '<td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '</td><td>' + (fileResult[name].ocaml === 0 ? '-' : fileResult[name].ocaml) + '</td><td>' + (fileResult[name].haskell === 0 ? '-' : fileResult[name].haskell) + '</td><td>' + (fileResult[name].agda === 0 ? '-' : fileResult[name].agda) + '</td></tr>';
            } else {
                body += '<tr><td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '</td></tr>';
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
        body: body
    });

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(langDir + '/index.html'), html, function (err) {
            return err ? reject(err) : resolve(); 
        });
    });
};

promiseToRunAll = (file, maxTermCall) => {
    console.log('\nFile: ' + file);
    return new Promise((resolve, reject) => {
        const suite = new Benchmark.Suite;
    
        // set up the futamura test and get the file name
        const code = fs.readFileSync(path.join(__dirname, `../input/${language}/${file}`), 'utf8');
        let futamuraFile = boilerplate.futamuraBoilerplate(code, maxTermCall)(file);
        futamuraFile = futamuraFile.substring(futamuraFile.indexOf('output'));
    
        // set up the flag depending on language
        let flag = '';
        if (language === 'EFSD') {
            flag = '-g ';
        } 
        // set up the stack flag
        flag += '-s ' + maxTermCall;

        // global node command
        const nodeCommand = 'node --max-old-space-size=120000 --stack-size=100000';

        let input = file.includes('read') ? '<<< 1' : '';
        // add tests for both languages
        suite.add('interpreter', function() {
            execSync(`${nodeCommand} index.js -i input/${language}/${file} ${flag} ${input}`);
        }).add('futamura', function() {
            execSync(`${nodeCommand} ${futamuraFile} ${input}`);
        });

        // add extra tests for EFSD
        if (language === 'EFSD') {
            // process.chdir(path.join(__dirname, '../../EFSD'));

            // compile OCaml file into JavaScript
            const fileName = file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.'));
            execSync(`sh ../EFSD/build_example.sh ${fileName} -js > /dev/null`);

            // TODO: compile Haskell gile into JavaScript
            // TODO: compile Agda file into JavaScript

            // set up inputs for following files
            let input;
            switch (fileName) {
                case 'incremental':
                    input = '100';
                    break;
                case 'light_control':
                    input = '100';
                    break;
                case 'cellular_automata':
                    input = '10 100';
                    break;
                case 'planets':
                    input = '10 100';
                    break;
                default:
                    input = '';
            }
            // add OCaml, Haskell and Agda tests
            suite.add('ocaml', function() {
                execSync(`${nodeCommand} ../EFSD/example_build/js/${fileName}.js ${input}`);
            // }).add('haskell', function() {
            //     // TODO
            // }).add('agda', function() {
            //     // TODO
            });
        } 

        // add listeners
        suite.on('cycle', function(event) {
            console.log(String(event.target));
        }).on('error', function(error) {
            return reject(new Error('There was an error benchmarking! Failed with: ' + error.message));
        }).on('complete', function() {
            console.log('\nFastest test was: ' + this.filter('fastest').map('name'));
            console.log('Fastest test was: ' + this.filter('slowest').map('name'));
            const tests = this.filter('successful');
            let result = {};
            result[file] = {};
            tests.forEach(test => {
                const meanTime = test.stats.mean.toFixed(2);
                const name = test.name;
                if (name === 'interpreter') {
                    result[file].delta = meanTime;
                } else {
                    result[name] = meanTime;
                    if (name === 'futamura') {
                        result[file].delta -= meanTime;
                        result[file].delta = result.delta.toFixed(2);
                    }
                }
            });            
            console.log(JSON.stringify(result, null, 2));
            return resolve(result);
        })
        // run async
        .run({ 'async': true });
    });
};

promiseToRunBenchmark = maxTermCall => {
    console.log('\n====Benchmark: ' + maxTermCall);
    const files = fs.readdirSync(`${input}/${language}`);
    return files
        .filter(file => file.includes(language === 'EFSD' ? '.efsd' : '.lambda'))
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRunAll (currentFile, maxTermCall).then(currentResult => (
                        [ ...chainResults, currentResult ]
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

runBenchmarks = isGoIMachine => {
    if (isGoIMachine) {
        language = 'EFSD';
        maxTermCalls = [100, 300, 500, 700, 900, 1100, 1300, 1500];
    } else {
        language = 'toyLambda';
        maxTermCalls = [100, 200, 300, 500, 700, 900, 1200, 1500];
    }
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
            return createReport(arrayOfResults);
        }).catch(err => {
            return Promise.reject(err);
        });
};

module.exports = {
    runBenchmarks: runBenchmarks
}
