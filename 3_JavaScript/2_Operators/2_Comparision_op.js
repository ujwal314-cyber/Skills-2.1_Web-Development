let a=5;
let b=5.3;
let c="5.3";

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

console.log(c==b);// == checks only the value and as here "5.3" and 5.3 have same value returns true
console.log(c!=b);

console.log(c===b);// === checks both value and type and returns true only if both value and the type are same
console.log(c!==b);


// ternary operator

console.log(a>b ? "a is greater":"b is greater"); // using this the conditionals can be written in one line if the condition is true then the first one is executed if false then the second one is executed