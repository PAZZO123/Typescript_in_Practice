"use strict";
function isAdminAccount(account) {
    if ("isAdmin" in account)
        return account.isAdmin;
    return false;
}
//# sourceMappingURL=in_narrowing.js.map