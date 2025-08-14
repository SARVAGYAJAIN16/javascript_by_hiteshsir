// truth and false value.....

const userEmail = "h@sarvagya.ai"
if(userEmail){
    console.log("got user email");
} else{
    console.log("Dont have user email");
}
// output ->  got user email(here string assume to be true)


const userEmail1 = "" ; // empty string
if(userEmail1){
    console.log("got user email");
} else{
    console.log("Dont have user email");
}
// Dont have user email (here empty string assume to be false)

const userEmail2 = [] // empty array
if(userEmail2){
    console.log("got user email");
} else{
    console.log("Dont have user email");
}
//  got user email (here empty array assume to be true)



// *********** Rules **************
/*
  value assume to be false
->     false, 0 ,-0, BigInt 0n , "" ,null , undefined , NaN

  value assume to be True
->  true, "0" (string ka andar ha tu true) , 'false' , " ", [] , {} (object) , 
    function(){} (empty function)
*/

// To check array empty or not
if(userEmail2.length === 0){
    console.log("Array is empty"); // Array is empty
}

// to check empty object or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){  // Object and keys is a keyword
  console.log("Object is empty"); // Object is empty
}
// NOTE:-
/*
   false == 0    -> true
   false == ''   -> true
   0 == ''       -> true
*/


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); // 5

let val2 = null ?? 10
console.log(val2); // 10 ( if null value is come so safety check kar de)

let val3 = undefined ?? 15
console.log(val3);  // 15

val4 = null ?? 10 ?? 20
console.log(val4); //10 (the first value will be printed other than null and undefined)

// Terniary Operator
// condition ? true : false