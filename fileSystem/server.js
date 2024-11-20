import fs from "fs";
import fsPromise from "fs/promises";

/////read file
//async version
fs.readFile("./users.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//sync version
const data = fs.readFileSync("./users.txt", "utf8");
console.log(data);

//promise.then
fsPromise.readFile("./users.txt", "utf8").then((data) => {
  console.log(data);
});

//async await
const readFile = async () => {
  const data = await fsPromise.readFile("./users.txt", "utf8");
  console.log(data);
};

readFile();

/////write file
const writeFile = async () => {
  await fsPromise.writeFile("./users.txt", "line 1 user data file");
};
writeFile(); 
readFile();

/////append file

const appendFile = async () => {
  await fsPromise.appendFile("./users.txt", "\nline 2 user data file append");
};
appendFile();
readFile();
