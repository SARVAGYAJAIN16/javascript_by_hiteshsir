// +++++++++++++++ Numbers ++++++++++++
const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance) // [Number: 100]

// toString method  -> it convert in string

console.log(balance.toString().length); // 3 (length of 100)

// toFixed method
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 23.9

//const otherNumberUpdate = 123.8966
//console.log(otherNumberUpdate.toPrecision(3)) // 124 *****

const otherNumberUpdate = 1123.8966
console.log(otherNumberUpdate.toPrecision(3)); // 1.12e+3

// toLocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 // default form is US
// want in indian form
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// +++++++++++++++++ Maths +++++++++++++++++

console.log(Math); // Object [Math] {}

// abs method (absolute value) it convert only negative to positive

console.log(Math.abs(-4)); // 4

// round method... above 5 or equal to 5 so next number we get
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.5)) //5
console.log(Math.round(4.6)) // 5

// ceil 
console.log(Math.ceil(4.5)); // 5

// floor
console.log(Math.floor(4.5)); // 4

// min 
console.log(Math.min(1,2,3,4)); // 1

// max
console.log(Math.max(1,2,3,4)); // 4

// random method
console.log(Math.random()); // any random value bewteen 0 and 1 (in decimals)

// note that formula using with random
const min = 10
const max = 20

console.log(Math.random() * (max - min + 1)) // 7.486421067685361

console.log(Math.floor(Math.random() * (max - min + 1))) // 8

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // here min value sa value ayegi...  // 20


