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
fileHelper.loadConfig('/Users/di.wu/test/7.json', operation);