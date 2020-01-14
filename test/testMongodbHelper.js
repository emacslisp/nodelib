let requestClass = require('../lib/MongodbHelper');


let request = new requestClass();


async function GetUserFromMongodbHelper() {
    await request.getUser();
}

GetUserFromMongodbHelper();