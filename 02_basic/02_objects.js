//objects are created using literlas and constructor(singleton).
//"Object.create" is mainly used to create object in the form of constructor as singleton.

//Object Literals :-
//Objects are mainly declared in key value pair , where key are the prorpertities usaully in the data type of string , while values consisits of any data type as 
//number , string ,,as well as array or another object in it.

const mysym = Symbol();//Use to define the symbol
const myObj = {
    name : "Madhura",
    age : 20 ,
    location : "Pune",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoggeddays : ["Monday", "Tuesday"],
    [mysym]:"mykey1",//Symbol value has been declared
    "fullname":"Madhura Lahu Narkhede",//key is mentioned as the string here.

};
console.log(myObj.name);//simple values of key is printed wu=ith the help if "." operator.
console.log(myObj["fullname"]);//values has been printed , whose key has been mentioned as string in object and using "[" "]" thus syntax.
console.log(myObj[mysym]);//Here , we have used " []" to print the value of symbol from object.

// to make changes  in the objects.
myObj.name="Narkhede";
console.log(myObj);

//Object.freeze(myObj);// frreze method doesnot allow any furhtur changes to be made in object.
myObj.name="Swamini";
console.log(myObj);


//To define function in javascript.
myObj.greeting = function()//Thus , a function has been declared here as a greeting 
{
     console.log("Hello JS User");
};

myObj.greeting2 = function()//A function has been declared ,along with we have also use data interpolation to get the value of name from myObj using this.name("this " keyword is used as it is present in same object.)
{
     console.log(`Hello JS User , ${this.name}`);
};

console.log(myObj);
console.log(myObj.greeting());
console.log(myObj.greeting2());
//output
// {
//     name: 'Swamini',
//     age: 20,
//     location: 'Pune',
//     email: 'abc@gmail.com',
//     isLoggedIn: false,
//     lastLoggeddays: [ 'Monday', 'Tuesday' ],
//     fullname: 'Madhura Lahu Narkhede',
//     greeting: [Function (anonymous)],
//     greeting2: [Function (anonymous)],
//     [Symbol()]: 'mykey1'
//   }
//   Hello JS User
//   undefined
//   Hello JS User , Swamini
//   undefined


