let nodelibClass = require('../index');
//let nodelibTest = new nodelibClass();
let nodelibTest = new nodelibClass.nodelib();

let authClass = require('../lib/AuthHelper');
let authHelper = new authClass();

const url = 'https://vocuscommunicationstest.service-now.com/api/vomml/v2/vone/list/change?am=nicholas.cheah@vocus.com.au';
const method = 'GET';
const data = {};
const header = {};
const username = 'VocusApiUser';
const password = 'U^tw9ks6wyM2@sq';

async function test() {
    console.log(nodelibTest.jsonFormat(await nodelibTest.requestWithBasicAuth(url, method, data, header, username, password)));
    // a7f5c8c626f994482813230854f66700e626208f52d913b9bd6b4e039aab0f41
    let passwordMatch = authHelper.verify('test', '123', 'a7f5c8c626f994482813230854f66700e626208f52d913b9bd6b4e039aab0f41');
    console.log("passwordMatch : " + passwordMatch);
    process.exit();
}

test();

