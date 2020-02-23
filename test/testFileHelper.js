let FileHelper = require('../lib/FileHelper');

let fileHelper = new FileHelper();

//fileHelper.indentJson('/Users/di.wu/test/7.json');

let operation = {
    set: [
        {
            key: 'mongo',
            value: {
                "uri": "mongodb://localhost/vocus-one",
                "options": {
                  "useMongoClient": true
                }
            }
        }
    ]
}

async function loadConfigTest() {
    fileHelper.loadConfig('/Users/di.wu/test/7.json', operation);
}

async function pendingFileData() {
    fileHelper.appendFile('/Users/di.wu/test/result.json', '{test: true}');
    fileHelper.appendFile('/Users/di.wu/test/result.json', '{test: false}');
}

// loadConfigTest();
pendingFileData();