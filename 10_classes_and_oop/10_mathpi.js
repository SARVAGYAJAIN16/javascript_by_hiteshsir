// Interview que
/*
  is pi value which is 3.14 can you change to 3 or 4 , if yes so how ?
  is No ? (pi value can be change or not)
*/

// Object.getOwnPropertyDescriptor(Math)  // it give  full detail 

console.log(Math.PI); // 3.141592653589793

Math.PI = 5
console.log(Math.PI); // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // math ma kiski value chaiya so pi ki..
console.log(descripter);
/* Output 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//  we can change these value

const chai = {
    name: 'ginger chai',
    price:250,
    isAvailable: true,

    // modifing code
    orderChai: function(){
        console.log("chai nahi bani");
    }
}
console.log(chai); // { name: 'ginger chai', price: 250, isAvailable: true } 

console.log(Object.getOwnPropertyDescriptor(chai)); // undefined  // aap na kaha propertie ka descriptor du but ya tu object ha.
// properties tu name, price, isAvailable ha.

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/* OUTPUT 
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// In object you can define object properties also
Object.defineProperty(chai, 'name',{  // konsi properties ku descript karna ha so name.
   writable: false,
   enumerable: false
}) 
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/* OUTPUT 
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// we are using loop for accessing..
/*
for(let [key,value] of chai){
   console.log(`${key}: ${value}`); // error (chai is not iterable)
}
*/

// to solve error ... ya object ha tu iterable nahi hu raha ha.. bydefault itarable hota ka nahi ya alag baat ha.
// agar object ku iterate karna ha tu object ma hota ha entries(and un entries ku iterate kar sakta ha.)
for(let [key , value] of  Object.entries(chai)) {
   console.log(`${key}: ${value}`);
}
/* OUTPUT   here name: ginger chai is not come beacuse we have not commented object.defineproperty... if enumerable will be true so it will print
price: 250
isAvailable: true
*/

// modified code 
/* Output (code fat gaya )
price: 250
isAvailable: true
orderChai: function(){  // like this we dont want.
        console.log("chai nahi bani");
    }
*/
// So we use condition check for if-else.

for(let [key , value] of  Object.entries(chai)) {
    if(typeof value !== 'function') {
    console.log(`${key}: ${value}`);
    }
}
/* Output   (so here situation is handle)
  price: 250
 isAvailable: true
*/
