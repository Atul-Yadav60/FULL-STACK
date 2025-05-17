// 01 Mathematic operator

let score = 102
console.log(score)

let bonus = 25
console.log(bonus);

let totalScore = score+bonus
console.log("total Score ", totalScore);
let addition = 4+5
console.log("Addition ", addition);
let substract = 3-9
console.log("substraction : ", substract);
let mult = 3 * 4
console.log("Multiplication : ", mult);
let div = 8/3
console.log(div);

let reminder = 9 % 8
console.log(reminder)
let exponent = 2 **4
console.log(exponent);

let myscore = 100
console.log(myscore)
myscore++
console.log(myscore);
myscore--
console.log(myscore);

// 02 Comparison
let num1= 3
let num2 = 4
let num3 = 5
// note ager define nahi kiya hai our print kerte ho to reference error dega

console.log(num1 == num2)
console.log(num1 == num3)
console.log(num2 == num3)
console.log(num2 != num3)

// 03 Logical opeerator
   /*
   && -> and
   || -> or
   !  -> reverse
   */

let isLoggedin = true
let ispaid = false

console.log(isLoggedin && ispaid)

let isemailuser = true

//04  operator precidence
/*  ()  ++  -- ~ !  * /  % + - << >> >>> < <= > >= == != & ^ ' && = += -+ *= , 
*/

let sccore = 2 * 3 + 4 - 3 / 3
console.log(sccore)
