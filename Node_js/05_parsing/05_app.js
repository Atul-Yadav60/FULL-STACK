const http = require('http')
const userRequestHandler = require('./05_parsing_req')

const server = http.createServer(userRequestHandler);

const port = 3000;

server.listen(port,()=>{
  console.log(`Server i amm using it : http://localhost:${port}`)
})


// now run app.js and parsing automaticalyy will run