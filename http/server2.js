import { createServer } from "http";

const port = process.env.PORT;
const users = [
  { id: 1, user: "user1" },
  { id: 2, user: "user2" },
  { id: 3, user: "user3" },
];

///middlewares
const loggerMiddleWare = (req, res, next) => {
  console.log(req.url);
  next();
};
///handlers
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ messge: "Route not found" }));
  res.end();
};
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ messge: "User not found" }));
  }
  res.end();
};
const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  loggerMiddleWare(req, res, () => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/api/users" && req.method == "GET") {
      getUsersHandler(req, res);
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method == "GET") {
      getUserByIdHandler(req, res);
    } else if (req.url === "/api/users" && req.method == "POST") {
      createUserHandler(req, res);
    } else {
      notFoundHandler(req, res);
    }
  });
});

server.listen(port, () => {
  console.log("server is running at port " + port);
});
