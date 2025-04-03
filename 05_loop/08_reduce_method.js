//Reduce method
//reduce() is used to combine all elements of an array into a single value (like sum, max, count, or an object) by applying a function step by step. 🚀

const Number = [1,2,3];

//  const myNums = Number.reduce(
//     function(acc, currval)
//     {
//         console.log(`acc : ${acc} and currval : ${currval}`);
//         return acc+currval;
//     },3
//  ); // Normal Function

const myNums = Number.reduce( (acc,curr) => acc+curr ,0);//Arrow Function   
 console.log(myNums);
 
 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
