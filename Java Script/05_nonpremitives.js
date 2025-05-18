/*

*/

let obj = {
     firstname : "Atul" , 
     isLoggedin: true,
     "Last Name": "Yadav",
    };
    console.log(obj);
    
const obj1 = {
     firstname : "Atul" , 
     isLoggedin: true,

    };
 // injecting values
 obj1.lastname="Yadav"
    
    
    console.log(obj1)
    
    console.log(typeof obj1)
    console.log(obj1.lastname)
    // accesing name with space
    console.log(obj["Last Name"])

    let today = new Date()
    console.log(today.getDate())

// Array : note here in array you can also hhave true values
// first value cant we true or false
let heroes = ["A","B","C",true,false]
console.log(heroes)

// Type Conversion
console.log("1"+1);// converted into string implicitly
// dont relay on implicit conversion