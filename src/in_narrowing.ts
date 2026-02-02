interface Users{
    name:string
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:Users|Admin){
    if("isAdmin" in account) return account.isAdmin
    return false
}