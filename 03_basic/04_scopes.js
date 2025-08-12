// scope level and mini hoisting in js (part-2)

// nested scope....

function one(){
    const username ="sarvagya"
      function two(){
        const website = "youtube"
        console.log(username);
      }
   //   console.log(website); // first error here come 

      two()

}
one()  // output sarvagya (one function then function two will work)
/*
  TIP:-
   To remember this suppose a child can ask icecram from uncle but 
   uncle cannot ask icecream from child. 
   so, uncle is function one and function two is child.
   so fun2 can ask data from fun1 .. but fun1 cannot access fun2 data 
*/   


if(true){
   const username ="sarvagya"
   if(username === "sarvagya"){
       const website = "youtube"
       console.log(username + website) // sarvagyayoutube
   }
//  console.log(website); // first error here come
}

// console.log(username); // second error 


// +++++++++++++ interesting ++++++++++++++++
// concept

console.log(addone(5))  // 6
function addone(num){
  return num + 1
}

addTwo(5)
const addTwo = function(num){  // here error because before decalration we are accessing..
  return num + 2
}
