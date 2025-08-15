// filter , Map , reduce

const coding = ["js","ruby","java","python","cpp"]

// storing in variable
const values = coding.forEach( (item) => {
   console.log(item);
})

console.log(values); // undefined
/*
js
ruby
java
python
cpp
undefined
*/

const values2 = coding.forEach( (item) => {
  // console.log(item);
  return item
})
console.log(values2); // undefined
// NOTE:-  forEach loop does not return anything. 


// filter operation...
// filter also take callback function. and  after that we have to give condition.
// filter return values.
const myNums = [1,2,3,4,5,6,7,8,9,10]

 const newNums = myNums.filter( (num) => num > 4)
 console.log(newNums); //  [ 5, 6, 7, 8, 9, 10 ]


 const myNums2 = [1,2,3,4,5,6,7,8,9,10]
 const newNums2 = myNums2.filter( (num) => {
    num > 4
})
 console.log(newNums2); // []

 // we have study that in parentesis so it is like implict return and
 // when we put curly bracket so scope is started so write manually return keyword 

  const myNums3 = [1,2,3,4,5,6,7,8,9,10]
  const newNums3 = myNums3.filter( (num) => {
     return num > 4
})
 console.log(newNums3); // [ 5, 6, 7, 8, 9, 10 ]


// in for-Each we are doing same thing
const myNums4 = [1,2,3,4,5,6,7,8,9,10]
const  newNums4 =  []
 myNums4.forEach( (num) => {
      if(num > 4){
         newNums4.push(num)
      }
 })
 console.log(newNums4); // [ 5, 6, 7, 8, 9, 10 ]

// Try problem...suppose we take data from database 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */

const userBooks2 =  books.filter((nk) => nk.publish >= 2000 ) // here no scope is open so no write to return... 
console.log(userBooks2);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/