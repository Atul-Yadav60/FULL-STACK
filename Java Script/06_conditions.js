// check nuumber is greater or not
let num1 = 10
let num2 = 15

if (num1 > num2 ){
    console.log(num1+" is Greater thean "+num2)
}
else{
    console.log(num2 + " is Greater thean " + num1);
}
console.log("code executed !!!!!")


// One string is equals to another string
let username = "Atul"
let username2 = "Atul"
if(username==username2){
    console.log(true)
}
else{
    console.log(false)
}

//checking a variable is a numver or not
// triple equals se proper check hota hai strict check , chek value and data type both
let value = 44
if(typeof score === 'number'){
    console.log("this is a number")
}
else {
    console.log("Not a number")
}

// boolean
let isTeaReady = false
if(isTeaReady){
    console.log("tea is  a ready")
}
else{
    console.log("Tea not is ready")
}

// check Array is empty or not 
let items = []
if (items.length==0 ){
    console.log("Array is Empty")
}

// PUSH METHODS IN aRRAY
let city = ["Mumbai","sydney"]
city[2]="Berlin"//not  safe way
console.log(city)
// safe way
city[city.length]="thane"
console.log(city)
// best way
city.push("banglore")
console.log(city)

// Pop method in Array remove last element

const last = city.pop()
console.log(city)
console.log(last)


// copy of Array
console.log("Array copy")
console.log(city);
let citycopy = city;// it creates soft copy . kyu ki memory reference is same
city.pop()
console.log(city);
console.log(citycopy)
// here we have poped after assigning but it removed in both 
// if you do this to a single number than this not
// happen



// Hard copy
 let hardcopycity =[...city]
 // other way :: hardcopycity = city.slice();
 // ... is spread opeartor
 city.pop()
 console.log(city)
 console.log(hardcopycity) 

 // merging two arrays
 let mergecity = city + hardcopycity // not got way kyu ki it converted into string
 console.log(mergecity)
 let mergecity1 = [city,hardcopycity] //  return 2d Array
 console.log(mergecity1)

 let mergecity3 = city.concat(hardcopycity); // best way
 console.log(mergecity3)

 // finding element present or not

 let ismumbai = city.includes("Mumbai") // Note it is case sensitive
 console.log(ismumbai)