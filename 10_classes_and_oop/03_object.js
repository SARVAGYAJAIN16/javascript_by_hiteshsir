function multipleBy5(num){
   return num*5 
}

multipleBy5.power = 2

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {}  // .prototype here bydefault some context has been set. so here {} is a 'this' of that method.
/* NOTE:-
  we learn that in js everyting is object.
  function - function bhi ha , function - object bhi ha.
  
*/

// Understanding in detail 

function createUser(username, score){
  //  username = username (here it create confusion between username) so we use this keyword.
   this.username = username
   this.score = score

}

createUser.prototype.increment = function(){
    this.score++  // modify code jisna bhi bulaya ha uska pass jayo so here our problem is  not solved
}

createUser.prototype.printMe = function(){
   console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) // modifing code writing 'new' keyword
const tea = new createUser("tea",250) // modifing code with 'new' keyword
// here the problem is usha pata he nahi ha ki 25 ya 250 kis ku increment karna ha.

/* NOTE:-
we dont write like this
 myArray.prototype.map() // beacuse it happen behind the scene
  // we can directly can write ex newHero.map
*/

chai.printMe() // error Cannot read properties of undefined   // for interview ******
/*
const chai = createUser("chai", 25)
const tea = createUser("tea",250)

properties inject huyi ha (like  .prototype we have written)
but here from above function createUser we have transfer the properties to chai (tu aap na bataya nahi ki ya additional properties ayi ha .... so 
we have to tell this.... so ya batana ka kaam kara ga 'new' keyword)
*/

// after writing 'new' keyword (modifing code)
/* OUTPUT 
price is 25
*/

/* ******* INTERVIEW IMP (big company) **********

Here's what happens behind the scenes when the new keyword is used:

-> A new object is created: The new keyword initiates the creation of a new JavaScript object.

-> A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

-> The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

-> The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
the newly created object is returned.
*/

/* NOTE:-
 js give constructor through 'new' keyword. not through classes.
 but people get confuse so they bring classes in js.
 
*/