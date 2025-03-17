// Primitive data tupes ( Call by Value) :-
// String , Number , Boolean , BigInt , Symbol , null , undefined


// ***** Jacascript is dynamically type language.

// Decalaration of Symbol:-
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id)
console.log(anotherid)
console.log(id===anotherid)
// Thus as id and anotherid has same value as symbol ('123'), but still they are not equal.

// Big Int :-
const Bignumber = 12345678998765431n
console.log(typeof(Bignumber))

// Non- primitive data types(Call by reference):-
// Array , Objects and Functions .Array

// Array :-

const fruit=["Apple","Banana","Drange"];

// Object :- 

// It is mainly declared in curly braces in key value format , where key is mainly same as variable and value is of any primitive data typeof.
// Its value can be fetched by mainly "." Symbol. 
// Ex :-

let myObj={
    name: "Madhura",
    age : 20 ,
};

console.log(myObj.name);

// Function :-

let myFunction = function() {
    console.log("Hello World");
}

// data type of non primitive data type :-
console.log(typeof(fruit))//object
console.log(typeof(myObj))//object
console.log(typeof(myFunction))//object Function//Function
