// for-each loop

const coding = ["js","ruby","java","python","cpp"]

/* Note:-
  forEach() it take callback function (it is very smart it can take all value )

*/
// coding.forEach( function name() {parameter}) // this how we write function. 
// but  it is said to be callback function uska koi name nahi hota ha so remove 'name'.

coding.forEach( function(item){
      console.log(item);
} )
/* Output
js
ruby
java
python
cpp
*/

// using function with arrow function

/*
coding.forEach( () => {} ) // that we write with arrow function
*/

coding.forEach( (item) => {
    console.log(item);
})
/* output 
js
ruby
java
python
cpp
*/


function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
/* output
js
ruby
java
python
cpp
*/

// it can have different parameter also
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/* output
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


// In database it is very useful..
// [{},{},{}]  array ka andar object
// forEach is use here .....

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    
]

myCoding.forEach((item) => { 
    // we have access of object(in object it have two properties)
    // in every iterartion ma object ku item he bola ha.
   console.log(item.languageName);
})
/* output
javascript
java
python
*/
