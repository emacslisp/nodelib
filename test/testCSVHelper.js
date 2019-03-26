let CSVHelperClass = require('../lib/CSVHelper');

let CSVHelper = new CSVHelperClass();

async function CSVHelperTest() {
    let data = await CSVHelper.csvToJson('/Users/di.wu/dev/nodelib/test/data/addresses.csv');

    console.log('data', JSON.stringify(data));
}

CSVHelperTest();