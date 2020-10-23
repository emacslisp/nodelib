'use strict';

class StringToNumber {
    constructor() {
        return this;
    }

    stringToInt(input) {
        return parseInt(input, 10);
    }

    stringToDouble(input) {
        return parseFloat(input);
    }
}