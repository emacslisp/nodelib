let requestClass = require('../lib/RequestHelper');

//let nodelibTest = new nodelibClass();
let request = new requestClass();
let moment = require('moment-timezone');

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
      pass: 'password'
    }
  };

  let result = await request.requestWithConfig(config);
  console.log(result);
  process.exit();
}

async function timeInternal() {
  let timeZone = 'Australia/Sydney';
  let session = {};
  session.timezone = timeZone;
  let startTime = moment().tz(timeZone).startOf('day').format('x');
  let endTime = moment().tz(timeZone).endOf('day').format('x');

  console.log(startTime);
  console.log(endTime);
  console.log(endTime - startTime);
  console.log();


  startTime = moment().tz(session.timezone).subtract(1, 'day').startOf('day').format('x');
  endTime = moment().tz(session.timezone).subtract(1, 'day').endOf('day').format('x');

  console.log(startTime);
  console.log(endTime);
  console.log(endTime - startTime);
  console.log();

  startTime = moment().tz(session.timezone).subtract(7, 'day').startOf('day').format('x');
  endTime = moment().tz(session.timezone).endOf('day').format('x');

  console.log(startTime);
  console.log(endTime);
  console.log(endTime - startTime);
  console.log();

  startTime = moment().tz(session.timezone).subtract(30, 'day').startOf('day').format('x');
  endTime = moment().tz(session.timezone).endOf('day').format('x');

  console.log(startTime);
  console.log(endTime);
  console.log(endTime - startTime);
  console.log();
}

async function webnmsWithCookie() {
  timeInternal();
  let data = {
    customerService : "VET122999",
    fromDate : 1560175200000,
    toDate : 1560952800000,
    type : "octet"
  };

  let config = {
    method: 'GET',
    uri: `http://webnms.vocus.net.au/report/IndividualCustomerData.do?customerService=${data.customerService}&fromDate=${data.fromDate}&toDate=${data.toDate}&type=${data.type}`,
    headers: {
      Cookie: 'JSESSIONID=032C8A3F8FEEA56FDE275854D93740D5'
    }
  };

  let result = await request.requestWithConfig(config);

  // let jsonObj = JSON.parse(result);
  
  console.log(result);
  process.exit();
}

async function arrayTest() {
  const array = [5, 4, 6];

  array.forEach((element, index) => {
    console.log(element, index);
  });

}

async function requestGetTest() {
  const request = require("request")
  request.get({url: "https://vocuscommunications.service-now.com/api/vomml/v3/vone/orders", qs: {"keyword": ['Achal','RITM0129682']}}, function(err, response, body) {
      console.log(err, body);
  })
}

async function test1() {

  

}

webnmsWithCookie();
// test1();

// requestGetTest();

// arrayTest();
//test();
//keychainTest();

