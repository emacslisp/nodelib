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

// loadConfig();

listDir();