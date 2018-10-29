let requestClass = require('../lib/RequestHelper');

//let nodelibTest = new nodelibClass();
let request = new requestClass();

const url = "https://jsonplaceholder.typicode.com/posts";
const method = 'POST';
const data = {
  title: 'foo',
  body: 'bar',
  userId: 1
};
const header = {
  "Content-type": "application/json; charset=UTF-8"
};

async function test() {
  console.log(await request.request(url, method, data, header));
  process.exit();
}

test();