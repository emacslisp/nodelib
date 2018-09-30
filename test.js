

let nodelibClass = require('./index');
//let nodelibTest = new nodelibClass();
let nodelibTest = nodelibClass;

const url = "https://jsonplaceholder.typicode.com/posts/2";
const method = 'get';
const data = {'id': '2'};

async function test() {
    console.log(await nodelibTest.request(url,method,data));
    process.exit();
}

test();

