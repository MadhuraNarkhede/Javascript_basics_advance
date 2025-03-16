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
let date1 = new Date(2025 , 2 , 16, 3, 14);//Date(Year , Month (Satring from index 0), date , hour , miute)
console.log(date1.toString());

let date2 = new Date("2023-3-16")//YY-MM-DD
console.log(date2.toString());

let date3 = new Date("12-12-2023")//MM-DD-YY
console.log(date3.toString());