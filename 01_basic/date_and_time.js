// let myDate = new Date();
// console.log(myDate);// to print the date

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());   
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

//output
// Sun Mar 16 2025 12:18:50 GMT+0000 (Coordinated Universal Time)
// Sun Mar 16 2025
// 2025-03-16T12:18:50.421Z
// 2025-03-16T12:18:50.421Z
// 3/16/2025
// 3/16/2025, 12:18:50 PM
// 12:18:50 PM

//TO declare the date 
let date1 = new Date(2025 , 2 , 16, 3, 14);//Date(Year , Month (Satring from index 0), date , hour , minute)
console.log(date1.toString());

let date2 = new Date("2023-3-16")//YY-MM-DD
console.log(date2.toString());

let date3 = new Date("12-12-2023")//MM-DD-YY
console.log(date3.toString());

//To get the millisecond of the date.

let time = Date.now();
console.log(time)
//Date.now() returns the number of milliseconds elapsed since January 1, 1970 (the Unix epoch).
// This value is logged to the console.

// To get the time(millisecond) from the Date 
console.log(date3.getTime());

//To convert millisecond to second

console.log(Math.floor((date3.getTime())/1000));


//Data type of date is object .
 console.log(typeof(date3));//object

 // TO get the specific month , day or other information fro that date 
 console.log(date3.getDate())
 console.log(date3.getDay());
 console.log(date3.getFullYear());
 //and many more

 //To geth the more specific value.
 console.log(date3.toLocaleString('default', { weekday : "long"}));//tuesday //Give the weekday in long format
 

