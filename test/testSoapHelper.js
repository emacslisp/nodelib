let SoapHelperClass = require('../lib/SoapHelper');
let UtilityClass = require('../lib/UtilityHelper');

let soapHelper = new SoapHelperClass();
let utilityHelper = new UtilityClass();

async function test() {
    var url = 'https://m2slab.m2.com.au/psaservice.svc?singlewsdl';
    var baseUrl = 'https://m2slab.m2.com.au/psaservice.svc';
    
    let username = 'vocusone';
    let password = 'lhj4px3m5K7';

    let request = {
        fibreServiceAssessmentRequest: {
            Address: {
                AddressId: 1788,
                Postcode: 3008,
                StateName: 'VIC',
                StreetName: 'Bourke Street',
                StreetNumber: 825,
                Suburb: 'Docklands',
                PropertyId: 42564
            },
            DisableMultipleAddressFilter: true,
            ProviderType: "NBN"
        }
    };

    let client = await soapHelper.createSoapClient(url, baseUrl, username, password);

    let result = await client.FibreServiceAssessmentCheckAsync(request);
    console.log(utilityHelper.jsonFormat(result));
}

test();


