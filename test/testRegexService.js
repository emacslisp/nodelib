let regexServiceClass = require('../lib/RegexService');

//let nodelibTest = new nodelibClass();
let regexService = new regexServiceClass();

async function testRegex() {
    let result  = await regexService.isMatch('/abc def/gi','Abc Def');
    console.log(result);

    result = regexService.validatePhone2('+60 0452074620');
    console.log(result);

    result = regexService.validatePhone2('+(60) 0452074620');
    console.log(result);

    result = regexService.validatePhone2('+60452074620');
    console.log(result);

    result = regexService.validatePhone2('040 0536627');
    console.log(result);
}

let hostMapping = {
    "adl": "Adelaide",
    "akl": "Auckland",
    "bne": "Brisbane",
    "per": "Perth",
    "syd": "Sydney",
    "cbr": "Canberra",
    "hkg": "Hong Kong",
    "mel": "Melbourne"
};

function hostMapping2(hostname) {
    const infos = hostname.split('.');

    const bdrInfo = infos[0];
    let tag = bdrInfo.match(/bdr([0-9]+)/);
    let bdrNo = '';
    if (tag && tag.length >= 1) {
      bdrNo = tag[1];
    }
    const cityInfo = infos[1];

    tag = cityInfo.match(/([a-z]*)[0-9]+/);
    let city = '';
    let fullCityName = '';

    if (tag && tag.length >= 1) {
      city = tag[1];
      fullCityName = hostMapping[city];
    }

    const state = infos[2].toUpperCase();
    let country = '';
    if (infos.length === 6) {
      country = infos[5].toUpperCase();
    } else {
        if (city && city === 'hkg') {
            country = "HK";
        }
    }

    return `${fullCityName ? fullCityName : ''} ${state} ${country ? country : ''} ${bdrNo ? '(' + bdrNo + ')' : ''}`;
}

async function hostMappingEntry() {
    let hostlist = 
["bdr01.adl01.sa.vocus.net.au",
"bdr01.adl02.sa.vocus.net.au",
"bdr01.akl05.akl.vocus.net.nz",
"bdr01.bne03.qld.vocus.net.au",
"bdr01.per02.wa.vocus.net.au",
"bdr01.syd01.nsw.vocus.net.au",
"bdr02.cbr01.act.vocus.net.au",
"bdr02.hkg01.hkg.vocus.net",
"bdr02.mel11.vic.vocus.net.au",
"bdr02.syd03.nsw.vocus.net.au"];

for(let i=0;i<hostlist.length;i++) {
    console.log(hostMapping2(hostlist[i]));
}

}

hostMappingEntry();
