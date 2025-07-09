// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);   // this is challange that  i want a method that can apply on all string in my code which can give me true lenth . means length after removing free space


// note: in js aray, strinng is also an obj and its proto is null

let myHeros = ["thor", "spiderman"] 
// arow function ke ander this keyward nahi work karti due to prototype.


// created an object 
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// cretaiing an object protypes that present in all objects .
// this is property add to top lable object . by which all can pass
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`); // this property is given to all 
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`); // this gaving property only to arrray
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // sharing properties
}

Teacher.__proto__ = User // teacher accessing user properties

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport accessing all proeprties of teacher 

let anotherUsername = "ChaiAurCode     "

// this is soloution for my challenege

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
