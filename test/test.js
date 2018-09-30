let nodelibClass = require('../index');
//let nodelibTest = new nodelibClass();
let nodelibTest = nodelibClass;

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
  console.log(await nodelibTest.request(url, method, data, header));
  process.exit();
}

test();

