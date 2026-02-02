"use strict";
function detector(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val;
}
function provideId(id) {
    if (!id) {
        throw new Error('Empty Id detected');
    }
    return id.toLowerCase();
}
//# sourceMappingURL=narrowing.js.map