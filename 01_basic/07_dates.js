// Dates

let myDate = new Date()
console.log(myDate); // 2025-08-06T11:32:39.914Z

// converting in string
console.log(myDate.toString()); // Wed Aug 06 2025 11:34:18 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Wed Aug 06 2025
console.log(myDate.toISOString());// 2025-08-06T11:37:36.494Z
console.log(myDate.toJSON());

// interview 
console.log(typeof myDate); // object

let myCreatedDate = new Date(2025,0,23) // month start from 0 in js
console.log(myCreatedDate.toDateString()); // Thu Jan 23 2025

console.log(myCreatedDate.toLocaleString()); // 1/23/2025, 12:00:00 AM

// Time Stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in ms 1754481053274

console.log(myCreatedDate.getTime()); // 1737590400000

// interview que that value come in ms but want in sec  so divide by 1000    *********
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate); // 2025-08-06T12:00:36.452Z
console.log(newDate.getMonth()); // 7
// so we get 7 because it start from 0 so we do that

console.log(newDate.getMonth() + 1); // 8

// most used method we use and like this we can cutomize it
newDate.toLocaleString('default',{
    weekday: "long",
})

