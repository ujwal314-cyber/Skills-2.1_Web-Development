import path from "path"

console.log(path);

let mypath ="C:\\Users\\M U\\OneDrive\\Desktop\\My\\Web Development\\4_Backend\\3_Files\\file.txt"

console.log(path.extname(mypath));//gives the extension of the file

console.log(path.dirname(mypath));

console.log(path.basename(mypath));//gives the name of the file

console.log(path.join("c:/","programs\\dsafds")) //though its wrong like one is forward slash and other backward path module automatically joins it as per your computer