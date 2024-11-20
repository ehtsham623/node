import { createServer } from "http";

const port = process.env.PORT;

const server = createServer((req, res) => {
  console.log(req.url);
});

server.listen(port, () => {
  console.log("server is rumming at port " + port);
});
