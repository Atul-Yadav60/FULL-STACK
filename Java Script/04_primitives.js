//we are handlinfg of data 01,02,03,also related to it
// premative data types
/*
string
Boolean
null
undefined
symbol
 */

// non premetive or object or functional
/*
arrays
functions
objects
 */

//01 number
let balance = 1230

let anotherbalance = new Number(120)

console.log(anotherbalance) 
console.log(anotherbalance.valueOf()) 
console.log(typeof(balance)) // return data type
console.log(typeof(anotherbalance)) // return data type object


//

let firstname = null 
console.log(firstname);
let lastname = undefined
console.log(lastname)

// String

let myString = "Hello "

let myString1 = 'Hola'
let bro = myString + "Amit "
console.log(bro)
let username = 'atul'

let gereetmessage = `Namaste ${username}` ; // string interpulation
console.log(gereetmessage)

let value = `VAlue is ${2*2+3}`
console.log(value)

let sm1 = Symbol("Atul") // symbole is always unique . it garrenty unuiquness iven if same
let sm2 = Symbol("Atul")

console.log(sm1==sm2) // false
console.log(sm1) 

 
