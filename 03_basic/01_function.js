// Functions (part-1)

function sayMyName() {
console.log("j");
console.log("a");
console.log("i");
console.log("n");
}

sayMyName();
/*  output ->
j
a
i
n
*/

// function of add two number

function addTwoNumber(number1, number2){
    console.log(number1 + number2)
}

addTwoNumber(3,4) // 7
//addTwoNumber(3,"4") // 34

//addTwoNumber(3,"a") // 3a

// storing function in a variable

const result = addTwoNumber(3,5) // 8
console.log("Result: ", result); // undefined
// but why result value not come here... so let see


function addThreeNumber(number1,number2,number3){

    return number1 + number2 + number3
    // after return nothing will work (remember)
}
// when you will return in function then only you will store in variable

const result2 = addThreeNumber(1,2,3)
console.log("Result: ", result2); //  Result:  6


// back tick we use so it string interpolation
function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("Please enter a username");
        // return  // when it see return then  next line code will not work
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sarvagya")) // sarvagya just logged in

// before writing code of 'if'
// console.log(loginUserMessage()) //  undefined just logged in

// after writing code of 'if'
console.log(loginUserMessage());
// output Please enter a username
//        undefined just logged in


/*
   "" -> empty string is a false value
  
     undefined ->  it is false value

    !  -> use for doing if true so false and vice versa..

*/


/* note:-

   if (username === undefined) 
    // or (both are equvailent)
  if (!username) // username undefined ha tu uska ulta kar du

*/


// default value we have to give

// function loginUserMessage(username= "sam")
   // here we are not passing anything in function
