console.log("npm - node package manager")
// all the packages required for your node are installed using npm and when you initialize your project as a npm project "npm init" ann include -y for skipping questions 
//npm creates a package.json once initialized where all the details abt your project is stored
//and the dependencies are also stored so if the modules get deleted then you can install all those using "npm install" 

var slug=require("slugify")

let a=slug("hello world") //a slug is basically the url whih you see in the browsers where there cannot be spaces and some special characters so slugify converts them into a valid slug

console.log(a)

let b=slug("wejbfdskjbh ljfd shnlv khb*&^&^%$%$^&*(*(","_")
console.log(b)