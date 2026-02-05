"use strict";
function validateUser(data) {
    if (typeof data === 'object' && data !== null && 'name' in data && 'age' in data && typeof data.name === 'string' && typeof data.age === 'number') {
        return data;
    }
    throw new Error(`Validation fails`);
}
const apiResponse = { name: "Pazzo", age: 23 };
const user = validateUser(apiResponse);
console.log(user.name); // Pazzo
console.log(user.age); // 23
//# sourceMappingURL=exercise6.js.map