let xmlClass = require('../lib/XMLHelper');

let xmlHelper = new xmlClass();

async function test() {

    let xml = "<root name ='xxxxx'>Hello xml2js!</root>";
    let result = await xmlHelper.parseXML(xml);
    console.log(result);

    xml = `<?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><ns3:getTransactionListResponse xmlns:ns2="http://xml.inomial.com/smile/2.xsd" xmlns:ns3="http://ws.inomial.com/smile.2"><ns2:TransactionList><ns2:transaction xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:ItemisedTransactionDetailType"><ns2:version>2.0</ns2:version><ns2:transactionType>Invoice</ns2:transactionType><ns2:company>1</ns2:company><ns2:usn>CN666</ns2:usn><ns2:transactionNumber>P363964</ns2:transactionNumber><ns2:currency>AUD</ns2:currency><ns2:amount>0</ns2:amount><ns2:accountType>814</ns2:accountType><ns2:gstAmount>0.00</ns2:gstAmount><ns2:entryTimestamp>2019-01-01T10:00:00.000+11:00</ns2:entryTimestamp><ns2:unallocatedAmount>0.00</ns2:unallocatedAmount><ns2:enteredByUsn>058554</ns2:enteredByUsn><ns2:logTimestamp>2019-01-04T19:34:43.264+11:00</ns2:logTimestamp><ns2:glCode>invoice</ns2:glCode><ns2:transactionDate>2019-01-01+11:00</ns2:transactionDate><ns2:dueDate>2019-01-31+11:00</ns2:dueDate><ns2:openDate>2019-01-03+11:00</ns2:openDate><ns2:closeDate>2019-01-04+11:00</ns2:closeDate><ns2:quoteNumber>Q2338245</ns2:quoteNumber><ns2:createdByUsn>058554</ns2:createdByUsn><ns2:discount>0</ns2:discount><ns2:transactionSource>Bulk</ns2:transactionSource></ns2:transaction><ns2:transaction xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:ItemisedTransactionDetailType"><ns2:version>2.0</ns2:version><ns2:transactionType>Invoice</ns2:transactionType><ns2:company>1</ns2:company><ns2:usn>CN666</ns2:usn><ns2:transactionNumber>V369851</ns2:transactionNumber><ns2:currency>AUD</ns2:currency><ns2:amount>0</ns2:amount><ns2:accountType>814</ns2:accountType><ns2:gstAmount>0.00</ns2:gstAmount><ns2:entryTimestamp>2019-01-08T15:33:01.064+11:00</ns2:entryTimestamp><ns2:unallocatedAmount>0.00</ns2:unallocatedAmount><ns2:enteredByUsn>092324</ns2:enteredByUsn><ns2:logTimestamp>2019-01-08T15:33:01.071+11:00</ns2:logTimestamp><ns2:glCode>invoice</ns2:glCode><ns2:transactionDate>2019-01-08+11:00</ns2:transactionDate><ns2:dueDate>2019-02-07+11:00</ns2:dueDate><ns2:openDate>2019-01-08+11:00</ns2:openDate><ns2:closeDate>2019-01-08+11:00</ns2:closeDate><ns2:quoteNumber>Q2345564</ns2:quoteNumber><ns2:createdByUsn>092324</ns2:createdByUsn><ns2:discount>0</ns2:discount><ns2:transactionSource>Manual</ns2:transactionSource></ns2:transaction></ns2:TransactionList></ns3:getTransactionListResponse></S:Body></S:Envelope>`;
    console.log(xmlHelper.indentXML(xml));

    process.exit(0);
}

async function buildXMLTest() {
    var obj = {name: "Super", Surname: "Man", age: 23};
    let result = xmlHelper.buildXML(obj);
    console.log(result);
    process.exit(0);
}

test();
//buildXMLTest();