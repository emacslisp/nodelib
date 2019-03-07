

//var proccessedX = typeof(x) === 'number'? x.toFixed(2) : x;
// return proccessedX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

class NumberHelper {
    constructor() {
        return this;
    }

    formatNumber(x) {
        var proccessedX = typeof(x) === 'number'? x.toFixed(2) : x;
        return proccessedX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

module.exports = NumberHelper;