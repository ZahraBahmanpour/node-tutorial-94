const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server listening on port 3000");
});
