// we have 2 ways to declare object
// 1 literal way (here singleton is not made)
// 2 constructor way (here singleton is made)
 
//  concept of singleton 
// it say whenever you make a object with help of constructor so a singleton object is made.

// object through constructor
// Object.create



// object literals ->
const User = {} // it is our object (empty object)


// **** how to decalre symbol
const mySym = Symbol("key1")

// Interview que....
// how you will use symbol as a key in object



// object are in key : value pair
const JsUser = {
      name:"Sarvagya", // bydefault system process "name" (like this in form of string it take)
      "full name": "Sarvagya Jain",
   //   mySym : "mykey1",  have problem with datatype
      [mySym]: "mykey1",
      age: 18,
      location: "indore",
      email: "sarvagya@google.com",
      isLoggedIn:  false,
      lastLoginDays : ["Monday", "Saturday"]
    }

// how to access object 2 ways (both are important acc to situation)

// .(dot) opertor 
// But the problem is if you have to access "full name" from object so you cannot...(by this dot opertor)
console.log(JsUser.email) // sarvagya@google.com


// another way  [] -> square notation
//console.log(JsUser[email])  // error because it take email in string form so write "email"

console.log(JsUser["email"]) // sarvagya@google.com

// printing  symbol data
console.log(JsUser.mySym) // mykey1 (but the problem is there with datatype here)
console.log(typeof  JsUser.mySym) // string (but  we want in symbol)
// To solve this we have a syntax (to write in object)
// [mySym]: "myKey1"

// so we write so .......
console.log(JsUser[mySym]) // mykey1
console.log(typeof mySym) // symbol



//  overwriting object data
JsUser.email = "sarvagya@chatgpt.com"

// locking the object (so that nobody can change value)
// freeze method 
//   Object.freeze(JsUser)
// trying to change

JsUser.email = "sarvagya123.com"
console.log(JsUser)
/* output -> 
{
  name: 'Sarvagya',
  'full name': 'Sarvagya Jain',
  age: 18,
  location: 'indore',
  email: 'sarvagya@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

// Now adding function in object..
// here comment on freeze line 67 so that console will work
JsUser.greeting = function(){
    console.log("Hello Js user"); 
}

JsUser.greetingTwo = function(){
   console.log(`Hello Js user, ${this.name}`) // this -> (because same object ku reference karna ha)
}

console.log(JsUser.greeting());  // Hello Js user
                                 // undefined

console.log(JsUser.greetingTwo());
// output Hello Js user, Sarvagya
//        undefined  


// remember many times dot opertor we will use ....