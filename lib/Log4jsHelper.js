'use strict';

let log4js = require("log4js");

let config = require("../config/global");

class Log4jsHelper {
    constructor(loggerName) {
        loggerName = loggerName || 'defaultLogger';
        log4js.configure(config.log4js);
        this.logger = log4js.getLogger(loggerName);
    }

    trace(output) {
        this.logger.trace(output);
    }

    debug(output)  {
        this.logger.debug(output);
    }

    info(output) {
        this.logger.info(output);
    }

    warn(output) {
        this.logger.warn(output);
    }

    error(output) {
        this.logger.error(output);
    }

    fatal(output) {
        this.logger.fatal(output);
    }
}

module.exports = Log4jsHelper;