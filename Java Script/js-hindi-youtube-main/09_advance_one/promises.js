// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.







// my code

// Promises is an object. 
const promiseOne =  new  Promise( function(resolve,reject) {
    // do an asyn task like
    // DB calls ,  cryptographic cALLS
    setTimeout(function(){
        console.log('AAsync task is completed');
        resolve(); // linking promise to resolve

    },1000)
}) 

// now consuming promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

// Note: Promise ko Variable me store kerna jarurui nahi hai

new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 is resolved or consumed")
})


// third Promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Atul" , email:"atul@example.com"}) // resolve me kuch bhi pass ker sakte hai per jayada ter obj passs kerte hai

    },1000)

})

promiseThree.then(function(user){
    // .then ke ander sare kaam honge
    //  taking data from promise three
    console.log(user)

})


// Promise four

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"atul" , password:"123"})
        }
        else{
            reject('Error somthing went wrong')
        }
    },1000)

    
})


// catch used for eerror

const username = promiseFour.then((user)=>{
    console.log(user)
    return user.username // to get only userr name we use channing function

}).then((username)=>{
    // this is called chaining 
   console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected ")
    // note  finally always exexute

})



// Promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript" , password:"123"})
        }
        else{
            reject('js went wrong')
        }
    },1000)

})

// insted of  .then we useing somthig else

async function consumePromiseFive(){
  // asyn await directly error handel nahi kerta hai. wee use try catch finally block
  try{
    const response = await promiseFive;
  console.log(response);

  }catch(error){
    console.log(error)
  }finally{
    console.log("error handel ho ya na ho ye run ho ker hi rahe gaa")
  }
  
}

consumePromiseFive();


// Using Promises in API request


// async function getAllUsers() {
//     try{
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary"); //  note: fetch ek librarry hai jo directly fetch kerta hai api koo
//     const data = await response.json();
//     console.log(data);

//     }catch(error){
//         console.log("ERROR: ", error)
//     }


    
    
// }

//getAllUsers();

// now writing in .then formate

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
    // here we dont have to apply wet kyu ki first then ke baad hi second chalegaa

}).then((data)=>{
    console.log(data)

})
.catch((error)=>{
    console.log(error)
})



