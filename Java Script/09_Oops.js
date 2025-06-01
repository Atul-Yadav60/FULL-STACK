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
// Agar function name ka first letterer capital hai to use connstructor Boolenge

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

// Encapsulation

let carr = {
    make:"Toyota",
    model:"camry",
    year:2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    },
};
console.log(carr.start());

// Prototypre Chhain
function Animall(type){
    this.type = type
}

Animall.prototype.speak = function(){
    return `${this.type} Makes a sound`
}

Array.prototype.hitesh = function(){
    return `Custom Method ${this}`
}

let myArray = [1,2,3,4,5,6]
console.log(myArray.hitesh())


class Vehical {
    // Function inside the class called as methods
    constructor(make,model){
        this.make = make,
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
// Inheritance

class Caaar extends Vehical{
    // now it inherits all properties of vehical
    drive(){
        return `${this.make} : This is an Inheritance`
    }
}


let myCAr = new Caaar("Toyota" ,  "Corolla")
console.log(myCAr.start());
console.log(myCAr.drive());
// Polymorphism

// Abstraction



