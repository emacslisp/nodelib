'use strict';

class ObjectHelper {
    constructor() {
        return this;
    }

    async mergeObject(objA, objB) {
        return {...objA, ...objB };
    }

    async mergeObject2(objA, objB) {
        Object.assign(objA, objB);
        return objA;
    }
}

module.exports = ObjectHelper;