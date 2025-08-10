// for request we can use get /**
 // req.url, req.method etc.

 const http = require('http')

 const server = http.createServer((req, res)=>{
  // res.setHeader('Content-Type','json')
  // Sending response  ROUTING REQUES

  // TAKING USER INPUT

  if(req.url ==='/'){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like/share/subscibe</h1></body>");
    res.write("<body><h1>Like/share/subscibe/ Ye URL HAI</h1></body>");
    res.write("</html>");
    return res.end();

  }
  else if(req.url==='/product'){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like/share/subscibe</h1></body>");
    res.write("<body><h1>Like/share/subscibe YE Product Hai</h1></body>");
    res.write("</html>");
    return res.end();

  }
  else{
    res.setHeader("Content-Type", "text/html"); //
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like/share/subscibe</h1></body>");
    res.write("</html>");
    return res.end();

  }
  
 })

 const PORT =  3000;

 server.listen(PORT,()=>{
   console.log(`I MA wrinnning it bro on port :${PORT}`)
 })


 // alag alag Link per alag alag response aayegaa based on url 