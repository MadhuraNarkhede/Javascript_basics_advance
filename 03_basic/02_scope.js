// . Global Scope
// A global variable is declared outside of any function or block.
// It's available everywhere in your code, even inside functions.
// Example:


let x = 10; // global variable

function myFunc() {
    console.log(x); // can access x because it's global
}

myFunc(); // prints 10
// 2. Block Scope
// A block-scoped variable is declared inside a block (like if or for), and it can only be used inside that block.
// You use let or const to create block-scoped variables.
// Example:

if (true) {
    let y = 20; // block-scoped variable
    console.log(y); // works here
}

//console.log(y); // Error: y is not defined outside the block

//var keyboard doesnot allow the prorperty of scope , thus we donot use it and mainly use variables as let and const.
//mailnt {} declares the scope of particular function and other conditional statemnt , n=but it is not applicable for objects and arrays.

//Scope is nested loop (function or conditional statement)
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//gives error

     two()

}

 one()

 //Thus child function can access the variable of parent function , but parent function cannot access the variable of child function .
 //And variable caanot be accessed by outside the function also.
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);//gives error
}

// console.log(username);gives error

//Thus child conditional staemen can access the variable of parent conditional , but parent conditional cannot access the variable of child condiional.
 //And variable caanot be accessed by outside the condiional statement also .
 
 //Running of function according to its intialization.

 console.log(addone(5));//Function called before intializatiom , thus no error according to its syntax.

 function addone(num)
 {
    return num +1//6
 }

//  console.log(addtwo(5))//give error
 const addtwo = function (num)//function declared as they are stored in a variable , thus it should always be called after its intialization , other wise it will give error.
 {
    return num +2 
 }

 console.log(addtwo(5))//7;
 
