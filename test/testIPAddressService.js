let ipAddressServiceClass = require('../lib/IPAddressService');

let ipAddressService = new ipAddressServiceClass();

async function test() {
    let ipAddress = '255.255.255.255';
    let result = ipAddressService.ipToNumber(ipAddress);
    console.log(result);

    ipAddress = '10.145.168.62';

    result = ipAddressService.validIP(ipAddress);
    console.log(result);

    let mask = 23;
    result = ipAddressService.ipRange(ipAddress, mask);
    console.log(result);

    console.log(ipAddressService.longToIP(result.start), ipAddressService.longToIP(result.end));
}

test(); 