const name = "Madhura";
const ropecount = 50;
console.log( name + ropecount + "Value");
//Wrong way of concatenation of string

// Correct way :-
console.log(`Hello my name is ${name} , and my repocount is ${ropecount}`);

// we can also declare string by " new " variable which allows compiler to assign space to that string variable.

const lastname = new String('Narkhede');
console.log(lastname);

console.log(lastname[0]);//N ( String are mainly stored as key value pair.)
console.log(lastname.__proto__);//{}





const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);//to get the length of the string
// console.log(gameName.toUpperCase());// to convert all character to upper string.
console.log(gameName.charAt(2));// to find the character at index 2.
console.log(gameName.indexOf('t'));//to find the index of character t.

const newString = gameName.substring(0, 4)//to convert to sunstring (substring(start,end))
console.log(newString);

const anotherString = gameName.slice(-8, 4)//to start from opposite
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//to erase all space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//to replace a particolar thing to other (replace(search , replace))

console.log(url.includes('sundar'))//to check whether it is present it in string

console.log(gameName.split('-'));// to split the string in array in the form of a particuler separater(split(separator))

const string1 = "Madhura aLahu aNarkhede" ;
console.log(string1.split(' a'));
