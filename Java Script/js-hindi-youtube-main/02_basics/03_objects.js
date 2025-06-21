// singleton


// Object.create   // constructor method to create object

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])  //only option for this
 console.log( JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser) // iske baad changes nahi hongey
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this used to refer same object.  jaise he this. lekhanegey obj ke ander jitni properties hongi aa jaynehii
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());