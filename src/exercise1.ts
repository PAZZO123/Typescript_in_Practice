// Write a TypeScript function processValue that takes string | number | boolean | null | undefined, uses type guards to log uppercase strings
// , numbers fixed to two decimals, and boolean as "True"/"False,” and throws an error 
// for null or undefined, including a type assertion to narrow the type.
function processValue(value: string | number | boolean | null | undefined): void {
    if(value===null ){
       throw new Error('Invaid Type')

    }
    else if(typeof value ==='string'){
     let str=value as string
        console.log(str.toUpperCase())
        return 
    }
    else if(typeof value==='number'){
        let num=value as number
        console.log(num)
    }
    else if(typeof value==='boolean'){
        let bool=value as boolean
        console.log(bool?"True":"False")
    }
}

processValue(true)
processValue(12)
processValue("name")
processValue(null)