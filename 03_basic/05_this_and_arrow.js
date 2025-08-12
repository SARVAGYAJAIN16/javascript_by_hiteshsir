// 'This' and 'Arrow' function.....

// 'This'  keyword tell about current context.

// To understand This keyword we see in object
const user = {
    username: "sarvagya",
    price: 999,

    welcomeMessage: function(){  // function it is ...
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage // run but nothing printed...
user.welcomeMessage()  // sarvagya, welcome to website
user.username = "sam" // here context ya value has change...
user.welcomeMessage() // sam, welcome to website

/*
note:-
 here above inside curly braces all our context is there..
 when you are refering current context (like username  ya prize ku)
 so we use This keyword.....(this.username) so it make current context.

 // remember arrow function ma 'this' nahi hota ha... 
*/

// now 

const user1 = {
    username: "sarvagya",
    price: 999,

    welcomeMessage: function(){  // function it is ...
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user1.welcomeMessage()    // 1
user1.username = "sam"
user1.welcomeMessage()   // 2

//1  output
/*
sarvagya, welcome to website
{   // 'This' na batya current context
  username: 'sarvagya',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// 2 output   (we have change context)
/*
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


// now 

const user2 = {
    username: "sarvagya",
    price: 999,

    welcomeMessage: function(){  // function it is ...
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
console.log(this); // {} (empty) ( we are in node environment so this is refer an empty object)

// (interview) In browser we do console  so there global object is window object..


function chai(){
    console.log(this);
}
chai() // so many value comes in output.

// NOTE:- when you print 'this' inside function in node enviroment.

function chai2(){
    let username = "sarvagya"
    console.log(this.username);
}
chai2()  // undefined
// function ka andar this we cannot use but in object it is working.

// how to declare function.. through arrow function
const chai3 = function(){
    let username = "sarvagya"
    console.log(this.username)
}
chai3() // undefined


// arrow function
const chai4 = () => {  // remove function keyword
    let username = "sarvagya"
    console.log(this.username)
}
chai4()  // undefined


const chai5 = () => {  // remove function keyword
    let username = "sarvagya"
    console.log(this)
}
chai5();  // {}


// What is Arrow function
/* 
syntax     () => {}
    
*/

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))  // 7

// concept:- (in react  we will see most)
// implict return means it assume you are returning and it is one line code.(so need to 
// write return and curly braces)
const addThree = (num1,num2,num3) => num1 + num2 + num3
console.log(addThree(1,2,3)); // 6

//***********
// curly braces ma wrap kiya tu return likna hoga and if in parenthesis so no need to write return 
const two = (num1,num2) => (num1 + num2)  // another way to write

console.log(two(1,2)); // 3 

// how you return object

const three = (num1,num2) => {username:" sarvagya"}
console.log(three(3,4)); // undefined

// object ku return karna ka liya usha parenthesis ma wrap karna hi hoga..
const four = (num1,num2) => ({username:" sarvagya"})
console.log(four(3,4));  // { username: ' sarvagya' }

