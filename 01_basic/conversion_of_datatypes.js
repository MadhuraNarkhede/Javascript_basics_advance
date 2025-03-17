// Number to Number
let score1 = 33;
let value_of_score1 = Number(score1);
console.log(typeof score1);        // number
console.log(typeof value_of_score1); // number
console.log(value_of_score1);      // 33

// String to Number
let score2 = "33";
let value_of_score2 = Number(score2);
console.log(typeof score2);        // string
console.log(typeof value_of_score2); // number
console.log(value_of_score2);      // 33

// Null to Number
let score3 = null;
let value_of_score3 = Number(score3);
console.log(typeof score3);        // object (typeof null is a known JS quirk)
console.log(typeof value_of_score3); // number
console.log(value_of_score3);      // 0

// Undefined to Number
let score4;
let value_of_score4 = Number(score4);
console.log(typeof score4);        // undefined
console.log(typeof value_of_score4); // number
console.log(value_of_score4);      // NaN (Not a Number)

// Mix characters to Number
let score5 = "33abc";
let value_of_score5 = Number(score5);
console.log(typeof score5);        // string
console.log(typeof value_of_score5); // number
console.log(value_of_score5);      // NaN (Not a Number)

// Boolean to number
let score6 = true;
let value_of_score6 = Number(score6);
console.log(typeof score6);        // string
console.log(typeof value_of_score6); // number
console.log(value_of_score6);      // NaN (Not a Number)

//Boolean()- to convert to boolean
//Number()= to convert to number
//String()= to cinvert to string


//Boolean Conversion
let LoggedIn1 = 1;
let beLoggedIn1 = Boolean(LoggedIn1)
console.log(beLoggedIn1);//true


let LoggedIn2 = "1";
let beLoggedIn2= Boolean(LoggedIn2)
console.log(beLoggedIn2);//true

let LoggedIn3 = "";
let beLoggedIn3 = Boolean(LoggedIn3)
console.log(beLoggedIn3);//false

let LoggedIn4 = 0;
let beLoggedIn4 = Boolean(LoggedIn4)
console.log(beLoggedIn4);//false

//*******************************Operations******************************//
// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion