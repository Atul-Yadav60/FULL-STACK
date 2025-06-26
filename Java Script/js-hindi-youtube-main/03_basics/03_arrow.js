const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // this keyword is used to access the current object or contect. here this is used to access the username of the current object.
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// Note:: this only used for object not for function.


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// ARROW FUNCTION

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // explicit return

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"}) // object return in paranthesis is must.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()