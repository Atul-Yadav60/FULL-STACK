const http = require('http');

// external module
const express = require('express');

const app = express();

app.use((req,res,next)=>{
  console.log("Came in first middleware",req.url,req.method);
  res.send('<p>Welcome to My page fro</p>')
  next();
})

app.use((req, res, next) => {
  console.log("Came in Second middleware", req.url, req.method);
  res.send('<p>Exit to my pages bro</p>')
});


const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})
