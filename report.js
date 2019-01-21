const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const exec = require('child_process').exec;

const input = './input/';

const maxTermCalls = [50, 100, 200, 300, 450, 600];

const language = process.env.LANG === 'lambda' ? 'toyLambda' : 'EFSD'

sleeper = time => {
    return x => {
      return new Promise(resolve => setTimeout(() => resolve(x), time));
    };
};

formatResults = testResults => {
    let maxDeltas = {};
    let minDifferences = {};
    testResults.forEach(bachmarkResult => {
        const maxTermCall = Object.keys(bachmarkResult)[0];
        bachmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            if (language === 'EFSD') {
                fileResult[name].ocaml = (!fileResult[name].ocaml || isNaN(fileResult[name].ocaml) || fileResult[name].ocaml === null) ? 0 : fileResult[name].ocaml;
                if (!minDifferences.hasOwnProperty(name) || fileResult[name].ocaml - fileResult[name].futamura < minDifferences[name].ocaml - minDifferences[name].futamura) {
                    minDifferences[name] = {
                        ocaml: fileResult[name].ocaml,
                        futamura: fileResult[name].futamura
                    }; 
                }
            } 
            if (!maxDeltas.hasOwnProperty(name) || fileResult[name].delta > maxDeltas[name]) {
                maxDeltas[name] = fileResult[name].delta ;
            }
        });
    });
    return {maxDeltas, minDifferences};
};

createReport = testResults => {
    let body = '';

    const {maxDeltas, minDifferences} = formatResults(testResults);
    console.log(JSON.stringify(testResults));
    testResults.forEach(bachmarkResult => {
        const maxTermCall = Object.keys(bachmarkResult)[0];
        body += `<h3>Number of recursive calls: ${maxTermCall}</h3>`;
        if (language === 'EFSD') {
            body += '<table><tr><th>#</th><th>Test</th><th>Delta</th><th>Avg Time (Futamura)</th><th>Avg Time (OCaml)</th></tr>';
        } else {
            body += '<table><tr><th>#</th><th>Test</th><th>Delta</th><th>Avg Time (Futamura)</th></tr>';
        }
        bachmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
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
                if (minDifferences[name].ocaml === fileResult[name].ocaml && minDifferences[name].futamura === fileResult[name].futamura) {
                    if (fileResult[name].delta < 0) {
                        body += '<tr class="badMinDifference"><td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '<td>' + (fileResult[name].ocaml === 0 ? '-' : fileResult[name].ocaml) + '</td></tr>';
                    } else {
                        body += '<tr class="goodMinDifference"><td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '<td>' + (fileResult[name].ocaml === 0 ? '-' : fileResult[name].ocaml) + '</td></tr>';
                    }
                } else {
                    body += '<tr><td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '<td>' + (fileResult[name].ocaml === 0 ? '-' : fileResult[name].ocaml) + '</td></tr>';
                }
            } else {
                body += '<tr><td>' + (i + 1) + '</td><td><a href="../../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td>' + deltaColumn + '<td>' + fileResult[name].futamura + '<td></tr>';
            }
        });
        body += '</table>'
    });

    const reportDir = path.join(__dirname + '/report');
    
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir);
    }

    const langDir = path.join(__dirname + '/report/' + language);

    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir);
    }

    const html = createHTML({
        title: 'Report',
        css: '../index.css',
        body: body
    });

    fs.writeFile(path.join(langDir + '/index.html'), html, function (err) {
        if (err) console.log(err)
    });
};

promiseToRun = (file, maxTermCall, isFutamura, isOcaml) => {
    console.log(isFutamura ? 'futamura' : (isOcaml ? 'ocaml' : 'interpreter'));
    return new Promise((resolve, reject) => {
        const flag = isFutamura ? '-f' : (isOcaml ? '-o' : '-i')
        exec(`sh ./scripts/time.bash ${flag} ${file} ${maxTermCall}`, (err, stdout, stderr) => {
            // it writes to stderr for some reason  
            console.log(stderr)
            console.log(typeof stderr)
            return err ? reject(err) : resolve(parseFloat(stderr));
        });
    });
};

promiseToRunBoth = (file, maxTermCall, index) => {
    console.log(index + '. File: ' + file);
    let delta;
    return promiseToRun(file, maxTermCall, false, false)
        .then(response => {
            console.log('interpreter time: ' + response);
            delta = response;
            return promiseToRun(file, maxTermCall, true, false);
        }).then(response => {
            console.log('futamura time: ' + response);
            let result =  {
                delta: delta - response,
                futamura: response
            };
            // run the other benchmarks if EFSD
            if (language === 'EFSD') {
                return promiseToRun(file, undefined, false, true)
                    .then(ocamlResponse => {
                        console.log('ocaml time: ' + ocamlResponse);
                        result.ocaml = ocamlResponse;
                        return result;
                    })
             } else {
                return result;
             }
        }).then(sleeper(1000));
};

promiseToRunNTimes = (n, file, maxTermCall) => {
    var arr = Array.apply(null, Array(n));
    return arr.map((x, i) => (i + 1))
        .map(index => Promise.resolve(index))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentIndex => {
                    return promiseToRunBoth (file, maxTermCall, currentIndex).then(currentResult => (
                        [ ...chainResults, currentResult ]
                    ))
                }) 
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            let result = {};
            if (language === 'EFSD') {
                result[file] = {
                    delta: Math.round(arrayOfResults.reduce((total, result) => total + result.delta, 0)/n * 1000)/1000,
                    futamura: Math.round(arrayOfResults.reduce((total, result) => total + result.futamura, 0)/n * 1000)/1000,
                    ocaml: Math.round(arrayOfResults.reduce((total, result) => total + result.ocaml, 0)/n * 1000)/1000
                };
            } else {
                result[file] = {
                    delta: Math.round(arrayOfResults.reduce((total, result) => total + result.delta, 0)/n * 1000)/1000,
                    futamura: Math.round(arrayOfResults.reduce((total, result) => total + result.futamura, 0)/n * 1000)/1000
                };
            }
            return result;
        });
};

promiseToRunBenchmark = (n, maxTermCall) => {
    console.log('\n====Benchmark: ' + maxTermCall);
    const files = fs.readdirSync(`${input}/${language}`);
    return files
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRunNTimes (n, currentFile, maxTermCall).then(currentResult => (
                        [ ...chainResults, currentResult ]
                    ))
                })
            );
        }, Promise.resolve([])).then(arrayOfResults => {
            let result = {};
            result[maxTermCall] = arrayOfResults;
            return result;
        });
};

runBenchmarks = (n) => {
    return maxTermCalls
        .map(maxTermCall => Promise.resolve(maxTermCall))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentMaxTermCall => {
                    return promiseToRunBenchmark (n, currentMaxTermCall).then(currentResult => (
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
};

runBenchmarks(5);