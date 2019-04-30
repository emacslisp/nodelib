'use strict';

class IPAddressService {
    constructor() {
        return this;
    }

    ipToNumber(ip) {
        let ipArray = ip.split('.');
        let total = 0;
        for(let ipAddress of ipArray) {
            let num = parseInt(ipAddress, 10);
            total <<= 8;
            total += num;
        }

        return total >>> 0;
    }

    validIP(ip) {
        let ipArray = ip.split('.');

        if (ipArray.length !== 4) {
          return false;
        }
    
        for (let ipAddress of ipArray) {
          let num = parseInt(ipAddress, 10);
    
          if (!(num >= 0 && num <= 255)) {
            return false;
          }
        }
    
        return true;
    }

    longToIP (ipl) {
        return ( (ipl>>>24) +'.' +
            (ipl>>16 & 255) +'.' +
            (ipl>>8 & 255) +'.' +
            (ipl & 255) );
    }

    ipRange(ip, mask) {
        let ipNumber = this.ipToNumber(ip);
        let reverstMask = 32 - mask;

        let reverstMaskNumber = 0;

        for(let index = reverstMask - 1; index>=0;index--) {
            reverstMaskNumber += 1<<index;
        }

        let maskNumber = ~reverstMaskNumber;

        let start = ( ipNumber & maskNumber ) >>> 0 ;
        let end = ( ipNumber | reverstMaskNumber ) >>> 0;
        return { start , end };
    }
}

module.exports = IPAddressService;