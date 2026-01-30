"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouToube {
    constructor(cameraMode, filter, burst, detector) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.detector = detector;
    }
    createStory() {
        console.log("Story was Created Sucessfully!");
    }
}
//# sourceMappingURL=second.js.map