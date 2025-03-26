//Immediate invoked function expressions.(IIFE)
// It allows ua to execute our function very fastly and also doesnot cause any pollution to function due to global scope variables.
// Syntax = ( function defination (Normal or Arrow))();

(function chai ()//named IIFE
{
    console.log("DB Connected");
    
})();//Giving ";" is necessary to let compiler know that this is the end of the context of that function.


(  () =>
{
    console.log("DB Connected two");
    
})();//unnamed IIFE

// ( const  user = () =>
// (
//         console.log("DB Connected three")
        
//     ))();..Gives erro not used

//Parameter is passed as that of we passed in a normal function
(  (name) =>
    {
        console.log(`DB Connected two ${name}`)
        
     })('MAdhura');//output - DB Connected two MAdhura
    // 'MAdhura '- parameter
    // name - argument