// for - in loop 

// we have seen in previous chapter that our for-of loop does not work in object.so 
// we use for-in loop 
/*
syntax :-
 for(const key in object){

 }
 */
const myObject = {
    js:'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift:"swift by apple"
}
/*
for(const key in myObject){
    console.log(key);
}
*/   
/* output 
js
cpp
rb
swift
*/

for(const key in myObject){
    console.log(myObject[key]);
}
/* output:-
javascript
C++
ruby
swift by apple
*/

for (const key2 in myObject){
    console.log(`${key2} shortcut is for ${myObject[key2]}`);
}
/* Output:-
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

// for-in loop in Array
const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(key);
}
/* Output (in array key value is come, yes array also have keys 
      start from 0 and bydefault in number only)
0
1
2
3
4
*/

for(const key2 in programming){
    console.log(programming[key2]);
}
/*
js
rb
py
java
cpp
*/

// NOTE:-  Map is not iterable (which is not iterable so we cannot use loop)
const map = new Map()
  map.set('IN', "India")  // (key , value)
  map.set('USA', "United states of america")

  for(const key in map){
    console.log(key);
  }
  // run but no output... because Map is not iterable

  // NOTE:-
  /*
     for-of loop we use in array
     for-in loop we use in objects

  */
