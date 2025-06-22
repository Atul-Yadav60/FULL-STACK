// const tinderUser = new Object()  ->one way to create object

const tinderUser = {} // another way to create object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    // nested object
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
 

// combine two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  -> it give obj inside obj
// const obj3 = Object.assign({}, obj1, obj2, obj4) // it also just give obj combineed as array

const obj3 = {...obj1, ...obj2} // it just gave combination of two objs
// console.log(obj3);

// This is Array of Objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  -> it gives array of keys
// console.log(Object.values(tinderUser));  -> it gives array of values
// console.log(Object.entries(tinderUser));  -> it gives array of entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  -> it gives boolean value // use to check if the key is present in the object


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // it gives value of courseInstructor to instructor

// console.log(courseInstructor);
console.log(instructor);
  

// JSON -> JavaScript Object Notation . jason is also a object but it is in string format
// Json also use to convert object into string and string into object

// below is json object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// it is also a array of objects

[
    {},
    {},
    {}
]

