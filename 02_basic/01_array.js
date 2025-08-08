// Array
// js array are resizeable ******
// element differnt (type) ka bhi hu sakta ha

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]); //0

// another way
const myHeros = ["shaktiman", "naaraj"]

// another way
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]); // 2

// Array methods

// push method
myArr.push(6);
console.log(myArr) //[  0, 1, 2, 3, 4, 5, 6]

// pop method  (last value will pop)

myArr.pop()
console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

// unshift method () // It do that put element in the 0 index 
// less useful ***** because for large array is not optimize

myArr.unshift(9);
console.log(myArr) // [ 9, 0, 1, 2, 3, 4, 5]

// shift method (no parameter we give)
// it work like pop the element (which we added)

myArr.shift()
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// answer give in true or false (asking que in form of method)

console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(9)); // -1 (which means it is not there)

// useful operation we use most times
const newArr = myArr.join() // join do that it convert in string
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr) // string

//*********** interview *********
// slice  vs splice
// original array
console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) 

// slice
console.log(myn1) //  [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

// splice
const myn2 = myArr.splice(1,3)

console.log("C",myArr); // C [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]

// In "c" our array is get changed (splice portion is removed)


 