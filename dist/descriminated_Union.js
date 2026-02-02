"use strict";
function getShapeArea(val) {
    if (val.kind === 'circle')
        return val.radius ** 2 * Math.PI;
    return val.side * val.side;
}
//# sourceMappingURL=descriminated_Union.js.map