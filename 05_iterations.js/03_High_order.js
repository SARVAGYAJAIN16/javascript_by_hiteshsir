//  Topic: Higher order array

/* NOTE:-

// Inside array we put object
[{},{},{}]

// Inside array we put string
["","",""]

*/

// Array specific loops:- 
/*
 1 -> for of loop......

  Syntax:-
  for(const iterator of object){ // here in js object means kis chiz pa loop lagana ha
                                 // it does not mean that only for object loop will work

  }

  */
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
// output
/*
1
2
3
4
5
*/

const greeting = "Hello World!"
for(const greet of greeting){
    console.log(greet);
}
// output
/*
H
e
l
l
o
 
W
o
r
l
d
!
*/

// 2->  Maps (it have unique values) and it hold key value pair
// map is a object, in Js everything is object
  
const map = new Map()
  map.set('IN', "India")  // (key , value)
  map.set('USA', "United states of america")

  console.log(map);
// output -> Map(2) { 'IN' => 'India', 'USA' => 'United states of america' }

for(const key of map){
    console.log(key);
}
// output 
/*
[ 'IN', 'India' ]
[ 'USA', 'United states of america' ]
*/

// But we want different - different value we use square bracket (we can hold them differently)
// here destructure of array happen
for(const [key, value] of map){
    console.log(key, ':-', value)
}
/* output
IN :- India
USA :- United states of america
*/


// On object using  for-of loop
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for(const [key,value] of myObject){
    console.log(key, ':-', value);
}
// error  myObject is not iteratable


