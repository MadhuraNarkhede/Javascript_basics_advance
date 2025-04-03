const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) // A normal finction is used.As it is the callback funcion thus no name is given to function.
//     console.log(val);
// } )

// coding.forEach( (item) => { /// A arrow function is used. As it is the callback funcion thus no name is given to function.
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//Here we have written the function outside the for each loop and mainlky we have given reference in for Each loop instead of caling that function. 

// coding.forEach( (item, index, arr)=>{ //Here we have discussed about all the other access to for each loop , we can give access to its items along with its index and full array.
//     console.log(item, index, arr);
// } )

const myCoding = [ //Object in Array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); // Here we have call the particular keys and values of object using for each.
} )