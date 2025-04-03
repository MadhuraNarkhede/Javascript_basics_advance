// for

// for (let index = 0; index < array.length; index++) { Basic Syntax
//     const element = array[index];
    
// }
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {   // break statement allows us to break the loop and completely come outside from that particular loop , thus no furthur code is executed after the break statement.
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {  //continue statement allows us to skip the code after its declaration for one time but at the second time all the cod execution wil continue.
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}