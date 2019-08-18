let AMQServiceClass = require('../lib/AMQService');

let amqService = new AMQServiceClass();


async function AMQServiceTest() {
    await amqService.webnmsSubscribe();

}

AMQServiceTest();