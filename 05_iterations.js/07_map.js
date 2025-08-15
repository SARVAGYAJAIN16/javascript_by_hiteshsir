// Map method

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

 const newNums = myNumbers.map( (num) => num + 10) // add 10 in all
 console.log(newNums);
 /*
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/  

// chaining 

const  newNums2 = myNumbers
       .map((num) => num * 10) // (num * 10 ) + 1 trying to do..(10 will store in num and then in num we do + 1)
       .map((num) => num + 1)
console.log(newNums2);       
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/ 

const  newNums3 = myNumbers
       .map((num) => num * 10)
       .map((num) => num + 1)
       .filter((num) => num >= 40)
console.log(newNums3);    
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/  
