let EmailServiceClass = require('../lib/EmailService');

let EmailService = new EmailServiceClass();

async function EmailServiceTest() {
    let result = await EmailService.sendMail('../email/test.pug', {
        name: 'test'
    }, 'noreply@vocus.com.au', 'di.wu@vocus.com.au', 'This is a test email');

    console.log(JSON.stringify(result));
}

EmailServiceTest();