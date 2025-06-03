// Asynchronus 

console.log("kya bat hai")

function sayHello(){
    console.log("I would like to say Hello!!")
}
// not follow swquence
setTimeout( ()=>{
    sayHello()

} , 2000) 
for(let index=0; index<10;index++){
    console.log(index);
}