// Prototypes
let computer = {cpu: 12}
let lenovo = {screen :"HD",
    __proto__: computer  // now lenovo have properties of computer
}
let tomhardware = {};

console.log(`lenovo` , lenovo.__proto__);

// some example car design
let genericcar = {tyre : 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla,genericcar) // this is mmuch better then __proto__
console.log(`tesla` ,Object.getPrototypeOf(tesla))

// constructor Function 

function Person(name,age){
   this.name = name
   this.age = age

}

function Car (make , model){
    this.make = make
    this.model  = model
}

let myCar = new Car("Toyota" , "Honda")

console.log(myCar)

