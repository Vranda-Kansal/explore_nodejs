const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getserverData") {
    res.end("getserverdata");
  }
  res.end("hello world");
});

server.listen(3000, () => console.log("running"));
