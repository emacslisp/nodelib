'use strict';

let json2csv = require('json2csv');
let moment = require('moment-timezone');

let FileHelperClass = require('./FileHelper.js');
let fileHelper = new FileHelperClass();

class JSONHelper {
    constructor() {
        return this;
    }

    JSON2String(obj) {
        return JSON.stringify(obj, null, 4);
    }

    String2Json(str) {
        return JSON.parse(str);
    }

    Json2CSV(obj, fileName) {
        let fields  =[];
        for(let key in obj[0]) {
            fields.push(key);
        }

        for(let row of obj) {
            let issueDate = moment(row.InvoiceIssueDate);
            row.InvoiceIssueDate = `${issueDate.day()}/${issueDate.month() + 1}/${issueDate.year()}`;
        }

        const csv = json2csv.parse(obj, fields);
        fileHelper.stringToFile(fileName + '.csv', csv);
    }
}

module.exports = JSONHelper;