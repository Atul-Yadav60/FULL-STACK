// Immediately Invoked Function Expressions (IIFE)
 
// IIFE is a function that execute imediatly. and erase global scope polution which create problem 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

