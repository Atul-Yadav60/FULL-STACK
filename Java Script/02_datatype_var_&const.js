//01 Different way to print
console.log("hello");
process.stdout.write("atul");
process.stdout.write("yadav");

console.table({city:"Mumbai"});

// 02 Data type

/*
String
Number
Boolean
Bigint
Undefine: dont have definition defined in futuure
null:Empty
Object
symbol
*/

// old way
 var score1 =102;
 console.log(score1);
//new way
let score = 102;
console.log(score);

let namee = "Atul yadav.com";
console.log(namee);

let isLoggedin = false;
console.log(isLoggedin);

//object
let teaType=["lemon","Orange","oolong tea"];
console.log(teaType);

let user = {firstname:"Atul", lastname: "Yadav"};
console.log(user);

// borrowing variable
let getscore = score;
console.log(getscore);


// 03 Changes
let gameName = "Spiderman";
console.log(gameName);
gameName="batman";

console.log(gameName)

const username = "Atul.com" // you cant change it if change gives type error



