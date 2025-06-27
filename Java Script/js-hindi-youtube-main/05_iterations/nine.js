
// REDUCE()   


// acc:: acumulator
// curr_val:: current value

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curr_val) {
//     console.log(`acc: ${acc} and currval: ${curr_val}`);
//     return acc + curr_val
// }, 0)  // 0 is intial accumulator value

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


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