let a="HEllo"

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);

b="World"

console.log("printing "+a+" "+b);
console.log(`printing ${a} ${b}`);//string interpolation -> inserting strings

console.log(`This is "double" and this is 'single'`);

console.log("THis is an \" sequence");

console.log(a.toUpperCase());
console.log(a.toLowerCase());//These are functions so there is ()
console.log(a.length);//This is a property so there is no ()

console.log(a.slice(1,4));// 1 is included but 4 is not included

a="llHello"

console.log(a.replace("ll","99"))//only the first occurance is replaced

console.log(a.concat("44"," 6767",78))

b='  hkjhn,khb  '
console.log(b.trim())//removes white spaces

//strings are immutable they cant be changed once created