const http = require('http')

const express = require('express')

const app = express();
// Adding two dummy midle ware

app.use((req,res,next)=>{
  console.log("first dummy middle ware" ,req.url,req.method);
  next();
})

app.use((req, res, next) => {
  console.log("second dummy middle ware", req.url, req.method);
  next()
});

// app.use((req, res, next) => {
//   console.log("Third dummy middle ware", req.url, req.method);
//   res.send("Welcome to Homework Page")
// });



app.get("/", (req, res,next)=>{
  console.log("handling / for get", req.url, req.method);
  res.send("<h1>Ka bey Akir / pahi gaye</h1>")
  
})

app.get("/contact", (req, res, next) => {
  console.log("handling / for get", req.url, req.method);
  res.send("call me at: xxxxxxxxxxxxxxxxxxxxxxxxx"
  );
});



const PORT = 3002

app.listen(PORT,()=>{
  console.log(`Server is running on address: http://localhost:${PORT}`)
})


