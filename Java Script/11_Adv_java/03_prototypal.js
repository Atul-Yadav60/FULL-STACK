// Prototypal Inheritance in js
// learn it Again

function Person(name){
    this.name = name
}

Person.prototype.greet  = function(){
    console.log(`Hello My name is ${this.name}`)
}

let atul = new Person("Atul")
atul.greet();

// THIS AND binding context
const person = {
    name : "Atul",
    greeet(){
        console.log(`Hi I am ${this.name}`);
    },
};

person.greeet();

const greetFunction = person.greet;
