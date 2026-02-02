type Fish={swim:()=>void}
type Bird={fly:()=>void}

function isFish(pet: Fish|Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}

function GetFood(pet: Fish| Bird){
    if(isFish(pet)) {
        pet
        return 'fish food'
    }
    pet 
    return "bird food"
}