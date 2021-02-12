let jsonHelperClass = require('../lib/JSONHelper');

let jsonHelper = new jsonHelperClass();


async function test() {
    let data = require('./data/billing.json');
    console.log(data);
    await jsonHelper.Json2CSV(data, 'test');
}

test();