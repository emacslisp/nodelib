let ActiveDirectoryClass = require('../lib/ActiveDirectoryHelper');

let activeDirectory = new ActiveDirectoryClass();


async function ActiveDirectoryTest() {
    let username = Buffer.from('ZGkud3UudmV4QHZvY3VzLmV4dA==', 'base64').toString();;
    let password = Buffer.from('cGk9My4xNDE1', 'base64').toString();
    await activeDirectory.ADAuth(username, password);
}

ActiveDirectoryTest();