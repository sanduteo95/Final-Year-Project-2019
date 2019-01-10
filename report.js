const fs = require('fs');
const path = require('path');
const createHTML = require('create-html');
const exec = require('child_process').exec;

const input = './input/';

const maxTermCalls = [50, 100, 150, 200, 300, 600];
const stackSize = 100000;

const language = process.env.LANG === 'lambda' ? 'toyLambda' : 'EFSD'

sleeper = time => {
    return x => {
      return new Promise(resolve => setTimeout(() => resolve(x), time));
    };
}

createReport = testResults => {
    let body = '';

    console.log(JSON.stringify(testResults));
    testResults.forEach(bachmarkResult => {
        const maxTermCall = Object.keys(bachmarkResult)[0];
        body += `<h3>Number of recursive calls: ${maxTermCall}</h3>`;
        body += '<table><tr><th>#</th><th>Test</th><th>Delta</th></tr>';
        bachmarkResult[maxTermCall].forEach((fileResult, i) => {
            const name = Object.keys(fileResult)[0];
            const formattedName = name.substring(0, name.indexOf('.'));
            body += '<tr><td>' + i + '</td><td><a href="../output/' + language + '/' + formattedName + '.js">' + formattedName + '</a></td><td>' + fileResult[name].delta + '</td></tr>';
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
}

getTime = stdout => {
    const logString = 'time';
    const indexOfTime = stdout.indexOf(logString);
    const indexOfNewline = indexOfTime + stdout.substring(indexOfTime).indexOf('\n');
    return parseFloat(stdout.substring(indexOfTime + logString.length + 2, indexOfNewline - 2));
}

promiseToRunInterpreter = (file, maxTermCall) => {
    console.log('interpreter')
    return new Promise((resolve, reject) => {
        let input = '', flag = '';
        if(file.includes('read')) {
            input = ' <<< 1';
        }
        if (language === 'EFSD') {
            flag = '-g'
        }
        exec(`node --stack-size=${stackSize} index.js -i input/${language}/${file} ${flag} -t ${input} -s ${maxTermCall}`, (err, stdout) => {
            if (err) {
                return reject(err);
            }
        
            return resolve(getTime(stdout));
        });
    });
}

promiseToRunFutamura = (file, maxTermCall) => {
    console.log('futamura')
    return new Promise((resolve, reject) => {
        let input = '', flag = '';
        if(file.includes('read')) {
            input = ' <<< 1';
        }

        if(language === 'EFSD') {
            flag = '-g';
        }

        exec(`node --stack-size=${stackSize} index.js -f input/${language}/${file} ${flag} -t -s ${maxTermCall}; node output/${language}/${file.substring(0, file.indexOf('.') + 1)}js ${input}`, (err, stdout) => {
            if (err) {
                return reject(err);
            }
            return resolve(getTime(stdout));
        });
    });
}

promiseToRunBoth = (file, maxTermCall, index) => {
    console.log(index + '. File: ' + file);
    let delta;
    setTimeout(function () {

    }, 100);
    return promiseToRunInterpreter(file, maxTermCall)
        .then(response => {
            delta = response;
            return promiseToRunFutamura(file, maxTermCall);
        }).then(response => {
            console.log('Finished with this run!');
            return delta - response;
        }).then(sleeper(1000));
}

promiseToRunBoth5Times = (file, maxTermCall) => {
    return [1, 2, 3, 4, 5]
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
            console.log(arrayOfResults)
            let result = {};
            result[file] = {
                delta: Math.round(arrayOfResults.reduce((total, result) => total + result, 0)/5 * 1000)/1000
            };
            return result;
        })
}  

promiseToRunBenchmark = maxTermCall => {
    console.log('\n====Benchmark: ' + maxTermCall);
    const files = fs.readdirSync(`${input}/${language}`);
    return files
        .map(file => Promise.resolve(file))
        .reduce((promiseChain, currentPromise) => {
            return promiseChain.then(chainResults =>
                currentPromise.then(currentFile => {
                    return promiseToRunBoth5Times (currentFile, maxTermCall).then(currentResult => (
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

runBenchmarks = () => {
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