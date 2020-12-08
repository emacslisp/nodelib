const nock = require('nock')
let request = require('request');


const scope = nock(`http://one-view.apps.oss-core.com`)
.get(`/api/datasources/proxy/1/query`)
.query({
    "q": "SELECT non_negative_derivative(mean(\"ifHCInOctets\"),1s) * 8 as InOctets, non_negative_derivative(mean(\"ifHCOutOctets\"),1s) * 8 as OutOctets FROM \"snmp\".\"autogen\".\"interface_counters\" WHERE  time >= now() - 192h and time <= now() - 0h and \"ifAlias\" =~ /VCT000898/ AND \"hostname\" =~ /^bdr.*$/ GROUP BY time(35m), \"hostname\", \"ifAlias\", \"ifName\"",
    "db": "collector",
    "epoch": "ms"
})
.reply(200, (uri, requestBody) => {
    console.log('### Get utilisationJson from Nock');

    return {abc: true};
});

  async function mainEntry() {
    request({ url : 'http://one-view.apps.oss-core.com/api/datasources/proxy/1/query',
     method: 'GET', 
     qs: {
        "q": "SELECT non_negative_derivative(mean(\"ifHCInOctets\"),1s) * 8 as InOctets, non_negative_derivative(mean(\"ifHCOutOctets\"),1s) * 8 as OutOctets FROM \"snmp\".\"autogen\".\"interface_counters\" WHERE  time >= now() - 192h and time <= now() - 0h and \"ifAlias\" =~ /VCT000898/ AND \"hostname\" =~ /^bdr.*$/ GROUP BY time(35m), \"hostname\", \"ifAlias\", \"ifName\"",
        "db": "collector",
        "epoch": "ms"
     },
     json: true
    }, (erro, response) => {
        console.log(response.body);
    }); 

  }

  mainEntry();