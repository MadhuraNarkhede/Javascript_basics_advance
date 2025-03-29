// //This keyword - It mainly refers to the current going context in object or function.
// const user = {
//     name : "Madhura",
//     price : 999,
//     welcomemessage: function()
//     {
//         return `${this.name},welcome to website.`;
        
//     }
    
// }

// console.log(user.welcomemessage());//gives the current context.
 
// // const user = {
// //     name : "Madhura",
// //     price : 999,
// //     welcomemessage: function()
// //     {
// //         console.log(`${this.name},welcome to website.`);
        
// //     }
    
// // }

// // console.log(user.welcomemessage());//Madhura,welcome to website.
// // undefined(because welcomemessage does not return any value thus while its execution we get only logged statment and undefined )

// //Biggest GLobal object in js is Windows.

// const user1 = {
//     name : "Madhura",
//     price : 999,
//     welcomemessage: function()
//     {
//         console.log(this);
        
//         return `${this.name},welcome to website.`;
    
        
//     }
// }
//     console.log(user1.welcomemessage())
//     user1.name = "Narkhede"
//     console.log(user1.welcomemessage())
// //When no current context is present int a particular scope then the compiler refers to a empty object.The current cintext is mainly defined using scopes.


// console.log(this);//{}

// // function chai()
// // { username = "Madhura",
// //     console.log(this);//not an empty fuctipn but gives information of other variables
// //     console.log(chai.username)//this syntax is only used for object s thus gives error;
    
// // }
// // chai();

// //Arrow Function
// //SYntax () => {function defination}

const chai = () => {
username = "Madhura";
console.log(this);//use same as that of normal function.//oit gives the empty object

}

chai()

// //"this " keyword is mainly not used in arrow function.

// const add = (num1 , num2) => {
//     return num1 +num2
// }//Normal arrow Function

// console.log(add(4,3));


// const add1 = (num1 , num2) => ( num1 +num2)//Implicit arrow Function(No return  statement is required )//&
// console.log(add1(4,3));

// // const add2 = (num1 , num2) => ( {username : "Madhura"})//() Mainly used to defined object and if not () then it will treated as block of function. 
// // console.log(add2(4,3));

//Arrow function with array

const myArray = [1,2,3]
myArray.forEach( function () {})
myArray.forEach(  () => (n1 + n2))
myArray.forEach(  () =>  {}) 

// Differences Between Arrow Functions and Normal Functions in JavaScript
// Syntax:

// Arrow functions have a shorter and more concise syntax.

// Normal functions require the function keyword and curly braces.

// this Binding:

// Arrow functions inherit this from the surrounding scope (lexical this).

// Normal functions have their own this, which depends on how the function is called.

// Implicit Return:

// Arrow functions can return a value without using the return keyword (if written in a single line).

// Normal functions require an explicit return statement.

// arguments Object:

// Arrow functions do not have their own arguments object.

// Normal functions have an arguments object that contains all passed arguments.

// Constructor Usage (new Keyword):

// Arrow functions cannot be used as constructors.

// Normal functions can be used with new to create objects.

// Object Methods:

// Arrow functions should not be used for object methods because this will not refer to the object.

// Normal functions should be used for methods inside objects.

// Binding with .bind():

// Arrow functions do not require .bind(this), as they inherit this.

// Normal functions may require .bind(this) to maintain the correct context.

// Usage in Callbacks:

// Arrow functions are preferred for callbacks as they preserve this from the outer scope.

// Normal functions work too but may need explicit this handling.

// Performance Considerations:

// Arrow functions are optimized for short and simple functions.

// Normal functions may perform better in complex operations.

// 🚀 When to Use Arrow Functions?

// For short, simple functions.

// When this needs to be inherited from the surrounding scope (e.g., inside event handlers, callbacks).

// ✅ When to Use Normal Functions?

// When using methods inside objects.

// When needing arguments or new for object instantiation.

// When this behavior depends on how the function is call