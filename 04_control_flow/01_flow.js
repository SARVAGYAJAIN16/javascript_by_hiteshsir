// if - else statement

/* syntax..
if(condition){
   
}
*/

// comparsion opertor
/*
   <, > , <= , >= , == , != , === (check datatype)

*/
if(2 == "2"){  // number and string datatype
    console.log("executed"); // executed
}

if (2 === "2"){
    console.log("executed"); // nothing run
}


const score = 200
if(score> 100) {
    const power = "fly"
    console.log(`User power: ${power}`); // User power: fly
}
// console.log(`User power: ${power}`); // error because of scope..

 // Note : - inside if we use var then it can access no error

 // shorthand notation 
 const balance = 1000
 if(balance > 500) console.log("test"); // test


 const balance2 = 1000
 if(balance2 < 500){
    console.log("less than 500");
 }
 else if(balance2 < 750){
    console.log("less than 750")
 }
 else if(balance2 < 900){
    console.log("less than 900")
 }
 else {
    console.log("less than 1200") // less than 1200
 }


 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true
 if(userLoggedIn && debitCard && 2==3){
       console.log("Allow to buy course"); 
 }

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in "); //  User logged in 
}
