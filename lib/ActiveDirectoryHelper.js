"use strict";

const fs = require("fs");

let config = require("../config/global");

class ActiveDirectorHelper {
  constructor() {
    return this;
  }

  async bindDN(username, password) {
    return new Promise((resolve, reject) => {
      this.ad.authenticate(username, password, function(err, auth) {
        if (err) {
          return reject(false);
        }

        if (auth) {
          return resolve(true);
        }

        return reject(false);
      });
    });
  }

  async ADAuth(username, password) {
    try {
      let isAuth = await bindDN(username, password);
      if (!isAuth) {
        return null;
      }

      let config = {
        url: "ldaps://ldaps.vocus.ext:636",
        baseDN: "DC=vocus,DC=ext",
        tlsOptions: {
            rejectUnauthorized: false
        },
        attributes:  ["*"]
      };
      this.ad = new ActiveDirectory(config);

      config.username = username;
      config.password = password;

      this.ad.findUser({ attributes: config.attributes }, username, false, function(err, user) {
          if (!user) {
            console.log(JSON.stringify(err, null, 4));
            return null;
          }

          if (user.memberOf) {
            if (typeof user.memberOf === "string") {
              user.memberOf = [user.memberOf];
            }

            user.groups = [];
            user.memberOf.forEach(function(group) {
              var groups = group.split(","),
                eachgroup = { dn: group, cn: groups[0].substring(3) };
              user.groups.push(eachgroup);
            });
            delete user.memberOf;
          }
          return user;
        }
      );
    } catch (err) {
      console.log(JSON.stringify(err));
    }

    return null;
  }
}

module.exports = ActiveDirectorHelper;
