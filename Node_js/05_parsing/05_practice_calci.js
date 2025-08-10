const http = require('http')
const { requestHandler } = require('./inputhandler');  // useing {} kyu ki imported as object kyu new syntext used
const server = http.createServer(requestHandler)

const PORT = 3000

server.listen(PORT, ()=>{
  console.log(`Click Link to visite the calculator :http://localhost:${PORT}`)

})