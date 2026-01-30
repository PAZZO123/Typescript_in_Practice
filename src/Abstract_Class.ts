abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void
    getReelTime():number{
        //doing a lot of calculations
        return 8
    }
}
class Instagrams extends TakePhoto{
    constructor(
        public cameraMode:string,
         public filter:string,
         public burst:number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log('Sepia has gotten already!')
    }

}
let hc=new Instagrams("Test","Test2",56)