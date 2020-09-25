'use strict';

const fs = require('fs');
const path = require('path');

class FileHelper {

    constructor() {
        return this;
    }

    fileToString(path) {
        // by default readFile returns buffer only
        // once we add encoding such as 'utf8', buffer would be translated into string.
        let file = fs.readFileSync(path,'utf8');
        return file;
    }

    stringToFile(path, str) {
        fs.writeFileSync(path, str);
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

    appendFile(path, data) {
        fs.appendFileSync(path, data + '\n');
    }
    
    async listFiles(dir) {
        let files = fs.readdirSync(dir);
        files = await Promise.all(files.map(async file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) return this.listFiles(filePath);
            else if(stats.isFile()) return filePath;
        }));
    
        return files.reduce((all, folderContents) => all.concat(folderContents), []);
    }

    async listFilesSimple(dir) {
        
    }
}

module.exports = FileHelper;
