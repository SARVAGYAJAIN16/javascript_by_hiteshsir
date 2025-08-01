//  JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
//  and you do not need to explicitly declare the type of a variable before using it. You can assign different 
//  types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly,
//  and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable 
// type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not
//  handled carefully. Static typing, on the other hand, provides better type safety at the cost of some
//  initial verbosity and strictness.

//---------------

// primitive datatype

const score = 100   // number 
const scoreValue = 100.3 // number (here is no concept of float value only numbers)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false


// non - primitive datatype
// array , object , functions

const heros = ["shaktiman", "naagraj", "doga"];
// storing in variable
let myObj = {   // it is object
   name: "hitesh",
   age: 22,
}


// function   
// storing a function

const myFunction = function(){
    console.log("Hello world");
}

// * Premitive Datatypes

//                   Type                               typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)