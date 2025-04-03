// A function in JavaScript is a reusable block of code that performs a specific task. It helps in writing clean and efficient code by avoiding repetition.
//syntax :- function function_name(){  fi=unction_defination}
function SayMyName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("u");
    console.log("r");
    console.log("A");
    
}

SayMyName//reference of the function.

SayMyName()//the syntax the call the function for its execution.

//Function for add two numbers 

function add(num1 , num2){
    let result = num1 + num2 //num1 and num2 are parameters
    return result//retrun keyword is use to return the value to store in a particular variable and after return statement no code is executable in function.
}

//consize way to write above function.
// function add(num1 , num2){
//     return num1 + num2
// }

const result = add(3,4)//3 and 4 are argument pass to above function .
console.log(result);

function loggIn(username){
    return ` ${username} just logged in ,`
}

console.log(loggIn("Madhura"))// Madhura just logged in ,

console.log(loggIn(" "))//just logged in ,

console.log(loggIn())//undefined just logged in ,

function loginUserMessage(username = "sam"){//default value as " sam " been passed.
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())//Sam justed logged in
// console.log(loginUserMessage("hitesh"))//Hitesh just logged in

function calculateCartPrice(val1, val2, ...num1){//"..." rest operator that unifies all the passed argument into a particular aaray.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){//passing objetc as the parameter and the argument.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]//Array passed as the parameter adn the argument/

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
