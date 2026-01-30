interface TakePhotoes{
    cameraMode:string,
    filter:string,
    burst:number
}

interface Story {
    createStory():void
}

class Instagram implements TakePhotoes{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}
class YouToube implements TakePhotoes, Story{
     constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        private detector:string
    ){}
    createStory(): void {
        console.log("Story was Created Sucessfully!")
    }
}