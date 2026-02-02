"use strict";
function getShapeArea(val) {
    switch (val.kind) {
        case "circle":
            return val.radius * Math.PI;
        case "square":
            return val.side * val.side;
        default:
            const defaultshape = val;
            return defaultshape;
    }
}
//# sourceMappingURL=never_type.js.map