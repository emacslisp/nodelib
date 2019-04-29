let ipAddressServiceClass = require('../lib/IPAddressService');

let ipAddressService = new ipAddressServiceClass();

async function test() {
    let ipAddress = '255.255.255.255';
    let result = ipAddressService.ipToNumber(ipAddress);
    console.log(result);

    ipAddress = '203.134.70.96';
    let mask = 29;
    result = ipAddressService.ipRange(ipAddress, mask);
    console.log(result);

    console.log(ipAddressService.longToIP(result.start), ipAddressService.longToIP(result.end));
}

test(); 