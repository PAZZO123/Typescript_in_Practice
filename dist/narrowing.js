"use strict";
function detector(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    else if (typeof val === 'object') {
        return val;
    }
    return val + 4;
}
function provideId(id) {
    if (!id) {
        throw new Error('Empty Id detected');
    }
    return id.toLowerCase();
}
//# sourceMappingURL=narrowing.js.map