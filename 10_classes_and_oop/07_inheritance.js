 class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
 }

 class Teacher extends User{
    constructor(username, email, password){  // here overwriting username
       super(username) // here by writing super keyword it will refer (konsi class extend kar 
       // raha tha so it User) so iska andar jata hu phir constructor ka andar jata hu. then automatically this.usename set kar dunga
       // aur then here super(username) we can access username.
       this.email = email
       this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
 }

 const chai = new Teacher("sarvagya","sarvagya@fb.com","123")
 chai.addCourse() // A new course was added by sarvagya

 const masalaChai = new User("masalaChai")
 // masalaChai.addCourse() // error masalaChai is not a function
 masalaChai.logMe() // USERNAME is masalaChai

 // dono alag alag classes sa ban ka aya ha .... is they are equal
 console.log(chai === masalaChai); // false

 // to check that uski ka instance sa bani ha kya 
 console.log(chai instanceof Teacher); // true
 console.log(chai instanceof User); // true