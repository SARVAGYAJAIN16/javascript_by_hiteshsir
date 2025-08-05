const name = "sarvagya"
const repoCount = 50
console.log(name + repoCount); // sarvagya50
console.log(name + repoCount + "Value");  //sarvagya50Value

// better modern  way it is string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another pro way to define string

const gameName = new String('Sarvagya')

// we know it store in key: value pair 
console.log(gameName[0]); // S

console.log(gameName.length); // 8
console.log(gameName.toUpperCase());  // SARVAGYA
// remember it has not change the originial string

console.log(gameName.charAt(2)); // r
console.log(gameName.indexOf('a')); // 1 

// substring
const newString = gameName.substring(0,4); // 4 value will not include
console.log(newString); // Sarv

// slice  // we can give negative value also start from end
const anotherString = gameName.slice(0,4);
console.log(anotherString); // Sarv

// trim and replace method
const newStringOne = "    sarvagya"
console.log(newStringOne); // some space will print then sarvagya
console.log(newStringOne.trim()); // no space sarvagya

// replace
const url = "https://sarvagya.com/sarvagya%20jain"

console.log(url.replace('%20', '-')) // (search, replace)
// output   https://sarvagya.com/sarvagya-jain


// include method (which asks that it is there or not)
console.log(url.includes('sarvagya')); // true

// split
const newGameName = new String('sarvagya-jain-123')
console.log(newGameName.split('-')); // in bracket we gave seperater 
// output -> [ 'sarvagya', 'jain', '123' ] converted in array