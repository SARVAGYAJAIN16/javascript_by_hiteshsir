// object (part-2)

// another way to write object...
// const tinderUser = new Object()      // it is singleton object
 const tinderUser = {}   // both are same only   // it in non singleton object

// console.log(tinderUser); // {} (empty object)

tinderUser.id = "123abc"
tinderUser.name =  "sarvagya"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'sarvagya', isLoggedIn: false }


const regularUser = {
    email: "sarvagya.com",
    // creating inner object (nesting of object)
    fullname: {
         userfullname:{
            firstname: "sarvagya",
            lastname: "jain"
         }
    }
}

console.log(regularUser.fullname.userfullname) // { firstname: 'sarvagya', lastname: 'jain' }

console.log(regularUser.fullname.userfullname.firstname) // sarvagya

// merging  different object

const  obj1 = {1: "a", 2:"b"}
const  obj2 = {3: "a", 4:"b"}

// same problem will come like array ... object ka andar object
const obj3 = {obj1, obj2} 
console.log(obj3);
// output -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// less we use this ....below

// assign (with the help of assign we can assign object)
const obj4 = Object.assign(obj1, obj2) // here obj1 is a target and obj2 is a source
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// *************best practice*****
// making empty object beacuse it have gurantee that {} acts as target and obj1,obj2... all will acts as a source.
// obj4 = Object.assign({}, (obj1, obj2))


        //*********************//
// we use spread opertor(...) more 90% time
// to remember spread opertor (we have a glass is broken by droping and its get spread)

const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Now when from database value come 
// suppose users is come from database ... so in form of array of object will come (below)

// array ka andar object
const users = [
        {
           id: 1,
           email: "s@gmail.com"
        },
        // different object
        {
          
        },
        {

        }
]

// accessing
users[1].email


console.log(tinderUser); // { id: '123abc', name: 'sarvagya', isLoggedIn: false }

//************
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// this above we put in array now we can use in loops and other thing.

console.log(Object.values(tinderUser)); // [ '123abc', 'sarvagya', false ]


// entries method (every key : value ku array ma bana diya jata ha) // less we use
console.log(Object.entries(tinderUser));
// output [ [ 'id', '123abc' ], [ 'name', 'sarvagya' ], [ 'isLoggedIn', false ] ]


//case : suppose in object you are using loops for finding value... sometimes it may happen that value doesnot exist.. so there is chances of crash

// so asking that you have that value and it return in true and false

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true ( is name ki property ha)

