function detector(val:number | string){
    if(typeof val ==='string'){
        return val.toLowerCase()
    }
    return val+2
}