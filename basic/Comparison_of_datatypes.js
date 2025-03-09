console.log(2 == 2);  // true
console.log(2 >= 3);  // false
console.log(2 > 2);   // false
console.log(2 <= 2);  // true
console.log(22 < 1);  // false
console.log(2 != 2);  // false
//The above are normal comparison with no confusion as both operands datatypes are same.

//Comparison of diiferent dataypes
console.log("*************************");

console.log("2" == 2);
console.log("2" > 2);
console.log("2" >= 2);
//Here it convert datatypes string to number or Nan depending on the code.

//Comparison of Null and undefined
console.log('*****************************');
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
//Comparison operator convert null to 0 while equality check doesnot null convert to 0.
// null == 0 → false

// The == (loose equality) operator does not convert null to 0.
// Instead, null is only loosely equal to undefined, not to 0.
// null > 0 → false

// When comparing null with a number, JavaScript converts null to 0.
// So the comparison becomes 0 > 0, which is false.
// null >= 0 → true

// JavaScript again converts null to 0.
// The comparison becomes 0 >= 0, which is true.

console.log("******************************************");
console.log(undefined == 2);
console.log(undefined > 2);
console.log(undefined >= 2);

//Operator "===" :- It strictly checks the values such as compariosn values along with its datatypes.
console.log("*****************************************");
console.log("2" === 2);

