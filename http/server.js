import http from "http";

const PORT = 8000;
const server = http.createServer((req, res) => {
  // res.write("hello");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      status: "true",
      message: "success",
      data: { name: "ehtsham ul haq" },
    }),
  );
});

server.listen(PORT, () => {
  console.log("server running at port: " + PORT);
});
