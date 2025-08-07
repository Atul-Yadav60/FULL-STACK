// SOME NOTES 
//1. fs(file system): handles file operations like reading and writing files

// 2. http: create http server and makes http request

// 3. path: provides utilities for handling and transfering files

// 4. path.os: provides operating sysytem-related utility methods and properties.

// 5. events: handles events and events driven progrraming

// 6. crypto: provides cryptographic functionalities like hashing and encryption

// 7. https: launch a ssl server

// 8. url: prases and formates url stringd

// to use module swe use required key word


// Creating First node server

// const http = require('http')

// function requestListner(req, res){
//   console.log(req)
// }

// http.createServer(requestListner);

// New Syntax

const http = require('http')
const server = http.createServer(function(req,res){
  console.log(req);
})

// now listining the seerver

const port = 3000

server.listen(port,()=>{
  console.log(`server is running on port :${port}`)
}) // 3000 is port number: 1000 ports are safe like 1000,2000,3000,4000,..


//