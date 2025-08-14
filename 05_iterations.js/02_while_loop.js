// While loops and do while loop

// syntax.....
/*
while (condition) {    
}
*/

let i = 0
while(i <= 5){
    console.log(`Value of index is ${i}`);
    i = i + 2
}
/*
Value of index is 0
Value of index is 2
Value of index is 4
*/

let myArr = ["flash", "batman", "superman"]
let arr = 0
while(arr < myArr.length){
    console.log(`Value is ${myArr[arr]}`);
    arr++;
}
/*
Value is flash
Value is batman
Value is superman
*/



// do while loop....
// syntax
/*
do{

} while(condition);
*/
let score =1 
do{
    console.log(`score is ${score}`);
    score++
}while( score <= 5);
/*
score is 1
score is 2
score is 3
score is 4
score is 5
*/
// In do while  condition is check afterwards..
let score1 = 11 
do{
    console.log(`score is ${score1}`);
    score++
}while( score1 <= 5);
// score is 11