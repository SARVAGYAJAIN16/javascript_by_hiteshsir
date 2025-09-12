function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email,password){
//    SetUsername(username) // actually ya call he nahi hua.(sirf refrence gaya ha call nahi hua ha because kaam hona ka baad iska execution context remove hu gaya (tu ju bhi variables tha sab delete hu gaya so we want to solve this by holding the refrence)
//     SetUsername.call(username) // now techically it is hold the refrence with help of .call but then also it is not solved our problem(variable sab gayab hu ja raha ha)
     // . to solve this we are saying dont hold username in your 'this'(in setUsername)(because ya gayab hu jayega) so we will give our 'this'(createUser ka) 
  /* modify code    */     
     SetUsername.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai); // createUser { email: 'chai@fb.com', password: '123' } // here username is not call 

// modify code output 
// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }