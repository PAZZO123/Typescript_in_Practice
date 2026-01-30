const score:Array<number>=[]
function identityOne(val:number|boolean):number|boolean{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

interface Bottle{
    brand:string,
    type:number
}
identityThree<Bottle>({brand:"skol",type:3});

function getSearchProduct<T>(products:T[]):T|undefined{
    return products[3]
}
const getMoreSearchProduct=<T>(products:T[]):T[]=>products


interface Database{
    Connection:string,
    Username:string,
    Password:string
}

function anotherFn<T ,U extends Database>(val1:T,val2:U):Object{
    return {}
}

anotherFn(24,{Connection:'connected',Username:"mysql",Password:""})