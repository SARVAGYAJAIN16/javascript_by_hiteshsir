// Array (part - 2)

const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// trying to merge both array
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//output  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// here array ka andar array agya ha because it has taken (another) array as a data .
// thor(0 element), ironman(1 element), spiderman(2 element), whole array of dc  is( 3 element) 

//console.log(marvel_heros[3][1]); // flash

//  --->  concat method (return new array so do it in new array otherwise not work)
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// output [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//************************* 
// another easy way  with spread operator to seprate (...)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // in bracket we say (depth) chaiya but you can write Infinity 
console.log(real_another_array);
// output  [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


// when we do data scrapping so we use below thing many times
 console.log(Array.isArray("sarvagya")) // false
 console.log(Array.from("sarvagya")) //  [ 's', 'a', 'r', 'v', 'a', 'g', 'y', 'a']


 // intersting case for interview
console.log(Array.from({name: "sarvagya"})) // [] (empty array beacuse it cannot directly able to convert this --> name: "sarvagya" )
// we have to tell that keys ka array banao ya value ka array banao and agar ya nahi banapaega tu empty array dega


let score1 = 100
let score2 = 200
let score3 = 300
// .of -> return a new array from set of element

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

