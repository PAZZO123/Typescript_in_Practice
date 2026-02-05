/*3. **Task:** Define a discriminated union `Notification`:
    
    ```tsx
    type Notification = 
      | { type: 'email'; to: string; subject: string; }
      | { type: 'sms'; to: string; phone: string; }
      | { type: 'push'; to: string; deviceId: string; };
    ```
    
    Write function `sendNotification(n: Notification): void` using `switch(n.type)`. For each case, log a message including all relevant fields.
    
    Add an `assertNever(x: never): never` helper, and call it in `default:` to enforce exhaustive handling.

    */
    type Notifications = 
      | { type: 'email'; to: string; subject: string; }
      | { type: 'sms'; to: string; phone: string; }
      | { type: 'push'; to: string; deviceId: string; }
      | { type: 'pushed'; to: string; device: string; };
 function assertNever(x:never):never{
  throw new Error(`Unhandled Case ${JSON.stringify(x)}`)
 }
    function sendNotification(n: Notifications): void{
    switch(n.type){
        case "email":
            console.log(`Email has sent Succesfully`)
            break;
        case "sms":
            console.log(`SmS Has Sent successfully.`)
            break;
        case "push":
            console.log(`Push is doing it's Job`)
            break;
        default:
            assertNever(n)
            
   }
}
let n:Notifications= { type: 'email', to: 'Patrick', subject: 'Iphone 17' }
sendNotification(n)