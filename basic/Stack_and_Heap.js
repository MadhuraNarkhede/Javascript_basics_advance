// Two types of memory :- 
// Stack 
// - Mainly used to store primitive data types like number , String etc.
// "Call by value " method is followed

// Ex:-

let name1 = "Madhura";
let name2 = name1;
 name2 = "Narkhede";
console.log(name1);//Madhura
console.log(name2);//Narkhede

//Thus here a copy of name1 value is given to name2 , instead of its original memory location and thus no changes is done of thier is any changes in name 1 variable.

// Heap :-
// Mainly used by non primitive data type.]
// Used Call by reference method .Call

// Ex :-

let myObj1={
    name: "Madhura",
    age : 20 ,
};

let myObj2=myObj1;

myObj2.name="Narkhede";
console.log(myObj1.name);//Narkhede
console.log(myObj2.name);//Narkhede
//Thus , here the original memory address is shared to myObj2 and the changes in it may lead to changes in myObj1.