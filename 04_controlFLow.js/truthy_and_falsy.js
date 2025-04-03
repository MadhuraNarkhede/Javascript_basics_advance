const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //Object.keys(emptyObj) will mainly returns the array all the keys values in the form of array.   
    console.log("Object is empty");
}

// //Some of the confusing statement to be run on console 
// false == 0 //true
// false == ""//true
// 0 == ""//true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// he Nullish Coalescing Operator (??) is used to provide a default value when a variable is null or undefined. It does not treat 0, false, or '' as missing values, unlike ||.

// Example:
// javascript
// Copy
// let value = 0;
// console.log(value ?? 10); // 0 (not 10)
// It’s great for handling optional data without overwriting valid falsy values. ✅



console.log(val1);

// Terniary Operator // It allows us to write conditional statement in one go , and in one line.

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")