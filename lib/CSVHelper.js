let json2csv = require('json2csv');

let Papa = require('papaparse');

let FileHelperClass = require('./FileHelper.js');
let fileHelper = new FileHelperClass();

class CSVHelper {
    constructor() {
        return this;
    }

    async csvToJson(csvFilePath) {
        let content = fileHelper.fileToString(csvFilePath);

        let data = Papa.parse(content, {
            "skipEmptyLines":true,  
            "delimiter":",", 
            "quoteChar": "\""
        });

        return data.data;
    }
}

module.exports = CSVHelper;