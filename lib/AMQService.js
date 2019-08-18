"use strict";
let stompit = require("stompit");
const PERF_RESPONSE_QUEUE = "/temp-queue/PerfResponseQ-";
const REQUEST_QUEUE = "/queue/WEBNMS_OUT";

const WEBNMS_REQUEST = "au.com.vocus.model.webnms.CustomerServicePerfRequest";

const config = {
    "servers": [
      {
        "host": "dev02.vocus.com.au",
        "port": 61613,
        "connectHeaders": {
          "login": "msgUser",
          "passcode": "msgPass",
          "heart-beat": "5000,5000"
        }
      }
    ],
    "options": {
      "maxReconnects": 50,
      "randomize": true,
      "useExponentialBackOff": true,
      "connect": {
        "maxLineLength": 1048576,
        "connectHeaders": {
          "heart-beat": "5000,5000"
        }
      }
    }
  };

  let octResult =
  {"status" : true,"outOctetJson":{"customerService":"VCT126216","startTime":1560693600000,"outOctets":{"bdr01.syd11.nsw.vocus.net.au_INTERFACE_HundredGigE0/3/0/0.100":[[1561253676578,2.3793427065E9],[1561257512257,2.4151263975E9],[1561261466236,2.6650096245E9],[1561264326382,2834141030],[1561267250637,2.9966597685E9],[1561271353655,3122543654],[1561275356106,3250050072],[1561279376600,3591132370],[1561282571240,3901489997],[1561285616524,4.1095530495E9],[1561289689684,4135746053],[1561293899627,3584670612],[1561297807298,2.9241860985E9],[1561300719101,2177529867],[1561303599652,1.5294603755E9],[1561307367238,1.0733146695E9],[1561311094691,792424984],[1561314831241,607544673],[1561318481323,571662545],[1561322180174,674069017],[1561326022462,9.663591685E8],[1561329902348,1.1390645785E9],[1561332812989,1209319368]],"bdr02.mel11.vic.vocus.net.au_INTERFACE_TenGigE0/0/1/3":[]},"endTime":1561384799999},"inOctetJson":{"customerService":"VCT126216","startTime":1560693600000,"inOctets":{"bdr01.syd11.nsw.vocus.net.au_INTERFACE_HundredGigE0/3/0/0.100":[[1561253676845,305.5],[1561257514186,306],[1561261466646,305],[1561264327026,304],[1561267251160,306.5],[1561271353998,306],[1561275356311,305],[1561279376852,306.5],[1561282571444,306],[1561285616671,305.5],[1561289690033,305.5],[1561293900115,305],[1561297808903,305.5],[1561300719700,307],[1561303601448,305],[1561307369016,306.5],[1561311095258,304],[1561314833019,305.5],[1561318481824,306],[1561322180174,306],[1561326022462,304.5],[1561329902348,307],[1561332812989,306]],"bdr02.mel11.vic.vocus.net.au_INTERFACE_TenGigE0/0/1/3":[]},"endTime":1561384799999}}

class AMQService {
  constructor() {
    return this;
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      let stompClient = new stompit.ConnectFailover(
        config.servers,
        config.options
      );

      stompClient.connect((err, client, reconnect) => {
        if (err) return reject(err);

        client.on("error", err => {
          console.log(err);
          reconnect();
        });

        return resolve(client);
      });
    });
  }

  publish(connection, reqName, requestQueue, data) {
    let self = this;

    return new Promise((resolve, reject) => {
      try {
        let requestData = JSON.stringify(data);
        let sendHeaders = {
          destination: requestQueue,
          VOCUS_REQ_NAME: reqName,
          'content-length': Buffer.byteLength(requestData, 'utf8')
        };

        let frame = connection.send(sendHeaders, {
          onReceipt: () => {
            self.onReceipt(reqName, requestData, connection, resolve);
          }
        });

        connection.on('error', (error) => {
          console.log(reqName, error);
        });
        frame.write(requestData);
        frame.end();
      } catch (err) {
        return reject(err);
      }
    });
  }

  onReceipt(reqName, requestData, connection, resolve) {
      console.log(JSON.stringify({
          action: `PUSH/${reqName}`,
          data: requestData
      }, null, 4));
    return resolve();
  }

  getConnectFailOverObject() {
    return new stompit.ConnectFailover(config.servers, {
      maxReconnects: 50,
      useExponentialBackOff: true,
      connect: {
        connectHeaders: {
          "heart-beat": "5000,5000"
        }
      }
    });
  }

  async subscribe(connectFailOver, responseQueueName) {
    try {
      let channel = new stompit.Channel(connectFailOver, {
        alwaysConnected: true
      });

      channel.subscribe({
        destination: responseQueueName
      }, async (err, message) => {
        if (err) console.log(err);
  
        await this.eventIn(message, message.headers);
      });
    } catch (ex) {
        console.log('subscribe', ex);
    }
  }

  async eventIn(message, headers) {
    console.log(JSON.stringify(message, null, 4));
    //console.log(JSON.stringify(headers, null, 4));

    if(!headers) return;

    switch (headers.VOCUS_REQ_NAME) {
        case WEBNMS_REQUEST:
            message.ack();
            let body = await this.parseMessageToUtf8(message);
            let result = JSON.parse(body);
            console.log(JSON.stringify(result, null, 4));
            let connection = await this.getConnection();
            await this.publish(connection, WEBNMS_REQUEST, headers.VOCUS_REPLY_TO, {data: octResult});
            //message.ack();
            break;
      default:
        message.ack();
        break;
    }
  }

  async webnmsSubscribe() {
    await this.subscribe(this.getConnectFailOverObject(), "/queue/WEBNMS_IN");
  }

  publishAndSubscribe(
    connection,
    reqName,
    requestQueueName,
    responseQueueName,
    data
  ) {
    let self = this;

    return new Promise((resolve, reject) => {
      try {
        let requestData = JSON.stringify(data);
        let sendHeaders = {
          destination: requestQueueName,
          "reply-to": responseQueueName,
          VOCUS_REQ_NAME: reqName,
          "content-length": Buffer.byteLength(requestData, "utf8")
        };

        let frame = connection.send(sendHeaders);

        connection.on("error", error => {
          self.onError(reqName, error, reject);
        });
        frame.write(requestData);
        frame.end();

        connection.subscribe(
          {
            destination: responseQueueName
          },
          (err, message, headers) => {
            if (err) return reject(err);
            message.readString("utf-8", (err, body) => {
              if (err) {
                connection.disconnect();
                return reject(err);
              }
              message.ack();
              connection.disconnect();
              try {
                let results = JSON.parse(body);

                if (results.status === "ok") {
                  return resolve(results);
                } else {
                  return resolve([]);
                }
              } catch (err) {
                return reject(err);
              }
            });
          }
        );
      } catch (err) {
        connection.disconnect();
        return reject(err);
      }
    });
  }

  parseMessageToUtf8(message) {
    return new Promise((resolve, reject) => {
      message.readString('utf-8', (err, body) => {
        if (err) return reject(err);
        return resolve(body);
      });
    });
  }
}

module.exports = AMQService;
