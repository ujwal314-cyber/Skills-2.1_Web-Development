// import {d,a} from "4_1_named_export.js" //this will give an error
import {d,a} from "./4_1_named_export.js"

console.log(a,d);

//default export

//you can use any name

import anyname from "./4_2_default_export.js"
console.log(anyname);