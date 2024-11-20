import http from "http";

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "plain/text");

  res.write("res data");
  res.end();
});

server.listen(PORT, () => {
  console.log("server running at port: " + PORT);
});
