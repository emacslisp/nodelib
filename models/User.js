'use strict';

/**
 * IMPORTANT: Users must be a Json returning a mongoose schema and model.
 */

let Schema = vApp.mongoose.Schema;

let UserSchema = new Schema({
  name: {
    first: { type: String, default: '', required: 'First name is required', trim: true },
    last: { type: String, default: '', required: 'Last name is required', trim: true }
  },
  login: {
    username: { type: String, default: '', index: { unique: true }, required: 'User name is required', trim: true, lowercase: true },
    secret: { type: String, default: '' },
    hash: { type: String, default: '' },
    salt: { type: String, default: '' },
    last: { type: Date, default: Date.now },
    lastSeen: { type: Date, default: Date.now },
    count: { type: Number, default: 0 },
    online: { type: Boolean, default: false },
    isReset: { type: Boolean, default: false }
  },

  image: { type: String, default: '/img/none.jpg' },
  ownerId: { type: String, default: '' },
  phone: { type: String, default: '' },
  mobile: { type: String, default: '' },
  email: { type: String, required: 'Email is required', trim: true },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  position: { type: String, default: '' },

  groups: { type: Array },
  // new field that maps business sector/location permission for users to filter and access specific customers data
  businessSectorPermissions: { type: Array },
  accepts: {
    terms: { type: Boolean, default: false },
    hideIntroVideo: { type: Boolean, default: false },
    hideMigrationMsg: { type: Boolean, default: false }
  },

  guides: {
    homeNotification: { type: Boolean, default: true },
    views: {
      loadOnScroll: { type: Boolean, default: true},
      gridQuotes: { type: Boolean, default: true},
      customerList: { type: String, default: '' }
    }
  },

  holiday: {
    onleave: { type: Boolean, default: false },
    start: { type: Date, default: '' },
    end: { type: Date, default: '' },
    redirect: { type: Schema.Types.ObjectId, ref: 'User' }
  },

  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
  status: { type: String, enum: [ 'Created', 'Active', 'Archived' ], default: 'Created' },
  archived: { type: Boolean, default: false },
  timezone: { type: String, default: 'Australia/Sydney' },
  notifications: { type: Schema.Types.Mixed },
  external: { type: Schema.Types.Mixed }
}, { toJSON: { virtuals: true }, timestamps: true });

UserSchema.pre('findOneAndUpdate', function(next) {
    // return next(err);
    return next();
});

UserSchema.pre('save', function(callback) {
  let self = this;

  console.debug(self.login.username.trim().toLowerCase().length);

  self.modified = Date.now();
  return callback();

});

UserSchema.statics.createAttrs = [ 'name', 'login', 'image', 'ownerId', 'phone', 'mobile', 'email', 'company', 'customer', 'position', 'groups',
  'accepts', 'holiday', 'status', 'archived', 'session', 'timezone', 'notifications', 'external', 'guides' ];
UserSchema.statics.updateAttrs = [ 'name', 'login', 'image', 'ownerId', 'phone', 'mobile', 'email', 'company', 'customer', 'position', 'groups',
  'accepts', 'holiday', 'status', 'archived', 'session', 'timezone', 'notifications', 'external', 'guides' ];
UserSchema.statics.populateAttrs = [ 'customer', 'company', 'holiday.redirect' ];

UserSchema.virtual('name.full').get(function() {
  return this.name.first + ' ' + this.name.last;
});

UserSchema.path('email').validate((email) => ValidationService.validateEmail(email));
UserSchema.path('phone').validate((phone) => (phone) ? ValidationService.validatePhone(phone) : true);
UserSchema.path('mobile').validate((mobile) => (mobile) ? ValidationService.validatePhone(mobile) : true);
UserSchema.path('login.username').validate((username) => ValidationService.validateUsername(username));

UserSchema.post('validate', function() {
    // add validate event here
});

// Export User.
module.exports = {
  schema: UserSchema,
  name: 'User',
  connection: 'main'
};
