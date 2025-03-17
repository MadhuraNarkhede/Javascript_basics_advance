//In Javascript Array is resizeable and can store values of multiple data types.
//Array values are mainly passed by call by reference I(any changes made in its called value , allows it to make changes in its original variable). 
const myArray = [1,2,3,4,5,6,7,8,9,10];

const myArray2 = new Array("Madhura ", "Lahu ", "Narkhede");
   
 console.log(myArray[2]);

console.log(myArray2[0]);

//Array Methiods

myArray.push("Madhura");//push the pass argument inside the array
console.log(myArray);

myArray.pop();// remove the last element of the array
console.log(myArray);

myArray.unshift(":");// add elements at the starting of array (not good because elements has to be shifted , thus time consumimg.)
console.log(myArray);

myArray.shift();// Remove elements from starting of the array
console.log(myArray);

console.log(myArray.includes(1));//check whether the elements is include or not.
console.log(myArray.indexOf(3));//check the psrticular element index.

const newArray = myArray.join();// convert array to string and bind elements woth a separator.
console.log(newArray);
console.log(myArray);
console.log(typeof(newArray));//string
console.log(typeof(myArray));//object

//slice and splice

//slice 
const myn1 = ["a","b","d","c","f"];
console.log("A",myn1);

console.log("B",myn1.slice(3,5));//mainly return the part of array with start and element before the end.

//splice
console.log("C",myn1);
console.log(myn1.splice(3,5));//Mainly returns the part of string and also includes last index , but remove all that elements from original array.
console.log("C",myn1);

//Output:-
// A [ 'a', 'b', 'd', 'c', 'f' ]
// B [ 'c', 'f' ]
// C [ 'a', 'b', 'd', 'c', 'f' ]
// [ 'c', 'f' ]
// C [ 'a', 'b', 'd' ]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//mainly allows to merge new array and gives whole new array as the output.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//spread operator(...) , spread the element of array as a single element.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//tells whether the pass argument is array or not.
console.log(Array.from("Hitesh"))//mkaes the pass argument into array .
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// converts various single elements to array.



