let FileHelper = require('../lib/FileHelper');
let ArrayHelper = require('../lib/ArrayHelper');

let fileHelper = new FileHelper();

async function loadConfig() {
    
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
    fileHelper.loadConfig('/Users/di.wu/test/7.json', operation);
}

async function listDir() {
    
    let arrayHelper = new ArrayHelper();
    list = await fileHelper.listFiles("/Users/ewu/dev/vocus/tasks/platypus-statement/platinvoices");
    arrayHelper.dumpArray(list);
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
// loadConfig();

listDir();
