// ES6
// class is a keyword...

/*NOTE:-
 when constructor will call ?
 so, jab class sa ek object intilize hoga(means jab new keyword
 jab bhi kaam ma loga jabhi apna aap constructor call hu jata ha)
*/


class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    } 

    encryptPassword(){
       return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("sarvagya", "sarvagya@gmail.com","123")

console.log(chai.encryptPassword()); // 123abc
console.log(chai.changeUsername()); // SARVAGYA

// behind the scene

function User1(username, email, password){
     this.username = username;
     this.email = email;
     this.password = password
}

User1.prototype.encryptPassword =  function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername =  function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("sarvagyatea", "sarvagyatea@gmail.com","123")

console.log(tea.encryptPassword()); // 123abc
console.log(tea.changeUsername()); //  SARVAGYATEA