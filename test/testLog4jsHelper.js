let Log4jsClass = require('../lib/Log4jsHelper');

let Log4jsHelper = new Log4jsClass();

Log4jsHelper.trace('this is a test');
Log4jsHelper.debug('this is a test');
Log4jsHelper.info('this is a test');
Log4jsHelper.warn('this is a test');
Log4jsHelper.error('this is a test');
Log4jsHelper.fatal('this is a test');
