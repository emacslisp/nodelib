let nodelibClass = require('../index');
//let nodelibTest = new nodelibClass();
let nodelibTest = nodelibClass;

const url = 'https://vocuscommunicationstest.service-now.com/api/vomml/v2/vone/list/change?am=nicholas.cheah@vocus.com.au';
const method = 'GET';
const data = {};
const header = {};
const username = 'VocusApiUser';
const password = 'U^tw9ks6wyM2@sq';

async function test() {
    console.log(await nodelibTest.requestWithBasicAuth(url, method, data, header, username, password));
    process.exit();
}

test();

