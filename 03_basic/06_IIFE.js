// IIFE (Immediately Invoked function Expressions)
/* 
when you have written function so immediately usha exceute kar do.
why we need ?
reason 1 : 
    we write a file in which it have only database connection.
    and we want that when application sa start hu hamara database sa connection 
    start hu jaya..

reason 2 :
     sometimes global variables are there and we are writing function so we dont 
     want that global variable kuch problem kara function ma (child can asked from uncles)
     so data may change (beacuse of global variables)so we say it polluted hu gaya function. 
     so hum function ma ek naya scope bana leta ha..

*/

(function chai(){   // parentheis laga ka block bana diya function ku.
    console.log(`DB connected`);
}) ()
// output DB connected 

// understanding syntax
/*
    () ()  first parentheis is function defination and second parentheis is
           execution. thay is IIFE
*/

// another way using arrow function
( () => {
    console.log(`DB connected Two`);
}) ()
// error

// or again writing like above 
( function chai2() {
    console.log(`DB connected Two`);
}) ()
// the same we write but then also it will not work 
/*
why ?
 IIFE is invoked but it dont know that where it has to stop context
 so to solve this you have to do end (by using semicolon after second parenthesis)
*/

( function chai3() { // named IIFE (because it have name)
    console.log(`DB connected Two`);
}) ();

// Now in console.log it expected a variable so dolar lagaya and write
// name  then write name in function and then for pass we write in second parenthesis

((name) => { // simple or unnamed IIFE (because it not have name)
    console.log(`DB connected here ${name}`)
}) ('sarvagya') 
// output DB connected here sarvagya

/* 
NOTE:- Interview
  writing two IIFE you must end with semicolon (first IIFE)
*/  