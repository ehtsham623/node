import http from "http";

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  // res.write("hello");

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello from server");
});

server.listen(PORT, () => {
  console.log("server running at port: " + PORT);
});
