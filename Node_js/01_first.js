const fs = require('fs')// fs module a gya hai fs= file system

fs.writeFile("output.txt","Writing File",(err)=>{
  if (err) console.log("Error ocurred");
  else console.log("file returend")

})

console.log("hello")


// REPL ===> READ , EVAL, PRINT LOOP (LOOPE ME REP KERTA RAHE GAA)

// terminal me  node like ker jo kerte hai wahi hai repl 

// use for code testing
