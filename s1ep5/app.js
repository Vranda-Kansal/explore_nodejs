const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getserverData") {
    res.end("getserverdata");
  }
  res.end("hello world");
});

server.listen(3000, () => console.log("running"));

// this is not a best way to write the server
// we do that using express
