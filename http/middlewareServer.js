import { createServer } from "http";

const port = process.env.PORT;

const middleWareLogger = (req, res, next) => {
  console.log(req.url);
  next();
};

const server = createServer((req, res) => {
  middleWareLogger(req, res, () => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ messge: "Middleware example" }));
    res.end();
  });
});

server.listen(port, () => {
  console.log("server is running at port " + port);
});
