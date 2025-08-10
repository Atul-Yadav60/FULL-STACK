
const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  // Buffering Chunks 
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = []; // this array used to store chunks 
    req.on("data", (chunk) => {
      body.push(chunk); // chucns added too body array 
    });
      // make sure that now data is stop comming in chunks
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString(); // sare chunks to koin ker raha hu . converting into string 
      const params = new URLSearchParams(fullBody); // params = parametrs. it convert fullbody into key value pair

      // const bodyObject = {}
      // for(const [key,val] of params.entries()){
      //   bodyObject[key]=val;
      // }

      // coment wale ka simplified vversion

      const bodyObject = Object.fromEntries(params);  // used to store key value pare 

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject)); // user.txt file me write ker rahe hai 

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
    return;
  }

  // Default route
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
};


module.exports= userRequestHandler;




