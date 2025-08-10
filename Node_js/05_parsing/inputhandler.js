const fs = require("fs");

const {sumRequestHandler} = require('./sum')

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/" && req.method === "GET") {
    // Home Page
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Practice Set</title></head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to calculator</a>
        </body> 
      </html>
    `);
    return res.end();
  }

  if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Practice Set</title></head>
        <body>
          <h1>Here is your calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="first-num" name="first" />
            <input type="text" placeholder="second-num" name="second" />
            <input type="submit" value="sum" />
          </form>
        </body> 
      </html>
    `);
    return res.end();
  }else if(req.url.toLowerCase() ==='/calculate-result' && req.method=== 'POST'){
    return sumRequestHandler(req,res);
    
  }

  // Fallback for unknown routes
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>404 - Page Not Found</h1>");
  res.end();
};

exports.requestHandler = requestHandler;
