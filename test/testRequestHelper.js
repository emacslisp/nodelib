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

async function keychainTest() {
  let config = {
    method: 'GET',
    uri: 'https://dev02.vocus.com.au:3051/users/di.wu@vocus.com.au',
    json: true,
    strictSSL: false,
    auth: {
      user: 'di.wu@vocus.com.au',
      pass: password
    }
  };

  let result = await request.requestWithConfig(config);
  console.log(result);
  process.exit();
}

//test();
keychainTest();