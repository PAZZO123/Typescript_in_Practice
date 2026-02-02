function detector(val:number | string | number[]){
    if(typeof val ==='string'){
        return val.toLowerCase()
    }
    return val+2
}