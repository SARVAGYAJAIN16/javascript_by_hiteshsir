// Promise
/* Promise:-
The promise object represents the eventual completion(or failure) of an 
asynchronous operation and its resulting value.

Promise means what task has you given, immediatly it will not complete in 
queue ( it is in queue) abhi load nahi hua ha aur abhi complete nahi hu sakta ha 
wo. Promises completed in future.

Promise is in one of these states:
-> pending: initial state, neither fulfilled nor rejected.
-> fulfilled: meaning that the operation was completed successfully.
-> rejected: meaning that the operation failed.
*/

/*
 Most of the time you consume promise. ex: (if promise come so it
  will come in .then()) and if error come so it will come in .catch() and then .finally() will always run.
*/
//  fetch('https:// something.com').then().catch().finally()

// promise ku consume karna sa phela, samajana hoga ki promise ku banaya kaisa jata ha.

// const promiseOne = new Promise() // promise is created

// NOTE:- In js, object ka apko ek aur instance chaiya ha tu wo same ha almost jaisa aap class ka instance leta ha.
//        with the help of 'new' keyword you will get a new instance( here in js classes are not there)

/* 
 Promise has 2 parts consume karna and create karna.

 promise takes callback function(it has two parts resolve and reject)  and callback ka anadar callback and so on it is called callback hell.
 so promise reduce that callback hell.
*/

// promise is creating
const promiseOne = new Promise(function(resolve, reject){
   // Do and async task
   // DB calls, cryptography, network
   setTimeout(function(){
     console.log('Async task is compelete');
      /*
      **** here code is modified by writing resolve()
      */
      resolve() // now here it will connect to .then()
    },1000)

})

// consuming promise
/*
    .then() have direct connection with resolve ****
    in .then() we get callback means function and this function automatically receive a 
    argument which works is (here value we  return from above work)
*/

promiseOne.then(function(){
    console.log("promise consumed");
})

// Output:  Async task is compelete
/*
   but you see that promise consumed is never get printed...
   so, in actually .then() and resolve is not connected. to do connect we have to call resolve method in 
   above code so write resolve() here in resolve we can pass value also.
*/

/*  modified code Output :---
Async task is compelete
promise consumed
*/


// directly we can write promises in single part

new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("Async task 2");
       resolve()
    }, 1000)
}).then(function(){
  console.log("Async 2 resolved");
})
// because we have not store in variable. so we can directly write .then() 
/* NOTE:-
  resolve hoga tu hama .then() part mil jayega...
*/
// Output:- 
/*
Async task 2
Async 2 resolved
*/
 
// Now suppose data consumption kaisa hota ha aur kaisa leka aya.. 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
     resolve({username: "sarvagya", email: "sar@example.com"}) // here we are passing data in form of object.
    },1000)
})

// how we pass value from setTimeout(resolve object how we pass) to promiseThree.then()

promiseThree.then(function(user){ // with .then() with are connected to resolve so let object we say is 'user' 
  console.log(user);
})
// output->  { username: 'sarvagya', email: 'sar@example.com' }

// suppose we are accessing file , so not have error so we say something and if have so say something else 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){ // agar error nahi ha tu..
          resolve({username: "sarvagya", password: "123"})
        } else{ // agar error ha tu
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})
/* NOTE:
    reject gives error
*/

// promiseFour.then().catch() // .then() laga ka value lalunga aur agar error ayegi tu .catch() laga ka isma error lalaunga

// callback hell .... now suppose username data we want
/*
const username1 = promiseFour.then((user) => { // here trying to storing  username(data) in username1 // so get error(not work)
   console.log(user);
   return user.username
})
console.log(username1); // error 
*/


// so doing chaining of .then()
  promiseFour.then((user) => { 
   console.log(user);
   return user.username
}).then((username1) => {    // here we are using callback fun or arrow function so using arrow function
    // here from above .then() sa value return hogi wahi idar ayegi..
   console.log(username1)

}).catch(function(err){   // so run so error is coming to solve this or handle error we use .catch()
     console.log(err);
})    
// Output 
/*       
ERROR: Something went wrong
*/


// Modifying code now error = false ...

const promiseFour_2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  // here code we modify
        if(!error){ // agar error nahi ha tu..
          resolve({username: "sarvagya", password: "123"})
        } else{ // agar error ha tu
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

/*
  promiseFour_2
  .then((user) => { 
   console.log(user);
   return user.username
})
.then((username1) => {  
    console.log(username1)

})
.catch(function(err){
     console.log(err);
})    
// NOTE:- Always remember that (first output will from  come (when creating promise)) and then output print from consuming promise.
// Output 
/*
{ username: 'sarvagya', password: '123' }
sarvagya
-------- (part)*/





/* another part
// .finally() it will always execute . it say ek baar bata du ju bhi kar raha hu wo hugaya na.
*/
promiseFour_2
  .then((user) => { 
   console.log(user);
   return user.username
})
.then((username1) => {  
    console.log(username1)

})
.catch(function(err){
     console.log(err);
})
.finally(() => console.log("The promise is either resolved or rejected") )    

/* OUTPUT-
{ username: 'sarvagya', password: '123' }
sarvagya
The promise is either resolved or rejected
*/


// Promise is a thing happen in future.. // Async - await
/*
it is not complusory that you will handle error with .then().catch() only.
but async - await also be used.******
->  network rquest ha tu time laga ga so we do await ******
*/
const promiseFive = new Promise(function(resolve, reject){
setTimeout(function(){
        let error = true
        if(!error){ // agar error nahi ha tu..
          resolve({username: "javascript", password: "123"})
        } else{ // agar error ha tu
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then()  // another way want to do
/*
  So, we have async- await syntax
  It wait until work has to be done. jab hu jata ha tabhi he aaga badta(move hota) ha. varna 
  wahi pa aap ku error de data ha. (issue is gracefully catch we are not handle). 
  In some cases it is neccearry like jab tak database connection hua he nahi ha tu aaga move he nahi 
  hona.
  async - await problem is they cannot handle error directly.
*/

/*
async function consumePromiseFive(){
    const response =  await promiseFive // remember promise is here object.so you cannot consume like this promiseFive() it is wrong.
    console.log(response);
}
consumePromiseFive()
/* Output 
error come... because directly async-await  they cannot handle error..
so to overcome this we have wrap in try-catch block.
---*/

// now doing with try catch 
async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response)
  } catch(error) {   // if error come so gracefully it will come here
     console.log(error);
  }
}
consumePromiseFive()
/* Output
 ERROR: JS went wrong  // here gracefully error is handled.
*/


// This section we study in  next video but some information we are study here only...
/*
 fetch -> it is an object which return promise.
 In fetch we can take url.
*/


/*
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')   // network request ha time laga ga tu. we put in await. 
         // here in above response data is coming in string. so we are saying become json
         const data =  await response.json() // this .json take time to convert so put in await
         console.log(data);
    } catch(error){
        console.log("E: ",error);
    }
}
getAllUsers();
// Output :- all dumy data is come ...(same data come which is in these website)

*/

// Now Same function we want in .then().catch() format 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
// output same result as above ... NOTE
/* NOTE
 all above (rest of the code which is already excuted (written in top) but when we are printing so that 
 output coming in last and these output coming first( these website data))...
 Why ???? let see in next video (in our notes handwritten)
*/

