"use strict";
//  | { type: 'pushed'; to: string; device: string; };
function assertNever(x) {
    throw new Error(`Unhandled Case ${JSON.stringify(x)}`);
}
function sendNotification(n) {
    switch (n.type) {
        case "email":
            console.log(`Email has sent Succesfully`);
            break;
        case "sms":
            console.log(`SmS Has Sent successfully.`);
            break;
        case "push":
            console.log(`Push is doing it's Job`);
            break;
        default:
            assertNever(n);
    }
}
let n = { type: 'email', to: 'Patrick', subject: 'Iphone 17' };
sendNotification(n);
//# sourceMappingURL=exercise4.js.map