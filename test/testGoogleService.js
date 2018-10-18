let googleServiceClass = require('../lib/GoogleService');

let googleService = new googleServiceClass();

async function test() {
    let result = await googleService.geoIP('119.161.95.253');
    console.log(result);
}

test();