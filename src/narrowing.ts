function detector(val:number | string | number[]){
    if(typeof val ==='string'){
        return val.toLowerCase()
    }
    return val
}


function provideId(id:string |null ){
    if(!id){
        throw new Error('Empty Id detected')
    }
    return id.toLowerCase()
}