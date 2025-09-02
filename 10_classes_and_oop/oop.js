// Object literals

const user = {
    username: "sarvagya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}
console.log(user.username);
console.log(user.getUserDetails());

/* Output
sarvagya
Got user details from database
undefined
*/

/* NOTE:-
// in console to understand
 let myArr = [1,2,3]
 -> so we get properties like map...

 let myArr2 = [2,3,4]
 -> so we get properties like map..
 
 So when we apply loop(map) so how it know konsa wala par lagana ha.
 so we are talking about current context. we have to tell about current context
 we use 'this' keyword. 
*/

const user2 = {
    username: "sarvagya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${username}`);
    }
}
//console.log(user2.username);
//console.log(user2.getUserDetails());

/* Output 
sarvagya
error will come (it saying username is not defined)
because usko nahi pata konsa username ka bara ma baat hu rahi ha.
we study sab js engine ma hota ha.. so usna function ki detail tu la li but usha 
pata he nahi ha ki user variable kya ha. us function ka andar  exeution context tu bata na hota ha ki
ma apna data ki baat kar raha hu.. so we use 'this' keyword
*/

// modify code using this keyword..


const user3 = {
    username: "sarvagya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }
}
console.log(user3.username);
console.log(user3.getUserDetails());
/* Output 
sarvagya
Username: sarvagya
undefined
*/

// here seeing value of this keyword
const user4 = {
    username: "sarvagya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user4.username);
console.log(user4.getUserDetails());

/* Output 
sarvagya
{    // it is our current context.
  username: 'sarvagya',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined
*/

// we try 
console.log(this);  // {}  (empty object) we get in output.

/* NOTE:-
 if we write same thing in console(web browser) so we get so many value (we get window object)
 'this' is a object.
 */


// constructor function

// const promiseOne = new Promise()
// const date = new Date()
/* Note:-
'new' keyword  is a constructor function which allow ek he object sa multiple instance can make.  
'new' keyword is used to create new context and this only we called as constructor function.
*/

function User(username, loginCount, isLoggedIn){
    this.username = username   // left hand side wala hamara variable ha. RHS wala value is passing.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
   
    return this  // here object is passed on.
}

const userOne = User("sarvagya", 12,true)
console.log(userOne);
/*Output
 username: 'sarvagya',
  loginCount: 12,
  isLoggedIn: true
*/
function User1(username, loginCount, isLoggedIn){
    this.username = username   // left hand side wala hamara variable ha. RHS wala value is passing.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
   
    return this  // here object is passed on.
}

const userOne1 = User1("sarvagya", 12, true)
const userTwo2 = User1("Jain", 11 , false)
console.log(userOne1);
/* Output  but how?? userTwo2 we have not printed.
  username: 'Jain',
  loginCount: 11,
  isLoggedIn: false

  // so here happen is that userTwo2 has overwrite your value.
     so constuctor function always give new instance copy.
*/
// so we use 'new' keyword..
function User2(username, loginCount, isLoggedIn){
    this.username = username   // left hand side wala hamara variable ha. RHS wala value is passing.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
   
    return this  // here object is passed on. (if you do comment on (return this) so then also it will work beacuse it is a implict way bydefault return hota he ha).
}

const userOne3 = new  User2("sarvagya", 12, true) // by writing new we are saying give me new instance.
const userTwo4 = new User2("Jain", 11 , false)
console.log(userOne3);
console.log(userTwo4);
/* Output 
User2 { username: 'sarvagya', loginCount: 12, isLoggedIn: true }
User2 { username: 'Jain', loginCount: 11, isLoggedIn: false }

NOTE:- 'new' keyword gives you new instance or copy.
*/

/* NOTES of 'new' keyword of internal working:---
1-> A new object is created:- whenever you use new keyword so first a empty object is create which is called instance. 
2-> constructor function is called because of 'new' keyword:- it do that jitna bhi argument ha wo usma pack karta ha aur aap ku de data ha.  
3-> jitna bhi argument likha ha wo this keyword ma inject hu jata ha.
4-> you get thing in your function.
*/

// function also we can write....
function User1(username, loginCount, isLoggedIn){
    this.username = username   // left hand side wala hamara variable ha. RHS wala value is passing.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
   
    return this 
}

// constructor means refrenece hoti ha kud ka baara ma.

function User3(username, loginCount, isLoggedIn){
    this.username = username   // left hand side wala hamara variable ha. RHS wala value is passing.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
   
    return this 
}

const userOne5 = new  User3("sarvagya", 12, true) // by writing new we are saying give me new instance.
const userTwo6 = new User3("Jain", 11 , false)
console.log(userOne5.constructor); //output  [Function: User3] // means ek function aya ha user3


// read instanceof method.