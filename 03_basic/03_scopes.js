// Scope part-1

let a = 10
const b = 20
var c = 30

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

/*

{  // scope start
    ---
    ---
    ---
}  // scope end

*/

if(true){  // inside 'if' it is block scope and outside 'if' is global scope..
 let aa = 10
 const bb = 20
 var cc = 30
 ccc = 40
}

//console.log(aa); // error
//console.log(bb); // error
console.log(ccc); // 40 (this is problem)
console.log(cc); // 30  (this is problem)

// ********that why we dont use var *******


let x = 300
if(true){
    let x = 2;
    const b = 3;
    console.log("Inner : ", x) // Inner :  2  // block or local scope
} 
console.log(x); // 300    // global scope

/*

NOTE:- what is scope in window vs scope in node 

       it done through a keywords( that is  later in dom)

       in  website we do console (by inspect)  so global scope is different while
       in code enviroment (vs code) the global scope is different ... remember it (interview**)

       
*/