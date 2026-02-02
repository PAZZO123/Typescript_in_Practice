function logValue(x:Date |string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    console.log(x)
}