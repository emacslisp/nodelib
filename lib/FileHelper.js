'use strict';

const fs = require('fs');

class FileHelper {

    constructor() {
        return this;
    }

    /**
     * 
     * @param {*} path 
     * @param {*} operation 
     * {
     *    set: [{key: KeyValue, value: Value}, {key: KeyValue, value: Value}],
     *    delete: [key1, key2]
     * }
     */
    loadConfig(path, operation) {
        let jsonFile = fs.readFileSync(path);
        let json = JSON.parse(jsonFile);
        let setOps = operation.set;
        if (setOps) {
            for (let pair of setOps) {
                let keyPath = pair.key;
                let value = pair.value;
                let keyPaths = keyPath.split('.');
                let target = json;
                for (let i=0; i<keyPaths.length -1; i++) {
                    target = target[keyPaths[i]];
                }
                target[keyPaths[keyPaths.length -1]] = value;
            }
        }

        /*
        let deleteOps = operation.delete;
        if (deleteOps) {
            let keyPath = pair.key;
            let keyPaths = keyPath.split('.');
            let target = json;
            for (let k of keyPaths) {
                target = target[k];
            }
            delete target;
        }*/
        let data = JSON.stringify(json, null, 4);
        fs.writeFileSync(path, data); 
    }

    indentJson(path) {
        let jsonFile = fs.readFileSync(path);
        let json = JSON.parse(jsonFile);
        let data = JSON.stringify(json, null, 4);
        fs.writeFileSync(path, data);  
    }
}

//@todo, first library to do here is 
// 1. read file
// 2. change mongodb.url value = localhost
// 3. delete mongodb.options.uername and password
// 4. change redis to be localhost
// 5. change vpe and vocus tails to be localhost
// 6. save final config

module.exports = FileHelper;
