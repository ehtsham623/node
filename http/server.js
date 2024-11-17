import http from "http";

const PORT = 8000;
const server = http.createServer((req, res) => {
  res.write("hello");
  res.end();
});

server.listen(PORT, () => {
  console.log("server running : " + PORT);
});
