// const fs =require("fs/promises")

// let a = await fs.readFile("append.txt")//as this is already inside a module there is no need for enclosing it inside a async function 
//but doestnt work for commonjs

// console.log(a.toString())

import fs from "fs/promises"

let a = await fs.readFile("append.txt")
console.log(a.toString());
console.log("\n\nNext file\n\n");

let b= await fs.appendFile("append.txt","\n\n\n\nthis is an example")
console.log(a.toString(),b)