/*The following function is meant to log the city for a customer’s shipping address. However, the code is unsafe and may throw runtime errors due to missing or undefined properties.

Without changing the logic of the function, **fix the typing issues** and **make the function safe** using proper TypeScript types.

```tsx
*/
type Customer={
    name:string;
    address?:{
        city:string
    }
}
interface Order{
   // address?:{city:string};
    customer:Customer
}
const logOrder = (order: Order) => {
    const result=order.customer.address?.city
  console.log(`Shipping to: ${result??"No Adress Provided"}`);
};

logOrder({
  customer: {
    name: 'Jane',
    // address is missing
  }
});
