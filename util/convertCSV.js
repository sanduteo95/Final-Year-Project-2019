
const fastCSV = require('fast-csv');
const fs = require('fs');
const path = require('path')

const convertCSV = csvFile => {
    let visArray = "";
    let length = 0;
    fastCSV
        .fromPath(csvFile)
        .transform(function(data){
            // make sure to remove l1 and l2 from regression_mixture
            data = data.filter(d => d !== "l1" && d !== "l2");

            // make sure to transform negatives so that the visualiser can parse them
            data = data.map(d => {
                // check for strings and preprocess them as per DecML examples
                if (d === "M") {
                    return 1.0;
                } else if (d === "B") {
                    return 0.0;
                } else if (d < 0) {
                    return ` 0 - ${Math.abs(d)} `;
                } else {
                    return ` ${d} `;
                }
            });

            // clean up spaces
            data[0] = data[0].substring(1);
            data[data.length - 1] = data[data.length - 1].substring(0, data[data.length - 1].length - 1);
            // the last column is the y
            // the rest consists of the x, with a 1.0 added at the head for bias
            let x = data.slice(0, data.length - 1);
            if (x.length > 2) {
                x = [1.0] + x;
            }

            // turn it into a tuple only if necessary
            if (x.length > 1) {
                x = `(${x})`;
            }
            const y = data[data.length - 1];
            return `cons (${x} , ${y})`;
        })
        .on("data", function(data){
            if (length !== 0) {
                visArray += data + ' (';
            }
            length ++;
        })
        .on("end", function(){
            console.log(csvFile)
            // remove (
            visArray = visArray.substring(0, visArray.length - 1);
            visArray += "nil" + new Array(length - 1).join(')');
            console.log(visArray + '\n');
        });
}

const convertCSVs = () => {
    const files = fs.readdirSync(path.join(__dirname, './data'));
    return files
        .filter(file => file.includes('.csv'))
        .forEach(file => {
            convertCSV(path.join(__dirname, './data/' + file));
        });
}

convertCSVs();
