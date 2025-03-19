 //Object declared as singleton
 const tinderuse = new Object //singleton object
//  const tinderuse = {}//sobject made using literal nt singleton.

const symbol = Symbol();
tinderuse.id = "123";
tinderuse.name = "Madhura "
tinderuse.email = "madhura@yahoo.com"
tinderuse[symbol]="123";

console.log(tinderuse)

//Declare various object inside the object .
const complexObj = {
    id : 123,
    fullname : {
        username :{
            first_name : "Madhura",
            last_name : "Narkhede",
        }
    }
};
console.log(complexObj);
console.log(complexObj.fullname.username)
console.log(complexObj.fullname.username.first_name)
console.log(complexObj.fullname)//Thus we can access the elemnets in this way.

// to combine more than two object in one.
const obj1 = { 1 :1,2:2};
const obj2 = {3:3,4:4};
const obj3 = Object.assign( {},obj1 , obj2);//it mainly merge two objects into one and make every element of merged objects as individual to appear as a element of new object.
//here mainly all the elements of obj2 is added in obj1 . thus , obj3 === obj1.
console.log(obj3);

const obj4 = {...obj1 , ...obj2};// Two object are joined with the help of spread operator.
console.log(obj4);

//Object are stored as elements in a array.
const array = [ { id : 1 , email : "h@gmail.com"},{id : 2,email :"r@gmail.com"}];
console.log(array[1].id);//Thus elemets are mainly accessed in this way .

// VArious methods of object .
console.log(Object.keys(tinderuse));//THus Object.keys(object_name ) prints all the keys of object in the form of array.
console.log(Object.values(tinderuse));//THus Object.keys(object_name ) prints all the values of object in the form of array.
console.log(Object.entries(tinderuse));//THus Object.keys(object_name ) prints all the keys and values of object in the form of array.
//output :-
// [ 'id', 'name', 'email' ]
// [ '123', 'Madhura ', 'madhura@yahoo.com' ]
// [
//   [ 'id', '123' ],
//   [ 'name', 'Madhura ' ],
//   [ 'email', 'madhura@yahoo.com' ]
// ]
console.log(tinderuse.hasOwnProperty("id"));//maily tells the mention property is present or not in object.


//D sturcture of Array
// Object destructuring in JavaScript is a way to quickly extract values from an object and store them in variables. Instead of accessing properties one by one using object.propertyName, you can use {} to pick multiple properties at once.
const course = {
    course_name : "Javascript",
    Fees :  999,
    Course_insturctor : "Chai aur code",
};

console.log(course.Course_insturctor);

//Another way of calling values of keys from object in the D stucture format.
const {Course_insturctor }= course;
console.log(Course_insturctor);//here we destructue the object , thus the value of key can be accessed without "." operator and cbject name. 

const {Course_insturctor : instructor }= course;//here we have done destructure of object and other short name have been given to that long key , thus it is easier to call that key next time.
console.log(instructor);

//JSOn // backened infomation data is mainly in the form of JSON file
//here the keys are also mentioned in inverted commas to represent them as string , along with that values of any data type string , num etc.'

//It is also sometimes store in the form of array as below :-
// [{

// }

// {

// }]



