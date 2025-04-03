// for of loop 

// ["", "", ""]
// [{}, {}, {}]

// loop on array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

//loop on string
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// It is same as that of object , its data type is object , it doesnot store any duplicate value and only store unique value and it also keeps in mind the order of insertion of keys.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {// destrucutre of key and value of map 
    // console.log(key, ':-', value);
}

const myObject = {// for of loop doesnot iterate on object.
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }