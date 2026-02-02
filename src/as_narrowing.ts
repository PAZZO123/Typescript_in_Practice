type Fish={swim:()=>void}
type Bird={fly:()=>void}

function isFish(pet: Fish|Bird){
    return (pet as Fish).swim !== undefined
}