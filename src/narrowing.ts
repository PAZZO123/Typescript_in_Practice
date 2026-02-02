function detector(val:number | string | number[]){
    if(typeof val ==='string'){
        return val.toLowerCase()
    }
    else if(typeof val ==='object'){
        return val
    }
    return val+4
}


function provideId(id:string |null ){
    if(!id){
        throw new Error('Empty Id detected')
    }
    return id.toLowerCase()
}