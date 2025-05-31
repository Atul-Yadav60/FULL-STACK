function greet(name){
    console.log('Hello',{name} )
   // console.log('Hello ${name}');  not working here
   return "Hello"; // end the function
}

greet("Atul")


// Nested Function
function orderTea(teatype){
    function confirmorder(){
        return 'order confer'
    }
    return confirmorder()
}

let orderconfermation = orderTea("chai")
console.log(orderconfermation)



// Arrow Functions

const calculate=(price,quntatity) =>{
    return price*quntatity
                                       
}
const calculates = (price,quntatity) => price*quntatity  // it is implicit return

let total = calculate(100,50)
console.log(total)
console.log(calculates(10,25)+" implicit retun")

// taking whole function as parametetr
// Also called as first class function
function maketea(typeoftea){
    return "i am last"
}

function processTeaorder(teaFunction){
    return teaFunction('earl grey')

}

 console.log(processTeaorder(maketea))

// f

function createteamaker(name){
    return function(teaType){
        return `makeing ${teaType}`;
    };
}

let Teamaker = createteamaker("Atul");
let result = Teamaker("Green Tea")
console.log(result);