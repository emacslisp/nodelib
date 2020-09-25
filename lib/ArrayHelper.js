class ArrayHelper {
    constructor() {
        return this;
    }

    async dumpArray(array) {
        for(let output of array) {
            console.log(output)
        }
    }

    concat(array, extenedArray) {
        for(let element of extenedArray) {
            array.push(element);
        }
        
        return array;
    }
}

module.exports = ArrayHelper;