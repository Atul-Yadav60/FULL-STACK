// sum 1 to 5
let sum = 0;
let i= 1
while(i<=5){
    sum+=i
    i++
}
console.log(sum)

// storing the number in array
let countdown = []
let tracker = 5
while (tracker >=1) {
   countdown.push(tracker)
   tracker--    
}
console.log(countdown)

// do while

let teacollection =[]
// note promp not suppoer in js . it is part of node 
// let tea = "abc";
// do {
//    tea= prompt('enetr you tea(for ouput type stop)'); // prompt use for taking input

//    if(tea!="stop"){
//     teacollection.push(tea)
//    }

// } while (tea !="stop");

// console.log(teacollection)


/*
Loop Chalanges
 */
// 1.
let teaa = ["Green tea", "Black tea", "chai", 'Oolong tea']
let selected_tea = []
let select=0;
while(true){
   if(teaa[select]!="chai"){
      selected_tea.push(teaa[select])
      select++;
   }
   else{
      selected_tea.push(teaa[select])
      break
   }
}
console.log(selected_tea)

// skip tea
let newtea = []
for(let selea=0;selea<teaa.length;selea++){
   if(teaa[selea]=="chai"){
      continue
   }
  
   newtea.push(teaa[selea])
   

}
console.log(newtea)

// for of loop and for in loops

let citiespopulation = {
   "london" : 890000,
   "new york" :840000,
   "parish": 220000,
   "berlin": 350000
}

let citypopulations = {} // it is a object with keys and value
console.log(Object.keys(citiespopulation)) // it gives all the keys
console.log(Object.values(citiespopulation)) // it gives all the values

for (const city in citiespopulation) {
   console.log(citiespopulation[city])  // give values
   citypopulations[city] = citiespopulation[city]  // there is no garrenty way to access keys
}
console.log(citypopulations)
