/*
4. You have an array that contains mixed data types: `(string | number)[]`. Write a function called `separateTypes` that takes this mixed array and returns an object with two properties:
    - `strings`: an array containing only the string values
    - `numbers`: an array containing only the number values
    
    Use proper type guards to check the types. 
    
    For example, if given `[1, "hello", 2, "world", 3]`, it should return `{ strings: ["hello", "world"], numbers: [1, 2, 3] }`.
    */
   function separateTypes(arr:(string|number)[]):{strings:string[],numbers:number[]}{
    let result={
        strings:[] as string[],
        numbers:[] as number[]
    }
    for( let n of arr){
        if(typeof n ==='string'){
            result.strings.push(n)
        }else if(typeof n==='number'){
            result.numbers.push(n)
        }
    }
    return result
   }

   const mixed = [1, "hello", 2, "world", 3];
const separated = separateTypes(mixed);

console.log(separated);

