// reduce
/*
  In reduce we get two values accumaltor and current value so we use 
  these in function and then value store in accumaltor
*/

const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);    
    return  acc + currval     // but acc does not know from where i will start..so we give 0
},0)

console.log(myTotal); // 6
/* output
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6   // 3+3 =6
*/

// In arrow function we are writing

const myNums2 = [2,4,6]
const myTotal2 = myNums2.reduce((acc,curr) => acc + curr, 0)
console.log(myTotal2); // 12

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]
// trying to add all prices 

const priceToPay = shoppingCart.reduce((acc, item) =>  acc + item.price , 0)
console.log(priceToPay); // 22996