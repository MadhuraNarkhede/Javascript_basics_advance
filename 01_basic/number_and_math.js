const score = 400 ;
console.log(score);

const balance = new Number(100);//define using "new"variable and object Number.
console.log(balance);

console.log(balance.toString())//to convert a number to string data type.
console.log(balance.toString().length)// to use the propertities of various string method s for number using this syntax 
// while
// after converting the number to string this syntax will not Worker.
console.log(balance.length)//error
console.log(balance.toFixed(3))// to fix the total jumber after any decimal.

const othernumber = 23.789
console.log(othernumber.toPrecision(3));//mainly precise the value as how much level according to value allocated.

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));//convert a particular number in the indian standard system (comma allocation in number according to India)
console.log(hundreds.toExponential(2));

// Javascript also gives various types of numbers as follow :-
//This are mainly default of each cas
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

//*************************************************************************************
// Math/

console.log(Math.abs(-4));//to convert negative number to positive but not vice versa. 
console.log(Math.round(278.895));//to round of the decimal values ot regular number.

const num1 = 4.5;
console.log(Math.ceil(num1));// to round of the decimal number to its highest nearer number.
console.log(Math.floor(num1));// to round of the value to its lowest nearer number. log

console.log(Math.pow(2,1));//to find the power of particular number pow(Number , power)
console.log(Math.min(3,5,7,9,2,4,1,6,));//minimum value in array
console.log(Math.max(9,7,6,5,4,1,3));//maximum value in array
console.log(Math.random())//it gives a random number betweem 0 to 1 and also them.
console.log((Math.random() * 10)+1);

//to get the value of particular range using random().
const min = 20;
const max = 30;
console.log((Math.floor(Math.random() * (max - min +1) ))+min);//(max - min) to get the values on that range and (+1) to avoid getting 0 amd (+min) to get the perfect number in that range. 

