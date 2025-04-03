//Map method allows us to make the new array with a modified value .

//It returns the value , unlike as the "for Each " mwthod that doesnot return the value.

const Number = [1,2,3,4,5,6,7,8,9,10];

// let myNums = Number.map( (num) => num+10);
// console.log(myNums);


//Chain of map and filter methods 

let myNums = Number.map( (num) => num*10)
               .map( (num) => num/2)
               .filter( (num) => num >= 25);

console.log(myNums);
//Thus we can get the element as we want by using map and filter method in chain.
