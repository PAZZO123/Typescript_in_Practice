"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //doing a lot of calculations
        return 8;
    }
}
class Instagrams extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia has gotten already!');
    }
}
let hc = new Instagrams("Test", "Test2", 56);
//# sourceMappingURL=Abstract_Class.js.map