// Here learning is that properties ka through kaisa getter and setter define hota tha.
// old style we see in .... like this ..
// phela class nahi hoti thi tu function ma use karta tha.

function  User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {  // kisko overwrite karna ha so email ku // // defineProperty work like setter and getter
          get: function(){
            return this._email.toUpperCase()
          },
          set: function(value){
            this._email = value
          }

    }) 
   Object.defineProperty(this, 'password', {
          get: function(){
            return this._password.toUpperCase()
          },
          set: function(value){
            this._password = value
          }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email); // CHAI@CHAI.COM
