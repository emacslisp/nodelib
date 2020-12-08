async function main() {
    let influxdbJson = require('./data/influxdb.json');

    let output = []
    for(let result of influxdbJson.results[0].series) {
        if(!output.includes(result.tags.hostname.trim())) {
            console.log(result.tags.hostname);
            output.push(result.tags.hostname)
        }
    }
}

main()