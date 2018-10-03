let FileHelper = require('../lib/FileHelper');

let fileHelper = new FileHelper();

//fileHelper.indentJson('/Users/di.wu/test/7.json');

let operation = {
    set: [
        {
            key: 'vocusOneApi.url',
            value: 'http://localhost:3060'
        }
    ]
}
fileHelper.loadConfig('/Users/di.wu/test/7.json', operation);