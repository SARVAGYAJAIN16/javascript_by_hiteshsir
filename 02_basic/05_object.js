// Object de-structure and JSON API  (part -3)

// de-structure of object and array both happen.
// now only de-structur of object

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sarvagya"
}
// course.courseInstructor

// extracting value suppose courseInstructor

 const {courseInstructor} = course
        // extracting

console.log(courseInstructor);    // sarvagya     

// now you see courseInstructor is big name but you want small(acc to you)
// so instructor we want instead of courseInstructor 
const  {courseInstructor : instructor} = course 
console.log(instructor); // sarvagya


/*
// in react (we are talking) we do like this
const navbar = ({company}) => {
            // de-structure
}
navbar(company = "sarvagya")
// In {} curly braces we are doing de-structure .....

*/

//****************** 
// Concept of API 
// To remember -> apna kaam dursa pa daal diya jaya uska api bol ta ha...like resturent

/*
 API is data (value) is come from database(backend) and how you write these value...
 in previous time value come in xml form that is complex but now value come in JSON format
 and Json is easy.
  
 Json look like object only {}

 {
    "name": "sarvagya",
    "coursenames": "js in hindi ",
    "price": "free"
}
 note: you obsereve object has name (like course) but here no name (nothing) so it is treated as JSON.
       and its key and value is in string. but number, booleans are not come in string form..   

->  this we see api in object form ..
  but it may have in form of  array format

   [
       {},
       {},
       {}
   ]

*/



