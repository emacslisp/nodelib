'use strict';
let mongoose = require('mongoose');

class MongodbHelper {
    constructor() {
        return this;
    }

    async getUser() {

        let mongo = {
            uri: 'mongodb://dev02.vocus.com.au/vocus-one',
            opts: {
              autoReconnect: true,
              reconnectTries: Number.MAX_VALUE,
              reconnectInterval: 1000,
              user: 'vocus-one',
              pass: 's*<uC6j7Wt>TM5=z'
            }
        };

        mongoose.connect(mongo.uri, mongo.opts);
        mongoose.Promise = global.Promise;
        global.vApp = {};
        global.vApp.mongoose = mongoose;

        const userSchema = require('../models/User');
        
        const User = global.vApp.mongoose.model(userSchema.name, userSchema.schema, userSchema.collection);
        
        let result = await User.find({ groups: { $in: [ 'business-partner' ] } }).lean();
        for (let user of result) {
            console.log(user.email);
        }
    }
};

module.exports = MongodbHelper;