let myName = "sarvagya"
console.log(myName.length); // 8
let myName2 = "sarvagya      "
console.log(myName2.length); // 14
console.log(myName2.truelength);  // undefined

// understanding in depth

let myHero = ["thor","spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    // now making method
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);// function ku kaisa pata ki ma hisi function ka bara ma baat kar raha hu so we write 'this'
    }
}
/*
// we want ..... so we have to make this 
heroPower.sarvagya()
*/
// we know array, string, function sab object ka through he hota ha.

Object.prototype.sarvagya = function(){
    console.log(`sarvagya is present in all object`);
}

// heroPower.sarvagya() // sarvagya is present in all object

// for array we are checking
myHero.sarvagya() // sarvagya is present in all object

// array -> object -> null
// now checking if we inject power to array not object so what happen...


Array.prototype.heySarvagya = function(){
    console.log(`Sarvagya says hello`);
}
// it is array (power is in object)
myHero.sarvagya()  // sarvagya is present in all object
// it is array (power is in array)
myHero.heySarvagya()  // Sarvagya says hello
// it is object
// heroPower.heySarvagya() // error 


// Inheritance 

const User ={
    name:"sarvgya",
    email:"sarvagya@google.com"

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // so TeachingSupport properties can be access here  // two times underscore.
}
// we can write  outside also
Teacher.__proto__ = User // outdated approch

// new approch (modern syntax) // prototypal inheritance.
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "sarvagyajain     "
String.prototype.trueLength = function(){
    console.log(`${this}`); // sarvagyajain
    console.log(`${this.name}`); // undefined (because iska koi access nahi tha)
    console.log(`True length is : ${this.trim().length}`); // True length is : 12
}

anotherUsername.trueLength()
/*Output 
sarvagyajain
undefined
True length is : 12
*/

"sarvagya".trueLength()
"jain".trueLength()
/* Output 
sarvagya  // isma 'this' ka refrence ha sarvagya ka
undefined
True length is : 8
jain     // isma 'this' ka reference ha jain ka
undefined
True length is : 4
*/