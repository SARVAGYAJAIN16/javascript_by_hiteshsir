let score = 33

console.log(typeof score) // number
// or another way
console.log(typeof(score)) // number

let score2 = "33"
console.log(typeof score2) // string

// converting string into number

let valueInNumber = Number(score2)  // here Number is datatype
console.log(typeof valueInNumber)  // number
console.log(valueInNumber) // 33

// now score3 = "33abc"  then what ...
let score3 = "33abc"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2) // number
console.log(valueInNumber2)  // NaN (not a number)

// Now for NULL
let score4 = null
console.log(typeof score4) // object 
let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber3) // number
console.log(valueInNumber3) // 0

// Now for undefined

let score5 = undefined
console.log(typeof score5) // undefined
let valueInNumber4 = Number(score5)
console.log(typeof valueInNumber4) // number
console.log(valueInNumber4) // NaN

// Now for Boolean

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

// now for empty string

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2) // false

// if we put "abc" so we get true in above 

// Now for converting in string

let someNumber = 33  // number
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
console.log(stringNumber) // 33
