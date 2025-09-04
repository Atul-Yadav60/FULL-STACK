 const http = require('http')
 const requesthandler = require('./06_eventloop_asynk')

 const server = http.createServer((req,res)=>{
  console.log(req)
 })

 const PORT = 3001

 server.listen(PORT,()=>{
  console.log(`Serveer running on address http://localhost:${PORT}`)
 })



//  hame npm ke bare me padha and node and nodemon kya hai khud ka package kaise banaye ye bhi padha :
//  PS C:\Users\Atul2\OneDrive\Desktop\Rename\FULL STACK\Node_js> npm start

// > npm-test@1.0.0 start
// > node 07_npm.js

// node:internal/modules/cjs/loader:1372
//   throw err;
//   ^
// (C:\Users\Atul2\OneDrive\Desktop\Rename\FULL 
// PS C:\Users\Atul2\OneDrive\Desktop\Rename\FULL STACK\Node_js> npm install nodemon --save-dav
// npm warn Unknown cli config "--save-dav". This will stop working in the next major version of npm.

// added 30 packages, and audited 31 packages in 3s

// 4 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities

class new