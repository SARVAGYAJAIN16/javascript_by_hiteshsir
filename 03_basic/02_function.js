// Function  (part-2)

function calculateCartPrice(num1) {
   return num1
}
  console.log(calculateCartPrice(2)) // 2
 
 // what if we buy 200 then 400 then 500

 console.log(calculateCartPrice(200,400,500)) // 200

 // to solve this we have   rest opertor
/*
     ...   : it is rest opertor 
     ...   :it is also spread opertor

  in different usecase we differ their different names

*/     

// Rest opertor (...) saying jitna bhi data ha usha wrap karo aur usha da du and it come in array.....


function calculateCartPrice2(...num1){ // using rest opertor
    return num1
}
console.log(calculateCartPrice2(200,400,500)) // [ 200, 400, 500 ]

// another way also
function calculateCartPrice3(val1,val2, ...num1){ // using rest opertor
    return num1
}
console.log(calculateCartPrice3(200,400,500,2000)) // [ 500, 2000 ] 
// here above happen is that in val1 200 , val2 400 is gone and others in rest opertor



// In object we are seeing now

const user = {
    username: "sarvagya",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) // Username is sarvagya and price is 199


// or direct object we can pass
handleObject({
    username:"sam",
    price:399
})
// output Username is sam and price is 399


// array also we can pass
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400

// or directly we can pass
console.log(returnSecondValue([200,400,100,600])) // 400
