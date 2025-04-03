// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     // return item;
// });

// console.log(values);//It always gives undefined output as , no values is returned for this variables.

// filter method //It mainly allows us to filter the array as we need using the call back function.
// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter(  (num) =>  num>4  );//Implicit function .. no retrun statement

// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNums.filter(  (num) => {
// // return num>4 ;
// // }  );//Explicit  function ..  return statement

// // console.log(newNums);

// const newNum = [];//A logic to do the filter operatin usinf "For Each loop".
// myNums.forEach( (num) => {
//     if(num>6)
//     {
//         newNum.push(num);
        
//     }
// });

// console.log(newNum);

//****************************************************************//
// //Others uses of "filter" method  */


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let newList = books.filter( (bk) => bk.genre === "History");
// console.log(newList);
//output :-
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

newList = books.filter( (bk) =>  bk.publish > 2000 && bk.genre == "Science")
console.log(newList);



//Basic difference between "For Each ", "Filter " and "Map " method.
// 🔹 forEach()
// ✅ Use it when you need to perform an action on each element but don’t need a new array.

// Executes a provided function once for each array element.

// Does not return anything (undefined).

// Used when you want to modify elements in place or perform side effects (like logging or updating variables).

// Example:
// javascript
// Copy
// Edit
// let arr = [1, 2, 3];

// arr.forEach(num => {
//   console.log(num * 2); // 2, 4, 6
// });
// ✅ When to use:

// Logging values

// Modifying elements in place

// Performing side effects (e.g., updating the DOM, API calls)

// 🔹 map()
// ✅ Use it when you need a new array with modified values.

// Creates a new array by applying a function to each element.

// Returns a new array of the same length.

// Example:
// javascript
// Copy
// Edit
// let numbers = [1, 2, 3];

// let doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6]
// ✅ When to use:

// When you want to transform each element and store the result

// When you need a new array based on the original

// 🔹 filter()
// ✅ Use it when you need to extract certain elements from an array.

// Returns a new array containing elements that pass a condition.

// Does not modify the original array.

// Example:
// javascript
// Copy
// Edit
// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4]
// ✅ When to use:

// When you need to remove elements that don’t meet a condition

// When you want a subset of an array





