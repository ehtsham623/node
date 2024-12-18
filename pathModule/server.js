import path from "path";
import { fileURLToPath } from "url";

import os from "os";
console.log(os.userInfo()); //user info os thisuser in system
// {
//   uid: 501,
//   gid: 20,
//   username: 'ehtsham',
//   homedir: '/Users/ehtsham',
//   shell: '/bin/zsh'
// }

////////////path module
const filePath = "./user/file.txt";

//basename
console.log(path.basename(filePath)); //file.txt
//dirname
console.log(path.dirname(filePath)); //./user
//extension
console.log(path.extname(filePath)); //.txt

//parse
console.log(path.parse(filePath)); //complete obj
// {
//   root: '',
//   dir: './user',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

//file path and directory path
const __filename = fileURLToPath(import.meta.url); //Users/ehtsham/Projects/node/node/pathModule/server.js
const __dirname = path.dirname(__filename); //Users/ehtsham/Projects/node/node/pathModule
console.log(__filename, __dirname);

//join
const filePathJoin = path.join(__dirname, "user", "text.txt"); ///Users/ehtsham/Projects/node/node/pathModule/user/text.txt
console.log(filePathJoin);
