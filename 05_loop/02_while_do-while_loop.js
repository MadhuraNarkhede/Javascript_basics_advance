//While loop
//same as for loop , jut we intialization and upgradation of variabke in different as that of for loop.
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 1

//do while loop 
//Here first the loop will be execyted and then the condition will bw checked , thus all the code will be execued compulsary for onr time .
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);//Here the loop will be completed without any complication.

 score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);//Here the code will run for one time and then will be terminated as the condition is not matching.