const sumRequestHandler = (req, res) => {
  console.log("In sum request handler");

  const body = [];

  // Collect POST body
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  // When body is fully received
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    // Safely convert to numbers
    const first = parseFloat(bodyObj.first) || 0;
    const second = parseFloat(bodyObj.second) || 0;
    const result = first + second;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Back to calculator</a>
        </body> 
      </html>
    `);
    res.end();
  });

  // Handle errors in request stream
  req.on("error", (err) => {
    console.error("Error receiving data:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  });
};

exports.sumRequestHandler = sumRequestHandler;
