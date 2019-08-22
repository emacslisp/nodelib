let json2csv = require('json2csv');

let FileHelperClass = require('./FileHelper.js');
let fileHelper = new FileHelperClass();

let nodemailer = require('nodemailer');
let sendMailTransport = require('nodemailer-sendmail-transport');
let smtpTransport = require('nodemailer-smtp-transport');
let pug = require('pug');

class EmailService {
  constructor() {
    let mailer;
    if (process.platform === 'win32') {
        mailer = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com'
        }));
    
    } else {
        mailer = nodemailer.createTransport(new sendMailTransport({
        sendmail: true,
        path: '/usr/sbin/sendmail'
        }));
    }

    this.mailer = mailer;
    return this;
  }

  async sendMail(pugFile, localsObject, from, to, subject) {
    
    let html = pug.renderFile(pugFile, localsObject);

    return new Promise((resolve, reject) => {
      this.mailer.sendMail({
        from,
        to,
        subject,
        html
      }, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }
}

module.exports = EmailService;