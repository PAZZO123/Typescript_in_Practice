/*
Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds) ,
 it should be aborted.  

https://jsonplaceholder.typicode.com/users
*/

async function fetchWithAbort(url,timer){
    //declaring abort controller objec and signal
    let controller=new AbortController()
    let signal =controller.signal
//timeout to cancel the request
    let timerId=setTimeout(()=>{
        controller.abort()
    },timer)
try{
    //fetching with abort signal
    let response=await fetch(url,{signal})
    clearTimeout(timerId)
   if(!response.ok) console.log(`Server Returned This status ${response.status}`)
    const data=response.json();
return data
//Error handling
} catch(err){
    if(err.name==='AbortError') throw new Error('Signal Aborted In specified time')
      else throw err
}
}
let url='https://jsonplaceholder.typicode.com/users'
//calling the function
fetchWithAbort(url,5)
.then(data=>console.log(data))
.catch(err=>console.log(err.message))