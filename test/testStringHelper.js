let StringHelperClass = require('../lib/StringHelper');
let stringHelper = new StringHelperClass();


async function startsWithTest() {
    let result = stringHelper.startsWith('ipw1234','ipw');
    console.log(result);
}

async function escapeSepcialChar() {
    let str = "VCT000898 - IPT - Equinix Australia Ltd (RI147421)|VCT000898 - IPT - Equinix (SY1/SY4)-(RI105253)(RI105257)|VCT000898 - IPT - Equinix SY3 via DKF017466 & DKF125203(RI105255) & DKF227433 (RI226442)|VCT000898 - IPT - Equinix (RI105254) (RI228447) (RI226443)|VCT000898 - IPT - Equinix Australia Ltd (RI147343)";

    console.log(str.replace(/[.*+\-?^${}()[\]\\]/g, '\\$&'));

    let value = '';
    let output = {
        dimension5: value||'N/A'
    }
    console.log(output.dimension5);
}

// startsWithTest();
escapeSepcialChar();