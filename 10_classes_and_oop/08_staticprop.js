class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    //createId(){  
       // modifying code by writing static
     static createId(){ // by writing static keyword we are doing that we are not giving access to everyone. 
        return `123`
    }
}

const sarvagya = new User("jainsir")
// console.log(sarvagya.createId()) // 123
// after modifying code
// console.log(sarvagya.createId()) // error

class Teacher extends User{
    constructor(username, email){
       super(username)
       this.email = email
    }
}

const iphone = new Teacher("iphone","i@phne.com")
iphone.logMe(); // Username: iphone

console.log(iphone.createId()); // error