/*

5. You receive data from an API as `unknown` type. Create a function called `validateUser` that:
    - Takes an `unknown` parameter
    - Checks if it's an object with `name` (string) and `age` (number) properties
    - Returns the validated object typed as `{ name: string; age: number }` or throws an error if validation fails
    
    Then create a type called `PartialUser` using TypeScript's utility types that makes all properties of your user type optional.
*/
type Usere ={ name: string; age: number }
function validateUser(data:unknown):Usere{
    if(typeof data==='object' && data!==null && 'name' in data && 'age' in data && typeof(data as any).name==='string' && typeof(data as any).age==='number' ){
        return data as Usere
    }
    throw new Error(`Validation fails`)
}
const apiResponse: unknown = { name: "Pazzo", age: 23 };

const user = validateUser(apiResponse);
console.log(user.name); // Pazzo
console.log(user.age);  // 23

