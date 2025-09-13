// getter_&_setter..
/* NOTE:-
 getter & setter ... sometimes when someone ask about password so we return i will not tell 
 or like kuch properties ha class ki unka access sab ku nahi dena chata  hu .. or someone want so we want to do cutomize code.
 so in such cases getter and setter we use.

-> getter and setter bydefault har class ma hota he ha.
-> agar getter define kiya tu setter bhi karna hoga.
 */

class User{
    constructor(email, password){
        this.email = email;
        this.password = password  
    }
}

const sarvagya = new User("sar@jain.ai" , "123")
console.log(sarvagya.password); // 123

// ------------------------------------

/*
class User1{
    constructor(email, password){
        this.email = email;
        this.password = password  
    }

    get password(){ // koi password get karna chaya raha ha.
       return this.password.toUpperCase()
    }
    set password(value){  // setter ha tu koi value dalna tu padha ga he na.(so we have write value)
        this.password = value
    }
}

const sarvagya1 = new User1("sar@jain.ai" , "123")
console.log(sarvagya1.password);  // error (Maximum call stack size exceeded)
/*
 In actually value set karo but value set karta time constructor baar baar call hua ja raha..  
 setter ma aap na value share kar di and object aur constructor ma race hu rahi ha ki karna kya ha (confuse).

 yaha problem ya ha ki constructor bhi set kar raha ha aur setter bhi set kar raha ha. so race start hu jati ha dona ka bich and then it create problem
 so we get error   Maximum call stack size exceeded
*/

//---------------------------

// so how we set value here (error is coming)

class User2{
    constructor(email, password){
        this.email = email;
        this.password = password  
    }

    get password(){ //  yaha value get kar raha ha..
       return this._password.toUpperCase()
    }
    set password(value){  // yaha value set kar raha ha
        this._password = value.toUpperCase() // _password ek naya variable bana diya ha.// aur set ma bhi banana hoga otherwise get ma error ajayi gi.
    }
}
/*
so, now behind the scene constructor is not setting password but setting email
and setter is setting the password. so here password ku here totaaly overwrite kar diya ha.
*/

const sarvagya2 = new User2("sar@jain.ai" , "abc")
console.log(sarvagya2.password);  // ABC

//-------------------------

class User3{
    constructor(email, password){
        this.email = email;
        this.password = password  
    }

    get password(){
       return `${this._password}sarvagya`
    }
    set password(value){ 
        this._password = value 
    }
}
const sarvagya3 = new User3("sar@jain.ai" , "abc")
console.log(sarvagya3.password);
/*
 ju bhi apna password ha wo samana wala ku return kaisa hoga tu abcsarvagya ya return 
 hoga usha. jabki  apna password abc tha ... usha pata he nahi chalega..
*/

//--------------------

class User4{
    constructor(email, password){
        this.email = email;
        this.password = password  
    }
   // now making setter and getter for email
    get email(){
       return this._email.toUpperCase()
    }
    
    set email(value){  // kabhi bhi setter ku return nahi karta ha.
         this._email = value
    }

    get password(){
       return `${this._password}sarvagya`
    }
    set password(value){ 
        this._password = value 
    }
}
const sarvagya4 = new User4("sar@jain.ai" , "abc")
console.log(sarvagya4.email); // SAR@JAIN.AI