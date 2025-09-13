// through Object we are using setter and getter
// Apni given value ku koi directly  inn value ka access  na kar la so we use setter and getter
const User ={
   _email: 's@sj.com',
   _password: "abc",

   get email(){
       return this._email.toUpperCase()
   },

   set email(value){
        this._email = value
   }
}

const tea = Object.create(User)
console.log(tea.email); // S@SJ.COM